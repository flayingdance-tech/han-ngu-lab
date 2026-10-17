import { z } from 'zod';

export const roles = ['learner', 'editor', 'reviewer', 'admin', 'super_admin'] as const;
export type Role = typeof roles[number];
export const wordSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/).max(100), hanzi: z.string().min(1).max(60),
  pinyin: z.string().min(1).max(150), meaning: z.string().min(1).max(300),
  example: z.string().max(300), examplePinyin: z.string().max(500), exampleMeaning: z.string().max(500),
});
const questionBase = { id: z.string().min(1).max(80), prompt: z.string().min(1).max(1000), explanation: z.string().min(1).max(2000) };
export const exerciseSchema = z.discriminatedUnion('type', [
  z.object({ ...questionBase, type: z.literal('choice'), options: z.array(z.string().min(1).max(400)).min(2).max(8), answer: z.string().min(1).max(400) }),
  z.object({ ...questionBase, type: z.literal('input'), answer: z.string().min(1).max(400), alternatives: z.array(z.string().min(1).max(400)).max(10).default([]) }),
  z.object({ ...questionBase, type: z.literal('order'), options: z.array(z.string().min(1).max(100)).min(2).max(15), answer: z.string().min(1).max(400) }),
]);
export const lessonSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/).max(100), level: z.number().int().min(0).max(6), unit: z.string().min(1).max(120),
  title: z.string().min(3).max(150), subtitle: z.string().max(200), minutes: z.number().int().min(5).max(120),
  order: z.number().int().min(0), objectives: z.array(z.string().min(1).max(500)).min(1).max(12),
  introduction: z.string().min(20).max(10000),
  vocabulary: z.array(wordSchema).min(1).max(60),
  grammar: z.array(z.object({ title: z.string().min(1).max(200), explanation: z.string().min(10).max(5000), example: z.string().min(1).max(500), translation: z.string().min(1).max(500) })).min(1).max(20),
  dialogue: z.array(z.object({ speaker: z.string().max(50), hanzi: z.string().min(1).max(500), pinyin: z.string().min(1).max(800), meaning: z.string().min(1).max(800) })).min(2).max(30),
  exercises: z.array(exerciseSchema).min(3).max(50),
  summary: z.string().min(20).max(3000), provenance: z.string().min(5).max(1000),
  standard: z.string().min(1).max(100), humanReviewed: z.boolean().default(false),
}).superRefine((lesson, ctx) => {
  for (const key of ['vocabulary', 'exercises'] as const) {
    const ids = lesson[key].map(x => x.id);
    if (new Set(ids).size !== ids.length) ctx.addIssue({ code: 'custom', path: [key], message: 'ID bị trùng trong bài.' });
  }
  lesson.exercises.forEach((q, i) => {
    if (q.type === 'choice' && !q.options.includes(q.answer)) ctx.addIssue({ code: 'custom', path: ['exercises', i, 'answer'], message: 'Đáp án phải nằm trong lựa chọn.' });
    if (q.type === 'choice' && new Set(q.options).size !== q.options.length) ctx.addIssue({ code: 'custom', path: ['exercises', i, 'options'], message: 'Lựa chọn bị trùng.' });
  });
});
export type Lesson = z.infer<typeof lessonSchema>;
export type Word = Lesson['vocabulary'][number];
export type Exercise = Lesson['exercises'][number];
export type PublicExercise = Omit<Exercise, 'answer' | 'alternatives' | 'explanation'> & { options?: string[] };
export type PublicLesson = Omit<Lesson, 'exercises'> & { exercises: PublicExercise[]; revisionId: string; preview: boolean };
export type User = { id: string; email: string; name: string; role: Role; verified: boolean; timezone: string; dailyGoal: number };
export type LessonCard = { id: string; level: number; unit: string; title: string; subtitle: string; minutes: number; order: number; words: number; revisionId: string; preview: boolean; humanReviewed: boolean };
export const normalizeAnswer = (s: string) => s.normalize('NFKC').trim().toLocaleLowerCase('zh-CN').replace(/[\s。，！？,.!?]/g, '');
export function grade(lesson: Lesson, answers: Record<string, string>) {
  const feedback = lesson.exercises.map(q => {
    const accepted = q.type === 'input' ? [q.answer, ...q.alternatives] : [q.answer];
    const supplied = answers[q.id] ?? '';
    const correct = q.type === 'choice' ? supplied === q.answer : accepted.some(a => normalizeAnswer(a) === normalizeAnswer(supplied));
    return { id: q.id, prompt: q.prompt, supplied, correct, answer: q.answer, explanation: q.explanation };
  });
  const score = Math.round(feedback.filter(x => x.correct).length / feedback.length * 100);
  return { score, passed: score >= 80, correct: feedback.filter(x => x.correct).length, total: feedback.length, feedback };
}
export function publicLesson(lesson: Lesson, revisionId: string, preview = false): PublicLesson {
  return { ...lesson, revisionId, preview, exercises: lesson.exercises.map(q => ({ id: q.id, type: q.type, prompt: q.prompt, ...('options' in q ? { options: q.options } : {}) })) };
}
// Transparent interval-based SRS v1, not advertised as FSRS.
export function scheduleReview(interval: number, repetitions: number, rating: number, now: number) {
  const next = rating === 1 ? 0 : rating === 2 ? Math.max(1, Math.round(interval * 1.2)) : rating === 3 ? (repetitions === 0 ? 1 : Math.max(3, Math.round(interval * 2))) : Math.max(4, Math.round(interval * 2.8));
  return { interval: next, repetitions: rating === 1 ? 0 : repetitions + 1, due: now + (rating === 1 ? 10 * 60 * 1000 : next * 86400000) };
}
