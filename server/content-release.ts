import { createHash } from 'node:crypto';
import { z } from 'zod';
import { lessonSchema, type Lesson } from '../lib/domain';
import { type Database, transaction } from './database';

export const releasePolicySchema = z.object({
  version: z.literal(1), id: z.string().regex(/^[a-z0-9-]+$/),
  betaPublicationApproved: z.boolean(), approvedAt: z.iso.datetime({ offset: true }).nullable(),
  lessonIds: z.array(z.string().regex(/^[a-z0-9-]+$/)), podcastIds: z.array(z.string().regex(/^[a-z0-9-]+$/)),
  musicDistribution: z.enum(['blocked', 'voice-only', 'owner-authorized']),
}).strict().superRefine((policy, ctx) => {
  if (policy.betaPublicationApproved && !policy.approvedAt) ctx.addIssue({ code: 'custom', message: 'Explicit owner approval timestamp required' });
  for (const key of ['lessonIds', 'podcastIds'] as const) if (new Set(policy[key]).size !== policy[key].length) ctx.addIssue({ code: 'custom', message: 'Duplicate release IDs' });
});
export type ReleasePolicy = z.infer<typeof releasePolicySchema>;
export const betaNotice = 'Bản thử nghiệm — Chưa duyệt. Học liệu và âm đọc chưa được duyệt chuyên môn độc lập; tuyến HSK5–6 chưa chứng nhận độ phủ kỳ thi.';
export const betaLessonAllowed = (policy: ReleasePolicy | undefined, id: string) => Boolean(policy?.betaPublicationApproved && policy.approvedAt && policy.lessonIds.includes(id));
const hash = (value: string) => createHash('sha256').update(value).digest('hex');

/** Canonical lessons only. Never copies local users, fixtures, progress or unpublished DB dumps. */
export function importExistingLessons(db: Database, input: Lesson[], policyInput: unknown, apply = false) {
  const policy = releasePolicySchema.parse(policyInput), lessons = z.array(lessonSchema).min(1).max(100).parse(input);
  if (new Set(lessons.map(l => l.id)).size !== lessons.length) throw new Error('Duplicate canonical lesson IDs');
  if (policy.lessonIds.some(id => !lessons.some(l => l.id === id))) throw new Error('Release policy references missing canonical lessons');
  const author = `system-release:${policy.id}`;
  const plan = lessons.map(lesson => {
    const content = JSON.stringify(lesson), status = betaLessonAllowed(policy, lesson.id) ? 'beta' : 'draft';
    const revisionId = `release-${status}-${lesson.id}-${hash(content).slice(0, 16)}`;
    const existing = db.prepare('SELECT id,published_revision_id FROM lessons WHERE id=?').get(lesson.id) as { id: string; published_revision_id: string | null } | undefined;
    const revision = db.prepare('SELECT content,status,author_id FROM revisions WHERE id=?').get(revisionId);
    if (revision && (revision.content !== content || ![status, ...(status === 'beta' ? ['beta_archived'] : [])].includes(String(revision.status)) || revision.author_id !== author)) throw new Error('Immutable release revision collision');
    const current = existing?.published_revision_id ? db.prepare('SELECT status,author_id FROM revisions WHERE id=?').get(existing.published_revision_id) : undefined;
    // Never replace an independently published lesson or another editor's publication.
    const canPublish = status === 'beta' && revision?.status !== 'beta_archived' && (!existing?.published_revision_id || current?.status === 'beta' && current.author_id === author);
    return { lesson, content, status, revisionId, newLesson: !existing, newRevision: !revision, publish: canPublish && existing?.published_revision_id !== revisionId, protectedPublication: status === 'beta' && !canPublish };
  });
  const summary = { lessons: lessons.length, newLessons: plan.filter(p => p.newLesson).length, newRevisions: plan.filter(p => p.newRevision).length, betaPointers: plan.filter(p => p.publish).length, protectedPublications: plan.filter(p => p.protectedPublication).length, humanReviewChanged: false, userDataChanged: false, applied: apply };
  if (apply) transaction(db, () => {
    const protectedTables = ['users', 'sessions', 'tokens', 'attempts', 'progress', 'reviews', 'review_events', 'consent', 'deletion_requests'];
    const fingerprint = () => {
      const state = createHash('sha256');
      for (const table of protectedTables) {
        state.update(table);
        for (const row of db.prepare(`SELECT * FROM ${table} ORDER BY rowid`).iterate()) state.update(JSON.stringify(row));
      }
      return state.digest('hex');
    };
    const before = fingerprint();
    for (const item of plan) {
      if (item.newLesson) db.prepare('INSERT INTO lessons(id) VALUES(?)').run(item.lesson.id);
      if (item.newRevision) db.prepare('INSERT INTO revisions VALUES(?,?,?,?,?,?,?)').run(item.revisionId, item.lesson.id, item.content, item.status, author, null, Date.now());
      if (item.publish) db.prepare('UPDATE lessons SET published_revision_id=? WHERE id=?').run(item.revisionId, item.lesson.id);
    }
    if (summary.newLessons || summary.newRevisions || summary.betaPointers) {
      const auditId = `release-${hash(JSON.stringify(plan.map(p => [p.revisionId, p.publish]))).slice(0, 32)}`;
      db.prepare('INSERT OR IGNORE INTO audit VALUES(?,?,?,?,?,?)').run(auditId, author, 'content.import', policy.id, JSON.stringify(summary), Date.now());
    }
    if (before !== fingerprint()) throw new Error('Protected user records changed; import rolled back');
  });
  return summary;
}
