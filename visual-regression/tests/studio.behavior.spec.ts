import { expect, test, type Page } from '@playwright/test'
import { regularUser, seedConsole } from './fixtures/api'

const origin = 'http://127.0.0.1:4173'

async function studioSession(page: Page, id = regularUser.id) {
  await page.clock.setFixedTime(new Date('2026-10-29T04:00:00Z'))
  await seedConsole(page, 'v1', { user: { ...regularUser, id }, theme: 'dark' })
}

test('requires the site login before loading a private workspace', async ({ page }) => {
  await page.goto(`${origin}/studio/canvas/private-project`)
  await expect(page).toHaveURL(/\/login\?redirect=%2Fstudio%2Fcanvas%2Fprivate-project/)
  await expect(page.locator('[data-studio-site-bar]')).toHaveCount(0)
})

test('retries a session outage without hydrating a workspace', async ({ page }) => {
  await studioSession(page)
  await page.route('**/api/v1/auth/me', (route) => route.fulfill({ status: 503, body: '{}' }))
  await page.goto(`${origin}/studio/`)
  await expect(page.getByRole('button', { name: '重新加载', exact: true })).toBeVisible()
  await expect(page.locator('[data-studio-site-bar]')).toHaveCount(0)
  await expect(page).toHaveURL(`${origin}/studio/`)
})

test('opens from the Console and keeps the canvas usable before a key exists', async ({ page }, testInfo) => {
  await studioSession(page)
  await page.goto(`${origin}/dashboard`)
  if (testInfo.project.name.includes('mobile')) await page.locator('header button').filter({ has: page.locator('svg') }).first().click()
  const entry = page.locator('aside nav a[href="/studio/"]').first()
  await expect(entry).toHaveAttribute('aria-label', '无限画布')
  await entry.click()
  await expect(page.getByRole('button', { name: '新建画布', exact: true }).first()).toBeVisible()
  await expect(page.getByText('当前浏览器保存 · 请定期导出')).toBeVisible()
  await page.getByRole('button', { name: '接入站内密钥', exact: true }).click()
  await expect(page.getByText('还没有可用密钥。')).toBeVisible()
  await expect(page.getByRole('link', { name: '去密钥管理创建' })).toHaveAttribute('href', '/keys')
  await expect(page.getByRole('button', { name: '接入并读取模型' })).toBeDisabled()
})

test('creates nodes, undoes/redoes, reloads, exports and imports a real canvas', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await studioSession(page)
  await page.goto(`${origin}/studio/`)
  await page.getByRole('button', { name: '新建画布', exact: true }).first().click()
  await expect(page).toHaveURL(/\/studio\/canvas\/[^/]+$/)
  await expect(page.getByRole('status')).toHaveText('当前浏览器保存 · 请定期导出')
  const projectURL = page.url()
  await page.getByRole('button', { name: '文本', exact: true }).click()
  await page.getByRole('button', { name: '撤销', exact: true }).click()
  await expect(page.getByRole('button', { name: '重做', exact: true })).toBeEnabled()
  await page.getByRole('button', { name: '重做', exact: true }).click()
  await expect(page).toHaveScreenshot(`studio-project-${testInfo.project.name}.png`)
  await page.getByRole('button', { name: '打开画布菜单', exact: true }).click()
  const downloaded = page.waitForEvent('download')
  await page.getByText('导出当前画布', { exact: true }).click()
  const download = await downloaded
  const exported = await download.path()
  expect(exported).toBeTruthy()
  await page.reload()
  await expect(page).toHaveURL(projectURL)
  await expect(page.getByRole('button', { name: '打开画布菜单', exact: true })).toBeVisible()
  await page.goto(`${origin}/studio/`)
  await expect(page.getByText('1 个节点 · 0 条连线', { exact: true })).toBeVisible()
  await page.locator('input[type="file"]').setInputFiles(exported!)
  await expect(page.locator('article')).toHaveCount(2)
  await expect(page.getByText('1 个节点 · 0 条连线', { exact: true })).toHaveCount(2)
  await expect(page.getByRole('status')).toHaveText('当前浏览器保存 · 请定期导出')
  await page.reload()
  await expect(page.locator('article')).toHaveCount(2)
  await expect(page).toHaveScreenshot(`studio-library-${testInfo.project.name}.png`)
  expect(errors).toEqual([])
})

test('isolates saved projects between two signed-in users in the same browser', async ({ page }) => {
  await studioSession(page)
  await page.goto(`${origin}/studio/`)
  await page.getByRole('button', { name: '新建画布', exact: true }).first().click()
  await expect(page).toHaveURL(/\/studio\/canvas\/[^/]+$/)
  await expect(page.getByRole('status')).toHaveText('当前浏览器保存 · 请定期导出')
  await page.goto(`${origin}/studio/`)
  await expect(page.locator('article')).toHaveCount(1)
  // A real document boundary initializes the second user's complete storage namespace.
  await page.route('**/api/v1/auth/me', (route) => route.fulfill({ json: { code: 0, data: { ...regularUser, id: 303 } } }))
  await page.evaluate(() => localStorage.setItem('auth_user', JSON.stringify({ id: 303, role: 'user' })))
  await page.reload()
  await expect(page.getByText('还没有画布', { exact: true })).toBeVisible()
  await expect(page.locator('article')).toHaveCount(0)
  await page.route('**/api/v1/auth/me', (route) => route.fulfill({ json: { code: 0, data: regularUser } }))
  await page.evaluate((user) => localStorage.setItem('auth_user', JSON.stringify(user)), regularUser)
  await page.reload()
  await expect(page.locator('article')).toHaveCount(1)
})

test('discovers models using the chosen key, respects image access, and leaves video unconfigured', async ({ page }) => {
  await studioSession(page)
  const key = { id: 991, user_id: regularUser.id, key: 'sk-studio-browser-fixture', name: '画布测试', status: 'active', quota: 1, quota_used: 0, expires_at: null, group: { id: 21, name: '站内图片', status: 'active', platform: 'openai', allow_image_generation: true } }
  await page.route('**/api/v1/keys?**', (route) => route.fulfill({ json: { code: 0, data: { items: [key], pages: 1 } } }))
  let discoveryAuthorization = ''
  await page.route('**/v1/models', (route) => {
    discoveryAuthorization = route.request().headers().authorization
    return route.fulfill({ json: { data: ['gpt-image-2', 'gpt-5.5', 'grok-imagine-video'].map((id) => ({ id })) } })
  })
  await page.goto(`${origin}/studio/`)
  await page.getByRole('button', { name: '接入站内密钥', exact: true }).click()
  await page.getByRole('combobox', { name: '站内 API Key' }).click()
  await page.getByText('画布测试 · 站内图片', { exact: true }).last().click()
  await page.getByRole('button', { name: '接入并读取模型' }).click()
  await expect(page.getByRole('button', { name: '切换站内密钥' })).toBeVisible()
  expect(discoveryAuthorization).toBe(`Bearer ${key.key}`)
  const saved = await page.evaluate((id) => JSON.parse(localStorage.getItem(`zero-one-studio:${id}:infinite-canvas:infinite-canvas:ai_config_store`) || 'null'), regularUser.id)
  expect(saved.state.config.channels[0].models).toEqual([{ name: 'gpt-image-2', capability: 'image' }, { name: 'gpt-5.5', capability: 'text' }])
  expect(saved.state.config.videoModel).toBe('')
  await page.goto(`${origin}/studio/image`)
  await expect(page.locator('textarea').first()).toBeVisible()
})

test('serves deep links while missing JavaScript returns a real 404', async ({ page }) => {
  await studioSession(page)
  const missing = await page.request.get(`${origin}/studio/assets/missing.js`)
  expect(missing.status()).toBe(404)
  await page.goto(`${origin}/studio/video`)
  await expect(page.locator('[data-studio-site-bar]')).toBeVisible()
  await expect(page.getByText('视频 API 待接入；可以先在画布中导入和编排视频素材。')).toBeVisible()
  await expect(page.getByRole('link', { name: '← 零一控制台' })).toHaveAttribute('href', '/dashboard')
})
