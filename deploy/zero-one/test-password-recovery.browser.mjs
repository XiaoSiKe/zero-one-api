import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(new URL('../../visual-regression/package.json', import.meta.url))
const { chromium } = require('@playwright/test')
const scenario = JSON.parse(readFileSync('/scenario/input.json', 'utf8'))
const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage({ locale: 'zh-CN', viewport: { width: 1440, height: 900 } })
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto(scenario.url)
  await page.locator('#password').fill(scenario.password)
  await page.locator('#confirmPassword').fill(scenario.password)
  await page.getByRole('button', { name: '重置密码', exact: true }).click()
  await page.getByRole('heading', { name: '密码重置成功' }).waitFor()
  await page.screenshot({ path: '/scenario/password-reset-success.png' })
  // 再次通过同一真实链接提交，必须由 Backend 拒绝并由恢复版正确翻译。
  await page.goto(scenario.url)
  await page.locator('#password').fill('another-verification-password')
  await page.locator('#confirmPassword').fill('another-verification-password')
  await page.getByRole('button', { name: '重置密码', exact: true }).click()
  await page.getByText('密码重置链接无效或已过期。请重新请求一个新链接。').waitFor()
  assert.deepEqual(errors, [])
  writeFileSync('/scenario/browser-result.json', JSON.stringify({ reset: true, reusedLinkRejected: true, pageErrors: 0 }))
} finally {
  await browser.close()
}
