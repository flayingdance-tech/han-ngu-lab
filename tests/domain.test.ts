import test from 'node:test';
import assert from 'node:assert/strict';
import { lessonSchema, grade, publicLesson, scheduleReview } from '../lib/domain';
import { seedLessons } from '../content/lessons';

test('seed records validate; duplicate exercise IDs and invalid choice answers are rejected', () => {
  for (const lesson of seedLessons) assert.equal(lessonSchema.safeParse(lesson).success, true);
  const invalid = structuredClone(seedLessons[0]);
  invalid.exercises[1].id = invalid.exercises[0].id;
  assert.equal(lessonSchema.safeParse(invalid).success, false);
  const badAnswer = structuredClone(seedLessons[0]);
  badAnswer.exercises[0].answer = 'not an option';
  assert.equal(lessonSchema.safeParse(badAnswer).success, false);
});
test('grading rejects missing and wrong answers, normalizes whitespace without accepting a wrong tone', () => {
  const lesson = seedLessons[0];
  assert.equal(grade(lesson, {}).score, 0);
  const answers = Object.fromEntries(lesson.exercises.map(q => [q.id, q.answer]));
  assert.equal(grade(lesson, answers).score, 100);
  answers[lesson.exercises[1].id] = ' 谢谢 你。';
  assert.equal(grade(lesson, answers).score, 100);
  answers[lesson.exercises[0].id] = 'mā';
  assert.equal(grade(lesson, answers).score, 80);
});
test('public lesson does not contain answer keys, alternatives or explanations', () => {
  const lesson = publicLesson(seedLessons[0], 'rev-test');
  for (const q of lesson.exercises) {
    assert.equal('answer' in q, false); assert.equal('explanation' in q, false); assert.equal('alternatives' in q, false);
  }
});
test('SRS uses exact UTC intervals; forgotten card returns in ten minutes', () => {
  const now = Date.parse('2026-10-17T16:59:00Z');
  assert.equal(scheduleReview(0, 0, 3, now).due, now + 86400000);
  assert.deepEqual(scheduleReview(8, 4, 1, now), { interval: 0, repetitions: 0, due: now + 600000 });
  assert.equal(scheduleReview(4, 2, 3, now).interval, 8);
});
