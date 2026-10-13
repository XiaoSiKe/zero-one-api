//go:build integration

package repository

import (
	"context"
	"fmt"
	"testing"

	dbmigrations "github.com/Wei-Shaw/sub2api/migrations"
	"github.com/stretchr/testify/require"
)

func TestMigration242PreservesPlatformRowsAndProbeConstraints(t *testing.T) {
	tx := testTx(t)
	ctx := context.Background()
	migration, err := dbmigrations.FS.ReadFile("242_drop_platform_check_constraints.sql")
	require.NoError(t, err)

	for _, populated := range []bool{false, true} {
		t.Run(fmt.Sprint(populated), func(t *testing.T) {
			schema := fmt.Sprintf("platform_catalog_242_%t", populated)
			_, err := tx.ExecContext(ctx, "CREATE SCHEMA "+schema)
			require.NoError(t, err)
			_, err = tx.ExecContext(ctx, "SET LOCAL search_path TO "+schema)
			require.NoError(t, err)
			createPreMiniMaxPlatformSchema(ctx, t, tx)
			if populated {
				seedPreMiniMaxPlatformRows(ctx, t, tx)
			}
			before := platformMigrationFingerprints(ctx, t, tx)
			for range 2 {
				_, err = tx.ExecContext(ctx, string(migration))
				require.NoError(t, err, "migration must be repeatable")
			}
			require.Equal(t, before, platformMigrationFingerprints(ctx, t, tx))

			for index, platform := range []string{"cline", "command_code"} {
				_, err = tx.ExecContext(ctx,
					"INSERT INTO user_platform_quotas (id, platform, business_value) VALUES ($1, $2, 'quota')",
					100+index, platform)
				require.NoError(t, err)
				_, err = tx.ExecContext(ctx,
					"INSERT INTO composite_model_routes (id, target_platform, business_value) VALUES ($1, $2, 'route')",
					200+index, platform)
				require.NoError(t, err)
			}
			for index, table := range []string{"channel_monitors", "channel_monitor_request_templates"} {
				requireConstraintRejectsUnknownPlatform(ctx, t, tx, table, "provider", 300+index)
				var count int
				err = tx.QueryRowContext(ctx,
					"SELECT count(*) FROM pg_constraint WHERE connamespace = $1::regnamespace AND conname = $2",
					schema, table+"_provider_check").Scan(&count)
				require.NoError(t, err)
				require.Equal(t, 1, count, "active probes retain their capability constraint")
			}
		})
	}
}
