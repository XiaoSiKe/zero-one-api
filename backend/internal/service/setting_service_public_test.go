//go:build unit

package service

import (
	"context"
	"encoding/json"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/stretchr/testify/require"
)

type settingPublicRepoStub struct {
	values        map[string]string
	err           error
	requestedKeys []string
}

func (s *settingPublicRepoStub) Get(ctx context.Context, key string) (*Setting, error) {
	panic("unexpected Get call")
}

func (s *settingPublicRepoStub) GetValue(ctx context.Context, key string) (string, error) {
	panic("unexpected GetValue call")
}

func (s *settingPublicRepoStub) Set(ctx context.Context, key, value string) error {
	panic("unexpected Set call")
}

func (s *settingPublicRepoStub) GetMultiple(ctx context.Context, keys []string) (map[string]string, error) {
	s.requestedKeys = append([]string(nil), keys...)
	if s.err != nil {
		return nil, s.err
	}
	out := make(map[string]string, len(keys))
	for _, key := range keys {
		if value, ok := s.values[key]; ok {
			out[key] = value
		}
	}
	return out, nil
}

func (s *settingPublicRepoStub) SetMultiple(ctx context.Context, settings map[string]string) error {
	panic("unexpected SetMultiple call")
}

func (s *settingPublicRepoStub) GetAll(ctx context.Context) (map[string]string, error) {
	panic("unexpected GetAll call")
}

func (s *settingPublicRepoStub) Delete(ctx context.Context, key string) error {
	panic("unexpected Delete call")
}

func TestSettingService_GetPublicSettings_ExposesRegistrationEmailSuffixWhitelist(t *testing.T) {
	repo := &settingPublicRepoStub{
		values: map[string]string{
			SettingKeyRegistrationEnabled:              "true",
			SettingKeyEmailVerifyEnabled:               "true",
			SettingKeyRegistrationEmailSuffixWhitelist: `["@EXAMPLE.com"," @foo.bar ","*.EDU.CN","@invalid_domain",""]`,
		},
	}
	svc := NewSettingService(repo, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.Equal(t, []string{"@example.com", "@foo.bar", "*.edu.cn"}, settings.RegistrationEmailSuffixWhitelist)
}

func TestSettingService_GetPublicSettings_ExposesTablePreferences(t *testing.T) {
	repo := &settingPublicRepoStub{
		values: map[string]string{
			SettingKeyTableDefaultPageSize: "50",
			SettingKeyTablePageSizeOptions: "[20,50,100]",
		},
	}
	svc := NewSettingService(repo, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.Equal(t, 50, settings.TableDefaultPageSize)
	require.Equal(t, []int{20, 50, 100}, settings.TablePageSizeOptions)
}

func TestSettingService_GetPublicSettings_ExposesCompactHomeEnabled(t *testing.T) {
	repo := &settingPublicRepoStub{
		values: map[string]string{
			SettingKeyCompactHomeEnabled: "true",
		},
	}
	svc := NewSettingService(repo, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())

	require.NoError(t, err)
	require.True(t, settings.CompactHomeEnabled)

	missingSettings, err := NewSettingService(&settingPublicRepoStub{values: map[string]string{}}, &config.Config{}).
		GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.False(t, missingSettings.CompactHomeEnabled)
}

func TestSettingService_ChannelMonitorHideThroughputDefaultsToPrivate(t *testing.T) {
	missing := NewSettingService(&settingPublicRepoStub{values: map[string]string{}}, &config.Config{}).GetChannelMonitorRuntime(context.Background())
	require.True(t, missing.HideThroughput)
	public, err := NewSettingService(&settingPublicRepoStub{values: map[string]string{}}, &config.Config{}).GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.True(t, public.ChannelMonitorHideThroughput)

	for _, value := range []string{"false", "0", "off", "disabled"} {
		runtime := NewSettingService(&settingPublicRepoStub{values: map[string]string{
			SettingKeyChannelMonitorHideThroughput: value,
		}}, &config.Config{}).GetChannelMonitorRuntime(context.Background())
		require.False(t, runtime.HideThroughput, "value=%q", value)
	}
}

func TestSettingService_ChannelMonitorShowQuotaFailsClosed(t *testing.T) {
	// 缺省（迁移插入 'false' / 老库无行）一律不展示。
	missingRuntime := NewSettingService(&settingPublicRepoStub{values: map[string]string{}}, &config.Config{}).GetChannelMonitorRuntime(context.Background())
	require.False(t, missingRuntime.ShowQuota)
	missingPublic, err := NewSettingService(&settingPublicRepoStub{values: map[string]string{}}, &config.Config{}).
		GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.False(t, missingPublic.ChannelMonitorShowQuota)

	// 仅字面 "true" 视为开启；其余值（含异常值）fail-closed。
	runtime := NewSettingService(&settingPublicRepoStub{values: map[string]string{
		SettingKeyChannelMonitorShowQuota: "true",
	}}, &config.Config{}).GetChannelMonitorRuntime(context.Background())
	require.True(t, runtime.ShowQuota)

	for _, value := range []string{"false", "TRUE", "1", "yes", "on", "garbage"} {
		rt := NewSettingService(&settingPublicRepoStub{values: map[string]string{
			SettingKeyChannelMonitorShowQuota: value,
		}}, &config.Config{}).GetChannelMonitorRuntime(context.Background())
		require.False(t, rt.ShowQuota, "value=%q", value)
	}
}

func TestSettingService_GetPublicSettings_ExposesForceEmailOnThirdPartySignup(t *testing.T) {
	repo := &settingPublicRepoStub{
		values: map[string]string{
			SettingKeyForceEmailOnThirdPartySignup: "true",
		},
	}
	svc := NewSettingService(repo, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.True(t, settings.ForceEmailOnThirdPartySignup)
}

func TestParsePublicCustomMenuItemsIncludesUserAndAll(t *testing.T) {
	raw := `[
		{"id":"user-help","visibility":"user"},
		{"id":"shared-help","visibility":"all"},
		{"id":"admin-help","visibility":"admin"},
		{"id":"invalid-help","visibility":"guest"}
	]`

	items := filterPublicCustomMenuItems(parseNavigationCustomMenuItems(raw))
	require.Len(t, items, 2)
	require.Equal(t, []string{"user-help", "shared-help"}, []string{items[0].ID, items[1].ID})
	require.Equal(t, []string{"user", "all"}, []string{items[0].Visibility, items[1].Visibility})
}

func TestParsePublicCustomMenuItemsKeepsQRMetadataButNeverImageBytes(t *testing.T) {
	image := validCommunityQRPNG()
	raw := `[{"id":"support","label":"售后支持","visibility":"all","placement":"header","navigation_type":"qr","qr_description":"扫码联系售后","qr_image":"` + image + `"}]`

	items := filterPublicCustomMenuItems(parseNavigationCustomMenuItems(raw))
	require.Len(t, items, 1)
	require.Equal(t, "qr", items[0].NavType)
	require.Equal(t, "扫码联系售后", items[0].QRDesc)
	encoded, err := json.Marshal(items)
	require.NoError(t, err)
	require.NotContains(t, string(encoded), "qr_image")
	require.NotContains(t, string(encoded), image)
}

func TestLegacyImageTutorialProjectsAsCustomMenuWithoutReplacingIntegrationGuide(t *testing.T) {
	repo := &settingPublicRepoStub{values: map[string]string{
		SettingKeyCustomMenuItems: `[{
			"id":"integration-guide","label":"接入教程","url":"https://docs.example.com/integration",
			"visibility":"user","placement":"sidebar","sort_order":0
		}]`,
		SettingKeyLegacyImageTutorialURL: "https://docs.example.com/image-generation",
		SettingKeyUserSidebarOrder:       `["/keys","/image-tutorial"]`,
		SettingKeyAdminSidebarOrder:      `["/admin/dashboard"]`,
	}}
	svc := NewSettingService(repo, &config.Config{})

	publicSettings, err := svc.GetPublicSettingsProjection(context.Background())
	require.NoError(t, err)
	require.Len(t, publicSettings.CustomMenuItems, 2)
	require.Equal(t, "integration-guide", publicSettings.CustomMenuItems[0].ID)
	require.Equal(t, PublicCustomMenuItem{
		ID:         "image-tutorial",
		Label:      "生图教程",
		URL:        "https://docs.example.com/image-generation",
		Visibility: "all",
		Placement:  "sidebar",
		SortOrder:  1,
	}, publicSettings.CustomMenuItems[1])
	require.Equal(t, []string{"/keys", "/custom/image-tutorial"}, publicSettings.UserSidebarOrder)
	require.Equal(t, []string{"/admin/dashboard", "/custom/image-tutorial"}, publicSettings.AdminSidebarOrder)

	adminNavigation, err := svc.GetAdminNavigationSettings(context.Background())
	require.NoError(t, err)
	require.Equal(t, publicSettings.CustomMenuItems, adminNavigation.CustomMenuItems)
	require.Equal(t, publicSettings.UserSidebarOrder, adminNavigation.UserSidebarOrder)
	require.Equal(t, publicSettings.AdminSidebarOrder, adminNavigation.AdminSidebarOrder)

	encoded, err := json.Marshal(publicSettings)
	require.NoError(t, err)
	require.NotContains(t, string(encoded), "legacy_image_tutorial_url")
	require.NotContains(t, string(encoded), "image_tutorial_url")
}

func TestLegacyImageTutorialProjectionRejectsInvalidURL(t *testing.T) {
	items, ok := withLegacyImageTutorialMenu(nil, "javascript:alert(1)")
	require.False(t, ok)
	require.Empty(t, items)
}

func TestAdminOnlyImageTutorialIsNotWidenedByLegacyProjection(t *testing.T) {
	repo := &settingPublicRepoStub{values: map[string]string{
		SettingKeyCustomMenuItems: `[{
			"id":"image-tutorial","label":"Admin image guide","url":"https://docs.example.com/admin-images",
			"visibility":"admin","placement":"sidebar","sort_order":0
		}]`,
		SettingKeyLegacyImageTutorialURL: "https://docs.example.com/legacy-images",
		SettingKeyUserSidebarOrder:       `["/keys","/image-tutorial"]`,
		SettingKeyAdminSidebarOrder:      `["/admin/dashboard","/image-tutorial"]`,
	}}
	svc := NewSettingService(repo, &config.Config{})

	publicSettings, err := svc.GetPublicSettingsProjection(context.Background())
	require.NoError(t, err)
	require.Empty(t, publicSettings.CustomMenuItems)
	require.NotContains(t, publicSettings.UserSidebarOrder, "/custom/image-tutorial")

	adminNavigation, err := svc.GetAdminNavigationSettings(context.Background())
	require.NoError(t, err)
	require.Len(t, adminNavigation.CustomMenuItems, 1)
	require.Equal(t, "admin", adminNavigation.CustomMenuItems[0].Visibility)
	require.Contains(t, adminNavigation.AdminSidebarOrder, "/custom/image-tutorial")
}

func TestSettingService_GetPublicSettings_ExposesAllowUserViewErrorRequests(t *testing.T) {
	repo := &settingPublicRepoStub{
		values: map[string]string{
			SettingKeyAllowUserViewErrorRequests: "true",
		},
	}
	svc := NewSettingService(repo, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.True(t, settings.AllowUserViewErrorRequests)
}

func TestSettingService_GetPublicSettings_ExposesWeChatOAuthModeCapabilities(t *testing.T) {
	svc := NewSettingService(&settingPublicRepoStub{
		values: map[string]string{
			SettingKeyWeChatConnectEnabled:             "true",
			SettingKeyWeChatConnectAppID:               "wx-mp-app",
			SettingKeyWeChatConnectAppSecret:           "wx-mp-secret",
			SettingKeyWeChatConnectMode:                "mp",
			SettingKeyWeChatConnectScopes:              "snsapi_base",
			SettingKeyWeChatConnectOpenEnabled:         "true",
			SettingKeyWeChatConnectMPEnabled:           "true",
			SettingKeyWeChatConnectRedirectURL:         "https://api.example.com/api/v1/auth/oauth/wechat/callback",
			SettingKeyWeChatConnectFrontendRedirectURL: "/auth/wechat/callback",
		},
	}, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.True(t, settings.WeChatOAuthEnabled)
	require.True(t, settings.WeChatOAuthOpenEnabled)
	require.True(t, settings.WeChatOAuthMPEnabled)
}

func TestSettingService_GetPublicSettings_DoesNotExposeMobileOnlyWeChatAsWebOAuthAvailable(t *testing.T) {
	svc := NewSettingService(&settingPublicRepoStub{
		values: map[string]string{
			SettingKeyWeChatConnectEnabled:             "true",
			SettingKeyWeChatConnectMobileEnabled:       "true",
			SettingKeyWeChatConnectMode:                "mobile",
			SettingKeyWeChatConnectMobileAppID:         "wx-mobile-app",
			SettingKeyWeChatConnectMobileAppSecret:     "wx-mobile-secret",
			SettingKeyWeChatConnectFrontendRedirectURL: "/auth/wechat/callback",
		},
	}, &config.Config{})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.False(t, settings.WeChatOAuthEnabled)
	require.False(t, settings.WeChatOAuthOpenEnabled)
	require.False(t, settings.WeChatOAuthMPEnabled)
	require.True(t, settings.WeChatOAuthMobileEnabled)
}

func TestSettingService_GetPublicSettings_FallsBackToConfigForWeChatOAuthCapabilities(t *testing.T) {
	svc := NewSettingService(&settingPublicRepoStub{values: map[string]string{}}, &config.Config{
		WeChat: config.WeChatConnectConfig{
			Enabled:             true,
			OpenEnabled:         true,
			OpenAppID:           "wx-open-config",
			OpenAppSecret:       "wx-open-secret",
			FrontendRedirectURL: "/auth/wechat/config-callback",
		},
	})

	settings, err := svc.GetPublicSettings(context.Background())
	require.NoError(t, err)
	require.True(t, settings.WeChatOAuthEnabled)
	require.True(t, settings.WeChatOAuthOpenEnabled)
	require.False(t, settings.WeChatOAuthMPEnabled)
	require.False(t, settings.WeChatOAuthMobileEnabled)
}
