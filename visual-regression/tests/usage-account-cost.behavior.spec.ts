import { expect, test, type Page } from '@playwright/test'
import { seedConsole } from './fixtures/api'

const billingUsageItem = {
  id: 1,
  user_id: 56,
  api_key_id: 111,
  account_id: 198,
  request_id: 'req-account-cost-visibility',
  model: 'gpt-5.6-sol',
  group_id: 9,
  input_tokens: 229_417,
  output_tokens: 433,
  cache_creation_tokens: 0,
  cache_read_tokens: 4_864,
  cache_creation_5m_tokens: 0,
  cache_creation_1h_tokens: 0,
  input_cost: 0.32788709,
  output_cost: 0.00299,
  cache_creation_cost: 0,
  cache_read_cost: 0.000432,
  total_cost: 0.33130909,
  account_stats_cost: 0.33130909,
  actual_cost: 0.013849,
  rate_multiplier: 0.39,
  account_rate_multiplier: 1,
  upstream_rate_multiplier: 0.22,
  account_cost: 0.072888,
  account_cost_status: 'confirmed',
  billing_type: 0,
  billing_mode: 'token',
  request_type: 'stream',
  stream: true,
  openai_ws_mode: false,
  duration_ms: 143_000,
  first_token_ms: 65_000,
  image_count: 0,
  service_tier: 'standard',
  created_at: '2026-09-09T11:00:00+08:00',
  user: { id: 56, email: 'billing@01yapi.test' },
  api_key: { id: 111, name: 'billing-key' },
  account: { id: 198, name: 'xin' },
  group: { id: 9, name: 'pro分组' },
}

async function seedBillingUsage(page: Page) {
  await seedConsole(page)
  await page.route('**/api/v1/admin/usage**', async route => {
    const url = new URL(route.request().url())
    if (url.pathname !== '/api/v1/admin/usage') {
      await route.fallback()
      return
    }
    await route.fulfill({
      contentType: 'application/json; charset=utf-8',
      body: JSON.stringify({
        code: 0,
        message: 'ok',
        data: {
          items: [billingUsageItem],
          total: 1,
          page: 1,
          page_size: 20,
          pages: 1,
        },
      }),
    })
  })
}

test.describe('Usage account cost visibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-09-09T12:00:00+08:00'))
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await seedBillingUsage(page)
  })

  test('defaults to visible, hides every cost surface, and persists after refresh', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/usage')

    await expect(page.getByText('账号成本 $0.072888', { exact: false })).toBeVisible()
    await expect(page.getByText('xin', { exact: true })).toBeVisible()
    await page.getByTestId('toggle-account-cost').click()
    await expect(page.getByText('账号成本 $0.072888', { exact: false })).not.toBeVisible()
    await expect(page.getByText('xin', { exact: true })).toBeVisible()
    await expect.poll(() => page.evaluate(() => localStorage.getItem('zero-one:admin-usage:show-account-cost:v1'))).toBe('false')

    await page.reload()
    await expect(page.getByText('账号成本 $0.072888', { exact: false })).not.toBeVisible()
    await page.getByTestId('toggle-account-cost').click()
    await expect(page.getByText('账号成本 $0.072888', { exact: false })).toBeVisible()
  })

  test('remains usable at the 320px mobile boundary', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 })
    await page.goto('http://127.0.0.1:4173/admin/usage')

    const toggle = page.getByTestId('toggle-account-cost')
    await expect(toggle).toBeVisible()
    await toggle.click()
    await expect(page.getByText('账号成本 $0.072888', { exact: false })).not.toBeVisible()
    const tableScroller = page.locator('.overflow-auto').filter({ hasText: 'xin' }).first()
    await expect(tableScroller).toBeVisible()
    const dimensions = await tableScroller.evaluate(element => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }))
    expect(dimensions.scrollWidth).toBeGreaterThanOrEqual(dimensions.clientWidth)
  })

  test('replaces the ambiguous pending label with the server reason', async ({ page }) => {
    await page.unroute('**/api/v1/admin/usage**')
    await page.route('**/api/v1/admin/usage**', async route => {
      const url = new URL(route.request().url())
      if (url.pathname !== '/api/v1/admin/usage') {
        await route.fallback()
        return
      }
      const items = [
        {
          ...billingUsageItem,
          id: 2,
          account_id: 202,
          upstream_rate_multiplier: null,
          account_cost: null,
          account_cost_status: 'missing_upstream_evidence',
          account: { id: 202, name: 'history-missing' },
        },
        {
          ...billingUsageItem,
          id: 3,
          account_id: 203,
          model: 'seedance-video',
          billing_mode: 'video',
          upstream_rate_multiplier: null,
          account_cost: null,
          account_cost_status: 'unsupported_billing_scope',
          account: { id: 203, name: 'unsupported-video' },
        },
      ]
      await route.fulfill({
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({ code: 0, message: 'ok', data: { items, total: 2, page: 1, page_size: 20, pages: 1 } }),
      })
    })

    await page.goto('http://127.0.0.1:4173/admin/usage')
    await expect(page.getByText('请求发生时未保存上游证据', { exact: false })).toBeVisible()
    await expect(page.getByText('暂不支持该计费范围', { exact: false })).toBeVisible()
    await expect(page.getByText('待核算', { exact: true })).toHaveCount(0)
  })
})
