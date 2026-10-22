import { test, expect } from '@playwright/test';

// Banner interactions use anonymous read-only fixtures; production checks run separately.
test.beforeEach(async ({ page }) => {
  await page.route('**/api/catalog', route => route.fulfill({ json: { lessons: [{ id:'intro-01',title:'Xin chào, tiếng Trung!',subtitle:'你好',level:0,unit:'Nhập môn',minutes:15,words:6 }],localPreview:false,releaseNotice:'Bản thử nghiệm — Chưa duyệt' } }));
  await page.route('**/api/me', route => route.fulfill({ status:401,json:{error:'Chưa đăng nhập'} }));
});

test('banner preserves learning, opens registration and restores login mode', async ({ page }) => {
  await page.goto('/');
  const banner=page.getByRole('region',{name:'Học tiếng Trung, theo cách của bạn.'});
  await expect(banner).toBeVisible();
  const hero=await page.locator('.hero').boundingBox();
  const lessonAction=await page.locator('.hero button').boundingBox();
  expect(lessonAction!.y+lessonAction!.height).toBeLessThanOrEqual(hero!.y+hero!.height);
  await expect(page.getByRole('heading',{name:'Một bài học, một khám phá'})).toBeVisible();
  const start=banner.getByRole('button',{name:'Bắt đầu miễn phí',exact:true});
  await start.click();
  await expect(page.getByRole('dialog')).toHaveAccessibleName('Một hành trình mới.');
  await expect(page.getByLabel('Tên hiển thị')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(start).toBeFocused();
  await page.getByRole('button',{name:'Đăng nhập',exact:true}).first().click();
  await expect(page.getByRole('dialog')).toHaveAccessibleName('Mừng bạn trở lại.');
  await page.keyboard.press('Escape');
  await banner.getByRole('button',{name:'Mở đăng ký miễn phí từ banner Hán Ngữ Lab'}).click();
  await expect(page.getByRole('dialog')).toHaveAccessibleName('Một hành trình mới.');
  await page.keyboard.press('Escape');
  await banner.getByRole('button',{name:'Xem bài học'}).click();
  await expect(page.getByRole('heading',{name:'Từng bước đến tiếng Trung.'})).toBeVisible();
});

test('responsive image, pause, keyboard target sizes and reduced motion', async ({ page },testInfo) => {
  const downloaded:string[]=[];
  page.on('response',r=>{if(r.url().includes('/images/promo-hanngulab-'))downloaded.push(r.url());});
  await page.goto('/');
  const banner=page.locator('.promo-banner');
  const image=banner.locator('img');
  await expect(image).toBeVisible();
  await expect.poll(()=>image.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect.poll(()=>downloaded.length).toBe(1);
  const imageSource=await image.evaluate(el=>(el as HTMLImageElement).currentSrc);
  const response=await page.request.get(imageSource);
  expect((await response.body()).byteLength).toBeLessThan(150_000);
  await page.screenshot({path:testInfo.outputPath('layout-before-check.png'),fullPage:true});
  const overflow=await page.evaluate(()=>Array.from(document.querySelectorAll('body *')).filter(el=>el.getBoundingClientRect().right>innerWidth+1).map(el=>({tag:el.tagName,classes:el.className,right:el.getBoundingClientRect().right})).slice(0,12));
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),JSON.stringify(overflow)).toBe(true);
  const button=banner.getByRole('button',{name:'Bắt đầu miễn phí',exact:true});
  expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  await button.focus();
  expect(await button.evaluate(el=>getComputedStyle(el).outlineStyle)).toBe('solid');
  await banner.getByRole('button',{name:'Tạm dừng hiệu ứng banner'}).click();
  await expect(banner).toHaveAttribute('data-motion-paused','true');
  expect(await banner.locator('.promo-spark').evaluate(el=>getComputedStyle(el).animationPlayState)).toBe('paused');
  await page.screenshot({path:testInfo.outputPath('banner-light.png'),fullPage:true});
  await page.evaluate(()=>document.documentElement.setAttribute('data-theme','dark'));
  await page.screenshot({path:testInfo.outputPath('banner-dark.png'),fullPage:true});
  await page.emulateMedia({reducedMotion:'reduce'});
  expect(await banner.locator('.promo-spark').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
  await expect(banner.locator('.promo-motion-toggle')).toBeHidden();
  await testInfo.attach('image-budget',{body:JSON.stringify({imageSource,bytes:(await response.body()).byteLength,downloads:downloaded.length}),contentType:'application/json'});
});
