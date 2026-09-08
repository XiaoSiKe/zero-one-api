import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import TokenUsageTrend from '../TokenUsageTrend.vue'

const messages: Record<string, string> = {
  'admin.dashboard.tokenUsageTrend': 'Token Usage Trend',
  'admin.dashboard.totalTokens': 'Total Tokens',
  'admin.dashboard.input': 'Input',
  'admin.dashboard.output': 'Output',
  'admin.dashboard.cache': 'Cache',
  'admin.dashboard.noDataAvailable': 'No data available',
}

vi.mock('vue-i18n', async () => ({
  ...await vi.importActual<typeof import('vue-i18n')>('vue-i18n'),
  useI18n: () => ({ t: (key: string) => messages[key] ?? key }),
}))

vi.mock('vue-chartjs', () => ({
  Line: {
    name: 'Line',
    props: ['data', 'options'],
    template: '<div class="chart-data">{{ JSON.stringify(data) }}</div>',
  },
}))

const point = {
  date: '2026-05-08 13:00',
  requests: 1,
  input_tokens: 500,
  output_tokens: 100,
  cache_creation_tokens: 300,
  cache_read_tokens: 1500,
  total_tokens: 2400,
  cost: 0.01,
  actual_cost: 0.005,
}

describe('TokenUsageTrend', () => {
  it('draws one total-token series with a compact time label', () => {
    const wrapper = mount(TokenUsageTrend, {
      props: { trendData: [point] },
      global: { stubs: { LoadingSpinner: true } },
    })
    const chartData = JSON.parse(wrapper.get('.chart-data').text())
    expect(chartData.labels).toEqual(['13:00'])
    expect(chartData.datasets).toHaveLength(1)
    expect(chartData.datasets[0]).toMatchObject({ label: 'Total Tokens', data: [2400] })
  })

  it('keeps input, output and cache details in the tooltip', () => {
    const wrapper = mount(TokenUsageTrend, {
      props: { trendData: [point] },
      global: { stubs: { LoadingSpinner: true } },
    })
    const options = wrapper.getComponent({ name: 'Line' }).props('options') as any
    expect(options.plugins.tooltip.callbacks.label({ dataIndex: 0 })).toEqual([
      'Total Tokens: 0.00M',
      'Input: 0.00M',
      'Output: 0.00M',
      'Cache: 0.00M',
    ])
  })

  it('formats the axis with only M or B units', () => {
    const wrapper = mount(TokenUsageTrend, {
      props: { trendData: [point] },
      global: { stubs: { LoadingSpinner: true } },
    })
    const options = wrapper.getComponent({ name: 'Line' }).props('options') as any
    expect(options.scales.y.ticks.callback(0)).toBe('0.00M')
    expect(options.scales.y.ticks.callback(1_250_000_000)).toBe('1.25B')
  })
})
