import { readFileSync, existsSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { audioKey, audioManifestSchema } from '../lib/audio-catalog';

const manifest = audioManifestSchema.parse(JSON.parse(readFileSync('public/audio/manifest.json','utf8')));
const targets = JSON.parse(readFileSync('.local/voice/targets.json','utf8')) as {targets:{key:string}[]};
const issues:string[]=[], files:{path:string;bytes:number;sha256:string}[]=[];
if(process.argv.includes('--release')&&manifest.disabledReason)issues.push(`Disabled voice: ${manifest.disabledReason}`);
for(const target of targets.targets) if(!Object.hasOwn(manifest.entries,target.key)) issues.push(`Missing: ${target.key}`);
for(const [key,item] of Object.entries(manifest.entries)) {
  if(key!==audioKey(item.text,item.pinyin)) issues.push(`Key mismatch: ${key}`);
  if(process.argv.includes('--release')&&item.review!=='approved') issues.push(`Needs human review: ${key}`);
  for(const path of [item.normal,item.slow]) {
    const file=join('public',path);
    if(!existsSync(file)||statSync(file).size<500) {issues.push(`Missing/empty: ${path}`);continue;}
    const buffer=readFileSync(file);
    files.push({path,bytes:buffer.length,sha256:createHash('sha256').update(buffer).digest('hex')});
  }
}
mkdirSync('docs/reports',{recursive:true});
writeFileSync('docs/reports/audio-inventory.json',JSON.stringify({generatedAt:new Date().toISOString(),voiceId:manifest.voiceId,entries:Object.keys(manifest.entries).length,expected:targets.targets.length,approved:Object.values(manifest.entries).filter(x=>x.review==='approved').length,files,issues},null,2));
console.log(JSON.stringify({entries:Object.keys(manifest.entries).length,expected:targets.targets.length,files:files.length,bytes:files.reduce((sum,f)=>sum+f.bytes,0),issues},null,2));
if(issues.length)process.exitCode=1;
