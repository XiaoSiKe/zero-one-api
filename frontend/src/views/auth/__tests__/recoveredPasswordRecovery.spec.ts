import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it, vi } from 'vitest'

const source = readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), '../../../../../deploy/zero-one/recovered-frontend/console/assets/zero-one-login-recovery-v2.js'), 'utf8')

function install(enabled: boolean, registration = true) {
  history.replaceState({}, '', '/login')
  document.body.innerHTML = `<form>${enabled ? '<a href="/forgot-password">忘记密码？</a>' : ''}</form>${registration ? '<a class="btn btn-secondary" href="/register">注册</a>' : ''}`
  let reconcile = () => {}
  Object.assign(window, {
    __ZERO_ONE_NAVIGATION_RECONCILIATION__: { register: (_name: string, fn: () => void) => { reconcile = fn }, request: vi.fn() }
  })
  new Function(source)()
  reconcile()
  return reconcile
}

describe('恢复版密码入口遵循原生能力', () => {
  afterEach(() => { document.body.innerHTML = '' })

  it('功能未开放时不会从注册按钮生成找回入口', () => {
    install(false)
    expect(document.querySelector('a[href="/forgot-password"]')).toBeNull()
  })

  it('功能开放且注册关闭时仍提供找回入口', () => {
    install(true, false)
    expect(document.querySelector('[data-zero-one-login-recovery]')?.getAttribute('href')).toBe('/forgot-password')
  })

  it('遵循后续能力撤销，空闲协调不会重复添加 DOM', () => {
    const reconcile = install(true)
    const html = document.body.innerHTML
    reconcile()
    expect(document.body.innerHTML).toBe(html)
    document.querySelector('[data-zero-one-recovery-source]')?.remove()
    reconcile()
    expect(document.querySelector('a[href="/forgot-password"]')).toBeNull()
  })
})
