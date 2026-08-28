# ADR 0008: Deepen Redeem Code and HTTP stream lifecycles

Status: Accepted

## Context

Redeem Code management could read an unused row, race with redemption, and then
overwrite its claim or actual Mystery Box reward. The existing PostgreSQL batch
uniqueness constraint cannot protect a claim whose fields are later erased.
Successful redemption could also be reported as failure by a post-commit read or
a Console balance refresh.

API Key Last-used Bookkeeping synchronously wrote metadata before forwarding.
HTTP account-slot cancellation could report an idle Provider Account while its
upstream connection was still draining usage. Existing usage TTFT measured only
the final attempt, and some protocol paths counted metadata as first output.

## Decision

The Redeem Code lifecycle Module uses its existing Repository Interface and
PostgreSQL Adapter. Redemption locks the current row inside its transaction,
checks expiry after acquiring the lock, and commits the claim, stored reward and
balance together. Batch management locks IDs in ascending order before validating
all selected rows. Expiry is a conditional state transition, not an entity
snapshot write. Administrative mutation/deletion cannot erase a Redeem Claim;
notes remain editable. Batch deletion returns actual affected rows and propagates
database failures. Existing invitation-registration rollback is preserved.

Benefit and Mystery Box rewards are finite whole-cent amounts from 0.01 through
999999999999.99, the largest supported whole-cent DECIMAL(20,8) value. Mystery Box
sampling remains cryptographically random over the inclusive range. Per-code and
per-user/per-batch limits and the no-affiliate-rebate rule remain unchanged.
PostgreSQL is the authority when Redis is unavailable. Redis leases use hashed
code keys and ownership-aware release. Failed-attempt limits use the existing
20-errors-per-hour rule with a fixed first-error window; legacy longer TTLs are
shortened without clearing the counter or extending a live one-hour window.

The final result is obtained before committing. An acknowledged successful commit
is not turned into failure by later reads. The Console treats success and state
refresh as separate outcomes; uncertain network outcomes are checked through
history, not automatic repeat redemption. Existing HTTP DTOs remain authoritative.

API Key Last-used Bookkeeping has one independent worker and at most 1024 pending
distinct Key IDs. Enqueue never waits for SQL and never uses the billing worker.
Queued arrivals coalesce until execution snapshots the timestamp; arrivals during
that write share its debounce window. Successful writes debounce for 30 seconds,
failures back off for 5 seconds, and each write has an independent 10-second
budget. Shutdown cancels metadata work before closing the database. Times are
updated monotonically; deleted keys cannot be revived.

HTTP request timing starts before authentication. Site First Token is marked only
after a complete content-bearing event is written and flushed; protocol commit
and visible output remain distinct. A frozen usage-result copy contains request
TTFT and the matching total duration, while the original Attempt First Token stays
with the scheduler. No-output requests retain NULL; partial-output failures retain
their observed timing. WebSocket turn timing and leases do not inherit HTTP
connection age. Internal access logs carry numerical stage timings and a timing
version, never prompt bodies or credentials.

When the configured stream-data idle budget is enabled, HTTP user slots release
on client cancellation, but account slots track the real upstream attempt through
usage drain or bounded no-progress cancellation (including response-header wait).
Explicitly disabled idle budgets retain the earlier cancellation-release behavior;
this change does not silently turn a zero timeout into a new timeout. WS leases,
concurrency limits, sticky affinity and retry counts are unchanged. Raw CC streams
must surface read/idle errors and preserve observed usage; committed responses are
never replayed.

The maintained Vue Implementation and the recovered Approved UI Snapshot carry
the same contracts, with behavioral and source/recovered parity tests. Changed
immutable assets receive a fresh URL namespace; old approval tags remain fixed.

## Consequences

Depth increases at the existing Repository and HTTP lifecycle Seams: concurrency
rules and resource ownership have Locality, and tests cross the same Interface as
real callers. No generic gateway framework or new database columns are introduced.
Historical usage is not rewritten; latency comparisons must separate the timing
version change. Upstream pool latency is still outside the site's control.

Every changed product path and test is permanently protected. Release still
requires reviewed UI approval, full CI, a same-source Backend/Edge pair and the
Backend-first deployment process. Source merge is not production deployment.
