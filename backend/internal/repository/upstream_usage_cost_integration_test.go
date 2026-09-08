//go:build integration

package repository

import (
	"context"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/usagestats"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func TestNativeAccountCostIgnoresRetainedUpstreamDeclaration(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	client := tx.Client()
	repo := newUsageLogRepositoryWithSQL(client, tx)
	user := mustCreateUser(t, client, &service.User{Email: "declared-cost@test.com"})
	key := mustCreateApiKey(t, client, &service.APIKey{UserID: user.ID, Key: "sk-declared-cost", Name: "declared-cost"})
	account := mustCreateAccount(t, client, &service.Account{Name: "declared-cost"})
	now := time.Now().UTC()
	start, end := now.Add(-time.Hour), now.Add(time.Hour)
	accountRate, declared := 1.0, 0.22
	log := &service.UsageLog{UserID: user.ID, APIKeyID: key.ID, AccountID: account.ID, RequestID: "declared-cost-known", Model: "gpt-5.5", TotalCost: 100, ActualCost: 39, AccountRateMultiplier: &accountRate, UpstreamRateMultiplier: &declared, CreatedAt: now}
	_, err := repo.Create(ctx, log)
	require.NoError(t, err)
	got, err := repo.GetByID(ctx, log.ID)
	require.NoError(t, err)
	require.NotNil(t, got.UpstreamRateMultiplier)
	require.Equal(t, 0.22, *got.UpstreamRateMultiplier)
	require.Equal(t, accountRate, *got.AccountRateMultiplier)
	filters := usagestats.UsageLogFilters{AccountID: account.ID, StartTime: &start, EndTime: &end}
	stats, err := repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.NotNil(t, stats.TotalAccountCost)
	require.Equal(t, 100.0, *stats.TotalAccountCost)
	require.Equal(t, 39.0, stats.TotalActualCost)
	require.Equal(t, int64(1), stats.Finance.ConfirmedRequests)
	require.Zero(t, stats.Finance.UnconfirmedRequests)
	require.Equal(t, 39.0, stats.Finance.ConfirmedActualCost)
	require.Equal(t, 100.0, stats.Finance.ConfirmedAccountCost)
	require.Equal(t, -61.0, stats.Finance.ConfirmedProfit)
	_, err = client.Account.UpdateOneID(account.ID).SetRateMultiplier(8).Save(ctx)
	require.NoError(t, err)
	stats, err = repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.Equal(t, 100.0, *stats.TotalAccountCost)
	// A retained declaration of zero does not override the account rate saved on the bill.
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
	require.Equal(t, 200.0, *stats.TotalAccountCost)
	// Compatibility rollups carry the same native account cost.
	agg := newDashboardAggregationRepositoryWithSQL(tx)
	require.NoError(t, agg.AggregateRange(ctx, start, end))
	var legacyCost float64
	require.NoError(t, scanSingleRow(ctx, tx, "SELECT account_cost FROM usage_dashboard_daily LIMIT 1", nil, &legacyCost))
	require.Equal(t, 200.0, legacyCost)
	dashboard, err := repo.GetDashboardStats(ctx)
	require.NoError(t, err)
	require.Equal(t, 200.0, *dashboard.TotalAccountCost)
	_, err = tx.ExecContext(ctx, "UPDATE usage_dashboard_daily SET computed_at = computed_at + interval '1 second'")
	require.NoError(t, err)
	dashboard, err = repo.GetDashboardStats(ctx)
	require.NoError(t, err)
	require.Equal(t, 200.0, *dashboard.TotalAccountCost)
	// A missing retained declaration remains reportable from the historical account rate.
	legacy := *log
	legacy.ID = 0
	legacy.RequestID = "declared-cost-legacy"
	legacy.UpstreamRateMultiplier = nil
	_, err = repo.Create(ctx, &legacy)
	require.NoError(t, err)
	stats, err = repo.GetStatsWithFilters(ctx, filters)
	require.NoError(t, err)
	require.Equal(t, 300.0, *stats.TotalAccountCost)
	require.Equal(t, 78.0, stats.TotalActualCost)
	require.Equal(t, int64(3), stats.Finance.ConfirmedRequests)
	require.Zero(t, stats.Finance.UnconfirmedRequests)
	require.Equal(t, 78.0, stats.Finance.ConfirmedActualCost)
	require.Equal(t, 300.0, stats.Finance.ConfirmedAccountCost)
	require.Equal(t, -222.0, stats.Finance.ConfirmedProfit)
	models, err := repo.GetModelStatsWithFilters(ctx, start, end, 0, 0, account.ID, 0, nil, nil, nil)
	require.NoError(t, err)
	require.Len(t, models, 1)
	require.Equal(t, 300.0, *models[0].AccountCost)
	require.Equal(t, 300.0, *models[0].ActualCost)
	window, err := repo.GetAccountWindowStats(ctx, account.ID, start)
	require.NoError(t, err)
	require.Equal(t, 300.0, *window.Cost)
	got, err = repo.GetByID(ctx, legacy.ID)
	require.NoError(t, err)
	require.Equal(t, 100.0, got.TotalCost)
	require.Equal(t, 39.0, got.ActualCost)
	require.Equal(t, accountRate, *got.AccountRateMultiplier)
	require.Nil(t, got.UpstreamRateMultiplier)
	history, err := repo.GetAccountUsageStats(ctx, account.ID, start, end)
	require.NoError(t, err)
	require.Equal(t, 300.0, *history.Summary.TotalCost)
	require.NotNil(t, history.Summary.HighestCostDay)
	// The same native account cost survives hourly -> daily rollups.
	require.NoError(t, agg.AggregateRange(ctx, start, end))
	dashboard, err = repo.GetDashboardStats(ctx)
	require.NoError(t, err)
	require.Equal(t, 300.0, *dashboard.TotalAccountCost)
}
