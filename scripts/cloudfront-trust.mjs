import { isIP } from 'node:net';
import { readFileSync, writeFileSync, renameSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

export function cloudFrontCidrs(document) {
  if (!/^\d{10,}$/.test(document?.syncToken ?? '')) throw Error('Invalid AWS range version');
  const values = [...(document.prefixes ?? []).filter(p => p.service === 'CLOUDFRONT_ORIGIN_FACING').map(p => p.ip_prefix),
    ...(document.ipv6_prefixes ?? []).filter(p => p.service === 'CLOUDFRONT_ORIGIN_FACING').map(p => p.ipv6_prefix)];
  if (values.length < 2 || values.length > 1000) throw Error('Invalid CloudFront range count');
  for (const value of values) {
    if (typeof value !== 'string' || !/^[\da-fA-F:.]+\/\d{1,3}$/.test(value)) throw Error('Invalid CIDR');
    const [ip, width] = value.split('/'); const family = isIP(ip); const mask = Number(width);
    if (!family || mask < (family === 4 ? 16 : 32) || mask > (family === 4 ? 32 : 128)) throw Error('Overbroad CIDR');
    if (/^(0\.|10\.|127\.|169\.254\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip) || /^(::|f[cd]|fe80)/i.test(ip)) throw Error('Nonpublic CIDR');
  }
  return [...new Set(values)].sort();
}

async function refresh() {
  if (process.getuid?.() !== 0) throw Error('Root required');
  const destination = '/etc/caddy/hnl-cloudfront-trust.caddy';
  const statusPath = '/var/lib/han-ngu-lab-proxy/ranges.json';
  let previous = null;
  if (existsSync(statusPath)) previous = JSON.parse(readFileSync(statusPath, 'utf8'));
  let document; let failure = false;
  try {
    const response = await fetch('https://ip-ranges.amazonaws.com/ip-ranges.json', { signal: AbortSignal.timeout(20000), redirect: 'error' });
    if (!response.ok) throw Error('AWS range HTTP failure');
    const text = await response.text(); if (text.length > 5_000_000) throw Error('AWS range response too large');
    document = JSON.parse(text); cloudFrontCidrs(document);
  } catch {
    if (!previous || Date.now() - Date.parse(previous.fetchedAt) <= 7 * 86400000) throw Error('Range refresh failed; previous configuration retained');
    failure = true;
  }
  // Expired trust fails closed: a remote peer cannot forge the client address.
  const cidrs = failure ? ['127.0.0.1/32'] : cloudFrontCidrs(document);
  const candidate = `trusted_proxies static ${cidrs.join(' ')}\n`;
  const old = readFileSync(destination, 'utf8');
  if (candidate !== old) {
    const temporary = `${destination}.next`; writeFileSync(temporary, candidate, { mode: 0o644 }); renameSync(temporary, destination);
    try {
      execFileSync('/usr/local/bin/caddy', ['validate', '--config', '/etc/caddy/Caddyfile'], { stdio: 'pipe' });
      execFileSync('/usr/bin/systemctl', ['reload', 'caddy'], { stdio: 'pipe' });
    } catch {
      writeFileSync(temporary, old, { mode: 0o644 }); renameSync(temporary, destination);
      execFileSync('/usr/bin/systemctl', ['reload', 'caddy'], { stdio: 'pipe' });
      throw Error('Candidate rejected; previous trust restored');
    }
  }
  if (failure) throw Error('AWS ranges stale beyond seven days; remote proxy trust disabled');
  const status = { fetchedAt: new Date().toISOString(), syncToken: document.syncToken, count: cidrs.length, source: 'https://ip-ranges.amazonaws.com/ip-ranges.json' };
  writeFileSync(statusPath, JSON.stringify(status, null, 2) + '\n', { mode: 0o600 });
  console.log(JSON.stringify(status));
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) refresh().catch(() => { console.error('CloudFront trust refresh failed; inspect service status.'); process.exitCode = 1; });
