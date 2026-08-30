import { createApp, defineComponent, h, type App } from 'vue'
import { createPinia } from 'pinia'

import Toast from '@/components/common/Toast.vue'
import ImageGenerationView from '@/views/user/ImageGenerationView.vue'
import i18n, { initI18n, loadLocaleMessages } from '@/i18n'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

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

export async function prepareOnlineImageSurface(initialState: ApprovedState): Promise<PreparedSurface> {
  await initI18n()
  const pinia = createPinia()
  const appStore = useAppStore(pinia)
  const authStore = useAuthStore(pinia)
  appStore.initFromInjectedConfig()
  await appStore.fetchPublicSettings(true)
  authStore.hydrateAuthSnapshot(initialState.runMode)

  const root = defineComponent({
    name: 'ZeroOneOnlineImageRoot',
    setup: () => () => [h(ImageGenerationView), h(Toast)],
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
