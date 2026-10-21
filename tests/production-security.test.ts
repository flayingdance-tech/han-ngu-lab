import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { openDatabase } from '../server/database';
import { createApp } from '../server/app';
import { mkdtempSync,rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join,resolve,relative,isAbsolute } from 'node:path';
import { DatabaseSync } from 'node:sqlite';

test('production authentication hides email tokens from query strings and sets secure session cookies',async t=>{
  const db=openDatabase(); t.after(()=>db.close());
  const origin='https://example.test',sent:{purpose:string;link:string}[]=[];
  let clock=Date.now();
  const app=createApp(db,{localPreview:false,origin,now:()=>clock,sendMail:async(_email,purpose,link)=>{sent.push({purpose,link});}});
  const post=async(path:string,body:object)=>{
    const response=await request(app).post(`/api${path}`).set('Origin',origin).set('X-HNL-Client','web').send(body);
    await app.locals.drainAuthMail();return response;
  };
  const email='security@example.test',password='Synthetic-Audit-Password-123!';
  const reg=await post('/auth/register',{email,password,name:'Kiểm thử',adult:true,acceptedTerms:true});
  assert.equal(reg.status,201);assert.equal('devLink' in reg.body,false);
  const link=new URL(sent[0].link);
  assert.equal(link.search,'');assert.equal(link.origin,origin);
  const verify=new URLSearchParams(link.hash.slice(1)).get('verify');
  assert.ok(verify);assert.equal((await post('/auth/verify',{token:verify})).status,200);
  const login=await post('/auth/login',{email,password});
  assert.equal(login.status,200);
  const cookie=String(login.headers['set-cookie'][0]);
  assert.match(cookie,/; Secure/);assert.match(cookie,/; HttpOnly/);assert.match(cookie,/SameSite=Strict/);
  assert.equal(login.headers['referrer-policy'],'no-referrer');
  assert.equal((await request(app).get('/api/admin/users')).status,401);
  assert.equal((await request(app).get('/api/admin/users').set('Cookie',cookie.split(';')[0])).status,403);
  clock+=60_001;
  const forgot=await post('/auth/forgot',{email});assert.equal('devLink' in forgot.body,false);
  const resetLink=new URL(sent[1].link);assert.equal(resetLink.search,'');
  const reset=new URLSearchParams(resetLink.hash.slice(1)).get('reset');assert.ok(reset);
  assert.equal((await post('/auth/reset',{token:reset,password:'Replacement-Audit-Password-123!'})).status,200);
  assert.equal((await request(app).get('/api/me').set('Cookie',cookie.split(';')[0])).status,401);
  assert.equal((await post('/auth/reset',{token:reset,password})).status,400);
});

test('production rejects malformed public origins and returns a bounded error for oversized JSON',async t=>{
  const db=openDatabase();t.after(()=>db.close());
  for(const origin of ['https://','https://example.test/path','https://user:pass@example.test','http://example.test','https://example.test?x=1']){
    assert.throws(()=>createApp(db,{localPreview:false,origin,sendMail:async()=>{}}),/Production/);
  }
  const app=createApp(db,{localPreview:false,origin:'https://example.test',sendMail:async()=>{}});
  const response=await request(app).post('/api/auth/login').set('Origin','https://example.test').set('X-HNL-Client','web').send({padding:'x'.repeat(1024*1024)});
  assert.equal(response.status,413);assert.equal('stack' in response.body,false);
});

test('opening a newer database fails without overwriting its schema version',()=>{
  const folder=mkdtempSync(join(tmpdir(),'hnl-schema-test-')),path=join(folder,'future.sqlite');
  try{
    const future=new DatabaseSync(path);future.exec('PRAGMA user_version=2');future.close();
    assert.throws(()=>openDatabase(path),/schema/);
    const check=new DatabaseSync(path);
    try{assert.equal(check.prepare('PRAGMA user_version').get()?.user_version,2);}finally{check.close();}
  }finally{
    const target=relative(resolve(tmpdir()),resolve(folder));assert.ok(target&&!target.startsWith('..')&&!isAbsolute(target));rmSync(folder,{recursive:true,force:true});
  }
});
