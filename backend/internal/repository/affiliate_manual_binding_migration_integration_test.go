//go:build integration

package repository

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"testing"
	"time"

	dbmigrations "github.com/Wei-Shaw/sub2api/migrations"
	"github.com/lib/pq"
	"github.com/stretchr/testify/require"
)

func TestMigration229ManualAffiliateBindingSchemaAndBehavior(t *testing.T) {
	ctx := context.Background()
	tx := testTx(t)
	mustExec := func(query string, args ...any) {
		t.Helper()
		_, err := tx.ExecContext(ctx, query, args...)
		require.NoError(t, err)
	}

	requireColumn(t, tx, "user_affiliates", "inviter_bound_at", "timestamp with time zone", 0, true)
	requireColumn(t, tx, "user_affiliates", "inviter_bound_by_admin_id", "bigint", 0, true)

	var actorForeignKeys int
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT COUNT(*)
FROM pg_constraint c
JOIN pg_attribute a
  ON a.attrelid = c.conrelid
 AND a.attnum = ANY(c.conkey)
WHERE c.conrelid = 'public.user_affiliates'::regclass
  AND c.contype = 'f'
  AND a.attname = 'inviter_bound_by_admin_id'`).Scan(&actorForeignKeys))
	require.Zero(t, actorForeignKeys, "binding actor must remain an immutable ID snapshot without a foreign key")

	var userID int64
	require.NoError(t, tx.QueryRowContext(ctx, `
INSERT INTO users (email, password_hash, role, status, concurrency, created_at, updated_at)
VALUES ($1, 'hash', 'user', 'active', 5, NOW(), NOW())
RETURNING id`, fmt.Sprintf("migration-229-live-%d@example.com", time.Now().UnixNano())).Scan(&userID))
	mustExec(`
INSERT INTO user_affiliates (user_id, aff_code, created_at, updated_at)
VALUES ($1, $2, NOW(), NOW())`, userID, fmt.Sprintf("MIG%09d", userID%1_000_000_000))

	const missingActorID int64 = 9_000_000_000_000_000_004
	mustExec(`
UPDATE user_affiliates
SET inviter_bound_by_admin_id = $1
WHERE user_id = $2`, missingActorID, userID)
	var storedActorID int64
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT inviter_bound_by_admin_id
FROM user_affiliates
WHERE user_id = $1`, userID).Scan(&storedActorID))
	require.Equal(t, missingActorID, storedActorID, "an audit actor snapshot must not require a live users row")

	mustExec("SAVEPOINT before_self_binding")
	_, err := tx.ExecContext(ctx, `
UPDATE user_affiliates
SET inviter_id = user_id
WHERE user_id = $1`, userID)
	require.Error(t, err)
	var pqErr *pq.Error
	require.True(t, errors.As(err, &pqErr))
	require.Equal(t, pq.ErrorCode("23514"), pqErr.Code)
	require.Equal(t, "user_affiliates_no_self_inviter", pqErr.Constraint)
	mustExec("ROLLBACK TO SAVEPOINT before_self_binding")

	migrationSQL, err := dbmigrations.FS.ReadFile("229_affiliate_manual_binding.sql")
	require.NoError(t, err)
	mustExec(`
CREATE TEMP TABLE user_affiliates (
    user_id BIGINT PRIMARY KEY,
    inviter_id BIGINT NULL,
    created_at TIMESTAMPTZ NOT NULL
) ON COMMIT DROP`)
	mustExec("SET LOCAL search_path = pg_temp")

	legacyBoundAt := time.Date(2026, time.August, 1, 2, 3, 4, 0, time.UTC)
	mustExec(`
INSERT INTO user_affiliates (user_id, inviter_id, created_at)
VALUES (101, 202, $1), (303, NULL, $1)`, legacyBoundAt)
	mustExec(string(migrationSQL))
	mustExec(string(migrationSQL))

	var reboundAt time.Time
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT inviter_bound_at
FROM user_affiliates
WHERE user_id = 101`).Scan(&reboundAt))
	require.True(t, reboundAt.Equal(legacyBoundAt), "legacy relationships must use profile creation time as the binding timestamp")

	var unboundAt sql.NullTime
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT inviter_bound_at
FROM user_affiliates
WHERE user_id = 303`).Scan(&unboundAt))
	require.False(t, unboundAt.Valid, "profiles without an inviter must remain unbound")
}
