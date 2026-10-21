import test from 'node:test';
import assert from 'node:assert/strict';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';
import request from 'supertest';
import { createSesMailer, EmailDeliveryError, SES_SMTP_HOST } from '../server/email';
import { createApp } from '../server/app';
import { openDatabase } from '../server/database';
import { digest } from '../server/security';

const origin = 'https://example.test';
const env = { APP_ORIGIN: origin, SMTP_USERNAME: 'synthetic-smtp-user', SMTP_PASSWORD: 'synthetic-smtp-fixture', SMTP_FROM_EMAIL: 'sender@example.test' };

function captureMailer() {
  const messages: { subject: string; text: string; from: { address: string }; to: { address: string }[] }[] = [];
  let options: SMTPTransport.Options | undefined;
  const jsonTransport = nodemailer.createTransport({ jsonTransport: true });
  const sendMail = createSesMailer(env, config => {
    options = config;
    return { sendMail: async message => {
      const result = await jsonTransport.sendMail(message);
      messages.push(JSON.parse(result.message));
    } };
  });
  return { sendMail, messages, options };
}
const tokenFrom = (text: string, purpose: string) => {
  const line = text.split('\n').find(x => x.startsWith(`${origin}/#`));
  assert.ok(line);
  const link = new URL(line);
  assert.equal(link.search, '');
  const token = new URLSearchParams(link.hash.slice(1)).get(purpose);
  assert.ok(token); return token;
};

test('SES adapter enforces Sydney STARTTLS, certificate validation and bounded non-debug transport', async () => {
  const { sendMail, messages, options } = captureMailer();
  assert.equal(options?.host, SES_SMTP_HOST); assert.equal(options.port, 587);
  assert.equal(options.secure, false); assert.equal(options.requireTLS, true);
  assert.equal(options.tls?.rejectUnauthorized, true); assert.equal(options.tls.minVersion, 'TLSv1.2');
  assert.equal(options.tls.servername, SES_SMTP_HOST);
  assert.deepEqual(options.auth, { user: env.SMTP_USERNAME, pass: env.SMTP_PASSWORD });
  assert.equal(options.logger, false); assert.equal(options.debug, false);
  assert.equal(options.disableFileAccess, true); assert.equal(options.disableUrlAccess, true);
  assert.equal(options.socketTimeout, 20_000);
  for (const purpose of ['verify', 'reset'] as const) await sendMail('learner@example.test', purpose, `${origin}/#${purpose}=synthetic-token-1234567890`);
  assert.equal(messages.length, 2);
  assert.match(messages[0].subject, /Xác minh/); assert.match(messages[1].subject, /Đặt lại/);
  assert.equal(messages[0].from.address, env.SMTP_FROM_EMAIL);
  assert.equal(messages[0].to[0].address, 'learner@example.test');
  assert.match(messages[0].text, /30 phút/);
  assert.ok(!JSON.stringify(messages).includes(env.SMTP_PASSWORD));
});

test('invalid email configuration fails closed without echoing secrets or constructing a transport', () => {
  for (const values of [ {}, { ...env, SMTP_USERNAME: '' }, { ...env, SMTP_PASSWORD: '' }, { ...env, SMTP_FROM_EMAIL: 'bad\r\nBcc: other@example.test' }, { ...env, APP_ORIGIN: 'http://example.test' }, { ...env, APP_ORIGIN: `${origin}/path` } ]) {
    assert.throws(() => createSesMailer(values, () => { assert.fail('No transport for invalid configuration'); }), error => {
      assert.ok(error instanceof Error); assert.match(error.message, /Production email/);
      assert.ok(!error.message.includes(env.SMTP_PASSWORD)); return true;
    });
  }
});

test('SMTP failure is sanitized and arbitrary links/recipient headers never reach the transport', async () => {
  let calls = 0;
  const sendMail = createSesMailer(env, () => ({ sendMail: async () => { calls++; throw new Error(`SMTP debug ${env.SMTP_PASSWORD} recipient@example.test`); } }));
  for (const [email, link] of [ ['bad\r\nBcc: x@example.test', `${origin}/#verify=token`], ['learner@example.test', 'https://other.test/#verify=token'], ['learner@example.test', `${origin}/?verify=token`], ['learner@example.test', `${origin}/#reset=token`] ]) {
    await assert.rejects(sendMail(email, 'verify', link), EmailDeliveryError);
  }
  assert.equal(calls, 0);
  await assert.rejects(sendMail('learner@example.test', 'verify', `${origin}/#verify=token`), error => {
    assert.ok(error instanceof EmailDeliveryError); assert.equal(error.cause, undefined);
    assert.ok(!error.message.includes(env.SMTP_PASSWORD)); return true;
  });
  assert.equal(calls, 1);
});

test('production register, resend verification and reset use the adapter; rotated and consumed tokens fail', async t => {
  const db = openDatabase(); t.after(() => db.close());
  const { sendMail, messages } = captureMailer();
  let clock = Date.now();
  const app = createApp(db, { localPreview: false, origin, sendMail, now: () => clock });
  const post = async (path: string, body: object) => {
    const response = await request(app).post(`/api/auth/${path}`).set('Origin', origin).set('X-HNL-Client', 'web').send(body);
    await app.locals.drainAuthMail(); return response;
  };
  const email = 'learner@example.test', password = 'Synthetic-Email-Test-Password-123!';
  const registration = await post('register', { email, password, name: 'Thử email', adult: true, acceptedTerms: true });
  assert.equal(registration.status, 201); assert.equal('devLink' in registration.body, false);
  const oldToken = tokenFrom(messages[0].text, 'verify');
  clock += 60_001;
  const resent = await post('resend-verification', { email });
  assert.equal(resent.status, 200); assert.equal('devLink' in resent.body, false);
  const newToken = tokenFrom(messages[1].text, 'verify'); assert.notEqual(oldToken, newToken);
  assert.equal((await post('verify', { token: oldToken })).status, 400);
  assert.equal((await post('verify', { token: newToken })).status, 200);
  assert.equal((await post('verify', { token: newToken })).status, 400);
  clock += 60_001;
  assert.equal((await post('resend-verification', { email })).status, 200); assert.equal(messages.length, 2);
  const unknown = await post('resend-verification', { email: 'unknown@example.test' });
  assert.deepEqual(unknown.body, resent.body); assert.equal(messages.length, 2);
  clock += 60_001;
  assert.equal((await post('forgot', { email })).status, 200);
  const reset = tokenFrom(messages[2].text, 'reset');
  const stored = db.prepare("SELECT token FROM tokens WHERE purpose='reset'").get();
  assert.equal(stored?.token, digest(reset));
  assert.equal((await post('reset', { token: reset, password: password + 'new' })).status, 200);
  assert.equal((await post('reset', { token: reset, password })).status, 400);
});

test('resend keeps CSRF, JSON validation, production guards and shared auth rate limits', async t => {
  const db = openDatabase(); t.after(() => db.close());
  assert.throws(() => createApp(db, { localPreview: false, origin }), /Production/);
  let sent = 0;
  const app = createApp(db, { localPreview: false, origin, sendMail: async () => { sent++; } });
  assert.equal((await request(app).post('/api/auth/resend-verification').send({ email: 'a@example.test' })).status, 403);
  const post = (body: object) => request(app).post('/api/auth/resend-verification').set('Origin', origin).set('X-HNL-Client', 'web').send(body);
  assert.equal((await post({ email: 'invalid' })).status, 400);
  for (let i = 0; i < 19; i++) assert.equal((await post({ email: `unknown${i}@example.test` })).status, 200);
  assert.equal((await post({ email: 'unknown@example.test' })).status, 429);
  assert.equal(sent, 0);
});

test('production SMTP failure returns generic accepted response without token, credential or provider response', async t => {
  const db = openDatabase(); t.after(() => db.close());
  const sendMail = createSesMailer(env, () => ({ sendMail: async () => { throw new Error(`535 ${env.SMTP_PASSWORD}`); } }));
  const app = createApp(db, { localPreview: false, origin, sendMail });
  const response = await request(app).post('/api/auth/register').set('Origin', origin).set('X-HNL-Client', 'web').send({ email: 'failure@example.test', password: 'Synthetic-Email-Test-Password-123!', name: 'Thử lỗi', adult: true, acceptedTerms: true });
  await app.locals.drainAuthMail();
  assert.equal(response.status, 201);
  assert.equal(response.body.retryAfterSeconds, 60);
  assert.equal('devLink' in response.body, false);
  assert.ok(!JSON.stringify(response.body).includes(env.SMTP_PASSWORD));
  assert.equal(db.prepare('SELECT COUNT(*) AS count FROM users').get()?.count, 1);
  // Existing unverified account survives a delivery failure and can request a fresh link.
});
