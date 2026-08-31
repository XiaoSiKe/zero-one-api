import { createApp, defineComponent, h, shallowReactive, type App, type Component } from 'vue'
import { createPinia } from 'pinia'
import {
  RouterLink,
  routeLocationKey,
  routerKey,
  type RouteLocationNormalizedLoaded,
  type Router,
} from 'vue-router'

import Toast from '@/components/common/Toast.vue'
import i18n, { initI18n, loadLocaleMessages } from '@/i18n'
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'
import './cnProviderAdmin.css'

type AdminSurface = 'channels' | 'channel-monitor' | 'ops' | 'subscriptions'
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
  channels: () => import('@/views/admin/ChannelsView.vue'),
  'channel-monitor': () => import('@/views/admin/ChannelMonitorView.vue'),
  ops: () => import('@/views/admin/ops/OpsDashboard.vue'),
  subscriptions: () => import('@/views/admin/SubscriptionsView.vue'),
} satisfies Record<AdminSurface, () => Promise<{ default: Component }>>

function approvedRouter(): Router | null {
  const approvedApp = document.querySelector('#app') as (HTMLElement & {
    __vue_app__?: { config?: { globalProperties?: { $router?: Router } } }
  }) | null
  return approvedApp?.__vue_app__?.config?.globalProperties?.$router || null
}

function installApprovedRouterContext(app: App<Element>): void {
  const router = approvedRouter()
  if (!router) return
  const route = {} as RouteLocationNormalizedLoaded
  for (const key in router.currentRoute.value) {
    Object.defineProperty(route, key, {
      enumerable: true,
      get: () => router.currentRoute.value[key as keyof RouteLocationNormalizedLoaded],
    })
  }
  app.component('RouterLink', RouterLink)
  app.provide(routerKey, router)
  app.provide(routeLocationKey, shallowReactive(route))
}

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
  installApprovedRouterContext(app)
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
