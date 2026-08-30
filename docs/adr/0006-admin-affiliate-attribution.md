# ADR 0006: Allow one-time administrator affiliate attribution

Status: Accepted

## Context

An otherwise valid customer can finish registration without the inviter's
affiliate code. The existing registration path binds an inviter only once, but
it does not give an administrator a safe way to repair that omission. Direct
database edits would bypass authorization, cycle checks and durable attribution
metadata, and could make an old payment appear eligible for a new rebate.

Affiliate attribution affects financial balances. A repair therefore needs a
narrower contract than general user editing, and the contract must survive an
ordinary upstream update together with its reviewed Console surface.

## Decision

The product exposes one administrator-only operation that binds an existing,
never-attributed invitee to one existing inviter. A user can have at most one
inviter. Both endpoints must still be active, non-deleted user rows, and that
check runs before the transaction can create either affiliate profile. The
operation rejects self-attribution, every direct or transitive
cycle, an existing attribution or binding-time tombstone, and any attempt to
replace or remove an attribution. The tombstone remains authoritative if a
historical inviter deletion clears `inviter_id`, so deletion cannot make the
invitee eligible for a second attribution. Validation and the compare-and-set
write run atomically so two concurrent requests cannot both succeed.

Manual attribution requires a human administrator authenticated by JWT; an
Admin API Key cannot perform it. The existing sensitive-operation step-up
policy protects the operation and, when that policy is enabled, requires a
recent TOTP step-up. The relationship persists the administrator's user ID and
the binding timestamp in addition to the inviter ID; the normal administrator
mutation audit also records the request and result. The administrator ID is an
immutable audit snapshot rather than a deleting user foreign key, so later
administrator removal cannot erase the actor attribution. Listing remains
authenticated administrator functionality and returns only the existing
customer identity and affiliate summary fields.

The repair is prospective. A payment is eligible only when its authoritative
`paid_at` is not earlier than the persisted binding timestamp. Existing orders,
balances and affiliate ledger rows are never recalculated or rewritten. The
existing affiliate validity window continues to start at the invitee's
affiliate-profile `created_at`; a late manual attribution does not restart or
extend that window.

The administrator Console presents Affiliate Attribution as one clickable
first-level navigation entry. Its visible workspace contains invitation
records, customer relationships, exclusive agents, transfer records and
operations settings. The order-level rebate-record reader and ledger data
remain available for financial audit and compatibility, but the rebate-record
page is no longer a visible workspace tab; its historical route redirects to
customer relationships. The full affiliate settings and per-user overrides
remain available without a second editable copy in System Settings. The
administrator entry remains reachable when the user-facing affiliate switch
is off so an administrator can configure and re-enable it; the ordinary user
entry remains controlled by that switch.
An administrator mutation that changes one user's custom invite code and
exclusive rebate rate is atomic, including the action that clears both values;
a code conflict or database failure must not leave only one value changed.

The product overlay adds a separate customer relationship view without
changing the meaning of the original invitation record. Customer relationship
lists every non-deleted account from the existing administrator user API. A
customer detail combines the existing affiliate overview with invitation
records filtered by that inviter, including the ledger-derived rebate earned
from each invitee. The repair action appears only in that detail and fixes the
inviter to the selected customer; the administrator chooses only the omitted
invitee. The invitation record remains the current relationship register, not
an append-only attribution event log.

Reading a customer overview is side-effect free. The overview query starts
from the user row and left-joins an optional affiliate profile, returning an
empty code and zero affiliate values for a valid user that has never created a
profile. Browsing the administrator Console must not create a profile or move
the affiliate validity-window anchor. The guarded repair transaction remains
the operation that ensures missing profiles when a relationship is written.

The approved recovered Console compatibility layer may add navigation and
customer-detail UI only as an overlay. Every injected same-origin link uses the
mounted Vue Router when available, while retaining its ordinary anchor as a
failure fallback. Observer-driven reconciliation must be idempotent so a
stable page cannot schedule a perpetual mutation/animation-frame loop. These
constraints protect the existing visual treatment while preventing full-page
reload flashes and idle CPU churn. The legacy System Settings write guard may
strip affiliate fields only from the old mixed settings form; a future native
affiliate workspace and its dedicated six-field request must pass through
unchanged when the recovered overlay yields.

Affiliate routes participate in the stable Console shell: the administrator
entry, customer detail and repair dialog replace route content without
recreating the sidebar or header. The recovered affiliate overlay registers
with the shared navigation reconciliation asset and must not add an independent
history wrapper, document-wide observer or navigation-time animation frame.
That rule preserves the invitation-record, customer-detail and manual-binding
semantics while avoiding a visual flash that could make the administrator lose
context during a sensitive action.

The implementation files named by
`.github/upstream-baseline.json` belong to the existing `Public Capabilities`
overlay and its `preserve_on_upstream_sync` boundary. The reviewed Vue and
recovered Console surfaces belong to the Approved UI Snapshot. An upstream
release that changes one of the same implementation files must not overwrite
the product copy during the sync merge; any useful upstream change is ported
and reviewed in a separate product change.

## Consequences

Administrators can repair an omitted code without gaining a general re-parent
or historical-rebate tool. A customer whose original validity window has
already expired can be attributed for visibility but does not receive a new
validity period. Corrections to an existing attribution remain an exceptional
database-governance task outside this UI.

The customer list deliberately reuses the general administrator user API. Its
explicit affiliate view adds Agent Value and Exclusive Agent fields, orders
before pagination by Agent Value descending and User ID descending, and may
filter to Exclusive Agents only. Ordinary administrator user-list calls remain
unchanged. Agent Value reads the existing affiliate historical quota rather
than recalculating ledger rows. The detail deliberately reuses the affiliate
overview and inviter-filtered invitation records. The custom-affiliate-user
endpoint keeps its original meaning, so the view does not add a competing
customer API or duplicate the ledger calculation.

Upstream syncs persist an `upstream_sync` attestation that binds the previous
stable release, the pre-merge product commit and the resulting two-parent merge
commit. CI and publishing replay that recorded merge and reject any protected
affiliate file that differs from the pre-merge product tree; missing or stale
metadata fails closed. Intentional changes to this module require its security,
financial and visual tests and, when the UI changes, a newly reviewed immutable
UI approval tag. The reviewed desktop and mobile affiliate screenshots are
listed explicitly in both protection manifests so a later sync cannot replace
the expected customer workspace or unique navigation entry silently.
After the one-time schema-v3 bootstrap, each recorded sync must retain every
path protected by its pre-merge product manifest; removing a path and
overwriting it in the same sync is therefore rejected.
