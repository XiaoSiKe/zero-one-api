import { describe, expect, it, vi } from 'vitest'
import { deleteAllUnusedRedeemCodes } from '../cleanup'

describe('unused Redeem Code cleanup', () => {
  it('drains multiple pages and reports actual deletions, including concurrent claims', async () => {
    const api = {
      list: vi.fn().mockResolvedValueOnce({ items: Array.from({ length: 1000 }, (_, id) => ({ id: id + 1 })) })
        .mockResolvedValueOnce({ items: [{ id: 1001 }] }).mockResolvedValueOnce({ items: [] }),
      batchDelete: vi.fn().mockResolvedValueOnce({ deleted: 999 }).mockResolvedValueOnce({ deleted: 1 }),
    }
    expect(await deleteAllUnusedRedeemCodes(api)).toEqual({ deleted: 1000, complete: true })
    expect(api.list.mock.calls).toEqual(Array(3).fill([1, 1000, { status: 'unused' }]))
    expect(api.batchDelete.mock.calls[1][0]).toEqual([1001])
  })

  it('stops when a deletion makes no progress', async () => {
    const api = { list: vi.fn().mockResolvedValue({ items: [{ id: 1 }] }), batchDelete: vi.fn().mockResolvedValue({ deleted: 0 }) }
    expect(await deleteAllUnusedRedeemCodes(api)).toEqual({ deleted: 0, complete: false })
    expect(api.list).toHaveBeenCalledTimes(1)
  })

  it('does not loop forever over unchanged records', async () => {
    const api = { list: vi.fn().mockResolvedValue({ items: [{ id: 1 }, { id: 2 }] }), batchDelete: vi.fn().mockResolvedValue({ deleted: 1 }) }
    expect(await deleteAllUnusedRedeemCodes(api)).toEqual({ deleted: 1, complete: false })
    expect(api.batchDelete).toHaveBeenCalledTimes(1)
  })

  it('retains the actual deleted count when a later batch fails', async () => {
    const error = { status: 503, message: 'unavailable' }
    const api = { list: vi.fn().mockResolvedValueOnce({ items: [{ id: 1 }] }).mockRejectedValueOnce(error), batchDelete: vi.fn().mockResolvedValue({ deleted: 1 }) }
    expect(await deleteAllUnusedRedeemCodes(api)).toEqual({ deleted: 1, complete: false, error })
  })
})
