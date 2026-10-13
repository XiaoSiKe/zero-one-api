package service

import (
	"github.com/Wei-Shaw/sub2api/internal/pkg/usagestats"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestDeclaredUsageRate(t *testing.T) {
	now := time.Date(2026, 9, 5, 4, 0, 0, 0, time.UTC)
	mode := string(BillingModeToken)
	local := 1.0
	account := &Account{Type: AccountTypeAPIKey, Platform: PlatformOpenAI, RateMultiplier: &local}
	snapshot := func(rate float64) *UpstreamBillingProbeSnapshot {
		received, fresh := now.Add(-time.Minute), now.Add(time.Minute)
		return &UpstreamBillingProbeSnapshot{Status: UpstreamBillingProbeStatusOK, ReceivedAt: &received, FreshUntil: &fresh, Data: map[string]any{"billing_scope": "token", "resolved_rate_multiplier": rate, "peak_rate_enabled": false}}
	}
	log := &UsageLog{BillingMode: &mode}
	require.Nil(t, declaredUsageRate(account, log, now), "missing declaration must not use local 1x")
	account.Extra = map[string]any{UpstreamBillingProbeExtraKey: snapshot(0.22), UpstreamBillingRateSyncEnabledExtraKey: false}
	require.Equal(t, 0.22, *declaredUsageRate(account, log, now), "sync off does not override declared cost")
	account.Extra[UpstreamBillingProbeExtraKey] = snapshot(0)
	require.Equal(t, 0.0, *declaredUsageRate(account, log, now), "zero is confirmed free, not unknown")
	account.Extra[UpstreamBillingProbeExtraKey] = snapshot(0.220012345)
	require.Equal(t, 0.220012345, *declaredUsageRate(account, log, now), "do not round to local account DECIMAL(10,4)")
	require.Equal(t, 0.220012345, *declaredUsageRate(account, log, now.Add(2*time.Minute)), "reporting keeps the last successful declaration after scheduler freshness expires")
	require.False(t, func() bool { _, ok := freshUpstreamBillingRate(account, now.Add(2*time.Minute)); return ok }(), "scheduler freshness remains independent")
	require.Nil(t, declaredUsageRate(account, log, now.Add(-2*time.Minute)), "future observation cannot prove old cost")
	peak := snapshot(0.22)
	peak.Data["peak_rate_enabled"] = true
	peak.Data["peak_start"] = "11:00"
	peak.Data["peak_end"] = "13:00"
	peak.Data["timezone"] = "Asia/Shanghai"
	peak.Data["peak_rate_multiplier"] = 1.5
	account.Extra[UpstreamBillingProbeExtraKey] = peak
	require.InDelta(t, 0.33, *declaredUsageRate(account, log, now), 1e-12)
	peak.Status = UpstreamBillingProbeStatusFailed
	require.InDelta(t, 0.33, *declaredUsageRate(account, log, now), 1e-12, "unexpired last good observation survives transient failure")
	imageMode := string(BillingModeImage)
	require.Nil(t, declaredUsageRate(account, &UsageLog{BillingMode: &imageMode}, now), "token declaration cannot be invented for image billing")
}

func TestCacheStorageBillingScope(t *testing.T) {
	at := time.Date(2026, 9, 5, 4, 0, 0, 0, time.UTC)
	received := at.Add(-time.Minute)
	fresh := at.Add(time.Minute)
	account := &Account{Type: AccountTypeAPIKey, Platform: PlatformOpenAI, Extra: map[string]any{
		UpstreamBillingProbeExtraKey: &UpstreamBillingProbeSnapshot{Status: UpstreamBillingProbeStatusOK, ReceivedAt: &received, FreshUntil: &fresh, Data: map[string]any{"billing_scope": "token", "resolved_rate_multiplier": 0.22, "peak_rate_enabled": false}},
	}}
	tokenMode := string(BillingModeToken)
	tokenRate := declaredUsageRate(account, &UsageLog{BillingMode: &tokenMode}, at)
	require.NotNil(t, tokenRate)
	require.Equal(t, 0.22, *tokenRate)
	for _, inputTokens := range []int{0, 1000} {
		result := &ForwardResult{CacheStorageTokenHours: 1000, Usage: ClaudeUsage{InputTokens: inputTokens}}
		cost := &CostBreakdown{BillingMode: "token", TotalCost: 0.1, ActualCost: 0.039}
		mode := resolveBillingMode(result, cost)
		require.Equal(t, "cache_storage", *mode, "token-only declaration cannot price token-hour storage or a mixed charge")
		frozen := declaredUsageRate(account, &UsageLog{BillingMode: mode}, at)
		require.Nil(t, frozen)
		amount, status := usagestats.ResolveAccountCost(cost.TotalCost, nil, frozen, mode)
		require.Nil(t, amount)
		require.Equal(t, usagestats.AccountCostUnsupportedBillingScope, status)
		require.Equal(t, 0.039, cost.ActualCost, "reporting scope cannot change the customer debit")
	}
}
