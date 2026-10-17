import type { Database } from './database';
import { transaction } from './database';
import { seedLessons } from '../content/lessons';
import { randomUUID } from 'node:crypto';
export function seedPreview(db: Database) {
  transaction(db, () => {
    for (const lesson of seedLessons) {
      if (db.prepare('SELECT id FROM lessons WHERE id=?').get(lesson.id)) {
        const previous=db.prepare("SELECT content FROM revisions WHERE lesson_id=? AND status='sample' ORDER BY created_at DESC,rowid DESC LIMIT 1").get(lesson.id);
        if(previous&&previous.content!==JSON.stringify(lesson))db.prepare('INSERT INTO revisions VALUES (?,?,?,?,?,?,?)').run(randomUUID(),lesson.id,JSON.stringify(lesson),'sample','system-seed',null,Date.now());
        continue;
      }
      db.prepare('INSERT INTO lessons(id) VALUES (?)').run(lesson.id);
      db.prepare('INSERT INTO revisions VALUES (?,?,?,?,?,?,?)').run(`sample-${lesson.id}`, lesson.id, JSON.stringify(lesson), 'sample', 'system-seed', null, Date.now());
    }
  });
}
