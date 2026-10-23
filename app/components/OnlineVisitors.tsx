'use client';
import { useEffect, useState } from 'react';
import { UsersRound } from 'lucide-react';
import { api } from '../../lib/client';
import { ONLINE_REFRESH_SECONDS, type OnlineVisitorsSnapshot } from '../../lib/presence';

export function OnlineVisitors() {
  const [snapshot, setSnapshot] = useState<OnlineVisitorsSnapshot | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true, inFlight = false;
    async function refresh() {
      if (!active || inFlight || document.visibilityState !== 'visible') return;
      inFlight = true;
      try { const result = await api<OnlineVisitorsSnapshot>('/admin/online'); if (active) { setSnapshot(result); setError(false); } }
      catch { if (active) { setSnapshot(null); setError(true); } }
      finally { inFlight = false; }
    }
    void refresh();
    const timer = setInterval(() => { void refresh(); }, ONLINE_REFRESH_SECONDS * 1000);
    const onVisible = () => { void refresh(); };
    document.addEventListener('visibilitychange', onVisible);
    return () => { active = false; clearInterval(timer); document.removeEventListener('visibilitychange', onVisible); };
  }, []);
  return <section className="card online-visitors" aria-labelledby="online-visitors-title">
    <div className="online-visitors-icon" aria-hidden="true"><UsersRound size={24}/></div>
    <div className="online-visitors-copy"><h2 id="online-visitors-title">Đang online</h2>
      <p className="online-visitors-value" role="status" aria-live="polite" aria-atomic="true"><strong>{snapshot ? snapshot.visitors.toLocaleString('vi') : '—'}</strong><span>{snapshot ? 'trình duyệt đang hoạt động' : error ? 'Tạm thời chưa có số liệu' : 'Đang tải thống kê…'}</span></p>
      <p className="muted">Ước tính trong 2 phút gần nhất, gồm khách chưa đăng nhập và phiên của bạn. Các tab dùng chung cookie được tính một lần.</p>
      <small className="muted">Chỉ Admin · Tự cập nhật mỗi 15 giây{snapshot ? ` · Cập nhật lúc ${new Date(snapshot.asOf).toLocaleTimeString('vi')}` : ''}</small>
      {error && <p className="online-visitors-error" role="alert">Không tải được thống kê hoặc phiên quản trị đã hết hạn. Hệ thống sẽ thử lại tự động.</p>}
    </div>
  </section>;
}
