import assert from 'node:assert/strict'
import { readFileSync, readlinkSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

import {
  APPROVED_SHELL_SOURCE,
  CN_PROVIDER_SHELL_ASSET,
  CN_PROVIDER_SHELL_DIRECTORY,
  patchApprovedShell,
} from './build-cn-provider-shell.mjs'

const assetsDirectory = resolve(import.meta.dirname, 'recovered-frontend/console/assets')

test('CN Provider shell differs from the approved shell only at the router seam', () => {
  const approved = readFileSync(resolve(assetsDirectory, APPROVED_SHELL_SOURCE), 'utf8')
  const generated = readFileSync(resolve(assetsDirectory, CN_PROVIDER_SHELL_ASSET), 'utf8')

  assert.equal(generated, patchApprovedShell(approved))
  assert.match(generated, /__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__/)
  assert.doesNotMatch(approved, /__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__/)
  assert.equal((generated.match(/zero-one-cn-provider-route-placeholder-v1\.js/g) || []).length, 2)
  assert.doesNotMatch(
    generated,
    /path:"\/admin\/(?:groups|accounts)"[^}]+component:\(\)=>y\(\(\)=>import\("\.\/(?:Groups|Accounts)View-/,
  )
  assert.equal(
    readlinkSync(resolve(assetsDirectory, CN_PROVIDER_SHELL_DIRECTORY, 'vendor-vue-iKpM1E08.js')),
    '../vendor-vue-iKpM1E08.js',
  )
})

test('CN Provider shell generation fails closed when the approved bootstrap changes', () => {
  assert.throws(() => patchApprovedShell('unrelated shell'), /bootstrap seam count changed/)
})
