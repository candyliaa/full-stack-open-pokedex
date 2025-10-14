import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e-tests',
  testMatch: '**/*.e2e.spec.js',
})
