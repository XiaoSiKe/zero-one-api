package migrations

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestPurgeUnlimitedUserPlatformQuotasMigration(t *testing.T) {
	content, err := FS.ReadFile("238_purge_unlimited_user_platform_quotas.sql")
	require.NoError(t, err)

	sql := strings.Join(strings.Fields(string(content)), " ")
	require.Equal(t, 1, strings.Count(sql, "DELETE FROM user_platform_quotas"))
	require.Contains(t, sql, "daily_limit_usd IS NULL")
	require.Contains(t, sql, "weekly_limit_usd IS NULL")
	require.Contains(t, sql, "monthly_limit_usd IS NULL")
	require.NotContains(t, sql, "IS NOT NULL")
	require.NotContains(t, sql, "TRUNCATE")
	require.NotContains(t, sql, "CASCADE")
}
