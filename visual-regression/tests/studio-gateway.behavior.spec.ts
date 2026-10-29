import { expect, test } from '@playwright/test'
import { regularUser, seedConsole } from './fixtures/api'

const origin = 'http://127.0.0.1:4173'
const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9Wl6OZsAAAAASUVORK5CYII='

test('loads the optional local Agent only when opened and returns to the workspace', async ({ page }) => {
  await seedConsole(page, 'v1', { user: regularUser })
  await page.goto(`${origin}/studio/`)
  await expect(page.getByRole('button', { name: '新建画布', exact: true }).first()).toBeVisible()
  await page.getByRole('button', { name: '打开 Agent', exact: true }).click()
  await expect(page.getByText('连接本地 Agent', { exact: true })).toBeVisible()
  const close = page.getByRole('button', { name: '收起 Agent 面板', exact: true })
  await expect(close).toBeInViewport()
  await close.click()
  await expect(page.getByRole('button', { name: '新建画布', exact: true }).first()).toBeVisible()
})

test('renews an expired site session using the existing refresh contract', async ({ page }) => {
  await seedConsole(page, 'v1', { user: regularUser })
  await page.addInitScript(() => {
    localStorage.setItem('auth_token', 'expired-studio-session')
    localStorage.setItem('refresh_token', 'studio-refresh-fixture')
    localStorage.setItem('token_expires_at', '1')
  })
  let renewals = 0
  await page.route('**/api/v1/auth/refresh', (route) => {
    renewals++
    expect(route.request().postDataJSON()).toEqual({ refresh_token: 'studio-refresh-fixture' })
    return route.fulfill({ json: { code: 0, data: { access_token: 'renewed-studio-session', refresh_token: 'renewed-studio-refresh', expires_in: 3600, token_type: 'Bearer' } } })
  })
  await page.route('**/api/v1/auth/me', (route) => route.request().headers().authorization === 'Bearer renewed-studio-session'
    ? route.fulfill({ json: { code: 0, data: regularUser } })
    : route.fulfill({ status: 401, json: { code: 401, message: 'expired' } }))
  await page.goto(`${origin}/studio/`)
  await expect(page.getByRole('button', { name: '新建画布', exact: true }).first()).toBeVisible()
  expect(renewals).toBe(1)
  expect(await page.evaluate(() => localStorage.getItem('auth_token'))).toBe('renewed-studio-session')
})

for (const imageAllowed of [true, false]) {
  test(`uses the selected key and keeps group image access ${imageAllowed ? 'enabled' : 'disabled'}`, async ({ page }) => {
    await seedConsole(page, 'v1', { user: regularUser })
    const key = { id: 992, user_id: regularUser.id, key: 'sk-studio-generation-fixture', name: '画布生图', status: 'active', quota: 1, quota_used: 0, expires_at: null, group: { id: 22, name: '能力测试', status: 'active', platform: 'openai', allow_image_generation: imageAllowed } }
    await page.route('**/api/v1/keys?**', (route) => route.fulfill({ json: { code: 0, data: { items: [key], pages: 1 } } }))
    await page.route('**/v1/models', (route) => route.fulfill({ json: { data: [{ id: 'gpt-image-2' }, { id: 'gpt-5.5' }] } }))
    const calls: { authorization: string; body: Record<string, unknown> }[] = []
    await page.route('**/v1/images/generations', (route) => {
      calls.push({ authorization: route.request().headers().authorization, body: route.request().postDataJSON() })
      return route.fulfill({ json: { created: 1, data: [{ b64_json: png }] } })
    })
    await page.goto(`${origin}/studio/`)
    await page.getByRole('button', { name: '接入站内密钥', exact: true }).click()
    await page.getByRole('combobox', { name: '站内 API Key' }).click()
    await page.getByText('画布生图 · 能力测试', { exact: true }).last().click()
    await page.getByRole('button', { name: '接入并读取模型' }).click()
    await expect(page.getByRole('button', { name: '切换站内密钥' })).toBeVisible()
    await page.goto(`${origin}/studio/image`)
    await page.locator('textarea').first().fill('画一个蓝色小圆点')
    await page.getByRole('button', { name: '开始生成', exact: true }).click()
    if (imageAllowed) {
      await expect.poll(() => calls.length).toBeGreaterThan(0)
      expect(calls.every((call) => call.authorization === `Bearer ${key.key}` && call.body.model === 'gpt-image-2')).toBe(true)
      await expect(page.getByText('图片已生成', { exact: true })).toBeVisible()
    } else {
      await expect(page.getByRole('dialog')).toBeVisible()
      expect(calls).toHaveLength(0)
    }
  })
}
