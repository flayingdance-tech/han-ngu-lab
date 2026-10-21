import { DatabaseSync } from 'node:sqlite';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { seedLessons } from '../content/lessons';
import { importExistingLessons, releasePolicySchema } from '../server/content-release';
import policyInput from '../content/release-policy.json';
import { seedMedia } from '../server/media-editorial';
import { audioManifestSchema } from '../lib/audio-catalog';
import { podcastCatalogSchema } from '../lib/podcast';

const policy=releasePolicySchema.parse(policyInput);
const apply = process.argv.includes('--apply'), databasePath = resolve(process.env.DATABASE_PATH ?? '/var/lib/han-ngu-lab/hanngulab.sqlite');
if (!existsSync(databasePath)) throw new Error('Import requires an existing database; it never creates or replaces a production database');
if (apply) {
  const manifestPath = process.argv.find(arg => arg.startsWith('--backup-manifest='))?.slice('--backup-manifest='.length);
  if (!manifestPath) throw new Error('Apply requires a freshly restore-verified encrypted backup manifest');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (manifest.format !== 'hnl-operations-backup-v1' || manifest.sourcePath !== databasePath || manifest.restoredAndIntegrityChecked !== true || !Number.isFinite(Date.parse(manifest.createdAt)) || Date.now() - Date.parse(manifest.createdAt) > 15 * 60_000 || Date.parse(manifest.createdAt) > Date.now() + 60_000 || !/^\d{8}T\d{6}Z-[a-f0-9]{8}\.sqlite\.enc$/.test(manifest.file)) throw new Error('Invalid, stale or unrelated backup manifest');
  const bytes = readFileSync(join(dirname(manifestPath), manifest.file));
  if (createHash('sha256').update(bytes).digest('hex') !== manifest.encryptedSha256) throw new Error('Backup checksum mismatch');
}
const db = new DatabaseSync(databasePath, { readOnly: !apply });
db.exec('PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000');
try {
  const audio=audioManifestSchema.parse(JSON.parse(readFileSync('public/audio/manifest.json','utf8')));
  const podcasts=policy.podcastIds.length?podcastCatalogSchema.parse(JSON.parse(readFileSync('media/podcasts/catalog.json','utf8'))):null;
  const lessons=importExistingLessons(db,seedLessons,policy,apply);
  if(apply){db.exec('BEGIN IMMEDIATE');try{seedMedia(db,audio,podcasts,policy);db.exec('COMMIT');}catch(error){db.exec('ROLLBACK');throw error;}}
  console.log(JSON.stringify(lessons));
} finally { db.close(); }
