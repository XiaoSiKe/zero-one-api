import { describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'

describe('translation HTML safety at the maintained runtime boundary', () => {
  it('escapes named values when a call also contains list interpolation', () => {
    const i18n = createI18n({ legacy: false, locale: 'en', escapeParameter: true, warnHtmlMessage: false,
      messages: { en: { mixed: (context: { list(index: number): unknown; named(name: string): unknown }) => `${context.list(0)} ${context.named('name')}` } } })
    const named = { name: '<b>untrusted name</b>' }
    const translated = i18n.global.t('mixed', ['list value'], { named })
    expect(translated).toContain('list value')
    expect(translated).toContain('untrusted name')
    expect(translated).not.toContain('<b>')
    expect(named.name).toBe('<b>untrusted name</b>')
  })

  it('does not leave an active srcdoc attribute in an HTML translation', () => {
    const i18n = createI18n({ legacy: false, locale: 'en', escapeParameter: true, warnHtmlMessage: false,
      messages: { en: { html: (context: { named(name: string): unknown }) => `<iframe srcdoc="${context.named('content')}"></iframe>` } } })
    const translated = i18n.global.t('html', { content: '<b>nested content</b>' })
    expect(translated).toContain('<iframe')
    const host = document.createElement('div')
    host.innerHTML = translated
    expect([...host.querySelectorAll('iframe')].some(frame => frame.hasAttribute('srcdoc'))).toBe(false)
  })
})
