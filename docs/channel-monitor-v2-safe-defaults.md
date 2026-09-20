# Channel Monitor V2 Safe Defaults & Gentle Backfill

**Date:** 2026-08-08  
**Status:** Approved for implementation  
**Branch:** `fix/channel-monitor-v2-ops-ui-blockers` (onto channel-monitor-v2)

## Problem

1. **H2** — Migration 195 and code defaults set `channel_monitor_mode=v2`, so every upgrade without an existing key auto-opts into passive V2, stops V1 probes, and may leave users on an empty V2 view.
2. **M1** — First-enable bootstrap forces 5s ticks and ~24h `RecomputeRange` chunks until `now-30d`, hammering the primary DB.
3. Error dedup SQL matches `request_id` without a `created_at` bound, scanning `ops_error_logs` history via `candidate_ids`.

## Decisions

| Topic | Decision |
|-------|----------|
| Default mode | **v1** (keep active probes). V2 is explicit opt-in. |
| Existing `channel_monitor_mode=v2` rows | **Unchanged** (`ON CONFLICT DO NOTHING` / no force rewrite). |
| Switch to v2 | V1 runner `fire()` and `RunCheck` require `ActiveProbesAllowed()` → probes stop. |
| Backfill | Unified hard gates + adaptive soft gates (same rules, different observed load). |
| Optional profile knob | **Not in this change** (YAGNI). |

## Mode defaults

- Migration `195_channel_monitor_mode.sql`: insert `'v1'` when key missing.
- If 195 already applied with old checksum, add migration checksum compatibility (do not force rewrite applied DBs to v1).
- Code: `defaultChannelMonitorMode = v1`; empty/invalid normalize → v1.
- Frontend Settings form default and public feature flag fallback → v1 when missing/invalid.
- Nil settings on V1 `RunCheck` path remains **fail-closed** (no probes) for test safety — independent of product default.

## Gentle backfill (low-resource phases)

### Hard gates (all servers)

- Tick interval = `refresh_interval` (60 or 300s). **No 5s bootstrap override.**
- Each tick: (1) recent overlap (~10m), then (2) **at most one** historical chunk while product bootstrap incomplete / retention walk ongoing.
- Single leader lock; single short transaction budget (~55s).
- Chunk ceiling by depth (product phases 90m → 1d → 7d → 30d → silent 90d).

### Soft gates (adaptive)

- Initial historical chunk: **1h** (first seed still **2h** for 90m UI).
- Min chunk: **15m**; max by depth: ≤1d → **2h**, ≤7d → **4h**, older → **6h**.
- Success + fast: grow slowly (×1.5) up to depth max.
- Failure/timeout: halve chunk; exponential backoff on wait (cap 10m).
- Progressive UI: show whatever is covered; bootstrap banner vs 30d product window.

### Error dedup

- Bound the `request_id IN candidate_ids` branch with  
  `created_at >= $1 - INTERVAL '90 minutes' AND created_at < $2`.

## Out of scope

- Force existing v2 → v1.
- Separate backfill workers / read replicas.
- Admin `backfill_profile` setting (may add later).

## Taxonomy v2 follow-up

Authentication and quota failures are split by owner. User-side authentication and balance errors retain the non-operational ignored defaults; Provider Account authentication and upstream quota failures use `upstream_authentication` and `upstream_quota_or_balance` and affect health by default. Migration 235 restarts the existing gentle backfill cursor without scanning source tables during migration.

## Production cutover runbook (2026-09-20)

V1 `probe` and `quota_probe` are active checks: every enabled monitor sends a real LLM generation request for its primary model and every additional model on each interval. They may be billed by the upstream provider. The approximate daily request volume is `86400 / interval_seconds × model_count`. `quota` only reads the linked account's usage or balance and sends no generation request.

V2 is passive and derives health from gateway `usage_logs` and `ops_error_logs`. Switch only after the matching Backend and Edge digests are healthy, using the audited partial settings update:

```json
{"channel_monitor_mode":"v2"}
```

Cutover acceptance:

1. Allow at most one already-running V1 request to finish; then confirm V1 history and outbound probe logs stop growing.
2. Within two refresh periods, require a non-empty aggregate, a non-null `data_through` close to current time, and visible 90-minute data.
3. Treat `coverage_complete=false` as real partial coverage. Keep the service online while gentle backfill advances to the 30-day product window; never present incomplete history as complete.
4. Sample the 90-minute, 24-hour, 7-day and 30-day windows against source logs. Request totals, error taxonomy and half-open time boundaries must be conserved.
5. Confirm the release did not rewrite account multipliers, balances, API keys, users, Provider Account historical cost, `usage_logs`, or `ops_error_logs`.

An empty aggregate with a legacy cursor is not valid progress. A watermark is restorable only when `HasData` and `data_through` prove a successful aggregation; the first successful seed replaces stale cursor/coverage fields, and restarts continue immediately before that real seed without a gap.

If V2 cutover fails, first restore `channel_monitor_mode=v1` to recover the existing status page, then roll back Backend/Edge digests if needed. Do not roll back the database, delete V2 derived tables, purge source logs, or remove Docker volumes.
