//go:build integration

package repository

import (
	"context"
	"testing"

	dbmigrations "github.com/Wei-Shaw/sub2api/migrations"
	"github.com/stretchr/testify/require"
)

func TestMigration238PurgesOnlySemanticallyUnlimitedQuotaRows(t *testing.T) {
	tx := testTx(t)
	ctx := context.Background()
	_, err := tx.ExecContext(ctx, "CREATE SCHEMA quota_purge_238")
	require.NoError(t, err)
	_, err = tx.ExecContext(ctx, "SET LOCAL search_path TO quota_purge_238")
	require.NoError(t, err)
	_, err = tx.ExecContext(ctx, `
CREATE TABLE user_platform_quotas (
    id bigint PRIMARY KEY,
    daily_limit_usd numeric NULL,
    weekly_limit_usd numeric NULL,
    monthly_limit_usd numeric NULL,
    business_value text NOT NULL
);
INSERT INTO user_platform_quotas VALUES
    (11, NULL, NULL, NULL, 'unlimited-candidate'),
    (12, 0, NULL, NULL, 'zero-is-a-real-limit'),
    (13, NULL, 7, NULL, 'weekly-limit'),
    (14, NULL, NULL, 30, 'monthly-limit'),
    (15, 1, 7, 30, 'all-limits');
`)
	require.NoError(t, err)

	var candidateCount int
	var candidateHash string
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT COUNT(*), md5(COALESCE(string_agg(id::text, ',' ORDER BY id), ''))
  FROM user_platform_quotas
 WHERE daily_limit_usd IS NULL
   AND weekly_limit_usd IS NULL
   AND monthly_limit_usd IS NULL
`).Scan(&candidateCount, &candidateHash))
	require.Equal(t, 1, candidateCount)
	require.Equal(t, "6512bd43d9caa6e02c990b0a82652dca", candidateHash) // md5("11")

	var beforeRetained string
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT md5(string_agg(row_to_json(q)::text, '|' ORDER BY id))
  FROM (SELECT * FROM user_platform_quotas WHERE id <> 11) q
`).Scan(&beforeRetained))

	migrationSQL, err := dbmigrations.FS.ReadFile("238_purge_unlimited_user_platform_quotas.sql")
	require.NoError(t, err)
	result, err := tx.ExecContext(ctx, string(migrationSQL))
	require.NoError(t, err)
	deleted, err := result.RowsAffected()
	require.NoError(t, err)
	require.EqualValues(t, candidateCount, deleted)

	result, err = tx.ExecContext(ctx, string(migrationSQL))
	require.NoError(t, err, "quota purge migration must be idempotent")
	deleted, err = result.RowsAffected()
	require.NoError(t, err)
	require.Zero(t, deleted)

	var afterRetained string
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT md5(string_agg(row_to_json(q)::text, '|' ORDER BY id))
  FROM (SELECT * FROM user_platform_quotas) q
`).Scan(&afterRetained))
	require.Equal(t, beforeRetained, afterRetained)

	// The runtime contract treats a missing row as no configured limit; deleting
	// the all-NULL row therefore preserves the effective unlimited behavior.
	var effectiveUnlimited bool
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT NOT EXISTS (
  SELECT 1 FROM user_platform_quotas
   WHERE id = 11
     AND (daily_limit_usd IS NOT NULL OR weekly_limit_usd IS NOT NULL OR monthly_limit_usd IS NOT NULL)
)
`).Scan(&effectiveUnlimited))
	require.True(t, effectiveUnlimited)
}
