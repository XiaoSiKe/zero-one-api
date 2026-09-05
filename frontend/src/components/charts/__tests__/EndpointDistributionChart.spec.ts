import { expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import EndpointDistributionChart from '../EndpointDistributionChart.vue'

vi.mock('vue-i18n', async () => ({
  ...await vi.importActual<typeof import('vue-i18n')>('vue-i18n'),
  useI18n: () => ({ t: (key: string) => key }),
}))
vi.mock('vue-chartjs', () => ({ Doughnut: { props: ['data'], template: '<div class="chart-data">{{ JSON.stringify(data) }}</div>' } }))

it('keeps pending endpoint costs visible without drawing invented cost shares', () => {
  const wrapper = mount(EndpointDistributionChart, {
    props: { endpointStats: [
      { endpoint: '/known', requests: 1, total_tokens: 100, actual_cost: 0.22, cost: 1 },
      { endpoint: '/pending', requests: 1, total_tokens: 200, actual_cost: null, cost: 1 },
    ], metric: 'actual_cost' },
  })
  expect(wrapper.findAll('tbody tr')).toHaveLength(2)
  expect(wrapper.text()).toContain('成本待确认')
  expect(wrapper.find('.chart-data').exists()).toBe(false)
})

it('retains a confirmed zero cost and token counts in charts', () => {
  const wrapper = mount(EndpointDistributionChart, {
    props: { endpointStats: [{ endpoint: '/free', requests: 1, total_tokens: 100, actual_cost: 0, cost: 1 }], metric: 'actual_cost' },
  })
  expect(JSON.parse(wrapper.get('.chart-data').text()).datasets[0].data).toEqual([0])
})
