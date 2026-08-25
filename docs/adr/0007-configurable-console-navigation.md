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
only an enabled header QR entry, validates the persisted raster again before
serving it, and returns non-cacheable, non-sniffable image data. Missing,
malformed and unauthorized entries fail closed without revealing whether a
different role can access them.

The Vue source and recovered Console consume the same setting names and role
rules. One navigation reconciliation runtime owns Router history integration,
the `#app` observer and the final sidebar order. Feature adapters may register
idempotent work but must not create a competing observer, history wrapper or
ordering owner. Unsaved custom items without a persisted valid ID do not enter
the order arrays.

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
