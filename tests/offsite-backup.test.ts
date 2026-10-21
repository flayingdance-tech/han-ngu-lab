import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,readFileSync,readdirSync,rmSync} from 'node:fs';
import {join,relative,resolve,isAbsolute} from 'node:path';
import {tmpdir} from 'node:os';
import {randomBytes} from 'node:crypto';
import {openDatabase} from '../server/database';
import {createOperationsBackup} from '../server/operations-backup';
import {verifyOffsiteBackup} from '../scripts/verify-offsite-backup.mjs';

test('offsite verifier decrypts a real saved backup and rejects corruption, wrong keys and stale manifests',async()=>{
 const root=mkdtempSync(join(tmpdir(),'hnl-offsite-test-')),source=join(root,'synthetic.sqlite'),key=join(root,'key'),directory=join(root,'archives');
 const db=openDatabase(source);
 try{
  db.prepare('INSERT INTO users(id,email,name,password,created_at) VALUES(?,?,?,?,?)').run('fixture','fixture@example.test','Synthetic','unchanged-hash',1);
  writeFileSync(key,randomBytes(32),{mode:0o600});
  const record=await createOperationsBackup({databasePath:source,backupDirectory:directory,keyFile:key});
  const archive=join(directory,record.file),manifest=archive+'.json';
  // Only the fixture's sourcePath is adapted; encrypted DB bytes remain unchanged.
  writeFileSync(manifest,JSON.stringify({...record,sourcePath:'/var/lib/han-ngu-lab/hanngulab.sqlite'}));
  assert.equal(verifyOffsiteBackup(archive,manifest,key).offsiteRestoreVerified,true);
  assert.equal(verifyOffsiteBackup(archive,manifest,key).inventory.counts.users,1);
  const badKey=join(root,'wrong-key');writeFileSync(badKey,randomBytes(32),{mode:0o600});
  assert.throws(()=>verifyOffsiteBackup(archive,manifest,badKey));
  const saved=readFileSync(archive);writeFileSync(archive,Buffer.concat([saved,Buffer.from('corrupt')]));
  assert.throws(()=>verifyOffsiteBackup(archive,manifest,key),/checksum/);writeFileSync(archive,saved);
  writeFileSync(manifest,JSON.stringify({...record,sourcePath:'/var/lib/han-ngu-lab/hanngulab.sqlite',createdAt:'2000-01-01T00:00:00Z'}));
  assert.throws(()=>verifyOffsiteBackup(archive,manifest,key),/stale/);
  assert.ok(!readdirSync(directory).some(n=>n.startsWith('.restore-offsite-')));
  assert.equal(db.prepare('SELECT password FROM users').get()?.password,'unchanged-hash');
 }finally{db.close();const child=relative(resolve(tmpdir()),resolve(root));assert.ok(child&&!child.startsWith('..')&&!isAbsolute(child));rmSync(root,{recursive:true,force:true});}
});
