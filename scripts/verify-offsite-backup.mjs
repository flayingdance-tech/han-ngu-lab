import { readFileSync, writeFileSync, unlinkSync, existsSync, lstatSync, realpathSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { createDecipheriv, createHash, randomUUID } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { pathToFileURL } from 'node:url';
import { databaseInventory } from '../server/operations-backup.ts';

export function verifyOffsiteBackup(archivePath,manifestPath,keyPath){
  const [archive,metadata,keyFile]=[archivePath,manifestPath,keyPath].map(p=>resolve(p));
  for(const path of [archive,metadata,keyFile])if(!lstatSync(path).isFile()||lstatSync(path).isSymbolicLink())throw Error('Expected regular non-symlink files');
  if(dirname(keyFile)===dirname(archive))throw Error('Keep the key separate from the archive directory');
  if(lstatSync(archive).size>512*1024*1024||lstatSync(metadata).size>16384)throw Error('Backup size exceeds safe verification bounds');
  const manifest=JSON.parse(readFileSync(metadata,'utf8'));
  if(manifest.format!=='hnl-operations-backup-v1'||manifest.sourcePath!=='/var/lib/han-ngu-lab/hanngulab.sqlite'||manifest.restoredAndIntegrityChecked!==true||!/^\d{8}T\d{6}Z-[a-f0-9]{8}\.sqlite\.enc$/.test(manifest.file)||!Number.isFinite(Date.parse(manifest.createdAt))||Date.parse(manifest.createdAt)>Date.now()+60000||Date.now()-Date.parse(manifest.createdAt)>48*3600000)throw Error('Invalid or stale backup manifest');
  const saved=readFileSync(archive);
  if(createHash('sha256').update(saved).digest('hex')!==manifest.encryptedSha256)throw Error('Offsite archive checksum mismatch');
  const envelope=JSON.parse(saved.toString('utf8')),key=readFileSync(keyFile);
  if(envelope.format!=='hnl-sqlite-aes256gcm-v1'||key.length!==32){key.fill(0);throw Error('Invalid envelope or key');}
  const root=realpathSync(dirname(archive)),restored=join(root,`.restore-offsite-${randomUUID()}.sqlite`);
  let db;
  try{
    const decipher=createDecipheriv('aes-256-gcm',key,Buffer.from(envelope.iv,'base64'));decipher.setAuthTag(Buffer.from(envelope.tag,'base64'));
    const bytes=Buffer.concat([decipher.update(Buffer.from(envelope.ciphertext,'base64')),decipher.final()]);
    try{writeFileSync(restored,bytes,{flag:'wx',mode:0o600});}finally{bytes.fill(0);}
    db=new DatabaseSync(restored,{readOnly:true});const inventory=databaseInventory(db);
    if(JSON.stringify(inventory)!==JSON.stringify(manifest.inventory))throw Error('Offsite restored inventory mismatch');
    return {file:manifest.file,createdAt:manifest.createdAt,encryptedSha256:manifest.encryptedSha256,offsiteRestoreVerified:true,inventory};
  }finally{
    db?.close();key.fill(0);
    for(const path of [restored,restored+'-wal',restored+'-shm'])if(existsSync(path)){
      if(realpathSync(dirname(path))!==root||lstatSync(path).isSymbolicLink())throw Error('Unsafe restore cleanup path');
      unlinkSync(path);
    }
  }
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  try{
    if(process.argv.length!==5)throw Error('Expected archive, manifest and separate key file');
    console.log(JSON.stringify(verifyOffsiteBackup(...process.argv.slice(2))));
  }catch{console.error('Offsite verification failed; no secret values were logged.');process.exitCode=1;}
}
