import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { ApiKey } from '@/types'

const authState = vi.hoisted(() => ({
  token: 'token-a' as string | null,
  user: { id: 1, role: 'user' } as { id: number; role: string } | null,
  get isAuthenticated() {
    return Boolean(this.token && this.user)
  },
}))
const listKeys = vi.hoisted(() => vi.fn())

vi.mock('@/stores/auth', () => ({ useAuthStore: () => authState }))
vi.mock('@/api/keys', () => ({ keysAPI: { list: listKeys } }))

function imageKey(id: number, userId: number): ApiKey {
  return {
    id,
    user_id: userId,
    key: `sk-user-${userId}`,
    name: `User ${userId}`,
    group_id: id,
    status: 'active',
    group: {
      id,
      name: `Images ${userId}`,
      platform: 'openai',
      allow_image_generation: true,
      allow_batch_image_generation: false,
    },
  } as ApiKey
}

function pageOf(items: ApiKey[]) {
  return { items, total: items.length, page: 1, page_size: 100, pages: 1 }
}

function deferred<T>() {
  let resolve!: (value: T) => void
  const promise = new Promise<T>((resolvePromise) => { resolve = resolvePromise })
  return { promise, resolve }
}

describe('Key capability access', () => {
  beforeEach(() => {
    vi.resetModules()
    listKeys.mockReset()
    authState.token = 'token-a'
    authState.user = { id: 1, role: 'user' }
  })

  it('reloads image keys when the authenticated User changes', async () => {
    listKeys
      .mockResolvedValueOnce(pageOf([imageKey(11, 1)]))
      .mockResolvedValueOnce(pageOf([imageKey(22, 2)]))
    const { useImageGenerationAccess } = await import('../useImageGenerationAccess')
    const access = useImageGenerationAccess()

    await access.refreshImageGenerationAccess()
    expect(access.allowedImageKeys.value.map((key) => key.user_id)).toEqual([1])

    authState.token = 'token-b'
    authState.user = { id: 2, role: 'user' }
    await access.refreshImageGenerationAccess()

    expect(listKeys).toHaveBeenCalledTimes(2)
    expect(access.allowedImageKeys.value.map((key) => key.user_id)).toEqual([2])
  })

  it('does not let an old User request overwrite the current image keys', async () => {
    const userA = deferred<ReturnType<typeof pageOf>>()
    const userB = deferred<ReturnType<typeof pageOf>>()
    listKeys.mockReturnValueOnce(userA.promise).mockReturnValueOnce(userB.promise)
    const { useImageGenerationAccess } = await import('../useImageGenerationAccess')
    const access = useImageGenerationAccess()

    const first = access.refreshImageGenerationAccess()
    authState.token = 'token-b'
    authState.user = { id: 2, role: 'user' }
    const second = access.refreshImageGenerationAccess(true)

    userB.resolve(pageOf([imageKey(22, 2)]))
    await second
    userA.resolve(pageOf([imageKey(11, 1)]))
    await first

    expect(access.allowedImageKeys.value.map((key) => key.user_id)).toEqual([2])
  })

  it('rechecks batch-image access for the current User', async () => {
    const batchKey = imageKey(31, 1)
    batchKey.group!.platform = 'gemini'
    batchKey.group!.allow_batch_image_generation = true
    listKeys.mockResolvedValueOnce(pageOf([batchKey])).mockResolvedValueOnce(pageOf([]))
    const { useBatchImageAccess } = await import('../useBatchImageAccess')
    const access = useBatchImageAccess()

    await access.refreshBatchImageAccess()
    expect(access.canUseBatchImage.value).toBe(true)

    authState.token = 'token-b'
    authState.user = { id: 2, role: 'user' }
    await access.refreshBatchImageAccess()

    expect(listKeys).toHaveBeenCalledTimes(2)
    expect(access.canUseBatchImage.value).toBe(false)
  })
})
