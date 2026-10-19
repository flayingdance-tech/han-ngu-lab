import test from 'node:test';
import assert from 'node:assert/strict';
import { emptyListening, readListening, resumePosition } from '../lib/podcast-listening';
test('listening storage handles corruption, out-of-range seek and completed episodes',()=>{
  assert.deepEqual(readListening('{broken'),emptyListening());
  const memory=emptyListening();memory.positions['office-hello-v1']={seconds:999,duration:60,completed:false};
  const clamped=readListening(JSON.stringify(memory));assert.equal(clamped.positions['office-hello-v1'].seconds,60);
  assert.equal(resumePosition(clamped,'office-hello-v1',60),0);
  clamped.positions['office-hello-v1']={seconds:24,duration:60,completed:false};assert.equal(resumePosition(clamped,'office-hello-v1',60),24);
  clamped.positions['office-hello-v1'].completed=true;assert.equal(resumePosition(clamped,'office-hello-v1',60),0);
  const invalid={...memory,speed:4};assert.deepEqual(readListening(JSON.stringify(invalid)),emptyListening());
});
