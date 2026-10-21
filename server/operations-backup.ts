import { DatabaseSync, backup } from 'node:sqlite';
import { randomBytes, randomUUID, createCipheriv, createDecipheriv, createHash } from 'node:crypto';
import { chmodSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, realpathSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

export function databaseInventory(db: DatabaseSync) {
  const integrity = db.prepare('PRAGMA integrity_check').all();
  if (integrity.length !== 1 || Object.values(integrity[0])[0] !== 'ok') throw new Error('SQLite integrity check failed');
  if (db.prepare('PRAGMA foreign_key_check').all().length) throw new Error('SQLite foreign-key check failed');
  const names = db.prepare("SELECT name FROM sqlite_schema WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name").all();
  const counts = Object.fromEntries(names.map(row => [String(row.name), Number(db.prepare(`SELECT COUNT(*) AS n FROM "${String(row.name).replaceAll('"', '""')}"`).get()?.n)]));
  return { schemaVersion: Number(db.prepare('PRAGMA user_version').get()?.user_version), counts };
}

const pattern = /^\d{8}T\d{6}Z-[a-f0-9]{8}\.sqlite\.enc$/;
const sha = (data: Buffer) => createHash('sha256').update(data).digest('hex');
function removeOwnFile(file: string, root: string) {
  if (realpathSync(dirname(file)) !== root || lstatSync(file).isSymbolicLink()) throw new Error('Unsafe backup cleanup path');
  unlinkSync(file);
}

/** WAL-safe online SQLite backup; encrypted full DB includes sessions and must remain private. */
export async function createOperationsBackup(options: { databasePath: string; backupDirectory: string; keyFile: string; retentionDays?: number }) {
  const days = options.retentionDays ?? 14;
  if (!Number.isInteger(days) || days < 7 || days > 365) throw new Error('Backup retention must be 7–365 days');
  const source = resolve(options.databasePath), keyPath = resolve(options.keyFile);
  if (!existsSync(source) || lstatSync(source).isSymbolicLink() || !lstatSync(source).isFile()) throw new Error('A real existing database is required');
  if (!existsSync(keyPath) || lstatSync(keyPath).isSymbolicLink()) throw new Error('A private backup key file is required');
  const key = readFileSync(keyPath);
  if (key.length !== 32) throw new Error('Backup key must contain exactly 32 bytes');
  if (process.platform !== 'win32' && (lstatSync(keyPath).mode & 0o077)) throw new Error('Backup key permissions must exclude group and other users');
  mkdirSync(options.backupDirectory, { recursive: true, mode: 0o700 });
  const root = realpathSync(options.backupDirectory);
  if (root === dirname(source) || root === dirname(keyPath)) throw new Error('Backup directory must be separate from database and key directories');
  if (process.platform !== 'win32') chmodSync(root, 0o700);
  const id = randomUUID().slice(0, 8), createdAt = new Date().toISOString();
  const name = `${createdAt.replaceAll('-', '').replaceAll(':', '').replace(/\.\d{3}Z$/, 'Z')}-${id}.sqlite.enc`;
  const target = join(root, name), snapshot = join(root, `.snapshot-${id}.sqlite`), restored = join(root, `.restore-${id}.sqlite`);
  let snapshotDb: DatabaseSync | undefined, restoredDb: DatabaseSync | undefined;
  const live = new DatabaseSync(source, { readOnly: true });
  try {
    await backup(live, snapshot);
    chmodSync(snapshot, 0o600);
    snapshotDb = new DatabaseSync(snapshot, { readOnly: true });
    const inventory = databaseInventory(snapshotDb);
    snapshotDb.close(); snapshotDb = undefined;
    const iv = randomBytes(12), cipher = createCipheriv('aes-256-gcm', key, iv), plain = readFileSync(snapshot);
    const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]); plain.fill(0);
    const envelope = Buffer.from(JSON.stringify({ format: 'hnl-sqlite-aes256gcm-v1', iv: iv.toString('base64'), tag: cipher.getAuthTag().toString('base64'), ciphertext: ciphertext.toString('base64') }));
    writeFileSync(target, envelope, { flag: 'wx', mode: 0o600 });
    // Restore from the saved bytes, not from the plaintext source snapshot.
    const saved = JSON.parse(readFileSync(target, 'utf8'));
    const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(saved.iv, 'base64'));
    decipher.setAuthTag(Buffer.from(saved.tag, 'base64'));
    const restoredBytes = Buffer.concat([decipher.update(Buffer.from(saved.ciphertext, 'base64')), decipher.final()]);
    writeFileSync(restored, restoredBytes, { flag: 'wx', mode: 0o600 }); restoredBytes.fill(0);
    restoredDb = new DatabaseSync(restored, { readOnly: true });
    if (JSON.stringify(databaseInventory(restoredDb)) !== JSON.stringify(inventory)) throw new Error('Restored backup inventory mismatch');
    restoredDb.close(); restoredDb = undefined;
    const result = { format: 'hnl-operations-backup-v1', createdAt, sourcePath: source, file: name, encryptedSha256: sha(envelope), restoredAndIntegrityChecked: true, inventory };
    writeFileSync(`${target}.json`, JSON.stringify(result, null, 2), { flag: 'wx', mode: 0o600 });
    // Only our old, independently verified backup pairs; never source DB, arbitrary files or symlinks.
    for (const old of readdirSync(root).filter(file => pattern.test(file) && file !== name)) {
      const file = join(root, old), metadata = `${file}.json`;
      if (!existsSync(metadata) || lstatSync(file).isSymbolicLink() || lstatSync(metadata).isSymbolicLink()) continue;
      let record;
      try { record = JSON.parse(readFileSync(metadata, 'utf8')); } catch { continue; }
      if (record.file !== old || record.format !== result.format || record.restoredAndIntegrityChecked !== true || !Number.isFinite(Date.parse(record.createdAt)) || Date.parse(record.createdAt) >= Date.now() - days * 86400000) continue;
      if (record.encryptedSha256 !== sha(readFileSync(file))) continue;
      removeOwnFile(file, root); removeOwnFile(metadata, root);
    }
    return result;
  } finally {
    live.close(); snapshotDb?.close(); restoredDb?.close(); key.fill(0);
    for (const temporary of [snapshot, restored, `${snapshot}-wal`, `${snapshot}-shm`, `${restored}-wal`, `${restored}-shm`]) if (existsSync(temporary)) removeOwnFile(temporary, root);
  }
}
