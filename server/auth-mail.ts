import type { Response } from 'express';
import { EmailDeliveryError } from './email';
import { digest } from './security';
import { setTimeout as sleep } from 'node:timers/promises';

export const AUTH_MAIL_WAIT_SECONDS = 60;
export const AUTH_MAIL_MESSAGE = 'Yêu cầu đã được tiếp nhận. Nếu email đủ điều kiện, bạn sẽ nhận được thư. Hãy kiểm tra cả mục Spam; nếu chưa nhận được, thư có thể tạm thời chưa gửi được. Bạn có thể thử lại sau 60 giây.';

/** One process, bounded memory. No raw email/token is stored in the cooldown map. */
export function authMailControl(now: () => number) {
  const cooldown = new Map<string, { nextAt: number; windowEnd: number; count: number }>();
  const pending = new Set<Promise<void>>();
  let mailTail = Promise.resolve(), nextSendAt = 0;
  function deliver(task: () => Promise<void>) {
    const delivery = mailTail.then(async () => {
      const delay = nextSendAt - Date.now();
      if (delay > 0) await sleep(delay);
      nextSendAt = Date.now() + 1100;
      await task();
    });
    mailTail = delivery.catch(() => {});
    return delivery;
  }
  function reserve(email: string, res: Response): boolean {
    const time = now();
    for (const [key, entry] of cooldown) if (entry.windowEnd <= time) cooldown.delete(key);
    const key = digest(email), entry = cooldown.get(key);
    const until = entry && (entry.count >= 5 ? entry.windowEnd : entry.nextAt);
    if (until && until > time) {
      const seconds = Math.max(1, Math.ceil((until - time) / 1000));
      res.setHeader('Retry-After', seconds);
      res.status(429).json({ error: `Vui lòng chờ ${seconds} giây trước khi yêu cầu gửi thư lại.`, retryAfterSeconds: seconds });
      return false;
    }
    // Global capacity checks apply before any account lookup, including unknown emails.
    if (cooldown.size >= 10_000 || pending.size >= 20) {
      res.setHeader('Retry-After', AUTH_MAIL_WAIT_SECONDS);
      res.status(503).json({ error: 'Dịch vụ email tạm thời bận. Vui lòng thử lại sau 60 giây.', retryAfterSeconds: AUTH_MAIL_WAIT_SECONDS });
      return false;
    }
    cooldown.set(key, { nextAt: time + AUTH_MAIL_WAIT_SECONDS * 1000, windowEnd: entry?.windowEnd ?? time + 3_600_000, count: (entry?.count ?? 0) + 1 });
    return true;
  }
  function dispatch(task: () => Promise<void>) {
    if (pending.size >= 20) { console.warn('Auth email delivery failed:', 'capacity_reached'); return; }
    // Response never waits for SMTP: recipient-specific SES rejection cannot be probed by latency.
    const job = new Promise<void>(resolve => setImmediate(resolve)).then(task).catch(error => {
      const reason = error instanceof EmailDeliveryError ? error.reason : 'delivery_failed';
      console.warn('Auth email delivery failed:', reason);
    });
    pending.add(job);
    void job.finally(() => pending.delete(job));
  }
  return { reserve, dispatch, deliver, drain: async () => { await Promise.all([...pending]); } };
}
