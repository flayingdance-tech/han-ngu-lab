import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export function openDatabase(path = ':memory:') {
  if (path !== ':memory:') mkdirSync(dirname(path), { recursive: true });
  const db = new DatabaseSync(path);
  db.exec(`PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;
    CREATE TABLE IF NOT EXISTS users(id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT NOT NULL, password TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'learner', verified INTEGER NOT NULL DEFAULT 0, status TEXT NOT NULL DEFAULT 'active', timezone TEXT NOT NULL DEFAULT 'Asia/Ho_Chi_Minh', daily_goal INTEGER NOT NULL DEFAULT 20, created_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, expires_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS tokens(token TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, purpose TEXT NOT NULL, expires_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS lessons(id TEXT PRIMARY KEY, published_revision_id TEXT);
    CREATE TABLE IF NOT EXISTS revisions(id TEXT PRIMARY KEY, lesson_id TEXT NOT NULL REFERENCES lessons(id), content TEXT NOT NULL, status TEXT NOT NULL, author_id TEXT NOT NULL, reviewer_id TEXT, created_at INTEGER NOT NULL);
    CREATE INDEX IF NOT EXISTS revision_lesson ON revisions(lesson_id,created_at);
    CREATE TABLE IF NOT EXISTS attempts(id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, lesson_id TEXT NOT NULL REFERENCES lessons(id), revision_id TEXT NOT NULL REFERENCES revisions(id), idem TEXT NOT NULL, payload TEXT NOT NULL, result TEXT NOT NULL, created_at INTEGER NOT NULL, UNIQUE(user_id,idem));
    CREATE TABLE IF NOT EXISTS progress(user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, lesson_id TEXT NOT NULL REFERENCES lessons(id), revision_id TEXT NOT NULL REFERENCES revisions(id), score INTEGER NOT NULL, completed_at INTEGER NOT NULL, PRIMARY KEY(user_id,lesson_id));
    CREATE TABLE IF NOT EXISTS reviews(user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, word_id TEXT NOT NULL, word TEXT NOT NULL, due INTEGER NOT NULL, interval INTEGER NOT NULL DEFAULT 0, repetitions INTEGER NOT NULL DEFAULT 0, PRIMARY KEY(user_id,word_id));
    CREATE INDEX IF NOT EXISTS review_due ON reviews(user_id,due);
    CREATE TABLE IF NOT EXISTS review_events(id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE, idem TEXT NOT NULL, word_id TEXT NOT NULL, rating INTEGER NOT NULL, result TEXT NOT NULL, created_at INTEGER NOT NULL, UNIQUE(user_id,idem));
    CREATE TABLE IF NOT EXISTS audit(id TEXT PRIMARY KEY, actor TEXT NOT NULL, action TEXT NOT NULL, target TEXT NOT NULL, details TEXT NOT NULL, created_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS consent(user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE, version TEXT NOT NULL, adult INTEGER NOT NULL CHECK(adult=1), created_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS deletion_requests(user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE, requested_at INTEGER NOT NULL);
    PRAGMA user_version=1;
  `);
  return db;
}
export type Database = ReturnType<typeof openDatabase>;
export function transaction<T>(db: Database, run: () => T): T {
  db.exec('BEGIN IMMEDIATE');
  try { const result = run(); db.exec('COMMIT'); return result; }
  catch (error) { db.exec('ROLLBACK'); throw error; }
}
