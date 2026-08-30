import { beforeEach, describe, expect, it, vi } from 'vitest'

import { listAccessibleImageModels } from '../api'

describe('listAccessibleImageModels', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('loads the models exposed by the selected API key', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({
        object: 'list',
        data: [
          { id: 'gpt-5.6-sol' },
          { id: 'gpt-image-2' },
          { id: 'grok-imagine-image-quality' },
          { id: 'gpt-image-2' },
        ],
      }), { status: 200, headers: { 'Content-Type': 'application/json' } }),
    )

    await expect(listAccessibleImageModels('sk-image-key')).resolves.toEqual([
      'gpt-image-2',
      'grok-imagine-image-quality',
    ])

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, request] = fetchMock.mock.calls[0]
    expect(String(url)).toContain('/v1/models')
    expect(new Headers(request?.headers).get('Authorization')).toBe('Bearer sk-image-key')
  })

  it('rejects an unsuccessful model-list response', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ error: { message: 'key cannot list models' } }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }),
    )

    await expect(listAccessibleImageModels('sk-denied')).rejects.toThrow('key cannot list models')
  })
})
