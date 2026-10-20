// Production composition on a real loopback listener, with an isolated test email transport.
// This does not claim that server/index.ts, TLS, SES or AWS are configured.
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join, relative, isAbsolute } from 'node:path';
import { spawnSync } from 'node:child_process';
import express from 'express';
import { openDatabase } from '../server/database';
import { createApp } from '../server/app';

const folder=mkdtempSync(join(tmpdir(),'hnl-production-smoke-'));
const db=openDatabase(join(folder,'synthetic.sqlite'));
const output=resolve('out');
assert.ok(existsSync(join(output,'index.html')),'Build the static frontend before running this smoke test');
const entry=spawnSync(process.execPath,['node_modules/tsx/dist/cli.mjs','server/index.ts'],{env:{...process.env,NODE_ENV:'production',LOCAL_PREVIEW:'false',DATABASE_PATH:join(folder,'entry.sqlite'),APP_ORIGIN:'https://example.test'},encoding:'utf8',timeout:20000});
assert.notEqual(entry.status,0);assert.match(entry.stderr,/Production/);
const app=createApp(db,{localPreview:false,origin:'https://example.test',sendMail:async()=>{throw new Error('Test transport must not send email');}});
app.use(express.static(output,{extensions:['html']}));
const listener=app.listen(0,'127.0.0.1');
try{
  await new Promise<void>(resolve=>listener.once('listening',resolve));
  const address=listener.address();assert.ok(address&&typeof address!=='string');
  const origin=`http://127.0.0.1:${address.port}`;
  const health=await fetch(`${origin}/api/health`);assert.equal(health.status,200);assert.equal((await health.json()).mode,'live');
  const root=await fetch(origin);assert.equal(root.status,200);assert.match(root.headers.get('content-type')??'',/text\/html/);
  for(const path of ['/api/me','/api/admin/users','/api/admin/audit'])assert.equal((await fetch(`${origin}${path}`)).status,401);
  for(const path of ['/.env','/server/index.ts','/.local/hanngulab.sqlite','/api/podcasts'])assert.equal((await fetch(`${origin}${path}`)).status,404);
  assert.deepEqual((await (await fetch(`${origin}/api/catalog`)).json()).lessons,[]);
  console.log(JSON.stringify({mode:'production-composition',entry:'blocked by missing real email adapter as expected',httpListener:true,root:200,unauthorized:401,privatePaths:404,email:'isolated test transport; no mail sent',tls:'not tested; HTTPS origin simulated',database:'temporary synthetic SQLite only'}));
}finally{
  await new Promise<void>((resolve,reject)=>listener.close(error=>error?reject(error):resolve()));
  db.close();const target=relative(resolve(tmpdir()),resolve(folder));assert.ok(target&&!target.startsWith('..')&&!isAbsolute(target));rmSync(folder,{recursive:true,force:true});
}
