# ADR 0004: Serve the approved UI snapshot from the edge image

Status: Accepted

## Context

ADR 0001 separated the React Public Site from the Vue Console and originally
assigned Console releases to the Sub2API image. Production now has an additional
stability boundary: ordinary upstream upgrades must not change the approved UI
snapshot, even when the upstream Vue sources and embedded assets change.

The Zero One edge image already carries the reviewed recovered Console and
serves its explicit page and asset routes. Sub2API remains authoritative for
API behavior, authentication, authorization, persistence and unmatched route
fallbacks.

## Decision

The Edge image serves both the React Public Site and the immutable Approved UI
Snapshot for the documented Console routes. The snapshot is fixed by the
`ui-approved-*` tag and `.github/scripts/ui-baseline.json`; an upstream upgrade
may change only the named API/type compatibility paths without moving that tag.

The maintained Vue source has one stable authenticated Console shell: the
sidebar and header are owned above route content, and ordinary Console
navigation replaces only the route content. A page must not acquire a second
`AppLayout` ownership. The shell route metadata, its leaf-page contract and its
regression test are protected product paths, including the named exception for
the upstream router file.

The recovered snapshot remains an approved base package. Its maintained
overlays use one navigation reconciliation asset with one Router history hook,
one `#app` child-list observer and one microtask batch. Overlay-specific work
registers idempotent reconciliation instead of adding another global observer,
history wrapper or navigation-time animation frame. This is an overlay change,
not permission to replace or rewrite the approved recovered base package.

The Kimi, Zhipu GLM and DeepSeek administration controls use one versioned
route-content Adapter for `/admin/groups` and `/admin/accounts`. It registers
with the existing navigation reconciliation asset, preserves the approved
Console shell and mounts only inside the active route's `main` content. The
Adapter must restore the original route content and remove its scoped
stylesheet before any other route is painted. Replacing the base entry, adding
another history hook, or keeping Adapter styles active outside those two routes
is not permitted.

The generated shell redirects the two historical route loaders to one inert
placeholder before Vue Router is constructed. That placeholder reuses the
approved AppLayout and contributes only the leaf host inside its `main`; after
mount it notifies the pre-shell Adapter directly. The maintained leaf application
is therefore the only business implementation allowed to execute those routes,
preventing hidden duplicate views, duplicate polling and exit-frame flashes.
The generated shell must equal the previous approved shell after the mount
notification and the two deterministic target-route loader redirects. Leaf
runtime, route chunks and active-route CSS remain lazy and must not load on any
other route. The leaf owns its Toast consumer and read-only auth/locale snapshot,
without starting a second auth refresh timer. A leaf load failure stays inside
the approved AppLayout and exposes a retry action rather than blanking the shell.

Every Backend and Edge image in a Coherent Release is still built from the same
source commit. Backend migrations and API contracts are deployed and verified
first, followed by the matching Edge image. The recovered Console routing and
asset closure checks are release-blocking interfaces.

This decision supersedes only ADR 0001's consequence that Console changes are
served from the Sub2API image. It does not change ADR 0001's separation of React
and Vue, ADR 0002's exact-root routing boundary, or ADR 0003's same-commit and
Backend-first release requirements.

## Consequences

An upstream backend release can be adopted without an unreviewed visual change,
and rollback retains a known Console asset set. New upstream features that need
new Console controls remain unavailable in the protected snapshot until a
separate visual review creates a new immutable UI approval tag.

A route-content Adapter is approved only when existing desktop and mobile
snapshots remain byte-identical, target-route snapshots are reviewed, and
browser tests prove the actual group/account request bodies. Source-only tests
or static asset presence do not establish this contract.

Any release that changes the stable Console shell or its recovered navigation
reconciliation must run the desktop and mobile visual suite plus frame-level
navigation checks before a new immutable approval tag is created. The approval
must demonstrate that a key-to-usage route change does not reload the document,
remove the sidebar, restore its scroll position on a later frame, or keep
observer/reconciliation work alive while the page is idle.
