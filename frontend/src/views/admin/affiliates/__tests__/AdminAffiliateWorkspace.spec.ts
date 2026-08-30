import { beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, reactive } from 'vue'
import { mount } from '@vue/test-utils'

import AdminAffiliateWorkspace from '../AdminAffiliateWorkspace.vue'

const routeState = reactive({ query: {} as Record<string, string> })

vi.mock('vue-router', () => ({
  useRoute: () => routeState,
  RouterLink: defineComponent({
    props: ['to'],
    template: '<a><slot /></a>',
  }),
}))

vi.mock('vue-i18n', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue-i18n')>()),
  useI18n: () => ({ t: (key: string) => key }),
}))

const LayoutStub = defineComponent({ template: '<main><slot /></main>' })

function mountWorkspace(type: 'invites' | 'rebates' | 'transfers' = 'invites') {
  return mount(AdminAffiliateWorkspace, {
    props: { type },
    global: {
      stubs: {
        AppLayout: LayoutStub,
        AdminAffiliateRecordsTable: { template: '<div data-testid="records" />' },
        AdminAffiliateSettingsPanel: { name: 'AdminAffiliateSettingsPanel', template: '<div data-testid="settings" />' },
        AdminAffiliateCustomers: { name: 'AdminAffiliateCustomers', props: ['exclusiveOnly'], template: '<div data-testid="customers" />' },
        AdminAffiliateCustomerDetail: {
          name: 'AdminAffiliateCustomerDetail',
          props: ['userId', 'returnSection'],
          template: '<div data-testid="customer-detail">{{ userId }}</div>',
        },
      },
    },
  })
}

describe('AdminAffiliateWorkspace', () => {
  beforeEach(() => {
    routeState.query = {}
  })

  it('shows the new five tabs in the approved order and defaults to Invite Records', () => {
    const wrapper = mountWorkspace()
    const tabs = wrapper.findAll('[data-testid^="affiliate-tab-"]')

    expect(wrapper.findAll('[data-testid="affiliate-admin-workspace"]')).toHaveLength(1)
    expect(tabs.map((tab) => tab.attributes('data-testid'))).toEqual([
      'affiliate-tab-invites',
      'affiliate-tab-customers',
      'affiliate-tab-exclusive-agents',
      'affiliate-tab-transfers',
      'affiliate-tab-settings',
    ])
    expect(wrapper.get('[data-testid="affiliate-tab-invites"]').attributes('aria-selected')).toBe('true')
    expect(wrapper.find('[data-testid="records"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="open-affiliate-bind-dialog"]').exists()).toBe(false)
  })

  it('routes the customers section to list and detail without changing the path', async () => {
    routeState.query = { section: 'customers' }
    const wrapper = mountWorkspace()
    expect(wrapper.find('[data-testid="customers"]').exists()).toBe(true)

    routeState.query = { section: 'customers', user_id: '42' }
    await wrapper.vm.$nextTick()
    expect(wrapper.get('[data-testid="customer-detail"]').text()).toBe('42')
    expect(wrapper.get('[data-testid="affiliate-tab-customers"]').attributes('aria-selected')).toBe('true')
  })

  it('routes exclusive agents through the shared customer list and preserves detail context', async () => {
    routeState.query = { section: 'exclusive_agents' }
    const wrapper = mountWorkspace()
    expect(wrapper.find('[data-testid="customers"]').exists()).toBe(true)
    expect(wrapper.getComponent({ name: 'AdminAffiliateCustomers' }).props('exclusiveOnly')).toBe(true)

    routeState.query = { section: 'exclusive_agents', user_id: '42' }
    await wrapper.vm.$nextTick()
    expect(wrapper.get('[data-testid="customer-detail"]').text()).toBe('42')
    expect(wrapper.getComponent({ name: 'AdminAffiliateCustomerDetail' }).props('returnSection')).toBe('exclusive_agents')
    expect(wrapper.get('[data-testid="affiliate-tab-exclusive-agents"]').attributes('aria-selected')).toBe('true')
  })

  it('keeps settings query-only and transfer pages independent', () => {
    routeState.query = { section: 'settings' }
    const settingsWrapper = mountWorkspace()
    expect(settingsWrapper.find('[data-testid="settings"]').exists()).toBe(true)

    routeState.query = {}
    const transferWrapper = mountWorkspace('transfers')
    expect(transferWrapper.get('[data-testid="affiliate-tab-transfers"]').attributes('aria-selected')).toBe('true')
    expect(transferWrapper.find('[data-testid="records"]').exists()).toBe(true)
  })
})
