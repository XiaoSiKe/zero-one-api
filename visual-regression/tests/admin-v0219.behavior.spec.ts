import { expect, test, type Page, type Route } from '@playwright/test'
import { seedConsole } from './fixtures/api'

const origin = 'http://127.0.0.1:4173'
const hostSelector = '#zero-one-provider-catalog-admin'
const fulfill = (route: Route, data: unknown) => route.fulfill({
  contentType: 'application/json', body: JSON.stringify({ code: 0, data }),
})

async function openSurface(page: Page, path: string, surface: string) {
  await page.goto(`${origin}${path}`)
  await expect(page.locator(hostSelector)).toHaveAttribute('data-zero-one-provider-catalog-admin', surface)
}

test.beforeEach(async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-08-29T12:00:00+08:00'))
  await seedConsole(page)
})

test('scoped keys are delivered through Security and save independently of system settings', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  let items: Record<string, unknown>[] = []
  const policies: Record<string, unknown>[] = []
  const permission = { id: 'accounts.read', label: '读取账户', scope: 'account', category: '账户' }
  await page.route(/\/api\/v1\/admin\/settings\/admin-api-keys(?:\/|\?|$)/, async route => {
    const method = route.request().method()
    if (method === 'GET') return fulfill(route, { items, permissions: [permission] })
    if (method === 'POST') {
      const input = route.request().postDataJSON()
      policies.push(input)
      const item = { ...input, id: 'fixture-scoped', key_prefix: 'adm_sc_fixture', last_used_at: null, last_used_ip: '', revoked_at: null }
      items = [item]
      return fulfill(route, { item, key: 'adm_sc_fixture_once_secret' })
    }
    if (method === 'PUT') {
      items = [{ ...items[0], ...route.request().postDataJSON() }]
      return fulfill(route, items[0])
    }
    items = items.map(item => ({ ...item, enabled: false, revoked_at: '2026-08-29T04:00:00Z' }))
    return fulfill(route, { message: 'revoked' })
  })
  await page.route('**/api/v1/admin/groups/all*', route => fulfill(route, [{ id: 7, name: '授权分组', platform: 'openai' }]))
  let settingsSaves = 0
  page.on('request', request => {
    if (request.method() === 'PUT' && new URL(request.url()).pathname === '/api/v1/admin/settings') settingsSaves++
  })
  await openSurface(page, '/admin/settings', 'settings')
  await page.getByRole('tab', { name: '安全' }).click()
  const keys = page.getByRole('region', { name: '管理员访问密钥' })
  await expect(keys.getByTestId('admin-access-keys-empty')).toBeVisible()
  await keys.getByRole('button', { name: '创建受限密钥' }).click()
  await keys.locator('[data-test="name"]').fill('分组只读工具')
  await keys.locator('[data-test="groups-0"]').selectOption('7')
  await keys.locator('input[value="accounts.read"]').check()
  await keys.locator('[data-test="name"]').press('Enter')
  await expect(keys.getByText('adm_sc_fixture_once_secret', { exact: true })).toBeVisible()
  expect(policies).toHaveLength(1)
  expect(policies[0]).toMatchObject({ policy: { global_permissions: [], rules: [{ group_ids: [7], permissions: ['accounts.read'], account_types: [], platforms: [], all_groups: false, include_ungrouped: false }] } })
  expect(settingsSaves).toBe(0)
  await keys.getByRole('button', { name: '已保存，关闭展示' }).click()
  await expect(keys.getByText('adm_sc_fixture_once_secret', { exact: true })).toHaveCount(0)
  await keys.getByRole('button', { name: '停用', exact: true }).click()
  await expect(keys.getByTestId('admin-access-key-row')).toContainText('已停用')
  page.once('dialog', dialog => dialog.accept())
  await keys.getByRole('button', { name: '永久撤销' }).click()
  await expect(keys.getByTestId('admin-access-key-row')).toContainText('已撤销')
  await page.getByRole('tab', { name: '通用' }).click()
  await expect(keys).toHaveCount(0)
  expect(errors).toEqual([])
})

test('OpenAI create and edit use the same per-image billing control and payload', async ({ page }) => {
  let group: Record<string, unknown> = {
    id: 71, name: '图片分组', platform: 'openai', status: 'active', subscription_type: 'standard',
    rate_multiplier: 0.5, is_exclusive: false, sort_order: 1, allow_image_generation: true,
    image_count_billing: true, image_rate_independent: true, image_rate_multiplier: 0.8,
    created_at: '2026-08-01T00:00:00Z', updated_at: '2026-08-01T00:00:00Z',
  }
  let created: Record<string, unknown> | undefined
  let updated: Record<string, unknown> | undefined
  await page.route(/\/api\/v1\/admin\/groups(?:\/|\?|$)/, async route => {
    const path = new URL(route.request().url()).pathname
    if (path === '/api/v1/admin/groups' && route.request().method() === 'GET') return fulfill(route, { items: [group], total: 1, page: 1, page_size: 20, pages: 1 })
    if (path === '/api/v1/admin/groups' && route.request().method() === 'POST') {
      created = route.request().postDataJSON()
      return fulfill(route, { ...created, id: 72, status: 'active' })
    }
    if (path === '/api/v1/admin/groups/71' && route.request().method() === 'PUT') {
      updated = route.request().postDataJSON();group = { ...group, ...updated }
      return fulfill(route, group)
    }
    return route.fallback()
  })
  await openSurface(page, '/admin/groups', 'groups')
  await page.getByRole('button', { name: '编辑', exact: true }).first().click()
  const edit = page.locator('form#edit-group-form')
  const perImage = edit.getByRole('checkbox', { name: '按张计费', exact: true })
  await expect(perImage).toBeChecked()
  await perImage.uncheck()
  await edit.evaluate((form: HTMLFormElement) => form.requestSubmit())
  await expect(edit).toBeHidden()
  expect(updated).toMatchObject({ image_count_billing: false, allow_image_generation: true, rate_multiplier: 0.5, image_rate_multiplier: 0.8 })

  await page.locator('[data-tour="groups-create-btn"]').click()
  const create = page.locator('form#create-group-form')
  await page.locator('[data-tour="group-form-platform"]').click()
  await page.getByText('OpenAI', { exact: true }).last().click()
  await create.locator('input[type="text"]').first().fill('按张图片组')
  await create.getByRole('checkbox', { name: '允许当前分组生图', exact: true }).check()
  await create.getByRole('checkbox', { name: '按张计费', exact: true }).check()
  await create.evaluate((form: HTMLFormElement) => form.requestSubmit())
  await expect(create).toBeHidden()
  expect(created).toMatchObject({ platform: 'openai', allow_image_generation: true, image_count_billing: true })
})

test('the Grok editor displays catalogue provenance without rewriting model mappings', async ({ page }) => {
  const account = {
    id: 91, name: 'Grok 诊断账号', platform: 'grok', type: 'apikey', status: 'active',
    credentials: { api_key: 'fixture-key', base_url: 'https://grok-provider.test', model_mapping: { 'grok-alias': 'grok-4' } },
    extra: {}, concurrency: 2, priority: 1, rate_multiplier: 1, schedulable: true, group_ids: [],
    created_at: '2026-08-01T00:00:00Z', updated_at: '2026-08-01T00:00:00Z',
    grok_model_diagnostics: {
      state: 'fresh', endpoint: 'https://grok-provider.test/v1/models', source: 'upstream',
      fetched_at: '2026-08-29T03:59:00Z', expires_at: '2026-08-29T04:10:00Z',
      models: ['grok-4'], mappings: [{ requested: 'grok-alias', resolved: 'grok-4', status: 'listed' }],
      last_attempt: { status: 'success', finished_at: '2026-08-29T03:59:00Z' },
    },
  }
  const updates: unknown[] = []
  await page.route(/\/api\/v1\/admin\/accounts(?:\/|\?|$)/, route => {
    const request = route.request(), path = new URL(request.url()).pathname
    if (path === '/api/v1/admin/accounts' && request.method() === 'GET') return fulfill(route, { items: [account], total: 1, page: 1, page_size: 20, pages: 1 })
    if (path === '/api/v1/admin/accounts/91' && request.method() === 'GET') return fulfill(route, account)
    if (path === '/api/v1/admin/accounts/91' && request.method() === 'PUT') { updates.push(request.postDataJSON());return fulfill(route, account) }
    return route.fallback()
  })
  await openSurface(page, '/admin/accounts', 'accounts')
  await page.getByRole('button', { name: '编辑', exact: true }).first().click()
  const panel = page.getByTestId('grok-model-diagnostics')
  await expect(panel).toBeVisible()
  await panel.getByTestId('grok-diagnostics-details-toggle').click()
  await expect(panel.getByTestId('grok-diagnostics-endpoint')).toContainText('https://grok-provider.test/v1/models')
  expect(updates).toEqual([])
})


test('all account platform choices remain readable and touchable at 320px', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile')
  await page.setViewportSize({ width: 320, height: 844 })
  await openSurface(page, '/admin/accounts', 'accounts')
  await page.getByRole('button', { name: '添加账号', exact: true }).click()
  const choices = page.locator('.account-platform-options > button')
  expect(await choices.count()).toBeGreaterThan(9)
  for (const choice of await choices.all()) {
    const box = await choice.boundingBox()
    expect(box?.width).toBeGreaterThanOrEqual(100)
    expect(box?.height).toBeGreaterThanOrEqual(44)
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
