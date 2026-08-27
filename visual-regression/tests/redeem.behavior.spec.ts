import { expect, test, type Route } from '@playwright/test'
import { adminUser, regularUser, seedConsole } from './fixtures/api'

const origin = 'http://127.0.0.1:4173'
const reply = (route: Route, data: unknown) => route.fulfill({
  contentType: 'application/json', body: JSON.stringify({ code: 0, data }),
})
const record = (type = 'benefit', value = 5) => ({
  id: 101, code: 'redeem-****-1234', code_redacted: true, type, value, status: 'used',
  used_by: regularUser.id, used_at: '2026-08-28T00:00:00Z', created_at: '2026-08-27T00:00:00Z',
  batch_id: 'batch-101', min_value: 1.25, max_value: 8.75, group_id: null, validity_days: 0,
})

test.describe('Recovered Redeem Code behavior', () => {
  test.beforeEach(async ({ page }) => {
    await seedConsole(page, 'v2', { user: regularUser, version: '0.1.183' })
  })

  for (const [type, value, title] of [
    ['benefit', 5, '福利额度（兑换）'], ['mystery_box', 1.25, '盲盒额度（兑换）'],
  ] as const) {
    test(`commits ${type} and renders the actual award and history`, async ({ page }) => {
      let redeemed = false
      let posts = 0
      await page.route('**/api/v1/redeem', async (route) => {
        expect(route.request().method()).toBe('POST')
        expect(route.request().postDataJSON()).toEqual({ code: 'VALID-CODE' })
        posts += 1
        redeemed = true
        await reply(route, record(type, value))
      })
      await page.route('**/api/v1/redeem/history*', (route) => reply(route, redeemed ? [record(type, value)] : []))
      await page.route('**/api/v1/auth/me*', (route) => reply(route, { ...regularUser, balance: regularUser.balance + (redeemed ? value : 0) }))
      await page.goto(`${origin}/redeem`)
      await page.locator('#code').fill(' VALID-CODE ')
      await page.getByRole('button', { name: '兑换', exact: true }).click()
      await expect(page.getByRole('heading', { name: '兑换成功！' })).toBeVisible()
      await expect(page.locator('main')).toContainText(`$${value.toFixed(2)}`)
      await expect(page.locator('main')).toContainText(title)
      await expect(page.locator('#code')).toHaveValue('')
      await expect(page.locator('main')).toContainText(`$${(regularUser.balance + value).toFixed(2)}`)
      expect(posts).toBe(1)
    })
  }

  test('keeps success after a read failure and retries state reads without another redemption', async ({ page }) => {
    let redeemed = false
    let readFails = true
    let posts = 0
    await page.route('**/api/v1/redeem', async (route) => {
      posts += 1
      redeemed = true
      await reply(route, record())
    })
    await page.route('**/api/v1/auth/me*', (route) => redeemed && readFails
      ? route.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ code: 503, message: 'temporary read failure' }) })
      : reply(route, regularUser))
    await page.route('**/api/v1/redeem/history*', (route) => reply(route, redeemed ? [record()] : []))
    await page.goto(`${origin}/redeem`)
    await page.locator('#code').fill('VALID-CODE')
    await page.getByRole('button', { name: '兑换', exact: true }).click()
    await expect(page.getByRole('heading', { name: '兑换成功！' })).toBeVisible()
    await expect(page.getByRole('heading', { name: '兑换失败', exact: true })).toHaveCount(0)
    await expect(page.locator('[data-test="redeem-refresh"]')).toBeVisible()
    readFails = false
    await page.locator('[data-test="redeem-refresh"]').click()
    await expect(page.locator('[data-test="redeem-refresh"]')).toHaveCount(0)
    expect(posts).toBe(1)
  })

  for (const status of ['network-failure', 408, 500, 502, 503, 504] as const) {
    test(`keeps ${status} unconfirmed after repeated read-only checks`, async ({ page }) => {
      let submitted = false
      let posts = 0
      let historyReads = 0
      await page.route('**/api/v1/redeem', (route) => {
        posts += 1
        submitted = true
        return status === 'network-failure'
          ? route.abort('failed')
          : route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ code: status, message: 'No reliable acknowledgement' }) })
      })
      await page.route('**/api/v1/auth/me*', (route) => reply(route, { ...regularUser, balance: regularUser.balance + (submitted ? 5 : 0) }))
      await page.route('**/api/v1/redeem/history*', (route) => {
        historyReads += 1
        return reply(route, submitted ? [record()] : [])
      })
      await page.goto(`${origin}/redeem`)
      await page.locator('#code').fill('UNCERTAIN-CODE')
      await page.getByRole('button', { name: '兑换', exact: true }).click()
      await expect(page.locator('main')).toContainText('兑换结果待确认，请先刷新余额和兑换记录核对')
      await expect(page.getByRole('heading', { name: '兑换失败', exact: true })).toHaveCount(0)
      await expect(page.getByRole('heading', { name: '兑换成功！' })).toHaveCount(0)
      await expect(page.locator('#code')).toHaveValue('UNCERTAIN-CODE')

      for (let attempt = 0; attempt < 2; attempt += 1) {
        await page.locator('[data-test="redeem-refresh"]').click()
        await expect(page.locator('main')).toContainText('余额和兑换记录已刷新，请核对是否存在本次兑换记录')
      }
      await expect(page.locator('main')).toContainText(`$${(regularUser.balance + 5).toFixed(2)}`)
      await expect(page.locator('main')).toContainText('福利额度（兑换）')
      await expect(page.locator('main')).toContainText('兑换结果仍待确认')
      await expect(page.getByRole('heading', { name: '兑换成功！' })).toHaveCount(0)
      await expect(page.locator('#code')).toHaveValue('UNCERTAIN-CODE')
      expect(historyReads).toBeGreaterThanOrEqual(3)
      expect(posts).toBe(1)
    })
  }

  for (const [status, reason, message, expected] of [
    [409, 'REDEEM_BATCH_ALREADY_CLAIMED', 'already claimed', '你已经领取过这一批福利'],
    [404, 'REDEEM_CODE_NOT_FOUND', '兑换码不存在', '兑换码不存在'],
    [400, 'REDEEM_CODE_USED', '兑换码已被使用', '兑换码已被使用'],
    [400, 'REDEEM_CODE_EXPIRED', '兑换码已过期', '兑换码已过期'],
    [400, 'REDEEM_CODE_DISABLED', '兑换码已禁用', '兑换码已禁用'],
    [429, 'REDEEM_RATE_LIMITED', '操作过于频繁，请稍后重试', '操作过于频繁，请稍后重试'],
  ] as const) {
    test(`shows ${reason} and preserves the entered code`, async ({ page }) => {
      let posts = 0
      await page.route('**/api/v1/redeem', (route) => {
        posts += 1
        return route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ code: status, reason, message }) })
      })
      await page.goto(`${origin}/redeem`)
      await page.locator('#code').fill('REJECTED-CODE')
      await page.getByRole('button', { name: '兑换', exact: true }).click()
      await expect(page.locator('main')).toContainText(expected)
      await expect(page.getByRole('heading', { name: '兑换成功！' })).toHaveCount(0)
      await expect(page.locator('#code')).toHaveValue('REJECTED-CODE')
      expect(posts).toBe(1)
    })
  }

  test('suppresses duplicate submits while redemption is pending', async ({ page }) => {
    let release!: () => void
    const pending = new Promise<void>((resolve) => { release = resolve })
    let posts = 0
    await page.route('**/api/v1/redeem', async (route) => {
      posts += 1
      await pending
      await reply(route, record('mystery_box', 1.25))
    })
    await page.goto(`${origin}/redeem`)
    await page.locator('#code').fill('VALID-CODE')
    await page.locator('#code').evaluate((input) => {
      const form = input.closest('form')!
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    })
    await expect.poll(() => posts).toBe(1)
    await expect(page.locator('#code')).toBeDisabled()
    release()
    await expect(page.getByRole('heading', { name: '兑换成功！' })).toBeVisible()
    expect(posts).toBe(1)
  })
})

test.describe('Recovered Administrator Redeem Code behavior', () => {
  test.beforeEach(async ({ page }) => {
    await seedConsole(page, 'v2', { user: adminUser, version: '0.1.183' })
  })

  for (const type of ['benefit', 'mystery_box'] as const) {
    test(`generates a ${type} batch with explicit request and one-time plaintext`, async ({ page }) => {
      const requests: unknown[] = []
      await page.route('**/api/v1/admin/redeem-codes/generate', (route) => {
        requests.push(route.request().postDataJSON())
        return reply(route, [{ ...record(type, 5), status: 'unused', code: 'ONE-TIME-CODE', code_redacted: false }])
      })
      await page.goto(`${origin}/admin/redeem`)
      await page.locator(type === 'benefit' ? '[data-test="generate-benefit"]' : '[data-test="generate-mystery-box"]').click()
      const amounts = page.locator('input[step="0.01"]')
      await amounts.first().fill(type === 'benefit' ? '5' : '1.25')
      if (type === 'mystery_box') await amounts.nth(1).fill('8.75')
      await page.getByRole('button', { name: '生成', exact: true }).click()
      await expect(page.locator('textarea[readonly]')).toHaveValue('ONE-TIME-CODE')
      expect(requests).toEqual([type === 'benefit'
        ? { count: 1, type, value: 5 }
        : { count: 1, type, value: 0, min_value: 1.25, max_value: 8.75 }])
      await page.mouse.click(2, 2)
      await expect(page.locator('textarea[readonly]')).toHaveCount(0)
      await expect(page.locator('main')).not.toContainText('ONE-TIME-CODE')
    })
  }

  test('rejects invalid whole cents even when native form validation is bypassed', async ({ page }) => {
    let posts = 0
    await page.route('**/api/v1/admin/redeem-codes/generate', (route) => {
      posts += 1
      return reply(route, [])
    })
    await page.goto(`${origin}/admin/redeem`)
    await page.locator('[data-test="generate-benefit"]').click()
    await page.locator('input[step="0.01"]').fill('0.001')
    await page.locator('input[step="0.01"]').evaluate((input) => input.closest('form')!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })))
    await expect(page.getByText('福利额度须为 0.01 至 999999999999.99 的金额，最多两位小数。', { exact: true })).toBeVisible()
    expect(posts).toBe(0)
  })

  test('retries the frozen generation payload after step-up verification', async ({ page }) => {
    const requests: unknown[] = []
    await page.route('**/api/v1/admin/redeem-codes/generate', (route) => {
      requests.push(route.request().postDataJSON())
      return requests.length === 1
        ? route.fulfill({ status: 403, contentType: 'application/json', body: JSON.stringify({ code: 403, reason: 'STEP_UP_REQUIRED', message: 'step-up required' }) })
        : reply(route, [{ ...record(), code: 'VERIFIED-CODE', code_redacted: false }])
    })
    await page.route('**/api/v1/user/totp/step-up', (route) => reply(route, { verified: true }))
    await page.goto(`${origin}/admin/redeem`)
    await page.locator('[data-test="generate-benefit"]').click()
    const amount = page.locator('input[step="0.01"]')
    await amount.fill('2.5')
    await page.getByRole('button', { name: '生成', exact: true }).click()
    const otp = page.locator('input[maxlength="1"][inputmode="numeric"]')
    await expect(otp).toHaveCount(6)
    // Changing the suspended form must not change the request being authorized.
    await amount.evaluate((input: HTMLInputElement) => {
      input.value = '9'
      input.dispatchEvent(new Event('input', { bubbles: true }))
    })
    for (let index = 0; index < 6; index += 1) await otp.nth(index).fill(String(index + 1))
    await expect(page.locator('textarea[readonly]')).toHaveValue('VERIFIED-CODE')
    expect(requests).toEqual(Array(2).fill({ count: 1, type: 'benefit', value: 2.5 }))
  })

  test('cancels step-up without a generation retry or a success dialog', async ({ page }) => {
    let posts = 0
    await page.route('**/api/v1/admin/redeem-codes/generate', (route) => {
      posts += 1
      return route.fulfill({ status: 403, contentType: 'application/json', body: JSON.stringify({ code: 403, reason: 'STEP_UP_REQUIRED', message: 'step-up required' }) })
    })
    await page.goto(`${origin}/admin/redeem`)
    await page.locator('[data-test="generate-benefit"]').click()
    await page.getByRole('button', { name: '生成', exact: true }).click()
    await expect(page.locator('input[maxlength="1"][inputmode="numeric"]')).toHaveCount(6)
    await page.locator('#app').getByRole('button', { name: '取消', exact: true }).click()
    await expect(page.locator('input[maxlength="1"][inputmode="numeric"]')).toHaveCount(0)
    await expect(page.getByRole('button', { name: '生成', exact: true })).toBeEnabled()
    await expect(page.locator('textarea[readonly]')).toHaveCount(0)
    expect(posts).toBe(1)
  })

  test('cleans more than one page of unused codes and reports the actual total', async ({ page }) => {
    let remaining = Array.from({ length: 1001 }, (_, index) => index + 1)
    const batchSizes: number[] = []
    await page.route(/\/api\/v1\/admin\/redeem-codes(?:\?|$)/, (route) => {
      const size = Number(new URL(route.request().url()).searchParams.get('page_size') || 20)
      return reply(route, {
        items: remaining.slice(0, size).map((id) => ({ ...record(), id, status: 'unused', used_by: null, used_at: null })),
        total: remaining.length, page: 1, page_size: size, pages: Math.ceil(remaining.length / size),
      })
    })
    await page.route('**/api/v1/admin/redeem-codes/batch-delete', (route) => {
      const { ids } = route.request().postDataJSON() as { ids: number[] }
      const requested = new Set(ids)
      const before = remaining.length
      remaining = remaining.filter((id) => !requested.has(id))
      batchSizes.push(ids.length)
      return reply(route, { deleted: before - remaining.length, message: 'deleted' })
    })
    await page.goto(`${origin}/admin/redeem`)
    await page.getByText('全部状态', { exact: true }).click()
    await page.getByRole('option', { name: '未使用', exact: true }).click()
    await page.getByRole('button', { name: '删除全部未使用', exact: true }).click()
    await page.getByRole('button', { name: '全部删除', exact: true }).click()
    await expect(page.getByText('成功删除 1001 个未使用的兑换码', { exact: true })).toBeVisible()
    expect(batchSizes).toEqual([1000, 1])
    expect(remaining).toEqual([])
  })
})
