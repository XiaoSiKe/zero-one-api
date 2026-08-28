import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'

const upstreamOnly = "github.repository == 'Wei-Shaw/sub2api'"
const jobGuards = {
  'release.yml': {
    'update-version': upstreamOnly,
    'build-frontend': upstreamOnly,
    release: upstreamOnly,
    'sync-version-file': `${upstreamOnly} && needs.release.result == 'success'`,
  },
  'cla.yml': {
    'cla-check': `${upstreamOnly} && ( github.event_name == 'issue_comment' || (github.event_name == 'pull_request_target' && github.event.action != 'closed') )`,
    'cla-lock': `${upstreamOnly} && github.event_name == 'pull_request_target' && github.event.action == 'closed' && github.event.pull_request.merged == true`,
  },
}
const jobBudgets = {
  'release.yml': { 'update-version': 5, 'build-frontend': 20, release: 90, 'sync-version-file': 5 },
  'cla.yml': { 'cla-check': 5, 'cla-lock': 5 },
}
const writePermissions = {
  'release.yml': {
    release: '      contents: write\n      packages: write',
    'sync-version-file': '      contents: write',
  },
  'cla.yml': {
    'cla-check': '      actions: write\n      contents: write\n      pull-requests: write\n      statuses: write',
    'cla-lock': '      pull-requests: write',
  },
}

// Like the existing workflow policy tests, read these deliberate mapping blocks
// without adding a YAML package to the deployment verification toolchain.
function mapping(source, key, indent = '') {
  const match = source.match(new RegExp(`^${indent}${key}:\\n((?:${indent} +.*\\n|\\n)*)`, 'm'))
  assert.ok(match, `missing ${key} mapping`)
  return match[1].trimEnd()
}

function jobs(source) {
  return Object.fromEntries(
    [...mapping(source, 'jobs').matchAll(/^  ([\w-]+):\n((?: {4}.*(?:\n|$)|\n)*)/gm)]
      .map(([, id, body]) => [id, body]),
  )
}

function condition(body) {
  const multiline = body.match(/^    if: \|\n((?: {6}.*\n)+)/m)
  const value = multiline?.[1] ?? body.match(/^    if: (.+)$/m)?.[1] ?? ''
  return value.trim().replace(/^\$\{\{\s*|\s*\}\}$/g, '').replace(/\s+/g, ' ')
}

function steps(body) {
  return Object.fromEntries(
    [...body.matchAll(/^      - name: (.+)\n((?: {8}.*(?:\n|$)|\n)*)/gm)]
      .map(([, name, contents]) => [name, contents]),
  )
}

function scripts(body) {
  return [...body.matchAll(/^        run: (?:\|\n((?: {10}.*(?:\n|$)|\n)*)|([^\n]+))/gm)]
    .map(([, block, line]) => line ?? block.replace(/^ {10}/gm, ''))
}

function runShell(script, env) {
  return spawnSync('/bin/bash', ['--noprofile', '--norc', '-e', '-o', 'pipefail', '-c', script], {
    env: { PATH: process.env.PATH, ...env },
    encoding: 'utf8',
    timeout: 5000,
  })
}

for (const [file, guards] of Object.entries(jobGuards)) {
  const source = readFileSync(new URL(`../workflows/${file}`, import.meta.url), 'utf8')
  const workflowJobs = jobs(source)

  test(`${file}: every inherited job is restricted to the exact upstream repository`, () => {
    assert.deepEqual(Object.keys(workflowJobs), Object.keys(guards))
    for (const [id, expected] of Object.entries(guards)) {
      assert.equal(condition(workflowJobs[id]), expected, `${id} must never run on a downstream repository`)
    }
  })

  test(`${file}: writes are scoped only to the jobs that need them`, () => {
    assert.equal(mapping(source, 'permissions'), '  contents: read')
    for (const [id, body] of Object.entries(workflowJobs)) {
      if (writePermissions[file][id]) {
        assert.equal(mapping(body, 'permissions', '    '), writePermissions[file][id], id)
      } else {
        assert.doesNotMatch(body, /^    permissions:/m, `${id} must inherit read-only permissions`)
      }
    }
  })

  test(`${file}: every inherited job has a bounded execution budget`, () => {
    for (const [id, minutes] of Object.entries(jobBudgets[file])) {
      assert.deepEqual(
        [...workflowJobs[id].matchAll(/^    timeout-minutes: (\d+)$/gm)].map((match) => Number(match[1])),
        [minutes],
        id,
      )
    }
  })
}

test('release.yml: reject invalid release input before any build or publication', () => {
  const source = readFileSync(new URL('../workflows/release.yml', import.meta.url), 'utf8')
  const workflowJobs = jobs(source)
  for (const [id, body] of Object.entries(workflowJobs)) {
    for (const script of scripts(body)) {
      assert.doesNotMatch(script, /\$\{\{/, `${id}: context values must enter shell scripts through env`)
    }
  }
  assert.match(mapping(source, 'env'), /^  RELEASE_TAG: \$\{\{ github.event.inputs.tag \|\| github.ref_name \}\}$/m)
  const updateSteps = steps(workflowJobs['update-version'])
  assert.equal(Object.keys(updateSteps)[0], 'Validate release tag')
  assert.match(workflowJobs['build-frontend'], /^    needs: \[update-version\]$/m)
  for (const id of ['update-version', 'build-frontend', 'release']) {
    assert.match(steps(workflowJobs[id]).Checkout, /^          ref: \$\{\{ env.RELEASE_TAG \}\}$/m, id)
  }
  const [validate] = scripts(updateSteps['Validate release tag'])
  for (const tag of ['v0.0.0', 'v0.1.183', 'v1.20.300']) {
    const result = runShell(validate, { RELEASE_TAG: tag })
    assert.equal(result.status, 0, `${tag}: ${result.stderr}`)
  }
  for (const tag of [
    '', 'main', '1.2.3', 'refs/tags/v1.2.3', 'v1.2', 'v01.2.3',
    'v1.2.3-rc.1', 'v1.2.3+build', 'v1.2.3\nv1.2.4',
    'v1.2.3; printf INJECTED; exit 0', 'v1.2.3$(printf INJECTED)',
    "v1.2.3'\"; printf INJECTED; #", 'v1.2.3`printf INJECTED`',
  ]) {
    const result = runShell(validate, { RELEASE_TAG: tag })
    assert.notEqual(result.status, 0, `invalid tag accepted: ${JSON.stringify(tag)}`)
    assert.doesNotMatch(result.stdout + result.stderr, /INJECTED/, 'input must not be evaluated as shell code')
  }
})

test('release.yml: arbitrary tag notes remain one output value, never shell code', (t) => {
  const source = readFileSync(new URL('../workflows/release.yml', import.meta.url), 'utf8')
  const [script] = scripts(steps(jobs(source).release)['Get tag message'])
  const directory = mkdtempSync(join(tmpdir(), 'inherited-workflow-safety-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  const marker = join(directory, 'shell-evaluated')
  const notes = 'Release notes\nEOF\ninjected=unexpected-output\n$(printf executed > "$SHELL_EVALUATION_MARKER")\n\'"; exit 91; #'
  const delimiters = []
  for (let index = 0; index < 2; index += 1) {
    const output = join(directory, `github-output-${index}`)
    const result = runShell(`git() { printf '%s\\n' "$FAKE_TAG_MESSAGE"; }\n${script}`, {
      RELEASE_TAG: 'v1.2.3',
      FAKE_TAG_MESSAGE: notes,
      SHELL_EVALUATION_MARKER: marker,
      GITHUB_OUTPUT: output,
    })
    assert.equal(result.status, 0, result.stderr)
    assert.equal(existsSync(marker), false, 'tag notes must not execute commands')
    const encoded = readFileSync(output, 'utf8').match(/^message<<([^\n]+)\n([\s\S]*)\n\1\n$/)
    assert.ok(encoded, 'all tag notes must be encoded as exactly one multiline output')
    assert.equal(encoded[2], notes)
    assert.equal(notes.split('\n').includes(encoded[1]), false, 'delimiter must not terminate tag notes early')
    delimiters.push(encoded[1])
  }
  assert.notEqual(delimiters[0], delimiters[1], 'multiline outputs must not use a predictable fixed delimiter')
})
