import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
const require = createRequire(new URL('../../visual-regression/package.json', import.meta.url))
const { chromium, expect } = require('@playwright/test')
const input = JSON.parse(readFileSync('/scenario/input.json', 'utf8'))
assert.ok(new URL(input.origin).hostname.startsWith('zero-one-admin-ui-'), 'Only the newly provisioned verification stack is allowed')
const browser = await chromium.launch({ headless: true })
let page
try {
  page = await browser.newPage({ locale: 'zh-CN', viewport: { width: 1440, height: 1000 } })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.addInitScript(({ token, user }) => {
    if (window !== window.top) return
    localStorage.setItem('auth_token', token)
    localStorage.setItem('auth_user', JSON.stringify(user))
    localStorage.setItem('sub2api_locale', 'zh')
    localStorage.setItem('theme', 'light')
    localStorage.setItem('admin_guide_1_admin_v4_interactive', 'true')
  }, input)
  let settingsWrites = 0
  page.on('request', request => {
    if (request.method() === 'PUT' && new URL(request.url()).pathname === '/api/v1/admin/settings') settingsWrites++
  })
  await page.goto(`${input.origin}/admin/settings`)
  await page.getByRole('tab', { name: '安全与认证', exact: true }).click()
  const keys = page.getByRole('region', { name: '管理员访问密钥' })
  await keys.getByRole('button', { name: '创建受限密钥' }).click()
  await keys.locator('[data-test="name"]').fill('真实接口验证密钥')
  const created = page.waitForResponse(response => response.request().method() === 'POST' && new URL(response.url()).pathname === '/api/v1/admin/settings/admin-api-keys')
  await keys.locator('[data-test="save"]').click()
  const initial = (await (await created).json()).data
  assert.ok(initial.key && initial.item.id)
  await expect(keys.getByText(initial.key, { exact: true })).toBeVisible()
  await keys.getByRole('button', { name: '已保存，关闭展示' }).click()
  await expect(keys.getByText(initial.key, { exact: true })).toHaveCount(0)
  const rotated = page.waitForResponse(response => response.request().method() === 'POST' && new URL(response.url()).pathname.endsWith('/rotate'))
  page.once('dialog', dialog => dialog.accept())
  await keys.getByRole('button', { name: '轮换', exact: true }).click()
  const rotation = (await (await rotated).json()).data
  assert.ok(rotation.key && rotation.key !== initial.key)
  await expect(keys.getByText(rotation.key, { exact: true })).toBeVisible()
  page.once('dialog', dialog => dialog.accept())
  await keys.getByRole('button', { name: '永久撤销' }).click()
  await expect(keys.getByTestId('admin-access-key-row')).toContainText('已撤销')
  await page.goto(`${input.origin}/admin/groups`)
  await page.getByRole('button', { name: '编辑', exact: true }).first().click()
  const form = page.locator('form#edit-group-form')
  await expect(form.getByRole('checkbox', { name: '按张计费', exact: true })).toBeChecked()
  await form.getByRole('checkbox', { name: '按张计费', exact: true }).uncheck()
  const updated = page.waitForResponse(response => response.request().method() === 'PUT' && new URL(response.url()).pathname === `/api/v1/admin/groups/${input.group.id}`)
  await form.evaluate(element => element.requestSubmit())
  assert.equal((await (await updated).json()).data.image_count_billing, false)
  await expect(form).toBeHidden()
  await page.reload()
  await page.getByRole('button', { name: '编辑', exact: true }).first().click()
  await expect(page.locator('form#edit-group-form').getByRole('checkbox', { name: '按张计费', exact: true })).not.toBeChecked()
  assert.equal(settingsWrites, 0)
  assert.deepEqual(errors, [])
  writeFileSync('/scenario/result.json', JSON.stringify({ created: true, rotated: true, revoked: true, groupPersisted: true, noSystemSettingsWrites: true, originalKey: initial.key, rotatedKey: rotation.key }), { mode: 0o600 })
} catch (error) {
  console.error('Management UI browser failed at', page?.url(), 'headings:', await page?.locator('h1,h2').allTextContents())
  throw error
} finally {
  await browser.close()
}
