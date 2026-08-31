# Authentication views

This directory owns the maintained Vue authentication flows. Component code,
API types and tests are authoritative; this file is only an ownership map and
does not duplicate field or validation rules.

## Ownership

- `LoginView.vue` owns password, passkey, OAuth and two-factor sign-in UI.
- `RegisterView.vue` owns the existing account-registration UI, Public Settings
  gating, validation, verification and post-registration navigation.
- `EmailVerifyView.vue`, password-reset views and OAuth callback views own their
  corresponding public continuations.
- `@/stores/auth`, `@/api/auth` and `@/types` own authentication state, requests
  and public interfaces.
- `@/components/layout/AuthLayout.vue` owns the shared authentication layout.

`RegisterView.vue` is the only registration business implementation. Entry
performance work may preload its existing closure, but must not replace it with
another page, placeholder, skeleton or simplified form. See
[`docs/adr/0004-approved-ui-snapshot-at-edge.md`](../../../../docs/adr/0004-approved-ui-snapshot-at-edge.md).

## Routing and verification

Routes and guards are defined in [`../../router/index.ts`](../../router/index.ts).
Component tests live beside the views and shared authentication utilities.
Production-equivalent browser contracts live in
[`../../../../visual-regression/tests/console.visual.spec.ts`](../../../../visual-regression/tests/console.visual.spec.ts).

Production serves the Approved UI Snapshot from
`deploy/zero-one/recovered-frontend/console`. A maintained-source change is not
released until the recovered snapshot, desktop/mobile visual evidence and UI
baseline record are updated together.
