import test from 'node:test';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { mkdtempSync, writeFileSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { join, relative, resolve, isAbsolute } from 'node:path';
import { tmpdir } from 'node:os';
import { openDatabase } from '../server/database';
import { createOperationsBackup } from '../server/operations-backup';

test('online WAL backup restores encrypted full SQLite without touching live users or sessions', async () => {
  const folder = mkdtempSync(join(tmpdir(), 'hnl-wal-backup-'));
  const source = join(folder, 'live.sqlite'), key = join(folder, 'key'), directory = join(folder, 'backups');
  const db = openDatabase(source);
  try {
    db.exec('PRAGMA wal_autocheckpoint=0');
    db.prepare('INSERT INTO users(id,email,name,password,created_at) VALUES(?,?,?,?,?)').run('synthetic-user', 'fixture@example.test', 'Synthetic', 'fixture-hash', 1);
    db.prepare('INSERT INTO sessions VALUES(?,?,?)').run('fixture-digest', 'synthetic-user', 9999999999999);
    writeFileSync(key, randomBytes(32), { mode: 0o600 });
    writeFileSync(join(folder, 'not-a-database.txt'), 'must remain');
    const result = await createOperationsBackup({ databasePath: source, backupDirectory: directory, keyFile: key });
    assert.equal(result.restoredAndIntegrityChecked, true);
    assert.equal(result.inventory.counts.users, 1); assert.equal(result.inventory.counts.sessions, 1);
    assert.equal(db.prepare('SELECT COUNT(*) AS n FROM sessions').get()?.n, 1);
    assert.ok(!readFileSync(join(directory, result.file), 'utf8').includes('fixture@example.test'));
    assert.ok(!readdirSync(directory).some(f => f.startsWith('.snapshot') || f.startsWith('.restore')));
    const again = await createOperationsBackup({ databasePath: source, backupDirectory: directory, keyFile: key });
    assert.notEqual(result.file, again.file); assert.equal(readdirSync(directory).length, 4);
    assert.equal(readFileSync(join(folder, 'not-a-database.txt'), 'utf8'), 'must remain');
    await assert.rejects(createOperationsBackup({ databasePath: source + '.missing', backupDirectory: directory, keyFile: key }));
  } finally {
    db.close(); const inside = relative(resolve(tmpdir()), resolve(folder)); assert.ok(inside && !inside.startsWith('..') && !isAbsolute(inside)); rmSync(folder, { recursive: true, force: true });
  }
});
