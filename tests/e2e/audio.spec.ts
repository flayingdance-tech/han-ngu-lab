import { test, expect } from '@playwright/test';

type AudioWindow=Window&{hnlAudio:HTMLAudioElement[];hnlBrowserTts:number};

// Playback transport fixtures do not imply these historical samples passed listening QA.
test.beforeEach(async ({page}) => {
  await page.route('**/audio/manifest.json', async route => {
    const response = await route.fetch();
    const fixture = await response.json();
    delete fixture.disabledReason;
    await route.fulfill({json:fixture});
  });
});

test('quality-rejected library cannot play even in local preview',async({page})=>{
  await page.unroute('**/audio/manifest.json');
  await page.route('**/audio/manifest.json',route=>route.fulfill({json:{version:1,voiceId:'hnl-original-v1',label:'Giọng đã dừng',engine:'OmniVoice',generatedAt:'2026-10-18',disabledReason:'Bộ cũ chất lượng chưa đạt.',entries:{}}}));
  const requests:string[]=[];
  page.on('request',request=>{if(request.url().endsWith('.mp3')) requests.push(request.url());});
  await page.goto('/');
  await page.getByRole('button',{name:'Bắt đầu bài đầu tiên'}).click();
  await page.getByRole('button',{name:'Nghe 你',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('chất lượng chưa đạt');
  expect(requests).toEqual([]);
});

test('chosen project voice plays real normal and slow files without browser speech',async({page})=>{
  await page.addInitScript(()=>{
    const state=window as unknown as AudioWindow;
    state.hnlAudio=[];state.hnlBrowserTts=0;
    const play=HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play=function(){state.hnlAudio.push(this as HTMLAudioElement);return play.call(this);};
    if('speechSynthesis'in window)window.speechSynthesis.speak=()=>{state.hnlBrowserTts++;throw new Error('Device voice must not be used');};
  });
  await page.goto('/');
  await page.getByRole('button',{name:'Bắt đầu bài đầu tiên'}).click();
  const normal=page.waitForResponse(r=>/\/audio\/hnl-kokoro-zf001-v1\/[a-f0-9]+\.mp3/.test(r.url())&&r.ok());
  await page.getByRole('button',{name:'Nghe 你',exact:true}).click();
  await normal;
  await expect.poll(()=>page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio.at(-1)?.readyState??0)).toBeGreaterThanOrEqual(2);
  await page.getByRole('button',{name:'Hội thoại',exact:true}).click();
  expect(await page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio[0].paused)).toBeTruthy();
  const slow=page.waitForResponse(r=>r.url().includes('-slow.mp3')&&r.ok());
  await page.getByRole('button',{name:'Nghe câu 1',exact:true}).click();
  await slow;
  await expect.poll(()=>page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio.at(-1)?.readyState??0)).toBeGreaterThanOrEqual(2);
  expect(await page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio.at(-1)?.src)).toContain('-slow.mp3');
  expect(await page.evaluate(()=>(window as unknown as AudioWindow).hnlBrowserTts)).toBe(0);
  await page.getByRole('button',{name:'Luyện tập',exact:true}).click();
  expect(await page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio.at(-1)?.paused)).toBeTruthy();
  const menu=page.getByRole('button',{name:'Mở điều hướng',exact:true});
  if(await menu.isVisible())await menu.click();
  await page.getByRole('navigation',{name:'Điều hướng chính',exact:true}).getByRole('button',{name:'Sổ từ vựng',exact:true}).click();
  await expect(page.getByRole('heading',{name:'Sổ từ vựng.'})).toBeVisible();
  await page.getByRole('button',{name:'Nghe 你',exact:true}).click();
  await expect.poll(()=>page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio.at(-1)?.readyState??0)).toBeGreaterThanOrEqual(2);
  expect(await page.evaluate(()=>(window as unknown as AudioWindow).hnlAudio.at(-1)?.src)).toContain('/audio/hnl-kokoro-zf001-v1/');
  expect(await page.evaluate(()=>(window as unknown as AudioWindow).hnlBrowserTts)).toBe(0);
});

test('missing clip and network failure show a recoverable message with no voice substitution',async({page})=>{
  await page.route('**/audio/manifest.json',route=>route.fulfill({json:{version:1,voiceId:'hnl-original-v1',label:'HNL',engine:'VoiceStudio',generatedAt:'2026-10-18',entries:{}}}));
  await page.goto('/');
  await page.getByRole('button',{name:'Bắt đầu bài đầu tiên'}).click();
  await page.getByRole('button',{name:'Nghe 你',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Âm đọc này đang được chuẩn bị');
  await page.unroute('**/audio/manifest.json');
  await page.route('**/audio/manifest.json',async route=>{
    const fixture=await (await route.fetch()).json();delete fixture.disabledReason;
    await route.fulfill({json:fixture});
  });
  await page.route('**/audio/**/*.mp3',route=>route.abort('failed'));
  await page.reload();
  await page.getByRole('button',{name:'Bắt đầu bài đầu tiên'}).click();
  await page.getByRole('button',{name:'Nghe 你',exact:true}).click();
  await expect(page.getByRole('status')).toContainText('Chưa phát được âm thanh');
  await expect(page.getByRole('button',{name:'Nghe 你',exact:true})).toBeEnabled();
  await page.unroute('**/audio/**/*.mp3');
  await page.getByRole('button',{name:'Nghe 你',exact:true}).click();
  await expect(page.getByRole('status')).toHaveCount(0);
});
