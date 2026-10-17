'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Mail, ShieldCheck } from 'lucide-react';
import { api } from '../../lib/client';
import type { User } from '../../lib/domain';

export function AuthPanel({ onClose, onLogin, initialReset }: { onClose: () => void; onLogin: (u: User) => void; initialReset?: string }) {
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panel.current?.querySelector<HTMLElement>('input,button')?.focus();
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  const [mode, setMode] = useState<'login'|'register'|'forgot'|'reset'>(initialReset ? 'reset' : 'login');
  const [error, setError] = useState(''), [message, setMessage] = useState(''), [devLink, setDevLink] = useState(''), [busy, setBusy] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError(''); setMessage(''); setDevLink(''); setBusy(true);
    const f = new FormData(e.currentTarget);
    try {
      if (mode === 'login') { const r = await api<{ user: User }>('/auth/login', { email: f.get('email'), password: f.get('password') }); onLogin(r.user); }
      else {
        const body = mode === 'register' ? { email: f.get('email'), password: f.get('password'), name: f.get('name'), adult: f.get('adult') === 'on', acceptedTerms: f.get('terms') === 'on' } : mode === 'forgot' ? { email: f.get('email') } : { token: initialReset, password: f.get('password') };
        const r = await api<{ message: string; devLink?: string }>(`/auth/${mode}`, body); setMessage(r.message); setDevLink(r.devLink ?? '');
        if (mode === 'reset') setMode('login');
      }
    } catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  }
  function change(next: typeof mode) { setMode(next); setError(''); setMessage(''); setDevLink(''); }
  return <div className="modal-backdrop" onClick={onClose}><section ref={panel} className="auth-panel" role="dialog" aria-modal="true" aria-labelledby="auth-title" onClick={e => e.stopPropagation()} onKeyDown={e => {
    if (e.key === 'Escape') onClose();
    if (e.key !== 'Tab') return;
    const controls = Array.from(panel.current?.querySelectorAll<HTMLElement>('button:not(:disabled),input:not(:disabled),a[href],select,textarea,[tabindex="0"]') ?? []).filter(el => el.getClientRects().length);
    const first = controls[0], last = controls.at(-1);
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
    if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
  }}>
    <button className="icon-button modal-close" onClick={onClose} aria-label="Đóng đăng nhập"><X size={20}/></button>
    <div className="brand-mark">汉</div><span className="eyebrow">KHỞI ĐẦU MỘT THÓI QUEN TỐT</span>
    <h2 id="auth-title">{mode === 'login' ? 'Mừng bạn trở lại.' : mode === 'register' ? 'Một hành trình mới.' : mode === 'reset' ? 'Đặt mật khẩu mới' : 'Lấy lại tài khoản'}</h2>
    <p className="muted">{mode === 'register' ? 'Lưu tiến độ và xây dựng lộ trình học của riêng bạn.' : 'Mỗi lần quay lại là một bước tiến.'}</p>
    <form onSubmit={submit}>
      {mode === 'register' && <label>Tên hiển thị<input name="name" required minLength={2} maxLength={80} autoComplete="nickname" placeholder="Bạn muốn được gọi là gì?"/></label>}
      {mode !== 'reset' && <label>Email<input name="email" type="email" required autoComplete="email" placeholder="ban@example.com"/></label>}
      {mode !== 'forgot' && <label>Mật khẩu<input name="password" type="password" required minLength={mode === 'login' ? 1 : 12} maxLength={128} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} placeholder={mode === 'login' ? 'Mật khẩu của bạn' : 'Ít nhất 12 ký tự'}/></label>}
      {mode === 'register' && <><label className="check-label"><input type="checkbox" name="adult" required/>Tôi từ 18 tuổi trở lên.</label><label className="check-label"><input type="checkbox" name="terms" required/>Tôi đồng ý điều khoản và chính sách dữ liệu hiển thị tại mục Thông tin.</label></>}
      {error && <p className="notice error" role="alert">{error}</p>}{message && <p className="notice success" role="status">{message}</p>}
      {devLink && <div className="notice"><strong>Email mô phỏng trong bản local</strong><p>Chưa gửi email thật. Dùng liên kết này để kiểm tra luồng tài khoản.</p><a href={devLink}><Mail size={14}/> {mode === 'register' ? 'Xác minh tài khoản thử nghiệm' : 'Đặt lại mật khẩu'}</a></div>}
      <button disabled={busy} className="button primary wide">{busy ? 'Đang xử lý…' : mode === 'login' ? 'Đăng nhập' : mode === 'register' ? 'Tạo tài khoản miễn phí' : mode === 'forgot' ? 'Gửi liên kết' : 'Lưu mật khẩu'}<ArrowRight size={17}/></button>
    </form>
    <div className="auth-links"><button onClick={() => change(mode === 'login' ? 'register' : 'login')}>{mode === 'login' ? 'Chưa có tài khoản? Đăng ký' : 'Quay lại đăng nhập'}</button>{mode === 'login' && <button onClick={() => change('forgot')}>Quên mật khẩu?</button>}</div>
    <p className="tiny muted"><ShieldCheck size={14}/> Miễn phí · Dành cho người từ 18 tuổi</p>
  </section></div>;
}
