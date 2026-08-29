import { createApp, defineComponent, h, type App, type Component } from 'vue'
import { createPinia } from 'pinia'

import Toast from '@/components/common/Toast.vue'
import i18n, { initI18n, loadLocaleMessages } from '@/i18n'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import './cnProviderAdmin.css'

type AdminSurface = 'accounts' | 'groups'
type LocaleCode = 'en' | 'zh'
type RunMode = 'standard' | 'simple'

interface ApprovedState {
  locale: LocaleCode
  runMode: RunMode
}

interface PreparedSurface {
  mount(host: HTMLElement): void
  unmount(): void
  syncState(state: ApprovedState): Promise<void>
}

const surfaceLoaders = {
  accounts: () => import('@/views/admin/AccountsView.vue'),
  groups: () => import('@/views/admin/GroupsView.vue'),
} satisfies Record<AdminSurface, () => Promise<{ default: Component }>>

export async function prepareCNProviderSurface(
  surface: AdminSurface,
  initialState: ApprovedState,
): Promise<PreparedSurface> {
  const [{ default: surfaceComponent }] = await Promise.all([
    surfaceLoaders[surface](),
    initI18n(),
  ])
  const pinia = createPinia()
  const appStore = useAppStore(pinia)
  const authStore = useAuthStore(pinia)
  appStore.initFromInjectedConfig()
  authStore.hydrateAuthSnapshot(initialState.runMode)

  const root = defineComponent({
    name: 'ZeroOneCNProviderAdminRoot',
    setup: () => () => [h(surfaceComponent), h(Toast)],
  })
  const app: App<Element> = createApp(root)
  app.use(pinia)
  app.use(i18n)
  let mounted = false

  async function syncState(state: ApprovedState) {
    authStore.setRunModeSnapshot(state.runMode)
    if (i18n.global.locale.value !== state.locale) {
      await loadLocaleMessages(state.locale)
      i18n.global.locale.value = state.locale
    }
  }

  await syncState(initialState)
  return {
    mount(host) {
      mounted = true
      try {
        app.mount(host)
      } catch (error) {
        app.unmount()
        mounted = false
        throw error
      }
    },
    unmount() {
      if (mounted) app.unmount()
      mounted = false
    },
    syncState,
  }
}
