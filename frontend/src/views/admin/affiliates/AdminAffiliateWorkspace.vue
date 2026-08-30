<template>
    <div data-testid="affiliate-admin-workspace" class="space-y-6">
      <nav
        class="flex flex-wrap gap-2 rounded-xl border border-gray-200 bg-white p-2 dark:border-dark-700 dark:bg-dark-900"
        role="tablist"
        :aria-label="t('admin.affiliates.tabs.label')"
      >
        <RouterLink
          v-for="tab in affiliateTabs"
          :key="tab.key"
          :to="tab.to"
          :data-testid="`affiliate-tab-${tab.key}`"
          class="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-dark-300 dark:hover:bg-dark-800 dark:hover:text-white"
          :class="tab.active ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300' : ''"
          role="tab"
          :aria-selected="tab.active"
        >
          {{ tab.label }}
        </RouterLink>
      </nav>

      <AdminAffiliateSettingsPanel v-if="showSettings" />
      <AdminAffiliateCustomerDetail
        v-else-if="customerUserId != null"
        :user-id="customerUserId"
        :return-section="customerReturnSection"
      />
      <AdminAffiliateCustomers
        v-else-if="showCustomers || showExclusiveAgents"
        :exclusive-only="showExclusiveAgents"
      />
      <AdminAffiliateRecordsTable v-else :type="props.type" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'
import AdminAffiliateCustomerDetail from './AdminAffiliateCustomerDetail.vue'
import AdminAffiliateCustomers from './AdminAffiliateCustomers.vue'
import AdminAffiliateRecordsTable from './AdminAffiliateRecordsTable.vue'
import AdminAffiliateSettingsPanel from './AdminAffiliateSettingsPanel.vue'

type RecordType = 'invites' | 'rebates' | 'transfers'

const props = defineProps<{
  type: RecordType
}>()

const { t } = useI18n()
const route = useRoute()

const inviteSection = computed(() => {
  if (props.type !== 'invites') return ''
  return typeof route.query.section === 'string' ? route.query.section : ''
})
const showCustomers = computed(() => inviteSection.value === 'customers')
const showExclusiveAgents = computed(() => inviteSection.value === 'exclusive_agents')
const showSettings = computed(() => inviteSection.value === 'settings')
const customerUserId = computed(() => {
  if (!showCustomers.value && !showExclusiveAgents.value) return null
  const raw = typeof route.query.user_id === 'string' ? route.query.user_id : ''
  if (!/^\d+$/.test(raw)) return null
  const value = Number(raw)
  return Number.isSafeInteger(value) && value > 0 ? value : null
})
const customerReturnSection = computed<'customers' | 'exclusive_agents'>(() =>
  showExclusiveAgents.value ? 'exclusive_agents' : 'customers',
)

const affiliateTabs = computed(() => [
  {
    key: 'invites',
    label: t('admin.affiliates.tabs.invites'),
    to: { path: '/admin/affiliates/invites' },
    active: props.type === 'invites' && !showCustomers.value && !showExclusiveAgents.value && !showSettings.value,
  },
  {
    key: 'customers',
    label: t('admin.affiliates.tabs.customers'),
    to: { path: '/admin/affiliates/invites', query: { section: 'customers' } },
    active: showCustomers.value,
  },
  {
    key: 'exclusive-agents',
    label: t('admin.affiliates.tabs.exclusiveAgents'),
    to: { path: '/admin/affiliates/invites', query: { section: 'exclusive_agents' } },
    active: showExclusiveAgents.value,
  },
  {
    key: 'transfers',
    label: t('admin.affiliates.tabs.transfers'),
    to: { path: '/admin/affiliates/transfers' },
    active: props.type === 'transfers',
  },
  {
    key: 'settings',
    label: t('admin.affiliates.tabs.settings'),
    to: { path: '/admin/affiliates/invites', query: { section: 'settings' } },
    active: showSettings.value,
  },
])
</script>
