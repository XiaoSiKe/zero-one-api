import type { ApiKey } from '@/types'

type LocaleCode = 'en' | 'zh'
type RunMode = 'standard' | 'simple'

interface NavigationReconciliation {
  register(name: string, reconcile: () => void): void
  request(): void
}

interface ApprovedPinia {
  _s?: Map<string, {
    runMode?: unknown
    setMobileOpen?(open: boolean): void
    token?: unknown
    user?: { id?: unknown; role?: unknown } | null
  }>
}

interface ApprovedRouter {
  push(path: string): Promise<unknown>
}

interface ApprovedState {
  locale: LocaleCode
  runMode: RunMode
}

interface PreparedSurface {
  mount(host: HTMLElement): void
  unmount(): void
  syncState(state: ApprovedState): Promise<void>
}

interface LeafModule {
  prepareOnlineImageSurface(state: ApprovedState): Promise<PreparedSurface>
}

interface KeyPage {
  items?: ApiKey[]
  pages?: number
}

type KeyAccessClient = (page: number, signal: AbortSignal) => Promise<KeyPage>

interface HiddenRouteRootState {
  display: string
  inert: boolean
}

const TARGET_PATH = '/images'
const HOST_ID = 'zero-one-online-image'
const STYLE_ID = 'zero-one-online-image-style'
const BODY_ACTIVE_CLASS = 'zero-one-online-image-active'
const INJECTED_LINK_ATTRIBUTE = 'data-zero-one-online-image-link'
const hiddenRouteRoots = new Map<HTMLElement, HiddenRouteRootState>()
let mountedLeaf: PreparedSurface | null = null
let mountedHost: HTMLElement | null = null
let pendingMount: Promise<void> | null = null
let failed = false
let mountRevision = 0

function localText(zh: string, en: string): string {
  return approvedState().locale === 'zh' ? zh : en
}

function approvedApplication() {
  return document.querySelector('#app') as (HTMLElement & {
    __vue_app__?: {
      config?: {
        globalProperties?: {
          $pinia?: ApprovedPinia
          $router?: ApprovedRouter
        }
      }
    }
  }) | null
}

function approvedState(): ApprovedState {
  const runMode = approvedApplication()?.__vue_app__?.config?.globalProperties?.$pinia?._s?.get('auth')?.runMode
  const localeValue = localStorage.getItem('sub2api_locale') || document.documentElement.lang
  return {
    locale: String(localeValue).toLowerCase().startsWith('zh') ? 'zh' : 'en',
    runMode: runMode === 'simple' ? 'simple' : 'standard',
  }
}

function approvedAuthStore() {
  return approvedApplication()?.__vue_app__?.config?.globalProperties?.$pinia?._s?.get('auth') || null
}

function approvedRouter(): ApprovedRouter | null {
  return approvedApplication()?.__vue_app__?.config?.globalProperties?.$router || null
}

function updateSidebarLinkState(link: HTMLAnchorElement) {
  const label = localText('在线生图', 'Online Images')
  if (link.getAttribute('href') !== TARGET_PATH) link.setAttribute('href', TARGET_PATH)
  if (link.dataset.navigationPath !== TARGET_PATH) link.dataset.navigationPath = TARGET_PATH
  if (link.getAttribute('aria-label') !== label) link.setAttribute('aria-label', label)
  const title = link.classList.contains('sidebar-link-collapsed') ? label : ''
  if (link.title !== title) link.title = title
  const active = window.location.pathname === TARGET_PATH
  if (link.classList.contains('sidebar-link-active') !== active) {
    link.classList.toggle('sidebar-link-active', active)
  }
  const labelNode = link.querySelector('.sidebar-label')
  if (labelNode && labelNode.textContent !== label) labelNode.textContent = label
}

function ensureSidebarLink() {
  const navigation = document.querySelector('aside nav')
  if (!(navigation instanceof HTMLElement)) return
  const allTargetLinks = [...navigation.querySelectorAll<HTMLAnchorElement>('a[href="/images"]')]
  const native = allTargetLinks.find((link) => !link.hasAttribute(INJECTED_LINK_ATTRIBUTE))
  const auth = approvedAuthStore()
  // Discovery must work before the first key exists; the leaf owns key eligibility.
  if (!auth?.token || !auth.user || approvedState().runMode === 'simple') {
    allTargetLinks
      .filter((link) => link.hasAttribute(INJECTED_LINK_ATTRIBUTE))
      .forEach((link) => link.remove())
    return
  }
  if (native) {
    allTargetLinks.filter((link) => link !== native && link.hasAttribute(INJECTED_LINK_ATTRIBUTE)).forEach((link) => link.remove())
    updateSidebarLinkState(native)
    return
  }

  let link = allTargetLinks[0]
  if (!link) {
    const reference = navigation.querySelector<HTMLAnchorElement>('a[href="/redeem"]')
      || navigation.querySelector<HTMLAnchorElement>('a[href="/keys"]')
    if (!reference) return
    link = reference.cloneNode(true) as HTMLAnchorElement
    link.setAttribute(INJECTED_LINK_ATTRIBUTE, 'true')
    link.removeAttribute('data-tour')
    const icon = link.querySelector('svg')
    if (icon) {
      icon.setAttribute('viewBox', '0 0 24 24')
      icon.setAttribute('fill', 'none')
      icon.setAttribute('stroke', 'currentColor')
      icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.25 2.25 0 00-1.906-1.059H9.554a2.25 2.25 0 00-1.906 1.059l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>'
    }
    link.addEventListener('click', (event) => {
      const router = approvedRouter()
      if (!router) return
      event.preventDefault()
      approvedApplication()?.__vue_app__?.config?.globalProperties?.$pinia?._s?.get('app')?.setMobileOpen?.(false)
      void router.push(TARGET_PATH)
    })
    reference.after(link)
    queueMicrotask(() => reconciliation?.request())
  }
  updateSidebarLinkState(link)
}

function ensureRouteStyles() {
  document.body.classList.add(BODY_ACTIVE_CLASS)
  if (document.getElementById(STYLE_ID)) return
  const stylesheet = document.createElement('link')
  stylesheet.id = STYLE_ID
  stylesheet.rel = 'stylesheet'
  stylesheet.href = '/assets/online-image-v14/online-image.css'
  document.head.append(stylesheet)
}

function hideApprovedRouteRoots(main: HTMLElement, host: HTMLElement) {
  for (const child of Array.from(main.children)) {
    if (!(child instanceof HTMLElement) || child === host) continue
    if (!hiddenRouteRoots.has(child)) {
      hiddenRouteRoots.set(child, { display: child.style.display, inert: child.inert })
    }
    if (child.style.display !== 'none') child.style.display = 'none'
    if (!child.inert) child.inert = true
    if (child.dataset.zeroOneOnlineImageHidden !== 'true') {
      child.dataset.zeroOneOnlineImageHidden = 'true'
    }
  }
}

function restoreApprovedRouteRoots() {
  for (const [element, state] of hiddenRouteRoots) {
    element.style.display = state.display
    element.inert = state.inert
    delete element.dataset.zeroOneOnlineImageHidden
  }
  hiddenRouteRoots.clear()
}

function unmountSurface() {
  mountRevision += 1
  pendingMount = null
  mountedLeaf?.unmount()
  mountedLeaf = null
  mountedHost = null
  const host = document.getElementById(HOST_ID)
  if (host instanceof HTMLElement && host.dataset.zeroOneOnlineImagePlaceholder !== 'true') host.remove()
  document.body.classList.remove(BODY_ACTIVE_CLASS)
  document.getElementById(STYLE_ID)?.remove()
  restoreApprovedRouteRoots()
}

function renderFailure(host: HTMLElement) {
  const panel = document.createElement('div')
  panel.className = 'card mx-auto mt-8 max-w-xl p-6 text-center'
  panel.setAttribute('role', 'alert')
  const title = document.createElement('h2')
  title.className = 'text-lg font-semibold text-gray-900 dark:text-white'
  title.textContent = localText('在线生图加载失败', 'Online image generation failed to load')
  const description = document.createElement('p')
  description.className = 'mt-2 text-sm text-gray-500 dark:text-gray-400'
  description.textContent = localText('控制台外壳仍然可用，请重试加载在线生图。', 'The Console shell is still available. Retry loading online image generation.')
  const retry = document.createElement('button')
  retry.type = 'button'
  retry.className = 'btn btn-primary btn-specular mt-4'
  retry.textContent = localText('重试', 'Retry')
  retry.addEventListener('click', () => window.location.reload())
  panel.append(title, description, retry)
  host.replaceChildren(panel)
}

async function mountSurface(main: HTMLElement, host: HTMLElement) {
  ensureRouteStyles()
  hideApprovedRouteRoots(main, host)
  if (mountedLeaf && mountedHost === host && host.isConnected && host.parentElement === main) {
    await mountedLeaf.syncState(approvedState())
    return
  }
  if (pendingMount) return

  const revision = ++mountRevision
  mountedLeaf?.unmount()
  mountedLeaf = null
  mountedHost = null
  host.replaceChildren()

  pendingMount = (async () => {
    let prepared: PreparedSurface | null = null
    try {
      const leaf = await import('./onlineImageLeaf') as LeafModule
      prepared = await leaf.prepareOnlineImageSurface(approvedState())
      if (
        revision !== mountRevision || window.location.pathname !== TARGET_PATH ||
        !main.isConnected || !host.isConnected || host.parentElement !== main
      ) {
        prepared.unmount()
        queueMicrotask(reconcile)
        return
      }
      prepared.mount(host)
      await prepared.syncState(approvedState())
      mountedLeaf = prepared
      mountedHost = host
      failed = false
    } catch (error) {
      prepared?.unmount()
      if (revision === mountRevision && window.location.pathname === TARGET_PATH) {
        failed = true
        renderFailure(host)
      }
      console.error('Online image generation failed to mount:', error)
    } finally {
      if (revision === mountRevision) pendingMount = null
    }
  })()
  await pendingMount
}

function reconcile() {
  ensureSidebarLink()
  if (window.location.pathname !== TARGET_PATH) {
    if (mountedLeaf || pendingMount || failed || hiddenRouteRoots.size > 0) unmountSurface()
    failed = false
    return
  }
  if (failed) return
  const host = document.querySelector<HTMLElement>(
    `#${HOST_ID}[data-zero-one-online-image-placeholder="true"]`,
  )
  const main = host?.closest('main')
  if (host && main instanceof HTMLElement) void mountSurface(main, host)
}

const reconciliation = (window as typeof window & {
  __ZERO_ONE_NAVIGATION_RECONCILIATION__?: NavigationReconciliation
}).__ZERO_ONE_NAVIGATION_RECONCILIATION__

if (!reconciliation) throw new Error('Online image generation requires the approved navigation reconciliation module')

;(window as typeof window & {
  __ZERO_ONE_ONLINE_IMAGE_ACCESS__?: { setClient(client: KeyAccessClient): void }
}).__ZERO_ONE_ONLINE_IMAGE_ACCESS__ = {
  // Preserve the immutable shell bridge without querying keys for navigation.
  setClient() {
    reconciliation.request()
  },
}

;(window as typeof window & { __ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__?: () => void })
  .__ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__ = reconcile
reconciliation.register('online-image', reconcile)
reconciliation.request()
