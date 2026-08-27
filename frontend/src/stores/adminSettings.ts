import { defineStore } from 'pinia'
import { onScopeDispose, ref, watch } from 'vue'
import { adminAPI } from '@/api'
import type { NavigationSettings } from '@/api/admin/settings'
import { useAuthStore } from '@/stores/auth'
import type { CustomMenuItem } from '@/types'

export const useAdminSettingsStore = defineStore('adminSettings', () => {
  const authStore = useAuthStore()
  const loaded = ref(false)
  const loading = ref(false)

  // Keep administrative navigation in this login session, never in shared localStorage.
  const opsMonitoringEnabled = ref(true)
  const opsRealtimeMonitoringEnabled = ref(true)
  const opsQueryModeDefault = ref('auto')
  const paymentEnabled = ref(false)
  const customMenuItems = ref<CustomMenuItem[]>([])
  const navigationSettings = ref<NavigationSettings | null>(null)
  let activeRequest: Promise<void> | null = null
  let queuedRefresh: Promise<void> | null = null
  let activePaymentRequest: Promise<void> | null = null
  let queuedPaymentRefresh: Promise<void> | null = null
  let paymentLoaded = false
  let settingsRevision = 0
  let monitoringRevision = 0
  let paymentRevision = 0
  let identityRevision = 0

  function reset() {
    identityRevision += 1
    settingsRevision += 1
    monitoringRevision += 1
    paymentRevision += 1
    activeRequest = queuedRefresh = null
    activePaymentRequest = queuedPaymentRefresh = null
    loaded.value = loading.value = paymentLoaded = false
    navigationSettings.value = null
    customMenuItems.value = []
    opsMonitoringEnabled.value = opsRealtimeMonitoringEnabled.value = true
    opsQueryModeDefault.value = 'auto'
    paymentEnabled.value = false
  }

  watch(
    () => authStore.token && authStore.user ? `${authStore.user.id}:${authStore.user.role}` : '',
    reset,
    { flush: 'sync' }
  )

  function fetchPayment(force = false): Promise<void> {
    if (activePaymentRequest) {
      if (force && !queuedPaymentRefresh) {
        paymentRevision += 1
        const identity = identityRevision
        const queued = activePaymentRequest
          .then(() => {
            if (queuedPaymentRefresh === queued) queuedPaymentRefresh = null
            return identity === identityRevision ? fetchPayment(true) : undefined
          })
          .finally(() => {
            if (queuedPaymentRefresh === queued) queuedPaymentRefresh = null
          })
        queuedPaymentRefresh = queued
      }
      return force ? queuedPaymentRefresh! : activePaymentRequest
    }
    if (paymentLoaded && !force) return Promise.resolve()
    const revision = ++paymentRevision
    const request = adminAPI.payment.getConfig()
      .then((response) => {
        if (revision !== paymentRevision) return
        paymentEnabled.value = response.data?.enabled ?? false
        paymentLoaded = true
      })
      .catch((error) => {
        if (revision === paymentRevision) console.error('[adminSettings] Failed to fetch payment settings:', error)
      })
      .finally(() => {
        if (activePaymentRequest === request) activePaymentRequest = null
      })
    activePaymentRequest = request
    return request
  }

  function fetch(force = false): Promise<void> {
    if (!authStore.token || authStore.user?.role !== 'admin') return Promise.resolve()
    if (activeRequest) {
      if (force && !queuedRefresh) {
        settingsRevision += 1
        const identity = identityRevision
        const queued = activeRequest
          .then(() => {
            if (queuedRefresh === queued) queuedRefresh = null
            return identity === identityRevision ? fetch(true) : undefined
          })
          .finally(() => {
            if (queuedRefresh === queued) queuedRefresh = null
          })
        queuedRefresh = queued
      }
      return force ? queuedRefresh! : activeRequest
    }
    // Payment has its own lifetime: its response must never gate navigation.
    void fetchPayment(force)
    if (loaded.value && !force) return Promise.resolve()
    if (force) settingsRevision += 1

    loading.value = true
    const requestRevision = settingsRevision
    const requestMonitoringRevision = monitoringRevision
    const request = adminAPI.settings.getNavigationSettings()
      .then((settings) => {
        if (requestRevision !== settingsRevision) return
        if (requestMonitoringRevision === monitoringRevision) {
          opsMonitoringEnabled.value = settings.ops_monitoring_enabled ?? true
          opsRealtimeMonitoringEnabled.value = settings.ops_realtime_monitoring_enabled ?? true
          opsQueryModeDefault.value = settings.ops_query_mode_default || 'auto'
        }
        navigationSettings.value = {
          ...settings,
          ops_monitoring_enabled: opsMonitoringEnabled.value,
          ops_realtime_monitoring_enabled: opsRealtimeMonitoringEnabled.value,
          ops_query_mode_default: opsQueryModeDefault.value,
        }
        customMenuItems.value = Array.isArray(settings.custom_menu_items) ? settings.custom_menu_items : []
        loaded.value = true
      })
      .catch((error) => {
        if (requestRevision !== settingsRevision) return
        // Keep this session's value, but allow an unsuccessful first read to retry.
        console.error('[adminSettings] Failed to fetch settings:', error)
      })
      .finally(() => {
        if (activeRequest === request) {
          activeRequest = null
          loading.value = false
        }
      })
    activeRequest = request
    return request
  }

  function setOpsMonitoringEnabledLocal(value: boolean) {
    monitoringRevision += 1
    opsMonitoringEnabled.value = value
    if (navigationSettings.value) navigationSettings.value.ops_monitoring_enabled = value
  }

  function setOpsRealtimeMonitoringEnabledLocal(value: boolean) {
    monitoringRevision += 1
    opsRealtimeMonitoringEnabled.value = value
    if (navigationSettings.value) navigationSettings.value.ops_realtime_monitoring_enabled = value
  }

  function setPaymentEnabledLocal(value: boolean) {
    paymentRevision += 1
    paymentEnabled.value = value
    paymentLoaded = true
  }

  function setOpsQueryModeDefaultLocal(value: string) {
    monitoringRevision += 1
    opsQueryModeDefault.value = value || 'auto'
    if (navigationSettings.value) navigationSettings.value.ops_query_mode_default = opsQueryModeDefault.value
  }

  // The API interceptor dispatches this event for feature-gated 404s.
  const onOpsDisabled = () => setOpsMonitoringEnabledLocal(false)
  if (typeof window !== 'undefined') {
    window.addEventListener('ops-monitoring-disabled', onOpsDisabled)
  }
  onScopeDispose(() => {
    reset()
    if (typeof window !== 'undefined') window.removeEventListener('ops-monitoring-disabled', onOpsDisabled)
  })

  return {
    loaded,
    loading,
    opsMonitoringEnabled,
    opsRealtimeMonitoringEnabled,
    opsQueryModeDefault,
    paymentEnabled,
    customMenuItems,
    navigationSettings,
    fetch,
    reset,
    setOpsMonitoringEnabledLocal,
    setOpsRealtimeMonitoringEnabledLocal,
    setPaymentEnabledLocal,
    setOpsQueryModeDefaultLocal
  }
})
