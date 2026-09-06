# Repository Guidance

## Agent skills

### Issue tracker

Issues and PRDs live in GitHub Issues for `XiaoSiKe/zero-one-api`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the five canonical triage labels without aliases. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. Read the root `CONTEXT.md` and relevant records in `docs/adr/` before changing product behaviour. See `docs/agents/domain.md`.

### Verification

Use `make test-affected` for ordinary changes. The canonical path policy and fallback rules are defined by `docs/adr/0013-affected-verification-policy.md`; `make test` remains the explicit complete-suite entry point.
