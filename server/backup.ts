import { randomBytes, scryptSync, createCipheriv, createDecipheriv } from 'node:crypto';
import { z } from 'zod';
import { type Database, transaction } from './database';

const tables = ['users', 'consent', 'lessons', 'revisions', 'attempts', 'progress', 'reviews', 'review_events', 'audit', 'deletion_requests'] as const;
const exportSchema = z.object({ version: z.literal(1), createdAt: z.string(), tables: z.record(z.string(), z.array(z.record(z.string(), z.union([z.string(), z.number(), z.null()])))) });
export function exportDatabase(db: Database) {
  return transaction(db, () => ({ version: 1 as const, createdAt: new Date().toISOString(), tables: Object.fromEntries(tables.map(t => [t, db.prepare(`SELECT * FROM ${t}`).all()])) }));
}
export function restoreDatabase(db: Database, input: unknown) {
  const data = exportSchema.parse(input);
  if (Object.keys(data.tables).length !== tables.length || tables.some(t => !(t in data.tables))) throw new Error('Backup thiếu bảng hoặc có bảng không được hỗ trợ.');
  transaction(db, () => {
    for (const t of tables) if ((db.prepare(`SELECT COUNT(*) AS n FROM ${t}`).get() as { n: number }).n) throw new Error('Restore chỉ được phép vào DB trống.');
    for (const t of tables) {
      const columns = (db.prepare(`PRAGMA table_info(${t})`).all() as { name: string }[]).map(x => x.name);
      for (const row of data.tables[t] ?? []) {
        if (Object.keys(row).length !== columns.length || columns.some(c => !(c in row))) throw new Error(`Schema không khớp: ${t}`);
        db.prepare(`INSERT INTO ${t} (${columns.join(',')}) VALUES (${columns.map(() => '?').join(',')})`).run(...columns.map(c => row[c]));
      }
    }
    if (db.prepare('PRAGMA foreign_key_check').all().length) throw new Error('Backup có reference không hợp lệ.');
    if (db.prepare("SELECT l.id FROM lessons l LEFT JOIN revisions r ON r.id=l.published_revision_id WHERE l.published_revision_id IS NOT NULL AND (r.id IS NULL OR r.lesson_id<>l.id OR r.status<>'published')").all().length) throw new Error('Backup có phiên bản xuất bản không hợp lệ.');
  });
}
export function encryptBackup(data: unknown, passphrase: string) {
  if (passphrase.length < 16) throw new Error('Mật khẩu backup cần ít nhất 16 ký tự.');
  const salt = randomBytes(16), iv = randomBytes(12), key = scryptSync(passphrase, salt, 32);
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(data), 'utf8'), cipher.final()]);
  return JSON.stringify({ format: 'hnl-aes256gcm-v1', salt: salt.toString('base64'), iv: iv.toString('base64'), tag: cipher.getAuthTag().toString('base64'), data: encrypted.toString('base64') });
}
export function decryptBackup(text: string, passphrase: string): unknown {
  const envelope = z.object({ format: z.literal('hnl-aes256gcm-v1'), salt: z.string(), iv: z.string(), tag: z.string(), data: z.string() }).parse(JSON.parse(text));
  const key = scryptSync(passphrase, Buffer.from(envelope.salt, 'base64'), 32);
  const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(envelope.iv, 'base64'));
  decipher.setAuthTag(Buffer.from(envelope.tag, 'base64'));
  return JSON.parse(Buffer.concat([decipher.update(Buffer.from(envelope.data, 'base64')), decipher.final()]).toString('utf8'));
}
