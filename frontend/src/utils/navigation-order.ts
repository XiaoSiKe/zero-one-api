/** Sort complete navigation entries with the same first-occurrence rule as the settings editor. */
export function sortNavItems<T extends { path: string }>(items: readonly T[], order: unknown): T[] {
  const remaining = new Map<string, T>()
  for (const item of items) {
    if (!remaining.has(item.path)) remaining.set(item.path, item)
  }
  const ordered: T[] = []
  if (Array.isArray(order)) {
    for (const path of order) {
      const item = typeof path === 'string' ? remaining.get(path) : undefined
      if (!item) continue
      ordered.push(item)
      remaining.delete(path)
    }
  }
  return [...ordered, ...remaining.values()]
}
