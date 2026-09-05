import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { deduplicateConsoleAssets } from './deduplicate-console-assets.mjs'

const bytes = `import './dependency.js'; export const text = '${'safe data '.repeat(150)}';`

test('shares identical bytes while keeping old URLs, relative imports and rebuild idempotence', t => {
  const root = mkdtempSync(join(tmpdir(), 'console-dedup-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  const paths = ['cn-provider-admin-v1', 'online-image-v7'].map(directory => {
    mkdirSync(join(root, directory))
    const path = join(root, directory, 'data.js')
    writeFileSync(path, bytes)
    writeFileSync(join(root, directory, 'dependency.js'), 'export const value=1;')
    return path
  })
  const result = deduplicateConsoleAssets(root)
  assert.equal(result.savedBytes, Buffer.byteLength(bytes))
  assert.equal(realpathSync(paths[0]), realpathSync(paths[1]))
  for (const path of paths) assert.equal(readFileSync(path, 'utf8'), bytes)
  assert.deepEqual(deduplicateConsoleAssets(root), { aliases: 0, savedBytes: 0 })
  unlinkSync(paths[0]); writeFileSync(paths[0], bytes)
  assert.equal(deduplicateConsoleAssets(root).aliases, 1)
  assert.equal(readdirSync(join(root, 'shared-immutable')).length, 1)
  for (const path of paths) assert.equal(readFileSync(path, 'utf8'), bytes)
})

test('rejects aliases outside the Console instead of reading or sharing their data', t => {
  const parent = mkdtempSync(join(tmpdir(), 'console-dedup-'))
  t.after(() => rmSync(parent, { recursive: true, force: true }))
  const root = join(parent, 'assets'); mkdirSync(join(root, 'online-image-v7'), { recursive: true })
  writeFileSync(join(parent, 'private.js'), bytes)
  symlinkSync('../../private.js', join(root, 'online-image-v7', 'escape.js'))
  assert.throws(() => deduplicateConsoleAssets(root), /escapes Console/)
})
