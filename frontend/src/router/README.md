# Vue Router ownership

`index.ts` is the single source of truth for Vue routes, redirects, guards,
feature access and route prefetching. Do not copy a route inventory or guard
flow into this README; update the router and its tests together.

## Files

- `index.ts` defines the route graph and navigation behavior.
- `meta.d.ts` defines supported route metadata.
- `setupRedirect.ts` and `title.ts` own their named routing concerns.
- `__tests__/` covers guards, feature access, titles and callback routes.

## Runtime boundary

The Canonical Product Domain serves the React Public Site at `/` and the
Approved UI Snapshot for documented Console paths. Edge routing and the
recovered snapshot remain authoritative for production delivery; unmatched
paths continue to Sub2API.

See:

- [`docs/adr/0004-approved-ui-snapshot-at-edge.md`](../../../docs/adr/0004-approved-ui-snapshot-at-edge.md)
- [`docs/adr/0005-canonical-product-domain.md`](../../../docs/adr/0005-canonical-product-domain.md)
- [`deploy/zero-one/Caddyfile.shared`](../../../deploy/zero-one/Caddyfile.shared)

When changing routing behavior, run the router tests, recovered Console routing
contract and the relevant desktop/mobile browser suite. A protected UI change
also requires a new immutable Approved UI Snapshot record.
