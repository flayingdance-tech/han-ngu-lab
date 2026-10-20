import express from 'express';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { openDatabase } from './database';
import { createApp } from './app';
import { seedPreview } from './seed';
import { createSesMailer } from './email';

const localPreview = process.env.LOCAL_PREVIEW !== 'false' && process.env.NODE_ENV !== 'production';
const host = process.env.HOST ?? '127.0.0.1';
if (localPreview && !['127.0.0.1', 'localhost', '::1'].includes(host)) throw new Error('Local preview chỉ được bind loopback.');
// Validate production mail configuration before opening any persistent database.
const sendMail = localPreview ? undefined : createSesMailer(process.env);
const db = openDatabase(process.env.DATABASE_PATH ?? '.local/hanngulab.sqlite');
if (localPreview) seedPreview(db);
const app = createApp(db, { localPreview, origin: process.env.APP_ORIGIN ?? 'http://localhost:3000', sendMail });
const output = resolve('out');
if (existsSync(output)) app.use(express.static(output, { extensions: ['html'] }));
const server = app.listen(Number(process.env.PORT ?? 3001), host, () => console.log(`Hán Ngữ Lab API: http://${host}:${process.env.PORT ?? 3001} (${localPreview ? 'LOCAL PREVIEW — email mô phỏng, học liệu chưa duyệt' : 'production'})`));
for (const signal of ['SIGINT', 'SIGTERM'] as const) process.on(signal, () => server.close(() => { db.close(); process.exit(0); }));
