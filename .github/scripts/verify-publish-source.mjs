import { execFileSync } from 'node:child_process'
import { appendFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { validateBaseline } from './verify-upstream-boundary.mjs'

const RELEASE_REF = 'refs/remotes/origin/main'
const REQUIRED_JOBS = {
  'zero-one-ci.yml': [
    'upstream-boundary', 'landing', 'console', 'backend', 'deployment', 'shell',
    'golangci-lint', 'Chromium visual regression', 'test', 'frontend',
  ],
  'security-scan.yml': ['backend-security', 'frontend-security'],
}

export function validateCommitSha(value) {
  if (typeof value !== 'string' || !/^[0-9a-f]{40}$/.test(value)) {
    throw new Error('commit_sha must be a lowercase 40-character SHA')
  }
  return value
}

export function stableReleaseVersion(value) {
  const { release } = validateBaseline(value)
  const match = /^v((?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*))$/.exec(release)
  if (!match) throw new Error('upstream baseline release must be a stable vMAJOR.MINOR.PATCH')
  return match[1]
}

export function findSuccessfulRun(payload, commitSha, repository, workflowFile) {
  const runs = Array.isArray(payload?.workflow_runs) ? payload.workflow_runs : []
  const candidates = runs.filter((run) => run?.head_sha === commitSha
    && run?.head_branch === 'main' && run?.event === 'push')
  if (candidates.some((run) => !Number.isSafeInteger(run.id) || run.id < 1)) return undefined
  const latest = candidates.sort((left, right) => right.id - left.id)[0]
  if (!latest || latest.status !== 'completed' || latest.conclusion !== 'success'
    || latest.path !== `.github/workflows/${workflowFile}`
    || latest.repository?.full_name !== repository || latest.head_repository?.full_name !== repository
    || !Number.isSafeInteger(latest.run_attempt) || latest.run_attempt < 1) return undefined
  return latest
}

function git(args) {
  return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
}

function requireCommitOnReleaseBranch(commitSha) {
  git(['cat-file', '-e', `${commitSha}^{commit}`])
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', commitSha, RELEASE_REF], { stdio: 'ignore' })
  } catch {
    throw new Error(`${commitSha} is not part of origin/main`)
  }
  const baseline = JSON.parse(git(['show', `${commitSha}:.github/upstream-baseline.json`]))
  git(['cat-file', '-e', `${commitSha}:.github/scripts/verify-upstream-boundary.mjs`])
  git(['cat-file', '-e', `${commitSha}:.github/workflows/zero-one-ci.yml`])
  return stableReleaseVersion(baseline)
}

export async function verifySuccessfulChecks(repository, token, commitSha, fetchImpl = fetch) {
  if (!repository || !token) throw new Error('GITHUB_REPOSITORY and GITHUB_TOKEN are required')
  async function readActions(url) {
    const response = await fetchImpl(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      signal: AbortSignal.timeout(15_000),
      redirect: 'error',
    })
    if (!response.ok) throw new Error(`GitHub Actions lookup failed with HTTP ${response.status}`)
    return response.json()
  }

  const verified = []
  for (const [workflowFile, requiredJobs] of Object.entries(REQUIRED_JOBS)) {
    const url = new URL(`https://api.github.com/repos/${repository}/actions/workflows/${workflowFile}/runs`)
    url.searchParams.set('head_sha', commitSha)
    url.searchParams.set('branch', 'main')
    url.searchParams.set('event', 'push')
    url.searchParams.set('per_page', '100')
    const run = findSuccessfulRun(await readActions(url), commitSha, repository, workflowFile)
    if (!run) throw new Error(`${workflowFile}: latest main push is not a successful completed run for ${commitSha}`)

    const jobsUrl = new URL(
      `https://api.github.com/repos/${repository}/actions/runs/${run.id}/attempts/${run.run_attempt}/jobs`,
    )
    jobsUrl.searchParams.set('per_page', '100')
    const payload = await readActions(jobsUrl)
    if (!Array.isArray(payload?.jobs) || payload.jobs.length !== requiredJobs.length
      || payload.total_count !== payload.jobs.length) {
      throw new Error(`${workflowFile}: incomplete job evidence for run ${run.id} attempt ${run.run_attempt}`)
    }
    for (const name of requiredJobs) {
      const matching = payload.jobs.filter((job) => job?.name === name)
      const job = matching[0]
      if (matching.length !== 1 || job.status !== 'completed' || job.conclusion !== 'success'
        || job.run_id !== run.id || job.run_attempt !== run.run_attempt || job.head_sha !== commitSha) {
        throw new Error(`${workflowFile}: required job "${name}" is missing, unsuccessful or from another run/attempt`)
      }
    }
    verified.push({ workflowFile, url, run })
  }
  // Recheck once after job inspection; never authorize with a stale attempt.
  for (const { workflowFile, url, run } of verified) {
    const latest = findSuccessfulRun(await readActions(url), commitSha, repository, workflowFile)
    if (!latest || latest.id !== run.id || latest.run_attempt !== run.run_attempt) {
      throw new Error(`${workflowFile}: latest main push changed while verifying release evidence`)
    }
  }
  return verified.map(({ run }) => run)
}

export async function main(env = process.env) {
  const commitSha = validateCommitSha(env.COMMIT_SHA)
  const sourceVersion = requireCommitOnReleaseBranch(commitSha)
  const [ciRun, securityRun] = await verifySuccessfulChecks(env.GITHUB_REPOSITORY, env.GITHUB_TOKEN, commitSha)

  if (env.GITHUB_OUTPUT) {
    appendFileSync(
      env.GITHUB_OUTPUT,
      `source_sha=${commitSha}\nsource_version=${sourceVersion}\nci_run_url=${ciRun.html_url}\nsecurity_run_url=${securityRun.html_url}\n`,
    )
  }
  console.log(`publish source OK: ${commitSha} (${sourceVersion}), CI ${ciRun.html_url}, Security ${securityRun.html_url}`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  })
}
