import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils'
import { defineComponent, reactive } from 'vue'
import CommunityQrEntry from '../CommunityQrEntry.vue'

const { getMock, createObjectURLMock, revokeObjectURLMock } = vi.hoisted(() => ({
  getMock: vi.fn(),
  createObjectURLMock: vi.fn(() => 'blob:community-qr'),
  revokeObjectURLMock: vi.fn(),
}))

vi.mock('@/api/client', () => ({
  default: { get: getMock },
}))

const authStore = reactive({ token: 'test-token', user: { id: 2, role: 'user' } as { id: number; role: string } | null })
vi.mock('@/stores/auth', () => ({ useAuthStore: () => authStore }))
enableAutoUnmount(afterEach)

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  const messages: Record<string, string> = {
    'nav.communityQr': '交流群',
    'communityQr.open': '打开交流群二维码',
    'communityQr.title': '交流群',
    'communityQr.description': '扫码加入交流群获取支持',
    'communityQr.imageAlt': '交流群二维码',
    'communityQr.loading': '正在安全加载二维码…',
    'communityQr.loadFailed': '二维码暂时无法加载，请稍后重试',
    'communityQr.retry': '重新加载',
  }
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => messages[key] ?? key }),
  }
})

const BaseDialogStub = defineComponent({
  name: 'BaseDialog',
  props: {
    show: { type: Boolean, default: false },
    title: { type: String, default: '' },
  },
  emits: ['close'],
  template: `
    <section v-if="show" role="dialog" :aria-label="title">
      <h2>{{ title }}</h2>
      <button data-testid="dialog-close" @click="$emit('close')">close</button>
      <slot />
    </section>
  `,
})

function mountEntry(props: {
  title?: string
  description?: string
  imageEndpoint?: string
  testId?: string
  iconSvg?: string
} = {}) {
  return mount(CommunityQrEntry, {
    props,
    global: {
      stubs: {
        BaseDialog: BaseDialogStub,
        Icon: true,
      },
    },
  })
}

describe('CommunityQrEntry', () => {
  beforeEach(() => {
    authStore.token = 'test-token'
    authStore.user = { id: 2, role: 'user' }
    getMock.mockReset()
    createObjectURLMock.mockClear()
    revokeObjectURLMock.mockClear()
    Object.defineProperty(URL, 'createObjectURL', {
      configurable: true,
      value: createObjectURLMock,
    })
    Object.defineProperty(URL, 'revokeObjectURL', {
      configurable: true,
      value: revokeObjectURLMock,
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('loads the protected endpoint as a Blob only after the dialog opens', async () => {
    let resolveRequest!: (value: { data: Blob }) => void
    getMock.mockReturnValue(new Promise((resolve) => {
      resolveRequest = resolve
    }))
    const wrapper = mountEntry()

    const trigger = wrapper.get('[data-testid="community-qr-button"]')
    expect(trigger.attributes('aria-label')).toBe('打开交流群二维码: 交流群')
    expect(wrapper.find('[data-testid="community-qr-dialog"]').exists()).toBe(false)
    expect(wrapper.find('img').exists()).toBe(false)

    await trigger.trigger('click')

    expect(wrapper.get('[role="dialog"]').attributes('aria-label')).toBe('交流群')
    expect(wrapper.text()).toContain('扫码加入交流群获取支持')
    expect(wrapper.get('[data-testid="community-qr-loading"]').attributes('role')).toBe('status')
    expect(getMock).toHaveBeenCalledWith('/settings/community-qr', {
      responseType: 'blob',
      signal: expect.any(AbortSignal),
    })

    resolveRequest({ data: new Blob(['qr'], { type: 'image/png' }) })
    await flushPromises()

    expect(createObjectURLMock).toHaveBeenCalledWith(expect.any(Blob))
    expect(wrapper.get('[data-testid="community-qr-image"]').attributes('src')).toBe(
      'blob:community-qr',
    )
    expect(wrapper.get('[data-testid="community-qr-image"]').attributes('alt')).toBe(
      '交流群: 交流群二维码',
    )

    await wrapper.get('[data-testid="dialog-close"]').trigger('click')
    expect(wrapper.find('[data-testid="community-qr-dialog"]').exists()).toBe(false)
    expect(revokeObjectURLMock).toHaveBeenCalledWith('blob:community-qr')
  })

  it('renders the configured dialog title and subtitle', async () => {
    getMock.mockResolvedValue({ data: new Blob(['qr'], { type: 'image/png' }) })
    const wrapper = mountEntry({
      title: '售后二群',
      description: '扫码加入售后群获取支持',
    })

    expect(wrapper.get('[data-testid="community-qr-button"]').text()).toContain('售后二群')
    expect(wrapper.get('[data-testid="community-qr-button"]').attributes('aria-label')).toBe(
      '打开交流群二维码: 售后二群',
    )
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    await flushPromises()

    expect(wrapper.get('[role="dialog"]').attributes('aria-label')).toBe('售后二群')
    expect(wrapper.text()).toContain('扫码加入售后群获取支持')
    expect(wrapper.get('.community-qr-image-frame').classes()).toContain('border')
  })

  it('supports a per-entry image endpoint, test id, and sanitized SVG icon', async () => {
    getMock.mockResolvedValue({ data: new Blob(['qr'], { type: 'image/png' }) })
    const wrapper = mountEntry({
      title: '售后支持',
      imageEndpoint: '/settings/header-navigation/support/qr',
      testId: 'header-qr-support',
      iconSvg: '<svg viewBox="0 0 24 24"><path d="M4 12h16" /></svg>',
    })

    const trigger = wrapper.get('[data-testid="header-qr-support"]')
    expect(trigger.find('svg').exists()).toBe(true)
    await trigger.trigger('click')
    await flushPromises()

    expect(getMock).toHaveBeenCalledWith('/settings/header-navigation/support/qr', {
      responseType: 'blob',
      signal: expect.any(AbortSignal),
    })
  })

  it('shows a retryable error and accepts a later valid image response', async () => {
    getMock
      .mockRejectedValueOnce(new Error('forbidden'))
      .mockResolvedValueOnce({ data: new Blob(['qr'], { type: 'image/webp' }) })
    const wrapper = mountEntry()
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    await flushPromises()

    expect(wrapper.get('[data-testid="community-qr-error"]').attributes('role')).toBe('alert')
    expect(wrapper.text()).toContain('二维码暂时无法加载，请稍后重试')

    await wrapper.get('[data-testid="community-qr-retry"]').trigger('click')
    await flushPromises()

    expect(getMock).toHaveBeenCalledTimes(2)
    expect(wrapper.get('[data-testid="community-qr-image"]').attributes('src')).toBe(
      'blob:community-qr',
    )
  })

  it('aborts a pending request when the dialog closes', async () => {
    let resolveRequest!: (value: { data: Blob }) => void
    getMock.mockReturnValue(new Promise((resolve) => {
      resolveRequest = resolve
    }))
    const wrapper = mountEntry()

    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    const signal = getMock.mock.calls[0][1].signal as AbortSignal
    await wrapper.get('[data-testid="dialog-close"]').trigger('click')

    expect(signal.aborted).toBe(true)
    resolveRequest({ data: new Blob(['qr'], { type: 'image/jpeg' }) })
    await flushPromises()
    expect(createObjectURLMock).not.toHaveBeenCalled()
  })

  it('times out a stalled download and ignores it after a successful retry', async () => {
    vi.useFakeTimers()
    let resolveStalled!: (value: { data: Blob }) => void
    getMock.mockReturnValueOnce(new Promise((resolve) => { resolveStalled = resolve }))
      .mockResolvedValueOnce({ data: new Blob(['fresh'], { type: 'image/png' }) })
    const wrapper = mountEntry()
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    const firstSignal = getMock.mock.calls[0][1].signal as AbortSignal

    await vi.advanceTimersByTimeAsync(15000)
    expect(firstSignal.aborted).toBe(true)
    expect(wrapper.find('[data-testid="community-qr-error"]').exists()).toBe(true)
    await wrapper.get('[data-testid="community-qr-retry"]').trigger('click')
    await flushPromises()
    expect(wrapper.find('[data-testid="community-qr-image"]').exists()).toBe(true)

    resolveStalled({ data: new Blob(['stale'], { type: 'image/png' }) })
    await flushPromises()
    expect(createObjectURLMock).toHaveBeenCalledTimes(1)
    await wrapper.get('[data-testid="community-qr-image"]').trigger('load')
    await vi.advanceTimersByTimeAsync(15000)
    expect(wrapper.find('[data-testid="community-qr-error"]').exists()).toBe(false)
  })

  it('releases images that fail decoding and retries without retaining the failed Blob', async () => {
    getMock.mockResolvedValue({ data: new Blob(['broken'], { type: 'image/png' }) })
    const wrapper = mountEntry()
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    await flushPromises()
    await wrapper.get('[data-testid="community-qr-image"]').trigger('error')
    expect(revokeObjectURLMock).toHaveBeenCalledWith('blob:community-qr')
    expect(wrapper.find('[data-testid="community-qr-error"]').exists()).toBe(true)
    await wrapper.get('[data-testid="community-qr-retry"]').trigger('click')
    await flushPromises()
    expect(getMock).toHaveBeenCalledTimes(2)
  })

  it('reloads an open entry when its endpoint changes and discards the previous response', async () => {
    let resolvePrevious!: (value: { data: Blob }) => void
    getMock.mockReturnValueOnce(new Promise((resolve) => { resolvePrevious = resolve }))
      .mockResolvedValueOnce({ data: new Blob(['new'], { type: 'image/jpeg' }) })
    const wrapper = mountEntry()
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    const previousSignal = getMock.mock.calls[0][1].signal as AbortSignal
    await wrapper.setProps({ imageEndpoint: '/settings/header-navigation/replaced/qr' })
    await flushPromises()

    expect(previousSignal.aborted).toBe(true)
    expect(getMock).toHaveBeenLastCalledWith('/settings/header-navigation/replaced/qr', expect.any(Object))
    resolvePrevious({ data: new Blob(['old'], { type: 'image/png' }) })
    await flushPromises()
    expect(createObjectURLMock).toHaveBeenCalledTimes(1)
  })

  it('closes and releases sensitive content when the session or role changes', async () => {
    getMock.mockResolvedValue({ data: new Blob(['qr'], { type: 'image/png' }) })
    const wrapper = mountEntry()
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    await flushPromises()
    authStore.user = { id: 2, role: 'admin' }
    await flushPromises()

    expect(wrapper.find('[data-testid="community-qr-dialog"]').exists()).toBe(false)
    expect(revokeObjectURLMock).toHaveBeenCalledWith('blob:community-qr')
    expect(getMock).toHaveBeenCalledTimes(1)
  })

  it('aborts and releases the Blob on unmount and never prefetches on session changes', async () => {
    getMock.mockResolvedValue({ data: new Blob(['qr'], { type: 'image/png' }) })
    const wrapper = mountEntry()
    authStore.token = 'refreshed-token'
    await flushPromises()
    expect(getMock).not.toHaveBeenCalled()
    await wrapper.get('[data-testid="community-qr-button"]').trigger('click')
    await flushPromises()
    wrapper.unmount()
    expect(revokeObjectURLMock).toHaveBeenCalledWith('blob:community-qr')
  })
})
