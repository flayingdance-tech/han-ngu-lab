import { readFileSync, existsSync, mkdirSync, copyFileSync, writeFileSync, renameSync, lstatSync } from 'node:fs';
import { basename, join } from 'node:path';
import { createHash } from 'node:crypto';
import { publicPodcastRelease } from '../server/podcast-release';
import { releasePolicySchema, betaNotice } from '../server/content-release';
import { audioManifestSchema } from '../lib/audio-catalog';
import policyInput from '../content/release-policy.json';

const policy = releasePolicySchema.parse(policyInput), apply = process.argv.includes('--apply');
if (!policy.betaPublicationApproved || !policy.approvedAt) throw new Error('Owner beta release approval is still pending; no assets changed');
const hash = (file: string) => createHash('sha256').update(readFileSync(file)).digest('hex');
const manifestPath = 'public/audio/manifest.json', originalManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const manifest = audioManifestSchema.parse(originalManifest);
for (const entry of Object.values(manifest.entries)) for (const file of [entry.normal, entry.slow]) if (!existsSync(join('public', file))) throw new Error('Incomplete lesson audio bank');
let podcastCount = 0, files = 0;
if (policy.podcastIds.length) {
  const root = '.local/podcasts/rendered', target = 'media/podcasts';
  const catalog = publicPodcastRelease(JSON.parse(readFileSync(join(root, 'catalog.json'), 'utf8')), policy);
  const assets = [...new Map(catalog.episodes.flatMap(ep => Object.values(ep.assets)).map(asset => [asset.url, asset])).values()];
  for (const asset of assets) {
    const source = join(root, basename(asset.url)), destination = join(target, basename(asset.url));
    if (!existsSync(source) || lstatSync(source).isSymbolicLink() || hash(source) !== asset.sha256) throw new Error('Podcast source is absent, a symlink or changed');
    if (existsSync(destination) && (lstatSync(destination).isSymbolicLink() || hash(destination) !== asset.sha256)) throw new Error('Immutable published media collision');
  }
  if (apply) {
    mkdirSync(target, { recursive: true });
    for (const asset of assets) { const file = basename(asset.url); if (!existsSync(join(target, file))) copyFileSync(join(root, file), join(target, file), 1); }
    writeFileSync(join(target, 'catalog.next.json'), JSON.stringify(catalog, null, 2));
    renameSync(join(target, 'catalog.next.json'), join(target, 'catalog.json'));
  }
  podcastCount = catalog.episodes.length; files = assets.length;
}
if (apply && policy.lessonIds.length) {
  writeFileSync('public/audio/manifest.next.json', JSON.stringify({ ...originalManifest, betaRelease: { approvedAt: policy.approvedAt, notice: betaNotice } }, null, 2));
  renameSync('public/audio/manifest.next.json', manifestPath);
}
console.log(JSON.stringify({ applied: apply, lessons: policy.lessonIds.length, podcasts: podcastCount, podcastFiles: files, audioEntries: Object.keys(manifest.entries).length, humanReviewChanged: false }));
