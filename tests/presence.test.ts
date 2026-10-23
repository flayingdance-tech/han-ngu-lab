import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { openDatabase } from '../server/database';
import { createApp } from '../server/app';
import { createPresenceStore } from '../server/presence';
import { digest, token } from '../server/security';

const origin = 'https://example.test';
function fixture() {
  const db = openDatabase(); let clock = Date.parse('2026-10-23T00:00:00Z');
  const app = createApp(db, { localPreview: false, origin, now: () => clock, sendMail: async () => { throw new Error('No email allowed'); } });
  function account(role: string, verified = 1, status = 'active') {
    const id = token(), raw = token();
    db.prepare('INSERT INTO users(id,email,name,password,role,verified,status,created_at) VALUES (?,?,?,?,?,?,?,?)').run(id, `${id}@example.test`, 'Synthetic presence fixture', 'unused-synthetic-password-hash', role, verified, status, clock);
    db.prepare('INSERT INTO sessions VALUES (?,?,?)').run(digest(raw), id, clock + 900_000);
    return { cookie: `hnl_session=${raw}`, id };
  }
  const heartbeat = (cookie?: string, body: object = {}) => {
    const call = request(app).post('/api/presence/heartbeat').set('Origin', origin).set('X-HNL-Client', 'web').send(body);
    return cookie ? call.set('Cookie', cookie) : call;
  };
  const stats = (cookie?: string) => cookie ? request(app).get('/api/admin/online').set('Cookie', cookie) : request(app).get('/api/admin/online');
  return { db, app, account, heartbeat, stats, now: () => clock, advance: (ms: number) => { clock += ms; } };
}
function visitorCookie(response: { headers: Record<string, unknown> }) { return String((response.headers['set-cookie'] as string[])[0]).split(';')[0]; }

test('presence store expires idle visitors exactly, renews activity and enforces bounded capacity', () => {
  let now = 0; const store = createPresenceStore(() => now, 2);
  assert.equal(store.touch('forged'), false); assert.equal(store.count(), 0);
  assert.equal(store.add('one'), true); assert.equal(store.add('two'), true); assert.equal(store.add('three'), false);
  now = 90_000; assert.equal(store.touch('one'), true);
  now = 120_000; assert.equal(store.count(), 1); assert.equal(store.touch('two'), false);
  assert.equal(store.add('three'), true); now = 210_000; assert.equal(store.count(), 1);
  now = 240_000; assert.equal(store.count(), 0);
});

test('only verified active admin or super_admin can read online counts; client role headers cannot grant access', async t => {
  const s = fixture(); t.after(() => s.db.close());
  assert.equal((await s.stats()).status, 401);
  assert.equal((await request(s.app).get('/api/admin/online?role=admin').set('X-Role', 'admin')).status, 401);
  for (const role of ['learner', 'editor', 'reviewer']) assert.equal((await s.stats(s.account(role).cookie)).status, 403);
  for (const [role, verified, status] of [['admin', 0, 'active'], ['admin', 1, 'suspended']] as const) assert.equal((await s.stats(s.account(role, verified, status).cookie)).status, verified ? 401 : 403);
  for (const role of ['admin', 'super_admin']) {
    const response = await s.stats(s.account(role).cookie);
    assert.equal(response.status, 200); assert.equal(response.headers['cache-control'], 'private, no-store');
    assert.deepEqual(Object.keys(response.body).sort(), ['asOf', 'refreshSeconds', 'visitors', 'windowSeconds']);
    assert.equal(response.body.visitors, 0); assert.equal(response.body.windowSeconds, 120); assert.equal(response.body.refreshSeconds, 15);
  }
  const admin = s.account('admin'); s.db.prepare('UPDATE users SET role=? WHERE id=?').run('learner', admin.id);
  assert.equal((await s.stats(admin.cookie)).status, 403);
  s.db.prepare('UPDATE users SET role=? WHERE id=?').run('admin', admin.id); s.advance(900_001);
  assert.equal((await s.stats(admin.cookie)).status, 401);
});

test('anonymous browsers count once across repeated tabs, expire without unload, never write SQLite and reset on process restart', async t => {
  const s = fixture(); t.after(() => s.db.close()); const admin = s.account('admin');
  const changes = s.db.prepare('SELECT total_changes() AS n').get()!.n;
  const first = await s.heartbeat(); assert.equal(first.status, 200); assert.deepEqual(first.body, { ok: true });
  const setCookie = String(first.headers['set-cookie'][0]);
  for (const flag of ['HttpOnly', 'Secure', 'SameSite=Strict', 'Path=/api/presence', 'Max-Age=120']) assert.ok(setCookie.includes(flag));
  const browserOne = visitorCookie(first);
  for (let tab = 0; tab < 3; tab++) assert.equal((await s.heartbeat(browserOne)).status, 200);
  assert.equal((await s.stats(admin.cookie)).body.visitors, 1);
  await s.heartbeat(); assert.equal((await s.stats(admin.cookie)).body.visitors, 2);
  s.advance(90_000); await s.heartbeat(browserOne);
  s.advance(30_001); assert.equal((await s.stats(admin.cookie)).body.visitors, 1);
  s.advance(90_000); assert.equal((await s.stats(admin.cookie)).body.visitors, 0);
  assert.equal(s.db.prepare('SELECT total_changes() AS n').get()!.n, changes);
  await s.heartbeat();
  const restarted = createApp(s.db, { localPreview: false, origin, now: s.now, sendMail: async () => {} });
  // A fresh process has no visitor history; this state does not come from the database.
  assert.equal((await request(restarted).get('/api/admin/online').set('Cookie', admin.cookie)).body.visitors, 0);
});

test('heartbeat preserves origin, JSON/header CSRF and strict input validation; raw browser IDs cannot choose the counted identity', async t => {
  const s = fixture(); t.after(() => s.db.close()); const admin = s.account('admin');
  assert.equal((await request(s.app).post('/api/presence/heartbeat').send({})).status, 403);
  assert.equal((await request(s.app).post('/api/presence/heartbeat').set('Origin', 'https://attacker.test').set('X-HNL-Client', 'web').send({})).status, 403);
  assert.equal((await s.heartbeat(undefined, { visitors: 99999, role: 'admin' })).status, 400);
  assert.equal((await s.stats(admin.cookie)).body.visitors, 0);
  const forged = `hnl_presence=${'A'.repeat(43)}`;
  const response = await s.heartbeat(forged); assert.equal(response.status, 200); assert.notEqual(visitorCookie(response), forged);
  assert.equal((await s.stats(admin.cookie)).body.visitors, 1); assert.equal('visitors' in response.body, false);
});

test('new visitor churn is throttled separately while a known browser can keep its existing presence', async t => {
  const s = fixture(); t.after(() => s.db.close());
  const first = await s.heartbeat(), known = visitorCookie(first);
  for (let i = 1; i < 20; i++) assert.equal((await s.heartbeat()).status, 200);
  const blocked = await s.heartbeat(); assert.equal(blocked.status, 429); assert.ok(Number(blocked.headers['retry-after']) > 0);
  assert.equal((await s.heartbeat(known)).status, 200);
  const admin = s.account('admin'); assert.equal((await s.stats(admin.cookie)).body.visitors, 20);
});
