import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { randomUUID } from 'node:crypto';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { openDatabase } from '../server/database';
import { createApp } from '../server/app';
import { seedPreview } from '../server/seed';
import { seedLessons } from '../content/lessons';
import { decryptBackup, encryptBackup, exportDatabase, restoreDatabase } from '../server/backup';

const origin = 'http://localhost:3000';
const password = 'Synthetic-Test-Password-123!';
const mailToken=(link:string,purpose:string)=>new URLSearchParams(new URL(link).hash.slice(1)).get(purpose);
function setup() {
  const db = openDatabase(); seedPreview(db);
  let clock = Date.parse('2026-10-17T10:00:00Z');
  const app = createApp(db, { localPreview: true, origin, now: () => clock });
  const post = (path: string, body: object, cookie?: string) => {
    const r = request(app).post(`/api${path}`).set('Origin', origin).set('X-HNL-Client', 'web').send(body).timeout(10000);
    if (cookie) r.set('Cookie', cookie); return r;
  };
  const get = (path: string, cookie?: string) => { const r = request(app).get(`/api${path}`).timeout(10000); if (cookie) r.set('Cookie', cookie); return r; };
  async function account(email: string, role = 'learner') {
    const reg = await post('/auth/register', { email, name: 'Người dùng thử', password, adult: true, acceptedTerms: true });
    assert.equal(reg.status, 201, JSON.stringify(reg.body));
    const verifyToken = mailToken(reg.body.devLink,'verify');
    assert.equal((await post('/auth/verify', { token: verifyToken })).status, 200);
    db.prepare('UPDATE users SET role=? WHERE email=?').run(role, email);
    const login = await post('/auth/login', { email, password });
    assert.equal(login.status, 200, JSON.stringify(login.body));
    const cookie = String(login.headers['set-cookie'][0]).split(';')[0];
    return { cookie, user: login.body.user };
  }
  return { db, app, post, get, account, advance: (ms: number) => { clock += ms; } };
}

test('registration enforces adult consent, forbids role injection, verifies once, and revokes sessions at logout', async t => {
  const s = setup(); t.after(() => s.db.close());
  const input = { email: 'adult@example.test', name: 'Người mới', password, adult: false, acceptedTerms: true };
  assert.equal((await s.post('/auth/register', input)).status, 400);
  assert.equal((await s.post('/auth/register', { ...input, adult: true, role: 'admin' })).status, 400);
  const r = await s.post('/auth/register', { ...input, adult: true }); assert.equal(r.status, 201);
  assert.equal((await s.post('/auth/login', { email: input.email, password })).status, 403);
  const token = mailToken(r.body.devLink,'verify');
  assert.equal((await s.post('/auth/verify', { token })).status, 200);
  assert.equal((await s.post('/auth/verify', { token })).status, 400);
  const login = await s.post('/auth/login', { email: input.email, password });
  assert.equal(login.body.user.role, 'learner');
  assert.match(login.headers['set-cookie'][0], /HttpOnly/);
  const cookie = login.headers['set-cookie'][0].split(';')[0];
  assert.equal((await s.get('/me', cookie)).status, 200);
  assert.equal((await s.post('/auth/logout', {}, cookie)).status, 200);
  assert.equal((await s.get('/me', cookie)).status, 401);
});

test('server grading is idempotent; user B cannot access A progress, reviews or data export', async t => {
  const s = setup(); t.after(() => s.db.close());
  const a = await s.account('a@example.test'), b = await s.account('b@example.test');
  const lesson = seedLessons[0], revisionId = `sample-${lesson.id}`;
  const payload = { revisionId, idempotencyKey: randomUUID(), answers: Object.fromEntries(lesson.exercises.map(q => [q.id, q.answer])) };
  assert.equal((await s.post(`/lessons/${lesson.id}/submit`, { ...payload, score: 100 }, a.cookie)).status, 400);
  const first = await s.post(`/lessons/${lesson.id}/submit`, payload, a.cookie);
  assert.equal(first.status, 200, JSON.stringify(first.body)); assert.equal(first.body.score, 100);
  assert.deepEqual((await s.post(`/lessons/${lesson.id}/submit`, payload, a.cookie)).body, first.body);
  assert.equal((await s.post(`/lessons/${lesson.id}/submit`, { ...payload, answers: {} }, a.cookie)).status, 409);
  assert.equal((await s.get('/progress', a.cookie)).body.attempts.length, 1);
  assert.equal((await s.get(`/progress?userId=${a.user.id}`, b.cookie)).body.progress.length, 0);
  assert.equal((await s.get('/reviews', b.cookie)).body.cards.length, 0);
  assert.equal((await s.get(`/me/export?userId=${a.user.id}`, b.cookie)).body.user.id, b.user.id);
  assert.equal((await s.get('/admin/lessons', a.cookie)).status, 403);
  const publicResponse = await s.get(`/lessons/${lesson.id}`);
  assert.equal('answer' in publicResponse.body.lesson.exercises[0], false);
  assert.equal((await s.post(`/lessons/${lesson.id}/submit`, payload)).status, 401);
});

test('CSRF is rejected, expired sessions fail, and SRS events cannot be replayed for another rating', async t => {
  const s = setup(); t.after(() => s.db.close()); const a = await s.account('srs@example.test');
  assert.equal((await request(s.app).post('/api/auth/logout').set('Cookie', a.cookie).send({})).status, 403);
  const l = seedLessons[0];
  await s.post(`/lessons/${l.id}/submit`, { revisionId: `sample-${l.id}`, idempotencyKey: randomUUID(), answers: Object.fromEntries(l.exercises.map(q => [q.id,q.answer])) }, a.cookie);
  const body = { wordId: l.vocabulary[0].id, rating: 3, idempotencyKey: randomUUID() };
  const first = await s.post('/reviews', body, a.cookie); assert.equal(first.status, 200);
  assert.deepEqual((await s.post('/reviews', body, a.cookie)).body, first.body);
  assert.equal((await s.post('/reviews', { ...body, rating: 1 }, a.cookie)).status, 409);
  assert.equal((await s.post('/reviews', { ...body, idempotencyKey: randomUUID() }, a.cookie)).status, 409);
  s.advance(8 * 86400000); assert.equal((await s.get('/me', a.cookie)).status, 401);
});

test('editor cannot self-approve; drafts private; publishing, rollback and import preserve progress', async t => {
  const s = setup(); t.after(() => s.db.close());
  const editor = await s.account('editor@example.test','editor'), reviewer = await s.account('reviewer@example.test','reviewer'), learner = await s.account('learner@example.test');
  const lesson = { ...structuredClone(seedLessons[0]), id: 'cms-isolated', title: 'Bài kiểm thử xuất bản' };
  const draft = await s.post('/admin/lessons', lesson, editor.cookie); assert.equal(draft.status, 201, JSON.stringify(draft.body));
  const rev = draft.body.revisionId;
  assert.equal((await s.get(`/lessons/${lesson.id}`)).status, 404);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'publish'}, editor.cookie)).status, 403);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'submit'}, editor.cookie)).status, 200);
  s.db.prepare("UPDATE users SET role='admin' WHERE id=?").run(editor.user.id);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'approve'}, editor.cookie)).status, 403);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'approve'}, reviewer.cookie)).status, 200);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'archive'}, reviewer.cookie)).status, 403);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'publish'}, reviewer.cookie)).status, 200);
  const answers = Object.fromEntries(lesson.exercises.map(q => [q.id,q.answer]));
  assert.equal((await s.post(`/lessons/${lesson.id}/submit`, {revisionId:rev,idempotencyKey:randomUUID(),answers}, learner.cookie)).body.score, 100);
  assert.equal((await s.post('/admin/import/preview', [lesson], editor.cookie)).body.lessons[0].action, 'new-revision');
  assert.equal((await s.post('/admin/import', [lesson], editor.cookie)).status, 201);
  assert.equal((await s.get(`/lessons/${lesson.id}`)).body.lesson.revisionId, rev);
  assert.equal((await s.post(`/admin/revisions/${rev}/transition`, {action:'archive'}, reviewer.cookie)).status, 200);
  assert.equal((await s.get(`/lessons/${lesson.id}`)).status, 404);
  assert.equal((await s.post(`/admin/revisions/${rev}/rollback`, {}, reviewer.cookie)).status, 200);
  assert.equal((await s.get('/progress', learner.cookie)).body.progress.length, 1);
  assert.equal((await s.get('/admin/export', editor.cookie)).status, 200);
});

test('password reset is single-use and invalidates old sessions; revoked roles take effect immediately', async t => {
  const s = setup(); t.after(() => s.db.close()); const a = await s.account('reset@example.test','admin');
  assert.equal((await s.get('/admin/users', a.cookie)).status, 200);
  s.db.prepare("UPDATE users SET role='learner' WHERE id=?").run(a.user.id);
  assert.equal((await s.get('/admin/users', a.cookie)).status, 403);
  const forgot = await s.post('/auth/forgot', {email:a.user.email});
  const token = mailToken(forgot.body.devLink,'reset');
  assert.equal((await s.post('/auth/reset', {token,password:'New-synthetic-password-123!'})).status, 200);
  assert.equal((await s.post('/auth/reset', {token,password:'Other-synthetic-password-123!'})).status, 400);
  assert.equal((await s.get('/me', a.cookie)).status, 401);
  assert.equal((await s.post('/auth/login', {email:a.user.email,password})).status, 401);
});

test('encrypted backup roundtrip restores users/progress/content, excludes sessions and refuses overwrite', async t => {
  const s = setup(); const dir=mkdtempSync(join(tmpdir(),'hnl-test-')); const restored=openDatabase(join(dir,'restored.sqlite'));
  t.after(()=>{
    s.db.close();restored.close();
    const target=resolve(dir), path=relative(resolve(tmpdir()),target);
    assert.ok(path.startsWith('hnl-test-')&&!path.startsWith('..')&&!isAbsolute(path));
    rmSync(target,{recursive:true,force:true});
  });
  const a=await s.account('backup@example.test'); const lesson=seedLessons[0];
  await s.post(`/lessons/${lesson.id}/submit`,{revisionId:`sample-${lesson.id}`,idempotencyKey:randomUUID(),answers:Object.fromEntries(lesson.exercises.map(q=>[q.id,q.answer]))},a.cookie);
  const snapshot=exportDatabase(s.db); assert.equal('sessions' in snapshot.tables,false);
  const key='Synthetic-backup-passphrase-123!'; const encrypted=encryptBackup(snapshot,key);
  assert.equal(encrypted.includes('backup@example.test'),false);
  assert.throws(()=>decryptBackup(encrypted,'wrong-passphrase-that-is-long'));
  restoreDatabase(restored,decryptBackup(encrypted,key));
  assert.equal((restored.prepare('SELECT COUNT(*) AS n FROM progress').get() as {n:number}).n,1);
  assert.equal((restored.prepare('SELECT COUNT(*) AS n FROM sessions').get() as {n:number}).n,0);
  assert.equal((restored.prepare('SELECT COUNT(*) AS n FROM revisions').get() as {n:number}).n,seedLessons.length);
  assert.throws(()=>restoreDatabase(restored,snapshot),/trống/);
});

test('restore rejects missing tables and broken published pointers without partial data', t=>{
  const source=openDatabase(), target=openDatabase();seedPreview(source);
  t.after(()=>{source.close();target.close();});
  const snapshot=exportDatabase(source);
  const missing=structuredClone(snapshot);delete missing.tables.progress;
  assert.throws(()=>restoreDatabase(target,missing),/thiếu bảng/);
  const broken=structuredClone(snapshot);broken.tables.lessons[0].published_revision_id='missing-revision';
  assert.throws(()=>restoreDatabase(target,broken),/xuất bản/);
  assert.equal((target.prepare('SELECT COUNT(*) AS n FROM lessons').get() as {n:number}).n,0);
});

test('local seed refresh appends a revision without overwriting old content or publishing drafts',t=>{
  const db=openDatabase();t.after(()=>db.close());seedPreview(db);
  const id=seedLessons[0].id, original=`sample-${id}`;
  const old={...seedLessons[0],title:'Bản mẫu trước khi cập nhật'};
  db.prepare('UPDATE revisions SET content=? WHERE id=?').run(JSON.stringify(old),original);
  seedPreview(db);
  assert.equal(JSON.parse(String(db.prepare('SELECT content FROM revisions WHERE id=?').get(original)!.content)).title,old.title);
  assert.equal((db.prepare('SELECT COUNT(*) AS n FROM revisions WHERE lesson_id=?').get(id) as {n:number}).n,2);
  seedPreview(db);
  assert.equal((db.prepare('SELECT COUNT(*) AS n FROM revisions WHERE lesson_id=?').get(id) as {n:number}).n,2);
  assert.equal(db.prepare('SELECT published_revision_id FROM lessons WHERE id=?').get(id)!.published_revision_id,null);
});

test('production fails closed without email or HTTPS and never exposes local sample content', async t=>{
  const db=openDatabase();t.after(()=>db.close());seedPreview(db);
  assert.throws(()=>createApp(db,{localPreview:false,origin}),/Production/);
  const app=createApp(db,{localPreview:false,origin:'https://example.test',sendMail:async()=>{}});
  const catalog=await request(app).get('/api/catalog');assert.deepEqual(catalog.body.lessons,[]);
});
