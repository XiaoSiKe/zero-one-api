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
  data?: ImageGenerationData[]
  model?: string
}

interface RequestOptions {
  signal?: AbortSignal
}

async function gatewayError(response: Response): Promise<Error> {
  try {
    const payload = await response.json() as {
      error?: { message?: string; code?: string | number }
      message?: string
    }
    const error = new Error(payload.error?.message || payload.message || response.statusText)
    Object.assign(error, {
      code: payload.error?.code || response.status,
      status: response.status,
      requestId: response.headers.get('X-Request-Id') || '',
    })
    return error
  } catch {
    return Object.assign(new Error(response.statusText || `HTTP ${response.status}`), {
      code: response.status,
      status: response.status,
      requestId: response.headers.get('X-Request-Id') || '',
    })
  }
}

function modelIds(payload: unknown): string[] {
  if (!payload || typeof payload !== 'object') return []
  const record = payload as Record<string, unknown>
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
  if (!response.ok) throw await gatewayError(response)
  return modelIds(await response.json())
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
  if (!response.ok) throw await gatewayError(response)
  return response.json() as Promise<ImageGenerationResponse>
}
