package migrations

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestChannelMonitorV2TaxonomyMigrationRestartsGentleBackfill(t *testing.T) {
	content, err := FS.ReadFile("235_channel_monitor_v2_taxonomy_v2_backfill.sql")
	require.NoError(t, err)
	sql := strings.Join(strings.Fields(string(content)), " ")
	require.Contains(t, sql, "UPDATE channel_monitor_v2_watermarks")
	require.Contains(t, sql, "backfill_cursor")
	require.Contains(t, sql, "error_coverage_start")
	require.NotContains(t, sql, "usage_logs")
	require.NotContains(t, sql, "ops_error_logs")
}
