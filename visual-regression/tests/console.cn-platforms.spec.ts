import { expect, test, type Page } from '@playwright/test'
import { adminUser, seedConsole } from './fixtures/api'

const consoleOrigin = 'http://127.0.0.1:4173'

function collectRuntimeErrors(page: Page) {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  return errors
}

async function openCreateGroup(page: Page) {
  await page.goto(`${consoleOrigin}/admin/groups`)
  await expect.poll(() => page.evaluate(() => ({
    mountedHook: typeof (window as typeof window & { __ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?: unknown })
      .__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__,
    reconciliation: typeof (window as typeof window & { __ZERO_ONE_NAVIGATION_RECONCILIATION__?: unknown })
      .__ZERO_ONE_NAVIGATION_RECONCILIATION__,
  }))).toEqual({ mountedHook: 'function', reconciliation: 'object' })
  const host = page.locator('#zero-one-cn-provider-admin')
  await expect(host).toHaveAttribute('data-zero-one-cn-provider-admin', 'groups')
  await host.locator('[data-tour="groups-create-btn"]').click()
  await expect(page.locator('form#create-group-form')).toBeVisible()
}

async function selectGroupPlatform(page: Page, label: string) {
  await page.locator('[data-tour="group-form-platform"]').click()
  await page.getByText(label, { exact: true }).last().click()
}

async function openCreateAccount(page: Page) {
  await page.goto(`${consoleOrigin}/admin/accounts`)
  await page.getByRole('button', { name: '添加账号', exact: true }).click()
  await expect(page.locator('form#create-account-form')).toBeVisible()
}

test.describe('Recovered CN Provider management contracts', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    await page.clock.setFixedTime(new Date('2026-08-29T12:00:00+08:00'))
    const user = testInfo.title.includes('simple mode')
      ? { ...adminUser, run_mode: 'simple' as const }
      : adminUser
    await seedConsole(page, 'v2', { user })
  })

  test('Groups exposes and submits every CN Provider platform', async ({ page }) => {
    const runtimeErrors = collectRuntimeErrors(page)
    const cases = [
      ['Kimi', 'kimi'],
      ['Zhipu GLM', 'zhipu'],
      ['DeepSeek', 'deepseek'],
    ] as const

    for (const [label, platform] of cases) {
      await openCreateGroup(page)
      await selectGroupPlatform(page, label)
      const form = page.locator('form#create-group-form')
      await form.locator('input[type="text"]').first().fill(`${label} 生产组`)
      const requestPromise = page.waitForRequest((request) =>
        request.method() === 'POST' && new URL(request.url()).pathname === '/api/v1/admin/groups',
      )
      await form.evaluate((element: HTMLFormElement) => element.requestSubmit())
      const request = await requestPromise
      expect(request.postDataJSON()).toMatchObject({ platform })
      await expect(form).toBeHidden()
    }

    expect(runtimeErrors).toEqual([])
  })

  test('Accounts shows only valid CN modes and protocols', async ({ page }) => {
    const runtimeErrors = collectRuntimeErrors(page)
    await openCreateAccount(page)

    for (const label of ['Kimi', 'Zhipu GLM', 'DeepSeek']) {
      await expect(page.getByRole('button', { name: label, exact: true })).toBeVisible()
    }

    await page.getByRole('button', { name: 'DeepSeek', exact: true }).click()
    await expect(page.getByText('按量付费', { exact: true })).toBeVisible()
    await expect(page.getByRole('button', { name: /^Coding Plan / })).toHaveCount(0)
    await expect(page.getByRole('button', { name: /^Responses / })).toBeVisible()

    await page.getByRole('button', { name: 'Kimi', exact: true }).click()
    await expect(page.getByRole('button', { name: /^Coding Plan / })).toBeVisible()
    await expect(page.getByRole('button', { name: /^Responses / })).toHaveCount(0)

    await page.getByRole('button', { name: 'Zhipu GLM', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Zhipu GLM', exact: true })).toHaveCSS(
      'color',
      'rgb(79, 70, 229)',
    )
    await expect(page.getByRole('button', { name: /^自适应/ })).toHaveCSS(
      'border-top-color',
      'rgb(99, 102, 241)',
    )

    await page.getByRole('button', { name: 'DeepSeek', exact: true }).click()
    await expect(page.getByRole('button', { name: 'DeepSeek', exact: true })).toHaveCSS(
      'color',
      'rgb(13, 148, 136)',
    )

    expect(runtimeErrors).toEqual([])
  })

  for (const testCase of [
    {
      label: 'Kimi',
      platform: 'kimi',
      expectedCredentials: {
        account_mode: 'payg',
        api_protocol: 'adaptive',
        base_url: 'https://api.moonshot.cn/v1',
        api_base_urls: {
          chat_completions: 'https://api.moonshot.cn/v1',
          anthropic: 'https://api.moonshot.cn/anthropic',
        },
      },
    },
    {
      label: 'Zhipu GLM',
      platform: 'zhipu',
      expectedCredentials: {
        account_mode: 'payg',
        api_protocol: 'adaptive',
        base_url: 'https://open.bigmodel.cn/api/paas/v4',
        api_base_urls: {
          chat_completions: 'https://open.bigmodel.cn/api/paas/v4',
          anthropic: 'https://open.bigmodel.cn/api/anthropic',
        },
      },
    },
    {
      label: 'DeepSeek',
      platform: 'deepseek',
      expectedCredentials: {
        account_mode: 'payg',
        api_protocol: 'responses',
        base_url: 'https://api.deepseek.com',
      },
    },
  ] as const) {
    test(`Accounts submits complete ${testCase.label} credentials`, async ({ page }) => {
      const runtimeErrors = collectRuntimeErrors(page)
      await openCreateAccount(page)
      await page.getByRole('button', { name: testCase.label, exact: true }).click()
      if (testCase.platform === 'deepseek') {
        await page.getByRole('button', { name: /Responses/ }).click()
      }
      await page.locator('form#create-account-form input[type="text"]').first().fill(`${testCase.label} 生产账号`)
      await page.locator('form#create-account-form input[type="password"]').fill(`sk-${testCase.platform}`)

      const requestPromise = page.waitForRequest((request) =>
        request.method() === 'POST' && new URL(request.url()).pathname === '/api/v1/admin/accounts',
      )
      await page.locator('form#create-account-form').evaluate((form: HTMLFormElement) => form.requestSubmit())
      const request = await requestPromise
      expect(request.postDataJSON()).toMatchObject({
        platform: testCase.platform,
        type: 'apikey',
        credentials: testCase.expectedCredentials,
      })
      await expect(page.getByText('账号创建成功', { exact: true })).toBeVisible()
      expect(runtimeErrors).toEqual([])
    })
  }

  test('Groups keeps the approved shell while exposing CN platforms', async ({ page }) => {
    await openCreateGroup(page)
    await page.locator('[data-tour="group-form-platform"]').click()
    await page.evaluate(() => document.fonts.ready)
    await expect(page).toHaveScreenshot('console-groups-cn-platform-options.png')
  })

  test('Accounts keeps the approved shell while exposing CN platforms', async ({ page }) => {
    await openCreateAccount(page)
    await page.evaluate(() => document.fonts.ready)
    await expect(page).toHaveScreenshot('console-accounts-cn-platform-options.png')
  })

  test('route adapter follows same-document navigation and restores approved routes', async ({ page }) => {
    const runtimeErrors = collectRuntimeErrors(page)
    const getCounts = new Map<string, number>()
    page.on('request', (request) => {
      if (request.method() !== 'GET') return
      const pathname = new URL(request.url()).pathname
      if (!pathname.startsWith('/api/v1/')) return
      const path = pathname.replace(/^\/api\/v1/, '')
      if (path === '/admin/accounts' || path.startsWith('/admin/groups')) {
        getCounts.set(path, (getCounts.get(path) || 0) + 1)
      }
    })
    await page.goto(`${consoleOrigin}/admin/accounts`)
    const host = page.locator('#zero-one-cn-provider-admin')
    await expect(host).toHaveAttribute('data-zero-one-cn-provider-admin', 'accounts')
    await expect(host).not.toBeEmpty()
    await expect(page.locator('#zero-one-cn-provider-admin-style')).toHaveCount(1)
    expect(getCounts.get('/admin/accounts')).toBe(1)

    const groupsLink = page.locator(
      'aside:not([data-zero-one-sidebar-continuity]) a.sidebar-link[href="/admin/groups"]',
    ).first()
    const accountsLink = page.locator(
      'aside:not([data-zero-one-sidebar-continuity]) a.sidebar-link[href="/admin/accounts"]',
    ).first()
    await groupsLink.evaluate((link: HTMLAnchorElement) => link.click())
    await expect(page).toHaveURL(`${consoleOrigin}/admin/groups`)
    await expect(host).toHaveAttribute('data-zero-one-cn-provider-admin', 'groups')
    await expect(host).not.toBeEmpty()
    expect(getCounts.get('/admin/groups')).toBe(1)
    expect(getCounts.get('/admin/groups/live-capability')).toBe(1)
    expect(getCounts.get('/admin/groups/usage-summary')).toBe(1)
    expect(getCounts.get('/admin/groups/capacity-summary')).toBe(1)

    await accountsLink.evaluate((link: HTMLAnchorElement) => link.click())
    await expect(page).toHaveURL(`${consoleOrigin}/admin/accounts`)
    await expect(host).toHaveAttribute('data-zero-one-cn-provider-admin', 'accounts')
    await expect(host).not.toBeEmpty()

    await page.goBack()
    await expect(page).toHaveURL(`${consoleOrigin}/admin/groups`)
    await expect(host).toHaveAttribute('data-zero-one-cn-provider-admin', 'groups')
    await expect(host).not.toBeEmpty()
    await page.goBack()
    await expect(page).toHaveURL(`${consoleOrigin}/admin/accounts`)
    await expect(host).toHaveAttribute('data-zero-one-cn-provider-admin', 'accounts')
    await expect(host).not.toBeEmpty()
    expect(getCounts.get('/admin/accounts')).toBe(3)
    expect(getCounts.get('/admin/groups')).toBe(2)
    expect(getCounts.get('/admin/groups/live-capability')).toBe(2)
    expect(getCounts.get('/admin/groups/usage-summary')).toBe(2)
    expect(getCounts.get('/admin/groups/capacity-summary')).toBe(2)

    await page.evaluate(() => {
      const state = window as typeof window & { __zeroOneVisibleRouteFrames?: number[] }
      state.__zeroOneVisibleRouteFrames = []
      document.addEventListener('click', () => {
        let remaining = 8
        const sample = () => {
          const main = document.querySelector('main')
          const visibleChildren = main
            ? Array.from(main.children).filter((child) => {
                if (!(child instanceof HTMLElement)) return false
                const style = getComputedStyle(child)
                const rect = child.getBoundingClientRect()
                return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0
              }).length
            : 0
          state.__zeroOneVisibleRouteFrames?.push(visibleChildren)
          remaining -= 1
          if (remaining > 0) requestAnimationFrame(sample)
        }
        requestAnimationFrame(sample)
      }, { capture: true, once: true })
    })

    await page.locator(
      'aside:not([data-zero-one-sidebar-continuity]) a.sidebar-link[href="/admin/dashboard"]',
    ).first().evaluate((link: HTMLAnchorElement) => link.click())
    await expect(page).toHaveURL(`${consoleOrigin}/admin/dashboard`)
    await expect(host).toHaveCount(0)
    await expect(page.locator('#zero-one-cn-provider-admin-style')).toHaveCount(0)
    await expect(page.locator('[data-zero-one-cn-provider-hidden]')).toHaveCount(0)
    await expect(page.locator('body.zero-one-cn-provider-admin-active')).toHaveCount(0)
    await expect.poll(() => page.evaluate(() => (
      window as typeof window & { __zeroOneVisibleRouteFrames?: number[] }
    ).__zeroOneVisibleRouteFrames?.length || 0)).toBe(8)
    const visibleRouteFrames = await page.evaluate(() => (
      window as typeof window & { __zeroOneVisibleRouteFrames?: number[] }
    ).__zeroOneVisibleRouteFrames || [])
    expect(Math.max(...visibleRouteFrames)).toBeLessThanOrEqual(1)
    expect(runtimeErrors).toEqual([])
  })

  test('route adapter follows the approved shell language', async ({ page }) => {
    await page.goto(`${consoleOrigin}/admin/accounts`)
    await expect(page.getByRole('button', { name: '添加账号', exact: true })).toBeVisible()

    await page.locator('button[title="中文"]').click()
    await page.getByRole('button', { name: /English/ }).click()
    await expect(page.getByRole('button', { name: 'Create Account', exact: true })).toBeVisible()
  })

  test('route adapter follows the approved shell simple mode', async ({ page }) => {
    await page.goto(`${consoleOrigin}/admin/accounts`)
    await expect(page.locator('#zero-one-cn-provider-admin')).not.toBeEmpty()
    await expect(page.getByRole('columnheader', { name: '分组', exact: true })).toHaveCount(0)
  })

  test('non-target routes load only the small router seam', async ({ page }) => {
    const adapterAssets: string[] = []
    page.on('request', (request) => {
      const path = new URL(request.url()).pathname
      if (path.startsWith('/assets/cn-provider-admin-v1/')) adapterAssets.push(path)
    })

    await page.goto(`${consoleOrigin}/admin/dashboard`)
    await expect(page.locator('.app-shell')).toBeVisible()
    await expect.poll(() => adapterAssets).toEqual([
      '/assets/cn-provider-admin-v1/cn-provider-admin.js',
    ])
    await expect(page.locator('#zero-one-cn-provider-admin')).toHaveCount(0)
    await expect(page.locator('#zero-one-cn-provider-admin-style')).toHaveCount(0)
  })

  test('leaf load failure keeps the approved shell and a retry action', async ({ page }) => {
    const pageErrors: string[] = []
    let leafRequests = 0
    page.on('pageerror', (error) => pageErrors.push(error.message))
    await page.route('**/assets/cn-provider-admin-v1/cnProviderAdminLeaf-*.js', (route) => {
      leafRequests += 1
      if (leafRequests === 1) {
        return route.fulfill({ status: 503, contentType: 'text/javascript', body: '' })
      }
      return route.continue()
    })

    await page.goto(`${consoleOrigin}/admin/accounts`)
    await expect(page.locator('.app-shell')).toBeVisible()
    await expect(page.getByRole('alert')).toContainText('管理页面加载失败')
    const retry = page.getByRole('button', { name: '重试', exact: true })
    await expect(retry).toBeVisible()
    await expect(page.locator('#zero-one-cn-provider-admin')).toHaveAttribute(
      'data-zero-one-cn-provider-admin',
      'accounts',
    )
    await retry.click()
    await expect(page.locator('#zero-one-cn-provider-admin')).toHaveAttribute(
      'data-zero-one-cn-provider-admin',
      'accounts',
    )
    await expect(page.getByRole('button', { name: '添加账号', exact: true })).toBeVisible()
    expect(leafRequests).toBe(2)
    expect(pageErrors).toEqual([])
  })
})
