import { readFileSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, test } from '@playwright/test'

import { publicSettings } from './fixtures/api'

const testsDirectory = dirname(fileURLToPath(import.meta.url))
const repositoryRoot = resolve(testsDirectory, '../..')

function typescriptFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = resolve(directory, entry.name)
    if (entry.isDirectory()) return typescriptFiles(path)
    return entry.isFile() && entry.name.endsWith('.ts') ? [path] : []
  })
}

test('visual fixtures follow the pinned server version without handwritten overrides', () => {
  const serverVersion = readFileSync(
    resolve(repositoryRoot, 'backend/cmd/server/VERSION'),
    'utf8',
  ).trim()
  const upstreamBaseline = JSON.parse(
    readFileSync(resolve(repositoryRoot, '.github/upstream-baseline.json'), 'utf8'),
  ) as { release: string }

  expect(publicSettings().version).toBe(serverVersion)
  expect(upstreamBaseline.release).toBe(`v${serverVersion}`)

  const hardcodedVersions = typescriptFiles(testsDirectory).flatMap((path) => {
    const source = readFileSync(path, 'utf8')
    return /\bversion\s*:\s*['"]\d+\.\d+\.\d+['"]/u.test(source) ? [path] : []
  })
  expect(hardcodedVersions).toEqual([])
})
