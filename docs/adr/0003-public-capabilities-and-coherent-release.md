# ADR 0003: Authorize minimal public capabilities and release both images coherently

Status: Accepted

## Context

The Public Site needs announcements and a channel-health summary without giving
anonymous visitors Console permissions or exposing operational records. These
capabilities also span the Sub2API image, which owns API behavior and database
migrations, and the edge image, which owns the Public Site.

## Decision

Public access is authorized independently of authenticated Console access. An
announcement is public only when `public_visible` is explicitly true and the
announcement is active, enabled, and currently effective. Existing rows remain
private by default. `GET /api/v1/announcements/public` returns at most 20 rows
and projects only `id`, `title`, and `content`.

The independently configured Landing Notice banner is not an announcement
authorization path. It stores one short site notice and optional link in public
settings; it neither reads Announcement records nor makes historical or
Console-targeted announcements public.

Public Channel Status has its own `public_channel_status_enabled` setting. It is
off by default and fails closed when settings cannot be read. When enabled,
`GET /api/v1/channel-status/summary` aggregates all enabled monitoring targets
but returns only the documented health summary and its existing display rows:
display name, state, availability and check timestamps. Internal identifiers,
provider configuration, models, groups, request volumes, raw errors and
credentials remain private.

Display rows are evaluated independently. A missing or stale probe keeps its
own row unknown while other valid rows remain visible; the overall aggregate
still requires complete samples before declaring a health state. A history-read
failure leaves the timeline empty without discarding current observations.
Landing distinguishes initial loading, missing observations and failed refreshes,
and explicitly labels a retained result when its refresh fails.

Landing must distinguish an unreadable Public Settings Projection from a valid
response with disabled capabilities. Failed reads keep controls closed, expose
a retry action, and recover automatically while the page is visible. Returning
from the browser's page cache, foregrounding the page, or restoring connectivity
refreshes settings, public prices and channel status without requiring a document
reload. Concurrent resume events do not duplicate in-flight requests, and unmount
cancels requests, retries and event subscriptions. These reads remain anonymous
even when Console credentials are present or expired; model-plaza authentication
requirements and the independent public-status switch remain authoritative.

Both anonymous responses follow an explicit field allowlist. Adding a field to
an internal entity or Console DTO does not make that field public. Edge responses
remain `Cache-Control: no-store`; bounded in-process aggregation caches do not
change that external contract.

The anonymous Console settings response and the HTML first-frame injection use
one Service-owned Public Settings Projection. The Landing request remains a
narrower projection. This shared implementation does not weaken the allowlist:
adding a field to the projection is still an explicit public authorization
decision, and authenticated assets such as the Community QR image remain out.

The Sub2API and edge images for one release must be built from the same source
commit and published with source-revision identity. Deployment applies and
checks the database migration, rolls out the Sub2API image, verifies its public
contracts, and only then switches the matching edge image. A new edge paired
with an old backend is not a supported steady state. Rolling back an image does
not roll back an already applied database migration.

## Consequences

Anonymous authorization remains narrow and auditable, historical data does not
become public during migration, and the Public Site cannot accidentally inherit
new internal fields. Operators must retain both image digests and the migration
ledger for each release, and must treat a partial two-image rollout as a
temporary deployment state that needs active completion or rollback.
