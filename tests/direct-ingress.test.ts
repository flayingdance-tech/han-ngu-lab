import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../server/app';
import { openDatabase } from '../server/database';
import { createSesMailer } from '../server/email';
import { applicationOrigins } from '../server/origins';

const old = 'https://old.example.test', canonical = 'https://new.example.test';
test('staging accepts exactly two configured origins; mail follows the validated request origin; cutover rejects the old origin', async () => {
  const db = openDatabase(), sent: string[] = [];
  try {
    const mailer = createSesMailer({APP_ORIGIN:old,APP_STAGING_ORIGIN:canonical,SMTP_USERNAME:'fixture',SMTP_PASSWORD:'synthetic-fixture',SMTP_FROM_EMAIL:'sender@example.test'}, () => ({sendMail:async message => {sent.push(String(message.text));}}));
    const app = createApp(db,{localPreview:false,origin:old,stagingOrigin:canonical,sendMail:mailer});
    const post = (origin: string, email: string) => request(app).post('/api/auth/register').set('Origin',origin).set('X-HNL-Client','web').send({email,name:'Synthetic',password:'Synthetic-Password-123!',adult:true,acceptedTerms:true});
    assert.equal((await post(canonical,'new@example.test')).status,201);
    await app.locals.drainAuthMail(); assert.ok(sent[0].includes(`${canonical}/#verify=`));
    assert.equal((await post('https://attacker.example.test','bad@example.test')).status,403);
    const cutover = createApp(db,{localPreview:false,origin:canonical,sendMail:async()=>{}});
    assert.equal((await request(cutover).post('/api/auth/forgot').set('Origin',old).set('X-HNL-Client','web').send({email:'new@example.test'})).status,403);
    assert.throws(()=>applicationOrigins(canonical,'https://bad.example.test/path'));
    assert.throws(()=>applicationOrigins(canonical,'http://plain.example.test'));
    await assert.rejects(mailer('new@example.test','verify','https://attacker.example.test/#verify=fixture'));
  } finally {db.close();}
});

test('login throttles the same normalized email across source IPs, including unknown accounts, and expires without permanent lockout', async () => {
  const db = openDatabase(); let clock = Date.now();
  try {
    const app = createApp(db,{localPreview:false,origin:canonical,now:()=>clock,sendMail:async()=>{}});
    const post = (i: number) => request(app).post('/api/auth/login').set('Origin',canonical).set('X-HNL-Client','web').set('X-Forwarded-For',`198.51.100.${i}`).send({email:i%2?'UNKNOWN@example.test':'unknown@example.test',password:'wrong'});
    for(let i=1;i<=10;i++)assert.equal((await post(i)).status,401);
    const blocked = await post(11); assert.equal(blocked.status,429); assert.equal(Number(blocked.headers['retry-after']),900);
    clock+=900001; assert.equal((await post(12)).status,401);
  } finally {db.close();}
});
