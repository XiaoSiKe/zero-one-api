# ADR 0009: Verify exact CI provenance and preserve license delivery

Status: Accepted

## Context

The hosting migration preserved source history and protected product metadata,
but duplicated Go and critical Console verification between workflows. The
publisher accepted any successful Zero One CI run without proving the separate
security/visual checks or inspecting jobs. Inherited upstream release entry
points could publish independently of the product's Coherent Release contract.
Some distributed runtime assets also lacked complete accompanying notices.

## Decision

One automatic Zero One CI workflow owns product verification; independent
Security Scan retains its PR/main and weekly vulnerability checks. Ordinary,
unit and integration Go configurations each execute once. Console executes its
full suite once. The existing 12 required names remain; compatibility checks
are explicit fail-closed summaries of actual backend/console results, not
duplicate work or unconditional successful placeholders. Manual diagnostics
use distinct names and cannot substitute for automatic checks.

Publish Source Evidence must identify the latest exact-SHA, exact-repository,
main push execution of each required workflow and successful completed jobs
from its current attempt. Pending, failed, skipped, missing or manual evidence
is rejected rather than falling back to an older success. Trusted policy
comparison includes the security workflow. This evidence is necessary but
does not replace explicit publication authorization.
Incomplete partial-rerun attempts are rejected without automatically rerunning
successful work. A final bounded reread detects intervening evidence changes;
it is not a transaction locking GitHub against future reruns.

The inherited Release and CLA workflows are disabled in the product repository;
their source jobs are additionally upstream-only, use bounded timeouts and
job-scoped permissions. Workflow-level disablement covers tags pointing to old
commits, whose workflow source is not retroactively fixed by a main change.
External fork PR workflows require maintainer approval. History, CLA text,
required protection and immutable UI tags are not removed or bypassed.

Upstream Provenance is preserved by full Git history, the fixed stable baseline
and a read-only upstream remote. GitHub-native fork metadata is a separate
hosting property. The product remains an independent repository; no destructive
recreation or unsupported metadata conversion is an acceptable substitute.

License Delivery retains the upstream LGPLv3 text, adds its companion GPLv3
text and includes known runtime third-party notices in supported product
images/archives. Each third-party component retains its own terms, including
React Bits Commons Clause. This does not certify all dependencies or authorize
upstream account use. Exact product paths enter permanent preservation; legal
attachments inside UI-protected paths still require a new approved snapshot.

## Consequences

Run counts alone are neither abuse evidence nor a safe-use guarantee. Tests
exercise real rejection cases, failed dependency aggregation and artifact
packaging contracts without creating extra workflows. Full native Linux visual
and image/routing validation remain mandatory; thresholds are unchanged.
Operational records distinguish prior migration runs from this hardening's
validation, and distinguish source provenance from platform-native fork status.
No image publication, production deployment or business configuration change
is authorized by this decision.
