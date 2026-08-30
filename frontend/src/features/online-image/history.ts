export interface ImageGenerationHistoryImage {
  id: string
  src: string
  prompt: string
  revisedPrompt: string
  mimeType: string
  downloadName: string
}

export interface ImageGenerationHistoryEntry {
  id: string
  createdAt: number
  model: string
  prompt: string
  sizeLabel: string
  imageSize: string
  images: ImageGenerationHistoryImage[]
}

interface PersistedHistoryEntry extends ImageGenerationHistoryEntry {
  userId?: number
}

const historyDatabase = 'zero-one-image-generation'
const historyStore = 'history'
const historyLimit = 20

function openHistoryDatabase(): Promise<IDBDatabase> {
  if (typeof indexedDB === 'undefined') return Promise.reject(new Error('IndexedDB is not available'))
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(historyDatabase, 1)
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(historyStore)) {
        request.result.createObjectStore(historyStore, { keyPath: 'id' })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error || new Error('Failed to open IndexedDB'))
  })
}

function requestValue<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error || new Error('IndexedDB request failed'))
  })
}

function transactionDone(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error || new Error('IndexedDB transaction failed'))
    transaction.onabort = () => reject(transaction.error || new Error('IndexedDB transaction aborted'))
  })
}

function belongsToUser(entry: PersistedHistoryEntry, userId: number): boolean {
  return entry.userId === userId && Array.isArray(entry.images) && entry.images.length > 0
}

export async function readImageGenerationHistory(userId: number): Promise<ImageGenerationHistoryEntry[]> {
  const database = await openHistoryDatabase()
  try {
    const values = await requestValue(
      database.transaction(historyStore, 'readonly').objectStore(historyStore).getAll(),
    ) as PersistedHistoryEntry[]
    return values.filter((entry) => belongsToUser(entry, userId))
      .sort((left, right) => right.createdAt - left.createdAt)
      .slice(0, historyLimit)
  } finally {
    database.close()
  }
}

export async function saveImageGenerationHistoryEntry(
  userId: number,
  entry: ImageGenerationHistoryEntry,
): Promise<ImageGenerationHistoryEntry[]> {
  const database = await openHistoryDatabase()
  try {
    const write = database.transaction(historyStore, 'readwrite')
    write.objectStore(historyStore).put({ ...entry, userId })
    await transactionDone(write)
    const values = await requestValue(
      database.transaction(historyStore, 'readonly').objectStore(historyStore).getAll(),
    ) as PersistedHistoryEntry[]
    const owned = values.filter((value) => belongsToUser(value, userId))
      .sort((left, right) => right.createdAt - left.createdAt)
    const overflow = owned.slice(historyLimit)
    if (overflow.length > 0) {
      const cleanup = database.transaction(historyStore, 'readwrite')
      overflow.forEach((value) => cleanup.objectStore(historyStore).delete(value.id))
      await transactionDone(cleanup)
    }
    return owned.slice(0, historyLimit)
  } finally {
    database.close()
  }
}

export async function clearImageGenerationHistory(userId: number): Promise<void> {
  const database = await openHistoryDatabase()
  try {
    const values = await requestValue(
      database.transaction(historyStore, 'readonly').objectStore(historyStore).getAll(),
    ) as PersistedHistoryEntry[]
    const owned = values.filter((value) => value.userId === userId)
    if (owned.length === 0) return
    const transaction = database.transaction(historyStore, 'readwrite')
    owned.forEach((value) => transaction.objectStore(historyStore).delete(value.id))
    await transactionDone(transaction)
  } finally {
    database.close()
  }
}
