import type { Express, Request } from 'express';
import { rateLimit } from 'express-rate-limit';
import { z } from 'zod';
import { digest, token } from './security';
import { ONLINE_WINDOW_SECONDS, ONLINE_REFRESH_SECONDS } from '../lib/presence';

// Single-process, bounded, ephemeral presence. No user identifiers or database writes.
export function createPresenceStore(now: () => number, capacity = 10_000) {
  const visitors = new Map<string, number>();
  function prune() {
    const cutoff = now() - ONLINE_WINDOW_SECONDS * 1000;
    for (const [id, seen] of visitors) if (seen <= cutoff) visitors.delete(id);
  }
  return {
    touch(id: string) { prune(); if (!visitors.has(id)) return false; visitors.set(id, now()); return true; },
    add(id: string) { prune(); if (visitors.size >= capacity) return false; visitors.set(id, now()); return true; },
    count() { prune(); return visitors.size; },
  };
}

export function mountPresence(app: Express, options: { now: () => number; localPreview: boolean; authorizeAdmin: (req: Request) => unknown }) {
  const store = createPresenceStore(options.now);
  const emptyBody = z.object({}).strict();
  const newVisitorLimit = rateLimit({ windowMs: 60_000, limit: 20, standardHeaders: false, legacyHeaders: false,
    handler: (_req, res) => {
      res.setHeader('Retry-After', '60');
      res.status(429).json({ error: 'Quá nhiều phiên truy cập mới. Vui lòng chờ một phút.', retryAfterSeconds: 60 });
    } });
  app.post('/api/presence/heartbeat', (req, res, next) => {
    emptyBody.parse(req.body);
    const raw: unknown = req.cookies.hnl_presence;
    const cookieOptions = { httpOnly: true, secure: !options.localPreview, sameSite: 'strict' as const, path: '/api/presence', maxAge: ONLINE_WINDOW_SECONDS * 1000 };
    if (typeof raw === 'string' && /^[A-Za-z0-9_-]{43}$/.test(raw) && store.touch(digest(raw))) { res.cookie('hnl_presence', raw, cookieOptions); res.json({ ok: true }); return; }
    // Browser-supplied identifiers never create entries. Only server-issued random cookies do.
    newVisitorLimit(req, res, (error?: unknown) => {
      if (error) { next(error); return; }
      try {
        const value = token();
        if (!store.add(digest(value))) { res.status(503).json({ error: 'Thống kê truy cập tạm thời bận.', retryAfterSeconds: 60 }); return; }
        res.cookie('hnl_presence', value, cookieOptions);
        res.json({ ok: true });
      } catch (error) { next(error); }
    });
  });
  app.get('/api/admin/online', (req, res) => {
    options.authorizeAdmin(req);
    res.setHeader('Cache-Control', 'private, no-store');
    res.json({ visitors: store.count(), windowSeconds: ONLINE_WINDOW_SECONDS, refreshSeconds: ONLINE_REFRESH_SECONDS, asOf: new Date(options.now()).toISOString() });
  });
}
