type AdminSurface = 'channels' | 'channel-monitor' | 'ops' | 'subscriptions'
type RunMode = 'standard' | 'simple'
type LocaleCode = 'en' | 'zh'

interface NavigationReconciliation {
  register(name: string, reconcile: () => void): void
  request(): void
}

interface ApprovedPinia {
  _s?: Map<string, { runMode?: unknown }>
}

interface PreparedSurface {
  mount(host: HTMLElement): void
  unmount(): void
  syncState(state: ApprovedState): Promise<void>
}

interface LeafModule {
  prepareCNProviderSurface(surface: AdminSurface, state: ApprovedState): Promise<PreparedSurface>
}

interface ApprovedState {
  locale: LocaleCode
  runMode: RunMode
}

interface HiddenRouteRootState {
  display: string
  inert: boolean
}

interface PendingMount {
  surface: AdminSurface
  host: HTMLElement
  revision: number
}

const HOST_ID = 'zero-one-provider-catalog-admin'
const STYLE_ID = 'zero-one-provider-catalog-admin-style'
const BODY_ACTIVE_CLASS = 'zero-one-provider-catalog-admin-active'
const TARGET_PATHS: Record<AdminSurface, string> = {
  channels: '/admin/channels/pricing',
  'channel-monitor': '/admin/channels/monitor',
  ops: '/admin/ops',
  subscriptions: '/admin/subscriptions',
}
const hiddenRouteRoots = new Map<HTMLElement, HiddenRouteRootState>()
let mountedSurface: AdminSurface | null = null
let mountedHost: HTMLElement | null = null
let mountedLeaf: PreparedSurface | null = null
let pendingMount: PendingMount | null = null
let failedSurface: AdminSurface | null = null
let mountRevision = 0

function requestedSurface(): AdminSurface | null {
  if (window.location.pathname === TARGET_PATHS.channels) return 'channels'
  if (window.location.pathname === TARGET_PATHS['channel-monitor']) return 'channel-monitor'
  if (window.location.pathname === TARGET_PATHS.ops) return 'ops'
  if (window.location.pathname === TARGET_PATHS.subscriptions) return 'subscriptions'
  return null
}

function approvedState(): ApprovedState {
  const app = document.querySelector('#app') as (HTMLElement & {
    __vue_app__?: { config?: { globalProperties?: { $pinia?: ApprovedPinia } } }
  }) | null
  const runMode = app?.__vue_app__?.config?.globalProperties?.$pinia?._s?.get('auth')?.runMode
  const localeValue = localStorage.getItem('sub2api_locale') || document.documentElement.lang
  return {
    locale: String(localeValue).toLowerCase().startsWith('zh') ? 'zh' : 'en',
    runMode: runMode === 'simple' ? 'simple' : 'standard',
  }
}

function restoreApprovedRouteRoots() {
  for (const [element, state] of hiddenRouteRoots) {
    element.style.display = state.display
    element.inert = state.inert
    delete element.dataset.zeroOneProviderCatalogHidden
  }
  hiddenRouteRoots.clear()
}

function ensureRouteStyles() {
  document.body.classList.add(BODY_ACTIVE_CLASS)
  const href = '/assets/cn-provider-admin-v2/cn-provider-admin.css'
  const existing = document.getElementById(STYLE_ID) as HTMLLinkElement | null
  if (existing?.getAttribute('href') === href) return
  existing?.remove()
  const stylesheet = document.createElement('link')
  stylesheet.id = STYLE_ID
  stylesheet.rel = 'stylesheet'
  stylesheet.href = href
  document.head.append(stylesheet)
}

function hideApprovedRouteRoots(main: HTMLElement, host: HTMLElement) {
  for (const child of Array.from(main.children)) {
    if (!(child instanceof HTMLElement) || child === host) continue
    if (!hiddenRouteRoots.has(child)) {
      hiddenRouteRoots.set(child, { display: child.style.display, inert: child.inert })
    }
    child.style.display = 'none'
    child.inert = true
    child.dataset.zeroOneProviderCatalogHidden = 'true'
  }
}

function unmountCurrentSurface() {
  mountRevision += 1
  pendingMount = null
  mountedLeaf?.unmount()
  mountedLeaf = null
  mountedSurface = null
  mountedHost = null
  const host = document.getElementById(HOST_ID)
  if (host instanceof HTMLElement) {
    delete host.dataset.zeroOneProviderCatalogAdmin
    host.remove()
  }
  document.body.classList.remove(BODY_ACTIVE_CLASS)
  document.getElementById(STYLE_ID)?.remove()
  restoreApprovedRouteRoots()
}

function renderMountFailure(surface: AdminSurface, host: HTMLElement) {
  const isChinese = approvedState().locale === 'zh'
  const panel = document.createElement('div')
  panel.className = 'card mx-auto mt-8 max-w-xl p-6 text-center'
  panel.setAttribute('role', 'alert')
  const title = document.createElement('h2')
  title.className = 'text-lg font-semibold text-gray-900 dark:text-white'
  title.textContent = isChinese ? '管理页面加载失败' : 'Management page failed to load'
  const description = document.createElement('p')
  description.className = 'mt-2 text-sm text-gray-500 dark:text-gray-400'
  description.textContent = isChinese
    ? '原控制台外壳仍然可用，请重试加载供应商管理页面。'
    : 'The approved Console shell is still available. Retry loading the Provider management page.'
  const retry = document.createElement('button')
  retry.type = 'button'
  retry.className = 'btn btn-primary mt-4'
  retry.textContent = isChinese ? '重试' : 'Retry'
  retry.addEventListener('click', () => {
    if (requestedSurface() !== surface) return
    window.location.reload()
  })
  panel.append(title, description, retry)
  host.replaceChildren(panel)
  host.dataset.zeroOneProviderCatalogAdmin = surface
}

async function mountSurface(surface: AdminSurface, main: HTMLElement) {
  ensureRouteStyles()
  let host = document.getElementById(HOST_ID)
  if (!(host instanceof HTMLElement)) {
    host = document.createElement('div')
    host.id = HOST_ID
    host.dataset.zeroOneProviderCatalogAdmin = surface
    main.append(host)
  }
  hideApprovedRouteRoots(main, host)
  if (
    mountedLeaf &&
    mountedSurface === surface &&
    mountedHost === host &&
    host.isConnected &&
    host.parentElement === main
  ) {
    try {
      await mountedLeaf.syncState(approvedState())
    } catch (error) {
      console.error('CN Provider Admin failed to synchronize shell state:', error)
    }
    return
  }
  if (
    pendingMount?.surface === surface &&
    pendingMount.host === host &&
    host.isConnected &&
    host.parentElement === main
  ) {
    return
  }

  const revision = ++mountRevision
  pendingMount = { surface, host, revision }
  mountedLeaf?.unmount()
  mountedLeaf = null
  mountedSurface = null
  mountedHost = null
  host.replaceChildren()
  host.dataset.zeroOneProviderCatalogAdmin = surface

  let prepared: PreparedSurface | null = null
  try {
    const leaf = await import('./cnProviderAdminLeaf') as LeafModule
    prepared = await leaf.prepareCNProviderSurface(surface, approvedState())
    if (
      revision !== mountRevision ||
      requestedSurface() !== surface ||
      !main.isConnected ||
      !host.isConnected ||
      host.parentElement !== main
    ) {
      prepared.unmount()
      queueMicrotask(reconcile)
      return
    }

    prepared.mount(host)
    await prepared.syncState(approvedState())
    mountedLeaf = prepared
    mountedSurface = surface
    mountedHost = host
  } catch (error) {
    prepared?.unmount()
    if (revision === mountRevision && requestedSurface() === surface) {
      failedSurface = surface
      mountedLeaf = null
      mountedSurface = null
      mountedHost = null
      renderMountFailure(surface, host)
    }
    console.error('CN Provider Admin failed to mount:', error)
  } finally {
    if (pendingMount?.revision === revision) pendingMount = null
  }
}

function reconcile() {
  const surface = requestedSurface()
  if (!surface) {
    if (mountedLeaf || pendingMount || failedSurface || hiddenRouteRoots.size > 0) unmountCurrentSurface()
    failedSurface = null
    return
  }
  if (failedSurface === surface) return
  const main = document.querySelector('main')
  if (!(main instanceof HTMLElement)) return
  void mountSurface(surface, main)
}

const reconciliation = (
  window as typeof window & {
    __ZERO_ONE_NAVIGATION_RECONCILIATION__?: NavigationReconciliation
  }
).__ZERO_ONE_NAVIGATION_RECONCILIATION__

if (!reconciliation) {
  throw new Error('CN Provider Admin requires the approved navigation reconciliation module')
}

const seamWindow = window as typeof window & {
  __ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__?: () => void
}
const previousShellMounted = seamWindow.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__
seamWindow.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__ = () => {
  previousShellMounted?.()
  reconcile()
}

reconciliation.register('provider-catalog-admin', reconcile)
reconciliation.request()
