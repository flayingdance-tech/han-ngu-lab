import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { openDatabase } from '../../server/database';
import { seedLessons } from '../../content/lessons';

test('editor changes exercise type, alternative answers and example Pinyin in a new draft',async({page},info)=>{
  const health=await page.request.get('/api/health');
  expect((await health.json()).mode).toBe('local-preview');
  const email=`cms-${randomUUID()}@example.test`, password=`Test-${randomUUID()}!`;
  const headers={Origin:'http://localhost:3000','X-HNL-Client':'web'};
  const reg=await page.request.post('/api/auth/register',{headers,data:{email,password,name:'Biên tập thử',adult:true,acceptedTerms:true}});
  expect(reg.status()).toBe(201);
  const token=new URL((await reg.json()).devLink).searchParams.get('verify');
  expect((await page.request.post('/api/auth/verify',{headers,data:{token}})).ok()).toBeTruthy();
  // Local fixture promotes only this newly-created synthetic account.
  const db=openDatabase('.local/hanngulab.sqlite');
  try{db.prepare("UPDATE users SET role='editor' WHERE email=?").run(email);}finally{db.close();}
  expect((await page.request.post('/api/auth/login',{headers,data:{email,password}})).ok()).toBeTruthy();
  const lesson={...structuredClone(seedLessons[0]),id:`cms-${randomUUID()}`,title:`Bài kiểm thử ${info.project.name}`};
  expect((await page.request.post('/api/admin/lessons',{headers,data:lesson})).status()).toBe(201);
  await page.goto('/');
  const menu=page.getByRole('button',{name:'Mở điều hướng'});
  if(await menu.isVisible())await menu.click();
  await page.getByRole('button',{name:'Quản trị nội dung',exact:true}).click();
  const card=page.locator('.revision').filter({has:page.getByRole('heading',{name:lesson.title,exact:true})});
  await card.getByRole('button',{name:'Soạn phiên bản mới'}).click();
  await page.getByLabel('Thứ tự bài',{exact:true}).fill('18');
  await page.getByLabel('Pinyin ví dụ',{exact:true}).first().fill('Nǐ hǎo!');
  const question=page.getByRole('group').first();
  await question.getByLabel('Loại bài tập').selectOption('input');
  await question.getByLabel('Đáp án khác được chấp nhận (mỗi dòng một mục)').fill('谢谢你');
  await page.getByRole('button',{name:'Lưu bản nháp mới'}).click();
  await expect(page.getByRole('status')).toContainText('Đã lưu phiên bản nháp mới');
  const response=await page.request.get('/api/admin/lessons');
  const revisions=(await response.json()).revisions.filter((r:{lesson_id:string})=>r.lesson_id===lesson.id);
  expect(revisions).toHaveLength(2);
  const updated=revisions.find((r:{content:{order:number}})=>r.content.order===18);
  expect(updated.status).toBe('draft');
  expect(updated.content.vocabulary[0].examplePinyin).toBe('Nǐ hǎo!');
  expect(updated.content.exercises[0].type).toBe('input');
  expect(updated.content.exercises[0].alternatives).toEqual(['谢谢你']);
  expect(updated.content.humanReviewed).toBe(false);
});
