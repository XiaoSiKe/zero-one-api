import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'

import AdminAffiliateRecordsTable from '../AdminAffiliateRecordsTable.vue'

const { listInviteRecords, listRebateRecords, listTransferRecords } = vi.hoisted(() => ({
  listInviteRecords: vi.fn(),
  listRebateRecords: vi.fn(),
  listTransferRecords: vi.fn(),
}))

vi.mock('@/api/admin/affiliates', () => ({
  affiliatesAPI: {
    listInviteRecords,
    listRebateRecords,
    listTransferRecords,
    getUserOverview: vi.fn(),
  },
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({ showError: vi.fn() }),
}))

vi.mock('vue-i18n', async (importOriginal) => ({
  ...(await importOriginal<typeof import('vue-i18n')>()),
  useI18n: () => ({ t: (key: string) => key }),
}))

const TablePageLayoutStub = defineComponent({
  template: '<div><slot name="actions" /><slot name="filters" /><slot name="table" /><slot name="pagination" /></div>',
})

function mountTable(type: 'invites' | 'rebates' | 'transfers' = 'invites') {
  return mount(AdminAffiliateRecordsTable, {
    props: { type },
    global: {
      stubs: {
        TablePageLayout: TablePageLayoutStub,
        BaseDialog: true,
        DataTable: true,
        Pagination: true,
        Icon: true,
        OrderStatusBadge: true,
      },
    },
  })
}

describe('AdminAffiliateRecordsTable', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    listInviteRecords.mockResolvedValue({ items: [], total: 0, page: 1, page_size: 20 })
    listRebateRecords.mockResolvedValue({ items: [], total: 0, page: 1, page_size: 20 })
    listTransferRecords.mockResolvedValue({ items: [], total: 0, page: 1, page_size: 20 })
  })

  afterEach(() => vi.useRealTimers())

  it('keeps the invite ledger records-only', async () => {
    const wrapper = mountTable()
    await flushPromises()

    expect(listInviteRecords).toHaveBeenCalledWith(expect.objectContaining({
      page: 1,
      page_size: 20,
      sort_by: 'created_at',
      sort_order: 'desc',
    }))
    expect(wrapper.find('[data-testid^="affiliate-tab-"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="open-affiliate-bind-dialog"]').exists()).toBe(false)
  })

  it('debounces invite-record searches and resets to the first page', async () => {
    const wrapper = mountTable()
    await flushPromises()
    listInviteRecords.mockClear()

    await wrapper.get('input[type="text"]').setValue('alice@example.com')
    await vi.advanceTimersByTimeAsync(301)
    await flushPromises()

    expect(listInviteRecords).toHaveBeenCalledTimes(1)
    expect(listInviteRecords).toHaveBeenCalledWith(expect.objectContaining({
      page: 1,
      search: 'alice@example.com',
    }))
  })

  it('preserves the separate upstream rebate and transfer loaders', async () => {
    const rebateWrapper = mountTable('rebates')
    await flushPromises()
    expect(listRebateRecords).toHaveBeenCalledTimes(1)
    rebateWrapper.unmount()

    const transferWrapper = mountTable('transfers')
    await flushPromises()
    expect(listTransferRecords).toHaveBeenCalledTimes(1)
    transferWrapper.unmount()
  })
})
