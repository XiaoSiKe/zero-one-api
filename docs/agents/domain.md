# Domain Docs

This is a single-context repository. Engineering skills must consume the domain documentation below before exploring or changing code.

## Required reading

- **`CONTEXT.md`** at the repository root for product vocabulary.
- **`docs/adr/`** for decisions relevant to the area being changed.

If a future `CONTEXT-MAP.md` appears, follow it and read each context relevant to the task.

## Use the glossary vocabulary

Use terms exactly as defined in `CONTEXT.md` in proposals, tests, code comments, issues, and release notes. Do not replace a defined term with one of its listed avoided synonyms.

If a needed concept is absent, reconsider whether the concept belongs in the product language before adding it.

## Protect local product changes

The repository contains product-specific second-development work on top of the Upstream Baseline. Treat these differences as Product Change Protection, not as redundant upstream drift. Before deleting or consolidating them, verify their ownership in `.github/upstream-baseline.json`, their ADR rationale, and the applicable tests or Approved UI Snapshot.

## Flag ADR conflicts

Surface any proposal that contradicts an ADR. Do not silently override a recorded decision.
