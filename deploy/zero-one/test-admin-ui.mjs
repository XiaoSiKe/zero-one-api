import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { randomBytes, randomUUID } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const [backendImage, edgeImage] = process.argv.slice(2)
assert.ok(backendImage && edgeImage, 'Provide the candidate Backend and Edge images')
const prefix = `zero-one-admin-ui-${randomUUID().slice(0, 8)}`
const directory = mkdtempSync(resolve(tmpdir(), `${prefix}-`))
const created = []
let networkCreated = false
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
const sleep = ms => new Promise(done => setTimeout(done, ms))
const names = { postgres: `${prefix}-postgres`, redis: `${prefix}-redis`, backend: `${prefix}-backend`, edge: `${prefix}-edge` }
const run = (name, image, options) => {
  docker('run', '-d', '--name', name, '--label', 'verification=zero-one-admin-ui', '--network', prefix, ...options, image)
  created.push(name)
}
async function ready(check, label) {
  for (let attempt = 0; attempt < 120; attempt++) {
    try { if (await check()) return } catch {}
    await sleep(500)
  }
  throw new Error(`${label} did not become ready`)
}

try {
  docker('network', 'create', '--label', 'verification=zero-one-admin-ui', prefix)
  networkCreated = true
  const password = randomBytes(24).toString('hex')
  const email = 'admin@admin-ui.example.test'
  run(names.postgres, 'postgres:18.1-alpine3.23', ['--network-alias', 'postgres', '-e', 'POSTGRES_USER=verification', '-e', 'POSTGRES_DB=verification', '-e', `POSTGRES_PASSWORD=${password}`])
  run(names.redis, 'redis:8.4-alpine', ['--network-alias', 'redis'])
  await ready(() => docker('exec', names.postgres, 'pg_isready', '-h', '127.0.0.1', '-U', 'verification'), 'PostgreSQL')
  await ready(() => docker('exec', names.redis, 'redis-cli', 'ping') === 'PONG', 'Redis')
  const env = { AUTO_SETUP: 'true', SERVER_HOST: '0.0.0.0', SERVER_PORT: '8080', SERVER_MODE: 'release',
    DATABASE_HOST: 'postgres', DATABASE_PORT: '5432', DATABASE_USER: 'verification', DATABASE_DBNAME: 'verification', DATABASE_PASSWORD: password, DATABASE_SSLMODE: 'disable',
    REDIS_HOST: 'redis', REDIS_PORT: '6379', ADMIN_EMAIL: email, ADMIN_PASSWORD: password,
    JWT_SECRET: randomBytes(32).toString('hex'), TOTP_ENCRYPTION_KEY: randomBytes(32).toString('hex'), TZ: 'Asia/Shanghai' }
  run(names.backend, backendImage, ['--network-alias', 'sub2api', ...Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`])])
  await ready(() => { docker('exec', names.backend, 'wget', '-q', '-T', '2', '-O', '/dev/null', 'http://127.0.0.1:8080/health'); return true }, 'Backend')
  run(names.edge, edgeImage, ['-p', '127.0.0.1::80', '-v', `${root}/deploy/zero-one/Caddyfile.preview:/etc/caddy/Caddyfile:ro`])
  const port = JSON.parse(docker('inspect', names.edge))[0].NetworkSettings.Ports['80/tcp'][0].HostPort
  const origin = `http://127.0.0.1:${port}`
  await ready(async () => (await fetch(`${origin}/health`, { signal: AbortSignal.timeout(1500) })).ok, 'Edge')
  async function api(path, { method = 'GET', body, token, key, status = 200 } = {}) {
    const response = await fetch(`${origin}/api/v1${path}`, { method, signal: AbortSignal.timeout(15000),
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(key ? { 'x-api-key': key } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body) })
    const payload = await response.json()
    assert.equal(response.status, status, `${path}: ${payload.reason || payload.message || payload.code}`)
    return payload.data ?? payload
  }
  const login = await api('/auth/login', { method: 'POST', body: { email, password } })
  const compliance = await api('/admin/compliance', { token: login.access_token })
  if (compliance.required) await api('/admin/compliance/accept', { method: 'POST', token: login.access_token, body: { phrase: compliance.ack_phrase_zh, language: 'zh' } })
  const group = await api('/admin/groups', { method: 'POST', token: login.access_token, body: {
    name: 'UI 验证图片组', platform: 'openai', subscription_type: 'standard', rate_multiplier: 0.5,
    allow_image_generation: true, image_count_billing: true, image_rate_independent: true, image_rate_multiplier: 0.8,
  } })
  assert.equal(group.image_count_billing, true)
  const user = await api('/auth/me', { token: login.access_token })
  assert.equal(user.role, 'admin')
  await api('/admin/settings', { method: 'PUT', token: login.access_token, body: { site_name: '零一 API', frontend_url: `http://${names.edge}`, api_base_url: `http://${names.edge}` } })
  writeFileSync(resolve(directory, 'input.json'), JSON.stringify({ origin: `http://${names.edge}`, token: login.access_token, user, group }), { mode: 0o600 })
  // Preserve the invoking user's ownership when Docker writes private results on Linux.
  writeFileSync(resolve(directory, 'result.json'), '', { mode: 0o600 })
  docker('run', '--rm', '--network', prefix, '-v', `${root}:/workspace:ro`, '-v', `${directory}:/scenario`, '-w', '/workspace/visual-regression',
    'mcr.microsoft.com/playwright:v1.55.1-noble', 'node', '/workspace/deploy/zero-one/test-admin-ui.browser.mjs')
  const result = JSON.parse(readFileSync(resolve(directory, 'result.json'), 'utf8'))
  assert.ok(result.created && result.rotated && result.revoked && result.groupPersisted && result.noSystemSettingsWrites)
  await api('/admin/users', { key: result.originalKey, status: 401 })
  await api('/admin/users', { key: result.rotatedKey, status: 401 })
  const keys = await api('/admin/settings/admin-api-keys', { token: login.access_token })
  assert.equal(keys.items.length, 1)
  assert.ok(keys.items[0].revoked_at)
  assert.deepEqual(keys.items[0].policy.global_permissions, [])
  const persisted = await api(`/admin/groups/${group.id}`, { token: login.access_token })
  assert.equal(persisted.image_count_billing, false)
  assert.equal(persisted.rate_multiplier, 0.5)
  assert.equal(persisted.image_rate_multiplier, 0.8)
  console.log('Admin UI E2E OK: real JWT login, scoped-key create/rotate/revoke, revoked credentials rejected, Group billing persisted, unrelated settings untouched')
} catch (error) {
  if (created.includes(names.backend)) {
    console.error('Backend container state:', docker('inspect', '--format', '{{.State.Status}} {{.State.ExitCode}} {{.State.Error}}', names.backend))
  }
  throw error
} finally {
  for (const name of created.reverse()) { try { docker('rm', '-f', '-v', name) } catch {} }
  if (networkCreated) { try { docker('network', 'rm', prefix) } catch {} }
  rmSync(directory, { recursive: true, force: true })
}
