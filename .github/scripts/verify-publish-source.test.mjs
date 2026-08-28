import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import {
  findSuccessfulRun,
  stableReleaseVersion,
  validateCommitSha,
  verifySuccessfulChecks,
} from './verify-publish-source.mjs'

const commitSha = 'a'.repeat(40)
const repository = 'XiaoSiKe/zero-one-api'
const workflowFile = 'zero-one-ci.yml'
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

function successfulRun(overrides = {}) {
  return {
    id: 10,
    run_attempt: 1,
    head_sha: commitSha,
    head_branch: 'main',
    event: 'push',
    path: `.github/workflows/${workflowFile}`,
    repository: { full_name: repository },
    head_repository: { full_name: repository },
    status: 'completed',
    conclusion: 'success',
    html_url: `https://github.com/${repository}/actions/runs/${overrides.id ?? 10}`,
    ...overrides,
  }
}

function successfulChecksFixture() {
  const ciRun = successfulRun()
  const securityRun = successfulRun({ id: 20, path: '.github/workflows/security-scan.yml' })
  const ciJobs = [
    'upstream-boundary', 'landing', 'console', 'backend', 'deployment', 'shell',
    'golangci-lint', 'Chromium visual regression', 'test', 'frontend',
  ]
  const securityJobs = ['backend-security', 'frontend-security']
  const pages = new Map()
  for (const [file, run, names] of [[workflowFile, ciRun, ciJobs], ['security-scan.yml', securityRun, securityJobs]]) {
    pages.set(`/repos/${repository}/actions/workflows/${file}/runs`, { total_count: 1, workflow_runs: [run] })
    pages.set(`/repos/${repository}/actions/runs/${run.id}/attempts/${run.run_attempt}/jobs`, {
      total_count: names.length,
      jobs: names.map((name, index) => ({
        id: run.id * 100 + index,
        name,
        run_id: run.id,
        run_attempt: run.run_attempt,
        head_sha: commitSha,
        status: 'completed',
        conclusion: 'success',
      })),
    })
  }
  const requests = []
  const fetchImpl = async (input, options) => {
    const url = new URL(input)
    assert.equal(url.origin, 'https://api.github.com')
    assert.equal(options.headers.Authorization, 'Bearer test-token')
    requests.push(url)
    const payload = pages.get(url.pathname)
    assert.ok(payload, `unexpected GitHub endpoint: ${url.pathname}`)
    return Response.json(structuredClone(payload))
  }
  return { ciRun, securityRun, pages, requests, fetchImpl }
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

test('the trusted source policy and published evidence include the independent security workflow', () => {
  const workflow = readFileSync(new URL('../workflows/zero-one-publish.yml', import.meta.url), 'utf8')
  const trustedPaths = workflow.match(/trusted_paths=\(([\s\S]*?)\n          \)/)?.[1] ?? ''
  assert.ok(trustedPaths.includes('.github/workflows/security-scan.yml'))
  assert.ok(workflow.includes('SECURITY_RUN_URL: ${{ steps.source.outputs.security_run_url }}'))
  assert.ok(workflow.includes('echo "- Verified Security: $SECURITY_RUN_URL"'))
})

test('requires a full lowercase commit SHA', () => {
  assert.equal(validateCommitSha(commitSha), commitSha)
  assert.throws(() => validateCommitSha('abc'), /40-character SHA/)
  assert.throws(() => validateCommitSha('A'.repeat(40)), /40-character SHA/)
})

test('does not reuse an older successful run after the newest run failed', () => {
  const selected = findSuccessfulRun(
    {
      workflow_runs: [
        successfulRun({
          id: 1,
          head_sha: commitSha,
          status: 'completed',
          conclusion: 'success',
          updated_at: '2026-08-10T10:00:00Z',
          html_url: 'https://github.test/older',
        }),
        successfulRun({
          id: 3,
          head_sha: commitSha,
          status: 'completed',
          conclusion: 'failure',
          updated_at: '2026-08-10T12:00:00Z',
          html_url: 'https://github.test/failed',
        }),
        successfulRun({
          id: 2,
          head_sha: commitSha,
          status: 'completed',
          conclusion: 'success',
          updated_at: '2026-08-10T11:00:00Z',
          html_url: 'https://github.test/newer',
        }),
      ],
    },
    commitSha,
    repository,
    workflowFile,
  )

  assert.equal(selected, undefined)
})

test('only the exact repository workflow main-push execution can authorize a release', () => {
  const valid = successfulRun()
  assert.deepEqual(findSuccessfulRun({ workflow_runs: [valid] }, commitSha, repository, workflowFile), valid)
  for (const overrides of [
    { event: 'workflow_dispatch' }, { event: 'pull_request' }, { head_branch: 'codex/change' },
    { head_sha: 'b'.repeat(40) }, { path: '.github/workflows/backend-ci.yml' },
    { repository: { full_name: 'someone/zero-one-api' } },
    { head_repository: { full_name: 'someone/zero-one-api' } },
    { run_attempt: 0 }, { id: null },
  ]) {
    assert.equal(
      findSuccessfulRun({ workflow_runs: [successfulRun(overrides)] }, commitSha, repository, workflowFile),
      undefined,
      JSON.stringify(overrides),
    )
  }
})

test('release authorization requires actual successful jobs from both product and security workflow attempts', async () => {
  const fixture = successfulChecksFixture()
  const runs = await verifySuccessfulChecks(repository, 'test-token', commitSha, fixture.fetchImpl)
  assert.deepEqual(runs.map((run) => run.id), [fixture.ciRun.id, fixture.securityRun.id])
  for (const url of fixture.requests.filter((request) => request.pathname.endsWith('/runs'))) {
    assert.equal(url.searchParams.get('head_sha'), commitSha)
    assert.equal(url.searchParams.get('branch'), 'main')
    assert.equal(url.searchParams.get('event'), 'push')
    assert.equal(url.searchParams.has('status'), false, 'queued or running executions must remain visible')
  }
  for (const run of runs) {
    assert.ok(fixture.requests.some((url) => url.pathname.endsWith(`/runs/${run.id}/attempts/${run.run_attempt}/jobs`)))
  }
})

test('required job evidence rejects omissions, non-success, duplicates and another run or attempt', async () => {
  const mutations = [
    (payload) => { payload.jobs.pop(); payload.total_count = payload.jobs.length },
    (payload) => { payload.jobs.pop() },
    (payload) => { payload.jobs[0].name = 'unrelated diagnostic' },
    (payload) => { payload.jobs[0] = { ...payload.jobs[1] } },
    ...['skipped', 'failure', 'cancelled', 'neutral'].map((conclusion) =>
      (payload) => { payload.jobs[0].conclusion = conclusion }),
    (payload) => { payload.jobs[0].status = 'in_progress' },
    (payload) => { payload.jobs[0].run_id += 1 },
    (payload) => { payload.jobs[0].run_attempt += 1 },
    (payload) => { payload.jobs[0].head_sha = 'b'.repeat(40) },
  ]
  for (const runId of [10, 20]) {
    for (const mutate of mutations) {
      const fixture = successfulChecksFixture()
      mutate(fixture.pages.get(`/repos/${repository}/actions/runs/${runId}/attempts/1/jobs`))
      await assert.rejects(
        verifySuccessfulChecks(repository, 'test-token', commitSha, fixture.fetchImpl),
        /job evidence|required job/,
      )
    }
  }
})

test('a run or attempt started while jobs are verified invalidates the release evidence', async () => {
  for (const file of [workflowFile, 'security-scan.yml']) {
    for (const change of ['run', 'attempt']) {
      const fixture = successfulChecksFixture()
      const runsPath = `/repos/${repository}/actions/workflows/${file}/runs`
      const original = fixture.pages.get(runsPath).workflow_runs[0]
      const fetchImpl = async (input, options) => {
        const response = await fixture.fetchImpl(input, options)
        if (new URL(input).pathname.endsWith(`/runs/${original.id}/attempts/1/jobs`)) {
          fixture.pages.set(runsPath, { total_count: 1, workflow_runs: [{
            ...original,
            id: change === 'run' ? original.id + 100 : original.id,
            run_attempt: change === 'attempt' ? 2 : 1,
            status: 'queued',
            conclusion: null,
          }] })
        }
        return response
      }
      await assert.rejects(
        verifySuccessfulChecks(repository, 'test-token', commitSha, fetchImpl),
        /changed while verifying/,
      )
    }
  }
})

test('queued, running, cancelled or failed latest main pushes cannot reuse prior green evidence', async () => {
  for (const file of [workflowFile, 'security-scan.yml']) {
    for (const result of [
      { status: 'queued', conclusion: null },
      { status: 'in_progress', conclusion: null },
      { status: 'completed', conclusion: 'failure' },
      { status: 'completed', conclusion: 'cancelled' },
      { status: 'completed', conclusion: 'skipped' },
    ]) {
      const fixture = successfulChecksFixture()
      const payload = fixture.pages.get(`/repos/${repository}/actions/workflows/${file}/runs`)
      const older = payload.workflow_runs[0]
      payload.workflow_runs.push({ ...older, id: older.id + 1, ...result })
      payload.total_count = 2
      await assert.rejects(
        verifySuccessfulChecks(repository, 'test-token', commitSha, fixture.fetchImpl),
        /latest main push is not a successful completed run/,
      )
    }
  }
})

test('missing checks and manual, branch, repository or workflow substitutes cannot authorize release', async () => {
  for (const file of [workflowFile, 'security-scan.yml']) {
    for (const overrides of [
      null, { event: 'workflow_dispatch' }, { head_branch: 'codex/diagnostic' },
      { repository: { full_name: 'another/repository' } },
      { path: '.github/workflows/backend-ci.yml' },
    ]) {
      const fixture = successfulChecksFixture()
      const path = `/repos/${repository}/actions/workflows/${file}/runs`
      const valid = fixture.pages.get(path).workflow_runs[0]
      const substitute = overrides === null ? [] : [{ ...valid, ...overrides }]
      fixture.pages.set(path, {
        total_count: substitute.length, workflow_runs: substitute,
      })
      await assert.rejects(
        verifySuccessfulChecks(repository, 'test-token', commitSha, fixture.fetchImpl),
        /latest main push is not a successful completed run/,
      )
    }
  }
})

test('unavailable GitHub evidence fails closed without retrying or revealing response contents', async () => {
  let calls = 0
  const denied = async () => {
    calls += 1
    return new Response('private response detail', { status: 403 })
  }
  await assert.rejects(verifySuccessfulChecks(repository, 'test-token', commitSha, denied), {
    message: 'GitHub Actions lookup failed with HTTP 403',
  })
  assert.equal(calls, 1)
  await assert.rejects(verifySuccessfulChecks(repository, '', commitSha, denied), /GITHUB_TOKEN/)
  assert.equal(calls, 1)
  await assert.rejects(
    verifySuccessfulChecks(repository, 'test-token', commitSha, async () => new Response('{')),
    SyntaxError,
  )
})
