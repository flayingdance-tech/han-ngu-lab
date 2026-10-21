// Install root-owned. Exports encrypted bytes only; never reads/copies the encryption key.
import { readdirSync, readFileSync, lstatSync, mkdtempSync, copyFileSync, chmodSync, chownSync, constants } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

if(process.getuid?.()!==0)throw Error('Run the installed exporter as root');
const root='/var/backups/han-ngu-lab',source='/var/lib/han-ngu-lab/hanngulab.sqlite';
const candidates=[];
for(const filename of readdirSync(root).filter(n=>/^\d{8}T\d{6}Z-[a-f0-9]{8}\.sqlite\.enc\.json$/.test(n))){
  const file=join(root,filename),stat=lstatSync(file);
  if(!stat.isFile()||stat.isSymbolicLink()||stat.size>16384)continue;
  const record=JSON.parse(readFileSync(file,'utf8'));
  if(record.format!=='hnl-operations-backup-v1'||record.sourcePath!==source||record.file+'.json'!==filename||record.restoredAndIntegrityChecked!==true||!Number.isFinite(Date.parse(record.createdAt)))continue;
  candidates.push(record);
}
candidates.sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt));
const record=candidates[0];
if(!record||Date.now()-Date.parse(record.createdAt)>48*3600000||Date.parse(record.createdAt)>Date.now()+60000)throw Error('No fresh restore-verified backup within 48 hours');
const artifact=join(root,record.file),stat=lstatSync(artifact);
if(!stat.isFile()||stat.isSymbolicLink()||stat.size>512*1024*1024)throw Error('Invalid or oversized encrypted artifact');
if(createHash('sha256').update(readFileSync(artifact)).digest('hex')!==record.encryptedSha256)throw Error('Encrypted backup checksum mismatch');
const uid=Number(execFileSync('/usr/bin/id',['-u','ubuntu'],{encoding:'utf8'}).trim()),gid=Number(execFileSync('/usr/bin/id',['-g','ubuntu'],{encoding:'utf8'}).trim());
const directory=mkdtempSync('/home/ubuntu/.hnl-offsite-export-');chmodSync(directory,0o700);
for(const filename of [record.file,record.file+'.json']){
  const target=join(directory,filename);copyFileSync(join(root,filename),target,constants.COPYFILE_EXCL);chmodSync(target,0o600);chownSync(target,uid,gid);
}
chownSync(directory,uid,gid);
console.log(JSON.stringify({directory,file:record.file,encryptedSha256:record.encryptedSha256,createdAt:record.createdAt}));
