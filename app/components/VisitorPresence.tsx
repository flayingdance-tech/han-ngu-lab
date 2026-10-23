'use client';
import { useEffect } from 'react';
import { api, ApiError } from '../../lib/client';
import { PRESENCE_HEARTBEAT_SECONDS } from '../../lib/presence';

export function VisitorPresence() {
  useEffect(() => {
    let stopped = false, inFlight = false, nextAt = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      clearTimeout(timer);
      if (!stopped && document.visibilityState === 'visible') timer = setTimeout(() => { void ping(); }, Math.max(0, nextAt - Date.now()));
    };
    async function ping() {
      if (stopped || inFlight || document.visibilityState !== 'visible') return;
      inFlight = true;
      let delay = PRESENCE_HEARTBEAT_SECONDS * 1000;
      try { await api('/presence/heartbeat', {}); }
      catch (error) { delay = Math.max(60_000, error instanceof ApiError ? (error.retryAfterSeconds ?? 60) * 1000 : 60_000); }
      finally { inFlight = false; nextAt = Date.now() + delay; schedule(); }
    }
    document.addEventListener('visibilitychange', schedule);
    schedule();
    return () => { stopped = true; clearTimeout(timer); document.removeEventListener('visibilitychange', schedule); };
  }, []);
  return null;
}
