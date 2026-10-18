'use client';
import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

function subscribe(callback:()=>void) {
  const sync=()=>{try{const value=localStorage.getItem('hnl-theme');document.documentElement.dataset.theme=value==='dark'||value==='light'?value:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch{/* Theme still works without storage. */}callback();};
  window.addEventListener('storage',sync);
  window.addEventListener('hnl-theme',callback);
  const media=matchMedia('(prefers-color-scheme: dark)');media.addEventListener('change',sync);
  return()=>{window.removeEventListener('storage',sync);window.removeEventListener('hnl-theme',callback);media.removeEventListener('change',sync);};
}
export function ThemeToggle(){
  const theme=useSyncExternalStore(subscribe,()=>document.documentElement.dataset.theme??'light',()=>'light');
  const dark=theme==='dark';
  function toggle(){const next=dark?'light':'dark';document.documentElement.dataset.theme=next;try{localStorage.setItem('hnl-theme',next);}catch{/* Private browsing may disable storage. */}window.dispatchEvent(new Event('hnl-theme'));}
  return <button className="button secondary theme-toggle" onClick={toggle} aria-label={dark?'Chuyển giao diện sáng':'Chuyển giao diện tối'} title={dark?'Chuyển giao diện sáng':'Chuyển giao diện tối'}>{dark?<Sun size={18}/>:<Moon size={18}/>}<span>{dark?'Sáng':'Tối'}</span></button>;
}
