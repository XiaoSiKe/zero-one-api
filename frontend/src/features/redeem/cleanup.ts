interface CleanupAPI {
  list(page: number, pageSize: number, filters: { status: 'unused' }): Promise<{ items: { id: number }[] }>
  batchDelete(ids: number[]): Promise<{ deleted: number }>
}

export async function deleteAllUnusedRedeemCodes(api: CleanupAPI): Promise<{
  deleted: number
  complete: boolean
  error?: unknown
}> {
  let deleted = 0
  const attempted = new Set<number>()
  try {
    for (;;) {
      // Deletions shift later rows forward; always read the first remaining page.
      const page = await api.list(1, 1000, { status: 'unused' })
      const ids = page.items.map((code) => code.id)
      if (ids.length === 0) return { deleted, complete: true }
      if (ids.some((id) => attempted.has(id))) return { deleted, complete: false }
      const result = await api.batchDelete(ids)
      if (!Number.isInteger(result.deleted) || result.deleted < 0 || result.deleted > ids.length) {
        return { deleted, complete: false }
      }
      deleted += result.deleted
      if (result.deleted === 0) return { deleted, complete: false }
      ids.forEach((id) => attempted.add(id))
    }
  } catch (error) {
    return { deleted, complete: false, error }
  }
}
