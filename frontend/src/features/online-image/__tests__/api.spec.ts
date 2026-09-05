import { beforeEach, describe, expect, it, vi } from 'vitest'

import { generateImage, listAccessibleImageModels } from '../api'

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

describe('generateImage', () => {
  beforeEach(() => vi.restoreAllMocks())

  it.each([false, true])('rejects a late JSON error after HTTP 200 keepalive (editing: %s)', async (editing) => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(
      ' \n' + JSON.stringify({ error: { message: 'Image request rejected', code: 'moderation_blocked' } }),
      { status: 200, headers: { 'X-Request-Id': 'image-request-123' } },
    ))
    await expect(generateImage('sk-test', {
      model: 'gpt-image-2', prompt: 'a cat',
      referenceImages: editing ? [new File(['image'], 'reference.png', { type: 'image/png' })] : [],
    })).rejects.toMatchObject({
      message: 'Image request rejected', code: 'moderation_blocked', status: 200, requestId: 'image-request-123',
    })
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(String(fetchMock.mock.calls[0][0])).toContain(editing ? '/v1/images/edits' : '/v1/images/generations')
  })

  it.each([
    { data: [{ b64_json: 'aW1hZ2U=', mime_type: 'image/webp', output_format: 'webp' }] },
    { data: [{ url: 'https://images.example.com/cat.jpg', revised_prompt: 'a cat' }], model: 'gpt-image-2' },
    { data: [] },
  ])('preserves a valid image response: %j', async (payload) => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(' \n' + JSON.stringify(payload)))
    await expect(generateImage('sk-test', { model: 'gpt-image-2', prompt: 'a cat' })).resolves.toEqual(payload)
  })

  it.each([{}, null, { data: {} }, { data: [null] }, { data: [{}] }, { data: [{ b64_json: 42 }] }])(
    'rejects an invalid success payload: %j', async (payload) => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify(payload)))
      await expect(generateImage('sk-test', { model: 'gpt-image-2', prompt: 'a cat' }))
        .rejects.toMatchObject({ code: 'INVALID_IMAGE_RESPONSE' })
    },
  )

  it('reports malformed JSON without exposing the response body', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('<html>internal proxy response</html>', {
      headers: { 'X-Request-Id': 'invalid-json' },
    }))
    await expect(generateImage('sk-test', { model: 'gpt-image-2', prompt: 'a cat' }))
      .rejects.toMatchObject({ code: 'INVALID_GATEWAY_RESPONSE', requestId: 'invalid-json' })
  })

  it('preserves ordinary HTTP errors and never retries generation', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(
      JSON.stringify({ error: { message: 'Not enough balance', code: 'insufficient_quota' } }), { status: 403 },
    ))
    await expect(generateImage('sk-test', { model: 'gpt-image-2', prompt: 'a cat' }))
      .rejects.toMatchObject({ message: 'Not enough balance', code: 'insufficient_quota', status: 403 })
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})
