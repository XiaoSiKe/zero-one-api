import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const api = vi.hoisted(() => ({
  list: vi.fn(),
  status: vi.fn(),
}))

const autoRefreshHarness = vi.hoisted(() => ({
  onRefresh: null as null | (() => Promise<void> | void),
  resetCountdown: vi.fn(),
}))

vi.mock('@/api/channelMonitor', () => api)

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({
    cachedPublicSettings: { channel_monitor_enabled: true },
    showError: vi.fn(),
  }),
}))

vi.mock('@/composables/useAutoRefresh', async () => {
  const { ref } = await import('vue')
  return {
    useAutoRefresh: (options: { onRefresh: () => Promise<void> | void }) => {
      autoRefreshHarness.onRefresh = options.onRefresh
      return {
      enabled: ref(false),
      intervalSeconds: ref(30),
      countdown: ref(30),
      intervals: [30, 60, 120],
      setEnabled: vi.fn(),
      setInterval: vi.fn(),
      resetCountdown: autoRefreshHarness.resetCountdown,
      start: vi.fn(),
      stop: vi.fn(),
      }
    },
  }
})

vi.mock('vue-i18n', async (importOriginal) => {
  const actual = await importOriginal<typeof import('vue-i18n')>()
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => key }),
  }
})

import ChannelStatusV1View from '../ChannelStatusV1View.vue'

const AppLayoutStub = defineComponent({ template: '<main><slot /></main>' })
const MonitorHeroStub = defineComponent({
  props: { overallStatus: { type: String, required: true } },
  emits: ['update:window'],
  template: `
    <div data-testid="overall-status" :data-status="overallStatus">
      <button data-testid="window-30d" @click="$emit('update:window', '30d')">30d</button>
    </div>
  `,
})

function monitor(id: number, primaryStatus: string) {
  return {
    id,
    name: `monitor-${id}`,
    primary_status: primaryStatus,
  }
}

async function renderStatus(primaryStatuses: string[]) {
  api.list.mockResolvedValueOnce({
    items: primaryStatuses.map((status, index) => monitor(index + 1, status)),
  })

  const wrapper = mount(ChannelStatusV1View, {
    global: {
      stubs: {
        AppLayout: AppLayoutStub,
        MonitorHero: MonitorHeroStub,
        MonitorCardGrid: true,
        MonitorDetailDialog: true,
      },
    },
  })
  await flushPromises()
  return wrapper.get('[data-testid="overall-status"]').attributes('data-status')
}

describe('ChannelStatusV1View overall status', () => {
  beforeEach(() => {
    api.list.mockReset()
    api.status.mockReset()
    autoRefreshHarness.onRefresh = null
    autoRefreshHarness.resetCountdown.mockReset()
  })

  it.each([
    { statuses: [], expected: 'unavailable' },
    { statuses: [''], expected: 'unavailable' },
    { statuses: ['success'], expected: 'unavailable' },
    { statuses: ['operational', 'operational'], expected: 'operational' },
    { statuses: ['operational', 'degraded'], expected: 'degraded' },
    { statuses: ['degraded', 'error'], expected: 'failed' },
    { statuses: ['failed'], expected: 'failed' },
    { statuses: ['error'], expected: 'failed' },
  ])('maps $statuses to $expected', async ({ statuses, expected }) => {
    await expect(renderStatus(statuses)).resolves.toBe(expected)
  })

  it('refreshes cached non-7d detail data during auto refresh', async () => {
    api.list
      .mockResolvedValueOnce({ items: [monitor(1, 'operational')] })
      .mockResolvedValueOnce({ items: [monitor(1, 'operational')] })
    api.status
      .mockResolvedValueOnce({ id: 1, name: 'monitor-1', models: [] })
      .mockResolvedValueOnce({ id: 1, name: 'monitor-1', models: [] })

    const wrapper = mount(ChannelStatusV1View, {
      global: {
        stubs: {
          AppLayout: AppLayoutStub,
          MonitorHero: MonitorHeroStub,
          MonitorCardGrid: true,
          MonitorDetailDialog: true,
        },
      },
    })
    await flushPromises()
    await wrapper.get('[data-testid="window-30d"]').trigger('click')
    await flushPromises()
    expect(api.status).toHaveBeenCalledTimes(1)

    await autoRefreshHarness.onRefresh?.()
    await flushPromises()

    expect(api.list).toHaveBeenCalledTimes(2)
    expect(api.status).toHaveBeenCalledTimes(2)
    expect(autoRefreshHarness.resetCountdown).toHaveBeenCalled()
  })
})
