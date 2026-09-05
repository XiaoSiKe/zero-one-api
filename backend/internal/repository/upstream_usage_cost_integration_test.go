//go:build integration

package repository

import (
	"context"
	"github.com/Wei-Shaw/sub2api/internal/pkg/usagestats"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestUpstreamDeclaredCostPersistenceAndAggregation(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	client := tx.Client()
	repo := newUsageLogRepositoryWithSQL(client, tx)
	user := mustCreateUser(t, client, &service.User{Email: "declared-cost@test.com"})
	key := mustCreateApiKey(t, client, &service.APIKey{UserID: user.ID, Key: "sk-declared-cost", Name: "declared-cost"})
	account := mustCreateAccount(t, client, &service.Account{Name: "declared-cost"})
	now := time.Now().UTC()
	start, end := now.Add(-time.Hour), now.Add(time.Hour)
	local, declared := 1.0, 0.22
	log := &service.UsageLog{UserID: user.ID, APIKeyID: key.ID, AccountID: account.ID, RequestID: "declared-cost-known", Model: "gpt-5.5", TotalCost: 100, ActualCost: 39, AccountRateMultiplier: &local, UpstreamRateMultiplier: &declared, CreatedAt: now}
	_, err := repo.Create(ctx, log)
	require.NoError(t, err)
	got, err := repo.GetByID(ctx, log.ID)
	require.NoError(t, err)
	require.NotNil(t, got.UpstreamRateMultiplier)
	require.Equal(t, 0.22, *got.UpstreamRateMultiplier)
	require.Equal(t, 1.0, *got.AccountRateMultiplier)
	filters := usagestats.UsageLogFilters{AccountID: account.ID, StartTime: &start, EndTime: &end}
	stats, err := repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.NotNil(t, stats.TotalAccountCost)
	require.Equal(t, 22.0, *stats.TotalAccountCost)
	require.Equal(t, 39.0, stats.TotalActualCost)
	_, err = client.Account.UpdateOneID(account.ID).SetRateMultiplier(8).Save(ctx)
	require.NoError(t, err)
	stats, err = repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.Equal(t, 22.0, *stats.TotalAccountCost)
	// Explicit zero does not invalidate the scope.
	zero := 0.0
	free := *log
	free.ID = 0
	free.RequestID = "declared-cost-free"
	free.UpstreamRateMultiplier = &zero
	free.ActualCost = 0
	_, err = repo.Create(ctx, &free)
	require.NoError(t, err)
	stats, err = repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.Equal(t, 22.0, *stats.TotalAccountCost)
	// Legacy readers retain a non-null cost; new readers reject a stale declaration total.
	agg := newDashboardAggregationRepositoryWithSQL(tx)
	require.NoError(t, agg.AggregateRange(ctx, start, end))
	var legacyCost float64
	require.NoError(t, scanSingleRow(ctx, tx, "SELECT account_cost FROM usage_dashboard_daily LIMIT 1", nil, &legacyCost))
	require.Equal(t, 200.0, legacyCost)
	dashboard, err := repo.GetDashboardStats(ctx)
	require.NoError(t, err)
	require.Equal(t, 22.0, *dashboard.TotalAccountCost)
	_, err = tx.ExecContext(ctx, "UPDATE usage_dashboard_daily SET computed_at = computed_at + interval '1 second'")
	require.NoError(t, err)
	dashboard, err = repo.GetDashboardStats(ctx)
	require.NoError(t, err)
	require.Nil(t, dashboard.TotalAccountCost, "old writer must not leave a seemingly valid declaration total")
	// Legacy record remains untouched but makes a mixed total unconfirmed.
	legacy := *log
	legacy.ID = 0
	legacy.RequestID = "declared-cost-legacy"
	legacy.UpstreamRateMultiplier = nil
	_, err = repo.Create(ctx, &legacy)
	require.NoError(t, err)
	stats, err = repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.Nil(t, stats.TotalAccountCost)
	require.Equal(t, 78.0, stats.TotalActualCost)
	models, err := repo.GetModelStatsWithFilters(ctx, start, end, 0, 0, account.ID, 0, nil, nil, nil)
	require.NoError(t, err)
	require.Len(t, models, 1)
	require.Nil(t, models[0].AccountCost)
	require.Nil(t, models[0].ActualCost)
	window, err := repo.GetAccountWindowStats(ctx, account.ID, start)
	require.NoError(t, err)
	require.Nil(t, window.Cost)
	got, err = repo.GetByID(ctx, legacy.ID)
	require.NoError(t, err)
	require.Equal(t, 100.0, got.TotalCost)
	require.Equal(t, 39.0, got.ActualCost)
	require.Equal(t, 1.0, *got.AccountRateMultiplier)
	require.Nil(t, got.UpstreamRateMultiplier)
	history, err := repo.GetAccountUsageStats(ctx, account.ID, start, end)
	require.NoError(t, err)
	require.Nil(t, history.Summary.TotalCost)
	require.Nil(t, history.Summary.HighestCostDay)
	// The same missingness survives hourly -> daily rollups.
	require.NoError(t, agg.AggregateRange(ctx, start, end))
	dashboard, err = repo.GetDashboardStats(ctx)
	require.NoError(t, err)
	require.Nil(t, dashboard.TotalAccountCost)
}
