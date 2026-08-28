//go:build integration

package repository

import (
	"context"
	"sync"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func TestAPIKeyLastUsedConcurrentArrivalsNeverMoveTimeBackwards(t *testing.T) {
	ctx := context.Background()
	client := testEntClient(t)
	repo := NewAPIKeyRepository(client, integrationDB)
	u, err := client.User.Create().SetEmail("last-used-" + time.Now().Format(time.RFC3339Nano) + "@test.com").
		SetPasswordHash("hash").SetStatus(service.StatusActive).SetRole(service.RoleUser).Save(ctx)
	require.NoError(t, err)
	key := &service.APIKey{UserID: u.ID, Key: "test-last-used-" + time.Now().Format(time.RFC3339Nano), Name: "metadata", Status: service.StatusActive}
	require.NoError(t, repo.Create(ctx, key))
	t.Cleanup(func() { _ = client.APIKey.DeleteOneID(key.ID).Exec(ctx); _ = client.User.DeleteOneID(u.ID).Exec(ctx) })
	latest := time.Now().UTC().Add(time.Hour).Truncate(time.Microsecond)
	require.NoError(t, repo.UpdateLastUsed(ctx, key.ID, latest))
	var wg sync.WaitGroup
	errs := make(chan error, 20)
	for i := 1; i <= cap(errs); i++ {
		wg.Add(1)
		go func(offset int) {
			defer wg.Done()
			errs <- repo.UpdateLastUsed(ctx, key.ID, latest.Add(-time.Duration(offset)*time.Second))
		}(i)
	}
	wg.Wait()
	close(errs)
	for err := range errs {
		require.NoError(t, err)
	}
	got, err := repo.GetByID(ctx, key.ID)
	require.NoError(t, err)
	require.WithinDuration(t, latest, *got.LastUsedAt, time.Microsecond)
	require.WithinDuration(t, latest, got.UpdatedAt, time.Microsecond)
	require.NoError(t, repo.Delete(ctx, key.ID))
	require.ErrorIs(t, repo.UpdateLastUsed(ctx, key.ID, latest.Add(time.Hour)), service.ErrAPIKeyNotFound)
}
