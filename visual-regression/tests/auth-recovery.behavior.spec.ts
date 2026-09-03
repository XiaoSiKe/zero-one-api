import { expect, test } from '@playwright/test'
import { publicSettings, regularUser, seedConsole } from './fixtures/api'

const origin = 'http://127.0.0.1:4173'
const disabledMessage = '当前暂未开放密码找回，请联系管理员。'
const passwordRoutes = ['/forgot-password', '/reset-password?email=test%40example.com&token=fixture-token']

test.describe('Password recovery on the approved Console', () => {
  const pageErrors: string[] = []
  test.beforeEach(async ({ page }) => {
    pageErrors.length = 0
    page.on('pageerror', (error) => pageErrors.push(error.message))
    await page.clock.setFixedTime(new Date('2026-08-16T12:00:00+08:00'))
  })
  test.afterEach(() => { expect(pageErrors).toEqual([]) })

  for (const path of passwordRoutes) {
    test(`${path.split('?')[0]} waits for live settings without exposing a form`, async ({ page }) => {
      await seedConsole(page, 'v1', { authenticated: false })
      let release = () => {}
      const pending = new Promise<void>((resolve) => { release = resolve })
      await page.route(/\/api\/v1\/settings\/public(?:\?timezone=[^&]+)?$/, async (route) => {
        await pending
        await route.fulfill({ json: { code: 0, data: publicSettings('v1') } })
      })
      try {
        await page.goto(origin + path, { waitUntil: 'domcontentloaded' })
        await expect(page.getByText('正在确认密码找回服务，请稍候。')).toBeVisible()
        await expect(page.locator('form')).toHaveCount(0)
      } finally { release() }
      await expect(page.locator('form')).toBeVisible()
    })

    test(`${path.split('?')[0]} stays unavailable when recovery is disabled`, async ({ page }) => {
      await seedConsole(page, 'v1', { authenticated: false, passwordResetEnabled: false })
      await page.goto(origin + path)
      await expect(page.getByText(disabledMessage)).toBeVisible()
      await expect(page.locator('form')).toHaveCount(0)
    })
  }

  test('login does not add recovery while the capability is disabled', async ({ page }) => {
    await seedConsole(page, 'v1', { authenticated: false, passwordResetEnabled: false })
    await page.goto(origin + '/login')
    await expect(page.getByRole('button', { name: '登录', exact: true })).toBeVisible()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('a[href="/forgot-password"]')).toHaveCount(0)
  })

  test('recovery remains available when registration is closed', async ({ page }) => {
    await seedConsole(page, 'v1', { authenticated: false, registrationEnabled: false })
    await page.goto(origin + '/login')
    const recovery = page.locator('[data-zero-one-login-recovery="true"]')
    await expect(recovery).toBeVisible()
    await expect(recovery).toHaveAttribute('href', '/forgot-password')
    await recovery.click()
    await expect(page.locator('#email')).toBeEnabled()
  })

  test('settings failure permits an explicit retry', async ({ page }) => {
    await seedConsole(page, 'v1', { authenticated: false })
    const settingsURL = /\/api\/v1\/settings\/public(?:\?timezone=[^&]+)?$/
    await page.route(settingsURL, (route) => route.fulfill({ status: 503, json: { code: 503, message: 'unavailable' } }))
    await page.goto(origin + '/forgot-password')
    await expect(page.getByText('暂时无法确认密码找回服务，请重新加载。')).toBeVisible()
    await expect(page.locator('form')).toHaveCount(0)
    await page.unroute(settingsURL)
    await page.getByTestId('password-reset-settings-retry').click()
    await expect(page.locator('#email')).toBeEnabled()
  })

  test('backend revocation is localized and closes the form', async ({ page }) => {
    await seedConsole(page, 'v1', { authenticated: false })
    await page.route('**/api/v1/auth/forgot-password', (route) => route.fulfill({ status: 403, json: {
      code: 403, reason: 'PASSWORD_RESET_DISABLED', message: 'password reset is not enabled'
    } }))
    await page.goto(origin + '/forgot-password')
    await page.locator('#email').fill('test@example.com')
    await page.getByRole('button', { name: '发送重置链接', exact: true }).click()
    await expect(page.getByText(disabledMessage, { exact: true }).first()).toBeVisible()
    await expect(page.locator('form')).toHaveCount(0)
    await expect(page.getByText('password reset is not enabled', { exact: true })).toHaveCount(0)
  })

  test('recovery request uses the existing API and presents a uniform acknowledgement', async ({ page }) => {
    await seedConsole(page, 'v1', { authenticated: false, theme: 'dark' })
    let submitted: unknown
    await page.route('**/api/v1/auth/forgot-password', (route) => {
      submitted = route.request().postDataJSON()
      return route.fulfill({ json: { code: 0, data: { message: 'If registered, a link will be sent.' } } })
    })
    await page.goto(origin + '/forgot-password')
    await expect(page.locator('#email')).toBeEnabled()
    await expect(page).toHaveScreenshot('console-forgot-password.png')
    await page.locator('#email').fill('test@example.com')
    await page.getByRole('button', { name: '发送重置链接', exact: true }).click()
    await expect(page.getByRole('heading', { name: '找回请求已提交' })).toBeVisible()
    await expect(page.getByText('如果该邮箱已注册，您将很快收到密码重置链接。请检查您的收件箱和垃圾邮件文件夹。')).toBeVisible()
    expect(submitted).toEqual({ email: 'test@example.com' })
  })

  test('reset submits the token and localizes an expired link', async ({ page }) => {
    await seedConsole(page, 'v1', { authenticated: false, theme: 'dark' })
    let submitted: unknown
    await page.route('**/api/v1/auth/reset-password', (route) => {
      submitted = route.request().postDataJSON()
      return route.fulfill({ status: 400, json: { code: 400, reason: 'INVALID_RESET_TOKEN', message: 'invalid or expired password reset token' } })
    })
    await page.goto(origin + passwordRoutes[1])
    await expect(page.locator('#password')).toBeEnabled()
    await expect(page).toHaveScreenshot('console-reset-password.png')
    await page.locator('#password').fill('new-fixture-password')
    await page.locator('#confirmPassword').fill('new-fixture-password')
    await page.getByRole('button', { name: '重置密码', exact: true }).click()
    await expect(page.getByText('密码重置链接无效或已过期。请重新请求一个新链接。')).toBeVisible()
    expect(submitted).toEqual({ email: 'test@example.com', token: 'fixture-token', new_password: 'new-fixture-password' })
  })

  test('the Console header omits only the built-in documentation entry', async ({ page }) => {
    await seedConsole(page, 'v1', { user: regularUser, customMenuItems: [{
      id: 'retained-docs', label: '自定义文档', icon_svg: '', url: 'https://docs.01yapi.test/start',
      visibility: 'all', placement: 'both', sort_order: 0
    }] })
    await page.goto(origin + '/dashboard')
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('header a[href="https://docs.01yapi.test/start"]')).toHaveCount(0)
    await expect(page.locator('aside a[href="/custom/retained-docs"]')).toHaveCount(1)
    await expect(page.locator('header').getByTestId('header-custom-menu-retained-docs')).toHaveCount(1)
  })
})
