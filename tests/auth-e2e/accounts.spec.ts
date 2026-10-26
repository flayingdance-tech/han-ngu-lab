/* Playwright worker fixtures use a deliberately empty test-argument type and invoke the fixture callback hook. */
/* eslint-disable @typescript-eslint/no-empty-object-type, react-hooks/rules-of-hooks */
import { test as base,expect,type Page } from '@playwright/test';
import { spawn,type ChildProcess } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { TOTP,Secret } from 'otpauth';

type Stage={origin:string;control:string;instance:string};
const test=base.extend<{}, {stage:Stage}>({
 stage:[async({},use)=>{
  const instance='e2e-'+randomUUID(),origin='http://127.0.0.1:3201';
  const child:ChildProcess=spawn(process.execPath,['--import',pathToFileURL(resolve('node_modules/tsx/dist/loader.mjs')).href,'scripts/auth-staging.ts'],{cwd:process.cwd(),env:{...process.env,NODE_ENV:'development',HNL_AUTH_STAGE_PORT:'3201',HNL_AUTH_STAGE_INSTANCE:instance,HNL_AUTH_E2E:'true'},stdio:['ignore','pipe','pipe'],windowsHide:true});
  let output='';child.stdout?.on('data',b=>{output+=b;});child.stderr?.on('data',b=>{output+=b;});
  try{
   await expect.poll(async()=>{if(child.exitCode!==null)throw new Error('Staging startup failed: '+output);try{return (await fetch(origin+'/__staging/ready')).ok;}catch{return false;}},{timeout:180000}).toBe(true);
   const control=JSON.parse(readFileSync(resolve('.local/auth-staging-20261025',instance,'control.json'),'utf8')).control as string;
   await use({origin,control,instance});
  }finally{if(child.exitCode===null){child.kill();await new Promise<void>(r=>child.once('exit',()=>r()));}}
 },
 { scope: 'worker' }],});
const password='Synthetic-Accounts-Test-123!';
async function login(page:Page,origin:string,email:string){await page.goto(origin);await page.getByRole('button',{name:'Đăng nhập',exact:true}).first().click();const dialog=page.getByRole('dialog');await dialog.getByLabel('Email',{exact:true}).fill(email);await dialog.getByLabel('Mật khẩu',{exact:true}).fill(password);await dialog.getByRole('button',{name:'Đăng nhập',exact:true}).click();await expect(dialog).toBeHidden();}
async function navigate(page:Page,name:string){const mobile=page.getByRole('button',{name:'Mở điều hướng'});if(await mobile.isVisible())await mobile.click();await page.getByRole('button',{name,exact:true}).click();}
async function overflow(page:Page){expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);}

test('unverified signup, login, optional phone and single-use recovery with real staging API',async({page,stage})=>{
 await page.goto(stage.origin);await expect(page.getByText('STAGING CỤC BỘ',{exact:false})).toBeVisible();await page.getByRole('button',{name:'Đăng nhập',exact:true}).first().click();let dialog=page.getByRole('dialog');await dialog.getByRole('button',{name:/Tạo tài khoản|Đăng ký/}).last().click();
 await dialog.getByLabel('Tên hiển thị').fill('Người học staging');await dialog.getByLabel('Email',{exact:true}).fill('new-e2e@example.test');await dialog.getByLabel('Mật khẩu',{exact:true}).fill(password);await dialog.getByRole('checkbox').nth(0).check();await dialog.getByRole('checkbox').nth(1).check();await dialog.getByRole('button',{name:/Tạo tài khoản|Đăng ký/}).first().click();await expect(dialog.getByRole('status')).toContainText('Đã tiếp nhận');await dialog.getByRole('button',{name:/Quay lại đăng nhập/}).click();
 await dialog.getByLabel('Mật khẩu',{exact:true}).fill(password);await dialog.getByRole('button',{name:'Đăng nhập',exact:true}).click();await expect(dialog).toBeHidden();await navigate(page,'Cài đặt');await expect(page.getByText('Email chưa xác minh',{exact:true})).toBeVisible();await page.getByLabel('Số điện thoại (tùy chọn, chưa xác minh)').fill('+84 912 345 678');await page.getByRole('button',{name:'Lưu thay đổi'}).click();await expect(page.getByRole('status').filter({hasText:'Đã lưu'})).toBeVisible();await overflow(page);
 await page.getByRole('button',{name:'Đăng xuất',exact:true}).first().click();await page.getByRole('button',{name:'Đăng nhập',exact:true}).first().click();dialog=page.getByRole('dialog');await dialog.getByRole('button',{name:'Quên mật khẩu?'}).click();await dialog.getByLabel('Email',{exact:true}).fill('new-e2e@example.test');await dialog.getByRole('button',{name:/Gửi liên kết/}).click();await expect(dialog.getByRole('status')).toBeVisible();
 const mailbox=await fetch(stage.origin+'/__staging/mailbox',{headers:{'X-HNL-Staging-Control':stage.control}}).then(r=>r.json()) as {messages:{link:string}[]};expect(mailbox.messages.length).toBe(1);await page.goto(mailbox.messages[0].link);dialog=page.getByRole('dialog');await expect(dialog.getByRole('heading',{name:'Đặt mật khẩu mới'})).toBeVisible();await dialog.getByLabel('Mật khẩu',{exact:true}).fill('Replacement-E2E-123!');await dialog.getByRole('button',{name:/Lưu mật khẩu/}).click();await expect(dialog.getByRole('status')).toContainText('được cập nhật');
});

test('Admin MFA enrollment, account management confirmations and audit',async({page,stage})=>{
 await login(page,stage.origin,'admin@example.test');await expect(page.getByRole('heading',{name:'Bảo mật tài khoản'})).toBeVisible();await page.getByRole('button',{name:'Bắt đầu thiết lập MFA'}).click();const secret=await page.getByLabel('Khóa thiết lập MFA',{exact:true}).inputValue();const otp=new TOTP({secret:Secret.fromBase32(secret),algorithm:'SHA1',digits:6,period:30}).generate();await page.getByLabel('Mã 6 số từ ứng dụng').fill(otp);await page.getByRole('button',{name:'Xác nhận bật MFA'}).click();await expect(page.getByRole('heading',{name:'Lưu mã khôi phục ngay'})).toBeVisible();await page.getByRole('button',{name:'Đã lưu an toàn'}).click();await navigate(page,'Quản lý tài khoản');await page.getByLabel('Tìm tên, email hoặc số điện thoại').fill('learner@example.test');await page.getByRole('button',{name:'Tìm kiếm',exact:true}).click();await expect(page.getByRole('status').filter({hasText:'1 kết quả'})).toBeVisible();await page.getByRole('button',{name:'Xem chi tiết'}).click();await page.getByRole('button',{name:'Khóa tài khoản',exact:true}).click();let dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();await dialog.getByRole('button',{name:'Xác nhận',exact:true}).click();await expect(dialog).toBeHidden();await expect(page.getByText('Đã khóa',{exact:true})).toBeVisible();await page.getByRole('button',{name:'Mở khóa tài khoản',exact:true}).click();dialog=page.getByRole('dialog');await dialog.getByRole('button',{name:'Xác nhận',exact:true}).click();await expect(dialog).toBeHidden();await overflow(page);
 await page.getByRole('button',{name:'Nhật ký quản trị',exact:true}).click();await expect(page.getByLabel('Nhật ký quản trị').getByText('Khóa tài khoản',{exact:true})).toBeVisible();
});

test('synthetic Google consent, callback session and verified identity UI',async({page,stage})=>{
 await page.goto(stage.origin);await page.getByRole('button',{name:'Đăng nhập',exact:true}).first().click();const dialog=page.getByRole('dialog');await dialog.getByRole('button',{name:/Tạo tài khoản|Đăng ký/}).last().click();await dialog.getByRole('checkbox').nth(0).check();await dialog.getByRole('checkbox').nth(1).check();await dialog.getByRole('button',{name:'Tiếp tục với Google'}).click();await expect(page.getByRole('dialog')).toBeHidden();await navigate(page,'Cài đặt');await expect(page.getByText('Email đã xác minh',{exact:true})).toBeVisible();await expect(page.getByRole('heading',{name:'Phương thức đăng nhập'})).toBeVisible();await expect(page.getByLabel('Email',{exact:true})).toHaveValue('google-user@example.test');await overflow(page);
});
