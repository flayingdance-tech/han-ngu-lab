import test from 'node:test';
import assert from 'node:assert/strict';
import { openDatabase } from '../server/database';
import { seedLessons } from '../content/lessons';
import { importExistingLessons, releasePolicySchema } from '../server/content-release';
import request from 'supertest';
import { createApp } from '../server/app';
const pendingPolicy=releasePolicySchema.parse({version:1,id:'synthetic-release',betaPublicationApproved:false,approvedAt:null,lessonIds:[],podcastIds:[],musicDistribution:'blocked'});

test('canonical import is idempotent, does not publish without approval and preserves users/progress', t => {
  const db = openDatabase(); t.after(() => db.close());
  db.prepare('INSERT INTO users(id,email,name,password,created_at) VALUES(?,?,?,?,?)').run('existing-user', 'existing@example.test', 'Synthetic', 'immutable-hash', 1);
  const before = db.prepare('SELECT * FROM users').all();
  const dry = importExistingLessons(db, seedLessons, pendingPolicy);
  assert.equal(dry.newLessons, 16); assert.equal(db.prepare('SELECT COUNT(*) AS n FROM lessons').get()?.n, 0);
  importExistingLessons(db, seedLessons, pendingPolicy, true);
  const firstRevision = db.prepare('SELECT id,lesson_id FROM revisions ORDER BY id LIMIT 1').get()!;
  db.prepare('INSERT INTO progress VALUES(?,?,?,?,?)').run('existing-user', firstRevision.lesson_id!, firstRevision.id!, 80, 1);
  const oldProgress = db.prepare('SELECT * FROM progress').all();
  const again = importExistingLessons(db, seedLessons, pendingPolicy, true);
  assert.equal(again.newLessons, 0); assert.equal(again.newRevisions, 0); assert.equal(again.betaPointers, 0);
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM lessons WHERE published_revision_id IS NOT NULL').get()?.n, 0);
  assert.deepEqual(db.prepare('SELECT * FROM users').all(), before);
  assert.deepEqual(db.prepare('SELECT * FROM progress').all(), oldProgress);
  assert.equal(db.prepare('SELECT COUNT(*) AS n FROM revisions WHERE reviewer_id IS NOT NULL').get()?.n, 0);
});

test('live beta catalog requires explicit policy, never exposes answer keys or grants a session',async t=>{
  const db=openDatabase();t.after(()=>db.close());
  const policy={...pendingPolicy,betaPublicationApproved:true,approvedAt:new Date().toISOString(),lessonIds:seedLessons.map(l=>l.id)};
  importExistingLessons(db,seedLessons,policy,true);
  const app=createApp(db,{localPreview:false,origin:'https://example.test',releasePolicy:policy,sendMail:async()=>{throw new Error('No mail expected');}});
  const catalog=await request(app).get('/api/catalog');
  assert.equal(catalog.body.localPreview,false);assert.equal(catalog.body.lessons.length,16);
  assert.match(catalog.body.releaseNotice,/chưa được duyệt/);
  const lesson=await request(app).get(`/api/lessons/${seedLessons[0].id}`);
  assert.equal(lesson.status,200);assert.equal(lesson.body.lesson.humanReviewed,false);
  for(const exercise of lesson.body.lesson.exercises)for(const field of ['answer','alternatives','explanation'])assert.equal(Object.hasOwn(exercise,field),false);
  assert.equal((await request(app).get('/api/progress')).status,401);
  const pending=createApp(db,{localPreview:false,origin:'https://example.test',releasePolicy:pendingPolicy,sendMail:async()=>{throw new Error('No mail expected');}});
  assert.equal((await request(pending).get('/api/catalog')).body.lessons.length,0);
  assert.equal((await request(pending).get(`/api/lessons/${seedLessons[0].id}`)).status,404);
});

test('explicit beta release keeps humanReviewed false and never replaces independent publications', t => {
  const db = openDatabase(); t.after(() => db.close());
  const policy = { ...pendingPolicy, betaPublicationApproved: true, approvedAt: new Date().toISOString(), lessonIds: seedLessons.map(l => l.id) };
  importExistingLessons(db, seedLessons, policy, true);
  const first = seedLessons[0];
  db.prepare('INSERT INTO revisions VALUES(?,?,?,?,?,?,?)').run('independent-publication', first.id, JSON.stringify(first), 'published', 'independent-editor', 'human-reviewer', 1);
  db.prepare('UPDATE lessons SET published_revision_id=? WHERE id=?').run('independent-publication', first.id);
  const result = importExistingLessons(db, seedLessons, policy, true);
  assert.equal(result.protectedPublications, 1);
  assert.equal(db.prepare('SELECT published_revision_id FROM lessons WHERE id=?').get(first.id)?.published_revision_id, 'independent-publication');
  for (const row of db.prepare("SELECT content FROM revisions WHERE status='beta'").all()) assert.equal(JSON.parse(String(row.content)).humanReviewed, false);
  assert.equal(releasePolicySchema.safeParse({ ...policy, approvedAt: null }).success, false);
});
