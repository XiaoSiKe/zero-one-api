import assert from 'node:assert/strict'
import test from 'node:test'
import {
  SSESemanticParser,
  isSemanticSSEPayload,
  parseArguments,
  percentile,
  runBenchmark,
} from './benchmark-ttft.mjs'

const encoder = new TextEncoder()

test('detects semantic events for Responses, Chat Completions, and Messages', () => {
  assert.equal(
    isSemanticSSEPayload('{"type":"response.output_text.delta","delta":"OK"}'),
    true,
  )
  assert.equal(
    isSemanticSSEPayload('{"choices":[{"delta":{"content":"OK"}}]}'),
    true,
  )
  assert.equal(
    isSemanticSSEPayload('{"type":"content_block_delta","delta":{"text":"OK"}}'),
    true,
  )
  assert.equal(
    isSemanticSSEPayload('{"type":"content_block_start","content_block":{"type":"tool_use","input":{"q":"test"}}}'),
    true,
  )
})

test('ignores keepalives, usage-only events, roles, and terminal metadata', () => {
  for (const payload of [
    '',
    '[DONE]',
    '{"type":"response.completed","response":{"usage":{"input_tokens":1}}}',
    '{"choices":[{"delta":{"role":"assistant"}}]}',
    '{"type":"message_delta","usage":{"output_tokens":1}}',
    'not-json',
  ]) {
    assert.equal(isSemanticSSEPayload(payload), false, payload)
  }
})

test('parses fragmented CRLF SSE frames and ignores comments before first output', () => {
  const parser = new SSESemanticParser()
  assert.equal(parser.push(encoder.encode(': keepalive\r\n\r\ndata: {"type":"response.')), false)
  assert.equal(parser.push(encoder.encode('output_text.delta","delta":"O')), false)
  assert.equal(parser.push(encoder.encode('K"}\r\n\r\n')), true)
  assert.equal(parser.finish(), true)
})

test('treats tool arguments as semantic output', () => {
  const parser = new SSESemanticParser()
  assert.equal(
    parser.push(
      encoder.encode(
        'data: {"type":"response.function_call_arguments.delta","delta":"{\\"q\\":1}"}\n\n',
      ),
    ),
    true,
  )
})

test('ignores malformed shapes and empty tool metadata without throwing', () => {
  for (const payload of [
    'null', '[]', '42', '{"choices":[null]}',
    '{"choices":[{"delta":{"tool_calls":[null,{}]}}]}',
    '{"choices":[{"delta":{"function_call":{}}}]}',
    '{"type":"response.output_item.added","item":{"type":"function_call","name":"lookup","arguments":""}}',
    '{"type":"content_block_start","content_block":{"type":"tool_use","input":{}}}',
  ]) assert.equal(isSemanticSSEPayload(payload), false, payload)
  assert.equal(isSemanticSSEPayload('{"choices":[{"delta":{"tool_calls":[{"function":{"arguments":"{}"}}]}}]}'), true)
})

test('recognizes completed-only output and nonempty reasoning deltas', () => {
  assert.equal(isSemanticSSEPayload(JSON.stringify({
    type: 'response.completed',
    response: { output: [{ type: 'message', content: [{ type: 'output_text', text: 'OK' }] }] },
  })), true)
  assert.equal(isSemanticSSEPayload('{"choices":[{"delta":{"reasoning_content":"thinking"}}]}'), true)
  assert.equal(isSemanticSSEPayload('{"type":"content_block_delta","delta":{"type":"thinking_delta","thinking":"checking"}}'), true)
})

test('counts nonempty Chat Completions refusal and custom tool input as visible output', () => {
  for (const payload of [
    '{"choices":[{"delta":{"refusal":"I cannot do that."}}]}',
    '{"choices":[{"delta":{"tool_calls":[{"custom":{"input":"print(1)"}}]}}]}',
  ]) assert.equal(isSemanticSSEPayload(payload), true)
  assert.equal(isSemanticSSEPayload('{"choices":[{"delta":{"refusal":"","tool_calls":[{"custom":{"input":""}}]}}]}'), false)
})

test('recognizes complete refusal text and SSE event names without a JSON type', () => {
  for (const payload of [
    '{"type":"response.refusal.done","refusal":"No."}',
    '{"type":"response.content_part.done","part":{"type":"refusal","refusal":"No."}}',
    '{"type":"response.completed","response":{"output":[{"type":"message","content":[{"type":"refusal","refusal":"No."}]}]}}',
  ]) assert.equal(isSemanticSSEPayload(payload), true)
  const parser = new SSESemanticParser()
  assert.equal(parser.push(encoder.encode('event: response.output_text.delta\ndata: {"delta":"Hi"}\n\n')), true)
  parser.push(encoder.encode('event: response.completed\ndata: {"response":{"status":"completed"}}\n\n'))
  assert.equal(parser.terminalFound, true)
})

test('does not invent an event separator when CRLF splits across chunks', () => {
  const parser = new SSESemanticParser()
  assert.equal(parser.push(encoder.encode('data: {"type":"response.output_text.delta",\r')), false)
  assert.equal(parser.push(encoder.encode('\ndata: "delta":"OK"}\r')), false)
  assert.equal(parser.push(encoder.encode('\n\r')), true)
  assert.equal(parser.push(encoder.encode('\n')), true)
})

test('only complete events count, including fragmented UTF-8 content', () => {
  const truncated = new SSESemanticParser()
  assert.equal(truncated.push(encoder.encode('data: {"choices":[{"delta":{"content":"OK"}}]}')), false)
  assert.equal(truncated.finish(), false)
  const parser = new SSESemanticParser()
  const frame = encoder.encode('data: {"choices":[{"delta":{"content":"你好"}}]}\n\n')
  for (let i = 0; i < frame.length - 1; i += 1) assert.equal(parser.push(frame.slice(i, i + 1)), false)
  assert.equal(parser.push(frame.slice(-1)), true)
})

function mockStream(t, frames) {
  t.mock.method(globalThis, 'fetch', async () => new Response(frames.shift(), {
    status: 200, headers: { 'Content-Type': 'text/event-stream' },
  }))
}

function benchmarkOptions(requests = 1) {
  return parseArguments(['--base-url', 'https://benchmark.invalid', '--endpoint', '/v1/responses',
    '--model', 'test', '--requests', String(requests), '--warmup', '0'])
}

const textEvent = 'data: {"type":"response.output_text.delta","delta":"OK"}\n\n'
const completedEvent = 'data: {"type":"response.completed","response":{"status":"completed"}}\n\n'

test('counts an in-stream failure after first output as a failed request', async (t) => {
  mockStream(t, [textEvent + 'event: error\ndata: {"type":"response.failed","response":{"status":"failed"}}\n\n'])
  const result = await runBenchmark(benchmarkOptions(), 'test-only-not-a-credential')
  assert.equal(result.successful_samples, 0)
  assert.equal(result.failed_samples, 1)
  assert.deepEqual(result.error_counts, { upstream_stream_error: 1 })
  assert.equal(result.ttft_ms.p50, null)
})

test('does not report unterminated streams as successful latency samples', async (t) => {
  mockStream(t, [textEvent])
  const result = await runBenchmark(benchmarkOptions(), 'test-only-not-a-credential')
  assert.equal(result.successful_samples, 0)
  assert.deepEqual(result.error_counts, { incomplete_stream: 1 })
})

test('reports successes and failures independently without hiding failed samples', async (t) => {
  mockStream(t, [textEvent + completedEvent, textEvent + 'data: {"error":{"message":"provider failed"}}\n\n'])
  const result = await runBenchmark(benchmarkOptions(2), 'test-only-not-a-credential')
  assert.equal(result.successful_samples, 1)
  assert.equal(result.failed_samples, 1)
  assert.equal(result.success_rate, 0.5)
  assert.ok(result.ttft_ms.p50 >= 0)
})

test('releases a completed stream even when the provider does not close HTTP', async (t) => {
  let cancelled = false
  t.mock.method(globalThis, 'fetch', async () => new Response(new ReadableStream({
    start(controller) { controller.enqueue(encoder.encode(textEvent + completedEvent)) },
    cancel() { cancelled = true },
  })))
  const result = await runBenchmark(benchmarkOptions(), 'test-only-not-a-credential')
  assert.equal(result.successful_samples, 1)
  assert.equal(cancelled, true)
})

test('accepts Chat Completions DONE and Messages stop as explicit termination', async (t) => {
  mockStream(t, [
    'data: {"choices":[{"delta":{"content":"OK"}}]}\n\ndata: [DONE]\n\n',
    'data: {"type":"content_block_delta","delta":{"text":"OK"}}\n\ndata: {"type":"message_stop"}\n\n',
  ])
  for (const endpoint of ['/v1/chat/completions', '/v1/messages']) {
    const result = await runBenchmark({ ...benchmarkOptions(), endpoint }, 'test-only-not-a-credential')
    assert.equal(result.successful_samples, 1)
  }
})

test('classifies network rejection and stream read timeouts as failures', async (t) => {
  let request = 0
  t.mock.method(globalThis, 'fetch', async () => {
    if (request++ === 0) throw new TypeError('network failed')
    let reads = 0
    return new Response(new ReadableStream({
      pull(controller) {
        if (reads++ === 0) controller.enqueue(encoder.encode(textEvent))
        else controller.error(new DOMException('read deadline', 'TimeoutError'))
      },
    }))
  })
  const result = await runBenchmark(benchmarkOptions(2), 'test-only-not-a-credential')
  assert.equal(result.successful_samples, 0)
  assert.deepEqual(result.error_counts, { network_or_stream_error: 1, timeout: 1 })
})

test('uses nearest-rank percentiles', () => {
  assert.equal(percentile([], 0.5), null)
  assert.equal(percentile([40, 10, 30, 20], 0.5), 20)
  assert.equal(percentile([40, 10, 30, 20], 0.9), 40)
})

test('parses a safe benchmark cohort without accepting an API key argument', () => {
  assert.deepEqual(
    parseArguments([
      '--base-url',
      'https://api.example.test/',
      '--endpoint',
      '/v1/responses',
      '--model',
      'gpt-test',
      '--reasoning',
      'high',
      '--requests',
      '50',
      '--warmup',
      '2',
    ]),
    {
      baseUrl: 'https://api.example.test',
      endpoint: '/v1/responses',
      model: 'gpt-test',
      reasoning: 'high',
      requests: 50,
      warmup: 2,
      maxOutputTokens: 16,
      timeoutMs: 120000,
    },
  )
  assert.throws(() => parseArguments(['--api-key', 'secret']), /unknown argument/)
})
