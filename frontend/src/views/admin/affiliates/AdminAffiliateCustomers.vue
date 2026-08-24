<template>
  <TablePageLayout>
    <template #filters>
      <div class="flex flex-wrap items-center gap-3">
        <div class="relative w-full md:w-80">
          <Icon
            name="search"
            size="md"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            v-model="search"
            type="text"
            class="input pl-10"
            data-testid="affiliate-customer-search"
            :placeholder="t('admin.affiliates.customers.searchPlaceholder')"
            @input="scheduleSearch"
          />
        </div>
        <button
          class="btn btn-secondary px-2 md:px-3"
          :disabled="loading"
          :title="t('common.refresh')"
          @click="loadCustomers"
        >
          <Icon name="refresh" size="md" :class="loading ? 'animate-spin' : ''" />
        </button>
      </div>
    </template>

    <template #table>
      <DataTable :columns="columns" :data="customers" :loading="loading">
        <template #cell-id="{ row }">
          <span class="font-mono text-sm text-gray-900 dark:text-white">#{{ row.id }}</span>
        </template>
        <template #cell-email="{ row }">
          <RouterLink
            :to="customerDetailLocation(row.id)"
            :data-testid="`affiliate-customer-${row.id}`"
            class="font-medium text-primary-600 hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300"
          >
            {{ row.email || '-' }}
          </RouterLink>
        </template>
        <template #cell-username="{ row }">
          <span class="text-sm text-gray-700 dark:text-gray-300">{{ row.username || '-' }}</span>
        </template>
        <template #cell-role="{ row }">
          <span class="badge" :class="row.role === 'admin' ? 'badge-warning' : 'badge-gray'">
            {{ row.role === 'admin' ? t('admin.users.admin') : t('admin.users.user') }}
          </span>
        </template>
        <template #cell-status="{ row }">
          <span class="badge" :class="row.status === 'active' ? 'badge-success' : 'badge-gray'">
            {{ row.status === 'active' ? t('common.active') : t('admin.users.disabled') }}
          </span>
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

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import DataTable from '@/components/common/DataTable.vue'
import Pagination from '@/components/common/Pagination.vue'
import type { Column } from '@/components/common/types'
import Icon from '@/components/icons/Icon.vue'
import TablePageLayout from '@/components/layout/TablePageLayout.vue'
import usersAPI from '@/api/admin/users'
import type { AdminUser } from '@/types'
import { useAppStore } from '@/stores/app'
import { extractI18nErrorMessage } from '@/utils/apiError'
import { formatDateTime as formatDisplayDateTime } from '@/utils/format'

const { t } = useI18n()
const appStore = useAppStore()
const loading = ref(false)
const customers = ref<AdminUser[]>([])
const search = ref('')
const pagination = reactive({ page: 1, page_size: 20, total: 0 })
let searchTimer: ReturnType<typeof setTimeout> | null = null
let customerRequestSequence = 0

const columns = computed<Column[]>(() => [
  { key: 'id', label: t('admin.affiliates.customers.userId') },
  { key: 'email', label: t('admin.affiliates.customers.email') },
  { key: 'username', label: t('admin.affiliates.customers.username') },
  { key: 'role', label: t('admin.affiliates.customers.role') },
  { key: 'status', label: t('admin.affiliates.customers.status') },
  { key: 'created_at', label: t('admin.affiliates.customers.registeredAt') },
])

async function loadCustomers() {
  const requestSequence = ++customerRequestSequence
  loading.value = true
  try {
    const response = await usersAPI.list(
      pagination.page,
      pagination.page_size,
      {
        search: search.value.trim() || undefined,
        include_subscriptions: false,
        sort_by: 'created_at',
        sort_order: 'desc',
      },
    )
    if (requestSequence !== customerRequestSequence) return
    customers.value = response.items || []
    pagination.total = response.total || 0
  } catch (error) {
    if (requestSequence !== customerRequestSequence) return
    appStore.showError(
      extractI18nErrorMessage(error, t, 'admin.affiliates.errors', t('admin.affiliates.customers.loadFailed')),
    )
  } finally {
    if (requestSequence === customerRequestSequence) loading.value = false
  }
}

function scheduleSearch() {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    pagination.page = 1
    void loadCustomers()
  }, 300)
}

function handlePageChange(page: number) {
  pagination.page = page
  void loadCustomers()
}

function handlePageSizeChange(size: number) {
  pagination.page_size = size
  pagination.page = 1
  void loadCustomers()
}

function customerDetailLocation(userId: number) {
  return {
    path: '/admin/affiliates/invites',
    query: { section: 'customers', user_id: String(userId) },
  }
}

function formatDateTime(value: string | null | undefined): string {
  return value ? formatDisplayDateTime(value) : '-'
}

onMounted(() => void loadCustomers())

onBeforeUnmount(() => {
  customerRequestSequence += 1
  if (searchTimer) clearTimeout(searchTimer)
})
</script>
