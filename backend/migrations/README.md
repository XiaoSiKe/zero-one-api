# Database migrations

The migration runner in [`internal/repository/migrations_runner.go`](../internal/repository/migrations_runner.go) is the execution authority. It embeds these SQL files, runs unapplied migrations on startup, and records their **complete filename**, SHA-256 checksum and application time in `schema_migrations`.

## Immutable history

Once a migration has been applied in any environment, preserve its filename and content. Do not delete, renumber, edit, or manually mark it as applied. A checksum mismatch requires recovering the original file from Git; corrective changes belong in a new forward-only migration.

Migration identity is the complete filename, not its numeric prefix. Existing upstream and product migrations can share a prefix. Preserve their established ordering and choose a new unused filename after checking the current repository and production ledger.

## Execution semantics

- Regular `.sql` files execute as a transaction. The runner executes the entire SQL file; it does not interpret goose Up/Down sections. Never append executable Down SQL.
- `_notx.sql` files execute statements outside a transaction and are restricted to concurrent index operations. Use `CREATE INDEX CONCURRENTLY IF NOT EXISTS` or `DROP INDEX CONCURRENTLY IF EXISTS` and verify interrupted-index recovery when applicable.
- `--migrate-only` applies migrations and exits before starting HTTP listeners or background workers. Use the candidate Backend image with this flag in an isolated restored database when rehearsing a release.

An additive change might be:

```sql
ALTER TABLE usage_logs ADD COLUMN IF NOT EXISTS example_column VARCHAR(100);
```

This is illustrative SQL, not a command to execute on production.

## Development and verification

1. Read the affected schema, existing migrations and applicable ADR before changing a database contract.
2. Add one focused forward migration. Keep established defaults, existing business values and legacy compatibility unless the change explicitly authorizes otherwise.
3. Test ordinary and tagged integration suites with disposable PostgreSQL/Redis services:

   ```bash
   cd backend
   go test ./migrations ./internal/repository
   go test -tags=integration ./internal/repository
   ```

4. Rehearse against a restored database using the exact candidate image. Apply migrations twice, compare the original business columns and migration checksums, check constraints/index validity and sequence positions, then verify the previous application image can still read the database.
5. Run the repository's affected checks during development and the required release checks before deployment. See the [development guide](../../DEV_GUIDE.md).

There are no `make migrate-up` or `make migrate-down` targets. Application rollback normally restores compatible images while retaining the database and subsequent writes. Database recovery is a separate operation; follow the [release and recovery procedure](../../docs/OPERATIONS.md#release-and-rollback).

## Inspect the ledger

Use a read-only database session:

```sql
SELECT filename, checksum, applied_at
FROM schema_migrations
ORDER BY filename;
```

If a migration fails, stop the release and inspect the runner error and the actual schema. Do not fabricate a ledger entry to skip SQL, edit an already-applied migration, or restore an older dump over accepted writes. The runner regression tests cover checksum mismatches, nontransactional statements and interrupted concurrent indexes.
