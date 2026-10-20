import { test,expect } from '@playwright/test';

test('new verification fragments do not enter HTTP request URLs; legacy links remain supported',async({page})=>{
  const seen:string[]=[],verified:string[]=[];
  page.on('request',req=>seen.push(req.url()));
  await page.route('**/api/**',async route=>{
    const req=route.request(),path=new URL(req.url()).pathname;
    if(path==='/api/auth/verify'){
      verified.push(req.postDataJSON().token);
      return route.fulfill({json:{message:'Xác minh an toàn thành công.'}});
    }
    if(path==='/api/catalog')return route.fulfill({json:{lessons:[],localPreview:false}});
    return route.fulfill({status:401,json:{error:'Vui lòng đăng nhập.'}});
  });
  const token='synthetic-verification-fragment-123456';
  await page.goto(`/#verify=${token}`);
  await expect.poll(()=>verified).toEqual([token]);
  await expect(page).toHaveURL(/\/$/);
  expect(seen.some(url=>url.includes(token))).toBe(false);
  await page.goto('/?verify=synthetic-legacy-token-123456');
  await expect.poll(()=>verified.length).toBe(2);
  await expect(page).toHaveURL(/\/$/);
  await page.evaluate(()=>{location.hash='verify=synthetic-in-page-token-123456';});
  await expect.poll(()=>verified.length).toBe(3);
  await expect(page).toHaveURL(/\/$/);
  await page.evaluate(()=>{location.hash='reset=synthetic-reset-fragment-123456';});
  await expect(page.getByRole('heading',{name:'Đặt mật khẩu mới'})).toBeVisible();
  await expect(page).toHaveURL(/\/$/);
  expect(seen.some(url=>url.includes('synthetic-in-page-token')||url.includes('synthetic-reset-fragment'))).toBe(false);
});
