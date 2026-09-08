package migrations

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestGroupModelAllowlistCompatibilityMigration(t *testing.T) {
	content, err := FS.ReadFile("237_group_model_allowlist_compat.sql")
	require.NoError(t, err)
	sql := strings.Join(strings.Fields(string(content)), " ")

	require.Contains(t, sql, "ADD COLUMN IF NOT EXISTS models_list_config JSONB NOT NULL DEFAULT '{}'::jsonb")
	require.Contains(t, sql, "SET models_list_config = model_allowlist")
	require.Contains(t, sql, "BEFORE INSERT OR UPDATE OF model_allowlist, models_list_config ON groups")
	require.Contains(t, sql, "NEW.models_list_config := NEW.model_allowlist")
	require.Contains(t, sql, "NEW.model_allowlist := NEW.models_list_config")
	require.Contains(t, sql, "conflicting model_allowlist and models_list_config values")
}
