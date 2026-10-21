import { defineConfig } from '@playwright/test';
import { resolve } from 'node:path';
import base from './playwright.config';

// Worker fixtures must never promote users in the owner's development database.
process.env.HNL_ISOLATED_CMS_TEST='true';
export default defineConfig({
  ...base,
  testDir:resolve('tests/e2e'),
  testMatch:['audio.spec.ts','podcast.spec.ts','media-cms.spec.ts','learning.spec.ts'],
  outputDir:resolve('.local/production-recovery/ui-results'),
  reporter:[['list']],
  webServer:{
    command:process.platform==='win32'?'npm.cmd run dev':'npm run dev',
    url:'http://localhost:3000',reuseExistingServer:false,timeout:180000,
    env:{...process.env,NODE_ENV:'development',LOCAL_PREVIEW:'true',DATABASE_PATH:resolve('.local/pre-github-audit/synthetic-auth-ui.sqlite')},
  },
});
