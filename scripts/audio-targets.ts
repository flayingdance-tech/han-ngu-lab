import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync } from 'node:fs';
import { audioKey } from '../lib/audio-catalog';
import type { LessonCard, PublicLesson } from '../lib/domain';

// Only export what the lesson API exposes. Local preview may include draft lessons;
// it is explicitly marked below. Never read CMS-only content or exercise answers.
const origin = process.env.HNL_CONTENT_URL ?? 'http://127.0.0.1:3001';
const catalogResponse = await fetch(`${origin}/api/catalog`);
if (!catalogResponse.ok) throw new Error(`Catalog: HTTP ${catalogResponse.status}`);
const catalog = await catalogResponse.json() as { lessons: LessonCard[]; localPreview: boolean };
const targets = new Map<string, { key: string; id: string; text: string; pinyin: string; lessons: string[]; preview: boolean }>();
for (const card of catalog.lessons) {
  const response = await fetch(`${origin}/api/lessons/${encodeURIComponent(card.id)}`);
  if (!response.ok) throw new Error(`Lesson ${card.id}: HTTP ${response.status}`);
  const { lesson } = await response.json() as { lesson: PublicLesson };
  const spoken = [...lesson.vocabulary.map(w=>({text:w.hanzi,pinyin:w.pinyin})), ...lesson.dialogue.map(d=>({text:d.hanzi,pinyin:d.pinyin}))];
  for (const item of spoken) {
    const key = audioKey(item.text,item.pinyin), existing = targets.get(key);
    if (existing) { existing.lessons.push(lesson.id); existing.preview &&= lesson.preview; }
    else targets.set(key, { ...item, key, id: createHash('sha256').update(key).digest('hex').slice(0,24), lessons:[lesson.id], preview:lesson.preview });
  }
}
mkdirSync('.local/voice',{recursive:true});
writeFileSync('.local/voice/targets.json',JSON.stringify({version:1,localPreview:catalog.localPreview,targets:[...targets.values()]},null,2));
console.log(`${catalog.lessons.length} accessible lessons; ${targets.size} unique vocabulary/dialogue clips. No exercise answers exported.`);
