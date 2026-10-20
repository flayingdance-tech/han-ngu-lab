import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import request from 'supertest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mountPodcasts } from '../server/podcasts';
import { podcastCatalogSchema } from '../lib/podcast';

const asset=(kind:string)=>({url:`/api/podcasts/media/test-v1-${kind}.mp3`,seconds:10,sha256:'a'.repeat(64),lufs:-20,truePeakDb:-3,peak:.7});
const fixture={version:1,generatedAt:'2026-10-19',music:{title:'Almost in F',author:'Kevin MacLeod',license:'CC BY 4.0',source:'https://incompetech.com/',licenseUrl:'https://creativecommons.org/licenses/by/4.0/',changes:'Excerpt and ducking'},episodes:[{id:'test-v1',title:'Test',topic:'Work',level:'Basic',description:'Test fixture',tip:'Listen',review:'unreviewed',voiceId:'hnl-kokoro-zf001-v1',duration:10,segments:[{zh:'你好',pinyin:'nǐ hǎo',vi:'Xin chào',speaker:'A',start:2,end:4}],assets:{voice:asset('voice'),mix:asset('mix')}}]};

test('podcast timeline and transport reject unsafe or mismatched assets',()=>{
  assert.equal(podcastCatalogSchema.safeParse(fixture).success,true);
  const invalid=structuredClone(fixture);
  invalid.episodes[0].assets.mix.seconds=12;
  assert.equal(podcastCatalogSchema.safeParse(invalid).success,false);
  invalid.episodes[0].assets.mix.seconds=10;
  invalid.episodes[0].assets.mix.url='/api/podcasts/media/../../secret.mp3';
  assert.equal(podcastCatalogSchema.safeParse(invalid).success,false);
  const overlap=structuredClone(fixture);
  overlap.episodes[0].segments.push({...overlap.episodes[0].segments[0],start:3,end:5});
  assert.equal(podcastCatalogSchema.safeParse(overlap).success,false);
});

test('radio captions are public, production stays private and music cannot acquire a fabricated CC license',()=>{
  const radio={...fixture,music:{title:'Piano',author:'Owner supplied',license:'owner-supplied',rightsStatus:'owner-provided-unverified',changes:'Selected mix unchanged'},episodes:[{...fixture.episodes[0],format:'radio',segments:[],broadcastDate:'2026-10-19',production:{segments:[{text:'Private authoring notes'}]}}],profile:{modelPath:'private-model'}};
  const parsed=podcastCatalogSchema.parse(radio);
  assert.equal(parsed.episodes[0].format,'radio');
  assert.equal(Object.hasOwn(parsed.episodes[0],'production'),false);
  assert.equal(Object.hasOwn(parsed,'profile'),false);
  assert.equal(podcastCatalogSchema.safeParse({...radio,music:{...radio.music,licenseUrl:'https://creativecommons.org/licenses/by/4.0/'}}).success,false);
  const captioned=podcastCatalogSchema.parse({...radio,episodes:[{...radio.episodes[0],segments:fixture.episodes[0].segments}]});
  assert.deepEqual(captioned.episodes[0].segments,fixture.episodes[0].segments);
  assert.equal(Object.hasOwn(captioned.episodes[0],'production'),false);
  assert.equal(podcastCatalogSchema.safeParse({...radio,episodes:[{...radio.episodes[0],segments:[{...fixture.episodes[0].segments[0],end:11}]}]}).success,false);
});

test('draft metadata and media blocked in live mode; preview supports seek and whitelists files',async()=>{
  const root=mkdtempSync(join(tmpdir(),'hnl-podcast-'));
  const dir=join(root,'.private');mkdirSync(dir);
  try{
    writeFileSync(join(dir,'catalog.json'),JSON.stringify(fixture));
    // Byte-range fixture tests HTTP transport, not audio quality.
    writeFileSync(join(dir,'test-v1-mix.mp3'),Buffer.alloc(100,1));
    writeFileSync(join(dir,'secret-mix.mp3'),Buffer.alloc(50,2));
    const live=express();mountPodcasts(live,false,dir);
    assert.equal((await request(live).get('/api/podcasts')).status,404);
    assert.equal((await request(live).get('/api/podcasts/media/test-v1-mix.mp3')).status,404);
    const preview=express();mountPodcasts(preview,true,dir);
    assert.equal((await request(preview).get('/api/podcasts')).body.episodes.length,1);
    const range=await request(preview).get('/api/podcasts/media/test-v1-mix.mp3').set('Range','bytes=0-9');
    assert.equal(range.status,206);assert.equal(range.headers['content-range'],'bytes 0-9/100');
    assert.equal((await request(preview).get('/api/podcasts/media/secret-mix.mp3')).status,404);
  }finally{rmSync(root,{recursive:true,force:true});}
});
