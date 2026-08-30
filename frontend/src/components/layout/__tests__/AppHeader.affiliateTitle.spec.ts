import { beforeEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import AppHeader from '../AppHeader.vue'

const routeState = reactive({
  name: 'AdminAffiliateInvites',
  params: {} as Record<string, string>,
  query: {} as Record<string, string>,
  meta: {
    title: 'Affiliate Invite Records',
    titleKey: 'nav.affiliateInviteRecords',
    descriptionKey: 'admin.affiliates.invitesDescription',
  },
})

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: vi.fn() }),
  useRoute: () => routeState,
}))

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({ t: (key: string) => key }),
  }
})

function mountHeader() {
  return mount(AppHeader, {
    global: {
      stubs: {
        AnnouncementBell: true,
        CommunityQrEntry: true,
        Icon: true,
        LocaleSwitcher: true,
        RouterLink: { template: '<a><slot /></a>' },
        SubscriptionProgressMini: true,
      },
    },
  })
}

describe('AppHeader affiliate workspace title', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    routeState.query = {}
  })

  it('distinguishes invite records, customer relations, and customer detail', async () => {
    const wrapper = mountHeader()
    expect(wrapper.get('h1').text()).toBe('nav.affiliateInviteRecords')
    expect(wrapper.get('h1 + p').text()).toBe('admin.affiliates.invitesDescription')

    routeState.query = { section: 'customers' }
    await wrapper.vm.$nextTick()
    expect(wrapper.get('h1').text()).toBe('admin.affiliates.tabs.customers')
    expect(wrapper.get('h1 + p').text()).toBe('admin.affiliates.customers.description')

    routeState.query = { section: 'customers', user_id: '42' }
    await wrapper.vm.$nextTick()
    expect(wrapper.get('h1').text()).toBe('admin.affiliates.customers.detailTitle')
    expect(wrapper.get('h1 + p').text()).toBe('admin.affiliates.customers.detailDescription')
  })

  it('uses operations settings copy for the settings query', () => {
    routeState.query = { section: 'settings' }
    const wrapper = mountHeader()

    expect(wrapper.get('h1').text()).toBe('admin.affiliates.tabs.settings')
    expect(wrapper.get('h1 + p').text()).toBe('admin.affiliates.settings.description')
  })

  it('uses exclusive-agent copy and keeps the shared customer detail title', async () => {
    routeState.query = { section: 'exclusive_agents' }
    const wrapper = mountHeader()
    expect(wrapper.get('h1').text()).toBe('admin.affiliates.tabs.exclusiveAgents')
    expect(wrapper.get('h1 + p').text()).toBe('admin.affiliates.customers.exclusiveDescription')

    routeState.query = { section: 'exclusive_agents', user_id: '42' }
    await wrapper.vm.$nextTick()
    expect(wrapper.get('h1').text()).toBe('admin.affiliates.customers.detailTitle')
    expect(wrapper.get('h1 + p').text()).toBe('admin.affiliates.customers.detailDescription')
  })
})
