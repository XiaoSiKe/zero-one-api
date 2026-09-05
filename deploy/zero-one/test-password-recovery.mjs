import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { randomBytes, randomUUID } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const docker = (...args) => execFileSync('docker', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim()
const sleep = (ms) => new Promise((done) => setTimeout(done, ms))
const artifactDir = mkdtempSync(resolve(tmpdir(), 'zero-one-password-recovery-'))
const created = []
let ownedNetwork = ''
let state

async function provision() {
  const [backendImage, edgeImage] = process.argv.slice(2)
  assert.ok(backendImage && edgeImage, 'Provide the candidate Backend and Edge image names')
  const prefix = `zero-one-recovery-${randomUUID().slice(0, 8)}`
  const names = { network: prefix, postgres: `${prefix}-postgres`, redis: `${prefix}-redis`, backend: `${prefix}-backend`, mail: `${prefix}-mail`, edge: `${prefix}-edge` }
  state = { names }
  docker('network', 'create', '--label', 'verification=zero-one-password-recovery', names.network)
  ownedNetwork = names.network
  const run = (name, image, options = []) => {
    docker('run', '-d', '--name', name, '--label', 'verification=zero-one-password-recovery', ...options, image)
    created.push(name)
  }
  const adminEmail = 'admin@recovery.example.test'
  const adminPassword = randomBytes(18).toString('hex')
  const databasePassword = randomBytes(18).toString('hex')
  run(names.postgres, 'postgres:18.1-alpine3.23', ['--network', names.network, '--network-alias', 'postgres', '-e', 'POSTGRES_USER=verification', '-e', 'POSTGRES_DB=verification', '-e', `POSTGRES_PASSWORD=${databasePassword}`])
  run(names.redis, 'redis:8.4-alpine', ['--network', names.network, '--network-alias', 'redis'])
  for (let attempt = 0; ; attempt += 1) {
    try { docker('exec', names.postgres, 'pg_isready', '-U', 'verification'); break } catch (error) {
      if (attempt >= 60) throw error
      await sleep(500)
    }
  }
  for (let attempt = 0; ; attempt += 1) {
    try { docker('exec', names.redis, 'redis-cli', 'ping'); break } catch (error) {
      if (attempt >= 60) throw error
      await sleep(500)
    }
  }
  const env = { AUTO_SETUP: 'true', SERVER_HOST: '0.0.0.0', SERVER_PORT: '8080', SERVER_MODE: 'release', DATABASE_HOST: 'postgres', DATABASE_PORT: '5432', DATABASE_USER: 'verification', DATABASE_PASSWORD: databasePassword, DATABASE_DBNAME: 'verification', DATABASE_SSLMODE: 'disable', REDIS_HOST: 'redis', REDIS_PORT: '6379', ADMIN_EMAIL: adminEmail, ADMIN_PASSWORD: adminPassword, JWT_SECRET: randomBytes(32).toString('hex'), TOTP_ENCRYPTION_KEY: randomBytes(32).toString('hex'), TZ: 'Asia/Shanghai' }
  run(names.backend, backendImage, ['--network', names.network, '--network-alias', 'sub2api', '-p', '127.0.0.1::8025', ...Object.entries(env).flatMap(([key, value]) => ['-e', `${key}=${value}`])])
  for (let attempt = 0; ; attempt += 1) {
    try {
      docker('exec', names.backend, 'wget', '-q', '-T', '2', '-O', '/dev/null', 'http://127.0.0.1:8080/health')
      break
    } catch (error) {
      if (attempt >= 120) throw error
      await sleep(500)
    }
  }
  run(names.mail, 'axllent/mailpit:v1.30.0', ['--network', `container:${names.backend}`, '-e', 'MP_SMTP_BIND_ADDR=127.0.0.1:1025', '-e', 'MP_SMTP_AUTH_ACCEPT_ANY=true', '-e', 'MP_SMTP_AUTH_ALLOW_INSECURE=true', '-e', 'MP_DISABLE_VERSION_CHECK=true'])
  run(names.edge, edgeImage, ['--network', names.network, '-p', '127.0.0.1::80', '-v', `${root}/deploy/zero-one/Caddyfile.preview:/etc/caddy/Caddyfile:ro`])
  const port = (name, key) => JSON.parse(docker('inspect', name))[0].NetworkSettings.Ports[key][0].HostPort
  return { names, adminEmail, adminPassword, origin: `http://127.0.0.1:${port(names.edge, '80/tcp')}`, mailOrigin: `http://127.0.0.1:${port(names.backend, '8025/tcp')}` }
}

try {
  // 只操作本脚本新建的测试账号与数据，并在 finally 清理本次资源。
  state = await provision()
  const { origin, mailOrigin, names } = state
  assert.ok(['127.0.0.1', 'localhost'].includes(new URL(origin).hostname), 'Only loopback verification stacks are allowed')
  for (let attempt = 0; ; attempt += 1) {
    try {
      if ((await fetch(`${origin}/health`, { signal: AbortSignal.timeout(1500) })).ok) break
    } catch {}
    assert.ok(attempt < 120, 'Candidate Backend did not become healthy')
    await sleep(500)
  }
  for (let attempt = 0; ; attempt += 1) {
    try {
      if ((await fetch(`${mailOrigin}/api/v1/messages`, { signal: AbortSignal.timeout(1500) })).ok) break
    } catch {}
    assert.ok(attempt < 60, 'Mailpit did not become healthy')
    await sleep(250)
  }

  async function api(path, { method = 'GET', body, token, status = 200 } = {}) {
    const response = await fetch(`${origin}/api/v1${path}`, {
      method, signal: AbortSignal.timeout(15000),
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body)
    })
    const payload = await response.json()
    assert.equal(response.status, status, `${path}: unexpected HTTP status (reason: ${payload.reason || payload.message || payload.code})`)
    if (status === 200) assert.equal(payload.code, 0, `${path}: request failed`)
    return payload.data ?? payload
  }

  const admin = await api('/auth/login', { method: 'POST', body: { email: state.adminEmail, password: state.adminPassword } })
  assert.equal(typeof admin.access_token, 'string')
  const compliance = await api('/admin/compliance', { token: admin.access_token })
  if (compliance.required) {
    await api('/admin/compliance/accept', { method: 'POST', token: admin.access_token,
      body: { phrase: compliance.ack_phrase_zh, language: 'zh' } })
  }
  const internalOrigin = `http://${names.edge}`
  await api('/admin/settings', { method: 'PUT', token: admin.access_token, body: {
    email_verify_enabled: true, password_reset_enabled: true, site_name: '零一 API',
    frontend_url: internalOrigin, api_base_url: internalOrigin,
    smtp_host: 'localhost', smtp_port: 1025, smtp_username: 'verification', smtp_password: 'verification',
    smtp_from_email: 'noreply@example.test', smtp_use_tls: false
  } })
  await api('/admin/settings/test-smtp', { method: 'POST', token: admin.access_token, body: {} })
  const mailSettings = await api('/admin/settings', { token: admin.access_token })
  assert.equal(mailSettings.smtp_host, 'localhost')
  assert.equal(mailSettings.smtp_from_email, 'noreply@example.test')
  const email = `recovery-${randomUUID().slice(0, 8)}@example.test`
  const oldPassword = randomBytes(18).toString('hex')
  const password = randomBytes(18).toString('hex')
  await api('/admin/users', { method: 'POST', token: admin.access_token, body: { email, password: oldPassword, username: 'recovery-verification' } })
  const oldLogin = await api('/auth/login', { method: 'POST', body: { email, password: oldPassword } })
  const requested = await api('/auth/forgot-password', { method: 'POST', body: { email } })
  const unknown = await api('/auth/forgot-password', { method: 'POST', body: { email: `missing-${randomUUID()}@example.test` } })
  assert.deepEqual(requested, unknown, '找回响应不能泄露邮箱是否注册')

  let message
  let mailMetadata = []
  for (let attempt = 0; attempt < 160; attempt += 1) {
    const list = await (await fetch(`${mailOrigin}/api/v1/messages`, { signal: AbortSignal.timeout(3000) })).json()
    mailMetadata = list.messages?.map((item) => ({ subject: item.Subject, matchedRecipient: item.To?.some((recipient) => recipient.Address === email) })) || []
    message = list.messages?.find((item) => /重置|reset/i.test(item.Subject) && item.To?.some((recipient) => recipient.Address === email))
    if (message) break
    await sleep(250)
  }
  assert.ok(message, `Mailpit did not receive the real reset email: ${JSON.stringify(mailMetadata)}`)
  const content = await (await fetch(`${mailOrigin}/api/v1/message/${message.ID}`)).json()
  const match = String(content.HTML).match(/href="([^"]*\/reset-password\?[^"]+)"/)
  assert.ok(match, 'Reset email does not contain a link')
  const url = match[1].replaceAll('&amp;', '&')
  assert.equal(new URL(url).origin, internalOrigin)
  writeFileSync(resolve(artifactDir, 'input.json'), JSON.stringify({ url, password }), { mode: 0o600 })
  docker('run', '--rm', '--cpus', '2', '--network', names.network, '-v', `${root}:/workspace:ro`, '-v', `${artifactDir}:/scenario`, '-w', '/workspace/visual-regression', 'mcr.microsoft.com/playwright:v1.55.1-noble', 'node', '/workspace/deploy/zero-one/test-password-recovery.browser.mjs')
  assert.equal(JSON.parse(readFileSync(resolve(artifactDir, 'browser-result.json'), 'utf8')).reusedLinkRejected, true)
  await api('/auth/login', { method: 'POST', body: { email, password: oldPassword }, status: 401 })
  await api('/auth/me', { token: oldLogin.access_token, status: 401 })
  const newLogin = await api('/auth/login', { method: 'POST', body: { email, password } })
  assert.equal(typeof newLogin.access_token, 'string')
  await api('/admin/settings', { method: 'PUT', token: admin.access_token, body: { password_reset_enabled: false } })
  await api('/auth/forgot-password', { method: 'POST', body: { email }, status: 403 })
  console.log('Password recovery E2E OK: SMTP, real email, browser reset, one-time link, old credentials, capability gate')
} catch (error) {
  if (state) {
    try {
      const output = spawnSync('docker', ['logs', '--tail', '150', state.names.backend], { encoding: 'utf8' })
      const logs = output.stdout + output.stderr
      console.error(logs.split('\n').filter((line) => /password.reset|reset.email|email.*fail|smtp|enqueue/i.test(line)).slice(-12).join('\n'))
    } catch {}
  }
  throw error
} finally {
  for (const name of created.reverse()) {
    try { docker('rm', '-f', '-v', name) } catch {}
  }
  if (ownedNetwork) { try { docker('network', 'rm', ownedNetwork) } catch {} }
  rmSync(artifactDir, { recursive: true, force: true })
}
