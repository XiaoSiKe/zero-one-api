import { expect, test, type Locator, type Page } from '@playwright/test'
import { adminUser, communityQrPngBase64, regularUser, seedConsole } from './fixtures/api'

const affiliateConsoleOrigin =
  process.env.AFFILIATE_CONSOLE_ORIGIN || 'http://127.0.0.1:4173'

const eligibleConsoleCard = [
  '.card',
  ':not(.console-card-motion-static)',
  ':not(.console-card-motion-glow-only)',
  ':not(.console-skin-table)',
  ':not(.frosted-table-shell)',
  ':not(.sticky)',
  ':not(:has(.card, iframe, table, .fixed, .sticky))',
].join('')

async function sidebarOrder(section: Locator) {
  return section.locator(':scope > .sidebar-link:visible').evaluateAll((items) => {
    const groupPaths: Record<string, string> = {
      渠道管理: '/admin/channels',
      安全审计: '/admin/security-audit',
      订单管理: '/admin/orders',
    }
    return items.map((item) => {
      const path = item.getAttribute('data-navigation-path') || item.getAttribute('href') ||
        groupPaths[item.getAttribute('aria-label') || '']
      const pathname = path ? new URL(path, window.location.origin).pathname : ''
      return pathname === '/admin/affiliates/invites' ? '/admin/affiliates' : pathname
    })
  })
}

async function expectConsoleCardMotion(
  page: Page,
  projectName: string,
) {
  const surface = page.locator('[data-zero-one-card-motion="true"]')
  const card = surface.locator(`${eligibleConsoleCard}:visible`).first()
  await expect(surface).toHaveClass(/console-card-motion-surface/)
  await expect(card).toBeVisible()

  if (projectName !== 'chromium-desktop') {
    await expect(card).toHaveCSS('transform', 'none')
    return
  }

  expect(
    await card.evaluate((element) => getComputedStyle(element).transitionProperty),
  ).toContain('transform')

  // A same-coordinate hover after client-side navigation does not emit a new
  // pointermove in Chromium. Move away first so the test exercises the event
  // path that writes the per-card angle, as a real user pointer would.
  await page.mouse.move(0, 0)
  await card.hover({ position: { x: 20, y: 20 } })
  await expect(card).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, -2)')
  await expect
    .poll(() => card.evaluate((element) => getComputedStyle(element, '::after').opacity))
    .toBe('1')
  expect(
    await card.evaluate((element) =>
      element.style.getPropertyValue('--console-card-angle') ||
      element.style.getPropertyValue('--dashboard-panel-angle'),
    ),
  ).not.toBe('')
}

test.describe('Console public auth contracts', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
    await seedConsole(page, 'v2', { authenticated: false })
  })

  test('login footer provides a matching password recovery button', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/login')

    const registration = page.getByRole('link', { name: /还没有账户？\s*注册/ })
    const recovery = page.locator('[data-zero-one-login-recovery="true"]')
    await expect(registration).toBeVisible()
    await expect(recovery).toHaveText('找回密码')
    await expect(recovery).toHaveAttribute('href', '/forgot-password')
    await expect(page.locator('a[href="/forgot-password"]')).toHaveCount(1)

    expect(await recovery.getAttribute('class')).toBe(await registration.getAttribute('class'))
    expect(
      await registration.evaluate(
        (element) => element.nextElementSibling?.matches('[data-zero-one-login-recovery="true"]'),
      ),
    ).toBe(true)

    const registrationBox = await registration.boundingBox()
    const recoveryBox = await recovery.boundingBox()
    expect(registrationBox).not.toBeNull()
    expect(recoveryBox).not.toBeNull()
    expect(recoveryBox!.width).toBe(registrationBox!.width)
    expect(recoveryBox!.height).toBe(registrationBox!.height)
    expect(recoveryBox!.y).toBeGreaterThan(registrationBox!.y + registrationBox!.height)

    await recovery.click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/forgot-password')
    await expect(page.getByRole('heading', { name: '重置密码' })).toBeVisible()
  })

  test('login mounts before stalled settings and optional Console adapters settle', async ({ page }) => {
    let settingsReleased = false
    let adapterReleased = false
    let loginChunkRequestedBeforeSettingsRelease = false
    let adapterRequested = false
    let releaseSettings!: () => void
    let releaseAdapter!: () => void
    const pageErrors: string[] = []
    const stalledSettings = new Promise<void>((resolve) => {
      releaseSettings = () => {
        settingsReleased = true
        resolve()
      }
    })
    const stalledAdapter = new Promise<void>((resolve) => {
      releaseAdapter = () => {
        adapterReleased = true
        resolve()
      }
    })

    page.on('pageerror', (error) => pageErrors.push(error.message))
    page.on('request', (request) => {
      const pathname = new URL(request.url()).pathname
      if (pathname === '/assets/cn-provider-shell-v6/LoginView-BbpS8aW1.js') {
        loginChunkRequestedBeforeSettingsRelease ||= !settingsReleased
      }
      if (pathname === '/assets/cn-provider-admin-v1/cn-provider-admin.js') {
        adapterRequested = true
      }
    })

    await page.route('**/api/v1/settings/public*', async (route) => {
      const url = new URL(route.request().url())
      if (url.searchParams.get('scope') === 'logo') {
        await route.fallback()
        return
      }
      await stalledSettings
      await route.fallback().catch(() => {})
    })
    await page.route('**/assets/cn-provider-admin-v1/cn-provider-admin.js', async (route) => {
      await stalledAdapter
      await route.fallback().catch(() => {})
    })

    await page.goto('http://127.0.0.1:4173/login', { waitUntil: 'commit' })

    try {
      await expect(page.locator('form')).toBeVisible({ timeout: 4_000 })
      await expect(page.locator('input[type="email"]')).toBeVisible()
      await expect(page.locator('input[type="password"]')).toBeVisible()
      await expect(page.locator('[data-zero-one-login-recovery="true"]')).toHaveCount(0)
      expect(settingsReleased).toBe(false)
      expect(adapterReleased).toBe(false)
      expect(loginChunkRequestedBeforeSettingsRelease).toBe(true)
      await expect.poll(() => adapterRequested).toBe(true)
      expect(pageErrors).toEqual([])
    } finally {
      releaseSettings()
      releaseAdapter()
    }

    await expect(page.getByRole('button', { name: '登录', exact: true })).toBeEnabled()
    await expect(page.locator('[data-zero-one-login-recovery="true"]')).toBeVisible()
    expect(pageErrors).toEqual([])
  })

  test('registration survives stalled settings and optional Console adapters', async ({ page }) => {
    let enhancementRequested = false
    let registrationVisibleWhenEnhancementStarted = false
    let registrationChunkRequestedBeforeSettingsRelease = false
    const pageErrors: string[] = []
    let settingsReleased = false
    let onlineAdapterReleased = false
    let releaseSettings!: () => void
    let releaseOnlineAdapter!: () => void
    const stalledSettings = new Promise<void>((resolve) => {
      releaseSettings = () => {
        settingsReleased = true
        resolve()
      }
    })
    const stalledOnlineAdapter = new Promise<void>((resolve) => {
      releaseOnlineAdapter = () => {
        onlineAdapterReleased = true
        resolve()
      }
    })

    page.on('pageerror', (error) => pageErrors.push(error.message))

    await page.route('**/assets/online-image-v14/online-image.js', async (route) => {
      await stalledOnlineAdapter
      await route.fallback().catch(() => {})
    })
    await page.route('**/assets/cn-provider-admin-v4/cn-provider-admin.js', (route) =>
      route.fulfill({ status: 503, contentType: 'text/plain', body: 'simulated outage' }),
    )

    await page.route('**/api/v1/settings/public*', async (route) => {
      const url = new URL(route.request().url())
      if (url.searchParams.get('scope') === 'logo') {
        await route.fallback()
        return
      }
      await stalledSettings
      await route.fallback().catch(() => {})
    })

    page.on('request', (request) => {
      const pathname = new URL(request.url()).pathname
      if (pathname === '/assets/cn-provider-shell-v6/RegisterView-CP_DoJ_R.js') {
        registrationChunkRequestedBeforeSettingsRelease ||= !settingsReleased
      }
    })

    await page.route('**/assets/zero-one-custom-page-security-v1.js', async (route) => {
      enhancementRequested = true
      registrationVisibleWhenEnhancementStarted = await page.locator('form').isVisible()
      await route.continue()
    })

    await page.goto('http://127.0.0.1:4173/register', { waitUntil: 'commit' })

    try {
      await expect(page.getByRole('heading', { name: '创建账户' })).toBeVisible({ timeout: 4_000 })
      await expect(page.locator('form')).toBeVisible()
      await expect(page.locator('#email')).toBeDisabled()
      await expect(page.locator('#password')).toBeDisabled()
      await expect(page.getByRole('button', { name: '创建账户', exact: true })).toBeDisabled()
      expect(settingsReleased).toBe(false)
      expect(onlineAdapterReleased).toBe(false)
      expect(registrationChunkRequestedBeforeSettingsRelease).toBe(true)
      await expect.poll(() => enhancementRequested).toBe(true)
      expect(registrationVisibleWhenEnhancementStarted).toBe(true)
      expect(pageErrors).toEqual([])
      await page.evaluate((user) => {
        const app = document.querySelector('#app') as HTMLElement & {
          __vue_app__?: { config?: { globalProperties?: { $pinia?: { _s?: Map<string, unknown> } } } }
        }
        const authStore = app.__vue_app__?.config?.globalProperties?.$pinia?._s?.get('auth') as {
          $patch?: (state: Record<string, unknown>) => void
        } | undefined
        if (!authStore?.$patch) throw new Error('visual auth store is unavailable')
        authStore.$patch({ token: 'visual-fixture-token', user })
        localStorage.setItem('auth_token', 'visual-fixture-token')
        localStorage.setItem('auth_user', JSON.stringify(user))
      }, regularUser)
    } finally {
      releaseSettings()
      releaseOnlineAdapter()
    }

    await expect.poll(() => page.evaluate(() => Boolean(
      (window as typeof window & { __ZERO_ONE_ONLINE_IMAGE_ACCESS__?: unknown }).__ZERO_ONE_ONLINE_IMAGE_ACCESS__,
    ))).toBe(true)
    await expect(page.locator('#username')).toBeEnabled()
    await expect(page.locator('#email')).toBeEnabled()
    await expect(page.locator('#password')).toBeEnabled()
    await expect(page.locator('#promo_code')).toHaveCount(0)
    await expect(page.getByRole('button', { name: '创建账户', exact: true })).toBeEnabled()
    await expect(page.getByRole('link', { name: /已有账户？\s*登录/ })).toHaveAttribute(
      'href',
      '/login',
    )
  })

  test('registration keeps the approved form', async ({ page }) => {
    await page.unroute('**/setup/status')
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v2', {
      authenticated: false,
      siteLogo: `data:image/png;base64,${communityQrPngBase64}`,
    })
    await page.goto('http://127.0.0.1:4173/register')

    await expect(page.getByRole('heading', { name: '创建账户' })).toBeVisible()
    await expect(page.locator('#username')).toBeEnabled()
    await expect(page.locator('#email')).toBeEnabled()
    await expect(page.locator('#password')).toBeEnabled()
    await expect(page.getByRole('button', { name: '创建账户', exact: true })).toBeEnabled()
    await expect(page).toHaveScreenshot('console-register.png')
  })

  test('password recovery actions match the login button', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/login')
    const login = page.getByRole('button', { name: '登录', exact: true })
    const loginClass = await login.getAttribute('class')

    await page.goto('http://127.0.0.1:4173/forgot-password')
    const sendResetLink = page.getByRole('button', { name: '发送重置链接', exact: true })
    const backToLogin = page.getByRole('link', { name: /想起密码了？\s*登录/ })

    await expect(sendResetLink).toHaveClass(loginClass ?? '')
    await expect(backToLogin).toHaveClass(loginClass ?? '')
    await expect(sendResetLink).toHaveAttribute('type', 'submit')
    await expect(backToLogin).toHaveAttribute('href', '/login')

    await backToLogin.click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/login')
  })

  test('administrator login selects the administrator dashboard', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/login')
    await page.locator('#email').fill('admin@01yapi.test')
    await page.locator('#password').fill('preview-password')
    await page.getByRole('button', { name: '登录', exact: true }).click()

    await expect(page).toHaveURL('http://127.0.0.1:4173/admin/dashboard')
    const dashboardLink = page.locator(
      'aside:not([data-zero-one-sidebar-continuity]) a.sidebar-link[href="/admin/dashboard"]',
    )
    await expect(dashboardLink).toHaveCount(1)
    await expect(dashboardLink).toHaveClass(/sidebar-link-active/)
  })

  test('administrator login redirect tolerates deferred navigation adapters', async ({ page }) => {
    let adapterRequested = false
    let releaseAdapter!: () => void
    const stalledAdapter = new Promise<void>((resolve) => {
      releaseAdapter = resolve
    })
    let headerAdapterVersion = ''
    const consoleErrors: string[] = []
    const pageErrors: string[] = []

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('pageerror', (error) => pageErrors.push(error.message))
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.pathname === '/assets/zero-one-header-custom-menu-v1.js') {
        headerAdapterVersion = url.searchParams.get('v') || ''
      }
    })
    await page.route('**/assets/zero-one-community-qr-v1.js*', async (route) => {
      adapterRequested = true
      await stalledAdapter
      await route.fallback().catch(() => {})
    })

    await page.goto('http://127.0.0.1:4173/login')
    await page.locator('#email').fill('admin@01yapi.test')
    await page.locator('#password').fill('preview-password')

    try {
      await page.getByRole('button', { name: '登录', exact: true }).click()
      await expect(page).toHaveURL('http://127.0.0.1:4173/admin/dashboard')
      await expect(page.locator('main').getByText('API 密钥', { exact: true }).first()).toBeVisible()
      await expect.poll(() => adapterRequested).toBe(true)
      await expect.poll(() => headerAdapterVersion).toBe('25')
      await page.waitForTimeout(250)
      expect(consoleErrors).toEqual([])
      expect(pageErrors).toEqual([])
    } finally {
      releaseAdapter()
    }

    await expect.poll(() => page.evaluate(() => {
      const reconciliation = (window as Window & {
        __ZERO_ONE_NAVIGATION_RECONCILIATION__?: {
          defaultSidebarOrders?: { admin?: string[] }
        }
      }).__ZERO_ONE_NAVIGATION_RECONCILIATION__
      return Array.isArray(reconciliation?.defaultSidebarOrders?.admin)
    })).toBe(true)
    expect(consoleErrors).toEqual([])
    expect(pageErrors).toEqual([])
  })

  test('regular user login selects the user dashboard with matching card motion', async ({ page }, testInfo) => {
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v2', { authenticated: false, user: regularUser })
    await page.goto('http://127.0.0.1:4173/login')
    await page.locator('#email').fill(regularUser.email)
    await page.locator('#password').fill('preview-password')
    await page.getByRole('button', { name: '登录', exact: true }).click()

    await expect(page).toHaveURL('http://127.0.0.1:4173/dashboard')
    await expect(page.locator('aside a.sidebar-link[href="/dashboard"]')).toHaveClass(
      /sidebar-link-active/,
    )

    await expectConsoleCardMotion(page, testInfo.project.name)
  })

  test('same-document relogin applies the response run mode before rendering the dashboard sidebar', async ({ page }) => {
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v2', {
      user: { ...regularUser, run_mode: 'simple' },
      loginUser: { ...regularUser, run_mode: 'standard' },
    })
    await page.goto('http://127.0.0.1:4173/dashboard')
    await expect(page.locator('aside a.sidebar-link[href="/usage"]')).toHaveCount(0)
    await expect(page.locator('aside a[href="/images"]')).toHaveCount(0)

    await page.getByRole('button', { name: '用户菜单' }).click()
    await page.getByRole('button', { name: '退出登录' }).click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/login')
    await expect(page.locator('aside a[href="/images"]')).toHaveCount(0)

    await page.locator('#email').fill(regularUser.email)
    await page.locator('#password').fill('preview-password')
    const loginResponsePromise = page.waitForResponse((response) =>
      response.request().method() === 'POST' &&
      new URL(response.url()).pathname === '/api/v1/auth/login',
    )
    await page.getByRole('button', { name: '登录', exact: true }).click()
    const loginPayload = await (await loginResponsePromise).json()

    expect(loginPayload.data.user.run_mode).toBe('standard')
    await expect(page).toHaveURL('http://127.0.0.1:4173/dashboard')
    const authMode = await page.evaluate(() => {
      const app = (document.querySelector('#app') as HTMLElement & {
        __vue_app__?: {
          config?: { globalProperties?: { $pinia?: { _s?: Map<string, Record<string, unknown>> } } }
        }
      }).__vue_app__
      const auth = app?.config?.globalProperties?.$pinia?._s?.get('auth')
      return { runMode: auth?.runMode, isSimpleMode: auth?.isSimpleMode }
    })
    await expect(page.locator('aside a[href="/images"]')).toHaveCount(1)
    expect(authMode).toEqual({ runMode: 'standard', isSimpleMode: false })
    await expect(page.locator('aside a.sidebar-link[href="/usage"]')).toBeVisible()
    await expect(page.locator('aside a.sidebar-link[href="/redeem"]')).toBeVisible()
  })

  test('local preview allows external iframe content but still blocks top-level links', async ({ page }) => {
    await page.route('https://embed.01yapi.test/**', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'text/html; charset=utf-8',
        body: '<!doctype html><html><body><main>嵌入页面已加载</main></body></html>',
      }),
    )
    await page.goto('http://127.0.0.1:4173/login')
    await page.evaluate(() => {
      const iframe = document.createElement('iframe')
      iframe.id = 'external-preview-frame'
      iframe.src = 'https://embed.01yapi.test/content'
      document.body.append(iframe)
    })

    await expect(
      page.frameLocator('#external-preview-frame').getByText('嵌入页面已加载'),
    ).toBeVisible()
    await expect(page.locator('[data-zero-one-local-preview-notice]')).toHaveCount(0)

    await page.evaluate(() => {
      const link = document.createElement('a')
      link.id = 'external-preview-link'
      link.href = 'https://embed.01yapi.test/top-level'
      link.textContent = '打开外部页面'
      document.body.append(link)
    })
    await page.locator('#external-preview-link').click()

    await expect(page).toHaveURL('http://127.0.0.1:4173/login')
    await expect(page.locator('[data-zero-one-local-preview-notice]')).toContainText(
      '本地预览已阻止外部跳转',
    )
  })
})

test.describe('Console card motion parity', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
  })

  test('User Usage and Affiliate leaf cards share the approved dashboard motion', async ({ page }, testInfo) => {
    await seedConsole(page, 'v2', { user: regularUser })

    for (const path of ['/usage', '/affiliate']) {
      await page.goto(`http://127.0.0.1:4173${path}`)
      await expect(page).toHaveURL(`http://127.0.0.1:4173${path}`)
      await expectConsoleCardMotion(page, testInfo.project.name)
    }
  })

  test('Administrator Usage and Settings leaf cards share the approved dashboard motion', async ({ page }, testInfo) => {
    await seedConsole(page, 'v2')

    for (const path of ['/admin/usage', '/admin/settings']) {
      await page.goto(`http://127.0.0.1:4173${path}`)
      await expect(page).toHaveURL(`http://127.0.0.1:4173${path}`)
      await expectConsoleCardMotion(page, testInfo.project.name)
    }
  })

  test('full-height Administrator affiliate tables remain coordinate-stable', async ({ page }) => {
    await seedConsole(page, 'v2')
    await page.goto('http://127.0.0.1:4173/admin/affiliates/invites')

    const tableCard = page.locator('[data-zero-one-card-motion="true"] .console-skin-table').first()
    await expect(tableCard).toBeVisible()
    await expect(tableCard).toHaveCSS('transform', 'none')

    const supportsFinePointerHover = await page.evaluate(() =>
      window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches,
    )
    if (!supportsFinePointerHover) {
      await expect
        .poll(() => tableCard.evaluate((element) => getComputedStyle(element, '::after').opacity))
        .toBe('0')
      return
    }

    await tableCard.hover()
    await expect
      .poll(() => tableCard.evaluate((element) => getComputedStyle(element, '::after').opacity))
      .toBe('1')
    expect(
      await tableCard.evaluate((element) =>
        element.style.getPropertyValue('--console-card-angle'),
      ),
    ).not.toBe('')
  })

  test('keeps Administrator route content stationary during sidebar navigation', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2')
    await page.goto(`${affiliateConsoleOrigin}/admin/dashboard`)
    await expect(page.locator('aside a[href="/admin/users"]')).toBeVisible()

    let documentNavigations = 0
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentNavigations += 1
      }
    })

    for (const path of [
      '/admin/redeem',
      '/admin/users',
      '/admin/announcements',
      '/admin/usage',
      '/admin/settings',
      '/admin/dashboard',
    ]) {
      const frames = await page.evaluate(async (targetPath) => {
        const link = document.querySelector(`aside a[href="${targetPath}"]`)
        if (!(link instanceof HTMLAnchorElement)) throw new Error(`missing sidebar link ${targetPath}`)

        link.click()
        return await new Promise<Array<Array<{
            animationName: string
            opacity: string
            transform: string
          }>>>((resolve) => {
          const samples: Array<Array<{
            animationName: string
            opacity: string
            transform: string
          }>> = []
          let startedAt = 0
          const sample = (now: number) => {
            const surfaces = document.querySelectorAll(
              '.app-shell main, .layout-section-fixed, .layout-section-scrollable',
            )
            samples.push([...surfaces].map((surface) => {
              const style = getComputedStyle(surface)
              return {
                animationName: style.animationName,
                opacity: style.opacity,
                transform: style.transform,
              }
            }))
            if (now - startedAt < 260) requestAnimationFrame(sample)
            else resolve(samples)
          }
          const waitForRoute = () => {
            if (window.location.pathname !== targetPath) {
              requestAnimationFrame(waitForRoute)
              return
            }
            startedAt = performance.now()
            requestAnimationFrame(sample)
          }
          requestAnimationFrame(waitForRoute)
        })
      }, path)

      await expect(page).toHaveURL(`${affiliateConsoleOrigin}${path}`)
      expect(frames.length).toBeGreaterThan(0)
      const unstableFrames = frames.flatMap((frame, frameIndex) =>
        frame
          .filter((surface) =>
            surface.animationName !== 'none' ||
            surface.opacity !== '1' ||
            surface.transform !== 'none',
          )
          .map((surface) => ({ frameIndex, ...surface })),
      )
      expect(
        frames.every((frame) => frame.length > 0),
        `route ${path} temporarily removed every measured content surface`,
      ).toBe(true)
      expect(
        unstableFrames,
        `route ${path} animated or hid content during sidebar navigation`,
      ).toEqual([])
    }

    expect(documentNavigations).toBe(0)
  })

  test('serves valid key and group read models to Console pages without render errors', async ({ page }) => {
    await seedConsole(page, 'v2')
    const renderErrors: string[] = []
    page.on('pageerror', (error) => renderErrors.push(error.message))
    page.on('console', (message) => {
      if (message.type() === 'error') renderErrors.push(message.text())
    })

    for (const path of ['/keys', '/usage']) {
      const keysResponse = page.waitForResponse((response) =>
        response.request().method() === 'GET' &&
        new URL(response.url()).pathname === '/api/v1/keys',
      )
      const groupsResponse = page.waitForResponse((response) =>
        response.request().method() === 'GET' &&
        new URL(response.url()).pathname === '/api/v1/groups/available',
      )
      await page.goto(`${affiliateConsoleOrigin}${path}`)
      const [keys, groups] = await Promise.all([keysResponse, groupsResponse])
      expect(keys.status()).toBe(200)
      expect(groups.status()).toBe(200)
      const keyQuery = new URL(keys.url()).searchParams
      expect(await keys.json()).toMatchObject({
        code: 0,
        data: {
          items: [], total: 0, pages: 1,
          page: Number(keyQuery.get('page') || 1),
          page_size: Number(keyQuery.get('page_size') || 20),
        },
      })
      expect(await groups.json()).toMatchObject({ code: 0, data: [] })
      await expect(page.locator('.app-shell main')).toBeVisible()
    }

    expect(renderErrors).toEqual([])
  })

  test('keeps Administrator My Account navigation rows visually settled while switching keys and usage', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await page.addInitScript(() => {
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('zero-one-my-account-beforeunload', 'true')
      })
    })
    await seedConsole(page, 'v2')
    let documentNavigations = 0
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentNavigations += 1
      }
    })
    await page.goto(`${affiliateConsoleOrigin}/keys`)
    await expect(page.locator('aside a.sidebar-link[href="/keys"]')).toBeVisible()
    await expect(page.locator('aside a.sidebar-link[href="/usage"]')).toBeVisible()
    documentNavigations = 0

    for (const path of ['/usage', '/keys']) {
      const frames = await page.evaluate(async (targetPath) => {
        const link = document.querySelector(`aside a.sidebar-link[href="${targetPath}"]`)
        if (!(link instanceof HTMLAnchorElement)) throw new Error(`missing My Account link ${targetPath}`)
        link.click()

        return await new Promise<Array<{
          activeClass: boolean
          activeScale: number
          keysVisible: boolean
          titleVisible: boolean
          usageVisible: boolean
        }>>((resolve) => {
          const samples: Array<{
            activeClass: boolean
            activeScale: number
            keysVisible: boolean
            titleVisible: boolean
            usageVisible: boolean
          }> = []
          let startedAt = 0
          const isVisible = (element: Element | null) =>
            element instanceof HTMLElement &&
            getComputedStyle(element).display !== 'none' &&
            element.getBoundingClientRect().height > 0
          const sample = (now: number) => {
            const active = document.querySelector(`aside a.sidebar-link[href="${targetPath}"]`)
            const transform = active ? getComputedStyle(active, '::before').transform : 'none'
            samples.push({
              activeClass: active?.classList.contains('sidebar-link-active') || false,
              activeScale: new DOMMatrix(transform).a,
              keysVisible: isVisible(document.querySelector('aside a.sidebar-link[href="/keys"]')),
              titleVisible: isVisible(document.querySelector('.sidebar-section-title')),
              usageVisible: isVisible(document.querySelector('aside a.sidebar-link[href="/usage"]')),
            })
            if (now - startedAt < 160) requestAnimationFrame(sample)
            else resolve(samples)
          }
          const waitForRoute = () => {
            if (window.location.pathname !== targetPath) {
              requestAnimationFrame(waitForRoute)
              return
            }
            startedAt = performance.now()
            requestAnimationFrame(sample)
          }
          requestAnimationFrame(waitForRoute)
        })
      }, path)

      await expect(page).toHaveURL(`${affiliateConsoleOrigin}${path}`)
      expect(frames.length).toBeGreaterThan(0)
      expect(frames.filter((frame) => !frame.keysVisible || !frame.titleVisible || !frame.usageVisible)).toEqual([])
      expect(frames.filter((frame) => !frame.activeClass || frame.activeScale !== 1)).toEqual([])
    }

    expect(documentNavigations).toBe(0)
    expect(await page.evaluate(
      () => sessionStorage.getItem('zero-one-my-account-beforeunload'),
    )).toBeNull()
  })

  test('resets a scrolled Administrator page without smooth-scroll jitter', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2')
    await page.goto(`${affiliateConsoleOrigin}/admin/settings`)
    await expect(page.locator('aside a.sidebar-link[href="/admin/dashboard"]')).toBeVisible()
    await expect.poll(() => page.evaluate(
      () => document.documentElement.scrollHeight > window.innerHeight + 600,
    )).toBe(true)

    const result = await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, document.documentElement.scrollHeight)
      const initialScrollY = window.scrollY
      document.documentElement.style.removeProperty('scroll-behavior')

      const link = document.querySelector('aside a.sidebar-link[href="/admin/dashboard"]')
      if (!(link instanceof HTMLAnchorElement)) throw new Error('missing dashboard sidebar link')
      link.click()

      const positions = await new Promise<number[]>((resolve) => {
        const samples: number[] = []
        let startedAt = 0
        const sample = (now: number) => {
          samples.push(window.scrollY)
          if (now - startedAt < 260) requestAnimationFrame(sample)
          else resolve(samples)
        }
        const waitForRoute = () => {
          if (window.location.pathname !== '/admin/dashboard') {
            requestAnimationFrame(waitForRoute)
            return
          }
          startedAt = performance.now()
          requestAnimationFrame(sample)
        }
        requestAnimationFrame(waitForRoute)
      })
      return { initialScrollY, positions }
    })

    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/dashboard`)
    expect(result.initialScrollY).toBeGreaterThan(0)
    expect(result.positions.every((position) => position === 0)).toBe(true)
  })
})

test.describe('Console affiliate navigation icons', () => {
  async function iconState(page: Page, selector: string) {
    return page.locator(selector).evaluate((node) => {
      const svg = node.querySelector('svg')
      const path = svg?.querySelector('path')
      const rect = svg?.getBoundingClientRect()
      return {
        svgNamespace: svg?.namespaceURI || '',
        pathNamespace: path?.namespaceURI || '',
        width: rect?.width || 0,
        height: rect?.height || 0,
        display: svg ? getComputedStyle(svg).display : '',
      }
    })
  }

  test('keeps the regular-user affiliate navigation SVG visible', async ({ page }) => {
    await seedConsole(page, 'v2', { user: regularUser, affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/dashboard`)

    const state = await iconState(page, 'aside a[href="/affiliate"]')
    expect(state).toEqual({
      svgNamespace: 'http://www.w3.org/2000/svg',
      pathNamespace: 'http://www.w3.org/2000/svg',
      width: 20,
      height: 20,
      display: 'block',
    })
  })

  test('keeps the administrator affiliate navigation SVG visible', async ({ page }) => {
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/dashboard`)
    await expect(page.getByTestId('admin-affiliate-nav')).toBeVisible()

    const state = await iconState(page, '[data-testid="admin-affiliate-nav"]')
    expect(state).toEqual({
      svgNamespace: 'http://www.w3.org/2000/svg',
      pathNamespace: 'http://www.w3.org/2000/svg',
      width: 20,
      height: 20,
      display: 'block',
    })
  })
})

test.describe('Console standalone affiliate administration contracts', () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
  })

  test('keeps the legacy affiliate submenu out of every painted sidebar frame', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/dashboard`)
    await expect(page.getByTestId('admin-affiliate-nav')).toBeVisible()

    const baselineSettingsY = await page.locator(
      'aside a.sidebar-link[href="/admin/settings"]',
    ).evaluate((element) => Math.round(element.getBoundingClientRect().y))
    const frames = await page.evaluate(async () => {
      const link = document.querySelector('[data-testid="admin-affiliate-nav"]')
      if (!(link instanceof HTMLAnchorElement)) throw new Error('missing affiliate sidebar link')
      link.click()

      return await new Promise<Array<{
        injectedVisible: boolean
        legacySubmenuDisplay: string
        settingsY: number
        slotCount: number
      }>>((resolve) => {
        const samples: Array<{
          injectedVisible: boolean
          legacySubmenuDisplay: string
          settingsY: number
          slotCount: number
        }> = []
        let startedAt = 0
        const isVisible = (element: Element | null) =>
          element instanceof HTMLElement &&
          getComputedStyle(element).display !== 'none' &&
          element.getBoundingClientRect().height > 0
        const sample = (now: number) => {
          const legacyButton = [...document.querySelectorAll('aside button')].find((button) =>
            ['邀请返利', 'Affiliate Rebates'].includes(button.getAttribute('aria-label') || ''),
          ) || null
          let legacySubmenu = legacyButton?.nextElementSibling || null
          while (
            legacySubmenu &&
            !legacySubmenu.hasAttribute('data-zero-one-affiliate-legacy-submenu') &&
            !legacySubmenu.querySelector('a[href^="/admin/affiliates/"]')
          ) {
            legacySubmenu = legacySubmenu.nextElementSibling
          }
          const injectedLink = document.querySelector('[data-testid="admin-affiliate-nav"]')
          const settingsLink = document.querySelector(
            'aside a.sidebar-link[href="/admin/settings"]',
          )
          samples.push({
            injectedVisible: isVisible(injectedLink),
            legacySubmenuDisplay: legacySubmenu
              ? getComputedStyle(legacySubmenu).display
              : 'missing',
            settingsY: settingsLink
              ? Math.round(settingsLink.getBoundingClientRect().y)
              : -1,
            slotCount: Number(isVisible(legacyButton)) + Number(isVisible(injectedLink)),
          })
          if (now - startedAt < 160) requestAnimationFrame(sample)
          else resolve(samples)
        }
        const waitForRoute = () => {
          if (window.location.pathname !== '/admin/affiliates/invites') {
            requestAnimationFrame(waitForRoute)
            return
          }
          startedAt = performance.now()
          requestAnimationFrame(sample)
        }
        requestAnimationFrame(waitForRoute)
      })
    })

    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/affiliates/invites`)
    expect(frames.length).toBeGreaterThan(0)
    expect(frames.filter((frame) =>
      frame.legacySubmenuDisplay !== 'none' && frame.legacySubmenuDisplay !== 'missing',
    )).toEqual([])
    expect(frames.filter((frame) => !frame.injectedVisible)).toEqual([])
    expect(frames.filter((frame) => frame.settingsY !== baselineSettingsY)).toEqual([])
    expect(frames.filter((frame) => frame.slotCount !== 1)).toEqual([])
    await expect(page.getByTestId('admin-affiliate-nav')).toHaveCount(1)
  })

  for (const affiliateEnabled of [false, true]) {
    test(`keeps one administrator entry and five-tab workspace when affiliate_enabled=${affiliateEnabled}`, async ({ page }, testInfo) => {
      await seedConsole(page, 'v2', { affiliateEnabled })
      await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites`)

      const nav = page.getByTestId('admin-affiliate-nav')
      await expect(nav).toHaveCount(1)
      await expect(nav).toHaveAttribute('href', '/admin/affiliates/invites')
      await expect(nav).toHaveAttribute('aria-current', 'page')
      await expect(page.locator('aside a[aria-label="邀请返利"]:visible')).toHaveCount(1)
      await expect(page.locator('aside a[href="/affiliate"]')).toBeHidden()
      const legacyGroup = page.locator('aside button[aria-label="邀请返利"]')
      await expect(legacyGroup).toBeHidden()
      if (await legacyGroup.count()) {
        await expect(legacyGroup).toHaveClass(/zero-one-affiliate-legacy-hidden/)
        await expect(legacyGroup).toHaveCSS('display', 'none')
      }

      const workspace = page.getByTestId('affiliate-admin-workspace')
      await expect(workspace).toBeVisible()
      await expect(workspace.locator('nav a')).toHaveCount(5)
      await expect(workspace.locator('nav a')).toHaveText([
        '邀请记录',
        '客户关系',
        '专属代理',
        '提取记录',
        '运营设置',
      ])
      await expect(page.getByTestId('affiliate-bind-open')).toHaveCount(0)
      await expect(page.locator('.table-page-layout').getByText('bound@01yapi.test')).toBeVisible()

      if (testInfo.project.name === 'chromium-mobile') {
        await expect(workspace.locator('.zero-one-affiliate-workspace-header')).toHaveCSS(
          'flex-direction',
          'column',
        )
      }
    })
  }

  test('keeps the customer workspace visually stable on desktop and mobile', async ({ page }) => {
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`)
    await expect(page.getByTestId('affiliate-customers-list')).toBeVisible()
    await expect(page.getByTestId('affiliate-customers-list').getByText('missed@01yapi.test')).toBeVisible()
    await expect(page.locator('main .table-page-layout')).toHaveClass(
      /zero-one-affiliate-native-records-hidden/,
    )
    await expect(page.locator('main .table-page-layout')).toHaveCSS('display', 'none')
    if (await page.evaluate(() => window.innerWidth <= 640)) {
      const searchBox = await page.getByTestId('affiliate-customers-search').boundingBox()
      expect(searchBox).not.toBeNull()
      expect(searchBox!.height).toBeLessThan(60)
      await expect(page.locator('.zero-one-affiliate-custom-table-wrap')).toHaveCSS(
        'overflow-x',
        'auto',
      )
    }
    await page.evaluate(() => document.fonts.ready)
    await expect(page).toHaveScreenshot('console-affiliate-customers.png')
  })

  test('keeps the injected administrator entry aligned with collapsed sidebar state', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/dashboard`)

    const nav = page.getByTestId('admin-affiliate-nav')
    const label = nav.locator('.sidebar-label')
    await page.getByRole('button', { name: '收起' }).click()
    await expect(page.locator('aside')).toHaveClass(/w-\[72px\]/)
    await expect(nav).toHaveClass(/sidebar-link-collapsed/)
    await expect(nav).toHaveAttribute('title', '邀请返利')
    await expect(label).toHaveClass(/sidebar-label-collapsed/)
    await expect(label).toHaveAttribute('aria-hidden', 'true')

    await page.getByRole('button', { name: '展开' }).click()
    await expect(page.locator('aside')).not.toHaveClass(/w-\[72px\]/)
    await expect(nav).not.toHaveClass(/sidebar-link-collapsed/)
    await expect(nav).not.toHaveAttribute('title', '邀请返利')
    await expect(label).not.toHaveClass(/sidebar-label-collapsed/)
    await expect(label).toHaveAttribute('aria-hidden', 'false')
  })

  test('hides the legacy affiliate group and settings card in English locale', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true, locale: 'en' })
    await page.goto(`${affiliateConsoleOrigin}/admin/settings`)

    await expect(page.getByTestId('admin-affiliate-nav')).toHaveCount(1)
    const legacyGroup = page.locator('aside button[aria-label="Affiliate Rebates"]')
    await expect(legacyGroup).toHaveCount(1)
    await expect(legacyGroup).toBeHidden()
    await expect(legacyGroup).toHaveClass(/zero-one-affiliate-legacy-hidden/)

    const legacySettingsCard = page.locator('.card', {
      has: page.locator('h2').filter({ hasText: /^Affiliate \(Invite Rebate\)$/ }),
    })
    await expect(legacySettingsCard).toHaveCount(1)
    await expect(legacySettingsCard).toBeHidden()
    await expect(legacySettingsCard).toHaveClass(/zero-one-affiliate-legacy-hidden/)
  })

  test('lists every customer and shows invitees with per-customer rebate only in detail', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    let customersRequest: URL | null = null
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.pathname === '/api/v1/admin/users') customersRequest = url
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`)
    await expect(page.getByTestId('affiliate-customers-list')).toBeVisible()
    await expect(page.getByTestId('affiliate-customers-list').getByText('admin@01yapi.test')).toBeVisible()
    await expect(page.getByTestId('affiliate-customers-list').getByText('missed@01yapi.test')).toBeVisible()
    await expect(page.getByTestId('affiliate-bind-open')).toHaveCount(0)
    await expect.poll(() => customersRequest?.searchParams.get('include_subscriptions')).toBe('false')
    const customerQuery = customersRequest as URL | null
    expect(customerQuery).not.toBeNull()
    expect(customerQuery!.searchParams.get('affiliate_view')).toBe('relationships')
    expect(customerQuery!.searchParams.has('sort_by')).toBe(false)
    expect(customerQuery!.searchParams.has('sort_order')).toBe(false)
    await expect(page.getByTestId('affiliate-customers-list')).toContainText('代理价值')
    await expect(page.getByTestId('affiliate-customers-list')).toContainText('$12.50')
    await expect(page.getByTestId('affiliate-customers-list')).toContainText('专属代理')

    await page.getByTestId('affiliate-customer-10').click()
    await expect(page).toHaveURL(
      `${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers&user_id=10`,
    )
    const detail = page.getByTestId('affiliate-customer-detail')
    await expect(detail).toBeVisible()
    await expect(page.getByTestId('affiliate-customer-code')).toContainText('INVITER10')
    await expect(page.getByTestId('affiliate-customer-invited-count')).toContainText('1')
    await expect(detail.getByText('bound@01yapi.test')).toBeVisible()
    await expect(detail.getByRole('cell', { name: '12.50' })).toBeVisible()
    await expect(page.getByTestId('affiliate-bind-open')).toBeVisible()
  })

  test('filters exclusive agents by custom rebate rate and preserves detail context', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    let exclusiveRequest: URL | null = null
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.pathname === '/api/v1/admin/users' && url.searchParams.get('affiliate_view') === 'exclusive_agents') {
        exclusiveRequest = url
      }
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=exclusive_agents`)
    const list = page.getByTestId('affiliate-customers-list')
    await expect(list).toContainText('inviter@01yapi.test')
    await expect(list).not.toContainText('missed@01yapi.test')
    await expect.poll(() => exclusiveRequest?.searchParams.get('affiliate_view')).toBe('exclusive_agents')

    await page.getByTestId('affiliate-customer-10').click()
    await expect(page).toHaveURL(
      `${affiliateConsoleOrigin}/admin/affiliates/invites?section=exclusive_agents&user_id=10`,
    )
    await page.getByTestId('affiliate-customer-back').click()
    await expect(page).toHaveURL(
      `${affiliateConsoleOrigin}/admin/affiliates/invites?section=exclusive_agents`,
    )
  })

  test('redirects the removed rebate-record route to customer relationships', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/rebates`)
    await expect(page).toHaveURL(
      `${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`,
    )
    await expect(page.getByTestId('affiliate-tab-rebates')).toHaveCount(0)
    await expect(page.getByTestId('affiliate-customers-list')).toBeVisible()
  })

  test('uses Vue Router for affiliate links without replacing the document', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    test.setTimeout(60_000)
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    const consoleErrors: string[] = []
    const pageErrors: string[] = []
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('pageerror', (error) => pageErrors.push(error.stack || error.message))
    await page.addInitScript(() => {
      ;(window as Window & { __zeroOneDocumentSentinel?: number }).__zeroOneDocumentSentinel = Math.random()
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('zero-one-beforeunload', 'true')
      })
      const state = window as Window & { __zeroOneLongTaskDurations?: number[] }
      state.__zeroOneLongTaskDurations = []
      try {
        const observer = new PerformanceObserver((list) => {
          state.__zeroOneLongTaskDurations?.push(
            ...list.getEntries().map((entry) => entry.duration),
          )
        })
        observer.observe({ entryTypes: ['longtask'] })
      } catch {
        // Older engines without Long Tasks support still exercise reload/error checks.
      }
    })
    let documentNavigations = 0
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentNavigations += 1
      }
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/dashboard`)
    const sentinel = await page.evaluate(
      () => (window as Window & { __zeroOneDocumentSentinel?: number }).__zeroOneDocumentSentinel,
    )
    documentNavigations = 0
    await page.getByTestId('admin-affiliate-nav').click()
    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/affiliates/invites`)
    await page.getByTestId('affiliate-tab-customers').click()
    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`)
    await page.getByTestId('affiliate-tab-settings').click()
    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=settings`)
    await page.goBack()
    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`)

    consoleErrors.length = 0
    pageErrors.length = 0
    await page.evaluate(() => {
      const state = window as Window & { __zeroOneLongTaskDurations?: number[] }
      state.__zeroOneLongTaskDurations = []
    })
    for (let index = 0; index < 20; index += 1) {
      const showInvites = index % 2 === 0
      await page.getByTestId(showInvites ? 'affiliate-tab-invites' : 'affiliate-tab-customers').click()
      await expect(page).toHaveURL(showInvites
        ? `${affiliateConsoleOrigin}/admin/affiliates/invites`
        : `${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`)
    }

    expect(documentNavigations).toBe(0)
    expect(await page.evaluate(
      () => (window as Window & { __zeroOneDocumentSentinel?: number }).__zeroOneDocumentSentinel,
    )).toBe(sentinel)
    expect(await page.evaluate(() => sessionStorage.getItem('zero-one-beforeunload'))).toBeNull()
    expect(consoleErrors).toEqual([])
    expect(pageErrors).toEqual([])
    expect(await page.evaluate(() => {
      const durations = (window as Window & { __zeroOneLongTaskDurations?: number[] })
        .__zeroOneLongTaskDurations || []
      return durations.filter((duration) => duration >= 50)
    })).toEqual([])
  })

  test('yields its navigation and workspace when the native affiliate surface appears', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers`)
    await expect(page.getByTestId('admin-affiliate-nav')).toHaveCount(1)
    await expect(page.locator('[data-zero-one-affiliate-admin="workspace"]')).toHaveCount(1)
    await expect(page.locator('main .table-page-layout')).toHaveCSS('display', 'none')
    await page.evaluate(() => {
      const section = document.querySelector('aside nav .sidebar-section')
      const native = document.createElement('a')
      native.href = '/admin/affiliates'
      native.textContent = '原生邀请返利'
      native.dataset.testid = 'native-admin-affiliate-nav'
      section?.append(native)

      const workspace = document.createElement('section')
      workspace.dataset.testid = 'affiliate-admin-workspace'
      workspace.dataset.nativeAffiliateWorkspace = 'true'
      document.querySelector('main')?.append(workspace)
    })
    await expect(page.getByTestId('native-admin-affiliate-nav')).toBeVisible()
    await expect(page.getByTestId('admin-affiliate-nav')).toHaveCount(0)
    await expect(page.locator('[data-zero-one-affiliate-admin="workspace"]')).toHaveCount(0)
    await expect(page.locator('[data-native-affiliate-workspace="true"]')).toHaveCount(1)
    await expect(page.locator('main .table-page-layout')).not.toHaveClass(
      /zero-one-affiliate-native-records-hidden/,
    )
    await expect(page.locator('main .table-page-layout')).not.toHaveAttribute('aria-hidden', 'true')
    await expect(page.locator('aside button[aria-label="邀请返利"]')).not.toHaveClass(
      /zero-one-affiliate-legacy-hidden/,
    )
  })

  test('moves settings out of the legacy card and saves only the six affiliate fields', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: false })
    const submittedBodies: Record<string, unknown>[] = []
    page.on('request', (request) => {
      if (
        request.method() === 'PUT' &&
        new URL(request.url()).pathname === '/api/v1/admin/settings' &&
        Object.prototype.hasOwnProperty.call(
          request.postDataJSON() as object,
          'affiliate_rebate_rate',
        )
      ) {
        submittedBodies.push(request.postDataJSON() as Record<string, unknown>)
      }
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=settings`)
    await expect(page.getByTestId('affiliate-settings-panel')).toBeVisible()
    await expect(page.getByRole('heading', { name: '邀请返利运营设置' })).toBeVisible()
    await expect(page.locator('.card h2').filter({ hasText: /^邀请返利$/ })).toHaveCount(0)
    await expect(page.getByTestId('affiliate-custom-users').getByText('inviter@01yapi.test')).toBeVisible()

    await page.getByTestId('affiliate-settings-rate').fill('23.5')
    await page.getByTestId('affiliate-settings-save').click()
    await expect(page.getByTestId('affiliate-settings-status')).toHaveText(
      '邀请返利运营设置已保存。',
    )

    const submitted = submittedBodies.at(-1)
    expect(submitted).toBeDefined()
    expect(Object.keys(submitted!).sort()).toEqual(
      [
        'affiliate_admin_recharge_enabled',
        'affiliate_enabled',
        'affiliate_rebate_duration_days',
        'affiliate_rebate_freeze_hours',
        'affiliate_rebate_per_invitee_cap',
        'affiliate_rebate_rate',
      ].sort(),
    )
    expect(submitted?.affiliate_rebate_rate).toBe(23.5)
  })

  test('shows a loading state instead of a false disabled affiliate switch', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    let releaseSettings!: () => void
    const settingsGate = new Promise<void>((resolve) => { releaseSettings = resolve })
    await page.route('**/api/v1/admin/settings*', async (route) => {
      const url = new URL(route.request().url())
      if (route.request().method() === 'GET' && !url.searchParams.has('scope')) {
        await settingsGate
      }
      await route.fallback()
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=settings`)
    const panel = page.getByTestId('affiliate-settings-panel')
    await expect(panel).toContainText('正在加载运营设置…')
    await expect(page.getByTestId('affiliate-settings-enabled')).toHaveCount(0)

    releaseSettings()
    await expect(page.getByTestId('affiliate-settings-enabled')).toBeChecked()
  })

  test('keeps unsaved global settings through custom-user rerenders and adopts saved server values', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: false })
    await page.route('**/api/v1/admin/affiliates/users*', async (route) => {
      const requestUrl = new URL(route.request().url())
      if (
        route.request().method() !== 'GET' ||
        requestUrl.pathname !== '/api/v1/admin/affiliates/users'
      ) {
        return route.fallback()
      }
      const pageNumber = Math.max(1, Number(requestUrl.searchParams.get('page') || 1))
      const searching = Boolean(requestUrl.searchParams.get('search'))
      const userId = searching || pageNumber === 2 ? 20 : 10
      const email = userId === 20 ? 'missed@01yapi.test' : 'inviter@01yapi.test'
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({
          code: 0,
          message: 'ok',
          data: {
            items: [{
              user_id: userId,
              email,
              username: userId === 20 ? '遗漏客户乙' : '邀请人甲',
              aff_code: userId === 20 ? 'MISSED20' : 'INVITER10',
              aff_code_custom: true,
              aff_rebate_rate_percent: 25,
              aff_count: 1,
            }],
            total: searching ? 1 : 21,
            page: pageNumber,
            page_size: 20,
            pages: searching ? 1 : 2,
          },
        }),
      })
    })
    await page.route('**/api/v1/admin/settings', async (route) => {
      if (route.request().method() !== 'PUT') return route.fallback()
      const submitted = route.request().postDataJSON() as Record<string, unknown>
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({
          code: 0,
          message: 'ok',
          data: {
            ...submitted,
            affiliate_rebate_rate: 32.5,
            affiliate_rebate_freeze_hours: 49,
          },
        }),
      })
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=settings`)
    const customUsers = page.getByTestId('affiliate-custom-users')
    await expect(customUsers.getByText('inviter@01yapi.test')).toBeVisible()
    await page.getByTestId('affiliate-settings-enabled').check()
    await page.getByTestId('affiliate-settings-admin-recharge').check()
    await page.getByTestId('affiliate-settings-rate').fill('31.75')
    await page.getByTestId('affiliate-settings-freeze').fill('48')
    await page.getByTestId('affiliate-settings-duration').fill('730')
    await page.getByTestId('affiliate-settings-cap').fill('150.5')

    const expectDraft = async () => {
      await expect(page.getByTestId('affiliate-settings-enabled')).toBeChecked()
      await expect(page.getByTestId('affiliate-settings-admin-recharge')).toBeChecked()
      await expect(page.getByTestId('affiliate-settings-rate')).toHaveValue('31.75')
      await expect(page.getByTestId('affiliate-settings-freeze')).toHaveValue('48')
      await expect(page.getByTestId('affiliate-settings-duration')).toHaveValue('730')
      await expect(page.getByTestId('affiliate-settings-cap')).toHaveValue('150.5')
    }

    await customUsers.getByLabel('选择 inviter@01yapi.test').check()
    await expectDraft()
    await page.getByTestId('affiliate-custom-users').getByRole('button', { name: '下一页' }).click()
    await expect(page.getByTestId('affiliate-custom-users')).toContainText('2/2 页')
    await expect(page.getByTestId('affiliate-custom-users').getByText('missed@01yapi.test')).toBeVisible()
    await expectDraft()
    await page.getByRole('searchbox', { name: '搜索专属用户' }).fill('missed')
    await expect(page.getByTestId('affiliate-custom-users')).toContainText('1/1 页')
    await expect(page.getByTestId('affiliate-custom-users').getByText('missed@01yapi.test')).toBeVisible()
    await expectDraft()

    await page.getByTestId('affiliate-settings-save').click()
    await expect(page.getByTestId('affiliate-settings-status')).toHaveText(
      '邀请返利运营设置已保存。',
    )
    await expect(page.getByTestId('affiliate-settings-rate')).toHaveValue('32.5')
    await expect(page.getByTestId('affiliate-settings-freeze')).toHaveValue('49')
    await expect(page.getByTestId('affiliate-settings-duration')).toHaveValue('730')
    await expect(page.getByTestId('affiliate-settings-cap')).toHaveValue('150.5')
  })

  test('passes pure affiliate and native workspace XHR settings bodies through unchanged', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=settings`)

    const purePayload = {
      affiliate_enabled: true,
      affiliate_rebate_rate: 27.5,
      affiliate_rebate_freeze_hours: 36,
      affiliate_rebate_duration_days: 540,
      affiliate_rebate_per_invitee_cap: 90,
      affiliate_admin_recharge_enabled: true,
    }
    const pureRequest = page.waitForRequest((request) =>
      new URL(request.url()).searchParams.get('guard') === 'pure',
    )
    await page.evaluate(async (payload) => {
      await new Promise<void>((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('PUT', '/api/v1/admin/settings?guard=pure')
        request.setRequestHeader('Content-Type', 'application/json')
        request.addEventListener('load', () => resolve())
        request.addEventListener('error', () => reject(new Error('XHR failed')))
        request.send(JSON.stringify(payload))
      })
    }, purePayload)
    expect((await pureRequest).postDataJSON()).toEqual(purePayload)

    await page.evaluate(() => {
      const nativeWorkspace = document.createElement('section')
      nativeWorkspace.dataset.testid = 'affiliate-admin-workspace'
      nativeWorkspace.dataset.nativeAffiliateWorkspace = 'true'
      document.body.append(nativeWorkspace)
    })
    await expect(page.locator('[data-native-affiliate-workspace="true"]')).toHaveCount(1)
    const nativePayload = {
      affiliate_enabled: false,
      affiliate_rebate_rate: 18.25,
      site_name: '原生设置工作区',
    }
    const nativeRequest = page.waitForRequest((request) =>
      new URL(request.url()).searchParams.get('guard') === 'native',
    )
    await page.evaluate(async (payload) => {
      await new Promise<void>((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('PUT', '/api/v1/admin/settings?guard=native')
        request.setRequestHeader('Content-Type', 'application/json')
        request.addEventListener('load', () => resolve())
        request.addEventListener('error', () => reject(new Error('XHR failed')))
        request.send(JSON.stringify(payload))
      })
    }, nativePayload)
    expect((await nativeRequest).postDataJSON()).toEqual(nativePayload)
  })

  test('persists add, edit, reset, and batch custom-user operations with exact bodies', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    const writes: Array<{
      method: string
      path: string
      body: Record<string, unknown> | null
    }> = []
    page.on('request', (request) => {
      const path = new URL(request.url()).pathname
      if (!/^\/api\/v1\/admin\/affiliates\/users(?:\/\d+|\/batch-rate)$/.test(path)) return
      writes.push({
        method: request.method(),
        path,
        body: request.postData() ? request.postDataJSON() as Record<string, unknown> : null,
      })
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=settings`)
    const customUsers = page.getByTestId('affiliate-custom-users')
    await expect(customUsers.getByText('inviter@01yapi.test')).toBeVisible()

    await page.getByTestId('affiliate-custom-user-add').click()
    await page.getByTestId('affiliate-custom-picker-search').fill('missed')
    await page.getByTestId('affiliate-custom-picker-option-20').click()
    await page.getByTestId('affiliate-custom-code').fill('missed20')
    await page.getByTestId('affiliate-custom-rate').fill('30.5')
    await page.getByTestId('affiliate-custom-save').click()
    await expect(page.locator('[data-zero-one-affiliate-notice]')).toHaveText(
      '专属用户配置已保存。',
    )

    let inviterRow = page.getByTestId('affiliate-custom-users').getByRole('row')
      .filter({ hasText: 'inviter@01yapi.test' })
    await inviterRow.getByRole('button', { name: '编辑' }).click()
    await page.getByTestId('affiliate-custom-code').fill('inviter10x')
    await page.getByTestId('affiliate-custom-rate').fill('26.25')
    await page.getByTestId('affiliate-custom-save').click()
    await expect(page.locator('[data-zero-one-affiliate-notice]')).toHaveText(
      '专属用户配置已保存。',
    )

    page.once('dialog', (dialog) => void dialog.accept())
    inviterRow = page.getByTestId('affiliate-custom-users').getByRole('row')
      .filter({ hasText: 'inviter@01yapi.test' })
    await inviterRow.getByRole('button', { name: '重置' }).click()
    await expect(page.locator('[data-zero-one-affiliate-notice]')).toHaveText(
      '专属用户配置已重置。',
    )

    await page.getByTestId('affiliate-custom-users')
      .getByLabel('选择 inviter@01yapi.test').check()
    await page.getByTestId('affiliate-custom-user-batch').click()
    await expect(page.getByTestId('affiliate-batch-rate-dialog')).toContainText('已选择 1 个用户')
    await page.getByLabel('批量返利比例').fill('27.75')
    await page.getByRole('button', { name: '批量保存' }).click()
    await expect(page.locator('[data-zero-one-affiliate-notice]')).toHaveText(
      '批量返利比例已保存。',
    )

    expect(writes).toContainEqual({
      method: 'PUT',
      path: '/api/v1/admin/affiliates/users/20',
      body: { aff_code: 'MISSED20', aff_rebate_rate_percent: 30.5 },
    })
    expect(writes).toContainEqual({
      method: 'PUT',
      path: '/api/v1/admin/affiliates/users/10',
      body: { aff_code: 'INVITER10X', aff_rebate_rate_percent: 26.25 },
    })
    expect(writes).toContainEqual({
      method: 'DELETE',
      path: '/api/v1/admin/affiliates/users/10',
      body: null,
    })
    expect(writes).toContainEqual({
      method: 'POST',
      path: '/api/v1/admin/affiliates/users/batch-rate',
      body: { user_ids: [10], aff_rebate_rate_percent: 27.75 },
    })
  })

  test('binds exact selected IDs and keeps selections visible on a protected conflict', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    let submitted: Record<string, unknown> | null = null
    let rejectBinding = true
    await page.route('**/api/v1/admin/affiliates/invites', async (route) => {
      if (route.request().method() !== 'POST') return route.fallback()
      submitted = route.request().postDataJSON() as Record<string, unknown>
      if (rejectBinding) {
        await route.fulfill({
          status: 409,
          contentType: 'application/json; charset=utf-8',
          body: JSON.stringify({
            code: 409,
            reason: 'AFFILIATE_ALREADY_BOUND',
            message: 'affiliate relationship already exists',
          }),
        })
        return
      }
      await route.fallback()
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers&user_id=10`)
    await page.getByTestId('affiliate-bind-open').click()
    await expect(page.getByTestId('affiliate-bind-inviter-search')).toHaveCount(0)
    await expect(page.getByTestId('affiliate-bind-inviter-fixed')).toContainText('ID 10')
    await page.getByTestId('affiliate-bind-invitee-search').fill('missed')
    await page.getByTestId('affiliate-bind-invitee-option-20').click()
    await page.getByTestId('affiliate-bind-submit').click()

    expect(submitted).toEqual({ inviter_id: 10, invitee_id: 20 })
    await expect(page.getByTestId('affiliate-bind-status')).toHaveText(
      '该客户已经有邀请人，为了保护既有归属，系统不允许覆盖。',
    )
    await expect(page.getByTestId('affiliate-bind-inviter-fixed')).toContainText('ID 10')
    await expect(page.getByTestId('affiliate-bind-invitee-selected')).toContainText('ID 20')

    rejectBinding = false
    await page.getByTestId('affiliate-bind-submit').click()
    await expect(page.locator('[data-zero-one-affiliate-notice]')).toHaveText(
      '邀请关系已补绑，后续付款将按现有规则计算返利。',
    )
    await expect(page.getByTestId('affiliate-bind-dialog')).toHaveCount(0)
  })

  test('completes TOTP step-up without losing the pending binding', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2', { affiliateEnabled: true })
    let verified = false
    let bindAttempts = 0
    const submittedInviteeIds: number[] = []
    await page.route('**/api/v1/admin/affiliates/invites', async (route) => {
      if (route.request().method() !== 'POST') return route.fallback()
      bindAttempts += 1
      submittedInviteeIds.push(Number(route.request().postDataJSON().invitee_id))
      if (!verified) {
        await route.fulfill({
          status: 403,
          contentType: 'application/json; charset=utf-8',
          body: JSON.stringify({
            code: 403,
            reason: 'STEP_UP_REQUIRED',
            message: 'recent TOTP verification required',
          }),
        })
        return
      }
      await route.fallback()
    })
    await page.route('**/api/v1/user/totp/step-up', async (route) => {
      verified = true
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({ code: 0, message: 'success', data: { verified: true } }),
      })
    })

    await page.goto(`${affiliateConsoleOrigin}/admin/affiliates/invites?section=customers&user_id=10`)
    await page.getByTestId('affiliate-bind-open').click()
    await expect(page.getByTestId('affiliate-bind-inviter-fixed')).toContainText('ID 10')
    await page.getByTestId('affiliate-bind-invitee-search').fill('missed')
    await page.getByTestId('affiliate-bind-invitee-option-20').click()
    await page.getByTestId('affiliate-bind-submit').click()

    await expect(page.getByTestId('affiliate-step-up-dialog')).toBeVisible()
    await expect(page.getByTestId('affiliate-bind-dialog')).toHaveCount(1)
    await expect(page.getByTestId('affiliate-bind-inviter-fixed')).toContainText('ID 10')
    await expect(page.getByTestId('affiliate-bind-invitee-selected')).toContainText('ID 20')
    await page.getByTestId('affiliate-bind-invitee-selected')
      .getByRole('button', { name: '更换用户' })
      .evaluate((button: HTMLButtonElement) => button.click())
    await page.getByTestId('affiliate-bind-invitee-search').evaluate((input: HTMLInputElement) => {
      input.value = 'bound'
      input.dispatchEvent(new Event('input', { bubbles: true }))
    })
    await expect(page.getByTestId('affiliate-bind-invitee-option-21')).toBeAttached()
    await page.getByTestId('affiliate-bind-invitee-option-21')
      .evaluate((button: HTMLButtonElement) => button.click())
    await page.getByLabel('TOTP 验证码').fill('123456')
    await page.getByRole('button', { name: '验证并继续' }).click()

    await expect(page.getByTestId('affiliate-step-up-dialog')).toHaveCount(0)
    await expect(page.getByTestId('affiliate-bind-dialog')).toHaveCount(0)
    await expect(page.locator('[data-zero-one-affiliate-notice]')).toContainText('邀请关系已补绑')
    expect(bindAttempts).toBe(2)
    expect(submittedInviteeIds).toEqual([20, 20])
  })
})

test.describe('Console header navigation settings contracts', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
    await seedConsole(page, 'v2', {
      communityQrEnabled: true,
      userSidebarOrder: ['/keys', '/dashboard', '/model-plaza'],
      adminSidebarOrder: ['/admin/settings', '/admin/dashboard', '/model-plaza'],
      customMenuItems: [
        { id: 'recharge', label: '在线充值', icon_svg: '', url: '', visibility: 'user', placement: 'header', navigation_type: 'qr', qr_description: '扫码联系充值客服', qr_image: `data:image/png;base64,${communityQrPngBase64}`, sort_order: 0 },
        { id: 'docs', label: '接入教程', icon_svg: '', url: 'https://example.com/docs', visibility: 'all', placement: 'sidebar', sort_order: 1 },
        { id: 'support', label: '售后支持', icon_svg: '', url: '', visibility: 'all', placement: 'header', navigation_type: 'qr', qr_description: '扫码联系售后', qr_image: `data:image/png;base64,${communityQrPngBase64}`, sort_order: 2 },
      ],
    })
  })

  test('administrator can add multiple header-only entries without duplicating them below', async ({ page }) => {
    let savedBody: Record<string, unknown> | null = null
    let savedHeaders: Record<string, string> = {}
    page.on('request', (request) => {
      if (
        request.method() === 'PUT' &&
        new URL(request.url()).pathname === '/api/v1/admin/settings'
      ) {
        savedBody = request.postDataJSON() as Record<string, unknown>
        savedHeaders = request.headers()
      }
    })

    await page.goto('http://127.0.0.1:4173/admin/settings')
    const panel = page.getByTestId('header-navigation-settings')
    const names = panel.locator('[data-testid^="header-navigation-name-"]')
    const descriptions = panel.locator('[data-testid^="header-navigation-description-"]')

    await expect(panel).toBeVisible()
    await expect(page.locator('button[data-zero-one-settings-save="true"]')).toBeVisible()
    await expect(page.locator('button[data-zero-one-standalone-save="true"]')).toHaveCount(8)
    await expect(page.locator('button[data-zero-one-standalone-save="true"]:visible')).toHaveCount(0)
    await expect(page.getByTestId('community-qr-settings')).toHaveCount(0)
    await expect(page.getByTestId('community-qr-button')).toHaveCount(0)
    await expect(names).toHaveCount(2)
    await expect(names.nth(0)).toHaveValue('在线充值')
    await expect(names.nth(1)).toHaveValue('售后支持')
    await expect(descriptions).toHaveCount(2)
    await expect(page.getByTestId('profile-navigation-toggle')).toBeChecked()
    await expect(page.getByTestId('subscription-navigation-toggle')).toBeChecked()
    await expect(page.getByTestId('model-plaza-placement')).toHaveValue('header')
    await expect(page.locator('header a[href="https://docs.01yapi.test/start"]')).toHaveCount(0)
    await expect(page.getByText('开源知识库链接', { exact: true })).toBeVisible()
    await expect(page.getByTestId('image-tutorial-menu-url')).toHaveValue('')
    await expect(page.getByTestId('user-sidebar-order-list').locator('[data-sidebar-path]').first()).toHaveAttribute('data-sidebar-path', '/keys')
    await expect(page.getByTestId('admin-sidebar-order-list').locator('[data-sidebar-path]').first()).toHaveAttribute('data-sidebar-path', '/admin/settings')
    await expect.poll(() => page.locator('aside nav a[href="/admin/settings"], aside nav a[href="/admin/dashboard"]').evaluateAll((links) =>
      Object.fromEntries(links.map((link) => [link.getAttribute('href'), link.getBoundingClientRect().top])),
    )).toMatchObject({
      '/admin/settings': expect.any(Number),
      '/admin/dashboard': expect.any(Number),
    })
    expect(await page.locator('aside nav a[href="/admin/settings"], aside nav a[href="/admin/dashboard"]').evaluateAll((links) => {
      const tops = Object.fromEntries(links.map((link) => [link.getAttribute('href'), link.getBoundingClientRect().top]))
      return tops['/admin/settings'] < tops['/admin/dashboard']
    })).toBe(true)
    await expect(page.getByTestId('custom-menu-visibility-0')).toBeHidden()
    await expect(page.getByTestId('custom-menu-visibility-1')).toBeVisible()

    await page.getByTestId('header-navigation-add').click()
    await expect(names).toHaveCount(3)
    await names.nth(2).fill('运营公告')
    await descriptions.nth(2).fill('扫码查看运营公告')
    await page.getByTestId('header-navigation-qr-upload-2').locator('input').setInputFiles({
      name: 'ops-qr.png',
      mimeType: 'image/png',
      buffer: Buffer.from(communityQrPngBase64, 'base64'),
    })
    await page.getByTestId('header-navigation-visibility-2').selectOption('admin')
    await page.getByTestId('header-navigation-icon-2').getByTestId('navigation-icon-preset-star').click()
    await page.getByTestId('subscription-navigation-toggle').uncheck()
    await page.getByTestId('model-plaza-placement').selectOption('sidebar')
    await page.getByTestId('image-tutorial-menu-url').fill('https://docs.01yapi.test/image-generation')
    await page.getByTestId('user-sidebar-order-section').locator('summary').click()
    await page.getByTestId('user-sidebar-order-list').locator('[data-sidebar-path="/keys"]').getByRole('button', { name: '下移' }).click()
    await page.getByTestId('user-sidebar-order-section').locator('summary').click()

    await page.waitForTimeout(5_500)
    await page.locator('.settings-tabs-shell').evaluate((element: HTMLElement) => {
      element.style.position = 'static'
    })
    await page.locator('header.app-header-surface').evaluate((element: HTMLElement) => {
      element.style.position = 'static'
    })
    await panel.evaluate((element) => {
      window.scrollTo(0, window.scrollY + element.getBoundingClientRect().top - 160)
    })
    await expect(panel).toHaveScreenshot('console-header-navigation-settings.png', {
      maxDiffPixelRatio: 0.02,
    })
    await expect(page.getByTestId('header-navigation-save')).toHaveCount(0)
    await page.locator('button[data-zero-one-settings-save="true"]').click()
    await expect.poll(() => savedBody).not.toBeNull()
    const submittedBody = savedBody as unknown as Record<string, unknown>
    expect(submittedBody).toMatchObject({
      community_qr_enabled: false,
      profile_navigation_enabled: true,
      subscription_navigation_enabled: false,
      model_plaza_placement: 'sidebar',
      landing_tutorial_url: 'https://docs.01yapi.test/getting-started',
    })
    expect(submittedBody).not.toHaveProperty('image_tutorial_url')
    expect((submittedBody.user_sidebar_order as string[]).slice(0, 3)).toEqual([
      '/dashboard', '/keys', '/model-plaza',
    ])
    expect((submittedBody.admin_sidebar_order as string[]).slice(0, 3)).toEqual([
      '/admin/settings', '/admin/dashboard', '/model-plaza',
    ])
    expect(submittedBody.custom_menu_items).toEqual([
      expect.objectContaining({ id: 'recharge', placement: 'header' }),
      expect.objectContaining({ id: 'docs', placement: 'sidebar' }),
      expect.objectContaining({ id: 'support', placement: 'header' }),
      expect.objectContaining({
        label: '运营公告',
        visibility: 'admin',
        placement: 'header',
        navigation_type: 'qr',
        qr_description: '扫码查看运营公告',
      }),
      expect.objectContaining({
        id: 'image-tutorial',
        label: '生图教程',
        url: 'https://docs.01yapi.test/image-generation',
        visibility: 'all',
        placement: 'sidebar',
      }),
    ])
    expect(savedHeaders.authorization).toBe('Bearer visual-fixture-token')
    expect(savedHeaders['accept-language']).toBe('zh')
    expect(savedHeaders['x-admin-ui-request']).toBe('1')
  })

  test('routes toggle-only and Enter saves through the bottom action after auxiliary requests settle', async ({ page }) => {
    const requestOrder: string[] = []
    let mainSaves = 0
    let auxiliarySaves = 0
    let auxiliarySettled = false

    await page.route('**/api/v1/admin/settings/overload-cooldown', async (route) => {
      if (route.request().method() !== 'PUT') return route.fallback()
      auxiliarySaves += 1
      requestOrder.push(`aux-start-${auxiliarySaves}`)
      const submitted = route.request().postDataJSON() as {
        enabled: boolean
        cooldown_minutes: number
      }
      await new Promise((resolve) => setTimeout(resolve, 100))
      auxiliarySettled = true
      requestOrder.push(`aux-end-${auxiliarySaves}`)
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({ code: 0, message: 'ok', data: submitted }),
      })
    })
    await page.route('**/api/v1/admin/settings', async (route) => {
      if (route.request().method() === 'PUT') {
        mainSaves += 1
        auxiliarySettled = false
        requestOrder.push(`main-${mainSaves}`)
      }
      await route.fallback()
    })

    await page.goto('http://127.0.0.1:4173/admin/settings')
    await page.getByRole('tab', { name: '网关服务' }).click()
    const card = page.getByRole('heading', { name: '529 过载冷却', exact: true })
      .locator('xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " card ")][1]')
    const toggle = card.getByRole('switch')
    const bottomSave = page.locator('button[data-zero-one-settings-save="true"]')
    await expect(card.locator('button[data-zero-one-standalone-save="true"]')).toBeHidden()

    // Toggle emits only click (no native input/change), so this covers the
    // button-only dirty path.
    await toggle.click()
    await bottomSave.click()
    await expect.poll(() => auxiliarySaves).toBe(1)
    await expect.poll(() => mainSaves).toBe(1)
    await expect(page.getByText('设置保存成功', { exact: true })).toBeVisible()
    expect(auxiliarySettled).toBe(true)
    expect(requestOrder).toEqual(['main-1', 'aux-start-1', 'aux-end-1'])
    await expect(bottomSave).toBeEnabled()

    // The recovered page used to bind Enter directly to the card-only save.
    // It must now submit the bottom action and preserve main-first ordering.
    await toggle.click()
    const cooldown = card.locator('input[type="number"]').first()
    await cooldown.fill('17')
    await cooldown.press('Enter')
    await expect.poll(() => auxiliarySaves).toBe(2)
    await expect.poll(() => mainSaves).toBe(2)
    await expect.poll(() => requestOrder).toEqual([
      'main-1', 'aux-start-1', 'aux-end-1',
      'main-2', 'aux-start-2', 'aux-end-2',
    ])
    await expect(bottomSave).toBeEnabled()
  })

  test('does not report global success when an auxiliary save fails', async ({ page }) => {
    let mainSaves = 0
    let auxiliarySaves = 0
    await page.route('**/api/v1/admin/settings/overload-cooldown', async (route) => {
      if (route.request().method() !== 'PUT') return route.fallback()
      auxiliarySaves += 1
      await route.fulfill({
        status: 500,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({ code: 500, message: 'auxiliary save failed' }),
      })
    })
    await page.route('**/api/v1/admin/settings', async (route) => {
      if (route.request().method() === 'PUT') mainSaves += 1
      await route.fallback()
    })

    await page.goto('http://127.0.0.1:4173/admin/settings')
    await page.getByRole('tab', { name: '网关服务' }).click()
    const card = page.getByRole('heading', { name: '529 过载冷却', exact: true })
      .locator('xpath=ancestor::div[contains(concat(" ", normalize-space(@class), " "), " card ")][1]')
    await card.getByRole('switch').click()
    const bottomSave = page.locator('button[data-zero-one-settings-save="true"]')
    await bottomSave.click()

    await expect(page.locator('[data-zero-one-settings-save-status]')).toContainText('辅助设置保存失败')
    expect(mainSaves).toBe(1)
    expect(auxiliarySaves).toBe(1)
    await expect(page.getByText('设置保存成功', { exact: true })).toHaveCount(0)
    await expect(bottomSave).toBeEnabled()
    await expect(card).toHaveAttribute('data-zero-one-settings-dirty', 'true')
  })

  test('does not let an unfinished navigation editor overwrite an early main save', async ({ page }) => {
    let releaseOverlayRead: (() => void) | undefined
    const overlayReadGate = new Promise<void>((resolve) => { releaseOverlayRead = resolve })
    let savedBody: Record<string, unknown> | null = null

    await page.route('**/api/v1/admin/settings', async (route) => {
      const request = route.request()
      if (request.method() === 'GET' && request.resourceType() === 'fetch') {
        await overlayReadGate
        return route.fallback()
      }
      if (request.method() === 'PUT') {
        savedBody = request.postDataJSON() as Record<string, unknown>
      }
      await route.fallback()
    })

    await page.goto('http://127.0.0.1:4173/admin/settings')
    const bottomSave = page.locator('button[data-zero-one-settings-save="true"]')
    await expect(bottomSave).toBeVisible()
    await bottomSave.click()
    await expect.poll(() => savedBody).not.toBeNull()

    const submitted = savedBody as unknown as Record<string, unknown>
    expect(submitted.landing_tutorial_url).not.toBe('')
    expect(submitted.user_sidebar_order).not.toEqual([])
    expect(submitted.admin_sidebar_order).not.toEqual([])
    releaseOverlayRead?.()
  })
})

test.describe('Console payment result balance refresh contract', () => {
  test.beforeEach(async ({}, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
  })

  test('refreshes the authenticated user once after a balance order completes', async ({ page }) => {
    let authMeRequests = 0
    let documentRequests = 0
    const consoleErrors: string[] = []
    const pageErrors: string[] = []

    await seedConsole(page, 'v2', {
      user: regularUser,
      authMeUsers: [regularUser, { ...regularUser, balance: 184.25 }],
    })

    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('pageerror', (error) => pageErrors.push(error.message))
    page.on('request', (request) => {
      if (new URL(request.url()).pathname === '/api/v1/auth/me') {
        authMeRequests += 1
      }
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentRequests += 1
      }
    })
    await page.route('**/api/v1/payment/public/orders/resolve', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json; charset=utf-8',
        body: JSON.stringify({
          code: 0,
          message: 'ok',
          data: {
            out_trade_no: 'balance-v182',
            status: 'COMPLETED',
            paid: true,
            created_at: '2026-08-25T12:00:00+08:00',
            expires_at: '2026-08-25T12:30:00+08:00',
          },
        }),
      })
    })

    await page.goto('http://127.0.0.1:4173/payment/result?resume_token=v182-balance')
    await page.waitForTimeout(250)
    expect(pageErrors).toEqual([])
    await expect(page.getByRole('heading', { name: '支付成功' })).toBeVisible()
    await expect.poll(() => authMeRequests).toBe(2)
    await expect.poll(() => page.evaluate(() => {
      const raw = localStorage.getItem('auth_user')
      return raw ? JSON.parse(raw).balance : null
    })).toBe(184.25)

    await page.waitForTimeout(250)
    expect(authMeRequests).toBe(2)
    expect(documentRequests).toBe(1)
    expect(consoleErrors).toEqual([])
  })
})

test.describe('Console header floating layer contracts', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await seedConsole(page, 'v2')
  })

  test('keeps language and account menus above the API key toolbar', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/keys')

    const assertPanelOwnsItsCenterPoint = async (panel: Locator) => {
      await expect(panel).toBeVisible()
      expect(await panel.evaluate((element) => {
        const rect = element.getBoundingClientRect()
        const topmost = document.elementFromPoint(rect.left + rect.width / 2, rect.top + 12)
        return topmost === element || element.contains(topmost)
      })).toBe(true)
    }

    const localeTrigger = page.locator('header button').filter({ hasText: 'ZH' })
    await localeTrigger.click()
    await assertPanelOwnsItsCenterPoint(page.locator('header .absolute.right-0.z-50.mt-1.w-32'))
    await localeTrigger.click()

    await page.getByRole('button', { name: '用户菜单' }).click()
    await assertPanelOwnsItsCenterPoint(page.locator('header .dropdown.right-0'))
  })
})

test.describe('Console built-in sidebar navigation contracts', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
  })

  test('sorts administrator groups as complete rows with the dashboard physically first', async ({ page }) => {
    await seedConsole(page, 'v2', {
      adminSidebarOrder: ['/admin/dashboard', '/admin/channels', '/admin/settings'],
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')

    const section = page.locator('aside:not([data-zero-one-sidebar-continuity]) nav .sidebar-section').first()
    const controls = section.locator(':scope > .sidebar-link:visible')
    await expect.poll(() => controls.evaluateAll((items) => items.slice(0, 3).map((item) =>
      item.getAttribute('href') || item.getAttribute('aria-label'),
    ))).toEqual(['/admin/dashboard', '渠道管理', '/admin/settings'])

    const dashboard = section.locator('a[href="/admin/dashboard"]')
    const channels = section.getByRole('button', { name: '渠道管理', exact: true })
    await dashboard.focus()
    await page.keyboard.press('Tab')
    await expect(channels).toBeFocused()
    await channels.click()
    const pricing = section.locator('a[href="/admin/channels/pricing"]')
    await expect(pricing).toBeVisible()
    expect(await channels.evaluate((button) =>
      button.nextElementSibling?.querySelector('a')?.getAttribute('href'),
    )).toBe('/admin/channels/pricing')
    await channels.focus()
    await page.keyboard.press('Tab')
    await expect(pricing).toBeFocused()
  })

  test('preserves saved group ordering through refresh, collapse and route changes without idle reordering', async ({ page }) => {
    await seedConsole(page, 'v2', {
      paymentEnabled: true,
      riskControlEnabled: true,
      modelPlazaPlacement: 'sidebar',
      adminSidebarOrder: [
        '/admin/settings', '/admin/channels', '/admin/dashboard', '/admin/orders',
        '/admin/security-audit', '/model-plaza', '/custom/team-tool',
        '/admin/dashboard', '/removed-page',
      ],
      customMenuItems: [{
        id: 'team-tool', label: '团队工具', icon_svg: '',
        url: 'https://embed.01yapi.test/team', visibility: 'admin', placement: 'sidebar', sort_order: 0,
      }],
    })
    await page.goto('http://127.0.0.1:4173/admin/settings')
    await page.getByTestId('admin-sidebar-order-section').locator('summary').click()
    const orderList = page.getByTestId('admin-sidebar-order-list')
    const dashboardRow = orderList.locator('[data-sidebar-path="/admin/dashboard"]')
    await dashboardRow.getByRole('button', { name: '上移' }).click()
    await dashboardRow.getByRole('button', { name: '上移' }).click()
    await expect(orderList.locator('[data-sidebar-path]').first())
      .toHaveAttribute('data-sidebar-path', '/admin/dashboard')
    const settingsResponse = page.waitForResponse((response) =>
      response.request().method() === 'PUT' &&
      new URL(response.url()).pathname === '/api/v1/admin/settings',
    )
    await page.locator('button[data-zero-one-settings-save="true"]').click()
    await settingsResponse
    await page.reload()
    await expect(orderList.locator('[data-sidebar-path]').first())
      .toHaveAttribute('data-sidebar-path', '/admin/dashboard')

    const section = page.locator('aside:not([data-zero-one-sidebar-continuity]) nav .sidebar-section').first()
    await expect.poll(() => sidebarOrder(section)).toEqual(expect.arrayContaining([
      '/admin/dashboard', '/admin/channels', '/admin/orders', '/admin/security-audit',
      '/model-plaza', '/custom/team-tool',
    ]))
    const configuredOrder = await orderList.locator('[data-sidebar-path]').evaluateAll((items) =>
      items.map((item) => item.getAttribute('data-sidebar-path') || ''),
    )
    const renderedOrder = await sidebarOrder(section)
    expect(renderedOrder).toEqual(configuredOrder.filter((path) => renderedOrder.includes(path)))
    expect(new Set(renderedOrder).size).toBe(renderedOrder.length)
    expect(renderedOrder[0]).toBe('/admin/dashboard')

    for (const name of ['渠道管理', '订单管理', '安全审计']) {
      const group = section.getByRole('button', { name, exact: true })
      await group.click()
      await expect(group).toHaveAttribute('aria-expanded', 'true')
      expect(await group.evaluate((button) =>
        button.nextElementSibling?.querySelectorAll('a.sidebar-link').length,
      )).toBeGreaterThan(0)
      expect(await sidebarOrder(section)).toEqual(renderedOrder)
      await group.click()
      await expect(group).toHaveAttribute('aria-expanded', 'false')
    }
    await page.getByRole('button', { name: '收起', exact: true }).click()
    expect(await sidebarOrder(section)).toEqual(renderedOrder)
    await page.getByRole('button', { name: '展开', exact: true }).click()
    for (const path of ['/admin/users', '/admin/dashboard']) {
      await section.locator(`a[href="${path}"]`).click()
      await expect(page).toHaveURL(`http://127.0.0.1:4173${path}`)
      await expect.poll(() => sidebarOrder(section)).toEqual(renderedOrder)
    }
    const rowPositions = await section.locator(':scope > .sidebar-link:visible').evaluateAll((items) =>
      items.map((item) => item.getBoundingClientRect().top),
    )
    expect(rowPositions).toEqual([...rowPositions].sort((left, right) => left - right))
    const idleReorders = await section.evaluate(async (element) => {
      let mutations = 0
      const observer = new MutationObserver((records) => { mutations += records.length })
      observer.observe(element, { childList: true })
      await new Promise((resolve) => setTimeout(resolve, 300))
      observer.disconnect()
      return mutations
    })
    expect(idleReorders).toBe(0)
  })

  test('keeps simple-mode administrator ordering separate from personal navigation', async ({ page }) => {
    await seedConsole(page, 'v2', {
      user: { ...adminUser, run_mode: 'simple' },
      adminSidebarOrder: ['/admin/dashboard', '/keys', '/admin/settings', '/admin/channels'],
      userSidebarOrder: ['/usage', '/keys', '/dashboard'],
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const sections = page.locator('aside:not([data-zero-one-sidebar-continuity]) nav .sidebar-section')
    await expect(sections).toHaveCount(1)
    await expect.poll(async () => (await sidebarOrder(sections.first())).slice(0, 3))
      .toEqual(['/admin/dashboard', '/keys', '/admin/settings'])
    await expect(sections.getByRole('button', { name: '渠道管理', exact: true })).toHaveCount(0)
    await expect(sections.locator('a[href="/admin/users"]')).toHaveCount(0)

    const continuityFirstPath = await page.evaluate(async () => {
      const settings = document.querySelector('aside:not([data-zero-one-sidebar-continuity]) a[href="/admin/settings"]')
      if (!(settings instanceof HTMLAnchorElement)) throw new Error('missing settings link')
      settings.click()
      await new Promise((resolve) => requestAnimationFrame(resolve))
      return document.querySelector('[data-zero-one-sidebar-continuity] nav .sidebar-section > a.sidebar-link')
        ?.getAttribute('href')
    })
    expect(continuityFirstPath).toBe('/admin/dashboard')
    await expect(page).toHaveURL('http://127.0.0.1:4173/admin/settings')
    await expect.poll(async () => (await sidebarOrder(sections.first())).slice(0, 3))
      .toEqual(['/admin/dashboard', '/keys', '/admin/settings'])
  })

  test('regular users get one Model Plaza row inside nav and hidden personal entries', async ({ page }) => {
    await seedConsole(page, 'v2', {
      user: regularUser,
      profileNavigationEnabled: false,
      subscriptionNavigationEnabled: false,
      modelPlazaPlacement: 'sidebar',
      imageGenerationKeys: [{
        id: 301,
        user_id: regularUser.id,
        key: 'sk-regular-image',
        name: '普通用户生图',
        group_id: 401,
        status: 'active',
        group: { id: 401, name: '生图分组', platform: 'openai', allow_image_generation: true },
      }],
      userSidebarOrder: [
        '/dashboard', '/keys', '/batch-image', '/usage', '/available-channels', '/monitor',
        '/subscriptions', '/purchase', '/orders', '/redeem', '/affiliate', '/profile',
        '/model-plaza', '/custom/user-tool', '/custom/all-tool',
      ],
      customMenuItems: [
        { id: 'user-tool', label: '用户工具', icon_svg: '<svg viewBox="0 0 24 24"><path d="M4 12h16"/></svg>', url: 'https://example.com/tool', visibility: 'user', placement: 'sidebar', sort_order: 0 },
        { id: 'all-tool', label: '共享工具', icon_svg: '<svg viewBox="0 0 24 24"><path d="M12 4v16"/></svg>', url: 'https://example.com/all-tool', visibility: 'all', placement: 'both', sort_order: 1 },
      ],
    })
    await page.goto('http://127.0.0.1:4173/dashboard')
    await page.evaluate(() => {
      delete (window as Window & { __APP_CONFIG__?: unknown }).__APP_CONFIG__
      ;(window as Window & {
        __ZERO_ONE_NAVIGATION_RECONCILIATION__?: { request: () => void }
      }).__ZERO_ONE_NAVIGATION_RECONCILIATION__?.request()
    })

    await expect(page.locator('header a[href^="/model-plaza"]')).toBeHidden()
    await expect(page.locator('aside nav a[href="/profile"]')).toBeHidden()
    await expect(page.locator('aside nav a[href="/subscriptions"]')).toBeHidden()
    await expect.poll(() => page.locator('header a[href^="/model-plaza"]').evaluate((element) =>
      getComputedStyle(element).display,
    )).toBe('none')
    await expect.poll(() => page.locator('aside nav a[href="/profile"]').evaluate((element) =>
      getComputedStyle(element).display,
    )).toBe('none')
    await expect.poll(() => page.locator('aside nav a[href="/subscriptions"]').evaluate((element) =>
      getComputedStyle(element).display,
    )).toBe('none')

    const modelPlaza = page.locator('aside nav a[data-zero-one-model-plaza-sidebar]')
    await expect(modelPlaza).toHaveCount(1)
    await expect(modelPlaza).toBeVisible()
    expect(await page.locator('aside .sidebar-header [data-zero-one-model-plaza-sidebar]').count())
      .toBe(0)
    const orderedHrefs = await page.locator('aside nav .sidebar-section').first().locator(':scope > a.sidebar-link').evaluateAll((links) =>
      links.map((link) => new URL((link as HTMLAnchorElement).href).pathname),
    )
    expect(orderedHrefs.slice(0, 2)).toEqual(['/dashboard', '/keys'])
    expect(orderedHrefs.slice(-4)).toEqual([
      '/model-plaza', '/custom/user-tool', '/custom/all-tool', '/images',
    ])
    await expect(page.locator('aside nav a[href="/images"]')).toHaveCount(1)
    await expect.poll(() => modelPlaza.locator('svg').evaluate((svg) => {
      const rect = svg.getBoundingClientRect()
      return [rect.width, rect.height]
    })).toEqual([20, 20])
    await expect.poll(() => page.locator('aside nav a[href="/custom/user-tool"]').locator('svg').evaluate((svg) => {
      const rect = svg.getBoundingClientRect()
      return [rect.width, rect.height]
    })).toEqual([20, 20])
  })

  test('administrator business Subscriptions stays visible while My Subscriptions hides', async ({ page }) => {
    await seedConsole(page, 'v2', {
      paymentEnabled: true,
      profileNavigationEnabled: false,
      subscriptionNavigationEnabled: false,
      modelPlazaPlacement: 'sidebar',
      adminSidebarOrder: ['/admin/settings', '/admin/dashboard', '/model-plaza'],
      userSidebarOrder: ['/usage', '/keys', '/redeem'],
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')

    await expect(page.locator('header a[href^="/model-plaza"]')).toBeHidden()
    await expect(page.locator('aside nav a[href="/profile"]')).toBeHidden()
    await expect(page.locator('aside nav a[href="/subscriptions"]')).toBeHidden()
    await expect(page.locator('aside nav a[href="/admin/subscriptions"]')).toBeVisible()
    await expect(page.locator('aside nav').getByRole('button', { name: '订单管理', exact: true })).toBeVisible()
    await expect.poll(() => page.locator('header a[href^="/model-plaza"]').evaluate((element) =>
      getComputedStyle(element).display,
    )).toBe('none')
    await expect(page.locator('aside nav a[data-zero-one-model-plaza-sidebar]')).toHaveCount(1)
    await expect(page.locator('aside nav .sidebar-section').first().locator('a.sidebar-link').nth(0)).toHaveAttribute('href', '/admin/settings')
    const dashboard = page.locator('aside nav a[href="/admin/dashboard"]')
    const modelPlaza = page.locator('aside nav a[data-zero-one-model-plaza-sidebar]')
    await dashboard.click()
    await expect(dashboard).toHaveClass(/sidebar-link-active/)
    await expect(dashboard).toHaveAttribute('aria-current', 'page')
    await expect(modelPlaza).not.toHaveClass(/(?:router-link-(?:exact-)?active|sidebar-link-active)/)
    await expect(modelPlaza).not.toHaveAttribute('aria-current', 'page')
    const personal = page.locator('aside:not([data-zero-one-sidebar-continuity]) nav .sidebar-section').nth(1)
    await expect.poll(async () => (await sidebarOrder(personal)).slice(0, 3))
      .toEqual(['/usage', '/keys', '/redeem'])
  })
})

test.describe('Console protected QR loading contracts', () => {
  const supportItem = {
    id: 'support-group', label: '零一售后交流群', icon_svg: '', url: '',
    visibility: 'all' as const, placement: 'header' as const, navigation_type: 'qr' as const,
    qr_description: '扫码加入售后群', qr_image: `data:image/png;base64,${communityQrPngBase64}`,
    sort_order: 0,
  }
  const qrPath = '/api/v1/settings/header-navigation/support-group/qr'

  test('does not expose QR controls or download protected images while signed out', async ({ page }) => {
    let qrRequests = 0
    page.on('request', (request) => {
      if (new URL(request.url()).pathname === qrPath) qrRequests += 1
    })
    await seedConsole(page, 'v2', { authenticated: false, customMenuItems: [supportItem] })
    await page.goto('http://127.0.0.1:4173/login')
    await expect(page.getByRole('button', { name: '登录', exact: true })).toBeVisible()
    await expect(page.getByTestId('header-qr-support-group')).toHaveCount(0)
    await expect(page.locator('[data-zero-one-header-qr-dialog]')).toHaveCount(0)
    expect(qrRequests).toBe(0)
  })

  test('keeps the existing mobile QR entry hidden without preloading its image', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-mobile', 'The existing header breakpoint is a mobile contract.')
    let qrRequests = 0
    page.on('request', (request) => {
      if (new URL(request.url()).pathname === qrPath) qrRequests += 1
    })
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [supportItem] })
    await page.goto('http://127.0.0.1:4173/dashboard')
    await expect(page.getByTestId('header-qr-support-group')).toHaveCount(1)
    await expect(page.getByTestId('header-qr-support-group')).toBeHidden()
    expect(qrRequests).toBe(0)
  })

  test('prewarms a protected QR, reuses it across opens and releases it on page teardown', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop', 'Header QR controls are intentionally hidden below 640px.')
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [supportItem] })
    await page.addInitScript(() => {
      const state = { aborted: 0, created: [] as string[], revoked: [] as string[] }
      ;(window as Window & { __qrRequestLifecycle?: typeof state }).__qrRequestLifecycle = state
      const nativeFetch = window.fetch.bind(window)
      window.fetch = (input, init) => {
        const url = input instanceof Request ? input.url : String(input)
        if (url.includes('/settings/header-navigation/') && init?.signal) {
          init.signal.addEventListener('abort', () => { state.aborted += 1 }, { once: true })
        }
        return nativeFetch(input, init)
      }
      const createURL = URL.createObjectURL.bind(URL)
      URL.createObjectURL = (blob) => {
        const url = createURL(blob)
        state.created.push(url)
        return url
      }
      const revokeURL = URL.revokeObjectURL.bind(URL)
      URL.revokeObjectURL = (url) => {
        state.revoked.push(url)
        revokeURL(url)
      }
    })
    let releaseFirstRequest!: () => void
    const firstRequestGate = new Promise<void>((resolve) => { releaseFirstRequest = resolve })
    let qrRequests = 0
    await page.route(`**${qrPath}`, async (route) => {
      qrRequests += 1
      expect(route.request().headers().authorization).toBe('Bearer visual-fixture-token')
      if (qrRequests === 1) await firstRequestGate
      await route.fallback()
    })
    await page.goto('http://127.0.0.1:4173/dashboard')
    const openQr = page.getByTestId('header-qr-support-group')
    await expect(openQr).toBeVisible()
    await expect.poll(() => qrRequests).toBe(1)
    await openQr.click()
    const dialog = page.getByRole('dialog', { name: supportItem.label })
    await expect(dialog.getByTestId('community-qr-loading')).toBeVisible()
    await expect.poll(() => qrRequests).toBe(1)
    await dialog.getByRole('button', { name: /关闭|Close/ }).click()
    await expect(dialog).toHaveCount(0)
    expect(await page.evaluate(() =>
      (window as Window & { __qrRequestLifecycle?: { aborted: number } }).__qrRequestLifecycle?.aborted,
    )).toBe(0)

    releaseFirstRequest()
    await expect.poll(() => page.evaluate(() =>
      (window as Window & { __qrRequestLifecycle?: { created: string[] } }).__qrRequestLifecycle?.created.length,
    )).toBe(1)
    await openQr.click()
    const image = dialog.getByTestId('community-qr-image')
    await expect(image).toBeVisible()
    await expect.poll(() => image.evaluate((node) => (node as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    expect(qrRequests).toBe(1)
    await expect(dialog.getByTestId('community-qr-loading')).toHaveCount(0)
    await dialog.getByRole('button', { name: /关闭|Close/ }).click()
    let urls = await page.evaluate(() =>
      (window as Window & {
        __qrRequestLifecycle?: { created: string[]; revoked: string[] }
      }).__qrRequestLifecycle,
    )
    expect(urls?.created).toHaveLength(1)
    expect(urls?.revoked).toHaveLength(0)
    await page.evaluate(() => window.dispatchEvent(new Event('pagehide')))
    urls = await page.evaluate(() =>
      (window as Window & {
        __qrRequestLifecycle?: { created: string[]; revoked: string[] }
      }).__qrRequestLifecycle,
    )
    expect(urls?.revoked).toEqual(urls?.created)
  })

  test('retries server and image decode failures without leaving a permanent loading state', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop', 'Header QR controls are intentionally hidden below 640px.')
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [supportItem] })
    let attempt = 0
    await page.route(`**${qrPath}`, async (route) => {
      attempt += 1
      if (attempt === 1) {
        await route.fulfill({ status: 503, contentType: 'application/json', body: '{"message":"unavailable"}' })
      } else if (attempt === 2) {
        await route.fulfill({ status: 200, contentType: 'image/png', body: 'not a decodable PNG' })
      } else {
        await route.fallback()
      }
    })
    await page.goto('http://127.0.0.1:4173/dashboard')
    await page.getByTestId('header-qr-support-group').click()
    const dialog = page.getByRole('dialog', { name: supportItem.label })
    for (const expectedAttempt of [1, 2]) {
      await expect(dialog.getByTestId('community-qr-error')).toBeVisible()
      await expect(dialog.getByTestId('community-qr-loading')).toHaveCount(0)
      expect(attempt).toBe(expectedAttempt)
      await dialog.getByTestId('community-qr-retry').click()
    }
    await expect(dialog.getByTestId('community-qr-image')).toBeVisible()
    await expect(dialog.getByTestId('community-qr-error')).toHaveCount(0)
    expect(attempt).toBe(3)
  })

  test('times out stalled QR requests and image decodes without accepting their late results', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop', 'Header QR controls are intentionally hidden below 640px.')
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [supportItem] })
    await page.addInitScript(() => {
      const nativeDecode = HTMLImageElement.prototype.decode
      let delayed = false
      HTMLImageElement.prototype.decode = function () {
        const decoded = nativeDecode.call(this)
        if (!this.src.startsWith('blob:') || delayed) return decoded
        delayed = true
        return decoded.then(() => new Promise<void>((resolve) => {
          ;(window as Window & { __releaseQrDecode?: () => void }).__releaseQrDecode = resolve
        }))
      }
    })
    let releaseStalledRequest!: () => void
    const stalledRequestGate = new Promise<void>((resolve) => { releaseStalledRequest = resolve })
    let attempt = 0
    await page.route(`**${qrPath}`, async (route) => {
      attempt += 1
      if (attempt === 1) await stalledRequestGate
      await route.fallback()
    })
    await page.clock.install()
    await page.goto('http://127.0.0.1:4173/dashboard')
    await expect(page.getByTestId('header-qr-support-group')).toBeVisible()
    await page.getByTestId('header-qr-support-group').click()
    const dialog = page.getByRole('dialog', { name: supportItem.label })
    await expect(dialog.getByTestId('community-qr-loading')).toBeVisible()
    await page.clock.fastForward(15_100)
    await expect(dialog.getByTestId('community-qr-error')).toBeVisible()
    await expect(dialog.getByTestId('community-qr-loading')).toHaveCount(0)
    await dialog.getByTestId('community-qr-retry').click()
    await expect.poll(() => page.evaluate(() =>
      typeof (window as Window & { __releaseQrDecode?: () => void }).__releaseQrDecode,
    )).toBe('function')
    await expect(dialog.getByTestId('community-qr-loading')).toBeVisible()
    await page.clock.fastForward(15_100)
    await expect(dialog.getByTestId('community-qr-error')).toBeVisible()
    await dialog.getByTestId('community-qr-retry').click()
    await expect(dialog.getByTestId('community-qr-image')).toBeVisible()
    const imageURL = await dialog.getByTestId('community-qr-image').getAttribute('src')
    releaseStalledRequest()
    await page.evaluate(() =>
      (window as Window & { __releaseQrDecode?: () => void }).__releaseQrDecode?.(),
    )
    await expect(dialog.getByTestId('community-qr-image')).toHaveAttribute('src', imageURL!)
    expect(attempt).toBe(3)
  })
})

test.describe('Console header custom iframe menu contracts', () => {
  const customMenuItems = [
    { id: 'user-header', label: '用户帮助', icon_svg: '', url: '', visibility: 'user' as const, placement: 'header' as const, navigation_type: 'qr' as const, qr_description: '扫码查看用户帮助', qr_image: `data:image/png;base64,${communityQrPngBase64}`, sort_order: 1 },
    { id: 'user-both', label: '用户双栏', icon_svg: '', url: 'https://example.com/user-both', visibility: 'user' as const, placement: 'both' as const, sort_order: 2 },
    { id: 'admin-header', label: '管理工具', icon_svg: '', url: '', visibility: 'admin' as const, placement: 'header' as const, navigation_type: 'qr' as const, qr_description: '扫码查看管理工具', qr_image: `data:image/png;base64,${communityQrPngBase64}`, sort_order: 3 },
    { id: 'admin-sidebar', label: '侧边工具', icon_svg: '', url: 'https://example.com/sidebar', visibility: 'admin' as const, placement: 'sidebar' as const, sort_order: 4 },
    { id: 'admin-both', label: '管理双栏', icon_svg: '', url: 'https://example.com/admin-both', visibility: 'admin' as const, placement: 'both' as const, sort_order: 5 },
    { id: 'all-header', label: '共享顶部', icon_svg: '', url: '', visibility: 'all' as const, placement: 'header' as const, navigation_type: 'qr' as const, qr_description: '扫码查看共享内容', qr_image: `data:image/png;base64,${communityQrPngBase64}`, sort_order: 6 },
    { id: 'all-sidebar', label: '共享侧边', icon_svg: '', url: 'https://example.com/all-sidebar', visibility: 'all' as const, placement: 'sidebar' as const, sort_order: 7 },
    { id: 'all-both', label: '共享双栏', icon_svg: '', url: 'https://example.com/all-both', visibility: 'all' as const, placement: 'both' as const, sort_order: 8 },
  ]

  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
  })

  test('refreshes an expired access token through the existing API client before showing private navigation', async ({ page }) => {
    const item = {
      id: 'refresh-private', label: '刷新后的管理入口', icon_svg: '',
      url: 'https://embed.01yapi.test/refresh-private',
      visibility: 'admin' as const, placement: 'both' as const, sort_order: 0,
    }
    await seedConsole(page, 'v2', { customMenuItems: [item] })
    await page.addInitScript(() => localStorage.setItem('refresh_token', 'navigation-test-refresh'))
    let navigationRequests = 0
    let refreshRequests = 0
    await page.route('**/api/v1/auth/refresh', async (route) => {
      refreshRequests += 1
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify({ code: 0, data: {
          access_token: 'navigation-test-renewed',
          refresh_token: 'navigation-test-refresh-renewed',
          expires_in: 3600,
        } }),
      })
    })
    await page.route('**/api/v1/admin/settings*', async (route) => {
      if (new URL(route.request().url()).searchParams.get('scope') !== 'navigation') {
        await route.fallback()
        return
      }
      navigationRequests += 1
      if (route.request().headers().authorization !== 'Bearer navigation-test-renewed') {
        await route.fulfill({ status: 401, contentType: 'application/json', body: '{"code":401,"message":"Token expired"}' })
        return
      }
      await route.fallback()
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await expect(page.getByTestId('header-custom-menu-refresh-private')).toBeVisible()
    expect(navigationRequests).toBe(2)
    expect(refreshRequests).toBe(1)
  })

  test('retains an iframe load that completes before administrator navigation metadata', async ({ page }) => {
    const item = {
      id: 'early-loaded', label: '提前加载页面', icon_svg: '',
      url: 'https://embed.01yapi.test/early-loaded',
      visibility: 'all' as const, placement: 'both' as const, sort_order: 0,
    }
    await seedConsole(page, 'v2', { customMenuItems: [item] })
    let releaseMetadata!: () => void
    const metadataGate = new Promise<void>((resolve) => { releaseMetadata = resolve })
    let heldMetadataRequests = 0
    await page.route('**/api/v1/admin/settings*', async (route) => {
      if (route.request().method() === 'GET' && (
        new URL(route.request().url()).searchParams.get('scope') === 'navigation' ||
        route.request().resourceType() === 'fetch'
      )) {
        heldMetadataRequests += 1
        await metadataGate
      }
      await route.fallback()
    })
    await page.route('https://embed.01yapi.test/early-loaded*', (route) => route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><html><body>early-loaded-content</body></html>',
    }))
    await page.goto('http://127.0.0.1:4173/custom/early-loaded')
    const frame = page.locator('main iframe.custom-embed-frame')
    await expect(page.frameLocator('main iframe.custom-embed-frame').getByText('early-loaded-content'))
      .toBeAttached()
    expect(heldMetadataRequests).toBeGreaterThan(0)

    releaseMetadata()
    await expect(page.getByTestId('header-custom-menu-early-loaded')).toBeVisible()
    await expect(page.getByTestId('custom-page-loading')).toHaveCount(0)
    await expect(frame).toHaveCSS('visibility', 'visible')
  })

  test('recovers a regular-user custom page after the startup public settings request fails', async ({ page }) => {
    const item = {
      id: 'image-tutorial', label: '生图教程', icon_svg: '',
      url: 'https://embed.01yapi.test/image-tutorial',
      visibility: 'all' as const, placement: 'sidebar' as const, sort_order: 0,
    }
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [item] })
    let publicSettingsRequests = 0
    await page.route('**/api/v1/settings/public', async (route) => {
      publicSettingsRequests += 1
      if (publicSettingsRequests === 1) {
        await route.fulfill({ status: 503, contentType: 'application/json', body: '{"message":"unavailable"}' })
        return
      }
      await route.fallback()
    })
    await page.route('https://embed.01yapi.test/image-tutorial*', (route) => route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><html><body>image tutorial ready</body></html>',
    }))

    await page.goto('http://127.0.0.1:4173/custom/image-tutorial')

    await expect(page.getByTestId('sidebar-custom-menu-image-tutorial')).toBeVisible()
    await expect(page.frameLocator('main iframe.custom-embed-frame').getByText('image tutorial ready'))
      .toBeVisible()
    expect(publicSettingsRequests).toBeGreaterThanOrEqual(2)
  })

  test('loads administrator menus with one narrow settings request even when payment config is stalled', async ({ page }) => {
    const privatePage = {
      id: 'private-tool', label: '专用管理工具', icon_svg: '',
      url: 'https://embed.01yapi.test/private-tool',
      visibility: 'admin' as const, placement: 'both' as const, sort_order: 0,
    }
    await seedConsole(page, 'v2', {
      siteLogo: `data:image/png;base64,${communityQrPngBase64}`,
      communityQrImage: `data:image/png;base64,${communityQrPngBase64}`,
      customMenuItems: [privatePage],
    })
    let releasePayment!: () => void
    const paymentGate = new Promise<void>((resolve) => { releasePayment = resolve })
    let releaseNavigation!: () => void
    const navigationGate = new Promise<void>((resolve) => { releaseNavigation = resolve })
    await page.route('**/api/v1/admin/settings*', async (route) => {
      if (new URL(route.request().url()).searchParams.get('scope') === 'navigation') {
        await navigationGate
      }
      await route.fallback()
    })
    let paymentRequests = 0
    await page.route('**/api/v1/admin/payment/config*', async (route) => {
      paymentRequests += 1
      await paymentGate
      await route.fulfill({ status: 503, contentType: 'application/json', body: '{"message":"unavailable"}' })
    })
    await page.route('https://embed.01yapi.test/private-tool*', (route) => route.fulfill({
      contentType: 'text/html', body: '<!doctype html><html><body>private tool ready</body></html>',
    }))
    const settingsReads: URL[] = []
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.pathname === '/api/v1/admin/settings' && request.method() === 'GET') {
        settingsReads.push(url)
      }
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const opsLink = page.locator('aside:not([data-zero-one-sidebar-continuity]) nav a[href="/admin/ops"]')
    await expect(opsLink).toBeVisible()
    await page.evaluate(() => window.dispatchEvent(new Event('ops-monitoring-disabled')))
    await expect(opsLink).toBeHidden()
    releaseNavigation()
    await expect(page.getByTestId('header-custom-menu-private-tool')).toBeVisible()
    await page.getByTestId('header-custom-menu-private-tool').click()
    await expect(page.frameLocator('main iframe.custom-embed-frame').getByText('private tool ready'))
      .toBeVisible()
    await expect.poll(() => paymentRequests).toBe(1)
    await expect(opsLink).toBeHidden()
    expect(settingsReads.map((url) => url.searchParams.get('scope'))).toEqual(['navigation'])

    releasePayment()
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveCSS('visibility', 'visible')
    const fullSettings = page.waitForResponse((response) => {
      const url = new URL(response.url())
      return response.request().method() === 'GET' && url.pathname === '/api/v1/admin/settings' &&
        !url.searchParams.has('scope')
    })
    await page.locator('aside a[href="/admin/settings"]').click()
    const fullPayload = await (await fullSettings).json()
    expect(fullPayload.data.site_logo).toBe(`data:image/png;base64,${communityQrPngBase64}`)
    expect(fullPayload.data.community_qr_image).toBe(`data:image/png;base64,${communityQrPngBase64}`)
    await expect(page.getByTestId('header-navigation-settings')).toBeVisible()
  })

  test('ignores a stale frame load after a fast menu switch and never preloads external pages', async ({ page }) => {
    const items = ['first', 'second'].map((id, sort_order) => ({
      id, label: `页面${id}`, icon_svg: '', url: `https://embed.01yapi.test/${id}`,
      visibility: 'all' as const, placement: 'both' as const, sort_order,
    }))
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: items, theme: 'dark' })
    let releaseFirst!: () => void
    let releaseSecond!: () => void
    const gates = {
      '/first': new Promise<void>((resolve) => { releaseFirst = resolve }),
      '/second': new Promise<void>((resolve) => { releaseSecond = resolve }),
    }
    const loadedPaths: string[] = []
    await page.route('https://embed.01yapi.test/**', async (route) => {
      const path = new URL(route.request().url()).pathname as keyof typeof gates
      loadedPaths.push(path)
      await gates[path]
      await route.fulfill({ contentType: 'text/html', body: `<!doctype html><html><body>${path} ready</body></html>` })
    })
    await page.goto('http://127.0.0.1:4173/dashboard')
    await expect(page.getByTestId('header-custom-menu-first')).toBeVisible()
    expect(loadedPaths).toEqual([])
    await page.evaluate(() => {
      const state = window as typeof window & { __CUSTOM_PAGE_FRAME_INSERTIONS__?: number }
      state.__CUSTOM_PAGE_FRAME_INSERTIONS__ = 0
      new MutationObserver((records) => {
        for (const record of records) {
          for (const node of record.addedNodes) {
            if (!(node instanceof Element)) continue
            if (node.matches('iframe.custom-embed-frame')) state.__CUSTOM_PAGE_FRAME_INSERTIONS__! += 1
            state.__CUSTOM_PAGE_FRAME_INSERTIONS__! += node.querySelectorAll('iframe.custom-embed-frame').length
          }
        }
      }).observe(document.querySelector('#app')!, { childList: true, subtree: true })
    })
    await page.getByTestId('header-custom-menu-first').click()
    const frame = page.locator('main iframe.custom-embed-frame')
    await expect(frame).toHaveAttribute('src', /\/first\?/)
    await expect.poll(() => loadedPaths).toEqual(['/first'])
    await expect.poll(() => page.evaluate(() => (
      window as typeof window & { __CUSTOM_PAGE_FRAME_INSERTIONS__?: number }
    ).__CUSTOM_PAGE_FRAME_INSERTIONS__)).toBe(1)
    const oldFrame = await frame.elementHandle()
    await page.getByTestId('header-custom-menu-second').click()
    await expect(frame).toHaveAttribute('src', /\/second\?/)
    await expect.poll(() => loadedPaths).toEqual(['/first', '/second'])
    await oldFrame!.evaluate((element) => element.dispatchEvent(new Event('load')))
    releaseFirst()
    await expect(page.getByTestId('custom-page-loading')).toBeVisible()
    await expect(frame).toHaveCSS('visibility', 'hidden')

    releaseSecond()
    await expect(page.frameLocator('main iframe.custom-embed-frame').getByText('/second ready')).toBeVisible()
    await expect(page.getByTestId('custom-page-loading')).toHaveCount(0)
    await page.getByTestId('header-custom-menu-second').click()
    await expect(frame).toHaveCSS('visibility', 'visible')
    expect(loadedPaths).toEqual(['/first', '/second'])
  })

  test('offers a slow-page retry after fifteen seconds and accepts a later successful load', async ({ page }) => {
    const item = {
      id: 'slow-page', label: '缓慢页面', icon_svg: '', url: 'https://embed.01yapi.test/slow-page',
      visibility: 'all' as const, placement: 'both' as const, sort_order: 0,
    }
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [item] })
    let releaseFirst!: () => void
    let releaseRetry!: () => void
    const firstGate = new Promise<void>((resolve) => { releaseFirst = resolve })
    const retryGate = new Promise<void>((resolve) => { releaseRetry = resolve })
    let attempts = 0
    await page.route('https://embed.01yapi.test/slow-page*', async (route) => {
      attempts += 1
      await (attempts === 1 ? firstGate : retryGate)
      await route.fulfill({
        contentType: 'text/html', body: '<!doctype html><html><body>slow page eventually ready</body></html>',
      })
    })
    await page.goto('http://127.0.0.1:4173/dashboard')
    await expect(page.getByTestId('header-custom-menu-slow-page')).toBeVisible()
    await page.clock.install()
    await page.getByTestId('header-custom-menu-slow-page').click()
    const frame = page.locator('main iframe.custom-embed-frame')
    const loading = page.getByTestId('custom-page-loading')
    const slow = page.getByTestId('custom-page-slow')
    await expect(loading).toBeVisible()
    await expect.poll(() => attempts).toBe(1)
    await page.clock.fastForward(15_100)
    await expect(slow).toContainText('加载较慢')
    await expect(frame).toHaveCSS('visibility', 'hidden')
    await expect(page.locator('main .custom-open-fab'))
      .toHaveAttribute('href', /https:\/\/embed\.01yapi\.test\/slow-page\?/)
    await page.getByTestId('custom-page-retry').click()
    await expect.poll(() => attempts).toBe(2)
    await expect(slow).toHaveCount(0)
    releaseFirst()
    await expect(loading).toBeVisible()
    await page.clock.fastForward(15_100)
    await expect(slow).toContainText('加载较慢')
    releaseRetry()
    await expect(page.frameLocator('main iframe.custom-embed-frame').getByText('slow page eventually ready'))
      .toBeVisible()
    await expect(loading).toHaveCount(0)
    await expect(slow).toHaveCount(0)
    await expect(frame).toHaveCSS('visibility', 'visible')
    expect(attempts).toBe(2)
  })

  test('regular users see only regular-user header pages', async ({ page }) => {
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems })
    await page.goto('http://127.0.0.1:4173/dashboard')

    await expect(page.getByTestId('header-qr-user-header')).toBeVisible()
    await expect(page.getByTestId('header-custom-menu-user-both')).toBeVisible()
    await expect(page.getByTestId('header-qr-all-header')).toBeVisible()
    await expect(page.getByTestId('header-custom-menu-all-both')).toBeVisible()
    await expect(page.getByTestId('header-qr-admin-header')).toHaveCount(0)
    await expect(page.locator('aside a[href="/custom/admin-sidebar"]')).toHaveCount(0)
    await expect(page.locator('aside a[href="/custom/user-header"]')).toBeHidden()
    await expect(page.locator('aside a[href="/custom/user-both"]')).toBeVisible()
    await expect(page.getByTestId('sidebar-custom-menu-all-header')).toHaveCount(0)
    await expect(page.getByTestId('sidebar-custom-menu-all-sidebar')).toBeVisible()
    await expect(page.getByTestId('sidebar-custom-menu-all-both')).toBeVisible()
    expect(await page.locator('aside a[href^="/custom/"]:visible').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')),
    )).toEqual([
      '/custom/user-both',
      '/custom/all-sidebar',
      '/custom/all-both',
    ])
  })

  test('administrators see admin header pages and can persist placement', async ({ page }) => {
    await seedConsole(page, 'v2', { customMenuItems })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')

    await expect(page.getByTestId('header-qr-admin-header')).toBeVisible()
    await expect(page.getByTestId('header-custom-menu-admin-both')).toBeVisible()
    await expect(page.getByTestId('header-qr-all-header')).toBeVisible()
    await expect(page.getByTestId('header-custom-menu-all-both')).toBeVisible()
    await expect(page.getByTestId('header-qr-user-header')).toHaveCount(0)
    await expect(page.locator('aside a[href="/custom/user-header"]')).toBeHidden()
    await expect(page.locator('aside a[href="/custom/user-both"]')).toBeHidden()
    await expect(page.locator('aside a[href="/custom/admin-header"]')).toBeHidden()
    await expect(page.locator('aside a[href="/custom/admin-sidebar"]')).toBeVisible()
    await expect(page.locator('aside a[href="/custom/admin-both"]')).toBeVisible()
    await expect(page.getByTestId('sidebar-custom-menu-all-header')).toHaveCount(0)
    await expect(page.getByTestId('sidebar-custom-menu-all-sidebar')).toBeVisible()
    await expect(page.getByTestId('sidebar-custom-menu-all-both')).toBeVisible()
    expect(await page.locator('aside a[href^="/custom/"]:visible').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')),
    )).toEqual([
      '/custom/admin-sidebar',
      '/custom/admin-both',
      '/custom/all-sidebar',
      '/custom/all-both',
    ])

    await page.goto('http://127.0.0.1:4173/admin/settings')
    await expect(page.getByTestId('custom-menu-placement-2')).toBeHidden()
    await expect(page.getByTestId('custom-menu-placement-4')).toHaveValue('both')
    const sharedVisibility = page.getByTestId('custom-menu-visibility-7')
    await expect(sharedVisibility.locator('option[value="all"]')).toHaveText('普通用户和管理员都可见')
    await expect(sharedVisibility).toHaveValue('all')
    await expect(page.getByTestId('header-navigation-name-1')).toHaveValue('管理工具')
    await page.getByTestId('header-navigation-visibility-1').selectOption('all')
    const settingsRequest = page.waitForRequest((request) =>
      request.method() === 'PUT' && new URL(request.url()).pathname === '/api/v1/admin/settings',
    )
    await page.locator('button[data-zero-one-settings-save="true"]').click()
    const submitted = (await settingsRequest).postDataJSON() as {
      custom_menu_items: Array<{ id: string; placement?: string; visibility?: string }>
    }
    expect(submitted.custom_menu_items.find((item) => item.id === 'admin-header')?.placement)
      .toBe('header')
    expect(submitted.custom_menu_items.find((item) => item.id === 'admin-header')?.visibility)
      .toBe('all')
    expect(submitted.custom_menu_items.find((item) => item.id === 'admin-both')?.placement)
      .toBe('both')
    expect(submitted.custom_menu_items.find((item) => item.id === 'all-header')?.visibility)
      .toBe('all')
    for (const key of [
      'affiliate_enabled',
      'affiliate_rebate_rate',
      'affiliate_rebate_freeze_hours',
      'affiliate_rebate_duration_days',
      'affiliate_rebate_per_invitee_cap',
      'affiliate_admin_recharge_enabled',
    ]) {
      expect(submitted).not.toHaveProperty(key)
    }
  })

  test('keeps a saved menu label and URL when an older administrator settings GET returns', async ({ page }) => {
    const initialItems = [{
      id: 'saved-menu',
      label: '旧入口',
      icon_svg: '',
      url: 'https://embed.01yapi.test/original-menu',
      visibility: 'all' as const,
      placement: 'both' as const,
      sort_order: 0,
    }]
    await seedConsole(page, 'v2', { customMenuItems: initialItems })
    const embeddedRequests: string[] = []
    await page.route('https://embed.01yapi.test/**', async (route) => {
      const path = new URL(route.request().url()).pathname
      embeddedRequests.push(path)
      await route.fulfill({ contentType: 'text/html', body: `<!doctype html><html><body>${path}</body></html>` })
    })
    let releaseStaleSettings!: () => void
    const staleSettingsGate = new Promise<void>((resolve) => {
      releaseStaleSettings = resolve
    })
    let releaseFreshSettings!: () => void
    const freshSettingsGate = new Promise<void>((resolve) => { releaseFreshSettings = resolve })
    let saveStarted = false
    let staleReads = 0
    await page.route('**/api/v1/admin/settings*', async (route) => {
      if (route.request().method() === 'PUT') {
        saveStarted = true
        await route.fallback()
        return
      }
      if (route.request().method() === 'GET' && (
        new URL(route.request().url()).searchParams.get('scope') === 'navigation' ||
        route.request().resourceType() === 'fetch'
      )) {
        if (saveStarted) {
          await freshSettingsGate
          await route.fallback()
          return
        }
        staleReads += 1
        await staleSettingsGate
        await route.fulfill({
          status: 200,
          contentType: 'application/json; charset=utf-8',
          body: JSON.stringify({
            code: 0,
            message: 'ok',
            data: { custom_menu_items: initialItems },
          }),
        })
        return
      }
      await route.fallback()
    })

    await page.goto('http://127.0.0.1:4173/admin/settings')
    await page.getByPlaceholder('如：帮助中心').first().fill('新入口')
    await page.getByPlaceholder('https://example.com/page').first().fill('https://embed.01yapi.test/updated-menu')
    await expect.poll(() => staleReads).toBeGreaterThan(0)
    const settingsResponse = page.waitForResponse((response) =>
      response.request().method() === 'PUT' &&
      new URL(response.url()).pathname === '/api/v1/admin/settings',
    )
    await page.getByRole('button', { name: '保存设置', exact: true }).click()
    const savedResponse = await settingsResponse
    const savedPayload = await savedResponse.json()
    expect(savedPayload.data.custom_menu_items).toContainEqual(expect.objectContaining({
      id: 'saved-menu', label: '新入口', url: 'https://embed.01yapi.test/updated-menu', placement: 'both',
    }))
    const menuLink = page.locator('aside a[href="/custom/saved-menu"]:visible')
    await test.step('successful save updates the current menu before the old GET returns', async () => {
      await expect(menuLink).toContainText('新入口')
    })

    releaseStaleSettings()
    await page.waitForTimeout(100)
    await test.step('the old GET cannot overwrite the saved menu', async () => {
      await expect(menuLink).toContainText('新入口')
    })
    await expect(menuLink).not.toContainText('旧入口')
    releaseFreshSettings()
    await menuLink.click()
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute('src', /\/updated-menu\?/)
    await expect(page.frameLocator('main iframe.custom-embed-frame').getByText('/updated-menu')).toBeVisible()
    await expect(page.locator('header').getByRole('heading', { name: '新入口', exact: true })).toBeVisible()
    expect(embeddedRequests).toEqual(['/updated-menu'])
  })

  test('keeps injected shared sidebar rows visible during administrator navigation', async ({ page }) => {
    await seedConsole(page, 'v2', { customMenuItems })
    await page.goto(`${affiliateConsoleOrigin}/admin/dashboard`)
    await expect(page.getByTestId('sidebar-custom-menu-all-sidebar')).toBeVisible()
    await expect(page.getByTestId('sidebar-custom-menu-all-both')).toBeVisible()

    const frames = await page.evaluate(async () => {
      const link = document.querySelector('aside a.sidebar-link[href="/admin/users"]')
      if (!(link instanceof HTMLAnchorElement)) throw new Error('missing users sidebar link')
      link.click()

      return await new Promise<number[]>((resolve) => {
        const counts: number[] = []
        let startedAt = 0
        const sample = (now: number) => {
          counts.push([
            document.querySelector('[data-testid="sidebar-custom-menu-all-sidebar"]'),
            document.querySelector('[data-testid="sidebar-custom-menu-all-both"]'),
          ].filter((node) => node instanceof HTMLElement && getComputedStyle(node).display !== 'none').length)
          if (now - startedAt < 120) requestAnimationFrame(sample)
          else resolve(counts)
        }
        const waitForRoute = () => {
          if (window.location.pathname !== '/admin/users') {
            requestAnimationFrame(waitForRoute)
            return
          }
          startedAt = performance.now()
          requestAnimationFrame(sample)
        }
        requestAnimationFrame(waitForRoute)
      })
    })

    await expect(page).toHaveURL(`${affiliateConsoleOrigin}/admin/users`)
    expect(frames.length).toBeGreaterThan(0)
    expect(frames.every((count) => count === 2)).toBe(true)
  })

  test('uses the shared Vue Router bridge for injected header and sidebar links', async ({ page }) => {
    await seedConsole(page, 'v2', { customMenuItems })
    await page.addInitScript(() => {
      ;(window as Window & { __zeroOneHeaderSentinel?: number }).__zeroOneHeaderSentinel = Math.random()
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('zero-one-header-beforeunload', 'true')
      })
    })
    let documentNavigations = 0
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentNavigations += 1
      }
    })

    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    const sentinel = await page.evaluate(
      () => (window as Window & { __zeroOneHeaderSentinel?: number }).__zeroOneHeaderSentinel,
    )
    documentNavigations = 0
    await page.getByTestId('header-custom-menu-admin-both').click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/custom/admin-both')
    await page.goBack()
    await expect(page).toHaveURL('http://127.0.0.1:4173/admin/dashboard')
    await page.getByTestId('sidebar-custom-menu-all-sidebar').click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/custom/all-sidebar')

    expect(documentNavigations).toBe(0)
    expect(await page.evaluate(
      () => (window as Window & { __zeroOneHeaderSentinel?: number }).__zeroOneHeaderSentinel,
    )).toBe(sentinel)
    expect(await page.evaluate(
      () => sessionStorage.getItem('zero-one-header-beforeunload'),
    )).toBeNull()
  })

  test('dashboard purchase credits follows the configured online recharge page', async ({ page }) => {
    const rechargeItem = {
      id: 'online-recharge',
      label: '在线充值',
      icon_svg: '',
      url: 'https://embed.01yapi.test/recharge',
      visibility: 'user' as const,
      placement: 'both' as const,
      sort_order: 0,
    }
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: [rechargeItem] })
    await page.route('https://embed.01yapi.test/**', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'text/html; charset=utf-8',
        body: '<!doctype html><html><body>online recharge</body></html>',
      }),
    )
    let documentNavigations = 0
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentNavigations += 1
      }
    })

    await page.goto('http://127.0.0.1:4173/dashboard')
    documentNavigations = 0
    const action = page.getByTestId('dashboard-purchase-credits')
    await expect(action).toBeVisible()
    await expect(action).toContainText('购买额度')
    await action.click()

    await expect(page).toHaveURL('http://127.0.0.1:4173/custom/online-recharge')
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute(
      'src',
      /\/recharge(?:\?|$)/,
    )
    expect(documentNavigations).toBe(0)
  })

  test('keeps purchase credits available when an administrator opens the user dashboard', async ({ page }) => {
    const rechargeItem = {
      id: 'shared-online-recharge',
      label: '在线充值',
      icon_svg: '',
      url: 'https://embed.01yapi.test/shared-recharge',
      visibility: 'all' as const,
      placement: 'both' as const,
      sort_order: 0,
    }
    await seedConsole(page, 'v2', { customMenuItems: [rechargeItem] })
    await page.goto('http://127.0.0.1:4173/dashboard')

    await expect(page.getByTestId('dashboard-purchase-credits')).toBeVisible()
  })

  test('switches custom iframe content between header and sidebar menu links', async ({ page }) => {
    const switchingItems = [
      {
        id: 'radar',
        label: '雷达检测中心',
        icon_svg: '',
        url: 'https://embed.01yapi.test/radar',
        visibility: 'all' as const,
        placement: 'both' as const,
        sort_order: 0,
      },
      {
        id: 'tutorial',
        label: '接入教程',
        icon_svg: '',
        url: 'https://embed.01yapi.test/tutorial',
        visibility: 'user' as const,
        placement: 'sidebar' as const,
        sort_order: 1,
      },
    ]
    await seedConsole(page, 'v2', { user: regularUser, customMenuItems: switchingItems })
    let releaseTutorial: (() => void) | undefined
    const tutorialRelease = new Promise<void>((resolve) => {
      releaseTutorial = resolve
    })
    await page.route('https://embed.01yapi.test/**', async (route) => {
      if (new URL(route.request().url()).pathname === '/tutorial') {
        await tutorialRelease
      }
      await route.fulfill({
        status: 200,
        contentType: 'text/html; charset=utf-8',
        body: '<!doctype html><html><body>custom page</body></html>',
      })
    })
    await page.goto('http://127.0.0.1:4173/dashboard')

    await page.getByTestId('header-custom-menu-radar').click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/custom/radar')
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute(
      'src',
      /\/radar(?:\?|$)/,
    )
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute(
      'data-zero-one-custom-page-id',
      'radar',
    )
    await page.getByTestId('header-custom-menu-radar').click()
    await expect(page.getByTestId('custom-page-loading')).toHaveCount(0)
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveCSS('visibility', 'visible')

    const tutorialLink = page.locator('aside a[href="/custom/tutorial"]:visible')
    await expect(tutorialLink).toHaveCount(1)
    await tutorialLink.click()
    await expect(page).toHaveURL('http://127.0.0.1:4173/custom/tutorial')
    const loading = page.getByTestId('custom-page-loading')
    await expect(loading).toBeVisible()
    await expect(loading).toHaveText('正在全力加载中，请稍等！')
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveCSS('visibility', 'hidden')

    releaseTutorial?.()
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute(
      'src',
      /\/tutorial(?:\?|$)/,
    )
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute(
      'data-zero-one-custom-page-id',
      'tutorial',
    )
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveAttribute(
      'title',
      '接入教程',
    )
    await expect(loading).toHaveCount(0)
    await expect(page.locator('main iframe.custom-embed-frame')).toHaveCSS('visibility', 'visible')
  })

  test('keeps a newly added custom page in the bottom save request', async ({ page }) => {
    await seedConsole(page, 'v2', { customMenuItems })
    await page.goto('http://127.0.0.1:4173/admin/settings')

    const section = page.getByRole('heading', { name: '自定义菜单页面' }).locator('..').locator('..')
    await section.getByRole('button', { name: '添加菜单项' }).click()
    await section.getByPlaceholder('如：帮助中心').last().fill('新菜单')
    await section.getByPlaceholder('https://example.com/page').last().fill('https://example.com/new')
    await section.locator('select:not([data-zero-one-header-menu-placement])').last().selectOption('all')
    const placementSelects = section.locator('[data-zero-one-header-menu-placement]')
    await placementSelects.last().selectOption('both')

    const settingsRequest = page.waitForRequest((request) =>
      request.method() === 'PUT' && new URL(request.url()).pathname === '/api/v1/admin/settings',
    )
    await page.getByRole('button', { name: '保存设置', exact: true }).click()
    const submitted = (await settingsRequest).postDataJSON() as {
      custom_menu_items: Array<{ id: string; label: string; placement?: string; url: string }>
    }
    expect(submitted.custom_menu_items).toContainEqual(expect.objectContaining({
      id: '',
      label: '新菜单',
      placement: 'both',
      url: 'https://example.com/new',
    }))
    await expect(page.locator('aside a[href="/custom/generated-menu-8"]:visible')).toHaveCount(1)
    await expect(page.getByTestId('header-custom-menu-generated-menu-8')).toBeVisible()
  })

  test('settles the custom-menu settings description without repeated child mutations', async ({ page }) => {
    await seedConsole(page, 'v2', { customMenuItems })
    await page.addInitScript(() => {
      const nativeRequestAnimationFrame = window.requestAnimationFrame.bind(window)
      const state = window as Window & {
        __zeroOneAdapterFrames?: { affiliate: number; header: number }
      }
      state.__zeroOneAdapterFrames = { affiliate: 0, header: 0 }
      window.requestAnimationFrame = (callback: FrameRequestCallback) => {
        if (callback.name === 'scanAffiliateAdmin') state.__zeroOneAdapterFrames!.affiliate += 1
        if (callback.name === 'scan') state.__zeroOneAdapterFrames!.header += 1
        return nativeRequestAnimationFrame(callback)
      }
    })
    await page.goto('http://127.0.0.1:4173/admin/settings')
    await expect(page.getByTestId('header-navigation-settings')).toBeVisible()
    await expect(page.getByTestId('custom-menu-placement-0')).toBeHidden()
    const description = page.getByRole('heading', { name: '自定义菜单页面' })
      .locator('xpath=following-sibling::p[1]')
    await expect(description).toHaveText(
      '添加自定义 iframe 页面到侧边栏、顶部导航或同时显示在两处。每个页面可以选择普通用户、管理员或全部登录用户可见。',
    )
    await page.waitForTimeout(1_000)
    await description.evaluate((node) => {
      const state = { child: node.firstChild, mutations: 0, documentMutations: 0 }
      const observer = new MutationObserver((records) => {
        state.mutations += records.filter((record) => record.type === 'childList').length
      })
      observer.observe(node, { childList: true })
      const documentObserver = new MutationObserver((records) => {
        state.documentMutations += records.filter((record) => record.type === 'childList').length
      })
      documentObserver.observe(document.documentElement, { childList: true, subtree: true })
      ;(window as Window & {
        __zeroOneDescriptionState?: {
          child: ChildNode | null
          documentMutations: number
          mutations: number
        }
        __zeroOneAdapterFrames?: { affiliate: number; header: number }
      }).__zeroOneDescriptionState = state
      const frames = (window as Window & {
        __zeroOneAdapterFrames?: { affiliate: number; header: number }
      }).__zeroOneAdapterFrames
      if (frames) {
        frames.affiliate = 0
        frames.header = 0
      }
    })
    await page.waitForTimeout(1_000)
    expect(await description.evaluate((node) => {
      const state = (window as Window & {
        __zeroOneDescriptionState?: {
          child: ChildNode | null
          documentMutations: number
          mutations: number
        }
        __zeroOneAdapterFrames?: { affiliate: number; header: number }
      }).__zeroOneDescriptionState
      const frames = (window as Window & {
        __zeroOneAdapterFrames?: { affiliate: number; header: number }
      }).__zeroOneAdapterFrames
      return {
        adapterFrames: frames,
        documentMutations: state?.documentMutations,
        mutations: state?.mutations,
        sameNode: state?.child === node.firstChild,
      }
    })).toEqual({
      adapterFrames: { affiliate: 0, header: 0 },
      documentMutations: 0,
      mutations: 0,
      sameNode: true,
    })
  })
})

test.describe('Console CC-Switch launch compatibility', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await page.addInitScript(() => {
      const nativeClick = HTMLAnchorElement.prototype.click
      HTMLAnchorElement.prototype.click = function patchedAnchorClick() {
        if (this.href.startsWith('ccswitch://')) {
          const state = window as Window & {
            __ccSwitchLaunches?: string[]
            __throwCcSwitchOpen?: boolean
          }
          if (state.__throwCcSwitchOpen) throw new Error('protocol launch blocked')
          state.__ccSwitchLaunches?.push(this.getAttribute('href') || '')
          return
        }
        return nativeClick.call(this)
      }
      ;(window as Window & { __ccSwitchLaunches?: string[] }).__ccSwitchLaunches = []
      window.open = () => {
        if ((window as Window & { __throwCcSwitchOpen?: boolean }).__throwCcSwitchOpen) {
          throw new Error('protocol launch blocked')
        }
        return null
      }
    })
    await seedConsole(page, 'v2', { user: regularUser })
    await page.goto('http://127.0.0.1:4173/keys')
  })

  test('uses a real protocol link, acknowledges the request, and preserves synchronous failures', async ({ page }) => {
    await expect.poll(() => page.evaluate(() =>
      (window as Window & { __ZERO_ONE_CCSWITCH_LAUNCH_GUARD__?: boolean })
        .__ZERO_ONE_CCSWITCH_LAUNCH_GUARD__,
    )).toBe(true)

    await page.evaluate(() => {
      const trigger = document.createElement('button')
      trigger.dataset.testid = 'ccswitch-launch-fixture'
      trigger.textContent = 'Import to CC-Switch'
      Object.assign(trigger.style, {
        position: 'fixed', top: '80px', left: '300px', zIndex: '2147483647',
      })
      trigger.addEventListener('click', () => {
        window.open('ccswitch://v1/import?resource=provider&app=claude&apiKey=sk-test', '_self')
        const legacyProbe = () => {
          const messageKey = 'keys.ccSwitchNotInstalled'
          const fallback = document.createElement('div')
          fallback.dataset.testid = 'ccswitch-fallback-fixture'
          fallback.textContent = messageKey
          document.body.append(fallback)
        }
        window.setTimeout(legacyProbe, 100)
      })
      document.body.append(trigger)
    })
    await page.getByTestId('ccswitch-launch-fixture').click()

    const launchState = await page.evaluate(() => {
      Object.defineProperty(document, 'hasFocus', {
        configurable: true,
        value: () => true,
      })
      return {
        launches: (window as Window & { __ccSwitchLaunches?: string[] }).__ccSwitchLaunches,
        retainedLinks: document.querySelectorAll('a[href^="ccswitch://"]').length,
      }
    })

    expect(launchState.launches).toHaveLength(1)
    expect(launchState.launches?.[0]).toMatch(/^ccswitch:\/\/v1\/import\?/)
    expect(launchState.retainedLinks).toBe(0)
    await expect(page.locator('[data-zero-one-ccswitch-launch-notice]')).toContainText(
      '正在尝试打开 CC-Switch',
    )
    await page.waitForTimeout(500)
    await expect(page.getByTestId('ccswitch-fallback-fixture')).toHaveCount(0)

    await page.evaluate(() => {
      ;(window as Window & { __throwCcSwitchOpen?: boolean }).__throwCcSwitchOpen = true
      try {
        window.open('ccswitch://v1/import?resource=provider', '_self')
      } catch {
        const fallback = document.createElement('div')
        fallback.dataset.testid = 'ccswitch-synchronous-fallback-fixture'
        document.body.append(fallback)
      }
    })
    await expect(page.getByTestId('ccswitch-synchronous-fallback-fixture')).toHaveCount(1)
  })
})

test.describe('Console repository identity', () => {
  test('administrator menu links to the current GitHub owner', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
    await seedConsole(page)
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await page.getByRole('button', { name: '用户菜单' }).click()

    const repositoryLink = page.getByRole('link', { name: 'GitHub', exact: true })
    await expect(repositoryLink).toBeVisible()
    await expect(repositoryLink).toHaveAttribute('href', 'https://github.com/XiaoSiKe/zero-one-api')
    await expect(repositoryLink).toHaveAttribute('target', '_blank')
    await expect(repositoryLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})

test.describe('Console visual contracts', () => {
  test.beforeEach(async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'chromium-desktop')
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
    await seedConsole(page)
  })

  test('serves the approved recovered Console snapshot', async ({ page }) => {
    const externalRequests: string[] = []
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.hostname !== '127.0.0.1') externalRequests.push(request.url())
    })
    const response = await page.goto('http://127.0.0.1:4173/login')
    expect(response?.status()).toBe(200)
    const html = await response!.text()
    expect(html).toContain('/assets/cn-provider-admin-v4/cn-provider-admin.js')
    expect(html).toContain('/assets/cn-provider-shell-v6/index-9xJBhx8B.js')
    expect(html).toContain('/assets/online-image-v14/online-image.js')
    expect(html).toContain('/assets/zero-one-settings-unified-save-v1.js')
    expect(html).toContain('/assets/zero-one-local-preview-guard-v2.js')
    expect(html).toContain('/assets/zero-one-custom-page-security-v1.js')
    expect(html).toContain('/assets/zero-one-navigation-reconciliation-v1.js?v=3')
    expect(html).toContain('/assets/zero-one-console-parity-v1.js?v=8')
    expect(html).toContain('/assets/zero-one-console-parity-v1.css?v=5')
    expect(html).toContain('/assets/zero-one-community-qr-v1.js?v=14')
    expect(html).toContain('/assets/zero-one-community-qr-v1.css?v=6')
    expect(html).toContain('/assets/zero-one-header-custom-menu-v1.js?v=25')
    expect(html).not.toContain('/assets/zero-one-header-custom-menu-v1.js?v=24')
    expect(html).toContain('/assets/zero-one-header-custom-menu-v1.css?v=7')
    expect(html).toContain('/assets/zero-one-redeem-actions-v1.js?v=1')
    expect(html).toContain('/assets/zero-one-redeem-actions-v1.css?v=1')
    expect(html).toContain('/assets/zero-one-ccswitch-launch-v1.js?v=2')
    expect(html).toContain('/assets/zero-one-affiliate-admin-v1.js?v=6')
    expect(html).toContain('/assets/zero-one-affiliate-admin-v1.css?v=3')
    expect(html).toContain('/assets/zero-one-floating-panels-v1.js?v=3')
    expect(html).not.toContain('/src/main.ts')
    expect(html).not.toMatch(/"site_logo"\s*:\s*"data:/)
    expect(
      await page.evaluate(
        () =>
          (window as Window & { __ZERO_ONE_LOCAL_PREVIEW__?: boolean })
            .__ZERO_ONE_LOCAL_PREVIEW__,
      ),
    ).toBe(true)
    await expect(page).toHaveURL('http://127.0.0.1:4173/admin/dashboard')

    await page.evaluate(() => {
      const link = document.createElement('a')
      link.id = 'external-preview-link'
      link.href = 'https://example.com/production-only'
      link.textContent = 'external preview link'
      document.body.append(link)
    })
    const previewUrlBeforeExternalClick = page.url()
    await page.locator('#external-preview-link').dispatchEvent('click')
    await expect(page).toHaveURL(previewUrlBeforeExternalClick)
    await expect(page.locator('[data-zero-one-local-preview-notice]')).toHaveText(
      '本地预览已阻止外部跳转，当前页面仍连接本地 Docker。',
    )
    expect(externalRequests).toEqual([])
  })

  test('shell expanded in light mode and announcement table', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/announcements')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { name: '公告管理' })).toBeVisible()
    await expect(page.getByText('稳定版本发布公告')).toBeVisible()
    await expect(page).toHaveScreenshot('console-shell-light-expanded.png')
  })

  test('shell collapsed in dark mode', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/announcements')
    await page.evaluate(() => document.fonts.ready)
    await page.getByRole('button', { name: '深色模式' }).click()
    await page.locator('button[aria-label="收起"]').click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.locator('aside')).toHaveClass(/w-\[72px\]/)
    await expect(page).toHaveScreenshot('console-shell-dark-collapsed.png')
  })

  test('announcement editor dialog', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/announcements')
    await page.evaluate(() => document.fonts.ready)
    await page.getByRole('button', { name: '创建公告' }).first().click()
    const dialog = page.getByRole('dialog', { name: '创建公告' })
    await expect(dialog).toBeVisible()
    await expect(dialog).not.toHaveClass(/modal-enter-/)
    await expect(dialog).toHaveScreenshot('console-announcement-editor.png')
  })

  test('channel status v1', async ({ page }) => {
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v1')
    await page.goto('http://127.0.0.1:4173/monitor')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('OpenAI 主线路')).toBeVisible()
    await expect(page.getByText('OPERATIONAL')).toBeVisible()
    await expect(page).toHaveScreenshot('console-channel-status-v1.png')
  })

  test('channel status v2', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/monitor')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('gpt-5').first()).toBeVisible()
    await expect(page).toHaveScreenshot('console-channel-status-v2.png')
  })

  test('model plaza pricing', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/model-plaza?embedded=1')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('claude-sonnet-4-6')).toBeVisible()
    await expect(page).toHaveScreenshot('console-model-plaza-pricing.png')
  })

  test('dashboard date panel stays above the chart cards', async ({ page }) => {
    const externalRequests: string[] = []
    page.on('request', (request) => {
      const url = new URL(request.url())
      if (url.hostname !== '127.0.0.1') externalRequests.push(request.url())
    })
    await page.goto('http://127.0.0.1:4173/admin/dashboard')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByText('今日请求')).toBeVisible()

    await page.locator('.date-picker-trigger').click()
    const panel = page.locator('.date-picker-dropdown')
    await expect(panel).toBeVisible()
    await expect(panel).toHaveCSS('position', 'fixed')
    await expect(panel).toHaveAttribute('data-zero-one-floating-panel', 'true')
    expect(await panel.evaluate((element) => element.parentElement === document.body)).toBe(false)
    expect(await panel.evaluate((element) => element.matches(':popover-open'))).toBe(true)

    const panelOwnsTopmostPoint = await panel.evaluate((element) => {
      const rect = element.getBoundingClientRect()
      const target = document.elementFromPoint(rect.left + rect.width / 2, rect.bottom - 12)
      return target === element || element.contains(target)
    })
    expect(panelOwnsTopmostPoint).toBe(true)

    const panelBox = await panel.boundingBox()
    expect(panelBox).not.toBeNull()
    expect(panelBox!.x).toBeGreaterThanOrEqual(0)
    expect(panelBox!.y).toBeGreaterThanOrEqual(0)
    expect(panelBox!.x + panelBox!.width).toBeLessThanOrEqual(1440)
    expect(panelBox!.y + panelBox!.height).toBeLessThanOrEqual(900)
    expect(externalRequests).toEqual([])
    await expect(page).toHaveScreenshot('console-dashboard-date-picker.png', {
      maxDiffPixels: 1_500,
    })
  })

  test('floating overlay handles the shared recovered Console panels', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/login')
    await page.evaluate(() => {
      const fixtures = [
        '<div class="relative"><button class="date-picker-trigger">date</button><div class="date-picker-dropdown">date panel</div></div>',
        '<div class="relative"><button class="select-trigger">proxy</button><div class="select-dropdown" data-v-60ed8961>proxy panel</div></div>',
        '<div class="relative mb-3"><div class="cursor-pointer" tabindex="0">models</div><div class="absolute left-0 right-0 top-full z-50"><div data-testid="model-option">model panel</div></div></div>',
        '<div class="relative"><button>refresh</button><div class="absolute right-0 z-20 mt-1 w-44">refresh panel</div></div>',
      ]
      const host = document.createElement('div')
      host.id = 'floating-overlay-fixtures'
      host.innerHTML = fixtures.join('')
      document.body.append(host)
    })

    const panels = page.locator('[data-zero-one-floating-panel="true"]')
    await expect(panels).toHaveCount(4)
    for (let index = 0; index < 4; index += 1) {
      const panel = panels.nth(index)
      await expect(panel).toHaveCSS('position', 'fixed')
      expect(await panel.evaluate((element) => element.parentElement === document.body)).toBe(!(await panel.evaluate(element => element.matches('.date-picker-dropdown'))))
    }
  })

  test('floating overlay flips and clamps the date panel on a narrow viewport', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 })
    await page.goto('http://127.0.0.1:4173/login')
    await page.evaluate(() => {
      const container = document.createElement('div')
      container.id = 'narrow-date-fixture'
      Object.assign(container.style, {
        position: 'fixed',
        right: '0',
        bottom: '12px',
        width: '160px',
      })
      container.innerHTML = '<button class="date-picker-trigger" style="width:160px;height:40px">date</button><div class="date-picker-dropdown" style="height:320px">date panel</div>'
      document.body.append(container)
    })

    const trigger = page.locator('#narrow-date-fixture .date-picker-trigger')
    const panel = page.locator('.date-picker-dropdown[data-zero-one-floating-panel="true"]')
    await expect(panel).toBeVisible()

    const triggerBox = await trigger.boundingBox()
    const panelBox = await panel.boundingBox()
    expect(triggerBox).not.toBeNull()
    expect(panelBox).not.toBeNull()
    expect(panelBox!.x).toBe(16)
    expect(panelBox!.x + panelBox!.width).toBeLessThanOrEqual(304)
    expect(panelBox!.y).toBeLessThan(triggerBox!.y)
    expect(panelBox!.y + panelBox!.height).toBeLessThanOrEqual(704)

    await page.evaluate(() => {
      const container = document.querySelector<HTMLElement>('#narrow-date-fixture')!
      container.style.top = '20px'
      container.style.bottom = 'auto'
      window.dispatchEvent(new Event('resize'))
    })

    await expect.poll(async () => (await panel.boundingBox())?.y).toBeGreaterThan(60)
    const movedPanelBox = await panel.boundingBox()
    const movedTriggerBox = await trigger.boundingBox()
    expect(movedPanelBox!.y).toBeGreaterThan(movedTriggerBox!.y + movedTriggerBox!.height)
    expect(movedPanelBox!.y + movedPanelBox!.height).toBeLessThanOrEqual(704)
  })

  test('benefit and mystery-box generation forms', async ({ page }) => {
    await page.goto('http://127.0.0.1:4173/admin/redeem')
    await page.evaluate(() => document.fonts.ready)
    const benefit = page.locator('[data-test="generate-benefit"]')
    const mysteryBox = page.locator('[data-test="generate-mystery-box"]')
    await expect(benefit).toBeVisible()
    await expect(mysteryBox).toBeVisible()

    await benefit.click()
    await expect(page.locator('input[step="0.01"]')).toBeVisible()
    await expect(page).toHaveScreenshot('console-redeem-benefit.png', { maxDiffPixels: 3_000 })

    await page.getByRole('button', { name: '取消' }).click()
    await mysteryBox.click()
    await expect(page.locator('input[min="0.01"][step="0.01"]')).toHaveCount(2)
    await expect(page).toHaveScreenshot('console-redeem-mystery-box.png', {
      maxDiffPixels: 3_000,
    })
  })

  test('user redeem follows the configured online recharge navigation without reloading', async ({ page }) => {
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v2', {
      customMenuItems: [
        {
          id: 'online-recharge',
          label: '在线充值',
          icon_svg: '<svg viewBox="0 0 24 24"><path d="M4 7h16v10H4z"/></svg>',
          url: 'https://embed.01yapi.test/recharge',
          visibility: 'all',
          placement: 'both',
          sort_order: 0,
        },
      ],
    })
    await page.route('https://embed.01yapi.test/**', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'text/html; charset=utf-8',
        body: '<!doctype html><html><body>在线充值</body></html>',
      }),
    )
    await page.goto('http://127.0.0.1:4173/redeem')

    const recharge = page.locator('[data-zero-one-redeem-recharge="true"]')
    await expect(recharge).toHaveAttribute('href', '/custom/online-recharge')

    let documentNavigations = 0
    page.on('request', (request) => {
      if (request.resourceType() === 'document' && request.frame() === page.mainFrame()) {
        documentNavigations += 1
      }
    })
    await recharge.click()

    await expect(page).toHaveURL('http://127.0.0.1:4173/custom/online-recharge')
    expect(documentNavigations).toBe(0)
  })

  test('user redeem form', async ({ page }) => {
    await page.unroute('**/api/v1/**')
    await seedConsole(page, 'v2')
    await page.goto('http://127.0.0.1:4173/redeem')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.locator('#code')).toBeVisible()
    await expect(page.locator('[data-zero-one-redeem-actions="true"]')).toBeVisible()
    await expect(page.getByRole('button', { name: '兑换', exact: true })).toHaveClass(/btn-specular/)
    await expect(page.getByRole('link', { name: '在线充值', exact: true })).toHaveAttribute(
      'href',
      '/purchase?tab=recharge',
    )
    await expect(page).toHaveScreenshot('console-user-redeem.png')
  })
})
