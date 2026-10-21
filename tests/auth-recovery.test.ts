import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../server/app';
import { createSesMailer, EmailDeliveryError } from '../server/email';
import { openDatabase } from '../server/database';
import { hashPassword } from '../server/security';
import { AUTH_MAIL_MESSAGE, authMailControl } from '../server/auth-mail';

const origin = 'https://example.test', password = 'Synthetic-Recovery-Password-123!';
const registration = (email: string) => ({ email, password, name: 'Kiểm thử', adult: true, acceptedTerms: true });

test('old unverified account recovers after failed delivery without deletion; cooldown applies to known and unknown addresses', async t => {
  const db = openDatabase();
  const stored = await hashPassword(password);
  db.prepare('INSERT INTO users(id,email,name,password,created_at) VALUES (?,?,?,?,?)').run('old-account', 'old@example.test', 'Tài khoản cũ', stored, Date.now());
  let clock = Date.now(), fails = true;
  const sent: string[] = [];
  const logs: unknown[][] = [];
  t.mock.method(console, 'warn', (...args: unknown[]) => { logs.push(args); });
  const app = createApp(db, { localPreview: false, origin, now: () => clock, sendMail: async (_email, _purpose, link) => {
    if (fails) throw new EmailDeliveryError('identity_unverified');
    sent.push(link);
  } });
  t.after(async () => { await app.locals.drainAuthMail(); db.close(); });
  const post = async (path: string, body: object) => {
    const r = await request(app).post(`/api/auth/${path}`).set('Origin', origin).set('X-HNL-Client', 'web').send(body);
    await app.locals.drainAuthMail(); return r;
  };
  assert.equal((await post('login', { email: 'old@example.test', password: 'wrong' })).status, 401);
  assert.equal((await post('login', { email: 'old@example.test', password })).status, 403);
  const known = await post('resend-verification', { email: 'old@example.test' });
  const unknown = await post('resend-verification', { email: 'unknown@example.test' });
  assert.equal(known.status, 200); assert.deepEqual(known.body, unknown.body);
  assert.deepEqual(logs, [['Auth email delivery failed:', 'identity_unverified']]);
  const again = await post('resend-verification', { email: 'OLD@example.test' });
  const unknownAgain = await post('resend-verification', { email: 'unknown@example.test' });
  assert.equal(again.status, 429); assert.deepEqual(again.body, unknownAgain.body);
  assert.equal(again.headers['retry-after'], '60');
  assert.equal((await post('forgot', { email: 'old@example.test' })).status, 429);
  fails = false; clock += 60_001;
  assert.deepEqual((await post('resend-verification', { email: 'old@example.test' })).body, known.body);
  const raw = new URLSearchParams(new URL(sent[0]).hash.slice(1)).get('verify');
  assert.ok(raw); assert.equal((await post('verify', { token: raw })).status, 200);
  const login = await post('login', { email: 'old@example.test', password });
  assert.equal(login.status, 200);
  assert.equal(login.body.user.id, 'old-account');
  assert.equal(db.prepare('SELECT password FROM users WHERE id=?').get('old-account')?.password, stored);
});

test('duplicate registrations and SMTP failures have the same public result and preserve the existing password', async t => {
  const db = openDatabase(); let clock = Date.now();
  t.mock.method(console, 'warn', () => {});
  const app = createApp(db, { localPreview: false, origin, now: () => clock, sendMail: async () => { throw new EmailDeliveryError('authentication_failed'); } });
  t.after(async () => { await app.locals.drainAuthMail(); db.close(); });
  const post = async (body: object) => {
    const r = await request(app).post('/api/auth/register').set('Origin', origin).set('X-HNL-Client', 'web').send(body);
    await app.locals.drainAuthMail(); return r;
  };
  const first = await post(registration('new@example.test'));
  const before = db.prepare('SELECT id,password FROM users WHERE email=?').get('new@example.test');
  clock += 60_001;
  const duplicate = await post({ ...registration('new@example.test'), password: password + 'different' });
  const other = await post(registration('other@example.test'));
  assert.equal(first.status, 201); assert.equal(duplicate.status, first.status); assert.equal(other.status, first.status);
  assert.deepEqual(first.body, duplicate.body); assert.deepEqual(first.body, other.body);
  assert.equal(first.body.message, AUTH_MAIL_MESSAGE);
  assert.deepEqual(db.prepare('SELECT id,password FROM users WHERE email=?').get('new@example.test'), before);
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM users').get()?.n, 2);
});

test('production does not wait for recipient-specific SMTP response or expose errors on public email endpoints', async t => {
  const db = openDatabase(); let clock = Date.now();
  let release!: () => void;
  const held = new Promise<void>(resolve => { release = resolve; });
  const app = createApp(db, { localPreview: false, origin, now: () => clock, sendMail: async () => { await held; throw new EmailDeliveryError('identity_unverified'); } });
  t.mock.method(console, 'warn', () => {});
  t.after(async () => { release(); await app.locals.drainAuthMail(); db.close(); });
  const post = (path: string, body: object) => request(app).post(`/api/auth/${path}`).set('Origin', origin).set('X-HNL-Client', 'web').send(body).timeout(2000);
  const reg = await post('register', registration('timing@example.test'));
  assert.equal(reg.status, 201);
  clock += 60_001;
  const known = await post('forgot', { email: 'timing@example.test' });
  const unknown = await post('forgot', { email: 'unknown@example.test' });
  assert.deepEqual(known.body, unknown.body); assert.equal(known.status, unknown.status);
  release(); await app.locals.drainAuthMail();
});

test('safe SMTP classification distinguishes unverified identity, auth and quota without preserving provider data', async () => {
  const env = { APP_ORIGIN: origin, SMTP_USERNAME: 'synthetic-user', SMTP_PASSWORD: 'synthetic-fixture', SMTP_FROM_EMAIL: 'sender@example.test' };
  for (const [error, reason] of [
    [{ responseCode: 554, response: '554 Message rejected: Email address is not verified. recipient@example.test' }, 'identity_unverified'],
    [{ responseCode: 535, response: '535 sensitive debug data' }, 'authentication_failed'],
    [{ responseCode: 454, response: '454 Maximum sending rate exceeded' }, 'throttled'],
    [{ code: 'ETIMEDOUT' }, 'connection_failed'],
    [{ responseCode: 554, response: '554 Access denied' }, 'delivery_failed'],
  ] as const) {
    const send = createSesMailer(env, () => ({ sendMail: async () => { throw error; } }));
    await assert.rejects(send('learner@example.test', 'verify', `${origin}/#verify=synthetic-token`), e => {
      assert.ok(e instanceof EmailDeliveryError); assert.equal(e.reason, reason);
      assert.equal(e.cause, undefined); assert.ok(!JSON.stringify(e).includes('recipient@example.test')); return true;
    });
  }
});

test('only the nearest loopback Caddy hop is trusted; forged leftmost IP cannot bypass auth limits', async t => {
  const db = openDatabase(); const app = createApp(db, { localPreview: false, origin, sendMail: async () => {} });
  const errors: unknown[][] = [];
  t.mock.method(console, 'error', (...args: unknown[]) => { errors.push(args); });
  t.after(async () => { await app.locals.drainAuthMail(); db.close(); });
  const trust = app.get('trust proxy fn') as (ip: string, hop: number) => boolean;
  assert.equal(trust('127.0.0.1', 0), true); assert.equal(trust('::ffff:127.0.0.1', 0), true);
  assert.equal(trust('::1', 0), true); assert.equal(trust('127.0.0.1', 1), false);
  assert.equal(trust('203.0.113.9', 0), false);
  const post = (i: number, ip: string) => request(app).post('/api/auth/resend-verification').set('Origin', origin).set('X-HNL-Client', 'web').set('X-Forwarded-For', `192.0.2.${i + 1}, ${ip}`).send({ email: `limit${i}@example.test` });
  for (let i = 0; i < 20; i++) assert.equal((await post(i, '198.51.100.10')).status, 200);
  assert.equal((await post(21, '198.51.100.10')).status, 429);
  assert.equal((await post(22, '198.51.100.11')).status, 200);
  assert.deepEqual(errors, []);
});

test('per-address hourly cap spans endpoints and source IPs without requiring a real account', async t => {
  const db = openDatabase(); let clock = Date.now();
  const app = createApp(db, { localPreview: false, origin, now: () => clock, sendMail: async () => {} });
  t.after(async () => { await app.locals.drainAuthMail(); db.close(); });
  const post = (i: number, route = 'resend-verification') => request(app).post(`/api/auth/${route}`).set('Origin', origin).set('X-HNL-Client', 'web').set('X-Forwarded-For', `198.51.100.${i + 1}`).send({ email: 'hourly@example.test' });
  for (let i = 0; i < 5; i++) { assert.equal((await post(i)).status, 200); clock += 60_001; }
  const blocked = await post(6, 'forgot');
  assert.equal(blocked.status, 429); assert.ok(Number(blocked.headers['retry-after']) > 60);
  clock += 3_600_000; assert.equal((await post(7)).status, 200);
});

test('real mail attempts are serialized and spaced below the observed SES one-message-per-second limit', async () => {
  const mail = authMailControl(Date.now), starts: number[] = [];
  await Promise.all([mail.deliver(async () => { starts.push(Date.now()); }), mail.deliver(async () => { starts.push(Date.now()); })]);
  assert.equal(starts.length, 2); assert.ok(starts[1] - starts[0] >= 1000);
});

test('expired verification and reset tokens cannot change account state', async t => {
  const db = openDatabase(); let clock = Date.now(); const links: string[] = [];
  const app = createApp(db, { localPreview: false, origin, now: () => clock, sendMail: async (_email, _purpose, link) => { links.push(link); } });
  t.after(async () => { await app.locals.drainAuthMail(); db.close(); });
  const post = async (path: string, body: object) => {
    const response = await request(app).post(`/api/auth/${path}`).set('Origin', origin).set('X-HNL-Client', 'web').send(body);
    await app.locals.drainAuthMail(); return response;
  };
  await post('register', registration('expires@example.test'));
  const original = db.prepare('SELECT password FROM users').get()?.password;
  clock += 31 * 60_000;
  const verify = new URLSearchParams(new URL(links[0]).hash.slice(1)).get('verify');
  assert.equal((await post('verify', { token: verify })).status, 400);
  await post('forgot', { email: 'expires@example.test' });
  clock += 31 * 60_000;
  const reset = new URLSearchParams(new URL(links[1]).hash.slice(1)).get('reset');
  assert.equal((await post('reset', { token: reset, password: password + 'new' })).status, 400);
  assert.equal(db.prepare('SELECT verified FROM users').get()?.verified, 0);
  assert.equal(db.prepare('SELECT password FROM users').get()?.password, original);
});
