const DEFAULT_ENDPOINT = "/api/v1/channel-status/summary";
export const CHANNEL_STATUS_TIMEOUT_MS = 8_000;

type UnknownRecord = Record<string, unknown>;

export type ChannelStatusState = "operational" | "degraded" | "unknown";
export type ChannelStatusTimelineState = ChannelStatusState | "failed" | "error";
export type ChannelStatusMode = "active_probe" | "traffic" | "disabled" | null;
export type ChannelStatusReason =
  "no_monitors" | "insufficient_data" | "disabled" | null;
export type ChannelStatusErrorReason =
  "aborted" | "timeout" | "network" | "server" | "http" | "invalid-response";

export interface ChannelStatusSummary {
  mode: ChannelStatusMode;
  state: ChannelStatusState;
  reason: ChannelStatusReason;
  latencyMs: number | null;
  availability7d: number | null;
  observedAt: string | null;
  items: ChannelStatusItem[];
}

export interface ChannelStatusTimelinePoint {
  status: ChannelStatusTimelineState;
  checkedAt: string;
}

export interface ChannelStatusItem {
  name: string;
  state: ChannelStatusState;
  availability7d: number | null;
  observedAt: string | null;
  timeline: ChannelStatusTimelinePoint[];
}

export type ChannelStatusResult =
  | { status: "disabled" }
  | { status: "not-enabled" }
  | { status: "rate-limited"; retryAfter: number | null }
  | { status: "error"; reason: ChannelStatusErrorReason; httpStatus?: number }
  | { status: "success"; data: ChannelStatusSummary };

export interface FetchChannelStatusOptions {
  enabled?: boolean;
  endpoint?: string;
  request?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
}

function asRecord(value: unknown): UnknownRecord | null {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as UnknownRecord)
    : null;
}

function parseNullableInteger(value: unknown): number | null | undefined {
  if (value === null) return null;
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0
    ? value
    : undefined;
}

function parseNullablePercent(value: unknown): number | null | undefined {
  if (value === null) return null;
  return typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0 &&
    value <= 100
    ? value
    : undefined;
}

function parseNullableTimestamp(value: unknown): string | null | undefined {
  if (value === null) return null;
  if (typeof value !== "string" || value.length > 80 || !value.trim())
    return undefined;
  return Number.isFinite(Date.parse(value)) ? value : undefined;
}

function parseReason(value: unknown): ChannelStatusReason | undefined {
  if (value === undefined || value === null || value === "") return null;
  return value === "no_monitors" ||
    value === "insufficient_data" ||
    value === "disabled"
    ? value
    : undefined;
}

function parseMode(value: unknown): ChannelStatusMode | undefined {
  if (value === undefined || value === null || value === "") return null;
  return value === "active_probe" || value === "traffic" || value === "disabled"
    ? value
    : undefined;
}

function parseTimeline(value: unknown): ChannelStatusTimelinePoint[] | undefined {
  if (!Array.isArray(value) || value.length > 200) return undefined;
  const timeline: ChannelStatusTimelinePoint[] = [];
  for (const rawPoint of value) {
    const point = asRecord(rawPoint);
    const checkedAt = parseNullableTimestamp(point?.checked_at);
    const status = point?.status;
    if (
      checkedAt === undefined ||
      checkedAt === null ||
      (status !== "operational" &&
        status !== "degraded" &&
        status !== "failed" &&
        status !== "error" &&
        status !== "unknown")
    ) {
      return undefined;
    }
    timeline.push({ status, checkedAt });
  }
  return timeline;
}

function parseItems(value: unknown): ChannelStatusItem[] | undefined {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.length > 100) return undefined;
  const items: ChannelStatusItem[] = [];
  for (const rawItem of value) {
    const item = asRecord(rawItem);
    const name = item?.name;
    const state = item?.state;
    const availability7d = parseNullablePercent(item?.availability_7d);
    const observedAt = parseNullableTimestamp(item?.observed_at);
    const timeline = parseTimeline(item?.timeline);
    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.length > 100 ||
      (state !== "operational" && state !== "degraded" && state !== "unknown") ||
      availability7d === undefined ||
      observedAt === undefined ||
      timeline === undefined
    ) {
      return undefined;
    }
    items.push({ name, state, availability7d, observedAt, timeline });
  }
  return items;
}

/** Strictly parses the anonymous aggregate so malformed values never look healthy. */
export function parseChannelStatusResponse(
  payload: unknown,
): ChannelStatusSummary | null {
  const envelope = asRecord(payload);
  if (!envelope || envelope.code !== 0) return null;
  const data = asRecord(envelope.data);
  if (!data) return null;

  const state = data.state;
  if (state !== "operational" && state !== "degraded" && state !== "unknown")
    return null;
  const mode = parseMode(data.mode);
  const reason = parseReason(data.reason);
  const latencyMs = parseNullableInteger(data.latency_ms);
  const availability7d = parseNullablePercent(data.availability_7d);
  const observedAt = parseNullableTimestamp(data.observed_at);
  const items = parseItems(data.items);
  if (
    mode === undefined ||
    reason === undefined ||
    latencyMs === undefined ||
    availability7d === undefined ||
    observedAt === undefined ||
    items === undefined
  ) {
    return null;
  }

  return { mode, state, reason, latencyMs, availability7d, observedAt, items };
}

function parseRetryAfter(value: string | null): number | null {
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return Math.ceil(seconds);
  const at = Date.parse(value);
  if (!Number.isFinite(at)) return null;
  return Math.max(0, Math.ceil((at - Date.now()) / 1_000));
}

/** Fetches a stateless, anonymous-safe aggregate from the same-origin backend. */
export async function fetchChannelStatus(
  options: FetchChannelStatusOptions = {},
): Promise<ChannelStatusResult> {
  if (options.enabled === false) return { status: "disabled" };

  const request = options.request ?? fetch;
  const controller = new AbortController();
  const timeoutMs = Math.max(0, options.timeoutMs ?? CHANNEL_STATUS_TIMEOUT_MS);
  let timedOut = false;
  const handleCallerAbort = () => controller.abort(options.signal?.reason);
  if (options.signal?.aborted) return { status: "error", reason: "aborted" };
  options.signal?.addEventListener("abort", handleCallerAbort, { once: true });
  const timeoutId = globalThis.setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  try {
    const response = await request(options.endpoint ?? DEFAULT_ENDPOINT, {
      cache: "no-store",
      credentials: "omit",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (response.status === 404) return { status: "not-enabled" };
    if (response.status === 429) {
      return {
        status: "rate-limited",
        retryAfter: parseRetryAfter(response.headers.get("Retry-After")),
      };
    }
    if (response.status >= 500)
      return { status: "error", reason: "server", httpStatus: response.status };
    if (!response.ok)
      return { status: "error", reason: "http", httpStatus: response.status };

    let payload: unknown;
    try {
      payload = await response.json();
    } catch {
      return { status: "error", reason: "invalid-response" };
    }
    const data = parseChannelStatusResponse(payload);
    return data
      ? { status: "success", data }
      : { status: "error", reason: "invalid-response" };
  } catch {
    if (timedOut) return { status: "error", reason: "timeout" };
    if (options.signal?.aborted) return { status: "error", reason: "aborted" };
    return { status: "error", reason: "network" };
  } finally {
    globalThis.clearTimeout(timeoutId);
    options.signal?.removeEventListener("abort", handleCallerAbort);
  }
}
