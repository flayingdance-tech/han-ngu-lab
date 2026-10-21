import express, { type Request, type Response, type NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { lessonSchema, publicLesson, grade, scheduleReview, type Role, type User } from '../lib/domain';
import { type Database, transaction } from './database';
import { hashPassword, checkPassword, token, digest } from './security';
import { mountPodcasts } from './podcasts';
import { EmailDeliveryError, type SendMail, type MailPurpose } from './email';
import { authMailControl, AUTH_MAIL_MESSAGE, AUTH_MAIL_WAIT_SECONDS } from './auth-mail';
import { betaLessonAllowed, betaNotice, type ReleasePolicy } from './content-release';
import { mountMediaEditorial, releasedPodcasts } from './media-editorial';

type UserRow = { id: string; email: string; name: string; password: string; role: Role; verified: number; status: string; timezone: string; daily_goal: number };
type Revision = { id: string; lesson_id: string; content: string; status: string; author_id: string; reviewer_id: string | null; created_at: number };
export type AppOptions = { localPreview: boolean; origin: string; now?: () => number; sendMail?: SendMail; releasePolicy?: ReleasePolicy; podcastDirectory?: string };
class HttpError extends Error { constructor(public status: number, message: string) { super(message); } }
function assert(condition: unknown, status: number, message: string): asserts condition { if (!condition) throw new HttpError(status, message); }
const userView = (u: UserRow): User => ({ id: u.id, email: u.email, name: u.name, role: u.role, verified: Boolean(u.verified), timezone: u.timezone, dailyGoal: u.daily_goal });
const registration = z.object({ email: z.email().max(254).transform(s => s.toLowerCase()), name: z.string().trim().min(2).max(80), password: z.string().min(12).max(128), adult: z.literal(true), acceptedTerms: z.literal(true) }).strict();
const loginSchema = z.object({ email: z.email().max(254).transform(s => s.toLowerCase()), password: z.string().min(1).max(128) }).strict();
const submissionSchema = z.object({ revisionId: z.string().max(100), idempotencyKey: z.uuid(), answers: z.record(z.string().max(80), z.string().max(1000)) }).strict();

export function createApp(db: Database, options: AppOptions) {
  if (!options.localPreview) {
    let validOrigin=false;
    try { const url=new URL(options.origin); validOrigin=url.protocol==='https:'&&url.origin===options.origin; } catch { /* Fail closed on invalid configuration. */ }
    if (!options.sendMail || !validOrigin) throw new Error('Production yêu cầu HTTPS origin hợp lệ và adapter email đã cấu hình.');
  }
  const app = express(), now = options.now ?? Date.now;
  // Caddy must overwrite incoming forwarded headers and connect over loopback only.
  // Trust only one local hop, never arbitrary remote proxies or a forged leftmost IP.
  app.set('trust proxy', (ip: string, hop: number) => hop === 0 && ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(ip));
  const mailControl = authMailControl(now);
  app.locals.drainAuthMail = mailControl.drain;
  app.disable('x-powered-by');
  app.use(helmet({ contentSecurityPolicy: false, referrerPolicy:{policy:'no-referrer'} }));
  app.use(express.json({ limit: '1mb' }), cookieParser());
  app.use('/api', (_req, res, next) => { res.setHeader('Cache-Control', 'no-store'); next(); });
  // Same-origin JSON + custom-header checks defend cookie-auth writes against CSRF.
  app.use('/api', (req, _res, next) => {
    if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(req.method)) {
      if (req.get('Origin') !== options.origin || req.get('X-HNL-Client') !== 'web' || !req.is('application/json')) return next(new HttpError(403, 'Nguồn yêu cầu không hợp lệ.'));
    }
    next();
  });
  app.use('/api', rateLimit({ windowMs: 60_000, limit: options.localPreview ? 500 : 180, standardHeaders: 'draft-8', legacyHeaders: false, message: { error: 'Bạn thao tác hơi nhanh. Hãy thử lại sau một phút.' } }));
  app.use('/api/auth', rateLimit({ windowMs: 15 * 60_000, limit: options.localPreview ? 100 : 20, standardHeaders: 'draft-8', legacyHeaders: false, message: { error: 'Quá nhiều yêu cầu tài khoản. Vui lòng thử lại sau.' } }));

  function currentUser(req: Request, verified = true): UserRow {
    const raw = req.cookies.hnl_session;
    assert(typeof raw === 'string', 401, 'Vui lòng đăng nhập.');
    const u = db.prepare('SELECT u.* FROM users u JOIN sessions s ON s.user_id=u.id WHERE s.token=? AND s.expires_at>?').get(digest(raw), now()) as UserRow | undefined;
    assert(u && u.status === 'active', 401, 'Phiên đăng nhập đã hết hạn.');
    assert(!verified || u.verified, 403, 'Bạn cần xác minh email trước khi học.');
    return u;
  }
  function privileged(req: Request, allowed: Role[]) { const u = currentUser(req); assert(allowed.includes(u.role), 403, 'Bạn không có quyền thực hiện thao tác này.'); return u; }
  const staff: Role[] = ['editor', 'reviewer', 'admin', 'super_admin'];
  function audit(actor: string, action: string, target: string, details = '') { db.prepare('INSERT INTO audit VALUES (?,?,?,?,?,?)').run(randomUUID(), actor, action, target, details, now()); }
  mountMediaEditorial(app,db,options,privileged,audit,assert);
  function issueToken(user: string, purpose: string) {
    const raw = token();
    db.prepare('DELETE FROM tokens WHERE user_id=? AND purpose=?').run(user, purpose);
    db.prepare('INSERT INTO tokens VALUES (?,?,?,?)').run(digest(raw), user, purpose, now() + 30 * 60_000);
    return raw;
  }
  async function mail(email: string, purpose: MailPurpose, raw: string) {
    // URL fragments are not sent in CDN/origin requests or access-log query strings.
    const link = `${options.origin}/#${purpose}=${encodeURIComponent(raw)}`;
    if (options.localPreview) return link;
    await mailControl.deliver(() => options.sendMail!(email, purpose, link));
    return undefined;
  }
  function published(id: string): Revision {
    let row = db.prepare('SELECT r.* FROM lessons l JOIN revisions r ON l.published_revision_id=r.id WHERE l.id=? AND r.status=?').get(id, 'published') as Revision | undefined;
    if (!row && betaLessonAllowed(options.releasePolicy, id)) row = db.prepare("SELECT r.* FROM lessons l JOIN revisions r ON l.published_revision_id=r.id WHERE l.id=? AND r.status='beta' AND r.author_id=?").get(id, `system-release:${options.releasePolicy!.id}`) as Revision | undefined;
    if (!row && options.localPreview) row = db.prepare("SELECT * FROM revisions WHERE lesson_id=? AND status='sample' ORDER BY created_at DESC,rowid DESC LIMIT 1").get(id) as Revision | undefined;
    assert(row, 404, 'Bài học chưa được xuất bản.'); return row;
  }

  app.get('/api/health', (_req, res) => res.json({ ok: true, mode: options.localPreview ? 'local-preview' : 'live', aiEnabled: false }));
  mountPodcasts(app, options.localPreview, options.podcastDirectory, options.releasePolicy,base=>releasedPodcasts(db,base,options.releasePolicy));
  app.post('/api/auth/register', async (req, res) => {
    const input = registration.parse(req.body);
    if (!options.localPreview && !mailControl.reserve(input.email, res)) return;
    // Hash on both paths: duplicate registration must not reveal account existence.
    const id = randomUUID(), hash = await hashPassword(input.password);
    let created = false;
    transaction(db, () => {
      if (db.prepare('SELECT id FROM users WHERE email=?').get(input.email)) return;
      db.prepare('INSERT INTO users(id,email,name,password,created_at) VALUES (?,?,?,?,?)').run(id, input.email, input.name, hash, now());
      db.prepare('INSERT INTO consent VALUES (?,?,?,?)').run(id, '2026-10-16', 1, now());
      created = true;
    });
    let devLink: string | undefined;
    if (options.localPreview && created) devLink = await mail(input.email, 'verify', issueToken(id, 'verify'));
    else if (!options.localPreview) mailControl.dispatch(async () => {
      if (created) await mail(input.email, 'verify', issueToken(id, 'verify'));
    });
    res.status(201).json({ message: AUTH_MAIL_MESSAGE, retryAfterSeconds: AUTH_MAIL_WAIT_SECONDS, ...(devLink ? { devLink } : {}) });
  });
  app.post('/api/auth/verify', (req, res) => {
    const input = z.object({ token: z.string().min(20).max(200) }).strict().parse(req.body);
    const row = db.prepare("SELECT * FROM tokens WHERE token=? AND purpose='verify' AND expires_at>?").get(digest(input.token), now()) as { user_id: string } | undefined;
    assert(row, 400, 'Liên kết không hợp lệ hoặc đã hết hạn.');
    transaction(db, () => { db.prepare('UPDATE users SET verified=1 WHERE id=?').run(row.user_id); db.prepare('DELETE FROM tokens WHERE token=?').run(digest(input.token)); });
    res.json({ message: 'Email đã được xác minh. Bạn có thể đăng nhập.' });
  });
  app.post('/api/auth/login', async (req, res) => {
    const input = loginSchema.parse(req.body);
    const u = db.prepare('SELECT * FROM users WHERE email=?').get(input.email) as UserRow | undefined;
    const dummy = 'scrypt:00112233445566778899aabbccddeeff:' + '00'.repeat(64);
    const valid = await checkPassword(input.password, u?.password ?? dummy);
    assert(u && valid && u.status === 'active', 401, 'Email hoặc mật khẩu chưa đúng.');
    assert(u.verified, 403, 'Hãy xác minh email trước khi đăng nhập.');
    const raw = token();
    db.prepare('DELETE FROM sessions WHERE expires_at<?').run(now());
    db.prepare('INSERT INTO sessions VALUES (?,?,?)').run(digest(raw), u.id, now() + 7 * 86400000);
    res.cookie('hnl_session', raw, { httpOnly: true, secure: !options.localPreview, sameSite: 'strict', path: '/', maxAge: 7 * 86400000 }).json({ user: userView(u) });
  });
  app.post('/api/auth/logout', (req, res) => {
    if (typeof req.cookies.hnl_session === 'string') db.prepare('DELETE FROM sessions WHERE token=?').run(digest(req.cookies.hnl_session));
    res.clearCookie('hnl_session', { path: '/', httpOnly: true, secure: !options.localPreview, sameSite: 'strict' }).json({ ok: true });
  });
  app.post('/api/auth/forgot', async (req, res) => {
    const { email } = z.object({ email: z.email().max(254).transform(x => x.toLowerCase()) }).strict().parse(req.body);
    if (!options.localPreview && !mailControl.reserve(email, res)) return;
    const u = db.prepare("SELECT id FROM users WHERE email=? AND status='active'").get(email) as { id: string } | undefined;
    let devLink: string | undefined;
    if (options.localPreview && u) devLink = await mail(email, 'reset', issueToken(u.id, 'reset'));
    else if (!options.localPreview) mailControl.dispatch(async () => { if (u) await mail(email, 'reset', issueToken(u.id, 'reset')); });
    res.json({ message: AUTH_MAIL_MESSAGE, retryAfterSeconds: AUTH_MAIL_WAIT_SECONDS, ...(devLink ? { devLink } : {}) });
  });
  app.post('/api/auth/resend-verification', async (req, res) => {
    const { email } = z.object({ email: z.email().max(254).transform(x => x.toLowerCase()) }).strict().parse(req.body);
    if (!options.localPreview && !mailControl.reserve(email, res)) return;
    const u = db.prepare("SELECT id FROM users WHERE email=? AND verified=0 AND status='active'").get(email) as { id: string } | undefined;
    let devLink: string | undefined;
    if (options.localPreview && u) devLink = await mail(email, 'verify', issueToken(u.id, 'verify'));
    else if (!options.localPreview) mailControl.dispatch(async () => { if (u) await mail(email, 'verify', issueToken(u.id, 'verify')); });
    res.json({ message: AUTH_MAIL_MESSAGE, retryAfterSeconds: AUTH_MAIL_WAIT_SECONDS, ...(devLink ? { devLink } : {}) });
  });
  app.post('/api/auth/reset', async (req, res) => {
    const input = z.object({ token: z.string().min(20).max(200), password: z.string().min(12).max(128) }).strict().parse(req.body);
    const row = db.prepare("SELECT * FROM tokens WHERE token=? AND purpose='reset' AND expires_at>?").get(digest(input.token), now()) as { user_id: string } | undefined;
    assert(row, 400, 'Liên kết không hợp lệ hoặc đã hết hạn.');
    const hash = await hashPassword(input.password);
    transaction(db, () => {
      // Recheck after the async password hash, so a token cannot be consumed twice.
      const result = db.prepare('DELETE FROM tokens WHERE token=? AND expires_at>?').run(digest(input.token), now());
      assert(result.changes === 1, 400, 'Liên kết đã được sử dụng.');
      db.prepare('UPDATE users SET password=? WHERE id=?').run(hash, row.user_id);
      db.prepare('DELETE FROM sessions WHERE user_id=?').run(row.user_id);
    });
    res.json({ message: 'Mật khẩu đã được cập nhật. Hãy đăng nhập lại.' });
  });
  app.get('/api/me', (req, res) => res.json({ user: userView(currentUser(req, false)) }));
  app.patch('/api/me', (req, res) => {
    const u = currentUser(req);
    const input = z.object({ name: z.string().trim().min(2).max(80), dailyGoal: z.number().int().min(5).max(180), timezone: z.string().max(80).refine(v => { try { new Intl.DateTimeFormat('en', { timeZone: v }); return true; } catch { return false; } }, 'Múi giờ không hợp lệ.') }).strict().parse(req.body);
    db.prepare('UPDATE users SET name=?,daily_goal=?,timezone=? WHERE id=?').run(input.name, input.dailyGoal, input.timezone, u.id);
    res.json({ user: userView(currentUser(req)) });
  });
  app.get('/api/catalog', (_req, res) => {
    const rows = db.prepare('SELECT id FROM lessons').all() as { id: string }[];
    const lessons = rows.flatMap(row => {
      try { const r = published(row.id), l = lessonSchema.parse(JSON.parse(r.content)); return [{ id: l.id, level: l.level, unit: l.unit, title: l.title, subtitle: l.subtitle, minutes: l.minutes, order: l.order, words: l.vocabulary.length, revisionId: r.id, preview: ['sample','beta'].includes(r.status), humanReviewed: l.humanReviewed }]; }
      catch (e) { if (e instanceof HttpError && e.status === 404) return []; throw e; }
    }).sort((a, b) => a.level - b.level || a.order - b.order);
    res.json({ lessons, localPreview: options.localPreview, ...(options.releasePolicy?.betaPublicationApproved ? { releaseNotice: betaNotice } : {}) });
  });
  app.get('/api/lessons/:id', (req, res) => {
    const r = published(String(req.params.id));
    res.json({ lesson: publicLesson(lessonSchema.parse(JSON.parse(r.content)), r.id, ['sample','beta'].includes(r.status)) });
  });
  app.post('/api/lessons/:id/submit', (req, res) => {
    const u = currentUser(req), input = submissionSchema.parse(req.body), lessonId = String(req.params.id);
    const payload = JSON.stringify({ lessonId, revisionId: input.revisionId, answers: Object.fromEntries(Object.entries(input.answers).sort()) });
    const previous = db.prepare('SELECT result,payload FROM attempts WHERE user_id=? AND idem=?').get(u.id, input.idempotencyKey) as { result: string; payload: string } | undefined;
    if (previous) { assert(previous.payload === payload, 409, 'Mã yêu cầu đã được dùng cho nội dung khác.'); res.json(JSON.parse(previous.result)); return; }
    const rev = published(lessonId);
    assert(rev.id === input.revisionId, 409, 'Bài học có phiên bản mới. Hãy tải lại trước khi nộp.');
    const lesson = lessonSchema.parse(JSON.parse(rev.content));
    assert(Object.keys(input.answers).every(id => lesson.exercises.some(q => q.id === id)), 400, 'Câu hỏi không hợp lệ.');
    const result = { ...grade(lesson, input.answers), attemptId: randomUUID() };
    transaction(db, () => {
      db.prepare('INSERT INTO attempts VALUES (?,?,?,?,?,?,?,?)').run(result.attemptId, u.id, lessonId, rev.id, input.idempotencyKey, payload, JSON.stringify(result), now());
      if (result.passed) {
        db.prepare('INSERT INTO progress VALUES (?,?,?,?,?) ON CONFLICT(user_id,lesson_id) DO UPDATE SET score=MAX(score,excluded.score),revision_id=excluded.revision_id,completed_at=excluded.completed_at').run(u.id, lessonId, rev.id, result.score, now());
        for (const word of lesson.vocabulary) db.prepare('INSERT INTO reviews(user_id,word_id,word,due) VALUES (?,?,?,?) ON CONFLICT(user_id,word_id) DO NOTHING').run(u.id, word.id, JSON.stringify(word), now());
      }
    });
    res.json(result);
  });
  app.get('/api/progress', (req, res) => {
    const u = currentUser(req);
    res.json({ progress: db.prepare('SELECT lesson_id AS lessonId,score,completed_at AS completedAt FROM progress WHERE user_id=? ORDER BY completed_at DESC').all(u.id), attempts: db.prepare('SELECT id,lesson_id AS lessonId,result,created_at AS createdAt FROM attempts WHERE user_id=? ORDER BY created_at DESC LIMIT 50').all(u.id).map(x => ({ ...x, result: JSON.parse(String(x.result)) })), due: (db.prepare('SELECT COUNT(*) AS n FROM reviews WHERE user_id=? AND due<=?').get(u.id, now()) as { n: number }).n, totalWords: (db.prepare('SELECT COUNT(*) AS n FROM reviews WHERE user_id=?').get(u.id) as { n: number }).n });
  });
  app.get('/api/reviews', (req, res) => {
    const u = currentUser(req);
    res.json({ cards: db.prepare('SELECT word,due,interval,repetitions FROM reviews WHERE user_id=? AND due<=? ORDER BY due LIMIT 50').all(u.id, now()).map(x => ({ ...x, word: JSON.parse(String(x.word)) })) });
  });
  app.post('/api/reviews', (req, res) => {
    const u = currentUser(req);
    const input = z.object({ wordId: z.string().min(1).max(100), rating: z.number().int().min(1).max(4), idempotencyKey: z.uuid() }).strict().parse(req.body);
    const previous = db.prepare('SELECT * FROM review_events WHERE user_id=? AND idem=?').get(u.id, input.idempotencyKey) as { word_id: string; rating: number; result: string } | undefined;
    if (previous) { assert(previous.word_id === input.wordId && previous.rating === input.rating, 409, 'Mã yêu cầu đã dùng.'); res.json(JSON.parse(previous.result)); return; }
    const card = db.prepare('SELECT * FROM reviews WHERE user_id=? AND word_id=?').get(u.id, input.wordId) as { interval: number; repetitions: number; due: number } | undefined;
    assert(card, 404, 'Thẻ không tồn tại.'); assert(card.due <= now(), 409, 'Thẻ chưa đến hạn ôn.');
    const result = scheduleReview(card.interval, card.repetitions, input.rating, now());
    transaction(db, () => {
      db.prepare('UPDATE reviews SET due=?,interval=?,repetitions=? WHERE user_id=? AND word_id=?').run(result.due, result.interval, result.repetitions, u.id, input.wordId);
      db.prepare('INSERT INTO review_events VALUES (?,?,?,?,?,?,?)').run(randomUUID(), u.id, input.idempotencyKey, input.wordId, input.rating, JSON.stringify(result), now());
    }); res.json(result);
  });
  app.get('/api/me/export', (req, res) => {
    const u = currentUser(req), data: Record<string, unknown> = { version: 1, user: userView(u), exportedAt: new Date(now()).toISOString() };
    for (const t of ['progress', 'attempts', 'reviews', 'review_events', 'consent']) data[t] = db.prepare(`SELECT * FROM ${t} WHERE user_id=?`).all(u.id);
    res.setHeader('Content-Disposition', 'attachment; filename="hanngulab-my-data.json"'); res.json(data);
  });
  app.post('/api/me/delete-request', (req, res) => {
    const u = currentUser(req); db.prepare('INSERT INTO deletion_requests VALUES (?,?) ON CONFLICT(user_id) DO NOTHING').run(u.id, now());
    res.json({ message: 'Đã ghi nhận yêu cầu xóa tài khoản. Quản trị viên cần xử lý; dữ liệu chưa bị xóa.' });
  });

  app.get('/api/admin/lessons', (req, res) => {
    privileged(req, staff);
    res.json({ revisions: db.prepare('SELECT r.*,l.published_revision_id FROM revisions r JOIN lessons l ON l.id=r.lesson_id ORDER BY created_at DESC LIMIT 200').all().map(r => ({ ...r, content: JSON.parse(String(r.content)) })) });
  });
  app.post('/api/admin/lessons', (req, res) => {
    const u = privileged(req, ['editor', 'admin', 'super_admin']), lesson = lessonSchema.parse(req.body);
    const id = randomUUID();
    transaction(db, () => {
      db.prepare('INSERT INTO lessons(id) VALUES (?) ON CONFLICT(id) DO NOTHING').run(lesson.id);
      db.prepare('INSERT INTO revisions VALUES (?,?,?,?,?,?,?)').run(id, lesson.id, JSON.stringify({ ...lesson, humanReviewed: false }), 'draft', u.id, null, now());
      audit(u.id, 'draft.create', id, lesson.id);
    }); res.status(201).json({ revisionId: id });
  });
  app.post('/api/admin/revisions/:id/transition', (req, res) => {
    const u = privileged(req, staff), input = z.object({ action: z.enum(['submit', 'request-changes', 'approve', 'publish', 'archive']) }).strict().parse(req.body);
    const r = db.prepare('SELECT * FROM revisions WHERE id=?').get(String(req.params.id)) as Revision | undefined;
    assert(r, 404, 'Không tìm thấy phiên bản.');
    const reviewer = ['reviewer', 'admin', 'super_admin'].includes(u.role);
    let next = '';
    if (input.action === 'submit') { assert(r.status === 'draft' && (r.author_id === u.id || ['admin', 'super_admin'].includes(u.role)), 403, 'Chỉ tác giả hoặc quản trị viên gửi bản nháp.'); next = 'in_review'; }
    if (input.action === 'request-changes') { assert(reviewer && r.status === 'in_review', 403, 'Không thể trả lại phiên bản này.'); next = 'draft'; }
    if (input.action === 'approve') { assert(reviewer && r.author_id !== u.id && r.status === 'in_review', 403, 'Cần người duyệt khác tác giả và bài đang chờ duyệt.'); next = 'approved'; }
    if (input.action === 'publish') { assert(reviewer && r.author_id !== u.id && r.status === 'approved' && r.reviewer_id, 403, 'Bài cần được người khác duyệt trước khi xuất bản.'); next = 'published'; }
    if (input.action === 'archive') { assert(reviewer && ['published','beta'].includes(r.status), 403, 'Chỉ thu hồi phiên bản từng xuất bản.'); next = r.status === 'beta' ? 'beta_archived' : 'archived'; }
    transaction(db, () => {
      db.prepare('UPDATE revisions SET status=?,reviewer_id=? WHERE id=?').run(next, input.action === 'approve' ? u.id : r.reviewer_id, r.id);
      if (next === 'published') db.prepare('UPDATE lessons SET published_revision_id=? WHERE id=?').run(r.id, r.lesson_id);
      if (['archived','beta_archived'].includes(next)) db.prepare('UPDATE lessons SET published_revision_id=NULL WHERE id=? AND published_revision_id=?').run(r.lesson_id, r.id);
      audit(u.id, `revision.${input.action}`, r.id);
    }); res.json({ status: next });
  });
  app.post('/api/admin/revisions/:id/rollback', (req, res) => {
    const u = privileged(req, ['reviewer', 'admin', 'super_admin']);
    const r = db.prepare('SELECT * FROM revisions WHERE id=?').get(String(req.params.id)) as Revision | undefined;
    const beta = r && ['beta','beta_archived'].includes(r.status) && betaLessonAllowed(options.releasePolicy,r.lesson_id) && r.author_id === `system-release:${options.releasePolicy!.id}`;
    assert(r && (beta || ['published', 'archived'].includes(r.status) && r.reviewer_id), 409, 'Chỉ khôi phục được bản beta được cho phép hoặc phiên bản từng xuất bản/được duyệt.');
    transaction(db, () => { db.prepare('UPDATE revisions SET status=? WHERE id=?').run(beta?'beta':'published',r.id); db.prepare('UPDATE lessons SET published_revision_id=? WHERE id=?').run(r.id, r.lesson_id); audit(u.id, 'lesson.rollback', r.id); });
    res.json({ ok: true });
  });
  app.post('/api/admin/import/preview', (req, res) => {
    privileged(req, ['editor', 'admin', 'super_admin']);
    const items = z.array(lessonSchema).min(1).max(100).parse(req.body);
    assert(new Set(items.map(x => x.id)).size === items.length, 400, 'ID bài học trong file bị trùng.');
    res.json({ count: items.length, lessons: items.map(l => ({ id: l.id, title: l.title, action: db.prepare('SELECT id FROM lessons WHERE id=?').get(l.id) ? 'new-revision' : 'new-lesson' })) });
  });
  app.post('/api/admin/import', (req, res) => {
    const u = privileged(req, ['editor', 'admin', 'super_admin']), items = z.array(lessonSchema).min(1).max(100).parse(req.body);
    assert(new Set(items.map(x => x.id)).size === items.length, 400, 'ID bài học trong file bị trùng.');
    transaction(db, () => {
      for (const l of items) {
        db.prepare('INSERT INTO lessons(id) VALUES (?) ON CONFLICT(id) DO NOTHING').run(l.id);
        db.prepare('INSERT INTO revisions VALUES (?,?,?,?,?,?,?)').run(randomUUID(), l.id, JSON.stringify({ ...l, humanReviewed: false }), 'draft', u.id, null, now());
      }
      audit(u.id, 'content.import', 'batch', String(items.length));
    }); res.status(201).json({ imported: items.length, status: 'draft' });
  });
  app.get('/api/admin/export', (req, res) => {
    privileged(req, staff);
    const rows = db.prepare('SELECT content FROM revisions r WHERE r.id=(SELECT r2.id FROM revisions r2 WHERE r2.lesson_id=r.lesson_id ORDER BY created_at DESC,rowid DESC LIMIT 1)').all();
    res.setHeader('Content-Disposition', 'attachment; filename="hanngulab-content.json"'); res.json(rows.map(x => JSON.parse(String(x.content))));
  });
  app.get('/api/admin/audit', (req, res) => { privileged(req, ['admin', 'super_admin']); res.json({ events: db.prepare('SELECT * FROM audit ORDER BY created_at DESC LIMIT 100').all() }); });
  app.get('/api/admin/users', (req, res) => { privileged(req, ['admin', 'super_admin']); res.json({ users: db.prepare('SELECT id,email,name,role,status,verified FROM users ORDER BY created_at DESC LIMIT 100').all(), deletions: db.prepare('SELECT * FROM deletion_requests').all() }); });
  app.patch('/api/admin/users/:id', (req, res) => {
    const u = privileged(req, ['super_admin']), input = z.object({ role: z.enum(['learner', 'editor', 'reviewer', 'admin']), status: z.enum(['active', 'suspended']) }).strict().parse(req.body);
    const target = db.prepare('SELECT * FROM users WHERE id=?').get(String(req.params.id)) as UserRow | undefined;
    assert(target && target.role !== 'super_admin' && target.id !== u.id, 403, 'Không thể thay đổi tài khoản này.');
    transaction(db, () => { db.prepare('UPDATE users SET role=?,status=? WHERE id=?').run(input.role, input.status, target.id); db.prepare('DELETE FROM sessions WHERE user_id=?').run(target.id); audit(u.id, 'user.update', target.id, JSON.stringify(input)); });
    res.json({ ok: true });
  });
  app.use('/api', (_req, _res, next) => next(new HttpError(404, 'Đường dẫn không tồn tại.')));
  app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (error instanceof EmailDeliveryError) { res.status(503).json({ error: error.message }); return; }
    if (error instanceof z.ZodError) { res.status(400).json({ error: 'Dữ liệu chưa hợp lệ.', issues: error.issues.map(x => ({ path: x.path.join('.'), message: x.message })) }); return; }
    if (error instanceof HttpError) { res.status(error.status).json({ error: error.message }); return; }
    if (error && typeof error==='object' && 'type' in error && error.type==='entity.too.large') { res.status(413).json({error:'Nội dung yêu cầu vượt giới hạn cho phép.'}); return; }
    if (error instanceof SyntaxError) { res.status(400).json({ error: 'JSON không hợp lệ.' }); return; }
    console.error('Request failed:', error instanceof Error ? error.name : 'UnknownError');
    res.status(500).json({ error: 'Không thể xử lý yêu cầu. Vui lòng thử lại.' });
  });
  return app;
}
