import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, relative, resolve, isAbsolute } from 'node:path';
import { randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { openDatabase } from '../server/database';
import { createOperationsBackup } from '../server/operations-backup';

test('release CLI refuses absent, stale or corrupt backup before writes and imports after actual restore validation',async()=>{
  const root=mkdtempSync(join(tmpdir(),'hnl-release-cli-')), databasePath=join(root,'synthetic.sqlite'), keyFile=join(root,'key'), backupDirectory=join(root,'backups');
  const db=openDatabase(databasePath);
  db.prepare('INSERT INTO users(id,email,name,password,created_at) VALUES(?,?,?,?,?)').run('existing','existing@example.test','Synthetic','unchanged',1);
  writeFileSync(keyFile,randomBytes(32),{mode:0o600});
  const run=(...args:string[])=>spawnSync(process.execPath,['--import','tsx','scripts/content-release.ts',...args],{env:{...process.env,DATABASE_PATH:databasePath},encoding:'utf8',timeout:20000});
  try{
    assert.equal(run().status,0);assert.equal(db.prepare('SELECT COUNT(*) AS n FROM lessons').get()?.n,0);
    assert.notEqual(run('--apply').status,0);
    const saved=await createOperationsBackup({databasePath,keyFile,backupDirectory});
    const manifest=join(backupDirectory,`${saved.file}.json`);
    const stale=join(backupDirectory,'stale.json');
    writeFileSync(stale,JSON.stringify({...saved,createdAt:'2020-01-01T00:00:00Z'}));
    assert.notEqual(run('--apply',`--backup-manifest=${stale}`).status,0);
    const corrupt=join(backupDirectory,'corrupt.json');
    writeFileSync(corrupt,JSON.stringify({...saved,encryptedSha256:'0'.repeat(64)}));
    assert.notEqual(run('--apply',`--backup-manifest=${corrupt}`).status,0);
    assert.equal(db.prepare('SELECT COUNT(*) AS n FROM lessons').get()?.n,0);
    const before=db.prepare('SELECT * FROM users').all();
    const applied=run('--apply',`--backup-manifest=${manifest}`);
    assert.equal(applied.status,0,applied.stderr);
    assert.equal(db.prepare('SELECT COUNT(*) AS n FROM lessons').get()?.n,16);
    assert.equal(JSON.parse(run('--apply',`--backup-manifest=${manifest}`).stdout).newRevisions,0);
    assert.deepEqual(db.prepare('SELECT * FROM users').all(),before);
    assert.equal(JSON.parse(readFileSync(manifest,'utf8')).restoredAndIntegrityChecked,true);
  }finally{
    db.close();const child=relative(resolve(tmpdir()),resolve(root));assert.ok(child&&!child.startsWith('..')&&!isAbsolute(child));rmSync(root,{recursive:true,force:true});
  }
});
