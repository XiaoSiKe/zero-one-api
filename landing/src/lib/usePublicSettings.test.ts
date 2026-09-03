import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { DEFAULT_PUBLIC_SETTINGS } from './publicSettings'
import { usePublicSettings } from './usePublicSettings'

const response = () => Response.json({ code: 0, data: {
  model_plaza_enabled: true, public_channel_status_enabled: true,
} })

describe('public settings recovery', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => { cleanup(); vi.useRealTimers(); vi.unstubAllGlobals() })

  it('recovers failed bootstrap settings, keeping capabilities closed until success', async () => {
    const request = vi.fn<typeof fetch>().mockResolvedValue(response())
    vi.stubGlobal('fetch', request)
    const { result } = renderHook(() => usePublicSettings(null))
    expect(result.current.settings).toBeNull()
    await act(async () => vi.advanceTimersByTimeAsync(1_000))
    expect(result.current.settings).toMatchObject({ modelPlazaEnabled: true, publicChannelStatusEnabled: true })
    expect(request).toHaveBeenCalledTimes(1)
    await act(async () => vi.advanceTimersByTimeAsync(60_000))
    expect(request).toHaveBeenCalledTimes(1)
  })

  it('backs off repeated failure and stops polling after recovery', async () => {
    const request = vi.fn<typeof fetch>()
      .mockRejectedValueOnce(new TypeError('offline')).mockResolvedValueOnce(response())
    vi.stubGlobal('fetch', request)
    const { result } = renderHook(() => usePublicSettings(null))
    await act(async () => vi.advanceTimersByTimeAsync(1_000))
    expect(result.current.settings).toBeNull()
    await act(async () => vi.advanceTimersByTimeAsync(30_000))
    expect(result.current.settings?.modelPlazaEnabled).toBe(true)
    expect(request).toHaveBeenCalledTimes(2)
  })

  it('does not retry valid disabled settings but refreshes on return', async () => {
    const request = vi.fn<typeof fetch>().mockResolvedValue(response())
    vi.stubGlobal('fetch', request)
    const { result } = renderHook(() => usePublicSettings(DEFAULT_PUBLIC_SETTINGS))
    await act(async () => vi.advanceTimersByTimeAsync(60_000))
    expect(request).not.toHaveBeenCalled()
    await act(async () => window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true })))
    expect(result.current.settings?.modelPlazaEnabled).toBe(true)
  })

  it('coalesces resume events and aborts on unmount', async () => {
    const request = vi.fn<typeof fetch>((_url, options) => new Promise((_resolve, reject) => {
      options?.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')))
    }))
    vi.stubGlobal('fetch', request)
    const { unmount } = renderHook(() => usePublicSettings(DEFAULT_PUBLIC_SETTINGS))
    act(() => {
      window.dispatchEvent(new Event('online'))
      window.dispatchEvent(new Event('focus'))
      window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }))
    })
    expect(request).toHaveBeenCalledTimes(1)
    await act(async () => unmount())
    expect(request.mock.calls[0]?.[1]?.signal?.aborted).toBe(true)
    await act(async () => vi.advanceTimersByTimeAsync(60_000))
    window.dispatchEvent(new Event('online'))
    expect(request).toHaveBeenCalledTimes(1)
  })

  it('supports manual retry and applies explicit revocation', async () => {
    vi.stubGlobal('fetch', vi.fn<typeof fetch>().mockResolvedValue(Response.json({ code: 0, data: {} })))
    const initialSettings = { ...DEFAULT_PUBLIC_SETTINGS, modelPlazaEnabled: true }
    const { result } = renderHook(() => usePublicSettings(initialSettings))
    await act(async () => result.current.retry())
    expect(result.current.settings?.modelPlazaEnabled).toBe(false)
  })
})
