import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { openDatabase } from '../../server/database';
import { seedMedia } from '../../server/media-editorial';
import { audioManifestSchema } from '../../lib/audio-catalog';
import { podcastCatalogSchema } from '../../lib/podcast';
import { releasePolicySchema } from '../../server/content-release';

test.skip(process.env.HNL_ISOLATED_CMS_TEST!=='true','Use playwright.recovery.config.ts so this test only touches its isolated synthetic database.');

test('admin can inspect media, create a draft and submit it without changing released bytes',async({page})=>{
  const health=await page.request.get('/api/health');expect((await health.json()).mode).toBe('local-preview');
  // This test is only supported by the isolated auth-playwright config, never the owner database.
  expect(process.env.HNL_ISOLATED_CMS_TEST).toBe('true');
  const email=`media-${randomUUID()}@example.test`,password=`Synthetic-${randomUUID()}!`,headers={Origin:'http://localhost:3000','X-HNL-Client':'web'};
  const reg=await page.request.post('/api/auth/register',{headers,data:{email,password,name:'Quản trị thử',adult:true,acceptedTerms:true}});expect(reg.status()).toBe(201);
  const token=new URLSearchParams(new URL((await reg.json()).devLink).hash.slice(1)).get('verify');
  expect((await page.request.post('/api/auth/verify',{headers,data:{token}})).status()).toBe(200);
  const db=openDatabase(resolve('.local/pre-github-audit/synthetic-auth-ui.sqlite'));
  try{db.prepare("UPDATE users SET role='admin' WHERE email=?").run(email);seedMedia(db,audioManifestSchema.parse(JSON.parse(readFileSync('public/audio/manifest.json','utf8'))),podcastCatalogSchema.parse(JSON.parse(readFileSync('media/podcasts/catalog.json','utf8'))),releasePolicySchema.parse(JSON.parse(readFileSync('content/release-policy.json','utf8'))));}finally{db.close();}
  expect((await page.request.post('/api/auth/login',{headers,data:{email,password}})).status()).toBe(200);
  await page.goto('/');const menu=page.getByRole('button',{name:'Mở điều hướng'});if(await menu.isVisible())await menu.click();
  await page.getByRole('button',{name:'Quản trị nội dung',exact:true}).click();
  await page.getByText('Quản lý âm đọc & podcast',{exact:true}).click();
  const panel=page.locator('details.card');await expect(panel.getByText('Bản thử nghiệm — Chưa duyệt',{exact:true}).first()).toBeVisible();
  await panel.getByRole('button',{name:'Xem / sửa / duyệt',exact:true}).first().click();
  const field=panel.getByLabel('Nội dung JSON');const content=JSON.parse(await field.inputValue());
  content.description=`Mô tả kiểm thử ${randomUUID()}`;await field.fill(JSON.stringify(content,null,2));
  await panel.getByRole('button',{name:'Lưu bản nháp mới',exact:true}).click();
  await expect(panel.getByRole('status')).toContainText('Đã lưu bản nháp mới');
  await panel.getByRole('button',{name:'Gửi duyệt',exact:true}).first().click();
  await expect(panel.getByRole('status')).toContainText('Đã cập nhật');
  const data=await (await page.request.get('/api/admin/media')).json();
  const draft=data.revisions.find((r:{content:{description:string}})=>r.content.description===content.description);
  expect(draft.status).toBe('in_review');expect(draft.reviewer_id).toBeNull();expect(draft.published_revision_id).not.toBe(draft.id);
});
