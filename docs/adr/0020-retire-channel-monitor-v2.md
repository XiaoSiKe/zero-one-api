# ADR 0020: Retire Channel Monitor V2

## Status

Accepted on 2026-09-20.

## Context

Channel Monitor V2 passively aggregated gateway traffic into a second monitoring
model. The product owner has chosen the existing V1 monitor as the only supported
channel-monitor implementation and explicitly requested removal of V2.

The database migrations have already run in production. Removing or rewriting
them would corrupt the migration ledger, and dropping their tables would create
unnecessary data-loss risk. They therefore remain as inert compatibility history.

## Decision

Remove every V2 runtime, API, UI, locale, test, screenshot, and backfill entry
point. Keep V1 active probes, including the existing cost warning and quota-only
mode. Settings reads continue to fail closed so initialization or repository
errors cannot accidentally emit paid probes.

The following formerly protected files are retired and must stay absent:

- `backend/internal/handler/channel_monitor_v2_handler.go`
- `backend/internal/handler/channel_monitor_v2_handler_test.go`
- `backend/internal/repository/channel_monitor_v2_repo.go`
- `backend/internal/repository/channel_monitor_v2_aggregation.go`
- `backend/internal/repository/channel_monitor_v2_repo_test.go`
- `backend/internal/service/channel_monitor_probe_retirement_test.go`
- `backend/internal/service/channel_monitor_v2.go`
- `backend/internal/service/channel_monitor_v2_aggregator.go`
- `backend/internal/service/channel_monitor_v2_aggregator_test.go`
- `backend/internal/service/channel_monitor_v2_error_taxonomy.go`
- `backend/internal/service/channel_monitor_v2_test.go`
- `backend/migrations/channel_monitor_v2_taxonomy_migration_test.go`
- `docs/channel-monitor-v2-safe-defaults.md`
- `frontend/src/api/channelMonitorV2.ts`
- `frontend/src/api/__tests__/channelMonitorV2.spec.ts`
- `frontend/src/i18n/locales/en/channelMonitorV2.ts`
- `frontend/src/i18n/locales/zh/channelMonitorV2.ts`
- `frontend/src/views/user/ChannelStatusV2View.vue`
- `visual-regression/tests/__screenshots__/chromium-desktop/console-channel-status-v2.png`

## Consequences

- V1 is the sole channel-monitor runtime and public/admin presentation.
- No V2 aggregation worker, route, mode switch, backfill, or V2 UI is shipped.
- Historic V2 tables and applied SQL migrations remain dormant and are not read,
  refreshed, truncated, or dropped.
- Previously published immutable assets remain byte-identical at their old URLs;
  current entry points load a new V1-only namespace.
