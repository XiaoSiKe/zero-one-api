//go:build integration

package repository

// 投影漏列回归（repository 半程）：真实 PostgreSQL 上认证专用
// 查询 GetByKeyForAuth 的分组显式投影必须携带利润控制与计费字段。该查询是
// 认证快照（进而是利润门 enable 判定）的唯一数据来源，漏选任何快照分组字段
// 都会让对应功能在真实流量上静默失效。新增快照分组字段时必须同步扩展
// GetByKeyForAuth 的 WithGroup Select 并在本测试补断言。

import (
	"context"
	"encoding/json"
	"fmt"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func TestGetByKeyForAuthCarriesProfitControlProjection(t *testing.T) {
	ctx := context.Background()
	suffix := time.Now().UnixNano()
	groupInputPrice := 2.5e-6
	group := mustCreateGroup(t, integrationEntClient, &service.Group{
		Name:                 fmt.Sprintf("profit-proj-group-%d", suffix),
		Platform:             service.PlatformOpenAI,
		RateMultiplier:       0.06,
		ProfitControlEnabled: true,
		ProfitMinMargin:      0.2,
		ProfitSafetyBuffer:   0.05,
		RequirePrivacySet:    true,
	})
	modelPricing := []service.ChannelModelPricing{{
		Platform:    service.PlatformOpenAI,
		Models:      []string{"gpt-5.4"},
		BillingMode: service.BillingModeToken,
		InputPrice:  &groupInputPrice,
	}}
	modelPricingJSON, err := json.Marshal(modelPricing)
	require.NoError(t, err)
	_, err = integrationDB.ExecContext(ctx, `
UPDATE groups
SET long_context_pricing_enabled = TRUE,
    model_pricing = $2::jsonb
WHERE id = $1
`, group.ID, string(modelPricingJSON))
	require.NoError(t, err)
	user := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("profit-proj-%d@example.com", suffix), Concurrency: 5,
	})
	groupID := group.ID
	keyValue := fmt.Sprintf("sk-profit-proj-%d", suffix)
	apiKeyRepo := NewAPIKeyRepository(integrationEntClient, integrationDB)
	key := &service.APIKey{UserID: user.ID, GroupID: &groupID, Key: keyValue, Name: "profit-proj", Status: service.StatusActive}
	require.NoError(t, apiKeyRepo.Create(ctx, key))
	t.Cleanup(func() {
		_, err := integrationDB.ExecContext(ctx, "DELETE FROM auth_cache_invalidation_outbox WHERE cache_key = encode(sha256(convert_to($1, 'UTF8')), 'hex')", keyValue)
		require.NoError(t, err)
		_, err = integrationDB.ExecContext(ctx, "DELETE FROM api_keys WHERE id = $1", key.ID)
		require.NoError(t, err)
		_, err = integrationDB.ExecContext(ctx, "DELETE FROM users WHERE id = $1", user.ID)
		require.NoError(t, err)
		_, err = integrationDB.ExecContext(ctx, "DELETE FROM groups WHERE id = $1", group.ID)
		require.NoError(t, err)
	})

	got, err := apiKeyRepo.GetByKeyForAuth(ctx, keyValue)
	require.NoError(t, err)
	require.NotNil(t, got.Group, "认证查询必须带出分组")

	require.Equal(t, service.PlatformOpenAI, got.Group.Platform)
	require.InDelta(t, 0.06, got.Group.RateMultiplier, 1e-9)
	require.True(t, got.Group.ProfitControlEnabled, "profit_control_enabled 必须进入认证投影（投影漏列会让门静默失效）")
	require.InDelta(t, 0.2, got.Group.ProfitMinMargin, 1e-9)
	require.InDelta(t, 0.05, got.Group.ProfitSafetyBuffer, 1e-9)
	require.True(t, got.Group.LongContextPricingEnabled, "long-context gate 必须进入认证投影")
	require.Len(t, got.Group.ModelPricing, 1, "group model pricing 必须进入认证投影")
	require.Equal(t, []string{"gpt-5.4"}, got.Group.ModelPricing[0].Models)
	require.InDelta(t, groupInputPrice, *got.Group.ModelPricing[0].InputPrice, 1e-12)
	// OpenAI 选号从认证分组读取隐私门，漏列会放行未设置隐私的账号。
	require.True(t, got.Group.RequirePrivacySet, "require_privacy_set 必须进入认证投影")
}
