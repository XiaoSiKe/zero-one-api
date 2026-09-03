import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ForgotPasswordView from '@/views/auth/ForgotPasswordView.vue'
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue'

const mocks = vi.hoisted(() => ({
  settings: vi.fn(), forgot: vi.fn(), reset: vi.fn(), error: vi.fn(), success: vi.fn()
}))

vi.mock('vue-router', () => ({ useRoute: () => ({ query: { email: 'test@example.com', token: 'one-time-token' } }) }))
vi.mock('vue-i18n', async () => ({
  ...await vi.importActual<typeof import('vue-i18n')>('vue-i18n'),
  useI18n: () => ({ t: (key: string) => key })
}))
vi.mock('@/stores', () => ({ useAppStore: () => ({ showError: mocks.error, showSuccess: mocks.success }) }))
vi.mock('@/api/auth', () => ({ getPublicSettings: mocks.settings, forgotPassword: mocks.forgot, resetPassword: mocks.reset }))

const enabledSettings = { password_reset_enabled: true, backend_mode_enabled: false, turnstile_enabled: false }

function renderPage(reset = false) {
  return mount(reset ? ResetPasswordView : ForgotPasswordView, {
    global: {
      stubs: {
        AuthLayout: { template: '<div><slot /><slot name="footer" /></div>' },
        Icon: true, RouterLink: true, TurnstileWidget: true
      }
    }
  })
}

describe('密码找回公开能力与错误协议', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mocks.settings.mockResolvedValue(enabledSettings)
    mocks.forgot.mockResolvedValue({ message: 'ok' })
    mocks.reset.mockResolvedValue({ message: 'ok' })
  })

  for (const reset of [false, true]) {
    const name = reset ? '重置密码' : '忘记密码'
    it(`${name}在设置尚未返回时不允许提交`, async () => {
      let resolve: (settings: typeof enabledSettings) => void = () => {}
      mocks.settings.mockReturnValueOnce(new Promise<typeof enabledSettings>((done) => { resolve = done }))
      const wrapper = renderPage(reset)
      expect(wrapper.find('form').exists()).toBe(false)
      expect(wrapper.text()).toContain('auth.passwordResetLoading')
      resolve(enabledSettings)
      await flushPromises()
      expect(wrapper.find('form').exists()).toBe(true)
      wrapper.unmount()
    })

    it(`${name}在功能关闭时显示可理解的状态`, async () => {
      mocks.settings.mockResolvedValueOnce({ ...enabledSettings, password_reset_enabled: false })
      const wrapper = renderPage(reset)
      await flushPromises()
      expect(wrapper.find('form').exists()).toBe(false)
      expect(wrapper.text()).toContain('auth.passwordResetDisabled')
      expect(mocks.forgot).not.toHaveBeenCalled()
      expect(mocks.reset).not.toHaveBeenCalled()
      wrapper.unmount()
    })

    it(`${name}设置失败后允许重试且不提前开放表单`, async () => {
      mocks.settings.mockRejectedValueOnce(new Error('offline'))
      const wrapper = renderPage(reset)
      await flushPromises()
      expect(wrapper.find('form').exists()).toBe(false)
      expect(wrapper.text()).toContain('auth.passwordResetSettingsFailed')
      await wrapper.get('[data-testid="password-reset-settings-retry"]').trigger('click')
      await flushPromises()
      expect(wrapper.find('form').exists()).toBe(true)
      wrapper.unmount()
    })
  }

  it('发送请求期间拒绝重复提交，并按规范化错误码处理后台关闭', async () => {
    let reject: (error: unknown) => void = () => {}
    mocks.forgot.mockReturnValueOnce(new Promise((_, fail) => { reject = fail }))
    const wrapper = renderPage()
    await flushPromises()
    await wrapper.get('#email').setValue('test@example.com')
    await wrapper.get('form').trigger('submit')
    await wrapper.get('form').trigger('submit')
    expect(mocks.forgot).toHaveBeenCalledTimes(1)
    reject({ reason: 'PASSWORD_RESET_DISABLED', message: 'password reset is not enabled' })
    await flushPromises()
    expect(mocks.error).toHaveBeenCalledWith('auth.passwordResetDisabled')
    expect(wrapper.find('form').exists()).toBe(false)
    wrapper.unmount()
  })

  it('重置链接过期使用规范化 reason 字段显示本地化提示', async () => {
    mocks.reset.mockRejectedValueOnce({ status: 400, code: 400, reason: 'INVALID_RESET_TOKEN', message: 'invalid or expired password reset token' })
    const wrapper = renderPage(true)
    await flushPromises()
    await wrapper.get('#password').setValue('new-password-123')
    await wrapper.get('#confirmPassword').setValue('new-password-123')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    expect(mocks.error).toHaveBeenCalledWith('auth.invalidOrExpiredToken')
    wrapper.unmount()
  })
})
