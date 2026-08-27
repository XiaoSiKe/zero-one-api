import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

import RedeemView from '../RedeemView.vue'

const { listRedeemCodes, batchUpdateRedeemCodes, generateRedeemCodes, stepUpRun, getAllGroups, showSuccess, showError, showInfo } =
  vi.hoisted(() => ({
    listRedeemCodes: vi.fn(),
    batchUpdateRedeemCodes: vi.fn(),
    generateRedeemCodes: vi.fn(),
    stepUpRun: vi.fn(),
    getAllGroups: vi.fn(),
    showSuccess: vi.fn(),
    showError: vi.fn(),
    showInfo: vi.fn()
  }))

vi.mock('@/api/admin', () => ({
  adminAPI: {
    redeem: {
      list: listRedeemCodes,
      generate: generateRedeemCodes,
      delete: vi.fn(),
      batchDelete: vi.fn(),
      batchUpdate: batchUpdateRedeemCodes,
      exportCodes: vi.fn()
    },
    groups: {
      getAll: getAllGroups
    }
  }
}))

vi.mock('@/composables/useStepUp', () => ({
  useStepUp: () => ({ run: stepUpRun, visible: false }),
  isStepUpCancelled: (error: { code?: string }) => error?.code === 'STEP_UP_CANCELLED',
  isStepUpBlocked: (error: { code?: string }) => error?.code === 'STEP_UP_TOTP_NOT_ENABLED',
  stepUpBlockReason: (error: { code?: string }) => error?.code,
}))

vi.mock('@/stores/app', () => ({
  useAppStore: () => ({
    showSuccess,
    showError,
    showInfo
  })
}))

vi.mock('@/composables/useClipboard', () => ({
  useClipboard: () => ({
    copyToClipboard: vi.fn()
  })
}))

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({
      t: (key: string) => key
    })
  }
})

const DataTableStub = {
  props: ['columns', 'data'],
  template: `
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">
            <slot :name="'header-' + column.key" :column="column">{{ column.label }}</slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="column in columns" :key="column.key">
            <slot :name="'cell-' + column.key" :row="row" :value="row[column.key]">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  `
}

const SelectStub = {
  props: ['modelValue', 'options'],
  emits: ['update:modelValue', 'change'],
  setup(props: { options: Array<{ value: unknown; label: string }> }, { emit }: { emit: (event: string, ...args: unknown[]) => void }) {
    const onChange = (event: Event) => {
      const raw = (event.target as HTMLSelectElement).value
      const option = props.options.find((item) => String(item.value ?? '') === raw)
      const value = option ? option.value : raw
      emit('update:modelValue', value)
      emit('change', value, option ?? null)
    }
    return { onChange }
  },
  template: `
    <select v-bind="$attrs" :value="modelValue ?? ''" @change="onChange">
      <option v-for="option in options" :key="String(option.value ?? '')" :value="option.value ?? ''">
        {{ option.label }}
      </option>
    </select>
  `
}

const mountView = () => mount(RedeemView, {
  attachTo: document.body,
  global: {
    stubs: {
      TablePageLayout: { template: '<div><slot name="filters" /><slot name="table" /><slot name="pagination" /></div>' },
      DataTable: DataTableStub, Pagination: true, ConfirmDialog: true, Select: SelectStub,
      GroupBadge: true, GroupOptionItem: true, Icon: true, Teleport: true, TotpStepUpDialog: true,
    },
  },
})

describe('admin RedeemView batch update', () => {
  beforeEach(() => {
    localStorage.clear()
    document.body.innerHTML = ''

    listRedeemCodes.mockReset()
    batchUpdateRedeemCodes.mockReset()
    generateRedeemCodes.mockReset().mockResolvedValue([{ id: 7, code: 'ONE-TIME-CODE' }])
    stepUpRun.mockReset().mockImplementation((action: () => Promise<unknown>) => action())
    getAllGroups.mockReset()
    showSuccess.mockReset()
    showError.mockReset()
    showInfo.mockReset()

    listRedeemCodes.mockResolvedValue({
      items: [
        {
          id: 1,
          code: 'CODE-1',
          type: 'balance',
          value: 10,
          status: 'unused',
          used_by: null,
          used_at: null,
          created_at: '2026-01-01T00:00:00Z',
          expires_at: null
        },
        {
          id: 2,
          code: 'CODE-2',
          type: 'balance',
          value: 20,
          status: 'unused',
          used_by: null,
          used_at: null,
          created_at: '2026-01-01T00:00:00Z',
          expires_at: null
        }
      ],
      total: 2,
      page: 1,
      page_size: 20,
      pages: 1
    })
    batchUpdateRedeemCodes.mockResolvedValue({ updated: 1, message: 'ok' })
    getAllGroups.mockResolvedValue([])
  })

  it('submits only checked fields for selected redeem codes', async () => {
    const wrapper = mount(RedeemView, {
      attachTo: document.body,
      global: {
        stubs: {
          AppLayout: { template: '<div><slot /></div>' },
          TablePageLayout: {
            template: '<div><slot name="filters" /><slot name="table" /><slot name="pagination" /></div>'
          },
          DataTable: DataTableStub,
          Pagination: true,
          ConfirmDialog: true,
          Select: SelectStub,
          GroupBadge: true,
          GroupOptionItem: true,
          Icon: true,
          Teleport: true
        }
      }
    })

    await flushPromises()
    await wrapper.findAll('[data-test="select-code"]')[0].setValue(true)
    await wrapper.get('[data-test="batch-update-open"]').trigger('click')
    await flushPromises()

    await wrapper.get('[data-test="batch-field-status"]').setValue(true)
    await wrapper.get('[data-test="batch-status-select"]').setValue('disabled')
    await wrapper.get('[data-test="batch-field-notes"]').setValue(true)
    await wrapper.get('[data-test="batch-notes-input"]').setValue('maintenance')
    await wrapper.get('[data-test="batch-update-form"]').trigger('submit')
    await flushPromises()

    expect(batchUpdateRedeemCodes).toHaveBeenCalledWith([1], {
      status: 'disabled',
      notes: 'maintenance'
    })
    expect(showSuccess).toHaveBeenCalledWith('admin.redeem.batchUpdateSuccess')
  })

  it('exposes direct benefit and mystery-box generation actions', async () => {
    const wrapper = mount(RedeemView, {
      attachTo: document.body,
      global: {
        stubs: {
          AppLayout: { template: '<div><slot /></div>' },
          TablePageLayout: {
            template: '<div><slot name="filters" /><slot name="table" /><slot name="pagination" /></div>'
          },
          DataTable: DataTableStub,
          Pagination: true,
          ConfirmDialog: true,
          Select: SelectStub,
          GroupBadge: true,
          GroupOptionItem: true,
          Icon: true,
          Teleport: true
        }
      }
    })

    await flushPromises()
    expect(wrapper.find('[data-test="generate-benefit"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="generate-mystery-box"]').exists()).toBe(true)

    await wrapper.get('[data-test="generate-mystery-box"]').trigger('click')
    await flushPromises()
    expect(wrapper.get('[data-test="generate-type-select"]').element).toHaveProperty(
      'value',
      'mystery_box'
    )
  })

  it('validates benefit whole cents before sending a generation request', async () => {
    const wrapper = mountView()
    await flushPromises()
    await wrapper.get('[data-test="generate-benefit"]').trigger('click')
    await wrapper.get('input[type="number"][step="0.01"]').setValue('0.001')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    expect(generateRedeemCodes).not.toHaveBeenCalled()
    expect(showError).toHaveBeenCalledWith('admin.redeem.invalidAmount')
    wrapper.unmount()
  })

  it('freezes generation parameters before step-up and ignores duplicate submissions', async () => {
    let performAction!: () => Promise<unknown>
    let release!: (value: unknown) => void
    stepUpRun.mockImplementation((action: () => Promise<unknown>) => {
      performAction = action
      return new Promise((resolve) => { release = resolve })
    })
    const wrapper = mountView()
    await flushPromises()
    await wrapper.get('[data-test="generate-benefit"]').trigger('click')
    const amount = wrapper.get('input[type="number"][step="0.01"]')
    await amount.setValue('2.5')
    const form = wrapper.get('form').element
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    await amount.setValue('9')
    expect(stepUpRun).toHaveBeenCalledTimes(1)
    release(await performAction())
    await flushPromises()
    expect(generateRedeemCodes).toHaveBeenCalledWith(1, 'benefit', 2.5, undefined, undefined, undefined, undefined, undefined)
    expect(wrapper.get('textarea[readonly]').element).toHaveProperty('value', 'ONE-TIME-CODE')
    wrapper.unmount()
  })

  it('returns to the first page when changing the code type filter', async () => {
    const wrapper = mountView()
    await flushPromises()
    wrapper.getComponent({ name: 'Pagination' }).vm.$emit('update:page', 3)
    await flushPromises()
    expect(listRedeemCodes.mock.lastCall?.[0]).toBe(3)
    await wrapper.findAll('select')[0].setValue('benefit')
    await flushPromises()
    expect(listRedeemCodes.mock.lastCall?.[0]).toBe(1)
    expect(listRedeemCodes.mock.lastCall?.[2]).toMatchObject({ type: 'benefit' })
    wrapper.unmount()
  })

  it.each([
    ['STEP_UP_CANCELLED', undefined],
    ['STEP_UP_TOTP_NOT_ENABLED', 'stepUp.notEnabled'],
    ['INVALID_AMOUNT', '金额超出限制'],
  ])('does not announce generation success for %s', async (code, message) => {
    stepUpRun.mockRejectedValue({ code, message })
    const wrapper = mountView()
    await flushPromises()
    await wrapper.get('[data-test="generate-benefit"]').trigger('click')
    await wrapper.get('form').trigger('submit')
    await flushPromises()
    expect(wrapper.find('textarea[readonly]').exists()).toBe(false)
    expect(wrapper.get('button[type="submit"]').attributes('disabled')).toBeUndefined()
    if (message) expect(showError).toHaveBeenCalledWith(message)
    else expect(showError).not.toHaveBeenCalled()
    expect(generateRedeemCodes).not.toHaveBeenCalled()
    wrapper.unmount()
  })
})
