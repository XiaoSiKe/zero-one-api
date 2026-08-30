import { beforeEach, describe, expect, it } from 'vitest'
import { IDBFactory } from 'fake-indexeddb'
import {
  clearImageGenerationHistory,
  readImageGenerationHistory,
  saveImageGenerationHistoryEntry,
  type ImageGenerationHistoryEntry,
} from '../history'

function historyEntry(id: string): ImageGenerationHistoryEntry {
  return {
    id,
    createdAt: Number(id.replace(/\D/g, '')) || 1,
    model: 'gpt-image-2',
    prompt: `prompt-${id}`,
    sizeLabel: '2K · 1:1',
    imageSize: '2048x2048',
    images: [{
      id: `image-${id}`,
      src: `data:image/png;base64,${id}`,
      prompt: `prompt-${id}`,
      revisedPrompt: '',
      mimeType: 'image/png',
      downloadName: `${id}.png`,
    }],
  }
}

function transactionDone(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve()
    transaction.onerror = () => reject(transaction.error)
  })
}

async function insertLegacyUnownedEntry(entry: ImageGenerationHistoryEntry) {
  const database = await new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('zero-one-image-generation', 1)
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains('history')) {
        request.result.createObjectStore('history', { keyPath: 'id' })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
  const transaction = database.transaction('history', 'readwrite')
  transaction.objectStore('history').put(entry)
  await transactionDone(transaction)
  database.close()
}

describe('Online Image history', () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, 'indexedDB', {
      configurable: true,
      value: new IDBFactory(),
    })
  })

  it('keeps prompts and images isolated by User', async () => {
    await saveImageGenerationHistoryEntry(1, historyEntry('user-1'))
    await saveImageGenerationHistoryEntry(2, historyEntry('user-2'))

    expect((await readImageGenerationHistory(1)).map((entry) => entry.id)).toEqual(['user-1'])
    expect((await readImageGenerationHistory(2)).map((entry) => entry.id)).toEqual(['user-2'])
  })

  it('clears only the current User history', async () => {
    await saveImageGenerationHistoryEntry(1, historyEntry('user-1'))
    await saveImageGenerationHistoryEntry(2, historyEntry('user-2'))

    await clearImageGenerationHistory(2)

    expect((await readImageGenerationHistory(1)).map((entry) => entry.id)).toEqual(['user-1'])
    expect(await readImageGenerationHistory(2)).toEqual([])
  })

  it('fails closed for legacy entries without User ownership', async () => {
    await insertLegacyUnownedEntry(historyEntry('legacy-1'))
    expect(await readImageGenerationHistory(1)).toEqual([])
    expect(await readImageGenerationHistory(2)).toEqual([])
  })
})
