#!/usr/bin/env node

import { randomUUID } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { performance } from 'node:perf_hooks'

const supportedEndpoints = new Set(['/v1/responses', '/v1/chat/completions', '/v1/messages'])

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function hasOutput(value) {
  return typeof value === 'string' && value.length > 0
}

function itemHasOutput(item) {
  if (!isRecord(item)) return false
  if (hasOutput(item.arguments) || hasOutput(item.input) || hasOutput(item.result)) return true
  if (isRecord(item.input) && Object.keys(item.input).length > 0) return true
  return ['content', 'summary'].some((field) => Array.isArray(item[field]) &&
    item[field].some((part) => isRecord(part) && (hasOutput(part.text) || hasOutput(part.transcript) || hasOutput(part.refusal))))
}

export function isSemanticSSEPayload(payload, eventType = '') {
  const trimmed = payload.trim()
  if (!trimmed || trimmed === '[DONE]') return false

  let value
  try {
    value = JSON.parse(trimmed)
  } catch {
    return false
  }
  if (!isRecord(value)) return false
  if (!nonEmptyString(value.type) && eventType) value.type = eventType

  if (Array.isArray(value.choices)) {
    return value.choices.some((choice) => {
      const delta = choice?.delta
      if (!isRecord(delta)) return false
      if (hasOutput(delta.content) || hasOutput(delta.reasoning_content) || hasOutput(delta.reasoning) || hasOutput(delta.refusal)) return true
      if (Array.isArray(delta.tool_calls) && delta.tool_calls.some((call) =>
        hasOutput(call?.function?.arguments) || hasOutput(call?.custom?.input))) return true
      return hasOutput(delta.function_call?.arguments)
    })
  }

  if (typeof value.type === 'string' && value.type.startsWith('response.')) {
    if (value.type.endsWith('.delta')) return hasOutput(value.delta)
    if (['response.output_item.added', 'response.output_item.done'].includes(value.type)) return itemHasOutput(value.item)
    if (['response.completed', 'response.done'].includes(value.type)) {
      return Array.isArray(value.response?.output) && value.response.output.some(itemHasOutput)
    }
    if (['response.content_part.added', 'response.content_part.done',
      'response.reasoning_summary_part.added', 'response.reasoning_summary_part.done'].includes(value.type)) {
      return hasOutput(value.part?.text) || hasOutput(value.part?.transcript) || hasOutput(value.part?.refusal)
    }
    if (value.type === 'response.refusal.done') return hasOutput(value.refusal)
    if (value.type.endsWith('.done')) return hasOutput(value.text) || hasOutput(value.arguments) || hasOutput(value.input)
    if (value.type === 'response.image_generation_call.partial_image') return hasOutput(value.partial_image_b64)
  }
  if (value.type === 'content_block_delta') {
    return hasOutput(value.delta?.text) || hasOutput(value.delta?.partial_json) || hasOutput(value.delta?.thinking)
  }
  if (value.type === 'content_block_start') {
    return itemHasOutput(value.content_block) || hasOutput(value.content_block?.text) || hasOutput(value.content_block?.thinking)
  }
  return false
}

function eventPayload(event) {
  const data = event
    .split('\n')
    .filter((line) => line.startsWith('data:'))
    .map((line) => line.slice(5).replace(/^ /u, ''))
  return data.length > 0 ? data.join('\n') : null
}

export class SSESemanticParser {
  constructor() {
    this.decoder = new TextDecoder()
    this.buffer = ''
    this.semanticFound = false
    this.terminalFound = false
    this.streamError = false
    this.previousCR = false
  }

  push(chunk) {
    this.#append(this.decoder.decode(chunk, { stream: true }))
    this.#consumeCompleteEvents()
    return this.semanticFound
  }

  finish() {
    this.#append(this.decoder.decode())
    this.#consumeCompleteEvents()
    // EOF is not an SSE event delimiter. A truncated frame cannot start TTFT.
    this.buffer = ''
    return this.semanticFound
  }

  #append(decoded) {
    if (!decoded) return
    // A CR already supplies the newline; a subsequent LF may arrive in another
    // network chunk and must not invent a blank line / event boundary.
    if (this.previousCR && decoded.startsWith('\n')) decoded = decoded.slice(1)
    this.previousCR = decoded.endsWith('\r')
    this.buffer += decoded.replace(/\r\n?/gu, '\n')
  }

  #consumeCompleteEvents() {
    let boundary = this.buffer.indexOf('\n\n')
    while (boundary >= 0) {
      const event = this.buffer.slice(0, boundary)
      this.buffer = this.buffer.slice(boundary + 2)
      this.#consumeEvent(event)
      boundary = this.buffer.indexOf('\n\n')
    }
  }

  #consumeEvent(event) {
    const payload = eventPayload(event)
    const eventType = event.split('\n').filter((line) => line.startsWith('event:')).at(-1)?.slice(6).trim()
    if (['error', 'response.failed', 'response.incomplete', 'response.cancelled'].includes(eventType)) this.streamError = true
    if (payload === null) return
    if (payload.trim() === '[DONE]') {
      this.terminalFound = true
      return
    }
    let value
    try { value = JSON.parse(payload) } catch { return }
    if (!isRecord(value)) return
    if (!nonEmptyString(value.type) && eventType) value.type = eventType
    if (value.error || ['error', 'response.failed', 'response.incomplete', 'response.cancelled'].includes(value.type) ||
      ['failed', 'incomplete', 'cancelled'].includes(value.response?.status)) this.streamError = true
    if (['response.completed', 'response.done', 'message_stop'].includes(value.type)) this.terminalFound = true
    if (isSemanticSSEPayload(payload, eventType)) this.semanticFound = true
  }
}

function positiveInteger(value, name, { allowZero = false } = {}) {
  const parsed = Number.parseInt(value, 10)
  const minimum = allowZero ? 0 : 1
  if (!Number.isSafeInteger(parsed) || parsed < minimum) {
    throw new Error(`${name} must be an integer >= ${minimum}`)
  }
  return parsed
}

export function parseArguments(argv) {
  const options = {
    requests: 50,
    warmup: 3,
    maxOutputTokens: 16,
    timeoutMs: 120000,
  }
  const valueOptions = new Map([
    ['--base-url', 'baseUrl'],
    ['--endpoint', 'endpoint'],
    ['--model', 'model'],
    ['--reasoning', 'reasoning'],
    ['--requests', 'requests'],
    ['--warmup', 'warmup'],
    ['--max-output-tokens', 'maxOutputTokens'],
    ['--timeout-ms', 'timeoutMs'],
  ])

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index]
    const property = valueOptions.get(argument)
    if (!property) throw new Error(`unknown argument: ${argument}`)
    const value = argv[index + 1]
    if (!value || value.startsWith('--')) throw new Error(`${argument} requires a value`)
    options[property] = value
    index += 1
  }

  if (!options.baseUrl) throw new Error('--base-url is required')
  const baseUrl = new URL(options.baseUrl)
  if (baseUrl.protocol !== 'http:' && baseUrl.protocol !== 'https:') {
    throw new Error('--base-url must use http or https')
  }
  options.baseUrl = baseUrl.toString().replace(/\/$/u, '')
  if (!supportedEndpoints.has(options.endpoint)) {
    throw new Error(`--endpoint must be one of: ${[...supportedEndpoints].join(', ')}`)
  }
  if (!nonEmptyString(options.model)) throw new Error('--model is required')
  options.requests = positiveInteger(options.requests, '--requests')
  options.warmup = positiveInteger(options.warmup, '--warmup', { allowZero: true })
  options.maxOutputTokens = positiveInteger(options.maxOutputTokens, '--max-output-tokens')
  options.timeoutMs = positiveInteger(options.timeoutMs, '--timeout-ms')
  if (options.endpoint === '/v1/messages' && options.reasoning) {
    throw new Error('--reasoning is not accepted for /v1/messages; use a protocol-specific request instead')
  }
  return options
}

export function percentile(values, quantile) {
  if (values.length === 0) return null
  const sorted = [...values].sort((left, right) => left - right)
  const index = Math.max(0, Math.ceil(quantile * sorted.length) - 1)
  return sorted[index]
}

function requestBody(options) {
  if (options.endpoint === '/v1/responses') {
    return {
      model: options.model,
      input: 'Reply with OK.',
      stream: true,
      max_output_tokens: options.maxOutputTokens,
      ...(options.reasoning ? { reasoning: { effort: options.reasoning } } : {}),
    }
  }
  if (options.endpoint === '/v1/chat/completions') {
    return {
      model: options.model,
      messages: [{ role: 'user', content: 'Reply with OK.' }],
      stream: true,
      max_tokens: options.maxOutputTokens,
      ...(options.reasoning ? { reasoning_effort: options.reasoning } : {}),
    }
  }
  return {
    model: options.model,
    messages: [{ role: 'user', content: 'Reply with OK.' }],
    stream: true,
    max_tokens: options.maxOutputTokens,
  }
}

function requestHeaders(options, apiKey) {
  const headers = {
    Accept: 'text/event-stream',
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'User-Agent': 'zero-one-ttft-benchmark/1.0',
    'X-Request-ID': `ttft-${randomUUID()}`,
  }
  if (options.endpoint === '/v1/messages') {
    headers['x-api-key'] = apiKey
    headers['anthropic-version'] = '2023-06-01'
  }
  return headers
}

function errorKind(error) {
  if (error?.name === 'TimeoutError' || error?.name === 'AbortError') return 'timeout'
  return 'network_or_stream_error'
}

async function runRequest(options, apiKey) {
  const started = performance.now()
  let response
  try {
    response = await fetch(`${options.baseUrl}${options.endpoint}`, {
      method: 'POST',
      headers: requestHeaders(options, apiKey),
      body: JSON.stringify(requestBody(options)),
      signal: AbortSignal.timeout(options.timeoutMs),
    })
  } catch (error) {
    return { ok: false, error: errorKind(error), status: 'network' }
  }

  if (!response.ok || !response.body) {
    try {
      await response.body?.cancel()
    } catch {
      // The response body is intentionally discarded; never print provider content.
    }
    return {
      ok: false,
      error: response.status >= 500 ? 'http_5xx' : 'http_4xx',
      status: String(response.status),
    }
  }

  const parser = new SSESemanticParser()
  const reader = response.body.getReader()
  let ttftMs = null
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      if (parser.push(value) && ttftMs === null) ttftMs = performance.now() - started
      if (parser.streamError || parser.terminalFound) {
        // Terminal protocol events finish the sample even if a provider leaves
        // the HTTP stream open. Release the connection without reading forever.
        try { await reader.cancel() } catch { /* Preserve the protocol outcome. */ }
        break
      }
    }
    if (parser.finish() && ttftMs === null) ttftMs = performance.now() - started
  } catch (error) {
    return { ok: false, error: errorKind(error), status: String(response.status) }
  } finally {
    reader.releaseLock()
  }

  if (parser.streamError) return { ok: false, error: 'upstream_stream_error', status: String(response.status) }
  if (ttftMs === null) {
    return { ok: false, error: 'semantic_event_not_found', status: String(response.status) }
  }
  if (!parser.terminalFound) return { ok: false, error: 'incomplete_stream', status: String(response.status) }
  return { ok: true, status: String(response.status), ttftMs }
}

function increment(counts, key) {
  counts[key] = (counts[key] || 0) + 1
}

export async function runBenchmark(options, apiKey) {
  for (let index = 0; index < options.warmup; index += 1) {
    const result = await runRequest(options, apiKey)
    if (!result.ok) throw new Error(`warmup failed: ${result.error}`)
  }

  const windowStartedAt = new Date().toISOString()
  const durations = []
  const statuses = {}
  const errors = {}
  for (let index = 0; index < options.requests; index += 1) {
    const result = await runRequest(options, apiKey)
    increment(statuses, result.status)
    if (result.ok) durations.push(result.ttftMs)
    else increment(errors, result.error)
  }
  const windowEndedAt = new Date().toISOString()

  return {
    endpoint: options.endpoint,
    model: options.model,
    reasoning: options.reasoning || 'none',
    requested_samples: options.requests,
    successful_samples: durations.length,
    failed_samples: options.requests - durations.length,
    success_rate: durations.length / options.requests,
    warmup_samples: options.warmup,
    max_output_tokens: options.maxOutputTokens,
    window_started_at: windowStartedAt,
    window_ended_at: windowEndedAt,
    ttft_ms: {
      p50: percentile(durations, 0.5),
      p90: percentile(durations, 0.9),
      p95: percentile(durations, 0.95),
      p99: percentile(durations, 0.99),
    },
    status_counts: statuses,
    error_counts: errors,
  }
}

function readAPIKey() {
  const fromEnvironment = process.env.ZERO_ONE_API_KEY?.trim()
  if (fromEnvironment) return fromEnvironment
  if (process.stdin.isTTY) {
    throw new Error('set ZERO_ONE_API_KEY or pipe the API key on stdin')
  }
  const fromStdin = readFileSync(0, 'utf8').trim()
  if (!fromStdin) throw new Error('API key is empty')
  return fromStdin
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArguments(argv)
  const result = await runBenchmark(options, readAPIKey())
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)
  if (result.successful_samples === 0) process.exitCode = 1
  return result
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`)
    process.exitCode = 1
  })
}
