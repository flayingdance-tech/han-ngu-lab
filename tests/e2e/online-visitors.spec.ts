import { test, expect, type Page } from '@playwright/test';

async function fixtures(page: Page, role?: string) {
  const state = { heartbeats: 0, onlineReads: 0, count: 7, failed: false };
  await page.route('**/api/**', async route => {
    const path = new URL(route.request().url()).pathname;
    if (path === '/api/presence/heartbeat') { state.heartbeats++; await route.fulfill({ json: { ok: true } }); return; }
    if (path === '/api/admin/online') { state.onlineReads++; await route.fulfill(state.failed ? { status: 503, json: { error: 'Synthetic unavailable' } } : { json: { visitors: state.count, windowSeconds: 120, refreshSeconds: 15, asOf: new Date().toISOString() } }); return; }
    if (path === '/api/me') { await route.fulfill(role ? { json: { user: { id:'fixture-user',email:'fixture@example.test',name:'Quản trị thử nghiệm',role,verified:true,timezone:'Asia/Ho_Chi_Minh',dailyGoal:20 } } } : { status:401,json:{error:'Anonymous fixture'} }); return; }
    if (path === '/api/catalog') { await route.fulfill({ json: { lessons:[],localPreview:false } }); return; }
    if (path === '/api/progress') { await route.fulfill({ json:{progress:[],attempts:[],due:0,totalWords:0} }); return; }
    if (path === '/api/admin/lessons' || path === '/api/admin/media') { await route.fulfill({ json:{revisions:[]} }); return; }
    await route.fulfill({status:404,json:{error:'Unmatched fixture'}});
  });
  return state;
}
async function openCMS(page: Page) {
  const menu = page.getByRole('button', {name:'Mở điều hướng',exact:true});
  if (await menu.isVisible()) await menu.click();
  await page.getByRole('button', {name:'Quản trị nội dung',exact:true}).click();
}

test('admin sees responsive online count, refreshes automatically and never mistakes a failed request for zero', async ({ page }, testInfo) => {
  await page.clock.install();
  const state = await fixtures(page, 'admin'); await page.goto('/'); await openCMS(page);
  const card=page.getByRole('region',{name:'Đang online',exact:true});
  await expect(card.locator('strong')).toHaveText('7');
  await expect(card).toContainText('Chỉ Admin');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:testInfo.outputPath('online-admin-light.png'),fullPage:true});
  state.count=8; await page.clock.fastForward(15_100); await expect(card.locator('strong')).toHaveText('8');
  state.failed=true; await page.clock.fastForward(15_100); await expect(card.locator('strong')).toHaveText('—');
  await expect(card.getByRole('alert')).toBeVisible();
  state.failed=false; state.count=0; await page.clock.fastForward(15_100); await expect(card.locator('strong')).toHaveText('0');
  await expect(card.getByRole('alert')).toHaveCount(0);
  await page.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));
  await page.screenshot({path:testInfo.outputPath('online-admin-dark.png'),fullPage:true});
});

test('editor can keep using CMS but never sees or requests the admin-only metric', async ({ page }) => {
  const state=await fixtures(page,'editor'); await page.goto('/'); await openCMS(page);
  await expect(page.getByRole('heading',{name:'Giáo trình & kiểm duyệt'})).toBeVisible();
  await expect(page.locator('.online-visitors')).toHaveCount(0); expect(state.onlineReads).toBe(0);
});

test('anonymous presence only heartbeats when visible and does not request private counts', async ({ page }) => {
  await page.clock.install(); const state=await fixtures(page); await page.goto('/');
  await expect.poll(()=>state.heartbeats).toBe(1);
  await page.clock.fastForward(30_100); await expect.poll(()=>state.heartbeats).toBe(2);
  await page.evaluate(()=>{Object.defineProperty(document,'visibilityState',{configurable:true,get:()=> 'hidden'});document.dispatchEvent(new Event('visibilitychange'));});
  await page.clock.fastForward(90_000); expect(state.heartbeats).toBe(2);
  await page.evaluate(()=>{Object.defineProperty(document,'visibilityState',{configurable:true,get:()=> 'visible'});document.dispatchEvent(new Event('visibilitychange'));});
  await page.clock.fastForward(1); await expect.poll(()=>state.heartbeats).toBe(3);
  expect(state.onlineReads).toBe(0); await expect(page.locator('.online-visitors')).toHaveCount(0);
});
