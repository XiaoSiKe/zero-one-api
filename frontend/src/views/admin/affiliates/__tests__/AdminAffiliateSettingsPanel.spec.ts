import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent } from 'vue'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'

import AdminAffiliateSettingsPanel from '../AdminAffiliateSettingsPanel.vue'

const {
  getSettings,
  updateSettings,
  listUsers,
  lookupUsers,
  updateUserSettings,
  clearUserSettings,
  batchSetRate,
  showError,
  showSuccess,
  fetchPublicSettings,
  fetchAdminSettings,
} = vi.hoisted(() => ({
  getSettings: vi.fn(),
  updateSettings: vi.fn(),
  listUsers: vi.fn(),
  lookupUsers: vi.fn(),
  updateUserSettings: vi.fn(),
  clearUserSettings: vi.fn(),
  batchSetRate: vi.fn(),
  showError: vi.fn(),
  showSuccess: vi.fn(),
  fetchPublicSettings: vi.fn(),
  fetchAdminSettings: vi.fn(),
}))

vi.mock('@/api', () => ({
  adminAPI: {
    settings: { getSettings, updateSettings },
  },
}))

vi.mock('@/api/admin/affiliates', () => ({
  affiliatesAPI: {
    listUsers,
    lookupUsers,
    updateUserSettings,
    clearUserSettings,
    batchSetRate,
  },
}))

vi.mock('@/stores', () => ({
  useAppStore: () => ({
    showError,
    showSuccess,
    fetchPublicSettings,
  }),
}))

vi.mock('@/stores/adminSettings', () => ({
  useAdminSettingsStore: () => ({ fetch: fetchAdminSettings }),
}))

vi.mock('@/composables/useStepUp', () => ({
  useStepUp: () => ({ run: (action: () => unknown) => action() }),
  isStepUpBlocked: () => false,
  isStepUpCancelled: () => false,
  stepUpBlockReason: () => '',
}))

vi.mock('vue-i18n', () => ({
  useI18n: () => ({ t: (key: string) => key }),
}))

const ToggleStub = defineComponent({
  props: { modelValue: { type: Boolean, default: false } },
  emits: ['update:modelValue'],
  template: '<button type="button" @click="$emit(\'update:modelValue\', !modelValue)"><slot /></button>',
})

const ConfirmDialogStub = defineComponent({
  props: { show: Boolean },
  emits: ['confirm', 'cancel'],
  template: '<div v-if="show" data-testid="affiliate-confirm"><button data-testid="affiliate-confirm-submit" @click="$emit(\'confirm\')">confirm</button></div>',
})

const TotpStepUpDialogStub = defineComponent({
  template: '<div data-testid="affiliate-settings-step-up" />',
})

const baseAffiliateSettings = {
  affiliate_enabled: true,
  affiliate_rebate_rate: 25,
  affiliate_rebate_freeze_hours: 12,
  affiliate_rebate_duration_days: 90,
  affiliate_rebate_per_invitee_cap: 300,
  affiliate_admin_recharge_enabled: true,
}

const customEntry = {
  user_id: 11,
  email: 'custom@example.com',
  username: 'custom',
  aff_code: 'CUSTOM11',
  aff_code_custom: true,
  aff_rebate_rate_percent: 8,
  aff_count: 2,
}

const secondCustomEntry = {
  user_id: 12,
  email: 'second@example.com',
  username: 'second',
  aff_code: 'AUTO12',
  aff_code_custom: false,
  aff_rebate_rate_percent: null,
  aff_count: 0,
}

function mountPanel() {
  return mount(AdminAffiliateSettingsPanel, {
    global: {
      stubs: {
        Toggle: ToggleStub,
        ConfirmDialog: ConfirmDialogStub,
        TotpStepUpDialog: TotpStepUpDialogStub,
      },
    },
  })
}

async function selectLookupUser(wrapper: VueWrapper) {
  await wrapper.get('[data-testid="affiliate-user-search"]').setValue('legacy')
  await vi.advanceTimersByTimeAsync(301)
  await flushPromises()
  await wrapper.get('[data-testid="affiliate-user-result-77"]').trigger('click')
}

describe('AdminAffiliateSettingsPanel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
    getSettings.mockResolvedValue({
      ...baseAffiliateSettings,
      site_name: 'must-not-be-written',
    })
    updateSettings.mockImplementation(async (payload) => ({
      ...baseAffiliateSettings,
      ...payload,
    }))
    listUsers.mockResolvedValue({ items: [], total: 0, page: 1, page_size: 20 })
    lookupUsers.mockResolvedValue([{ id: 77, email: 'legacy@example.com', username: 'legacy' }])
    updateUserSettings.mockResolvedValue({ user_id: 77 })
    clearUserSettings.mockResolvedValue({ user_id: 11 })
    batchSetRate.mockResolvedValue({ affected: 2 })
    fetchPublicSettings.mockResolvedValue(undefined)
    fetchAdminSettings.mockResolvedValue(undefined)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('loads affiliate settings and saves exactly the six owned fields', async () => {
    const wrapper = mountPanel()
    await flushPromises()

    expect(getSettings).toHaveBeenCalledTimes(1)
    expect(listUsers).toHaveBeenCalledTimes(1)
    expect(wrapper.findAll('[data-testid="affiliate-settings-step-up"]')).toHaveLength(1)

    await wrapper.get('[data-testid="affiliate-rebate-rate"]').setValue('30')
    await wrapper.get('[data-testid="affiliate-settings-save"]').trigger('click')
    await flushPromises()

    expect(updateSettings).toHaveBeenCalledTimes(1)
    const payload = updateSettings.mock.calls[0]?.[0]
    expect(payload).toEqual({
      affiliate_enabled: true,
      affiliate_rebate_rate: 30,
      affiliate_rebate_freeze_hours: 12,
      affiliate_rebate_duration_days: 90,
      affiliate_rebate_per_invitee_cap: 300,
      affiliate_admin_recharge_enabled: true,
    })
    expect(Object.keys(payload)).toHaveLength(6)
    expect(fetchPublicSettings).toHaveBeenCalledWith(true)
    expect(fetchAdminSettings).toHaveBeenCalledWith(true)
  })

  it('looks up a user and creates exact custom code and rebate-rate settings', async () => {
    const wrapper = mountPanel()
    await flushPromises()
    await wrapper.get('[data-testid="affiliate-custom-user-add"]').trigger('click')
    await selectLookupUser(wrapper)

    await wrapper.get('[data-testid="affiliate-user-code"]').setValue('special77')
    await wrapper.get('[data-testid="affiliate-user-rate"]').setValue('7.25')
    await wrapper.get('[data-testid="affiliate-user-save"]').trigger('click')
    await flushPromises()

    expect(lookupUsers).toHaveBeenCalledWith('legacy')
    expect(updateUserSettings).toHaveBeenCalledWith(77, {
      aff_code: 'SPECIAL77',
      aff_rebate_rate_percent: 7.25,
    })
    expect(listUsers).toHaveBeenCalledTimes(2)
    expect(showSuccess).toHaveBeenCalledWith('common.saved')
    expect(wrapper.find('[data-testid="affiliate-user-search"]').exists()).toBe(false)
  })

  it('keeps the selected user and entered settings when create fails', async () => {
    updateUserSettings.mockRejectedValueOnce(new Error('save failed'))
    const wrapper = mountPanel()
    await flushPromises()
    await wrapper.get('[data-testid="affiliate-custom-user-add"]').trigger('click')
    await selectLookupUser(wrapper)
    await wrapper.get('[data-testid="affiliate-user-code"]').setValue('retry77')

    await wrapper.get('[data-testid="affiliate-user-save"]').trigger('click')
    await flushPromises()

    expect(wrapper.text()).toContain('legacy@example.com')
    expect((wrapper.get('[data-testid="affiliate-user-code"]').element as HTMLInputElement).value).toBe('retry77')
    expect(listUsers).toHaveBeenCalledTimes(1)
    expect(showError).toHaveBeenCalled()
  })

  it('resets one custom user through confirmation and refreshes the list', async () => {
    listUsers.mockResolvedValue({
      items: [customEntry],
      total: 1,
      page: 1,
      page_size: 20,
    })
    const wrapper = mountPanel()
    await flushPromises()

    await wrapper.get('[data-testid="affiliate-user-reset-11"]').trigger('click')
    expect(wrapper.find('[data-testid="affiliate-confirm"]').exists()).toBe(true)
    await wrapper.get('[data-testid="affiliate-confirm-submit"]').trigger('click')
    await flushPromises()

    expect(clearUserSettings).toHaveBeenCalledWith(11)
    expect(listUsers).toHaveBeenCalledTimes(2)
    expect(showSuccess).toHaveBeenCalledWith('common.saved')
  })

  it('applies one exact rebate rate to selected users and clears selection after success', async () => {
    listUsers.mockResolvedValue({
      items: [customEntry, secondCustomEntry],
      total: 2,
      page: 1,
      page_size: 20,
    })
    const wrapper = mountPanel()
    await flushPromises()

    await wrapper.get('[data-testid="affiliate-user-select-11"]').setValue(true)
    await wrapper.get('[data-testid="affiliate-user-select-12"]').setValue(true)
    await wrapper.get('[data-testid="affiliate-batch-open"]').trigger('click')
    await wrapper.get('[data-testid="affiliate-batch-rate"]').setValue('6.5')
    await wrapper.get('[data-testid="affiliate-batch-save"]').trigger('click')
    await flushPromises()

    expect(batchSetRate).toHaveBeenCalledWith({
      user_ids: [11, 12],
      aff_rebate_rate_percent: 6.5,
    })
    expect(listUsers).toHaveBeenCalledTimes(2)
    expect(showSuccess).toHaveBeenCalledWith('common.saved')
    expect(wrapper.find('[data-testid="affiliate-batch-open"]').exists()).toBe(false)
  })
})
