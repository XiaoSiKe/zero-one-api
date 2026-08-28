<template>
    <div class="mx-auto max-w-2xl space-y-6">
      <!-- Current Balance Card -->
      <div class="card overflow-hidden">
        <div class="bg-gray-900 px-6 py-8 text-center dark:bg-white">
          <div
            class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/15 dark:bg-dark-900/10"
          >
            <Icon name="creditCard" size="xl" class="text-white dark:text-dark-950" />
          </div>
          <p class="text-sm font-medium text-gray-300 dark:text-dark-600">{{ t('redeem.currentBalance') }}</p>
          <p class="mt-2 text-4xl font-bold text-white dark:text-dark-950">
            ${{ user?.balance?.toFixed(2) || '0.00' }}
          </p>
          <p class="mt-2 text-sm text-gray-300 dark:text-dark-600">
            {{ t('redeem.concurrency') }}: {{ user?.concurrency || 0 }} {{ t('redeem.requests') }}
          </p>
        </div>
      </div>

      <!-- Redeem Form -->
      <div class="card">
        <div class="p-6">
          <form @submit.prevent="handleRedeem" class="space-y-5">
            <div>
              <label for="code" class="input-label">
                {{ t('redeem.redeemCodeLabel') }}
              </label>
              <div class="relative mt-1">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Icon name="gift" size="md" class="text-gray-400 dark:text-dark-500" />
                </div>
                <input
                  id="code"
                  v-model="redeemCode"
                  type="text"
                  required
                  :placeholder="t('redeem.redeemCodePlaceholder')"
                  :disabled="submitting || refreshing"
                  class="input py-3 pl-12 text-lg"
                />
              </div>
              <p class="input-hint">
                {{ t('redeem.redeemCodeHint') }}
              </p>
            </div>

            <div class="space-y-3">
              <button
                type="submit"
                :disabled="!redeemCode.trim() || submitting || refreshing"
                class="btn btn-primary btn-specular redeem-home-action w-full py-3"
              >
                <svg
                  v-if="submitting"
                  class="-ml-1 mr-2 h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <Icon v-else name="checkCircle" size="md" class="mr-2" />
                {{ submitting ? t('redeem.redeeming') : t('redeem.redeemButton') }}
              </button>

              <router-link
                :to="onlineRechargePath"
                class="btn btn-primary btn-specular redeem-home-action w-full py-3"
              >
                {{ t('redeem.onlineRecharge') }}
              </router-link>
            </div>
          </form>
        </div>
      </div>

      <!-- Success Message -->
      <transition name="fade">
        <div
          v-if="redeemResult"
          class="card border-zo-signal-200 bg-zo-signal-50 dark:border-zo-signal-800/50 dark:bg-zo-signal-900/20"
        >
          <div class="p-6">
            <div class="flex items-start gap-4">
              <div
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-zo-signal-100 dark:bg-zo-signal-900/30"
              >
                <Icon name="checkCircle" size="md" class="text-zo-signal-600 dark:text-zo-signal-400" />
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-zo-signal-800 dark:text-zo-signal-300">
                  {{ t('redeem.redeemSuccess') }}
                </h3>
                <div class="mt-2 text-sm text-zo-signal-700 dark:text-zo-signal-400">
                  <div class="mt-3 space-y-1">
                    <p v-if="isBalanceType(redeemResult.type)" class="font-medium">
                      {{ t('redeem.added') }}: ${{ redeemResult.value.toFixed(2) }}
                    </p>
                    <p v-else-if="redeemResult.type === 'concurrency'" class="font-medium">
                      {{ t('redeem.added') }}: {{ redeemResult.value }}
                      {{ t('redeem.concurrentRequests') }}
                    </p>
                    <p v-else-if="redeemResult.type === 'subscription'" class="font-medium">
                      {{ t('redeem.subscriptionAssigned') }}
                      <span v-if="redeemResult.group?.name"> - {{ redeemResult.group.name }}</span>
                      <span v-if="redeemResult.validity_days">
                        ({{
                          t('redeem.subscriptionDays', { days: redeemResult.validity_days })
                        }})</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div v-if="refreshWarning" class="card p-6" role="status">
        <p class="text-sm text-gray-700 dark:text-gray-200">{{ refreshWarning }}</p>
        <button
          data-test="redeem-refresh"
          type="button"
          class="btn btn-secondary mt-3"
          :disabled="refreshing"
          @click="refreshRedeemState"
        >
          {{ refreshing ? t('common.loading') : t('redeem.retryRefresh') }}
        </button>
      </div>

      <!-- Error Message -->
      <transition name="fade">
        <div
          v-if="errorMessage"
          class="card border-red-200 bg-red-50 dark:border-red-800/50 dark:bg-red-900/20"
        >
          <div class="p-6">
            <div class="flex items-start gap-4">
              <div
                class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30"
              >
                <Icon
                  name="exclamationCircle"
                  size="md"
                  class="text-red-600 dark:text-red-400"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-red-800 dark:text-red-300">
                  {{ t('redeem.redeemFailed') }}
                </h3>
                <p class="mt-2 text-sm text-red-700 dark:text-red-400">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Information Card -->
      <div class="card">
        <div class="p-6">
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-700"
            >
              <Icon name="infoCircle" size="md" class="text-gray-700 dark:text-gray-200" />
            </div>
            <div class="flex-1">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
                {{ t('redeem.aboutCodes') }}
              </h3>
              <ul
                class="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300"
              >
                <li>{{ t('redeem.codeRule1') }}</li>
                <li>{{ t('redeem.codeRule2') }}</li>
                <li>
                  {{ t('redeem.codeRule3') }}
                  <span
                    v-if="contactInfo"
                    class="ml-1.5 inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-dark-700 dark:text-gray-200"
                  >
                    {{ contactInfo }}
                  </span>
                </li>
                <li>{{ t('redeem.codeRule4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card">
        <div class="border-b border-gray-100 px-6 py-4 dark:border-dark-700">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ t('redeem.recentActivity') }}
          </h2>
        </div>
        <div class="p-6">
          <!-- Loading State -->
          <div v-if="loadingHistory" class="flex items-center justify-center py-8">
            <svg class="h-6 w-6 animate-spin text-primary-500" fill="none" viewBox="0 0 24 24">
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>

          <!-- History List -->
          <div v-else-if="history.length > 0" class="space-y-3">
            <div
              v-for="item in history"
              :key="item.id"
              class="flex items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-dark-800"
            >
              <div class="flex items-center gap-4">
                <div
                  :class="[
                    'flex h-10 w-10 items-center justify-center rounded-lg',
                    isBalanceType(item.type)
                      ? item.value >= 0
                        ? 'bg-zo-signal-100 dark:bg-zo-signal-900/30'
                        : 'bg-red-100 dark:bg-red-900/30'
                      : 'bg-gray-100 dark:bg-dark-700'
                  ]"
                >
                  <!-- 余额类型图标 -->
                  <Icon
                    v-if="isBalanceType(item.type)"
                    name="dollar"
                    size="md"
                    :class="
                      item.value >= 0
                        ? 'text-zo-signal-600 dark:text-zo-signal-400'
                        : 'text-red-600 dark:text-red-400'
                    "
                  />
                  <!-- 订阅类型图标 -->
                  <Icon
                    v-else-if="isSubscriptionType(item.type)"
                    name="badge"
                    size="md"
                    class="text-gray-700 dark:text-gray-200"
                  />
                  <!-- 并发类型图标 -->
                  <Icon
                    v-else
                    name="bolt"
                    size="md"
                    class="text-gray-700 dark:text-gray-200"
                  />
                </div>
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ getHistoryItemTitle(item) }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-dark-400">
                    {{ formatDateTime(item.used_at) }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p
                  :class="[
                    'text-sm font-semibold',
                    isBalanceType(item.type)
                      ? item.value >= 0
                        ? 'text-zo-signal-600 dark:text-zo-signal-400'
                        : 'text-red-600 dark:text-red-400'
                      : 'text-gray-700 dark:text-gray-200'
                  ]"
                >
                  {{ formatHistoryValue(item) }}
                </p>
                <p
                  v-if="!isAdminAdjustment(item.type)"
                  class="font-mono text-xs text-gray-400 dark:text-dark-500"
                >
                  {{ item.code.slice(0, 8) }}...
                </p>
                <p v-else class="text-xs text-gray-400 dark:text-dark-500">
                  {{ t('redeem.adminAdjustment') }}
                </p>
                <!-- Display notes for admin adjustments -->
                <p
                  v-if="item.notes"
                  class="mt-1 text-xs text-gray-500 dark:text-dark-400 italic max-w-[200px] truncate"
                  :title="item.notes"
                >
                  {{ item.notes }}
                </p>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="empty-state py-8">
            <div
              class="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100 dark:bg-dark-800"
            >
              <Icon name="clock" size="xl" class="text-gray-400 dark:text-dark-500" />
            </div>
            <p class="text-sm text-gray-500 dark:text-dark-400">
              {{ t('redeem.historyWillAppear') }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/app'
import { useSubscriptionStore } from '@/stores/subscriptions'
import { redeemAPI, type RedeemHistoryItem } from '@/api'
import type { RedeemResult } from '@/api/redeem'
import Icon from '@/components/icons/Icon.vue'
import { formatDateTime } from '@/utils/format'
import { resolveOnlineRechargePath } from '@/utils/online-recharge'
import { extractApiErrorMessage } from '@/utils/apiError'

const { t } = useI18n()
const authStore = useAuthStore()
const appStore = useAppStore()
const subscriptionStore = useSubscriptionStore()

const user = computed(() => authStore.user)

const redeemCode = ref('')
const submitting = ref(false)
const redeemResult = ref<RedeemResult | null>(null)
const errorMessage = ref('')
const refreshing = ref(false)
const refreshWarning = ref('')
const redemptionUncertain = ref(false)
const onlineRechargePath = computed(() =>
  resolveOnlineRechargePath(appStore.cachedPublicSettings?.custom_menu_items)
)

// History data
const history = ref<RedeemHistoryItem[]>([])
const loadingHistory = ref(false)
const contactInfo = computed(() => appStore.cachedPublicSettings?.contact_info || '')

// Helper functions for history display
const isBalanceType = (type: string) => {
  return (
    type === 'balance' ||
    type === 'benefit' ||
    type === 'mystery_box' ||
    type === 'admin_balance'
  )
}

const isSubscriptionType = (type: string) => {
  return type === 'subscription'
}

const isAdminAdjustment = (type: string) => {
  return type === 'admin_balance' || type === 'admin_concurrency'
}

const getHistoryItemTitle = (item: RedeemHistoryItem) => {
  if (item.type === 'balance') {
    return t('redeem.balanceAddedRedeem')
  } else if (item.type === 'benefit') {
    return t('redeem.benefitAddedRedeem')
  } else if (item.type === 'mystery_box') {
    return t('redeem.mysteryBoxAddedRedeem')
  } else if (item.type === 'admin_balance') {
    return item.value >= 0 ? t('redeem.balanceAddedAdmin') : t('redeem.balanceDeductedAdmin')
  } else if (item.type === 'concurrency') {
    return t('redeem.concurrencyAddedRedeem')
  } else if (item.type === 'admin_concurrency') {
    return item.value >= 0 ? t('redeem.concurrencyAddedAdmin') : t('redeem.concurrencyReducedAdmin')
  } else if (item.type === 'subscription') {
    return t('redeem.subscriptionAssigned')
  }
  return t('common.unknown')
}

const formatHistoryValue = (item: RedeemHistoryItem) => {
  if (isBalanceType(item.type)) {
    const sign = item.value >= 0 ? '+' : ''
    return `${sign}$${item.value.toFixed(2)}`
  } else if (isSubscriptionType(item.type)) {
    // 订阅类型显示有效天数和分组名称
    const days = item.validity_days || Math.round(item.value)
    const groupName = item.group?.name || ''
    return groupName ? `${days}${t('redeem.days')} - ${groupName}` : `${days}${t('redeem.days')}`
  } else {
    const sign = item.value >= 0 ? '+' : ''
    return `${sign}${item.value} ${t('redeem.requests')}`
  }
}

let historyRequest = 0
const fetchHistory = async () => {
  const request = ++historyRequest
  loadingHistory.value = true
  try {
    const items = await redeemAPI.getHistory()
    if (request === historyRequest) history.value = items
    return true
  } catch (error) {
    console.error('Failed to fetch history:', error)
    return false
  } finally {
    if (request === historyRequest) loadingHistory.value = false
  }
}

const refreshRedeemState = async () => {
  if (refreshing.value) return
  refreshing.value = true
  try {
    const reads: Promise<unknown>[] = [authStore.refreshUser(), fetchHistory()]
    if (redeemResult.value?.type === 'subscription') {
      reads.push(subscriptionStore.fetchActiveSubscriptions(true))
    }
    const results = await Promise.allSettled(reads)
    const refreshFailed = results.some((result) =>
      result.status === 'rejected' || result.value === false
    )
    refreshWarning.value = redemptionUncertain.value
      ? t(refreshFailed ? 'redeem.resultUncertainRefreshFailed' : 'redeem.resultUncertainAfterRefresh')
      : refreshFailed ? t('redeem.refreshFailed') : ''
    if (refreshWarning.value) appStore.showWarning(refreshWarning.value)
  } finally {
    refreshing.value = false
  }
}

const handleRedeem = async () => {
  if (submitting.value || refreshing.value) return
  if (!redeemCode.value.trim()) {
    appStore.showError(t('redeem.pleaseEnterCode'))
    return
  }

  submitting.value = true
  errorMessage.value = ''
  refreshWarning.value = ''
  redemptionUncertain.value = false
  redeemResult.value = null

  try {
    const result = await redeemAPI.redeem(redeemCode.value.trim())

    redeemResult.value = result

    // A committed redemption stays successful even if subsequent reads fail.
    redeemCode.value = ''
    refreshWarning.value = ''
    appStore.showSuccess(t('redeem.codeRedeemSuccess'))
  } catch (error: any) {
    const status = error?.status ?? error?.response?.status
    // A missing acknowledgement does not prove that the transaction failed.
    if (status == null || status === 0 || status === 408 || (status >= 500 && status < 600)) {
      redemptionUncertain.value = true
      refreshWarning.value = t('redeem.resultUncertain')
      appStore.showWarning(refreshWarning.value)
      return
    }
    errorMessage.value = extractApiErrorMessage(error, t('redeem.failedToRedeem'), {
      REDEEM_BATCH_ALREADY_CLAIMED: t('redeem.batchAlreadyClaimed'),
    })

    appStore.showError(t('redeem.redeemFailed'))
    return
  } finally {
    submitting.value = false
  }

  await refreshRedeemState()
}

onMounted(async () => {
  fetchHistory()
  if (!appStore.publicSettingsLoaded) {
    try {
      await appStore.fetchPublicSettings()
    } catch (error) {
      console.error('Failed to load public settings:', error)
    }
  }
})
</script>

<style scoped>
@property --redeem-action-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 125deg;
}

.redeem-home-action {
  --redeem-action-angle: 125deg;
  --redeem-action-rim: rgb(255 255 255 / 0.86);
  --redeem-action-rim-soft: rgb(255 255 255 / 0.24);
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 52px;
  border-color: #3f3f46;
  color: #f5f5f5;
  background: #111113;
  box-shadow:
    inset 0 1px rgb(255 255 255 / 0.08),
    0 10px 24px rgb(0 0 0 / 0.34);
  animation: redeem-action-rim-turn 4.8s linear infinite;
}

.redeem-home-action::before {
  position: absolute;
  inset: 0;
  z-index: 0;
  padding: 1px;
  border-radius: inherit;
  background: conic-gradient(
    from var(--redeem-action-angle),
    transparent 0deg 16deg,
    var(--redeem-action-rim-soft) 27deg,
    var(--redeem-action-rim) 35deg,
    var(--redeem-action-rim-soft) 44deg,
    transparent 56deg 194deg,
    var(--redeem-action-rim-soft) 208deg,
    transparent 224deg 360deg
  );
  content: '';
  pointer-events: none;
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.82;
  transition: opacity 180ms ease-out;
}

.redeem-home-action > * {
  position: relative;
  z-index: 1;
}

.redeem-home-action:hover:not(:disabled) {
  border-color: #52525b;
  color: #fff;
  background: #18181b;
  box-shadow:
    inset 0 1px rgb(255 255 255 / 0.12),
    0 14px 28px rgb(0 0 0 / 0.42);
  transform: none;
}

.redeem-home-action:hover:not(:disabled)::before,
.redeem-home-action:focus-visible:not(:disabled)::before {
  opacity: 1;
}

.redeem-home-action:disabled::before {
  opacity: 0.28;
}

@keyframes redeem-action-rim-turn {
  to {
    --redeem-action-angle: 485deg;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
