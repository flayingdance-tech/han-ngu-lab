import test from 'node:test';
import assert from 'node:assert/strict';
import { cloudFrontCidrs } from '../scripts/cloudfront-trust.mjs';

test('CloudFront origin trust excludes general AWS ranges and rejects unsafe or malformed CIDRs', () => {
  const source = { syncToken: '1792573625', prefixes: [
    { service: 'AMAZON', ip_prefix: '0.0.0.0/0' },
    { service: 'CLOUDFRONT_ORIGIN_FACING', ip_prefix: '130.176.0.0/18' },
  ], ipv6_prefixes: [{ service: 'CLOUDFRONT_ORIGIN_FACING', ipv6_prefix: '2600:9000:1000::/36' }] };
  assert.deepEqual(cloudFrontCidrs(source), ['130.176.0.0/18', '2600:9000:1000::/36']);
  for (const ip_prefix of ['0.0.0.0/0', '127.0.0.1/32', '10.1.0.0/16', '1.2.3.4/16\ntrusted_proxies static 0.0.0.0/0', 'invalid/24', '2600::/0']) {
    assert.throws(() => cloudFrontCidrs({ ...source, prefixes: [{ service: 'CLOUDFRONT_ORIGIN_FACING', ip_prefix }] }));
  }
});
