//go:build unit

package service

import (
	"context"
	"github.com/stretchr/testify/require"
	"testing"
	"time"
)

func TestRecordUsageFreezesDeclaredRate(t *testing.T) {
	at := time.Date(2026, 9, 5, 4, 0, 0, 0, time.UTC)
	received, fresh := at.Add(-time.Minute), at.Add(time.Minute)
	local := 1.0
	account := &Account{ID: 3000, Platform: PlatformOpenAI, Type: AccountTypeAPIKey, RateMultiplier: &local, Extra: map[string]any{
		UpstreamBillingRateSyncEnabledExtraKey: false,
		UpstreamBillingProbeExtraKey:           &UpstreamBillingProbeSnapshot{Status: UpstreamBillingProbeStatusOK, ReceivedAt: &received, FreshUntil: &fresh, Data: map[string]any{"billing_scope": "token", "resolved_rate_multiplier": 0.22, "peak_rate_enabled": false}},
	}}
	for _, platform := range []string{PlatformOpenAI, PlatformAnthropic} {
		t.Run(platform, func(t *testing.T) {
			account.Platform = platform
			repo := &openAIRecordUsageLogRepoStub{inserted: true}
			userRepo := &openAIRecordUsageUserRepoStub{}
			groupID := int64(1001)
			key := &APIKey{ID: 1000, GroupID: &groupID, Group: &Group{RateMultiplier: 0.39}}
			var err error
			if platform == PlatformOpenAI {
				svc := newOpenAIRecordUsageServiceForTest(repo, userRepo, &openAIRecordUsageSubRepoStub{}, nil)
				err = svc.RecordUsage(context.Background(), &OpenAIRecordUsageInput{PricingAt: at, Result: &OpenAIForwardResult{RequestID: "declared-openai", Model: "gpt-5.1", Usage: OpenAIUsage{InputTokens: 1000, OutputTokens: 100}, Duration: time.Second}, APIKey: key, User: &User{ID: 2000}, Account: account})
			} else {
				svc := newGatewayRecordUsageServiceForTest(repo, userRepo, &openAIRecordUsageSubRepoStub{})
				err = svc.RecordUsage(context.Background(), &RecordUsageInput{PricingAt: at, Result: &ForwardResult{RequestID: "declared-anthropic", Model: "claude-sonnet-4", Usage: ClaudeUsage{InputTokens: 1000, OutputTokens: 100}, Duration: time.Second}, APIKey: key, User: &User{ID: 2000}, Account: account})
			}
			require.NoError(t, err)
			require.NotNil(t, repo.lastLog)
			require.NotNil(t, repo.lastLog.UpstreamRateMultiplier)
			require.Equal(t, 0.22, *repo.lastLog.UpstreamRateMultiplier)
			require.Equal(t, 1.0, *repo.lastLog.AccountRateMultiplier, "preserve local accounting metadata")
			require.InDelta(t, repo.lastLog.TotalCost*0.39, repo.lastLog.ActualCost, 1e-12, "customer debits stay unchanged")
			replacement := 8.0
			account.RateMultiplier = &replacement
			require.Equal(t, 0.22, *repo.lastLog.UpstreamRateMultiplier, "stored declaration is not a live pointer")
			account.RateMultiplier = &local
		})
	}
}
