package service

import (
	"context"
	"encoding/json"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestAPIKeyAuthSnapshotGroupPricingRoundTrip(t *testing.T) {
	groupID := int64(42)
	inputPrice := 4.0
	outputPrice := 12.0
	cacheWrite1hPrice := 6.0
	intervalCacheWrite1hPrice := 7.0
	maxTokens := 400_000
	apiKey := &APIKey{
		ID:      7,
		UserID:  9,
		GroupID: &groupID,
		Key:     "sk-group-pricing-roundtrip",
		Status:  StatusActive,
		User: &User{
			ID:     9,
			Status: StatusActive,
			Role:   RoleUser,
		},
		Group: &Group{
			ID:                        groupID,
			Name:                      "grok-long-context",
			Platform:                  PlatformGrok,
			Status:                    StatusActive,
			LongContextPricingEnabled: true,
			ModelPricing: []ChannelModelPricing{
				{
					Platform:          PlatformGrok,
					Models:            []string{"grok-4.6"},
					BillingMode:       BillingModeToken,
					CacheWrite1hPrice: &cacheWrite1hPrice,
					Intervals: []PricingInterval{
						{
							MinTokens:         200_000,
							MaxTokens:         &maxTokens,
							TierLabel:         "long-context",
							InputPrice:        &inputPrice,
							OutputPrice:       &outputPrice,
							CacheWrite1hPrice: &intervalCacheWrite1hPrice,
						},
					},
				},
			},
		},
	}
	svc := &APIKeyService{}

	snapshot := svc.snapshotFromAPIKey(context.Background(), apiKey)
	require.NotNil(t, snapshot)
	require.Equal(t, 22, snapshot.Version, "v22 invalidates snapshots that predate Fast and reasoning policies")
	require.NotNil(t, snapshot.Group)
	require.True(t, snapshot.Group.LongContextPricingEnabled)
	require.Len(t, snapshot.Group.ModelPricing, 1)

	// The in-process L1 entry must not alias mutable request/repository slices.
	apiKey.Group.ModelPricing[0].Models[0] = "mutated-source"
	*apiKey.Group.ModelPricing[0].CacheWrite1hPrice = 998
	apiKey.Group.ModelPricing[0].Intervals[0].TierLabel = "mutated-source"
	*apiKey.Group.ModelPricing[0].Intervals[0].InputPrice = 999
	*apiKey.Group.ModelPricing[0].Intervals[0].CacheWrite1hPrice = 997
	require.Equal(t, "grok-4.6", snapshot.Group.ModelPricing[0].Models[0])
	require.InDelta(t, 6.0, *snapshot.Group.ModelPricing[0].CacheWrite1hPrice, 1e-12)
	require.Equal(t, "long-context", snapshot.Group.ModelPricing[0].Intervals[0].TierLabel)
	require.InDelta(t, 4.0, *snapshot.Group.ModelPricing[0].Intervals[0].InputPrice, 1e-12)
	require.InDelta(t, 7.0, *snapshot.Group.ModelPricing[0].Intervals[0].CacheWrite1hPrice, 1e-12)

	payload, err := json.Marshal(&APIKeyAuthCacheEntry{Snapshot: snapshot})
	require.NoError(t, err)
	var restored APIKeyAuthCacheEntry
	require.NoError(t, json.Unmarshal(payload, &restored))

	materialized, used, err := svc.applyAuthCacheEntry(apiKey.Key, &restored)
	require.NoError(t, err)
	require.True(t, used)
	require.NotNil(t, materialized)
	require.NotNil(t, materialized.Group)
	require.True(t, materialized.Group.Hydrated)
	require.True(t, materialized.Group.LongContextPricingEnabled)
	require.Equal(t, snapshot.Group.ModelPricing, materialized.Group.ModelPricing)

	// Materializing the request object must not mutate the shared cache entry.
	materialized.Group.ModelPricing[0].Models[0] = "mutated-request"
	*materialized.Group.ModelPricing[0].CacheWrite1hPrice = 776
	*materialized.Group.ModelPricing[0].Intervals[0].OutputPrice = 777
	*materialized.Group.ModelPricing[0].Intervals[0].CacheWrite1hPrice = 775
	require.Equal(t, "grok-4.6", restored.Snapshot.Group.ModelPricing[0].Models[0])
	require.InDelta(t, 6.0, *restored.Snapshot.Group.ModelPricing[0].CacheWrite1hPrice, 1e-12)
	require.InDelta(t, 12.0, *restored.Snapshot.Group.ModelPricing[0].Intervals[0].OutputPrice, 1e-12)
	require.InDelta(t, 7.0, *restored.Snapshot.Group.ModelPricing[0].Intervals[0].CacheWrite1hPrice, 1e-12)
}

func TestAPIKeyAuthSnapshotRejectsV19BeforeGroupPricing(t *testing.T) {
	svc := &APIKeyService{}
	snapshot := &APIKeyAuthSnapshot{Version: 19}

	materialized, used, err := svc.applyAuthCacheEntry(
		"sk-stale-v19",
		&APIKeyAuthCacheEntry{Snapshot: snapshot},
	)

	require.NoError(t, err)
	require.False(t, used, "v19 snapshots omit group pricing and must be rebuilt from the repository")
	require.Nil(t, materialized)
}
