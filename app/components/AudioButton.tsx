'use client';
import { useEffect, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { speak, speechCancelled } from '../../lib/audio';

export function AudioButton({ text, pinyin, label, slow = false, preview = false, className = 'icon-button' }: {
  text: string; pinyin: string; label: string; slow?: boolean; preview?: boolean; className?: string;
}) {
  const [busy, setBusy] = useState(false), [error, setError] = useState('');
  const mounted = useRef(false);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  async function play() {
    setBusy(true); setError('');
    try { await speak(text, pinyin, slow, preview); }
    catch (e) { if (mounted.current && !speechCancelled(e)) setError(e instanceof Error ? e.message : 'Chưa phát được âm thanh. Hãy thử lại.'); }
    finally { if (mounted.current) setBusy(false); }
  }
  return <><button type="button" className={className} aria-label={label} aria-busy={busy} disabled={busy} onClick={()=>void play()}><Volume2 size={18}/></button>{error&&<p role="status" className="notice compact">{error}</p>}</>;
}
