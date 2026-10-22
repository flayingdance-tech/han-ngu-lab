'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, Headphones, Layers3, Pause, Play, Sparkles } from 'lucide-react';

export function PromoBanner({ signedIn, onStart, onExplore }: { signedIn: boolean; onStart: () => void; onExplore: () => void }) {
  const [paused, setPaused] = useState(false);
  return <section className="promo-banner" aria-labelledby="promo-heading" data-motion-paused={paused}>
    <div className="promo-copy">
      <span className="promo-kicker"><span aria-hidden="true"/>MỘT KHỞI ĐẦU NHỎ, MỖI NGÀY</span>
      <h2 id="promo-heading">Học tiếng Trung,<br/><em>theo cách của bạn.</em></h2>
      <p>Bắt đầu bằng những câu quen thuộc. Ôn từ mới, nghe một câu chuyện và tìm nhịp học của riêng mình.</p>
      <ul className="promo-features" aria-label="Khám phá Hán Ngữ Lab">
        <li><BookOpen size={16} aria-hidden="true"/>Bài học</li>
        <li><Layers3 size={16} aria-hidden="true"/>Từ vựng</li>
        <li><Headphones size={16} aria-hidden="true"/>Podcast</li>
      </ul>
      <div className="promo-actions">
        <button className="promo-cta" onClick={onStart} aria-haspopup={signedIn ? undefined : 'dialog'}>{signedIn ? 'Tiếp tục học' : 'Bắt đầu miễn phí'}<ArrowRight size={18} aria-hidden="true"/></button>
        <button className="promo-explore" onClick={onExplore}>Xem bài học<ArrowRight size={16} aria-hidden="true"/></button>
      </div>
      <small>Miễn phí · Dành cho người từ 18 tuổi</small>
    </div>
    <div className="promo-visual">
      <span className="promo-orbit promo-orbit-one" aria-hidden="true"/>
      <span className="promo-orbit promo-orbit-two" aria-hidden="true"/>
      <span className="promo-spark" aria-hidden="true"><Sparkles size={25}/></span>
      <button className="promo-art" onClick={onStart} aria-label={signedIn ? 'Khám phá bài học từ banner Hán Ngữ Lab' : 'Mở đăng ký miễn phí từ banner Hán Ngữ Lab'} aria-haspopup={signedIn ? undefined : 'dialog'}>
        <picture>
          <source type="image/webp" srcSet="/images/promo-hanngulab-640.webp 640w, /images/promo-hanngulab-960.webp 960w, /images/promo-hanngulab-1440.webp 1440w" sizes="(max-width: 760px) calc(100vw - 64px), (max-width: 1050px) calc(100vw - 320px), 600px"/>
          <Image src="/images/promo-hanngulab-960.webp" alt="Hán Ngữ Lab: người đàn ông mỉm cười, giơ hai ngón tay cái trong không gian học tiếng Trung đỏ và trắng." width={1440} height={810} loading="eager" fetchPriority="high" unoptimized/>
        </picture>
      </button>
      <button className="promo-motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Bật hiệu ứng banner' : 'Tạm dừng hiệu ứng banner'}>{paused ? <Play size={12} aria-hidden="true"/> : <Pause size={12} aria-hidden="true"/>}<span>Chuyển động</span></button>
    </div>
  </section>;
}
