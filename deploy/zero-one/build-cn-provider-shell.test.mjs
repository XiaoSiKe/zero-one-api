import assert from 'node:assert/strict'
import { readFileSync, readlinkSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

import {
  APPROVED_SHELL_SOURCE,
  CN_PROVIDER_SHELL_ASSET,
  CN_PROVIDER_SHELL_DIRECTORY,
  LEGACY_CN_PROVIDER_SHELL_DIRECTORY,
  PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY,
  patchApprovedShell,
  patchLegacyApprovedShell,
  patchPreviousApprovedShell,
} from './build-cn-provider-shell.mjs'

const assetsDirectory = resolve(import.meta.dirname, 'recovered-frontend/console/assets')

test('CN Provider shell differs from the approved shell only at the router seam', () => {
  const approved = readFileSync(resolve(assetsDirectory, APPROVED_SHELL_SOURCE), 'utf8')
  const generated = readFileSync(resolve(assetsDirectory, CN_PROVIDER_SHELL_ASSET), 'utf8')
  const legacy = readFileSync(
    resolve(assetsDirectory, LEGACY_CN_PROVIDER_SHELL_DIRECTORY, APPROVED_SHELL_SOURCE),
    'utf8',
  )
  const previous = readFileSync(
    resolve(assetsDirectory, PREVIOUS_CN_PROVIDER_SHELL_DIRECTORY, APPROVED_SHELL_SOURCE),
    'utf8',
  )

  assert.equal(generated, patchApprovedShell(approved))
  assert.equal(legacy, patchLegacyApprovedShell(approved))
  assert.equal(previous, patchPreviousApprovedShell(approved))
  assert.match(generated, /__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__/)
  assert.doesNotMatch(approved, /__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__/)
  assert.equal((generated.match(/zero-one-cn-provider-route-placeholder-v1\.js/g) || []).length, 2)
  assert.equal((generated.match(/zero-one-online-image-route-placeholder-v1\.js/g) || []).length, 1)
  assert.match(generated, /path:"\/images",name:"ImageGeneration"/)
  assert.match(generated, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
  assert.match(generated, /payload\?\.data\?\.items\?payload\.data:payload/)
  assert.doesNotMatch(legacy, /path:"\/images",name:"ImageGeneration"/)
  assert.doesNotMatch(legacy, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
  assert.match(previous, /path:"\/images",name:"ImageGeneration"/)
  assert.doesNotMatch(previous, /__ZERO_ONE_ONLINE_IMAGE_ACCESS__/)
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
