package migrations

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestMigration229AddsSafeManualAffiliateBindingMetadata(t *testing.T) {
	content, err := FS.ReadFile("229_affiliate_manual_binding.sql")
	require.NoError(t, err)

	sql := string(content)
	require.Contains(t, sql, "ADD COLUMN IF NOT EXISTS inviter_bound_at TIMESTAMPTZ")
	require.Contains(t, sql, "ADD COLUMN IF NOT EXISTS inviter_bound_by_admin_id BIGINT")
	require.Contains(t, sql, "SET inviter_bound_at = created_at")
	require.Contains(t, sql, "WHERE inviter_id IS NOT NULL")
	require.NotContains(t, sql, "FOREIGN KEY (inviter_bound_by_admin_id)")
	require.Contains(t, sql, "immutable audit actor snapshot")
	require.Contains(t, sql, "CHECK (inviter_id IS NULL OR inviter_id <> user_id)")
	require.Contains(t, sql, "NOT VALID")
}
