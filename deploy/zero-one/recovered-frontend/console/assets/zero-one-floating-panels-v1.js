// Runtime overlay for the approved recovered Console snapshot.
// Keep this independent from frontend/src: that source tree is not the source
// of the protected production-equivalent Console assets served by Edge.

const VIEWPORT_MARGIN = 16
const PANEL_GAP = 8
const PANEL_Z_INDEX = '100000020'

const panelSpecs = [
  {
    selector: '.date-picker-dropdown',
    keepComponentParent: true,
    triggerSelector: '.date-picker-trigger',
    width: 320,
    comfortableHeight: 260,
    role: 'dialog',
  },
  {
    selector: '.select-dropdown[data-v-60ed8961]',
    triggerSelector: '.select-trigger',
    matchTriggerWidth: true,
    maxWidth: 420,
    comfortableHeight: 260,
    role: 'dialog',
  },
  {
    selector: '.absolute.left-0.right-0.top-full.z-50',
    triggerSelector: '.cursor-pointer',
    matchTriggerWidth: true,
    maxWidth: 720,
    comfortableHeight: 260,
    role: 'listbox',
    accepts: (panel) => Boolean(panel.querySelector('[data-testid="model-option"]')),
  },
  {
    selector: '.absolute.right-0.z-20.mt-1.w-44',
    triggerSelector: 'button',
    width: 176,
    align: 'right',
    comfortableHeight: 180,
    role: 'menu',
  },
]

const activePanels = new Set()
let positionFrame = 0

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), Math.max(minimum, maximum))
}

function positionPanel(entry) {
  const { panel, trigger, spec } = entry
  if (!panel.isConnected || !trigger.isConnected) return

  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight
  const triggerRect = trigger.getBoundingClientRect()
  const availableWidth = Math.max(0, viewportWidth - VIEWPORT_MARGIN * 2)
  const requestedWidth = spec.matchTriggerWidth
    ? triggerRect.width
    : spec.width ?? triggerRect.width
  const width = Math.min(requestedWidth, spec.maxWidth ?? requestedWidth, availableWidth)

  Object.assign(panel.style, {
    position: 'fixed',
    inset: 'auto',
    margin: '0',
    width: `${width}px`,
    maxWidth: `${availableWidth}px`,
    maxHeight: 'none',
    transform: 'none',
    zIndex: PANEL_Z_INDEX,
    overflowY: 'auto',
  })

  if (spec.keepComponentParent) {
    // 真实日期组件自带 min-width:320px，必须解除它才能在 320px 屏内限宽。
    panel.style.transitionProperty = 'opacity'
    panel.style.minWidth = '0'
    const custom = panel.querySelector('.date-picker-custom')
    const separator = panel.querySelector('.date-picker-separator')
    if (custom instanceof HTMLElement) {
      custom.style.flexDirection = width < 320 ? 'column' : ''
      custom.style.alignItems = width < 320 ? 'stretch' : ''
    }
    if (separator instanceof HTMLElement) separator.style.display = width < 320 ? 'none' : ''
  }

  const desiredHeight = Math.min(
    panel.scrollHeight || panel.getBoundingClientRect().height,
    Math.max(0, viewportHeight - VIEWPORT_MARGIN * 2),
  )
  const spaceBelow = viewportHeight - triggerRect.bottom - PANEL_GAP - VIEWPORT_MARGIN
  const spaceAbove = triggerRect.top - PANEL_GAP - VIEWPORT_MARGIN
  const opensUpward =
    spaceBelow < Math.min(desiredHeight, spec.comfortableHeight) && spaceAbove > spaceBelow
  const availableHeight = Math.max(0, opensUpward ? spaceAbove : spaceBelow)
  const renderedHeight = Math.min(desiredHeight, availableHeight)
  const top = opensUpward
    ? triggerRect.top - PANEL_GAP - renderedHeight
    : triggerRect.bottom + PANEL_GAP
  const preferredLeft = spec.align === 'right'
    ? triggerRect.right - width
    : triggerRect.left

  panel.style.left = `${clamp(
    preferredLeft,
    VIEWPORT_MARGIN,
    viewportWidth - VIEWPORT_MARGIN - width,
  )}px`
  panel.style.top = `${clamp(
    top,
    VIEWPORT_MARGIN,
    viewportHeight - VIEWPORT_MARGIN - renderedHeight,
  )}px`
  panel.style.maxHeight = `${availableHeight}px`
}

function unregisterDetachedPanels() {
  for (const entry of activePanels) {
    if (entry.panel.isConnected && entry.trigger.isConnected) continue
    entry.trigger.setAttribute('aria-expanded', 'false')
    activePanels.delete(entry)
  }
}

function registerPanel(panel, spec) {
  if (panel.dataset.zeroOneFloatingPanel === 'true') return
  if (spec.accepts && !spec.accepts(panel)) return

  const container = panel.parentElement
  const trigger = container?.querySelector(spec.triggerSelector)
  if (!(trigger instanceof HTMLElement)) return

  panel.dataset.zeroOneFloatingPanel = 'true'
  panel.setAttribute('role', panel.getAttribute('role') || spec.role)
  trigger.setAttribute('aria-haspopup', spec.role)
  trigger.setAttribute('aria-expanded', 'true')
  panel.addEventListener('click', (event) => event.stopPropagation())
  // 二开保护：日期节点的 v-if 锚点归 Vue 所有。移动到 body 会让下一次
  // 打开的节点脱离组件观察范围，失去定位；保留父节点并使用顶层浮层。
  if (spec.keepComponentParent) {
    if (typeof panel.showPopover === 'function') {
      panel.setAttribute('popover', 'manual')
      panel.showPopover()
    }
  } else {
    document.body.append(panel)
  }

  const entry = { panel, trigger, spec }
  activePanels.add(entry)
  positionPanel(entry)
}

function scanForPanels() {
  unregisterDetachedPanels()
  for (const spec of panelSpecs) {
    for (const panel of document.querySelectorAll(spec.selector)) {
      if (panel instanceof HTMLElement) registerPanel(panel, spec)
    }
  }
}

function scheduleScan() {
  window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.request()
}

function schedulePosition() {
  if (positionFrame) return
  positionFrame = requestAnimationFrame(() => {
    positionFrame = 0
    unregisterDetachedPanels()
    for (const entry of activePanels) positionPanel(entry)
  })
}

window.addEventListener('resize', schedulePosition)
window.addEventListener('scroll', schedulePosition, true)
window.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return
  const entry = [...activePanels].at(-1)
  if (!entry) return
  requestAnimationFrame(() => {
    // 先让 Vue 原 Escape 处理完成；仅在下一帧仍展开时才走原按钮兜底关闭，
    // 避免快速重开与原监听器竞争。不能直接隐藏 DOM 导致 isOpen 失配。
    const dateEntry = [...activePanels].reverse().find(item =>
      item.spec.keepComponentParent && item.panel.isConnected && item.trigger.isConnected &&
      item.trigger.classList.contains('date-picker-trigger-open'))
    if (dateEntry) dateEntry.trigger.click()
    const focusTarget = dateEntry?.trigger || entry.trigger
    if (focusTarget.isConnected) focusTarget.focus()
  })
}, true)

window.__ZERO_ONE_NAVIGATION_RECONCILIATION__.register('floating-panels', scanForPanels)
