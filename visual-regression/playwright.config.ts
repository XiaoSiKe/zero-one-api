import { defineConfig } from '@playwright/test'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const chromiumExecutable = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI
    ? [['line'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
    : 'line',
  snapshotPathTemplate: '{testDir}/__screenshots__/{projectName}/{arg}{ext}',
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      maxDiffPixels: 0,
      scale: 'css',
    },
  },
  use: {
    locale: 'zh-CN',
    timezoneId: 'Asia/Shanghai',
    deviceScaleFactor: 1,
    colorScheme: 'light',
    contextOptions: {
      reducedMotion: 'no-preference',
    },
    launchOptions: chromiumExecutable ? { executablePath: chromiumExecutable } : undefined,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium-desktop',
      use: {
        browserName: 'chromium',
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: 'chromium-mobile',
      use: {
        browserName: 'chromium',
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: [
    ...(process.env.ZERO_ONE_CONSOLE_ONLY === 'true' ? [] : [{
      command: 'npm run dev -- --host 127.0.0.1 --port 4174 --strictPort',
      cwd: `${root}landing`,
      env: { ...process.env, VITE_VISUAL_TEST: 'true' },
      url: 'http://127.0.0.1:4174',
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    }]),
    {
      command: 'node serve-recovered-console.mjs --port 4173',
      cwd: `${root}visual-regression`,
      url: 'http://127.0.0.1:4173',
      reuseExistingServer: false,
      timeout: 120_000,
    },
  ],
})
