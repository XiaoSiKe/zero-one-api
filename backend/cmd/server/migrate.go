package main

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/repository"
)

// runMigrationsOnly deliberately avoids InitEnt and setup: both can initialize
// business state or secrets. The SQL runner is the sole migration authority.
func runMigrationsOnly() error {
	cfg, err := config.LoadForMigration()
	if err != nil {
		return fmt.Errorf("load database configuration: %w", err)
	}
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Minute)
	defer cancel()
	return migrateDatabase(ctx, cfg.Database.DSNWithTimezone(cfg.Timezone))
}

func migrateDatabase(ctx context.Context, dsn string) error {
	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return fmt.Errorf("open database: %w", err)
	}
	defer func() { _ = db.Close() }()
	if err := db.PingContext(ctx); err != nil {
		return fmt.Errorf("connect database: %w", err)
	}
	return repository.ApplyMigrations(ctx, db)
}
