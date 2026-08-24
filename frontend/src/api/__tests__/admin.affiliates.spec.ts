import { beforeEach, describe, expect, it, vi } from 'vitest'

const { get, post } = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
}))

vi.mock('../client', () => ({
  apiClient: { get, post },
}))

import { bindRelationship, listInviteRecords } from '@/api/admin/affiliates'

describe('admin affiliate API', () => {
  beforeEach(() => {
    get.mockReset()
    post.mockReset()
  })

  it('forwards an exact inviter filter when listing invite records for customer detail', async () => {
    get.mockResolvedValue({ data: { items: [], total: 0 } })

    await listInviteRecords({ inviter_id: 17 })

    expect(get).toHaveBeenCalledWith('/admin/affiliates/invites', {
      params: expect.objectContaining({ inviter_id: 17 }),
    })
  })

  it('posts exact inviter and invitee IDs when binding a missing relationship', async () => {
    post.mockResolvedValue({ data: { inviter_id: 17, invitee_id: 29 } })

    await bindRelationship({ inviter_id: 17, invitee_id: 29 })

    expect(post).toHaveBeenCalledWith('/admin/affiliates/invites', {
      inviter_id: 17,
      invitee_id: 29,
    })
  })
})
