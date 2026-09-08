//go:build integration

package repository

import (
	"context"
	"database/sql"
	"testing"

	dbmigrations "github.com/Wei-Shaw/sub2api/migrations"
	"github.com/stretchr/testify/require"
)

func TestMigration237SynchronizesBothModelAllowlistColumns(t *testing.T) {
	tx := testTx(t)
	ctx := context.Background()

	migrationSQL, err := dbmigrations.FS.ReadFile("237_group_model_allowlist_compat.sql")
	require.NoError(t, err)
	_, err = tx.ExecContext(ctx, string(migrationSQL))
	require.NoError(t, err, "compatibility migration must be repeatable")

	var groupID int64
	require.NoError(t, tx.QueryRowContext(ctx, `
INSERT INTO groups (name, platform, rate_multiplier, status, model_allowlist)
VALUES ('migration-237-sync', 'openai', 1, 'active', '{"enabled":true,"models":["gpt-*"]}'::jsonb)
RETURNING id
`).Scan(&groupID))
	requireAllowlistColumnsEqual(ctx, t, tx, groupID, `{"enabled":true,"models":["gpt-*"]}`)

	_, err = tx.ExecContext(ctx, `
UPDATE groups SET models_list_config = '{"enabled":true,"models":["legacy-*"]}'::jsonb WHERE id = $1
`, groupID)
	require.NoError(t, err)
	requireAllowlistColumnsEqual(ctx, t, tx, groupID, `{"enabled":true,"models":["legacy-*"]}`)

	_, err = tx.ExecContext(ctx, `
UPDATE groups SET model_allowlist = '{"enabled":false,"models":["new-*"]}'::jsonb WHERE id = $1
`, groupID)
	require.NoError(t, err)
	requireAllowlistColumnsEqual(ctx, t, tx, groupID, `{"enabled":false,"models":["new-*"]}`)

	_, err = tx.ExecContext(ctx, `
UPDATE groups
   SET model_allowlist = '{"enabled":true,"models":["new"]}'::jsonb,
       models_list_config = '{"enabled":true,"models":["legacy"]}'::jsonb
 WHERE id = $1
`, groupID)
	require.ErrorContains(t, err, "conflicting model_allowlist and models_list_config values")
}

func requireAllowlistColumnsEqual(ctx context.Context, t *testing.T, tx *sql.Tx, groupID int64, expected string) {
	t.Helper()
	var current, legacy string
	require.NoError(t, tx.QueryRowContext(ctx, `
SELECT model_allowlist::text, models_list_config::text FROM groups WHERE id = $1
`, groupID).Scan(&current, &legacy))
	require.JSONEq(t, expected, current)
	require.JSONEq(t, expected, legacy)
}
