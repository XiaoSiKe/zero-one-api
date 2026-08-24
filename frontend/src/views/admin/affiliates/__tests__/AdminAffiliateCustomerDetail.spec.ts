import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'

import AdminAffiliateCustomerDetail from '../AdminAffiliateCustomerDetail.vue'

const {
  getUserOverview,
  listInviteRecords,
  lookupUsers,
  bindRelationship,
  stepUpRun,
  showError,
  showSuccess,
} = vi.hoisted(() => ({
  getUserOverview: vi.fn(),
  listInviteRecords: vi.fn(),
  lookupUsers: vi.fn(),
  bindRelationship: vi.fn(),
  stepUpRun: vi.fn(),
  showError: vi.fn(),
  showSuccess: vi.fn(),
}))

vi.mock('@/api/admin/affiliates', () => ({
  default: {
    getUserOverview,
    listInviteRecords,
    lookupUsers,
    bindRelationship,
  },
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({ showError, showSuccess }),
}))

vi.mock('@/composables/useStepUp', () => ({
  useStepUp: () => ({ run: stepUpRun }),
  isStepUpBlocked: () => false,
  isStepUpCancelled: () => false,
  stepUpBlockReason: () => '',
}))

vi.mock('vue-router', () => ({
  RouterLink: defineComponent({ template: '<a><slot /></a>' }),
}))

vi.mock('vue-i18n', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue-i18n')>()),
  useI18n: () => ({ t: (key: string) => key }),
}))

const TablePageLayoutStub = defineComponent({
  template: '<div><slot name="actions" /><slot name="filters" /><slot name="table" /><slot name="pagination" /></div>',
})
const DataTableStub = defineComponent({
  props: { data: { type: Array, default: () => [] } },
  template: '<div><div v-for="row in data" :key="row.invitee_id"><slot name="cell-invitee" :row="row" /><slot name="cell-total_rebate" :row="row" /></div></div>',
})
const BaseDialogStub = defineComponent({
  props: { show: Boolean },
  template: '<section v-if="show"><slot /><footer><slot name="footer" /></footer></section>',
})

function mountDetail() {
  return mount(AdminAffiliateCustomerDetail, {
    props: { userId: 11 },
    global: {
      stubs: {
        TablePageLayout: TablePageLayoutStub,
        BaseDialog: BaseDialogStub,
        DataTable: DataTableStub,
        Pagination: true,
        Icon: true,
        TotpStepUpDialog: true,
      },
    },
  })
}

const overview = {
  user_id: 11,
  email: 'inviter@example.com',
  username: 'inviter',
  aff_code: 'AFF11',
  rebate_rate_percent: 5,
  invited_count: 1,
  rebated_invitee_count: 1,
  available_quota: 3,
  history_quota: 8,
}
const invitee = { id: 22, email: 'invitee@example.com', username: 'invitee' }

describe('AdminAffiliateCustomerDetail', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    getUserOverview.mockResolvedValue(overview)
    listInviteRecords.mockResolvedValue({ items: [], total: 0, page: 1, page_size: 20 })
    lookupUsers.mockResolvedValue([invitee])
    bindRelationship.mockResolvedValue({ inviter_id: 11, invitee_id: 22 })
    stepUpRun.mockImplementation((action: () => unknown) => action())
  })

  afterEach(() => vi.useRealTimers())

  it('loads overview and invitee profit records for the fixed route user', async () => {
    listInviteRecords.mockResolvedValueOnce({
      items: [{
        inviter_id: 11,
        inviter_email: 'inviter@example.com',
        inviter_username: 'inviter',
        invitee_id: 22,
        invitee_email: 'invitee@example.com',
        invitee_username: 'invitee',
        aff_code: 'AFF11',
        total_rebate: 12.5,
        created_at: '2026-08-24T00:00:00Z',
      }],
      total: 1,
      page: 1,
      page_size: 20,
    })
    const wrapper = mountDetail()
    await flushPromises()

    expect(getUserOverview).toHaveBeenCalledWith(11)
    expect(listInviteRecords).toHaveBeenCalledWith(expect.objectContaining({
      inviter_id: 11,
      page: 1,
      page_size: 20,
      sort_by: 'created_at',
      sort_order: 'desc',
    }))
    expect(wrapper.find('[data-testid="open-affiliate-bind-dialog"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('invitee@example.com')
    expect(wrapper.text()).toContain('$12.50')
  })

  it('binds only an invitee while locking the inviter to the detail user', async () => {
    const wrapper = mountDetail()
    await flushPromises()
    await wrapper.get('[data-testid="open-affiliate-bind-dialog"]').trigger('click')

    expect(wrapper.find('[data-testid="bind-fixed-inviter"]').text()).toContain('#11')
    expect(wrapper.find('[data-testid="bind-inviter-search"]').exists()).toBe(false)

    await wrapper.get('[data-testid="bind-invitee-search"]').setValue('invitee')
    await vi.advanceTimersByTimeAsync(301)
    await flushPromises()
    await wrapper.get('[data-testid="bind-invitee-result-22"]').trigger('click')

    let releaseStepUp = () => {}
    stepUpRun.mockImplementationOnce((action: () => unknown) => new Promise((resolve, reject) => {
      releaseStepUp = () => {
        Promise.resolve(action()).then(resolve, reject)
      }
    }))
    await wrapper.get('[data-testid="confirm-affiliate-bind"]').trigger('click')
    await wrapper.get('[data-testid="bind-invitee-selected"] button').trigger('click')
    releaseStepUp()
    await flushPromises()

    expect(bindRelationship).toHaveBeenCalledWith({ inviter_id: 11, invitee_id: 22 })
    expect(listInviteRecords).toHaveBeenCalledTimes(2)
    expect(showSuccess).toHaveBeenCalledWith('admin.affiliates.binding.success')
  })

  it('ignores a stale detail response after the route switches to another user', async () => {
    let resolveOldOverview = (_value: typeof overview) => {}
    let resolveOldInvites = (_value: { items: unknown[]; total: number }) => {}
    getUserOverview
      .mockImplementationOnce(() => new Promise((resolve) => { resolveOldOverview = resolve }))
      .mockResolvedValueOnce({ ...overview, user_id: 12, email: 'new@example.com' })
    listInviteRecords
      .mockImplementationOnce(() => new Promise((resolve) => { resolveOldInvites = resolve }))
      .mockResolvedValueOnce({ items: [], total: 0, page: 1, page_size: 20 })

    const wrapper = mountDetail()
    await wrapper.setProps({ userId: 12 })
    await flushPromises()
    expect(wrapper.text()).toContain('new@example.com')

    resolveOldOverview(overview)
    resolveOldInvites({ items: [], total: 0 })
    await flushPromises()

    expect(wrapper.text()).toContain('new@example.com')
    expect(wrapper.text()).not.toContain('inviter@example.com')
  })

  it('keeps the latest lookup loading state and results when an older lookup finishes late', async () => {
    let resolveOldLookup = (_value: Array<typeof invitee>) => {}
    let resolveNewLookup = (_value: Array<typeof invitee>) => {}
    lookupUsers
      .mockImplementationOnce(() => new Promise((resolve) => { resolveOldLookup = resolve }))
      .mockImplementationOnce(() => new Promise((resolve) => { resolveNewLookup = resolve }))

    const wrapper = mountDetail()
    await flushPromises()
    await wrapper.get('[data-testid="open-affiliate-bind-dialog"]').trigger('click')

    await wrapper.get('[data-testid="bind-invitee-search"]').setValue('old')
    await vi.advanceTimersByTimeAsync(301)
    await wrapper.get('[data-testid="bind-invitee-search"]').setValue('new')
    await vi.advanceTimersByTimeAsync(301)
    expect(wrapper.text()).toContain('common.loading')

    resolveOldLookup([invitee])
    await flushPromises()
    expect(wrapper.text()).toContain('common.loading')
    expect(wrapper.find('[data-testid="bind-invitee-result-22"]').exists()).toBe(false)

    resolveNewLookup([{ id: 33, email: 'new@example.com', username: 'new' }])
    await flushPromises()
    expect(wrapper.text()).not.toContain('common.loading')
    expect(wrapper.find('[data-testid="bind-invitee-result-33"]').exists()).toBe(true)
  })

  it('preserves the selected invitee when a conflict is rejected', async () => {
    bindRelationship.mockRejectedValueOnce({
      status: 409,
      reason: 'AFFILIATE_ALREADY_BOUND',
      message: 'already bound',
    })
    const wrapper = mountDetail()
    await flushPromises()
    await wrapper.get('[data-testid="open-affiliate-bind-dialog"]').trigger('click')
    await wrapper.get('[data-testid="bind-invitee-search"]').setValue('invitee')
    await vi.advanceTimersByTimeAsync(301)
    await flushPromises()
    await wrapper.get('[data-testid="bind-invitee-result-22"]').trigger('click')
    await wrapper.get('[data-testid="confirm-affiliate-bind"]').trigger('click')
    await flushPromises()

    expect(wrapper.find('[data-testid="bind-invitee-selected"]').exists()).toBe(true)
    expect(listInviteRecords).toHaveBeenCalledTimes(1)
    expect(showError).toHaveBeenCalled()
  })
})
