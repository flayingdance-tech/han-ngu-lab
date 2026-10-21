import type { Response } from 'express';
import { digest } from './security';

/** Single-process, bounded, temporary account protection; never permanently locks a user. */
export function loginGuard(now: () => number) {
  const attempts = new Map<string, { count: number; until: number }>();
  return {
    reserve(email: string, res: Response) {
      const time = now();
      for (const [key, record] of attempts) if (record.until <= time) attempts.delete(key);
      const key = digest(email), record = attempts.get(key);
      if (record && record.count >= 10) {
        const seconds = Math.max(1, Math.ceil((record.until - time) / 1000));
        res.setHeader('Retry-After', seconds);
        res.status(429).json({ error: 'Quá nhiều yêu cầu đăng nhập. Vui lòng thử lại sau.', retryAfterSeconds: seconds });
        return false;
      }
      if (!record && attempts.size >= 10_000) {
        res.setHeader('Retry-After', 60);
        res.status(503).json({ error: 'Dịch vụ đăng nhập tạm thời bận. Vui lòng thử lại sau.', retryAfterSeconds: 60 });
        return false;
      }
      attempts.set(key, { count: (record?.count ?? 0) + 1, until: record?.until ?? time + 15 * 60_000 });
      return true;
    },
    success(email: string) { attempts.delete(digest(email)); },
  };
}
