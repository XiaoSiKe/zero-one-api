# ADR 0007: Protect configurable Console navigation and authenticated header QR assets

Status: Accepted

## Context

The Console supports configurable built-in navigation visibility, Model Plaza
placement, role-aware custom pages, sidebar ordering and multiple header QR
entries. Production serves an Approved UI Snapshot through the Edge while the
maintained Vue source remains the future native implementation. Without a
shared contract, these surfaces can disagree during an upstream update or let
authenticated image data leak into anonymous settings.

## Decision

The Public Settings Projection may expose navigation labels, sanitized SVG
source, role visibility, placement, QR dialog copy and sidebar order. It must
not expose QR image bytes. Administrators edit those bytes through the full
settings API, which stores them in a separate image map keyed by menu item ID.

Each QR image is served only through
`GET /api/v1/settings/header-navigation/:id/qr`. The route requires JWT
authentication, checks the caller role against the entry visibility, accepts
only an enabled header QR entry, validates the persisted raster before
serving it, and returns non-cacheable, non-sniffable image data. Missing,
malformed and unauthorized entries fail closed without revealing whether a
different role can access them.

Validated image bytes may be reused in a service-local content-fingerprint
cache, bounded to 16 entries and 5 MiB, with concurrent misses coalesced. This
cache stores successful content validation, never entry configuration or an
authorization decision. Each request reads the current entry and image map
before its role check and cache lookup. Changed images cannot hit old content;
removal, visibility changes and repository failures never fall back to cached
authorization. The handler receives validated bytes rather than decoding the
same image twice. Browser responses remain `no-store` and `nosniff`.

The Console shell reads `GET /api/v1/admin/settings?scope=navigation` under the
existing administrator authorization. This nine-field projection includes menu
metadata, sidebar orders, profile/subscription visibility, Model Plaza placement
and three monitoring settings. It does not load or return QR images, logos,
payment configuration or full administrator settings. The editing endpoint is
unchanged. Navigation and payment reads settle independently, share concurrent
requests, reject pre-save responses and clear private state on identity changes.
The recovered shell delegates the narrow read to its existing authenticated API
client, retaining token renewal rather than replacing it with a raw fetch.

Public JSON and HTML injection use the same versioned, same-origin URL for
supported raster Logos. The existing public Logo resource owns image transfer
and cache validation; a large raster data URI is no longer repeated in
navigation bootstrap. Existing SVG data-URI Logos remain compatible in the
Console and its HTML injection; they are never promoted to the same-origin
binary endpoint. Landing keeps its existing raster-only data-URI policy.
Administrator editing continues to read the original stored Logo value.

The Vue source and recovered Console consume the same setting names and role
rules. One navigation reconciliation runtime owns Router history integration,
the `#app` observer and the final sidebar order. Feature adapters may register
idempotent work but must not create a competing observer, history wrapper or
ordering owner. Unsaved custom items without a persisted valid ID do not enter
the order arrays.

The final reconciliation phase sorts complete top-level rows, including their
Vue Fragment anchors and expandable subtree. Stable paths identify groups and
the affiliate workspace alias independently of locale. Settings and rendering
use first-occurrence-wins order semantics; default custom ordering comes from
current menu metadata, not a transient DOM captured before settings arrive.
Visual and keyboard order must agree, and an idle navigation must not mutate.

Custom-page frames are identified by menu ID, target URL and retry generation.
A load event arriving before navigation metadata is retained, while obsolete
frames cannot complete a newer navigation. Both the header title and iframe
use current administrator metadata once available, without falling back to a
deleted or outdated public copy. After 15 seconds the UI offers retry and the
existing new-window action, without reporting success or prefetching external
pages. QR downloads and image decoding have a 15-second deadline with explicit
retry; close, identity changes and replacement revoke their Blob URLs.

The historical `community_qr_*` settings remain readable for rollback
compatibility, but the maintained UI disables the old entry and does not treat
it as the source of truth for header navigation.

## Consequences

Multiple role-aware QR entries can be configured without making image bytes
anonymous or allowing two runtimes to fight over navigation order. Upstream
syncs must preserve the settings contracts, authenticated route, recovered
adapter and approved visual snapshot. Intentional changes require the relevant
authorization, navigation-idleness, desktop/mobile and asset-closure tests
before creating a new immutable UI approval tag.
