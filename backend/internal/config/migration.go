package config

import (
	"fmt"
	"os"
	"strings"

	"github.com/spf13/viper"
)

const defaultTimezone = "Asia/Shanghai"

// MigrationConfig is deliberately narrower than Config: loading a migration
// must not generate credentials or initialize unrelated application settings.
type MigrationConfig struct {
	Database DatabaseConfig `mapstructure:"database"`
	Timezone string         `mapstructure:"timezone"`
}

func LoadForMigration() (*MigrationConfig, error) {
	v := viper.New()
	v.SetConfigName("config")
	v.SetConfigType("yaml")
	configureConfigSource(v.SetConfigFile, v.AddConfigPath)
	v.AutomaticEnv()
	v.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
	setDatabaseDefaults(v.SetDefault)
	v.SetDefault("timezone", defaultTimezone)
	if tz := strings.TrimSpace(os.Getenv("TZ")); tz != "" {
		v.Set("timezone", tz)
	}
	if err := v.ReadInConfig(); err != nil {
		if _, absent := err.(viper.ConfigFileNotFoundError); !absent {
			return nil, fmt.Errorf("read migration configuration: %w", err)
		}
	}
	var cfg MigrationConfig
	if err := v.Unmarshal(&cfg); err != nil {
		return nil, fmt.Errorf("decode database configuration: %w", err)
	}
	return &cfg, nil
}

// Keep defaults shared with normal application startup, including all database
// keys needed for Viper's environment-only decoding.
func setDatabaseDefaults(setDefault func(string, any)) {
	setDefault("database.host", "localhost")
	setDefault("database.port", 5432)
	setDefault("database.user", "postgres")
	setDefault("database.password", "postgres")
	setDefault("database.dbname", "sub2api")
	setDefault("database.sslmode", "prefer")
	setDefault("database.max_open_conns", 256)
	setDefault("database.max_idle_conns", 128)
	setDefault("database.conn_max_lifetime_minutes", 30)
	setDefault("database.conn_max_idle_time_minutes", 5)
	setDefault("database.user_platform_quota_flusher_enabled", false)
	setDefault("database.user_platform_quota_flush_interval_ms", 2000)
	setDefault("database.user_platform_quota_flush_batch_size", 1000)
}
