import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { audioManifestSchema } from '../lib/audio-catalog';

const stamp=new Date().toISOString().replace(/[:.]/g,'-');
const backup=join('.local','voice-backups',stamp), restore=join('.local','voice-restore-check',stamp);
if(existsSync(backup)||existsSync(restore))throw new Error('Refusing to overwrite an existing snapshot');
const manifest=audioManifestSchema.parse(JSON.parse(readFileSync('public/audio/manifest.json','utf8')));
const paths=new Map<string,string>([['public/audio/manifest.json','public/audio/manifest.json']]);
for(const item of Object.values(manifest.entries))for(const path of [item.normal,item.slow])paths.set(`public${path}`,`public${path}`);
const reference=JSON.parse(readFileSync('.local/voice/reference.json','utf8')) as {sha256:string};
if(!/^[a-f0-9]{64}$/.test(reference.sha256))throw new Error('Invalid reference fingerprint');
for(const file of ['reference.wav','reference.json','targets.json','render-report.json',`prompt-${reference.sha256.slice(0,16)}.pt`]) {
  const source=join('.local','voice',file);
  if(existsSync(source))paths.set(source,`private/${file}`);
}
paths.set('.local/audio-preview/vocals.wav','private/master-vocals.wav');
const hashes:{path:string;sha256:string}[]=[];
for(const [source,relative] of paths) {
  const target=join(backup,relative), restored=join(restore,relative);
  mkdirSync(dirname(target),{recursive:true});copyFileSync(source,target);
  const sha256=createHash('sha256').update(readFileSync(source)).digest('hex');
  mkdirSync(dirname(restored),{recursive:true});copyFileSync(target,restored);
  if(createHash('sha256').update(readFileSync(restored)).digest('hex')!==sha256)throw new Error(`Restore mismatch: ${relative}`);
  hashes.push({path:relative,sha256});
}
writeFileSync(join(backup,'inventory.json'),JSON.stringify({createdAt:new Date().toISOString(),voiceId:manifest.voiceId,entries:Object.keys(manifest.entries).length,files:hashes,containsPrivateVoiceProfile:true},null,2));
console.log(JSON.stringify({backup,restore,entries:Object.keys(manifest.entries).length,verifiedFiles:hashes.length,cloudBackup:false,privateProfileIncluded:true},null,2));
