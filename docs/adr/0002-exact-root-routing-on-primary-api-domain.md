# ADR 0002: Serve the Public Site only at the exact API-domain root

Status: Superseded by ADR 0005

## Decision

`GET` and `HEAD` for the exact root of `api.01yapi.com` serve the Public Site,
its assets use the reserved `/_landing/` prefix, and every other request is
transparently proxied to Sub2API.

## Consequences

A catch-all proxy is safer than an API-path allowlist because Sub2API supports
multiple current and future root-level protocols. The public site cannot claim
additional root paths, and its Vite base must remain `/_landing/`.
