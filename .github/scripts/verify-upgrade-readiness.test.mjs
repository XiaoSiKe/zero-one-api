import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  classifyUIPaths,
  evaluateProductChangeProtection,
  evaluateDirtyPreflight,
  evaluateHotfixAudit,
  evaluatePinnedRelease,
  evaluateRecordedPreviousRelease,
  parseArguments,
  upstreamComparisonArgs,
} from './verify-upgrade-readiness.mjs'

test('redeem, TTFT, and metadata changes require permanent retention rather than UI or legacy fallback', () => {
  const baseline = JSON.parse(readFileSync(new URL('../upstream-baseline.json', import.meta.url), 'utf8'))
  const uiManifest = JSON.parse(readFileSync(new URL('./ui-baseline.json', import.meta.url), 'utf8'))
  const paths = [
    'backend/internal/handler/gateway_handler.go',
    'backend/internal/pkg/gatewaytiming/timing.go',
    'backend/internal/repository/redeem_code_repo.go',
    'backend/internal/repository/redeem_code_lifecycle_integration_test.go',
    'backend/internal/repository/api_key_last_used_monotonic_integration_test.go',
    'backend/internal/service/api_key_last_used_writer.go',
    'backend/internal/service/gateway_http_timing.go',
    'backend/internal/service/openai_http_drain.go',
    'deploy/zero-one/recovered-frontend/console/assets/redeem-ttft-20260828',
    'docs/adr/0008-redeem-and-http-stream-lifecycles.md',
    'frontend/src/api/redeem.ts',
    'frontend/src/features/redeem/generation.ts',
    'visual-regression/tests/redeem.behavior.spec.ts',
  ].sort()
  assert.deepEqual(evaluateProductChangeProtection(paths, baseline, uiManifest), {
    preserved: paths, approved_ui: [], legacy_hotfix: [], approved_backport: [], unprotected: [],
  })
  for (const path of paths) {
    const incomplete = structuredClone(baseline)
    incomplete.preserve_on_upstream_sync = incomplete.preserve_on_upstream_sync.filter((item) => item !== path)
    const protection = evaluateProductChangeProtection([path], incomplete, uiManifest)
    assert.deepEqual(protection.preserved, [], `${path} must not receive implicit permanent protection`)
    if (path.startsWith('backend/') || path === 'frontend/src/api/redeem.ts') {
      assert.deepEqual(protection.unprotected, [path], `${path} must fail preflight when omitted`)
    }
  }
})

test('requires every product difference to have one retention policy', () => {
  const baseline = {
    preserve_on_upstream_sync: ['backend/preserved.go', 'frontend/src/api/preserved.ts'],
    legacy_hotfixes: [{ paths: ['backend/hotfix.go'] }],
    approved_backports: [{ files: { 'backend/backport.go': {} } }],
  }
  const uiManifest = {
    protected_paths: ['frontend/', 'landing/'],
    compatibility_paths: ['frontend/src/api/'],
  }

  assert.deepEqual(
    evaluateProductChangeProtection(
      [
        'backend/preserved.go',
        'frontend/src/App.vue',
        'backend/hotfix.go',
        'backend/backport.go',
        'frontend/src/api/preserved.ts',
        'frontend/src/api/unprotected.ts',
        'backend/unprotected.go',
      ],
      baseline,
      uiManifest,
    ),
    {
      preserved: ['backend/preserved.go', 'frontend/src/api/preserved.ts'],
      approved_ui: ['frontend/src/App.vue'],
      legacy_hotfix: ['backend/hotfix.go'],
      approved_backport: ['backend/backport.go'],
      unprotected: ['backend/unprotected.go', 'frontend/src/api/unprotected.ts'],
    },
  )
})

test('parses stable release tags and worktree mode', () => {
  assert.deepEqual(
    parseArguments([
      '--old-ref',
      'v0.1.178',
      '--new-ref',
      'v0.1.179',
      '--product-ref',
      'product-tip',
      '--worktree',
    ]),
    {
      oldRef: 'v0.1.178',
      newRef: 'v0.1.179',
      productRef: 'product-tip',
      recordedSync: false,
      worktree: true,
    },
  )
  assert.throws(
    () =>
      parseArguments([
        '--old-ref',
        'main',
        '--new-ref',
        'v0.1.179',
        '--product-ref',
        'product-tip',
      ]),
    /stable vMAJOR.MINOR.PATCH/,
  )
  assert.throws(
    () => parseArguments(['--old-ref', 'v0.1.178', '--new-ref', 'v0.1.179']),
    /--product-ref is required/,
  )
  assert.deepEqual(parseArguments(['--recorded-sync', '--worktree']), {
    recordedSync: true,
    worktree: true,
  })
  assert.throws(
    () => parseArguments(['--recorded-sync', '--product-ref', 'product-tip']),
    /cannot be combined/,
  )
})

test('separates protected UI changes from compatibility paths', () => {
  const manifest = {
    protected_paths: ['frontend/src/', 'landing/src/'],
    compatibility_paths: ['frontend/src/api/', 'frontend/src/types/'],
  }
  assert.deepEqual(
    classifyUIPaths(
      [
        'frontend/src/components/App.vue',
        'frontend/src/api/admin/channels.ts',
        'frontend/src/types/index.ts',
        'landing/src/App.tsx',
        'backend/main.go',
      ],
      manifest,
    ),
    {
      compatibility: ['frontend/src/api/admin/channels.ts', 'frontend/src/types/index.ts'],
      protected: ['frontend/src/components/App.vue', 'landing/src/App.tsx'],
    },
  )
})

test('requires dirty worktrees to be isolated before verification', () => {
  assert.deepEqual(evaluateDirtyPreflight([]), [])
  assert.deepEqual(evaluateDirtyPreflight([' M backend/main.go', '?? local.tmp']), [
    'worktree must be isolated before upgrade verification: backend/main.go, local.tmp',
  ])
})

test('requires the new tag to match the pinned baseline', () => {
  const baseline = { release: 'v0.1.179', commit: 'a'.repeat(40) }
  assert.deepEqual(
    evaluatePinnedRelease({ newRef: baseline.release, newCommit: baseline.commit, baseline }),
    [],
  )
  assert.equal(
    evaluatePinnedRelease({ newRef: 'v0.1.180', newCommit: 'b'.repeat(40), baseline }).length,
    2,
  )
})

test('requires the recorded previous tag to peel to the attested commit', () => {
  const baseline = { upstream_sync: { previous_commit: 'a'.repeat(40) } }
  assert.deepEqual(
    evaluateRecordedPreviousRelease({
      oldRef: 'v0.1.178',
      oldCommit: baseline.upstream_sync.previous_commit,
      baseline,
      recordedSync: true,
    }),
    [],
  )
  assert.deepEqual(
    evaluateRecordedPreviousRelease({
      oldRef: 'v0.1.178',
      oldCommit: 'b'.repeat(40),
      baseline,
      recordedSync: true,
    }),
    [
      `previous release v0.1.178 peels to ${'b'.repeat(40)}, expected ${baseline.upstream_sync.previous_commit}`,
    ],
  )
})

test('reports hotfix overlaps and forces upstream-equivalent paths to exit', () => {
  const audit = evaluateHotfixAudit(
    [{ name: 'billing', paths: ['billing.go', 'billing_test.go'] }],
    ['billing.go'],
    ['billing_test.go'],
  )
  assert.deepEqual(audit, [
    {
      name: 'billing',
      status: 'exit-required',
      overlaps: ['billing.go'],
      exit_candidates: ['billing_test.go'],
    },
  ])
})

test('compares hotfix exits against the worktree when requested', () => {
  const commit = 'a'.repeat(40)
  assert.deepEqual(upstreamComparisonArgs(commit, 'backend/hotfix.go', false), [
    'diff', '--quiet', commit, 'HEAD', '--', 'backend/hotfix.go',
  ])
  assert.deepEqual(upstreamComparisonArgs(commit, 'backend/hotfix.go', true), [
    'diff', '--quiet', commit, '--', 'backend/hotfix.go',
  ])
})

test('CI and publish always run the recorded sync gate without optional product input', () => {
  for (const workflow of ['zero-one-ci.yml', 'zero-one-publish.yml']) {
    const source = readFileSync(new URL(`../workflows/${workflow}`, import.meta.url), 'utf8')
    assert.doesNotMatch(source, /--product-ref\s+HEAD/u)
    assert.doesNotMatch(source, /pre_upgrade_product_ref/u)
    assert.match(
      source,
      /- name: Verify recorded upstream upgrade readiness\n\s+run: node \.github\/scripts\/verify-upgrade-readiness\.mjs --recorded-sync/u,
    )
  }
})
