import type { Metadata } from 'next';
import './globals.css';
import './themes.css';
import './reference-ui.css';
import './podcasts.css';
import './promo-banner.css';
export const metadata: Metadata = { metadataBase: new URL('https://hanngulab.duckdns.org'), alternates: { canonical: '/' }, title: 'Hán Ngữ Lab — Học một chút, tiến xa hơn', description: 'Không gian học tiếng Trung dành cho người Việt từ 18 tuổi. Học theo lộ trình, luyện tập và ôn lại đúng lúc.' };
const themeInit="try{var t=localStorage.getItem('hnl-theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}";
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="vi" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeInit}}/></head><body>{children}</body></html>; }
