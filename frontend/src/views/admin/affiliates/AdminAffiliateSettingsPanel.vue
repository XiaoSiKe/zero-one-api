<template>
  <div class="space-y-6" data-testid="affiliate-settings-panel">
    <div class="card">
      <div class="border-b border-gray-100 px-6 py-4 dark:border-dark-700">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
          {{ t('admin.settings.features.affiliate.title') }}
        </h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {{ t('admin.settings.features.affiliate.description') }}
        </p>
      </div>

      <div class="space-y-5 p-6">
        <div class="flex items-center justify-between">
          <div>
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ t('admin.settings.features.affiliate.enabled') }}
            </label>
            <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              {{ t('admin.settings.features.affiliate.enabledHint') }}
            </p>
          </div>
          <Toggle
            v-model="settings.affiliate_enabled"
            data-testid="affiliate-enabled-toggle"
            :disabled="loading"
          />
        </div>

        <div v-if="settings.affiliate_enabled" class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                {{ t('admin.settings.features.affiliate.adminRechargeRebate') }}
              </label>
              <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                {{ t('admin.settings.features.affiliate.adminRechargeRebateHint') }}
              </p>
            </div>
            <Toggle
              v-model="settings.affiliate_admin_recharge_enabled"
              data-testid="affiliate-admin-recharge-toggle"
              :disabled="loading"
            />
          </div>

          <div>
            <label class="input-label">
              {{ t('admin.settings.features.affiliate.rebateRate') }}
            </label>
            <div class="relative">
              <input
                v-model.number="settings.affiliate_rebate_rate"
                data-testid="affiliate-rebate-rate"
                type="number"
                step="0.01"
                min="0"
                max="100"
                class="input pr-8"
                placeholder="20"
                :disabled="loading"
              />
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
            </div>
            <p class="mt-1 text-xs text-gray-400">
              {{ t('admin.settings.features.affiliate.rebateRateHint') }}
            </p>
          </div>

          <div>
            <label class="input-label">
              {{ t('admin.settings.features.affiliate.freezeHours') }}
            </label>
            <input
              v-model.number="settings.affiliate_rebate_freeze_hours"
              data-testid="affiliate-freeze-hours"
              type="number"
              step="1"
              min="0"
              max="720"
              class="input"
              :disabled="loading"
            />
            <p class="mt-1 text-xs text-gray-400">
              {{ t('admin.settings.features.affiliate.freezeHoursDesc') }}
            </p>
          </div>

          <div>
            <label class="input-label">
              {{ t('admin.settings.features.affiliate.durationDays') }}
            </label>
            <input
              v-model.number="settings.affiliate_rebate_duration_days"
              data-testid="affiliate-duration-days"
              type="number"
              step="1"
              min="0"
              max="3650"
              class="input"
              :disabled="loading"
            />
            <p class="mt-1 text-xs text-gray-400">
              {{ t('admin.settings.features.affiliate.durationDaysDesc') }}
            </p>
          </div>

          <div>
            <label class="input-label">
              {{ t('admin.settings.features.affiliate.perInviteeCap') }}
            </label>
            <input
              v-model.number="settings.affiliate_rebate_per_invitee_cap"
              data-testid="affiliate-invitee-cap"
              type="number"
              step="0.01"
              min="0"
              class="input"
              :disabled="loading"
            />
            <p class="mt-1 text-xs text-gray-400">
              {{ t('admin.settings.features.affiliate.perInviteeCapDesc') }}
            </p>
          </div>

          <div class="border-t border-gray-100 pt-6 dark:border-dark-700">
            <div class="mb-3 flex items-center justify-between">
              <div>
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white">
                  {{ t('admin.settings.features.affiliate.customUsers.title') }}
                </h3>
                <p class="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  {{ t('admin.settings.features.affiliate.customUsers.description') }}
                </p>
              </div>
              <button
                type="button"
                class="btn btn-primary btn-sm"
                data-testid="affiliate-custom-user-add"
                @click="openAffiliateModal(null)"
              >
                + {{ t('admin.settings.features.affiliate.customUsers.addButton') }}
              </button>
            </div>

            <div class="mb-3 flex items-center gap-2">
              <input
                v-model="affiliateState.search"
                type="text"
                class="input flex-1"
                :placeholder="t('admin.settings.features.affiliate.customUsers.searchPlaceholder')"
                @input="onAffiliateSearchInput"
              />
              <button
                v-if="affiliateState.selected.length > 0"
                type="button"
                class="btn btn-secondary btn-sm"
                data-testid="affiliate-batch-open"
                @click="openAffiliateBatchModal"
              >
                {{ t('admin.settings.features.affiliate.customUsers.batchButton', { count: affiliateState.selected.length }) }}
              </button>
            </div>

            <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-dark-700">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
                <thead class="bg-gray-50 dark:bg-dark-800">
                  <tr>
                    <th class="px-3 py-2 text-left">
                      <input
                        type="checkbox"
                        :checked="affiliateState.entries.length > 0 && affiliateState.selected.length === affiliateState.entries.length"
                        @change="toggleAffiliateSelectAll"
                      />
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-medium uppercase text-gray-500">{{ t('admin.settings.features.affiliate.customUsers.col.email') }}</th>
                    <th class="px-3 py-2 text-left text-xs font-medium uppercase text-gray-500">{{ t('admin.settings.features.affiliate.customUsers.col.username') }}</th>
                    <th class="px-3 py-2 text-left text-xs font-medium uppercase text-gray-500">{{ t('admin.settings.features.affiliate.customUsers.col.code') }}</th>
                    <th class="px-3 py-2 text-left text-xs font-medium uppercase text-gray-500">{{ t('admin.settings.features.affiliate.customUsers.col.rate') }}</th>
                    <th class="px-3 py-2 text-left text-xs font-medium uppercase text-gray-500">{{ t('admin.settings.features.affiliate.customUsers.col.actions') }}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white dark:divide-dark-700 dark:bg-dark-900">
                  <tr v-if="affiliateState.loading">
                    <td colspan="6" class="px-3 py-6 text-center text-sm text-gray-500">
                      {{ t('common.loading') }}
                    </td>
                  </tr>
                  <tr v-else-if="affiliateState.entries.length === 0">
                    <td colspan="6" class="px-3 py-6 text-center text-sm text-gray-500">
                      {{ t('admin.settings.features.affiliate.customUsers.empty') }}
                    </td>
                  </tr>
                  <tr v-for="entry in affiliateState.entries" :key="entry.user_id">
                    <td class="px-3 py-2">
                      <input
                        type="checkbox"
                        :data-testid="`affiliate-user-select-${entry.user_id}`"
                        :checked="affiliateState.selected.includes(entry.user_id)"
                        @change="toggleAffiliateSelect(entry.user_id)"
                      />
                    </td>
                    <td class="px-3 py-2 text-sm text-gray-900 dark:text-white">{{ entry.email }}</td>
                    <td class="px-3 py-2 text-sm text-gray-600 dark:text-gray-300">{{ entry.username }}</td>
                    <td class="px-3 py-2 text-sm font-mono">
                      {{ entry.aff_code }}
                      <span
                        v-if="entry.aff_code_custom"
                        class="ml-1 inline-block rounded bg-primary-100 px-1.5 py-0.5 text-[10px] font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                      >{{ t('admin.settings.features.affiliate.customUsers.customBadge') }}</span>
                    </td>
                    <td class="px-3 py-2 text-sm">
                      <span v-if="entry.aff_rebate_rate_percent != null">{{ entry.aff_rebate_rate_percent }}%</span>
                      <span v-else class="text-gray-400">{{ t('admin.settings.features.affiliate.customUsers.useGlobal') }}</span>
                    </td>
                    <td class="px-3 py-2 text-sm">
                      <div class="flex items-center gap-2">
                        <button
                          type="button"
                          class="text-primary-600 hover:underline"
                          :data-testid="`affiliate-user-edit-${entry.user_id}`"
                          @click="openAffiliateModal(entry)"
                        >
                          {{ t('common.edit') }}
                        </button>
                        <button
                          type="button"
                          class="text-red-600 hover:underline"
                          :data-testid="`affiliate-user-reset-${entry.user_id}`"
                          @click="askResetAffiliateUser(entry)"
                        >
                          {{ t('common.delete') }}
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-if="affiliateState.total > affiliateState.pageSize" class="mt-3 flex items-center justify-between text-sm">
              <span class="text-gray-500">
                {{ t('admin.settings.features.affiliate.customUsers.totalLabel', { total: affiliateState.total }) }}
              </span>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  :disabled="affiliateState.page <= 1"
                  @click="changeAffiliatePage(affiliateState.page - 1)"
                >
                  {{ t('pagination.previous') }}
                </button>
                <span class="text-gray-500">{{ affiliateState.page }} / {{ Math.max(1, Math.ceil(affiliateState.total / affiliateState.pageSize)) }}</span>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  :disabled="affiliateState.page >= Math.ceil(affiliateState.total / affiliateState.pageSize)"
                  @click="changeAffiliatePage(affiliateState.page + 1)"
                >
                  {{ t('pagination.next') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end border-t border-gray-100 px-6 py-4 dark:border-dark-700">
        <button
          type="button"
          class="btn btn-primary"
          data-testid="affiliate-settings-save"
          :disabled="loading || saving"
          @click="saveAffiliateSettings"
        >
          {{ saving ? t('common.saving') : t('common.save') }}
        </button>
      </div>
    </div>

    <div
      v-if="affiliateModal.open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      @click.self="closeAffiliateModal"
    >
      <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-dark-900">
        <h3 class="mb-4 text-lg font-semibold">
          {{ affiliateModal.mode === 'add' ? t('admin.settings.features.affiliate.modal.addTitle') : t('admin.settings.features.affiliate.modal.editTitle') }}
        </h3>
        <div class="space-y-4">
          <div v-if="affiliateModal.mode === 'add'">
            <label class="input-label">{{ t('admin.settings.features.affiliate.modal.userLabel') }}</label>
            <div
              v-if="affiliateModal.selectedUser"
              class="flex items-center justify-between rounded-md border border-primary-200 bg-primary-50 px-3 py-2 dark:border-primary-700/50 dark:bg-primary-900/20"
            >
              <div class="text-sm">
                <span class="font-medium text-gray-900 dark:text-white">{{ affiliateModal.selectedUser.email }}</span>
                <span class="ml-1 text-xs text-gray-500">({{ affiliateModal.selectedUser.username }})</span>
              </div>
              <button
                type="button"
                class="text-lg leading-none text-gray-400 hover:text-red-600"
                :title="t('admin.settings.features.affiliate.modal.changeUser')"
                @click="clearSelectedAffiliateUser"
              >
                ×
              </button>
            </div>
            <template v-else>
              <input
                v-model="affiliateModal.userQuery"
                type="text"
                class="input"
                data-testid="affiliate-user-search"
                :placeholder="t('admin.settings.features.affiliate.modal.userPlaceholder')"
                @input="onAffiliateUserSearchInput"
              />
              <div
                v-if="affiliateModal.userResults.length > 0"
                class="mt-1 max-h-40 overflow-y-auto rounded border border-gray-200 dark:border-dark-700"
              >
                <button
                  v-for="user in affiliateModal.userResults"
                  :key="user.id"
                  type="button"
                  class="w-full px-3 py-1.5 text-left text-sm hover:bg-gray-100 dark:hover:bg-dark-800"
                  :data-testid="`affiliate-user-result-${user.id}`"
                  @click="selectAffiliateUser(user)"
                >
                  {{ user.email }} <span class="text-xs text-gray-500">({{ user.username }})</span>
                </button>
              </div>
            </template>
          </div>
          <div v-else>
            <label class="input-label">{{ t('admin.settings.features.affiliate.modal.userLabel') }}</label>
            <input
              type="text"
              class="input"
              :value="affiliateModal.editingEntry ? affiliateModal.editingEntry.email : ''"
              disabled
            />
          </div>

          <div>
            <label class="input-label">{{ t('admin.settings.features.affiliate.modal.codeLabel') }}</label>
            <input
              v-model="affiliateModal.code"
              type="text"
              class="input font-mono"
              data-testid="affiliate-user-code"
              :placeholder="t('admin.settings.features.affiliate.modal.codePlaceholder')"
              maxlength="32"
            />
            <p class="mt-1 text-xs text-gray-400">
              {{ t('admin.settings.features.affiliate.modal.codeHint') }}
            </p>
          </div>

          <div>
            <label class="input-label">{{ t('admin.settings.features.affiliate.modal.rateLabel') }}</label>
            <div class="relative">
              <input
                v-model="affiliateModal.rate"
                type="number"
                step="0.01"
                min="0"
                max="100"
                class="input pr-8"
                data-testid="affiliate-user-rate"
                :placeholder="t('admin.settings.features.affiliate.modal.ratePlaceholder')"
              />
              <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
            </div>
            <p class="mt-1 text-xs text-gray-400">
              {{ t('admin.settings.features.affiliate.modal.rateHint') }}
            </p>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between gap-3">
          <p v-if="!affiliateModalCanSubmit" class="text-xs text-gray-500 dark:text-gray-400">
            {{ t('admin.settings.features.affiliate.modal.errorEmpty') }}
          </p>
          <span v-else></span>
          <div class="flex gap-2">
            <button type="button" class="btn btn-secondary" @click="closeAffiliateModal">
              {{ t('common.cancel') }}
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-testid="affiliate-user-save"
              :disabled="affiliateModal.saving || !affiliateModalCanSubmit"
              @click="submitAffiliateModal"
            >
              {{ affiliateModal.saving ? t('common.saving') : t('common.save') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="affiliateBatchModal.open"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      @click.self="affiliateBatchModal.open = false"
    >
      <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-xl dark:bg-dark-900">
        <h3 class="mb-4 text-lg font-semibold">
          {{ t('admin.settings.features.affiliate.batchModal.title', { count: affiliateState.selected.length }) }}
        </h3>
        <p class="mb-4 text-sm text-gray-500">
          {{ t('admin.settings.features.affiliate.batchModal.hint') }}
        </p>
        <div class="relative">
          <input
            v-model="affiliateBatchModal.rate"
            type="number"
            step="0.01"
            min="0"
            max="100"
            class="input pr-8"
            data-testid="affiliate-batch-rate"
            :placeholder="t('admin.settings.features.affiliate.batchModal.placeholder')"
          />
          <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
        </div>
        <p class="mt-2 text-xs text-gray-400">
          {{ t('admin.settings.features.affiliate.batchModal.clearHint') }}
        </p>
        <div class="mt-6 flex justify-end gap-2">
          <button type="button" class="btn btn-secondary" @click="affiliateBatchModal.open = false">
            {{ t('common.cancel') }}
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-testid="affiliate-batch-save"
            :disabled="affiliateBatchModal.saving"
            @click="submitAffiliateBatchModal"
          >
            {{ affiliateBatchModal.saving ? t('common.saving') : t('common.save') }}
          </button>
        </div>
      </div>
    </div>

    <ConfirmDialog
      :show="affiliateConfirmDialog.show"
      :title="affiliateConfirmDialog.title"
      :message="affiliateConfirmDialog.message"
      :confirm-text="affiliateConfirmDialog.confirmText"
      danger
      @confirm="handleAffiliateConfirm"
      @cancel="cancelAffiliateConfirm"
    />
    <TotpStepUpDialog :controller="settingsStepUp" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { adminAPI } from '@/api'
import {
  affiliatesAPI,
  type AffiliateAdminEntry,
  type SimpleUser as AffiliateSimpleUser,
} from '@/api/admin/affiliates'
import type { SystemSettings, UpdateSettingsRequest } from '@/api/admin/settings'
import TotpStepUpDialog from '@/components/auth/TotpStepUpDialog.vue'
import ConfirmDialog from '@/components/common/ConfirmDialog.vue'
import Toggle from '@/components/common/Toggle.vue'
import {
  isStepUpBlocked,
  isStepUpCancelled,
  stepUpBlockReason,
  useStepUp,
} from '@/composables/useStepUp'
import { useAppStore } from '@/stores'
import { useAdminSettingsStore } from '@/stores/adminSettings'
import { extractApiErrorMessage } from '@/utils/apiError'

type AffiliateSettings = Pick<
  SystemSettings,
  | 'affiliate_enabled'
  | 'affiliate_rebate_rate'
  | 'affiliate_rebate_freeze_hours'
  | 'affiliate_rebate_duration_days'
  | 'affiliate_rebate_per_invitee_cap'
  | 'affiliate_admin_recharge_enabled'
>

const { t } = useI18n()
const appStore = useAppStore()
const adminSettingsStore = useAdminSettingsStore()
const settingsStepUp = useStepUp()
const loading = ref(false)
const saving = ref(false)
const settings = reactive<AffiliateSettings>({
  affiliate_enabled: false,
  affiliate_rebate_rate: 20,
  affiliate_rebate_freeze_hours: 0,
  affiliate_rebate_duration_days: 0,
  affiliate_rebate_per_invitee_cap: 0,
  affiliate_admin_recharge_enabled: false,
})

function assignAffiliateSettings(source: SystemSettings) {
  settings.affiliate_enabled = source.affiliate_enabled === true
  settings.affiliate_rebate_rate = Number(source.affiliate_rebate_rate) || 0
  settings.affiliate_rebate_freeze_hours = Number(source.affiliate_rebate_freeze_hours) || 0
  settings.affiliate_rebate_duration_days = Number(source.affiliate_rebate_duration_days) || 0
  settings.affiliate_rebate_per_invitee_cap = Number(source.affiliate_rebate_per_invitee_cap) || 0
  settings.affiliate_admin_recharge_enabled = source.affiliate_admin_recharge_enabled === true
}

async function loadAffiliateSettings() {
  loading.value = true
  try {
    assignAffiliateSettings(await adminAPI.settings.getSettings())
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('admin.affiliates.settings.loadFailed')))
  } finally {
    loading.value = false
  }
}

async function saveAffiliateSettings() {
  const payload: Pick<UpdateSettingsRequest, keyof AffiliateSettings> = {
    affiliate_enabled: settings.affiliate_enabled,
    affiliate_rebate_rate: Math.min(100, Math.max(0, Number(settings.affiliate_rebate_rate) || 0)),
    affiliate_rebate_freeze_hours: Math.max(0, Math.min(720, Number(settings.affiliate_rebate_freeze_hours) || 0)),
    affiliate_rebate_duration_days: Math.max(0, Math.min(3650, Math.floor(Number(settings.affiliate_rebate_duration_days) || 0))),
    affiliate_rebate_per_invitee_cap: Math.max(0, Number(settings.affiliate_rebate_per_invitee_cap) || 0),
    affiliate_admin_recharge_enabled: settings.affiliate_admin_recharge_enabled,
  }

  saving.value = true
  try {
    const updated = await settingsStepUp.run(() => adminAPI.settings.updateSettings(payload))
    assignAffiliateSettings(updated)
    await appStore.fetchPublicSettings(true)
    await adminSettingsStore.fetch(true)
    appStore.showSuccess(t('admin.affiliates.settings.saved'))
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
    appStore.showError(extractApiErrorMessage(error, t('admin.affiliates.settings.saveFailed')))
  } finally {
    saving.value = false
  }
}

interface AffiliateState {
  loading: boolean
  entries: AffiliateAdminEntry[]
  total: number
  page: number
  pageSize: number
  search: string
  selected: number[]
  searchTimer: number | null
}

const affiliateState = reactive<AffiliateState>({
  loading: false,
  entries: [],
  total: 0,
  page: 1,
  pageSize: 20,
  search: '',
  selected: [],
  searchTimer: null,
})

interface AffiliateModalState {
  open: boolean
  mode: 'add' | 'edit'
  saving: boolean
  userQuery: string
  userResults: AffiliateSimpleUser[]
  selectedUser: AffiliateSimpleUser | null
  editingEntry: AffiliateAdminEntry | null
  code: string
  rate: string | number
  searchTimer: number | null
}

const affiliateModal = reactive<AffiliateModalState>({
  open: false,
  mode: 'add',
  saving: false,
  userQuery: '',
  userResults: [],
  selectedUser: null,
  editingEntry: null,
  code: '',
  rate: '',
  searchTimer: null,
})

const affiliateBatchModal = reactive({
  open: false,
  saving: false,
  rate: '' as string | number,
})

const affiliateConfirmDialog = reactive<{
  show: boolean
  title: string
  message: string
  confirmText: string
  pending: (() => Promise<unknown>) | null
}>({
  show: false,
  title: '',
  message: '',
  confirmText: '',
  pending: null,
})

function openAffiliateConfirm(
  title: string,
  message: string,
  confirmText: string,
  pending: () => Promise<unknown>,
) {
  Object.assign(affiliateConfirmDialog, { show: true, title, message, confirmText, pending })
}

async function handleAffiliateConfirm() {
  const pending = affiliateConfirmDialog.pending
  cancelAffiliateConfirm()
  if (!pending) return
  try {
    await pending()
    appStore.showSuccess(t('common.saved'))
    await loadAffiliateUsers()
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('common.error')))
  }
}

function cancelAffiliateConfirm() {
  affiliateConfirmDialog.show = false
  affiliateConfirmDialog.pending = null
}

function debounceTimer(slot: { searchTimer: number | null }, run: () => void) {
  if (slot.searchTimer != null) window.clearTimeout(slot.searchTimer)
  slot.searchTimer = window.setTimeout(run, 300)
}

function parseRebateRate(raw: unknown): number | null | undefined {
  const value = String(raw ?? '').trim()
  if (!value) return null
  const parsed = Number(value)
  if (Number.isNaN(parsed) || parsed < 0 || parsed > 100) {
    appStore.showError(t('admin.settings.features.affiliate.modal.errorBadRate'))
    return undefined
  }
  return parsed
}

async function loadAffiliateUsers() {
  affiliateState.loading = true
  try {
    const response = await affiliatesAPI.listUsers({
      page: affiliateState.page,
      page_size: affiliateState.pageSize,
      search: affiliateState.search,
    })
    affiliateState.entries = response.items ?? []
    affiliateState.total = response.total ?? 0
    const visibleIds = new Set(affiliateState.entries.map((entry) => entry.user_id))
    affiliateState.selected = affiliateState.selected.filter((id) => visibleIds.has(id))
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('common.error')))
  } finally {
    affiliateState.loading = false
  }
}

function onAffiliateSearchInput() {
  debounceTimer(affiliateState, () => {
    affiliateState.page = 1
    void loadAffiliateUsers()
  })
}

function changeAffiliatePage(page: number) {
  if (page < 1) return
  affiliateState.page = page
  void loadAffiliateUsers()
}

function toggleAffiliateSelectAll(event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  affiliateState.selected = checked ? affiliateState.entries.map((entry) => entry.user_id) : []
}

function toggleAffiliateSelect(userId: number) {
  const index = affiliateState.selected.indexOf(userId)
  if (index >= 0) affiliateState.selected.splice(index, 1)
  else affiliateState.selected.push(userId)
}

function openAffiliateModal(entry: AffiliateAdminEntry | null) {
  Object.assign(affiliateModal, {
    open: true,
    mode: entry ? 'edit' : 'add',
    userQuery: '',
    userResults: [],
    selectedUser: null,
    editingEntry: entry,
    code: entry?.aff_code_custom ? entry.aff_code : '',
    rate: entry?.aff_rebate_rate_percent != null ? String(entry.aff_rebate_rate_percent) : '',
  })
}

function closeAffiliateModal() {
  affiliateModal.open = false
  if (affiliateModal.searchTimer != null) {
    window.clearTimeout(affiliateModal.searchTimer)
    affiliateModal.searchTimer = null
  }
}

function onAffiliateUserSearchInput() {
  const query = affiliateModal.userQuery.trim()
  if (!query) {
    affiliateModal.userResults = []
    return
  }
  debounceTimer(affiliateModal, async () => {
    try {
      affiliateModal.userResults = await affiliatesAPI.lookupUsers(query)
    } catch (error) {
      appStore.showError(extractApiErrorMessage(error, t('common.error')))
    }
  })
}

function selectAffiliateUser(user: AffiliateSimpleUser) {
  affiliateModal.selectedUser = user
  affiliateModal.userQuery = ''
  affiliateModal.userResults = []
}

function clearSelectedAffiliateUser() {
  affiliateModal.selectedUser = null
}

const affiliateModalCanSubmit = computed(() => {
  if (affiliateModal.mode === 'add' && !affiliateModal.selectedUser) return false
  if (affiliateModal.mode === 'edit' && !affiliateModal.editingEntry) return false
  if (affiliateModal.code.trim() || String(affiliateModal.rate ?? '').trim()) return true
  return affiliateModal.mode === 'edit' && affiliateModal.editingEntry?.aff_rebate_rate_percent != null
})

async function submitAffiliateModal() {
  if (!affiliateModalCanSubmit.value) {
    appStore.showError(t('admin.settings.features.affiliate.modal.errorEmpty'))
    return
  }

  const userId = affiliateModal.mode === 'add'
    ? affiliateModal.selectedUser!.id
    : affiliateModal.editingEntry!.user_id
  const payload: Parameters<typeof affiliatesAPI.updateUserSettings>[1] = {}
  const code = affiliateModal.code.trim()
  if (code) payload.aff_code = code.toUpperCase()
  const rate = parseRebateRate(affiliateModal.rate)
  if (rate === undefined) return
  if (rate === null) {
    if (affiliateModal.mode === 'edit' && affiliateModal.editingEntry?.aff_rebate_rate_percent != null) {
      payload.clear_rebate_rate = true
    }
  } else {
    payload.aff_rebate_rate_percent = rate
  }

  affiliateModal.saving = true
  try {
    await affiliatesAPI.updateUserSettings(userId, payload)
    appStore.showSuccess(t('common.saved'))
    closeAffiliateModal()
    affiliateState.page = 1
    await loadAffiliateUsers()
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('common.error')))
  } finally {
    affiliateModal.saving = false
  }
}

function askResetAffiliateUser(entry: AffiliateAdminEntry) {
  openAffiliateConfirm(
    t('admin.settings.features.affiliate.customUsers.resetTitle'),
    t('admin.settings.features.affiliate.customUsers.resetMessage', {
      email: entry.email || `#${entry.user_id}`,
    }),
    t('common.delete'),
    () => affiliatesAPI.clearUserSettings(entry.user_id),
  )
}

function openAffiliateBatchModal() {
  if (!affiliateState.selected.length) return
  affiliateBatchModal.open = true
  affiliateBatchModal.rate = ''
}

async function submitAffiliateBatchModal() {
  const rate = parseRebateRate(affiliateBatchModal.rate)
  if (rate === undefined) return
  const payload: Parameters<typeof affiliatesAPI.batchSetRate>[0] = rate === null
    ? { user_ids: [...affiliateState.selected], clear: true }
    : { user_ids: [...affiliateState.selected], aff_rebate_rate_percent: rate }

  affiliateBatchModal.saving = true
  try {
    await affiliatesAPI.batchSetRate(payload)
    appStore.showSuccess(t('common.saved'))
    affiliateBatchModal.open = false
    affiliateState.selected = []
    await loadAffiliateUsers()
  } catch (error) {
    appStore.showError(extractApiErrorMessage(error, t('common.error')))
  } finally {
    affiliateBatchModal.saving = false
  }
}

watch(
  () => settings.affiliate_enabled,
  (enabled, previous) => {
    if (enabled && !previous) void loadAffiliateUsers()
  },
)

onMounted(() => {
  void loadAffiliateSettings()
})

onBeforeUnmount(() => {
  if (affiliateState.searchTimer != null) window.clearTimeout(affiliateState.searchTimer)
  if (affiliateModal.searchTimer != null) window.clearTimeout(affiliateModal.searchTimer)
})
</script>
