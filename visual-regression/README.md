# Zero One Visual Regression

This module owns deterministic Chromium snapshots for the Zero One Console and
Public Site. Console tests serve `deploy/zero-one/recovered-frontend/console`
directly; they must never build or launch `frontend/src`, because that upstream
tree is not the source of the protected production-equivalent Console snapshot.
It uses only browser-level API fixtures; no live database, monitor, or external
service is consulted. Time, timezone, DPR, viewports and dynamic canvas inputs
are fixed by the test configuration and visual-test adapters.
The versioned Playwright container is the source of truth for Linux, bundled
Chromium and system font packages; local runs are smoke tests only.

Reviewed Linux baselines are checked in. The dedicated calibration workflow is
a blocking `Chromium visual regression` check. It runs in the versioned
`mcr.microsoft.com/playwright:v1.55.1-noble` image and passes
`--update-snapshots=none`; CI cannot update the repository baselines. Missing
or mismatched snapshots fail the check, while their Playwright report, actual,
diff and trace files are uploaded when produced.

The files under `artifacts/design-qa/` are manual review artifacts. They do not
record this module's network fixture, frozen time, Linux image, font set or
browser revision, so they must not be copied or renamed into
`tests/__screenshots__/` as baselines.

Generate candidate baselines only in the same pinned Playwright image with the
explicit `npm run test:update` command. Commit the resulting
`tests/__screenshots__/` files in a dedicated, human-reviewed snapshot update.
The configured `maxDiffPixels: 0` is a release gate. Do not update snapshots
as part of an upstream synchronization; first review the visual result, then
create a new approved UI baseline tag.
