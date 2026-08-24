import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount, type VueWrapper } from '@vue/test-utils'
import AppLayout from '../AppLayout.vue'

const { setReplayCallbackMock } = vi.hoisted(() => ({
  setReplayCallbackMock: vi.fn(),
}))

vi.mock('@/stores', () => ({
  useAppStore: () => ({ sidebarCollapsed: false }),
}))

vi.mock('@/stores/auth', () => ({
  useAuthStore: () => ({ user: { role: 'user' } }),
}))

vi.mock('@/stores/onboarding', () => ({
  useOnboardingStore: () => ({ setReplayCallback: setReplayCallbackMock }),
}))

vi.mock('@/composables/useOnboardingTour', () => ({
  useOnboardingTour: () => ({ replayTour: vi.fn() }),
}))

let wrapper: VueWrapper | undefined
let frameCallback: FrameRequestCallback | undefined
const requestAnimationFrameMock = vi.fn((callback: FrameRequestCallback) => {
  frameCallback = callback
  return 7
})
const cancelAnimationFrameMock = vi.fn()

function mountLayout(content = '<article class="card"><span data-testid="card-content">card</span></article>') {
  wrapper = mount(AppLayout, {
    slots: { default: content },
    global: {
      stubs: {
        AppHeader: true,
        AppSidebar: true,
      },
    },
  })
  return wrapper
}

describe('AppLayout Console card motion', () => {
  beforeEach(() => {
    frameCallback = undefined
    requestAnimationFrameMock.mockClear()
    cancelAnimationFrameMock.mockClear()
    setReplayCallbackMock.mockClear()
    vi.stubGlobal('requestAnimationFrame', requestAnimationFrameMock)
    vi.stubGlobal('cancelAnimationFrame', cancelAnimationFrameMock)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
        media: '(prefers-reduced-motion: reduce)',
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }))
    )
  })

  afterEach(() => {
    wrapper?.unmount()
    wrapper = undefined
    vi.unstubAllGlobals()
  })

  it('delegates fine-pointer angle updates to an eligible leaf card', async () => {
    const mounted = mountLayout()
    const card = mounted.get('.card')
    vi.spyOn(card.element, 'getBoundingClientRect').mockReturnValue({
      x: 10,
      y: 20,
      top: 20,
      right: 210,
      bottom: 120,
      left: 10,
      width: 200,
      height: 100,
      toJSON: () => ({}),
    })

    await mounted.get('[data-testid="card-content"]').trigger('pointermove', {
      pointerType: 'mouse',
      clientX: 180,
      clientY: 40,
    })

    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(1)
    frameCallback?.(0)
    expect((card.element as HTMLElement).style.getPropertyValue('--console-card-angle')).toMatch(
      /^-?\d+(\.\d+)?deg$/
    )
  })

  it('keeps explicitly static, sticky, nested, and iframe hosts out of card motion', async () => {
    const mounted = mountLayout(`
      <article class="card console-card-motion-static" data-testid="static-card">static</article>
      <article class="card sticky" data-testid="sticky-card">sticky</article>
      <article class="card" data-testid="nested-card"><span class="card">inner</span></article>
      <article class="card" data-testid="iframe-card"><iframe title="host"></iframe></article>
    `)

    for (const testId of [
      'static-card',
      'sticky-card',
      'nested-card',
      'iframe-card',
    ]) {
      await mounted.get(`[data-testid="${testId}"]`).trigger('pointermove', {
        pointerType: 'mouse',
        clientX: 10,
        clientY: 10,
      })
    }

    expect(requestAnimationFrameMock).not.toHaveBeenCalled()
  })

  it('tracks glow angle for table and inline-overlay cards without requiring layout lift', async () => {
    const mounted = mountLayout(`
      <article class="card console-skin-table" data-testid="table-card">table</article>
      <article class="card" data-testid="table-host"><table><tbody><tr><td>row</td></tr></tbody></table></article>
      <article class="card" data-testid="sticky-host"><span class="sticky">tools</span></article>
      <article class="card" data-testid="fixed-host"><span class="fixed">dialog</span></article>
      <article class="card console-card-motion-glow-only" data-testid="glow-only">glow</article>
    `)

    for (const testId of ['table-card', 'table-host', 'sticky-host', 'fixed-host', 'glow-only']) {
      await mounted.get(`[data-testid="${testId}"]`).trigger('pointermove', {
        pointerType: 'mouse',
        clientX: 10,
        clientY: 10,
      })
      frameCallback?.(0)
    }

    expect(requestAnimationFrameMock).toHaveBeenCalledTimes(5)
  })

  it('does not schedule motion for touch input', async () => {
    const mounted = mountLayout()
    await mounted.get('.card').trigger('pointermove', {
      pointerType: 'touch',
      clientX: 10,
      clientY: 10,
    })

    expect(requestAnimationFrameMock).not.toHaveBeenCalled()
  })
})
