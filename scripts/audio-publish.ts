import { copyFileSync, existsSync, mkdirSync, readFileSync, renameSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';
import { audioKey, audioManifestSchema, projectVoiceId } from '../lib/audio-catalog';

const workspace=join('.local','voice-kokoro'), staged=join(workspace,'public');
const source=join(staged,'audio','manifest.json');
const manifest=audioManifestSchema.parse(JSON.parse(readFileSync(source,'utf8')));
const targets=JSON.parse(readFileSync('.local/voice/targets.json','utf8')) as {targets:{key:string}[]};
const report=JSON.parse(readFileSync(join(workspace,'signal-qa.json'),'utf8')) as {voiceId:string;entries:number;issues:unknown[]};
if(manifest.voiceId!==projectVoiceId||manifest.disabledReason||report.voiceId!==manifest.voiceId||report.issues.length||report.entries!==targets.targets.length)throw new Error('Staging voice has not passed technical QA');
if(Object.keys(manifest.entries).length!==targets.targets.length||targets.targets.some(t=>!Object.hasOwn(manifest.entries,t.key)))throw new Error('Incomplete audio bank');
const qa=JSON.parse(readFileSync(join(workspace,'signal-qa.json'),'utf8')) as {files:{path:string;sha256?:string}[]};
const sha=(path:string)=>createHash('sha256').update(readFileSync(path)).digest('hex');
for(const [key,entry] of Object.entries(manifest.entries)) {
  if(key!==audioKey(entry.text,entry.pinyin)||entry.review!=='unreviewed')throw new Error('Unexpected key/review in replacement voice');
  for(const path of [entry.normal,entry.slow]) {
    const sourceFile=join(staged,path);
    const evidence=qa.files.find(f=>f.path===path);
    if(!existsSync(sourceFile)||statSync(sourceFile).size<500||!evidence?.sha256||evidence.sha256!==sha(sourceFile))throw new Error(`Missing/changed QA input: ${path}`);
  }
}
const current='public/audio/manifest.json';
if(existsSync(current)) {
  const old=audioManifestSchema.parse(JSON.parse(readFileSync(current,'utf8')));
  if(Object.values(old.entries).some(e=>e.review==='approved'))throw new Error('Approved bank needs an explicit migration');
  const previous=join(workspace,`previous-manifest-${sha(current).slice(0,16)}.json`);
  if(!existsSync(previous))copyFileSync(current,previous);
}
// Files arrive first. The browser sees one complete manifest only after the atomic switch.
for(const entry of Object.values(manifest.entries)) for(const path of [entry.normal,entry.slow]) {
  const target=join('public',path);mkdirSync(dirname(target),{recursive:true});
  copyFileSync(join(staged,path),target);
  if(sha(target)!==sha(join(staged,path)))throw new Error(`Copy mismatch: ${path}`);
}
const temporary='public/audio/manifest.next.json';writeFileSync(temporary,readFileSync(source));
for(let attempt=0;;attempt++) {
  try{renameSync(temporary,current);break;}catch(error){if(attempt===11)throw error;await new Promise(resolve=>setTimeout(resolve,Math.min(50*2**attempt,1000)));}
}
console.log(JSON.stringify({voiceId:manifest.voiceId,entries:Object.keys(manifest.entries).length,humanReviewed:false,apiCalls:0}));
