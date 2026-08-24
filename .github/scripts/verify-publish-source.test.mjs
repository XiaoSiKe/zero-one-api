import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  findSuccessfulRun,
  stableReleaseVersion,
  validateCommitSha,
} from './verify-publish-source.mjs'

const commitSha = 'a'.repeat(40)
const baseline = JSON.parse(
  readFileSync(new URL('../upstream-baseline.json', import.meta.url), 'utf8'),
)

function baselineForRelease(release) {
  const value = structuredClone(baseline)
  value.release = release
  for (const backport of value.approved_backports) backport.valid_for_release = release
  for (const hotfix of value.legacy_hotfixes) hotfix.valid_for_release = release
  return value
}

test('uses the pinned stable release as the published server version', () => {
  assert.equal(stableReleaseVersion(baseline), baseline.release.slice(1))
})

test('publish source rejects missing or empty pre-upgrade sync metadata', () => {
  const missing = structuredClone(baseline)
  delete missing.upstream_sync
  assert.throws(() => stableReleaseVersion(missing), /upstream_sync metadata is required/)

  const emptyProductCommit = structuredClone(baseline)
  emptyProductCommit.upstream_sync.product_commit = ''
  assert.throws(() => stableReleaseVersion(emptyProductCommit), /product_commit must be a lowercase/)
})

test('rejects non-stable release identifiers', () => {
  assert.throws(
    () => stableReleaseVersion(baselineForRelease('v0.1.174-rc.1')),
    /stable vMAJOR\.MINOR\.PATCH/,
  )
  assert.throws(
    () => stableReleaseVersion(baselineForRelease('0.1.174')),
    /stable vMAJOR\.MINOR\.PATCH/,
  )
})

test('passes the verified stable version to the Sub2API image build', () => {
  const workflow = readFileSync(
    new URL('../workflows/zero-one-publish.yml', import.meta.url),
    'utf8',
  )
  assert.match(workflow, /VERSION=\$\{\{ steps\.source\.outputs\.source_version \}\}/)
})

test('checks the published Sub2API binary version', () => {
  const workflow = readFileSync(
    new URL('../workflows/zero-one-publish.yml', import.meta.url),
    'utf8',
  )
  assert.match(workflow, /docker run --rm --platform linux\/amd64/)
  assert.match(workflow, /Sub2API \$SOURCE_VERSION \(/)
})

test('requires a full lowercase commit SHA', () => {
  assert.equal(validateCommitSha(commitSha), commitSha)
  assert.throws(() => validateCommitSha('abc'), /40-character SHA/)
  assert.throws(() => validateCommitSha('A'.repeat(40)), /40-character SHA/)
})

test('selects the newest successful completed Zero One CI run for the commit', () => {
  const selected = findSuccessfulRun(
    {
      workflow_runs: [
        {
          head_sha: commitSha,
          status: 'completed',
          conclusion: 'success',
          updated_at: '2026-08-10T10:00:00Z',
          html_url: 'https://github.test/older',
        },
        {
          head_sha: commitSha,
          status: 'completed',
          conclusion: 'failure',
          updated_at: '2026-08-10T12:00:00Z',
          html_url: 'https://github.test/failed',
        },
        {
          head_sha: commitSha,
          status: 'completed',
          conclusion: 'success',
          updated_at: '2026-08-10T11:00:00Z',
          html_url: 'https://github.test/newer',
        },
      ],
    },
    commitSha,
  )

  assert.equal(selected?.html_url, 'https://github.test/newer')
})
