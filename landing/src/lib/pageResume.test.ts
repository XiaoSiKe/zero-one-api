import { afterEach, expect, it, vi } from 'vitest'
import { subscribePageResume } from './pageResume'

afterEach(() => vi.restoreAllMocks())

it('ignores initial pageshow and background events, and removes every listener', () => {
  const refresh = vi.fn()
  const stop = subscribePageResume(refresh)
  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: false }))
  expect(refresh).not.toHaveBeenCalled()
  const hidden = vi.spyOn(document, 'hidden', 'get').mockReturnValue(true)
  document.dispatchEvent(new Event('visibilitychange'))
  window.dispatchEvent(new Event('online'))
  window.dispatchEvent(new Event('focus'))
  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }))
  expect(refresh).not.toHaveBeenCalled()
  hidden.mockReturnValue(false)
  document.dispatchEvent(new Event('visibilitychange'))
  window.dispatchEvent(new Event('online'))
  window.dispatchEvent(new Event('focus'))
  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }))
  expect(refresh).toHaveBeenCalledTimes(4)
  stop()
  document.dispatchEvent(new Event('visibilitychange'))
  window.dispatchEvent(new Event('online'))
  window.dispatchEvent(new Event('focus'))
  window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }))
  expect(refresh).toHaveBeenCalledTimes(4)
})
