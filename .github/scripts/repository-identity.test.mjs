import assert from 'node:assert/strict'
import { readFileSync, readlinkSync } from 'node:fs'
import test from 'node:test'

const repositoryRoot = new URL('../../', import.meta.url)
const read = (path) => readFileSync(new URL(path, repositoryRoot), 'utf8')

test('manual releases publish both product images under the authorized current owner', () => {
  const workflow = read('.github/workflows/zero-one-publish.yml')
  const images = Object.fromEntries(
    [...workflow.matchAll(/^  (SUB2API_IMAGE|EDGE_IMAGE): (.+)$/gm)]
      .map(([, key, value]) => [key, value]),
  )
  assert.deepEqual(images, {
    SUB2API_IMAGE: 'ghcr.io/xiaosike/zero-one-sub2api',
    EDGE_IMAGE: 'ghcr.io/xiaosike/zero-one-edge',
  })
})

test('the served recovered Console uses the current product repository link', () => {
  const html = read('deploy/zero-one/recovered-frontend/console/index.html')
  const entry = '/assets/cn-provider-shell-v3/index-9xJBhx8B.js'
  assert.ok(html.includes(`await import("${entry}")`), 'the recovered Console must load its approved shell seam')
  const source = read(`deploy/zero-one/recovered-frontend/console${entry}`)
  assert.ok(source.includes('https://github.com/XiaoSiKe/zero-one-api'))
  assert.ok(!source.includes('https://github.com/01-Yang/zero-one-api'))
})

test('the migrated Console gets a fresh immutable asset namespace and retains historical aliases', () => {
  const html = read('deploy/zero-one/recovered-frontend/console/index.html')
  assert.ok(html.includes('await import("/assets/cn-provider-shell-v3/index-9xJBhx8B.js")'))
  assert.ok(read('deploy/zero-one/recovered-frontend/console/assets/index-9xJBhx8B.js').includes('https://github.com/XiaoSiKe/zero-one-api'))
  for (const alias of ['navigation-loading-20260827', 'redeem-ttft-20260828', 'github-migration-20260828']) {
    assert.equal(readlinkSync(new URL(`deploy/zero-one/recovered-frontend/console/assets/${alias}`, repositoryRoot)), '.')
  }
})

test('safe Edge switching covers a new-owner image with the old-owner digest retained for rollback', () => {
  const fixture = read('deploy/zero-one/test-safe-edge-switch.sh')
  assert.match(fixture.match(/^old_image='([^']+)'$/m)?.[1] ?? '', /^ghcr\.io\/01-yang\/zero-one-edge@sha256:[a-f0-9]{64}$/)
  assert.match(fixture.match(/^new_image='([^']+)'$/m)?.[1] ?? '', /^ghcr\.io\/xiaosike\/zero-one-edge@sha256:[a-f0-9]{64}$/)
  assert.ok(!fixture.includes("'ghcr.io/01-yang/zero-one-edge:latest'"))
})
