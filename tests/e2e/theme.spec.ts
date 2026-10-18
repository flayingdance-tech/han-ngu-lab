import { test, expect } from '@playwright/test';

test('pastel and lo-fi themes persist and Chinese stays readable on each viewport',async({page},info)=>{
  await page.emulateMedia({colorScheme:'light'});
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('data-theme','light');
  await expect(page.getByRole('button',{name:'Bắt đầu bài đầu tiên'})).toBeEnabled();
  await page.screenshot({path:`test-results/pastel-home-${info.project.name}.png`,fullPage:true});
  await page.getByRole('button',{name:'Chuyển giao diện tối'}).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  await expect(page.getByRole('button',{name:'Bắt đầu bài đầu tiên'})).toBeEnabled();
  await page.screenshot({path:`test-results/lofi-home-${info.project.name}.png`,fullPage:true});
  await page.getByRole('button',{name:'Bắt đầu bài đầu tiên'}).click();
  await expect(page.locator('.hanzi').first()).toBeVisible();
  const sizes=await page.evaluate(()=>Object.fromEntries(['.hanzi','.vocab-card .pinyin','.example'].map(s=>[s,parseFloat(getComputedStyle(document.querySelector(s)!).fontSize)])));
  expect(sizes['.hanzi']).toBeGreaterThanOrEqual(48);
  expect(sizes['.vocab-card .pinyin']).toBeGreaterThanOrEqual(18);
  expect(sizes['.example']).toBeGreaterThanOrEqual(24);
  await page.screenshot({path:`test-results/lofi-lesson-${info.project.name}.png`,fullPage:true});
  await page.getByRole('button',{name:'Hội thoại',exact:true}).click();
  await expect(page.locator('.dialogue-line p[lang]').first()).toBeVisible();
  expect(await page.locator('.dialogue-line p[lang]').first().evaluate(el=>parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(28);
  await page.getByRole('button',{name:'Luyện tập',exact:true}).click();
  await expect(page.locator('.option .zh-inline').first()).toBeVisible();
  expect(await page.locator('.option .zh-inline').first().evaluate(el=>parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(23);
  await page.getByRole('button',{name:'Chuyển giao diện sáng'}).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme','light');
  const widths=await page.evaluate(()=>({content:document.documentElement.scrollWidth,viewport:innerWidth}));
  expect(widths.content).toBeLessThanOrEqual(widths.viewport+1);
  await page.screenshot({path:`test-results/pastel-quiz-${info.project.name}.png`,fullPage:true});
});

test('all four learning spaces show their own chibi without covering the heading',async({page},info)=>{
  await page.emulateMedia({colorScheme:'light'});
  await page.goto('/');
  const tabs=[['Lộ trình học','roadmap'],['Ôn tập','review'],['Sổ từ vựng','vocab'],['Tiến độ của tôi','progress']];
  for(const theme of ['light','dark']){
    if(theme==='dark')await page.getByRole('button',{name:'Chuyển giao diện tối'}).click();
    for(const [label,art] of tabs){
      const menu=page.getByRole('button',{name:'Mở điều hướng'});
      if(await menu.isVisible())await menu.click();
      await page.getByRole('navigation',{name:'Điều hướng chính'}).getByRole('button',{name:label,exact:true}).click();
      const heading=page.locator('.illustrated-heading');
      await expect(heading.getByRole('heading',{level:1})).toBeVisible();
      const mascot=page.locator('.page-mascot:visible, .sidebar-companion:visible');
      await expect(mascot).toBeVisible();
      expect(await mascot.evaluate(el=>getComputedStyle(el).backgroundImage)).toContain(`reference-${art}.webp`);
      expect((await page.request.get(`/images/reference-${art}.webp`)).ok()).toBeTruthy();
      const copy=await heading.locator('.page-heading-copy').boundingBox(),image=await mascot.boundingBox();
      expect(copy&&image&&(copy.x+copy.width<=image.x+1||image.x+image.width<=copy.x+1||copy.y+copy.height<=image.y+1||image.y+image.height<=copy.y+1)).toBeTruthy();
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
      await page.screenshot({path:`test-results/chibi-${art}-${theme}-${info.project.name}.png`,fullPage:false});
    }
  }
});
