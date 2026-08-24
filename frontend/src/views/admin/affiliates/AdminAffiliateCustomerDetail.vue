<template>
  <div class="space-y-6" data-testid="affiliate-customer-detail">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <RouterLink
        :to="{ path: '/admin/affiliates/invites', query: { section: 'customers' } }"
        class="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
        data-testid="affiliate-customer-back"
      >
        <span aria-hidden="true">&larr;</span>
        {{ t('admin.affiliates.customers.back') }}
      </RouterLink>
      <button
        type="button"
        class="btn btn-primary"
        data-testid="open-affiliate-bind-dialog"
        :disabled="loading || !overview"
        @click="openBindDialog"
      >
        {{ t('admin.affiliates.binding.button') }}
      </button>
    </div>

    <div v-if="loading && !overview" class="flex justify-center py-12">
      <div class="h-7 w-7 animate-spin rounded-full border-2 border-primary-500 border-t-transparent"></div>
    </div>

    <template v-else-if="overview">
      <section class="rounded-xl border border-gray-200 bg-white p-5 dark:border-dark-700 dark:bg-dark-900">
        <div class="mb-5">
          <div class="font-mono text-sm text-gray-500 dark:text-dark-400">#{{ overview.user_id }}</div>
          <h2 class="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{{ overview.email || '-' }}</h2>
          <p class="mt-0.5 text-sm text-gray-500 dark:text-dark-400">{{ overview.username || '-' }}</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          <OverviewStat :label="t('admin.affiliates.overview.affCode')" :value="overview.aff_code || '-'" mono />
          <OverviewStat :label="t('admin.affiliates.overview.rebateRate')" :value="formatPercent(overview.rebate_rate_percent)" />
          <OverviewStat :label="t('admin.affiliates.overview.invitedCount')" :value="String(overview.invited_count)" />
          <OverviewStat :label="t('admin.affiliates.overview.rebatedInviteeCount')" :value="String(overview.rebated_invitee_count)" />
          <OverviewStat :label="t('admin.affiliates.overview.availableQuota')" :value="'$' + formatAmount(overview.available_quota)" />
          <OverviewStat :label="t('admin.affiliates.overview.historyQuota')" :value="'$' + formatAmount(overview.history_quota)" />
        </div>
      </section>

      <TablePageLayout>
        <template #filters>
          <div class="flex flex-wrap items-center gap-3">
            <div class="relative w-full md:w-80">
              <Icon name="search" size="md" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                v-model="search"
                type="text"
                class="input pl-10"
                :placeholder="t('admin.affiliates.customers.inviteeSearchPlaceholder')"
                @input="scheduleInviteSearch"
              />
            </div>
            <button
              class="btn btn-secondary px-2 md:px-3"
              :disabled="loading"
              :title="t('common.refresh')"
              @click="loadCustomer"
            >
              <Icon name="refresh" size="md" :class="loading ? 'animate-spin' : ''" />
            </button>
          </div>
        </template>

        <template #table>
          <DataTable :columns="columns" :data="invitees" :loading="loading">
            <template #cell-invitee="{ row }">
              <div class="space-y-0.5">
                <div class="font-mono text-sm text-gray-900 dark:text-white">#{{ row.invitee_id }}</div>
                <div class="max-w-56 truncate text-sm font-medium text-gray-900 dark:text-white">{{ row.invitee_email || '-' }}</div>
                <div class="max-w-56 truncate text-sm text-gray-500 dark:text-dark-400">{{ row.invitee_username || '-' }}</div>
              </div>
            </template>
            <template #cell-aff_code="{ row }">
              <span class="font-mono text-sm text-gray-700 dark:text-gray-300">{{ row.aff_code || '-' }}</span>
            </template>
            <template #cell-total_rebate="{ row }">
              <span class="text-sm text-gray-900 dark:text-white">${{ formatAmount(row.total_rebate) }}</span>
            </template>
            <template #cell-created_at="{ row }">
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ formatDateTime(row.created_at) }}</span>
            </template>
          </DataTable>
        </template>

        <template #pagination>
          <Pagination
            v-if="pagination.total > 0"
            :page="pagination.page"
            :total="pagination.total"
            :page-size="pagination.page_size"
            @update:page="handlePageChange"
            @update:pageSize="handlePageSizeChange"
          />
        </template>
      </TablePageLayout>
    </template>

    <BaseDialog
      :show="bindDialogOpen"
      :title="t('admin.affiliates.binding.title')"
      width="normal"
      :close-on-escape="!binding"
      :show-close-button="!binding"
      @close="closeBindDialog"
    >
      <div class="space-y-5">
        <p class="text-sm text-gray-600 dark:text-dark-300">
          {{ t('admin.affiliates.binding.description') }}
        </p>

        <div
          v-if="overview"
          class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-dark-700 dark:bg-dark-800"
          data-testid="bind-fixed-inviter"
        >
          <div class="text-xs text-gray-500 dark:text-dark-400">{{ t('admin.affiliates.binding.inviter') }}</div>
          <div class="mt-1 truncate text-sm font-medium text-gray-900 dark:text-white">{{ overview.email || '-' }}</div>
          <div class="truncate text-xs text-gray-500 dark:text-dark-400">#{{ overview.user_id }} · {{ overview.username || '-' }}</div>
        </div>

        <div>
          <label class="input-label">{{ t('admin.affiliates.binding.invitee') }}</label>
          <div
            v-if="inviteePicker.selected"
            class="flex items-center justify-between rounded-lg border border-primary-200 bg-primary-50 px-3 py-2 dark:border-primary-700/50 dark:bg-primary-900/20"
            data-testid="bind-invitee-selected"
          >
            <div class="min-w-0 text-sm">
              <div class="truncate font-medium text-gray-900 dark:text-white">{{ inviteePicker.selected.email }}</div>
              <div class="truncate text-xs text-gray-500 dark:text-dark-400">#{{ inviteePicker.selected.id }} · {{ inviteePicker.selected.username || '-' }}</div>
            </div>
            <button type="button" class="ml-3 text-gray-400 hover:text-red-600" @click="resetInviteePicker">×</button>
          </div>
          <template v-else>
            <input
              v-model="inviteePicker.query"
              type="text"
              class="input"
              data-testid="bind-invitee-search"
              :placeholder="t('admin.affiliates.binding.searchPlaceholder')"
              @input="scheduleUserLookup"
            />
            <div v-if="inviteePicker.loading" class="mt-2 text-xs text-gray-500">{{ t('common.loading') }}</div>
            <div v-else-if="inviteePicker.results.length" class="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-200 dark:border-dark-700">
              <button
                v-for="user in inviteePicker.results"
                :key="user.id"
                type="button"
                class="block w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-800"
                :data-testid="`bind-invitee-result-${user.id}`"
                @click="selectInvitee(user)"
              >
                <span class="font-medium text-gray-900 dark:text-white">{{ user.email }}</span>
                <span class="ml-1 text-xs text-gray-500">#{{ user.id }} · {{ user.username || '-' }}</span>
              </button>
            </div>
          </template>
        </div>

        <div class="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-800/60 dark:bg-amber-900/20 dark:text-amber-200">
          {{ t('admin.affiliates.binding.confirmation') }}
        </div>
      </div>

      <template #footer>
        <button type="button" class="btn btn-secondary" :disabled="binding" @click="closeBindDialog">
          {{ t('common.cancel') }}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-testid="confirm-affiliate-bind"
          :disabled="!inviteePicker.selected || binding"
          @click="submitBindRelationship"
        >
          {{ binding ? t('admin.affiliates.binding.binding') : t('admin.affiliates.binding.confirm') }}
        </button>
      </template>
    </BaseDialog>

    <TotpStepUpDialog :controller="bindStepUp" />
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import affiliatesAPI, {
  type AffiliateInviteRecord,
  type AffiliateUserOverview,
  type SimpleUser,
} from '@/api/admin/affiliates'
import TotpStepUpDialog from '@/components/auth/TotpStepUpDialog.vue'
import BaseDialog from '@/components/common/BaseDialog.vue'
import DataTable from '@/components/common/DataTable.vue'
import Pagination from '@/components/common/Pagination.vue'
import type { Column } from '@/components/common/types'
import Icon from '@/components/icons/Icon.vue'
import TablePageLayout from '@/components/layout/TablePageLayout.vue'
import { isStepUpBlocked, isStepUpCancelled, stepUpBlockReason, useStepUp } from '@/composables/useStepUp'
import { useAppStore } from '@/stores/app'
import { extractI18nErrorMessage } from '@/utils/apiError'
import { formatDateTime as formatDisplayDateTime } from '@/utils/format'

const props = defineProps<{
  userId: number
}>()

const { t } = useI18n()
const appStore = useAppStore()
const bindStepUp = useStepUp()
const loading = ref(false)
const overview = ref<AffiliateUserOverview | null>(null)
const invitees = ref<AffiliateInviteRecord[]>([])
const search = ref('')
const pagination = reactive({ page: 1, page_size: 20, total: 0 })
const bindDialogOpen = ref(false)
const binding = ref(false)
let inviteSearchTimer: ReturnType<typeof setTimeout> | null = null
let customerRequestSequence = 0
let lookupRequestSequence = 0

interface InviteePickerState {
  query: string
  results: SimpleUser[]
  selected: SimpleUser | null
  loading: boolean
  searchTimer: ReturnType<typeof setTimeout> | null
}

const inviteePicker = reactive<InviteePickerState>({
  query: '',
  results: [],
  selected: null,
  loading: false,
  searchTimer: null,
})

const columns = computed<Column[]>(() => [
  { key: 'invitee', label: t('admin.affiliates.records.invitee') },
  { key: 'aff_code', label: t('admin.affiliates.records.affCode') },
  { key: 'total_rebate', label: t('admin.affiliates.records.totalRebate') },
  { key: 'created_at', label: t('admin.affiliates.records.invitedAt') },
])

async function loadCustomer() {
  const requestSequence = ++customerRequestSequence
  loading.value = true
  try {
    const [nextOverview, inviteResponse] = await Promise.all([
      affiliatesAPI.getUserOverview(props.userId),
      affiliatesAPI.listInviteRecords({
        inviter_id: props.userId,
        page: pagination.page,
        page_size: pagination.page_size,
        search: search.value.trim() || undefined,
        sort_by: 'created_at',
        sort_order: 'desc',
      }),
    ])
    if (requestSequence !== customerRequestSequence) return
    overview.value = nextOverview
    invitees.value = inviteResponse.items || []
    pagination.total = inviteResponse.total || 0
  } catch (error) {
    if (requestSequence !== customerRequestSequence) return
    appStore.showError(
      extractI18nErrorMessage(error, t, 'admin.affiliates.errors', t('admin.affiliates.customers.detailLoadFailed')),
    )
  } finally {
    if (requestSequence === customerRequestSequence) loading.value = false
  }
}

function scheduleInviteSearch() {
  if (inviteSearchTimer) clearTimeout(inviteSearchTimer)
  inviteSearchTimer = setTimeout(() => {
    pagination.page = 1
    void loadCustomer()
  }, 300)
}

function handlePageChange(page: number) {
  pagination.page = page
  void loadCustomer()
}

function handlePageSizeChange(size: number) {
  pagination.page_size = size
  pagination.page = 1
  void loadCustomer()
}

function resetInviteePicker() {
  lookupRequestSequence += 1
  if (inviteePicker.searchTimer) clearTimeout(inviteePicker.searchTimer)
  inviteePicker.query = ''
  inviteePicker.results = []
  inviteePicker.selected = null
  inviteePicker.loading = false
  inviteePicker.searchTimer = null
}

function openBindDialog() {
  resetInviteePicker()
  bindDialogOpen.value = true
}

function closeBindDialog() {
  if (binding.value) return
  bindDialogOpen.value = false
  resetInviteePicker()
}

function scheduleUserLookup() {
  if (inviteePicker.searchTimer) clearTimeout(inviteePicker.searchTimer)
  const requestSequence = ++lookupRequestSequence
  const query = inviteePicker.query.trim()
  if (!query) {
    inviteePicker.results = []
    inviteePicker.loading = false
    return
  }
  inviteePicker.searchTimer = setTimeout(async () => {
    inviteePicker.loading = true
    try {
      const results = await affiliatesAPI.lookupUsers(query)
      if (requestSequence === lookupRequestSequence && inviteePicker.query.trim() === query) {
        inviteePicker.results = results.filter((user) => user.id !== props.userId)
      }
    } catch (error) {
      if (requestSequence !== lookupRequestSequence) return
      appStore.showError(
        extractI18nErrorMessage(error, t, 'admin.affiliates.errors', t('common.error')),
      )
    } finally {
      if (requestSequence === lookupRequestSequence) {
        inviteePicker.loading = false
        inviteePicker.searchTimer = null
      }
    }
  }, 300)
}

function selectInvitee(user: SimpleUser) {
  inviteePicker.selected = user
  inviteePicker.query = ''
  inviteePicker.results = []
}

async function submitBindRelationship() {
  if (!inviteePicker.selected) return
  const inviterId = props.userId
  const inviteeId = inviteePicker.selected.id
  binding.value = true
  try {
    await bindStepUp.run(() => affiliatesAPI.bindRelationship({
      inviter_id: inviterId,
      invitee_id: inviteeId,
    }))
    appStore.showSuccess(t('admin.affiliates.binding.success'))
    bindDialogOpen.value = false
    resetInviteePicker()
    pagination.page = 1
    await loadCustomer()
  } catch (error) {
    if (isStepUpCancelled(error)) return
    if (isStepUpBlocked(error)) {
      appStore.showError(
        stepUpBlockReason(error) === 'STEP_UP_ADMIN_API_KEY_FORBIDDEN'
          ? t('stepUp.adminApiKeyForbidden')
          : t('stepUp.notEnabled'),
      )
      return
    }
    appStore.showError(
      extractI18nErrorMessage(error, t, 'admin.affiliates.errors', t('admin.affiliates.binding.failed')),
    )
  } finally {
    binding.value = false
  }
}

function formatAmount(value: number | null | undefined): string {
  return Number(value || 0).toFixed(2)
}

function formatPercent(value: number | null | undefined): string {
  const rounded = Math.round(Number(value || 0) * 100) / 100
  return `${rounded}%`
}

function formatDateTime(value: string | null | undefined): string {
  return value ? formatDisplayDateTime(value) : '-'
}

const OverviewStat = defineComponent({
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    mono: { type: Boolean, default: false },
  },
  setup(statProps) {
    return () => h('div', { class: 'rounded-lg border border-gray-100 bg-gray-50 p-3 dark:border-dark-700 dark:bg-dark-800' }, [
      h('div', { class: 'text-sm text-gray-500 dark:text-dark-400' }, statProps.label),
      h('div', {
        class: statProps.mono
          ? 'mt-1 font-mono text-base font-semibold text-gray-900 dark:text-white'
          : 'mt-1 text-base font-semibold text-gray-900 dark:text-white',
      }, statProps.value),
    ])
  },
})

watch(
  () => props.userId,
  () => {
    overview.value = null
    invitees.value = []
    pagination.total = 0
    pagination.page = 1
    search.value = ''
    bindDialogOpen.value = false
    resetInviteePicker()
    void loadCustomer()
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  customerRequestSequence += 1
  if (inviteSearchTimer) clearTimeout(inviteSearchTimer)
  resetInviteePicker()
})
</script>
