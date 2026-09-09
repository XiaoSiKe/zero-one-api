package migrations

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestMiniMaxPlatformMigration(t *testing.T) {
	content, err := FS.ReadFile("237_add_minimax_platform.sql")
	require.NoError(t, err)

	sql := strings.Join(strings.Fields(string(content)), " ")
	require.Contains(t, sql,
		"CHECK (platform IN ('anthropic', 'openai', 'gemini', 'antigravity', 'grok', 'kimi', 'zhipu', 'deepseek', 'minimax'))")
	require.Contains(t, sql,
		"CHECK (target_platform IN ('anthropic', 'openai', 'gemini', 'antigravity', 'grok', 'kimi', 'zhipu', 'deepseek', 'minimax'))")
	require.Contains(t, sql,
		"CHECK (provider IN ('openai', 'anthropic', 'gemini', 'grok', 'antigravity', 'kimi', 'zhipu', 'deepseek', 'minimax'))")
	require.Equal(t, 2, strings.Count(sql, "n.nspname = current_schema()"),
		"constraint inspection must stay inside the database's active migration schema")
}
