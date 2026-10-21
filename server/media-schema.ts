import type { DatabaseSync } from 'node:sqlite';

/** Additive v1 extension: code rollback does not drop or downgrade any learner table. */
export function ensureMediaSchema(db: DatabaseSync) {
  db.exec(`CREATE TABLE IF NOT EXISTS media_items(id TEXT PRIMARY KEY, kind TEXT NOT NULL CHECK(kind IN ('audio','podcast')), published_revision_id TEXT);
    CREATE TABLE IF NOT EXISTS media_revisions(id TEXT PRIMARY KEY, item_id TEXT NOT NULL REFERENCES media_items(id), content TEXT NOT NULL, status TEXT NOT NULL, author_id TEXT NOT NULL, reviewer_id TEXT, review_note TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL);
    CREATE INDEX IF NOT EXISTS media_revision_item ON media_revisions(item_id,created_at);`);
}
