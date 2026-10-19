import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

async function openPodcasts(page:import('@playwright/test').Page){
  await page.goto('/');
  const mobile=page.getByRole('button',{name:'Mở điều hướng'});
  if(await mobile.isVisible())await mobile.click();
  await page.getByRole('navigation',{name:'Điều hướng chính',exact:true}).getByRole('button',{name:'Podcast',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Góc podcast.'})).toBeVisible();
  await expect(page.locator('audio')).toHaveAttribute('src',/-(mix|voice).mp3$/);
}

test('podcast real playback, seek, music switch, rate, episode change and navigation cleanup',async({page})=>{
  await openPodcasts(page);
  await page.getByRole('button',{name:/Nghe đoạn 3:/}).click();
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(8);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.paused)).toBe(false);
  const before=await page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime);
  await page.getByLabel('Nhạc lo-fi nhẹ').uncheck();
  await expect(page.locator('audio')).toHaveAttribute('src',/-voice.mp3$/);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThanOrEqual(before-.2);
  await page.getByLabel('Tốc độ podcast').selectOption('0.8');
  expect(await page.locator('audio').evaluate((a:HTMLAudioElement)=>({rate:a.playbackRate,pitch:a.preservesPitch}))).toEqual({rate:.8,pitch:true});
  await page.getByLabel('Hiện nghĩa Việt').uncheck();
  await expect(page.locator('.transcript-meaning')).toHaveCount(0);
  await page.evaluate(()=>{(window as unknown as {oldAudio:HTMLAudioElement}).oldAudio=document.querySelector('audio')!;});
  await page.getByRole('button',{name:/TẬP 02/}).click();
  await expect(page.locator('audio')).toHaveAttribute('src',/office-meeting/);
  expect(await page.evaluate(()=>(window as unknown as {oldAudio:HTMLAudioElement}).oldAudio.paused)).toBe(true);
  await page.getByRole('button',{name:/Nghe đoạn 1:/}).click();
  await page.evaluate(()=>{(window as unknown as {oldAudio:HTMLAudioElement}).oldAudio=document.querySelector('audio')!;});
  const mobile=page.getByRole('button',{name:'Mở điều hướng'});if(await mobile.isVisible())await mobile.click();
  await page.getByRole('navigation',{name:'Điều hướng chính',exact:true}).getByRole('button',{name:'Góc học tập'}).click();
  await expect(page.locator('audio')).toHaveCount(0);
  expect(await page.evaluate(()=>(window as unknown as {oldAudio:HTMLAudioElement}).oldAudio.paused)).toBe(true);
});

test('daily listening persists position and preferences; favorites, search and transcript work',async({page})=>{
  await openPodcasts(page);
  await expect(page.locator('.podcast-card')).toHaveCount(7);
  await page.getByRole('button',{name:/Nghe đoạn 3:/}).click();
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(8);
  await page.locator('audio').evaluate((a:HTMLAudioElement)=>a.pause());
  await page.getByRole('button',{name:'Yêu thích',exact:true}).click();
  await page.getByLabel('Tốc độ podcast').selectOption('0.8');
  await page.getByLabel('Nhạc lo-fi nhẹ').uncheck();
  await expect(page.locator('audio')).toHaveAttribute('src',/-voice.mp3$/);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(8);
  const position=await page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime);
  await openPodcasts(page);
  await expect(page.locator('audio')).toHaveAttribute('src',/-voice.mp3$/);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThanOrEqual(position-.3);
  expect(await page.locator('audio').evaluate((a:HTMLAudioElement)=>a.paused)).toBe(true);
  await expect(page.getByLabel('Tốc độ podcast')).toHaveValue('0.8');
  await expect(page.getByRole('button',{name:'Đã yêu thích',exact:true})).toHaveAttribute('aria-pressed','true');
  await page.getByLabel('Chỉ tập yêu thích').check();await expect(page.locator('.podcast-card')).toHaveCount(1);
  await page.getByLabel('Tìm podcast').fill('không tồn tại');await expect(page.locator('.podcast-card')).toHaveCount(0);
  await page.getByLabel('Tìm podcast').fill('');await page.getByLabel('Chỉ tập yêu thích').uncheck();await expect(page.locator('.podcast-card')).toHaveCount(7);
  const downloadEvent=page.waitForEvent('download');await page.getByRole('button',{name:'Tải lời thoại'}).click();
  const download=await downloadEvent;const file=await download.path();expect(file).not.toBeNull();
  const text=await readFile(file!,'utf8');expect(text).toContain('欢迎来到汉语实验室');expect(text).toContain('Pamela Yuen');expect(text).toContain('CC BY 4.0');
});

test('repeat and continuous playback advance from a real media ending',async({page})=>{
  await openPodcasts(page);
  await page.getByLabel('Chế độ phát podcast').selectOption('one');
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.readyState)).toBeGreaterThanOrEqual(2);
  await page.locator('audio').evaluate(async(a:HTMLAudioElement)=>{a.currentTime=a.duration-.3;await a.play();});
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeLessThan(4);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.paused)).toBe(false);
  await expect(page.locator('.podcast-daily')).toContainText('1/7');
  await page.getByLabel('Chế độ phát podcast').selectOption('all');
  await page.locator('audio').evaluate(async(a:HTMLAudioElement)=>{a.currentTime=a.duration-.3;await a.play();});
  await expect(page.locator('audio')).toHaveAttribute('src',/office-meeting/);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.paused)).toBe(false);
});

test('podcast network error is retryable and layout works in both themes',async({page},testInfo)=>{
  await page.route('**/api/podcasts/media/**',r=>r.abort());
  await openPodcasts(page);
  await expect(page.locator('.podcast-player').getByRole('alert')).toContainText('Chưa tải được âm thanh');
  await page.unroute('**/api/podcasts/media/**');
  await page.getByRole('button',{name:'Thử lại âm thanh'}).click();
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.paused)).toBe(false);
  for(const theme of ['light','dark']){
    await page.evaluate(t=>{document.documentElement.dataset.theme=t;},theme);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await page.screenshot({path:`.local/podcasts/${testInfo.project.name}-${theme}.png`,fullPage:true});
  }
});
