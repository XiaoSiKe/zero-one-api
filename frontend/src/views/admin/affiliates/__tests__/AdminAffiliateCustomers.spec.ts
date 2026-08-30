import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'

import AdminAffiliateCustomers from '../AdminAffiliateCustomers.vue'

const { listUsers, showError } = vi.hoisted(() => ({
  listUsers: vi.fn(),
  showError: vi.fn(),
}))

vi.mock('@/api/admin/users', () => ({
  default: { list: listUsers },
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({ showError }),
}))

vi.mock('vue-router', () => ({
  RouterLink: defineComponent({
    name: 'RouterLink',
    props: ['to'],
    template: '<a><slot /></a>',
  }),
}))

vi.mock('vue-i18n', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue-i18n')>()),
  useI18n: () => ({ t: (key: string) => key }),
}))

const TablePageLayoutStub = defineComponent({
  template: '<div><slot name="actions" /><slot name="filters" /><slot name="table" /><slot name="pagination" /></div>',
})
const DataTableStub = defineComponent({
  props: { data: { type: Array, default: () => [] }, columns: { type: Array, default: () => [] } },
  template: '<div><span v-for="column in columns" :key="column.key" data-testid="column">{{ column.key }}</span><div v-for="row in data" :key="row.id"><slot name="cell-email" :row="row" /><slot name="cell-role" :row="row" /><slot name="cell-agent_value" :row="row" /></div></div>',
})

function mountCustomers(exclusiveOnly = false) {
  return mount(AdminAffiliateCustomers, {
    props: { exclusiveOnly },
    global: {
      stubs: {
        TablePageLayout: TablePageLayoutStub,
        DataTable: DataTableStub,
        Pagination: true,
        Icon: true,
      },
    },
  })
}

describe('AdminAffiliateCustomers', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    listUsers.mockResolvedValue({ items: [], total: 0, page: 1, page_size: 20 })
  })

  afterEach(() => vi.useRealTimers())

  it('loads all relationships through the affiliate customer view', async () => {
    const wrapper = mountCustomers()
    await flushPromises()

    expect(listUsers).toHaveBeenCalledWith(1, 20, {
      search: undefined,
      include_subscriptions: false,
      affiliate_view: 'relationships',
    })
    expect(wrapper.find('[data-testid="open-affiliate-bind-dialog"]').exists()).toBe(false)
  })

  it('loads only exclusive agents through the rate-only affiliate view', async () => {
    mountCustomers(true)
    await flushPromises()

    expect(listUsers).toHaveBeenCalledWith(1, 20, {
      search: undefined,
      include_subscriptions: false,
      affiliate_view: 'exclusive_agents',
    })
  })

  it('links every listed user to the customer detail query', async () => {
    listUsers.mockResolvedValueOnce({
      items: [{ id: 42, email: 'customer@example.com', username: 'customer', agent_value: 18.5, exclusive_agent: true }],
      total: 1,
      page: 1,
      page_size: 20,
    })
    const wrapper = mountCustomers()
    await flushPromises()

    expect(wrapper.get('[data-testid="affiliate-customer-42"]').text()).toBe('customer@example.com')
    expect(wrapper.text()).toContain('admin.affiliates.customers.exclusiveAgent')
    expect(wrapper.text()).toContain('$18.50')
    expect(wrapper.findAll('[data-testid="column"]').map((column) => column.text())).not.toContain('status')
    expect(wrapper.getComponent({ name: 'RouterLink' }).props('to')).toEqual({
      path: '/admin/affiliates/invites',
      query: { section: 'customers', user_id: '42' },
    })
  })

  it('debounces customer searches and keeps the same list contract', async () => {
    const wrapper = mountCustomers()
    await flushPromises()
    listUsers.mockClear()

    await wrapper.get('[data-testid="affiliate-customer-search"]').setValue('legacy@example.com')
    await vi.advanceTimersByTimeAsync(301)
    await flushPromises()

    expect(listUsers).toHaveBeenCalledWith(1, 20, {
      search: 'legacy@example.com',
      include_subscriptions: false,
      affiliate_view: 'relationships',
    })
  })

  it('does not let an older customer request overwrite a newer search result', async () => {
    let resolveOldRequest = (_value: { items: unknown[]; total: number }) => {}
    listUsers
      .mockImplementationOnce(() => new Promise((resolve) => { resolveOldRequest = resolve }))
      .mockResolvedValueOnce({
        items: [{ id: 2, email: 'new@example.com', username: 'new' }],
        total: 1,
        page: 1,
        page_size: 20,
      })

    const wrapper = mountCustomers()
    await wrapper.get('[data-testid="affiliate-customer-search"]').setValue('new')
    await vi.advanceTimersByTimeAsync(301)
    await flushPromises()
    expect(wrapper.text()).toContain('new@example.com')

    resolveOldRequest({
      items: [{ id: 1, email: 'old@example.com', username: 'old' }],
      total: 1,
    })
    await flushPromises()

    expect(wrapper.text()).toContain('new@example.com')
    expect(wrapper.text()).not.toContain('old@example.com')
  })
})
