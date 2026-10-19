import { readFileSync, existsSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { resolve, basename, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { podcastCatalogSchema } from '../lib/podcast';

const root=resolve('.local/podcasts'),catalog=podcastCatalogSchema.parse(JSON.parse(readFileSync(resolve(root,'rendered/catalog.json'),'utf8')));
const music=JSON.parse(readFileSync('content/podcast-radio-music.json','utf8')) as {localFile:string;sha256:string;originalFile:string};
const files=['content/podcast-radio.json','content/podcast-radio-music.json','content/radio-storyteller.json','scripts/podcast-radio-render.py','scripts/podcast-asr-check.py','scripts/voice_io.py','scripts/requirements-kokoro.txt','docs/PODCAST_RUNBOOK.md','docs/ERRORS_AND_FIXES.md','.local/podcasts/rendered/catalog.json',music.localFile,music.originalFile,'.local/podcasts/radio-pilot/pilot-v9-voice.wav','.local/podcasts/radio-pilot/report-v9.json','.local/podcasts/render-summary.json','.local/podcasts/radio-asr-triage.json'];
const hash=(path:string)=>createHash('sha256').update(readFileSync(path)).digest('hex');
files.push('scripts/podcast-radio-audit.py','docs/reports/podcast-radio-integrity.json');
files.push('scripts/podcast-asr-review.py','.local/podcasts/radio-asr-reviewed.json');
const triage=JSON.parse(readFileSync(resolve(root,'radio-asr-triage.json'),'utf8')) as {humanReviewed:boolean;episodes:{id:string}[]};
const checkedIds=new Set(triage.episodes.map(e=>e.id));
if(triage.humanReviewed!==false||checkedIds.size!==catalog.episodes.length||triage.episodes.length!==catalog.episodes.length||catalog.episodes.some(e=>!checkedIds.has(e.id)))throw new Error('ASR triage has not completed for this radio catalog');
if(hash(music.localFile)!==music.sha256)throw new Error('Music source checksum mismatch');
for(const episode of catalog.episodes){
  if(episode.format!=='radio'||episode.segments.length)throw new Error('Expected an audio-only radio catalog');
  for(const asset of Object.values(episode.assets)){
    const file=`.local/podcasts/rendered/${basename(asset.url)}`;
    if(hash(file)!==asset.sha256)throw new Error(`Audio checksum mismatch: ${file}`);
    if(existsSync(resolve('public/podcasts',basename(asset.url)))||existsSync(resolve('out/podcasts',basename(asset.url))))throw new Error('Draft leaked into static export');
    files.push(file);
  }
}
const inventory=files.map(file=>({file,sha256:hash(resolve(file))}));
const report:{episodes:number;audioFiles:number;checkedAt:string;backup?:string;restore?:string;restoredFiles?:number}={episodes:catalog.episodes.length,audioFiles:catalog.episodes.length*2,checkedAt:new Date().toISOString()};
if(process.argv.includes('--backup')){
  const stamp=new Date().toISOString().replaceAll(':','-');
  const backup=resolve('.local/podcast-backups',stamp),restore=resolve('.local/podcast-restore-check',stamp);
  for(const record of inventory){
    const target=resolve(backup,record.file),restored=resolve(restore,record.file);
    mkdirSync(dirname(target),{recursive:true});copyFileSync(resolve(record.file),target);
    mkdirSync(dirname(restored),{recursive:true});copyFileSync(target,restored);
    if(hash(target)!==record.sha256||hash(restored)!==record.sha256)throw new Error(`Restore mismatch: ${record.file}`);
  }
  writeFileSync(resolve(backup,'inventory.json'),JSON.stringify(inventory,null,2));
  Object.assign(report,{backup,restore,restoredFiles:inventory.length});
}
writeFileSync(resolve(root,'verification.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
