import { test, expect } from '@playwright/test';

async function openPodcasts(page:import('@playwright/test').Page){
  await page.goto('/');
  const mobile=page.getByRole('button',{name:'Mở điều hướng'});
  if(await mobile.isVisible())await mobile.click();
  await page.getByRole('navigation',{name:'Điều hướng chính',exact:true}).getByRole('button',{name:'Podcast',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Góc podcast.'})).toBeVisible();
  await expect(page.locator('audio')).toHaveAttribute('src',/-mix.mp3$/);
}

test('podcast real playback, seek, music switch, rate, episode change and navigation cleanup',async({page})=>{
  await openPodcasts(page);
  await page.getByRole('button',{name:/Nghe đoạn 3:/}).click();
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime)).toBeGreaterThan(8);
  await expect.poll(()=>page.locator('audio').evaluate((a:HTMLAudioElement)=>a.paused)).toBe(false);
  const before=await page.locator('audio').evaluate((a:HTMLAudioElement)=>a.currentTime);
  await page.getByLabel('Nhạc nền nhẹ').uncheck();
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
