import { buildGatewayUrl } from '@/api/url'

export interface ImageGenerationPayload {
  model: string
  prompt: string
  n?: number
  size?: string
  quality?: string
  response_format?: string
  referenceImages?: File[]
}

export interface ImageGenerationData {
  b64_json?: string
  url?: string
  revised_prompt?: string
  mime_type?: string
  output_format?: string
}

export interface ImageGenerationResponse {
  data: ImageGenerationData[]
  model?: string
}

interface RequestOptions {
  signal?: AbortSignal
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

function gatewayError(response: Response, message: string, code: string | number = response.status): Error {
  return Object.assign(new Error(message), {
    code,
    status: response.status,
    requestId: response.headers.get('X-Request-Id') || '',
  })
}

async function readGatewayResponse(response: Response): Promise<unknown> {
  let payload: unknown
  try {
    payload = await response.json()
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error
    if (!response.ok) throw gatewayError(response, response.statusText || `HTTP ${response.status}`)
    throw gatewayError(response, 'Invalid gateway response', 'INVALID_GATEWAY_RESPONSE')
  }
  // Images keepalives commit HTTP 200 before the upstream result is known.
  // The final JSON error is authoritative even when the HTTP status is OK.
  const record = isRecord(payload) ? payload : null
  if (!response.ok || record?.error != null) {
    const error = isRecord(record?.error) ? record.error : null
    const message = typeof error?.message === 'string' && error.message.trim()
      ? error.message
      : typeof record?.message === 'string' && record.message.trim()
        ? record.message : response.ok ? 'Image generation failed' : response.statusText || `HTTP ${response.status}`
    const code = typeof error?.code === 'string' || typeof error?.code === 'number'
      ? error.code : response.status
    throw gatewayError(response, message, code)
  }
  return payload
}

function isImageResponse(payload: unknown): payload is ImageGenerationResponse {
  if (!isRecord(payload) || !Array.isArray(payload.data)) return false
  if (payload.model != null && typeof payload.model !== 'string') return false
  return payload.data.every(image => isRecord(image) &&
    ['b64_json', 'url', 'revised_prompt', 'mime_type', 'output_format']
      .every(field => image[field] == null || typeof image[field] === 'string') &&
    [image.b64_json, image.url].some(source => typeof source === 'string' && source.trim()))
}

function modelIds(payload: unknown): string[] {
  if (!isRecord(payload)) return []
  const record = payload
  const candidates = Array.isArray(record.data)
    ? record.data
    : Array.isArray(record.models)
      ? record.models
      : []
  const seen = new Set<string>()
  const models: string[] = []
  for (const candidate of candidates) {
    const id = typeof candidate === 'string'
      ? candidate
      : candidate && typeof candidate === 'object'
        ? String((candidate as Record<string, unknown>).id || (candidate as Record<string, unknown>).name || '')
        : ''
    const normalized = id.trim().replace(/^models\//, '')
    const lower = normalized.toLowerCase()
    const isImageModel = lower.startsWith('gpt-image-') || lower === 'grok-imagine' ||
      lower === 'grok-imagine-edit' || lower.startsWith('grok-imagine-image')
    if (!normalized || !isImageModel || seen.has(normalized)) continue
    seen.add(normalized)
    models.push(normalized)
  }
  return models
}

export async function listAccessibleImageModels(
  apiKey: string,
  options: RequestOptions = {},
): Promise<string[]> {
  const response = await fetch(buildGatewayUrl('/v1/models'), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    signal: options.signal,
  })
  return modelIds(await readGatewayResponse(response))
}

export async function generateImage(
  apiKey: string,
  payload: ImageGenerationPayload,
  options: RequestOptions = {},
): Promise<ImageGenerationResponse> {
  const { referenceImages = [], ...jsonPayload } = payload
  const editing = referenceImages.length > 0
  const headers: Record<string, string> = { Authorization: `Bearer ${apiKey}` }
  let body: BodyInit

  if (editing) {
    const form = new FormData()
    form.append('model', payload.model)
    form.append('prompt', payload.prompt)
    if (payload.n !== undefined) form.append('n', String(payload.n))
    if (payload.size) form.append('size', payload.size)
    if (payload.quality) form.append('quality', payload.quality)
    if (payload.response_format) form.append('response_format', payload.response_format)
    referenceImages.forEach((image) => form.append('image', image, image.name))
    body = form
  } else {
    headers['Content-Type'] = 'application/json'
    body = JSON.stringify(jsonPayload)
  }

  const response = await fetch(
    buildGatewayUrl(editing ? '/v1/images/edits' : '/v1/images/generations'),
    { method: 'POST', headers, body, signal: options.signal },
  )
  const result = await readGatewayResponse(response)
  if (!isImageResponse(result)) throw gatewayError(response, 'Invalid image response', 'INVALID_IMAGE_RESPONSE')
  return result
}
