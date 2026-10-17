import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Hán Ngữ Lab — Học một chút, tiến xa hơn', description: 'Không gian học tiếng Trung dành cho người Việt từ 18 tuổi. Học theo lộ trình, luyện tập và ôn lại đúng lúc.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="vi"><body>{children}</body></html>; }
