//go:build integration

package repository

import (
	"context"
	"database/sql"
	"fmt"
	"strings"
	"testing"

	dbmigrations "github.com/Wei-Shaw/sub2api/migrations"
	"github.com/stretchr/testify/require"
)

func TestMigration237MiniMaxPreservesEmptyAndPopulatedSchemas(t *testing.T) {
	tx := testTx(t)
	ctx := context.Background()

	minimaxSQL, err := dbmigrations.FS.ReadFile("237_add_minimax_platform.sql")
	require.NoError(t, err)
	compatSQL, err := dbmigrations.FS.ReadFile("237_group_model_allowlist_compat.sql")
	require.NoError(t, err)

	for _, populated := range []bool{false, true} {
		name := "empty"
		if populated {
			name = "v023-with-local-237"
		}
		t.Run(name, func(t *testing.T) {
			schema := fmt.Sprintf("minimax_237_%s", strings.ReplaceAll(name, "-", "_"))
			_, err := tx.ExecContext(ctx, "CREATE SCHEMA "+schema)
			require.NoError(t, err)
			_, err = tx.ExecContext(ctx, "SET LOCAL search_path TO "+schema)
			require.NoError(t, err)
			createPreMiniMaxPlatformSchema(ctx, t, tx)

			// The local compatibility migration has the same numeric prefix but a
			// distinct full filename and must coexist in the migration ledger.
			_, err = tx.ExecContext(ctx, string(compatSQL))
			require.NoError(t, err)
			_, err = tx.ExecContext(ctx, `
INSERT INTO schema_migrations (filename)
VALUES ('237_group_model_allowlist_compat.sql'), ('237_add_minimax_platform.sql')
`)
			require.NoError(t, err)

			if populated {
				seedPreMiniMaxPlatformRows(ctx, t, tx)
			}
			before := platformMigrationFingerprints(ctx, t, tx)

			_, err = tx.ExecContext(ctx, string(minimaxSQL))
			require.NoError(t, err)
			_, err = tx.ExecContext(ctx, string(minimaxSQL))
			require.NoError(t, err, "MiniMax migration must be idempotent")
			require.Equal(t, before, platformMigrationFingerprints(ctx, t, tx))

			platformColumns := [][2]string{
				{"user_platform_quotas", "platform"},
				{"composite_model_routes", "target_platform"},
				{"channel_monitors", "provider"},
				{"channel_monitor_request_templates", "provider"},
			}
			for index, item := range platformColumns {
				query := fmt.Sprintf("INSERT INTO %s (id, %s, business_value) VALUES ($1, 'minimax', 'kept')", item[0], item[1])
				_, err = tx.ExecContext(ctx, query, 100+index)
				require.NoErrorf(t, err, "MiniMax must be accepted by %s", item[0])
				requireConstraintRejectsUnknownPlatform(ctx, t, tx, item[0], item[1], 200+index)
			}

			var ledgerCount int
			require.NoError(t, tx.QueryRowContext(ctx,
				"SELECT COUNT(*) FROM schema_migrations WHERE filename LIKE '237_%'").Scan(&ledgerCount))
			require.Equal(t, 2, ledgerCount)
		})
	}
}

func createPreMiniMaxPlatformSchema(ctx context.Context, t *testing.T, tx *sql.Tx) {
	t.Helper()
	_, err := tx.ExecContext(ctx, `
CREATE TABLE schema_migrations (filename text PRIMARY KEY);
CREATE TABLE groups (
    id bigint PRIMARY KEY,
    model_allowlist jsonb NOT NULL DEFAULT '{}'::jsonb
);
CREATE TABLE user_platform_quotas (
    id bigint PRIMARY KEY,
    platform text NOT NULL,
    business_value text NOT NULL,
    CONSTRAINT user_platform_quotas_platform_check
      CHECK (platform IN ('anthropic', 'openai', 'gemini', 'antigravity', 'grok', 'kimi', 'zhipu', 'deepseek'))
);
CREATE TABLE composite_model_routes (
    id bigint PRIMARY KEY,
    target_platform text NOT NULL,
    business_value text NOT NULL,
    CONSTRAINT composite_model_routes_target_platform_check
      CHECK (target_platform IN ('anthropic', 'openai', 'gemini', 'antigravity', 'grok', 'kimi', 'zhipu', 'deepseek'))
);
CREATE TABLE channel_monitors (
    id bigint PRIMARY KEY,
    provider text NOT NULL,
    business_value text NOT NULL,
    CONSTRAINT channel_monitors_provider_check
      CHECK (provider IN ('openai', 'anthropic', 'gemini', 'grok', 'antigravity', 'kimi', 'zhipu', 'deepseek'))
);
CREATE TABLE channel_monitor_request_templates (
    id bigint PRIMARY KEY,
    provider text NOT NULL,
    business_value text NOT NULL,
    CONSTRAINT channel_monitor_request_templates_provider_check
      CHECK (provider IN ('openai', 'anthropic', 'gemini', 'grok', 'antigravity', 'kimi', 'zhipu', 'deepseek'))
);
`)
	require.NoError(t, err)
}

func seedPreMiniMaxPlatformRows(ctx context.Context, t *testing.T, tx *sql.Tx) {
	t.Helper()
	_, err := tx.ExecContext(ctx, `
INSERT INTO user_platform_quotas VALUES (1, 'anthropic', 'quota-row');
INSERT INTO composite_model_routes VALUES (2, 'openai', 'route-row');
INSERT INTO channel_monitors VALUES (3, 'gemini', 'monitor-row');
INSERT INTO channel_monitor_request_templates VALUES (4, 'deepseek', 'template-row');
`)
	require.NoError(t, err)
}

func platformMigrationFingerprints(ctx context.Context, t *testing.T, tx *sql.Tx) map[string]string {
	t.Helper()
	tables := []string{
		"user_platform_quotas",
		"composite_model_routes",
		"channel_monitors",
		"channel_monitor_request_templates",
	}
	fingerprints := make(map[string]string, len(tables))
	for _, table := range tables {
		query := fmt.Sprintf(`
SELECT COUNT(*)::text || ':' || md5(COALESCE(string_agg(row_to_json(rows)::text, '|' ORDER BY id), ''))
FROM (SELECT * FROM %s) AS rows
`, table)
		var fingerprint string
		require.NoError(t, tx.QueryRowContext(ctx, query).Scan(&fingerprint))
		fingerprints[table] = fingerprint
	}
	return fingerprints
}

func requireConstraintRejectsUnknownPlatform(
	ctx context.Context,
	t *testing.T,
	tx *sql.Tx,
	table string,
	column string,
	id int,
) {
	t.Helper()
	_, err := tx.ExecContext(ctx, "SAVEPOINT reject_unknown_platform")
	require.NoError(t, err)
	query := fmt.Sprintf("INSERT INTO %s (id, %s, business_value) VALUES ($1, 'unknown-provider', 'rejected')", table, column)
	_, err = tx.ExecContext(ctx, query, id)
	require.Error(t, err)
	_, rollbackErr := tx.ExecContext(ctx, "ROLLBACK TO SAVEPOINT reject_unknown_platform")
	require.NoError(t, rollbackErr)
	_, err = tx.ExecContext(ctx, "RELEASE SAVEPOINT reject_unknown_platform")
	require.NoError(t, err)
}
