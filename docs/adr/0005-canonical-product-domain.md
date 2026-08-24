# ADR 0005: Use one canonical product domain

Status: Accepted

## Context

The Public Site already presents `api.01yapi.com` as the primary product
entry, while Landing links sent users to `app.01yapi.com` for Console paths.
The split created visible origin changes and duplicated routing, authentication,
reset-link and operational knowledge without an exclusive capability on the
second host.

## Decision

`api.01yapi.com` is the Canonical Product Domain for the Public Site, Console
and model calls. Exact `GET` and `HEAD /` continue to serve the Public Site and
`/_landing/` remains its reserved asset prefix. Documented Console routes such
as `/dashboard`, `/keys` and `/monitor` serve the Approved UI Snapshot at the
Edge; unmatched paths continue through the catch-all Sub2API proxy.

`app.01yapi.com` is a Compatibility Domain only. Every method and URI receives
a non-cacheable `308` redirect to `https://api.01yapi.com{uri}`, preserving the
path and query string. It does not serve the Console or proxy model calls.

`api.01yapi.cc` is retired from the product. The Edge must not configure,
redirect, obtain certificates for, publish metadata for or proxy that host.

The production Administrator setting `frontend_url` must be
`https://api.01yapi.com` so password-reset, notification and other generated
frontend links use the Canonical Product Domain. OAuth and captcha allowlists
must use the same origin before those capabilities are enabled.

This supersedes ADR 0002's statement that every non-root request is proxied,
while preserving its exact-root Public Site and reserved asset-prefix
decisions. ADR 0001's React/Vue separation and ADR 0004's Approved UI Snapshot
decision remain unchanged.

## Consequences

Users following old `app` links retain their path but may need to sign in once
on the canonical origin because browser storage is origin-scoped. Public links,
generated emails and Console navigation no longer switch origins. Local preview
can exercise the complete canonical-path behavior on one loopback origin;
production Caddy contract tests verify the legacy-host redirect separately.
