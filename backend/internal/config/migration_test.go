package config

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestLoadForMigrationOnlyReadsDatabaseConfiguration(t *testing.T) {
	resetViperWithJWTSecret(t)
	t.Setenv("JWT_SECRET", "")
	t.Setenv("TOTP_ENCRYPTION_KEY", "")
	t.Setenv("GATEWAY_FORCED_CODEX_INSTRUCTIONS_TEMPLATE_FILE", "/missing/application-only-template")
	t.Setenv("OIDC_CONNECT_ENABLED", "true")
	t.Setenv("OIDC_CONNECT_CLIENT_ID", "")
	t.Setenv("DATABASE_HOST", "migration-db")
	t.Setenv("DATABASE_PORT", "6543")
	t.Setenv("DATABASE_PASSWORD", "migration-password")
	t.Setenv("TZ", "UTC")
	cfg, err := LoadForMigration()
	require.NoError(t, err, "unrelated application configuration must not block migration")
	require.Equal(t, "migration-db", cfg.Database.Host)
	require.Equal(t, 6543, cfg.Database.Port)
	require.Equal(t, "migration-password", cfg.Database.Password)
	require.Equal(t, "UTC", cfg.Timezone)
}

func TestLoadForMigrationKeepsFileAndEnvironmentPrecedence(t *testing.T) {
	resetViperWithJWTSecret(t)
	path := filepath.Join(t.TempDir(), "config.yaml")
	require.NoError(t, os.WriteFile(path, []byte("database:\n  host: file-host\n  user: file-user\n  dbname: file-db\ntimezone: Asia/Tokyo\n"), 0600))
	t.Setenv("CONFIG_FILE", path)
	t.Setenv("DATABASE_HOST", "env-host")
	t.Setenv("TZ", "UTC")
	cfg, err := LoadForMigration()
	require.NoError(t, err)
	require.Equal(t, "env-host", cfg.Database.Host)
	require.Equal(t, "file-user", cfg.Database.User)
	require.Equal(t, "file-db", cfg.Database.DBName)
	require.Equal(t, "UTC", cfg.Timezone)
	unchanged, err := os.ReadFile(path)
	require.NoError(t, err)
	require.NotContains(t, string(unchanged), "secret")
	require.NotContains(t, string(unchanged), "encryption")
}
