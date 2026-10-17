import test from 'node:test';
import assert from 'node:assert/strict';
import { reviewContent } from '../lib/editorial';
import { seedLessons } from '../content/lessons';

test('editorial audit flags unrelated examples and missing review evidence',()=>{
  const lesson=structuredClone(seedLessons[0]);
  lesson.vocabulary[0].example='天气很好。';
  lesson.vocabulary[0].examplePinyin='';
  const issues=reviewContent([lesson]);
  assert.ok(issues.some(i=>i.code==='example-word-mismatch'));
  assert.ok(issues.some(i=>i.code==='example-pinyin-missing'));
  assert.ok(issues.some(i=>i.code==='human-review-pending'));
  assert.ok(issues.some(i=>i.code==='mapping-pending'));
  assert.equal(lesson.humanReviewed,false);
});

test('every draft vocabulary entry has a matching example, Pinyin and Vietnamese meaning',()=>{
  const issues=reviewContent(seedLessons);
  assert.deepEqual(issues.filter(i=>i.code.startsWith('example-')),[]);
  assert.equal(issues.filter(i=>i.code==='human-review-pending').length,seedLessons.length);
});
