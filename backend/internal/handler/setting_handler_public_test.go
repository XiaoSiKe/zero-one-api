//go:build unit

package handler

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	middleware2 "github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

const publicSettingsPath = "/api/v1/settings/public"

type settingHandlerPublicRepoStub struct {
	values        map[string]string
	requestedKeys []string
}

func (s *settingHandlerPublicRepoStub) Get(ctx context.Context, key string) (*service.Setting, error) {
	panic("unexpected Get call")
}

func (s *settingHandlerPublicRepoStub) GetValue(ctx context.Context, key string) (string, error) {
	s.requestedKeys = []string{key}
	return s.values[key], nil
}

func (s *settingHandlerPublicRepoStub) Set(ctx context.Context, key, value string) error {
	panic("unexpected Set call")
}

func (s *settingHandlerPublicRepoStub) GetMultiple(ctx context.Context, keys []string) (map[string]string, error) {
	s.requestedKeys = append([]string(nil), keys...)
	out := make(map[string]string, len(keys))
	for _, key := range keys {
		if value, ok := s.values[key]; ok {
			out[key] = value
		}
	}
	return out, nil
}

func (s *settingHandlerPublicRepoStub) SetMultiple(ctx context.Context, settings map[string]string) error {
	panic("unexpected SetMultiple call")
}

func (s *settingHandlerPublicRepoStub) GetAll(ctx context.Context) (map[string]string, error) {
	panic("unexpected GetAll call")
}

func (s *settingHandlerPublicRepoStub) Delete(ctx context.Context, key string) error {
	panic("unexpected Delete call")
}

func TestSettingHandler_GetPublicSettings_ExposesForceEmailOnThirdPartySignup(t *testing.T) {
	gin.SetMode(gin.TestMode)

	repo := &settingHandlerPublicRepoStub{
		values: map[string]string{
			service.SettingKeyForceEmailOnThirdPartySignup: "true",
		},
	}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public", nil)

	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)

	var resp struct {
		Code int `json:"code"`
		Data struct {
			ForceEmailOnThirdPartySignup bool `json:"force_email_on_third_party_signup"`
		} `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.Equal(t, 0, resp.Code)
	require.True(t, resp.Data.ForceEmailOnThirdPartySignup)
}

func TestSettingHandler_GetPublicSettings_ExposesLandingNotice(t *testing.T) {
	gin.SetMode(gin.TestMode)

	repo := &settingHandlerPublicRepoStub{
		values: map[string]string{
			service.SettingKeyLandingNoticeEnabled: "false",
			service.SettingKeyLandingNoticeText:    "Maintenance tonight",
			service.SettingKeyLandingNoticeURL:     "/status",
		},
	}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public", nil)

	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	var resp struct {
		Code int `json:"code"`
		Data struct {
			LandingNoticeEnabled bool   `json:"landing_notice_enabled"`
			LandingNoticeText    string `json:"landing_notice_text"`
			LandingNoticeURL     string `json:"landing_notice_url"`
		} `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.Equal(t, 0, resp.Code)
	require.False(t, resp.Data.LandingNoticeEnabled)
	require.Equal(t, "Maintenance tonight", resp.Data.LandingNoticeText)
	require.Equal(t, "/status", resp.Data.LandingNoticeURL)
}

func TestSettingHandler_GetPublicSettings_ProjectsUserAndAllCustomMenus(t *testing.T) {
	gin.SetMode(gin.TestMode)
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCustomMenuItems: `[
			{"id":"user-help","visibility":"user"},
			{"id":"shared-help","visibility":"all"},
			{"id":"admin-help","visibility":"admin"},
			{"id":"invalid-help","visibility":"guest"}
		]`,
		service.SettingKeyUserSidebarOrder:  `["/keys","/dashboard"]`,
		service.SettingKeyAdminSidebarOrder: `["/admin/settings","/admin/dashboard"]`,
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath, nil)
	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	var resp struct {
		Data struct {
			UserSidebarOrder  []string `json:"user_sidebar_order"`
			AdminSidebarOrder []string `json:"admin_sidebar_order"`
			CustomMenuItems   []struct {
				ID         string `json:"id"`
				Visibility string `json:"visibility"`
			} `json:"custom_menu_items"`
		} `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.Len(t, resp.Data.CustomMenuItems, 2)
	require.Equal(t, []string{"/keys", "/dashboard"}, resp.Data.UserSidebarOrder)
	require.Equal(t, []string{"/admin/settings", "/admin/dashboard"}, resp.Data.AdminSidebarOrder)
	require.Equal(t, []string{"user-help", "shared-help"}, []string{
		resp.Data.CustomMenuItems[0].ID,
		resp.Data.CustomMenuItems[1].ID,
	})
	require.Equal(t, []string{"user", "all"}, []string{
		resp.Data.CustomMenuItems[0].Visibility,
		resp.Data.CustomMenuItems[1].Visibility,
	})
}

func TestSettingHandler_PublicSettingsMatchesFirstFrameInjection(t *testing.T) {
	gin.SetMode(gin.TestMode)
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyForceEmailOnThirdPartySignup: "true",
		service.SettingKeyAffiliateEnabled:             "true",
		service.SettingKeyCustomMenuItems:              `[{"id":"shared","visibility":"all"},{"id":"admin","visibility":"admin"}]`,
		service.SettingKeyCustomEndpoints:              `[{"name":"OpenAI","endpoint":"/v1","description":"public"}]`,
	}}
	settingService := service.NewSettingService(repo, &config.Config{})
	h := NewSettingHandler(settingService, "projection-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath, nil)
	h.GetPublicSettings(c)
	require.Equal(t, http.StatusOK, recorder.Code)

	var responseBody struct {
		Data json.RawMessage `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &responseBody))
	injected, err := settingService.GetPublicSettingsForInjection(context.Background())
	require.NoError(t, err)
	injectedJSON, err := json.Marshal(injected)
	require.NoError(t, err)
	require.JSONEq(t, string(responseBody.Data), string(injectedJSON))
}

func TestSettingHandler_GetPublicSettings_ExposesOnlyCommunityQRSwitch(t *testing.T) {
	gin.SetMode(gin.TestMode)
	rawImage := "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCommunityQREnabled:     "true",
		service.SettingKeyCommunityQRImage:       rawImage,
		service.SettingKeyCommunityQRTitle:       "售后二群",
		service.SettingKeyCommunityQRDescription: "扫码加入售后群获取支持",
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath, nil)
	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Contains(t, recorder.Body.String(), `"community_qr_enabled":true`)
	require.Contains(t, recorder.Body.String(), `"community_qr_title":"售后二群"`)
	require.Contains(t, recorder.Body.String(), `"community_qr_description":"扫码加入售后群获取支持"`)
	require.NotContains(t, recorder.Body.String(), "community_qr_image")
	require.NotContains(t, recorder.Body.String(), rawImage)

	repo.values[service.SettingKeyCommunityQRImage] = "data:image/png;base64,PGh0bWw+YmFkPC9odG1sPg=="
	invalidRecorder := httptest.NewRecorder()
	invalidContext, _ := gin.CreateTestContext(invalidRecorder)
	invalidContext.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath, nil)
	h.GetPublicSettings(invalidContext)
	require.Equal(t, http.StatusOK, invalidRecorder.Code)
	require.Contains(t, invalidRecorder.Body.String(), `"community_qr_enabled":true`)
	require.NotContains(t, invalidRecorder.Body.String(), "community_qr_image")
}

func TestSettingHandler_GetPublicSettings_ExposesPublicChannelStatusSwitch(t *testing.T) {
	gin.SetMode(gin.TestMode)

	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyPublicChannelStatusEnabled: "true",
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public", nil)

	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	var resp struct {
		Data struct {
			PublicChannelStatusEnabled bool `json:"public_channel_status_enabled"`
		} `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.True(t, resp.Data.PublicChannelStatusEnabled)
}

func TestSettingHandler_GetPublicSettings_ExposesTencentCaptchaConfiguration(t *testing.T) {
	gin.SetMode(gin.TestMode)

	repo := &settingHandlerPublicRepoStub{
		values: map[string]string{
			service.SettingKeyTencentCaptchaEnabled: "true",
			service.SettingKeyTencentCaptchaAppID:   "123456789",
			service.SettingKeyTencentCaptchaRegion:  service.TencentCaptchaRegionINTL,
		},
	}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public", nil)

	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)

	var resp struct {
		Code int `json:"code"`
		Data struct {
			TencentCaptchaEnabled bool   `json:"tencent_captcha_enabled"`
			TencentCaptchaAppID   string `json:"tencent_captcha_app_id"`
			TencentCaptchaRegion  string `json:"tencent_captcha_region"`
		} `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.Equal(t, 0, resp.Code)
	require.True(t, resp.Data.TencentCaptchaEnabled)
	require.Equal(t, "123456789", resp.Data.TencentCaptchaAppID)
	require.Equal(t, service.TencentCaptchaRegionINTL, resp.Data.TencentCaptchaRegion)
}

func TestSettingHandler_GetPublicSettings_ExposesWeChatOAuthModeCapabilities(t *testing.T) {
	gin.SetMode(gin.TestMode)
	h := NewSettingHandler(service.NewSettingService(&settingHandlerPublicRepoStub{
		values: map[string]string{
			service.SettingKeyWeChatConnectEnabled:             "true",
			service.SettingKeyWeChatConnectAppID:               "wx-mp-app",
			service.SettingKeyWeChatConnectAppSecret:           "wx-mp-secret",
			service.SettingKeyWeChatConnectMode:                "mp",
			service.SettingKeyWeChatConnectScopes:              "snsapi_base",
			service.SettingKeyWeChatConnectOpenEnabled:         "true",
			service.SettingKeyWeChatConnectMPEnabled:           "true",
			service.SettingKeyWeChatConnectRedirectURL:         "https://api.example.com/api/v1/auth/oauth/wechat/callback",
			service.SettingKeyWeChatConnectFrontendRedirectURL: "/auth/wechat/callback",
		},
	}, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public", nil)

	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)

	var resp struct {
		Code int `json:"code"`
		Data struct {
			WeChatOAuthEnabled     bool `json:"wechat_oauth_enabled"`
			WeChatOAuthOpenEnabled bool `json:"wechat_oauth_open_enabled"`
			WeChatOAuthMPEnabled   bool `json:"wechat_oauth_mp_enabled"`
		} `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.Equal(t, 0, resp.Code)
	require.True(t, resp.Data.WeChatOAuthEnabled)
	require.True(t, resp.Data.WeChatOAuthOpenEnabled)
	require.True(t, resp.Data.WeChatOAuthMPEnabled)
}

func TestSettingHandler_GetPublicSettings_DefaultResponseUsesRevisionedSiteLogo(t *testing.T) {
	gin.SetMode(gin.TestMode)
	rawLogo := "data:image/png;base64," + base64.StdEncoding.EncodeToString(bytes.Repeat([]byte{0x42}, 242*1024))
	settings := service.NewSettingService(&settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeySiteLogo: rawLogo,
	}}, &config.Config{})
	h := NewSettingHandler(settings, "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public", nil)
	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	var resp struct {
		Data map[string]json.RawMessage `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	var returnedLogo string
	require.NoError(t, json.Unmarshal(resp.Data["site_logo"], &returnedLogo))
	require.Less(t, len(returnedLogo), 160)
	require.Equal(t, service.PublicSiteLogoURL(rawLogo), returnedLogo)
	require.Less(t, recorder.Body.Len(), 10_000)
	require.NotContains(t, recorder.Body.String(), rawLogo)
	require.Contains(t, resp.Data, "payment_enabled")
	require.Contains(t, resp.Data, "email_verify_enabled")
	firstFrame, err := settings.GetPublicSettingsForInjection(context.Background())
	require.NoError(t, err)
	firstFrameJSON, err := json.Marshal(firstFrame)
	require.NoError(t, err)
	publicJSON, err := json.Marshal(resp.Data)
	require.NoError(t, err)
	require.JSONEq(t, string(publicJSON), string(firstFrameJSON))
	t.Logf("logo field: %d -> %d bytes; public response: %d bytes", len(rawLogo), len(returnedLogo), recorder.Body.Len())
}

func TestSettingHandler_GetPublicSettings_ConsolePreservesSVGDataLogo(t *testing.T) {
	gin.SetMode(gin.TestMode)
	rawLogo := "data:image/svg+xml;base64," + base64.StdEncoding.EncodeToString([]byte(`<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 0h20v20z"/></svg>`))
	settings := service.NewSettingService(&settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeySiteLogo: rawLogo,
	}}, &config.Config{})
	h := NewSettingHandler(settings, "test-version")
	request := func(path string) *httptest.ResponseRecorder {
		recorder := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(recorder)
		c.Request = httptest.NewRequest(http.MethodGet, path, nil)
		h.GetPublicSettings(c)
		return recorder
	}
	for path, want := range map[string]string{
		publicSettingsPath:                    rawLogo,
		publicSettingsPath + "?scope=landing": "",
	} {
		recorder := request(path)
		require.Equal(t, http.StatusOK, recorder.Code)
		var result struct {
			Data struct {
				SiteLogo string `json:"site_logo"`
			} `json:"data"`
		}
		require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &result))
		require.Equal(t, want, result.Data.SiteLogo, path)
	}
	firstFrame, err := settings.GetPublicSettingsForInjection(context.Background())
	require.NoError(t, err)
	firstFrameJSON, err := json.Marshal(firstFrame)
	require.NoError(t, err)
	require.Contains(t, string(firstFrameJSON), rawLogo)
	resource := request(publicSettingsPath + "?scope=logo")
	require.Equal(t, http.StatusNotFound, resource.Code, "SVG must never be served as an active same-origin logo resource")
	require.NotContains(t, resource.Body.String(), rawLogo)
	require.Empty(t, service.ConsoleSiteLogoURL(strings.Replace(rawLogo, "image/svg+xml", "image/svg+xml-unknown", 1)))
	require.Empty(t, service.ConsoleSiteLogoURL(strings.Replace(rawLogo, "image/svg+xml", "text/html", 1)))
}

func TestSettingHandler_GetPublicSettings_LandingScopeIsSmallProjection(t *testing.T) {
	gin.SetMode(gin.TestMode)
	logoBytes := append([]byte("\x89PNG\r\n\x1a\n"), bytes.Repeat([]byte{0x42}, 64*1024)...)
	rawLogo := "data:image/png;base64," + base64.StdEncoding.EncodeToString(logoBytes)
	h := NewSettingHandler(service.NewSettingService(&settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeySiteName:                   "Zero One",
		service.SettingKeySiteLogo:                   rawLogo,
		service.SettingKeySiteSubtitle:               "API Gateway",
		service.SettingKeyDocURL:                     "https://docs.example.com",
		service.SettingKeyRegistrationEnabled:        "true",
		service.SettingKeyModelPlazaEnabled:          "true",
		service.SettingKeyModelPlazaRequireAuth:      "true",
		service.SettingKeyChannelMonitorEnabled:      "true",
		service.SettingKeyPublicChannelStatusEnabled: "true",
		service.SettingKeyLandingNoticeEnabled:       "true",
		service.SettingKeyLandingNoticeText:          "Maintenance tonight",
		service.SettingKeyLandingNoticeURL:           "/status",
	}}, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/public?scope=landing", nil)
	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Less(t, recorder.Body.Len(), 2_048)
	require.NotContains(t, recorder.Body.String(), base64.StdEncoding.EncodeToString(logoBytes[:64]))
	var resp struct {
		Data map[string]json.RawMessage `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &resp))
	require.ElementsMatch(t, []string{
		"site_name",
		"site_logo",
		"site_subtitle",
		"doc_url",
		"registration_enabled",
		"model_plaza_enabled",
		"model_plaza_require_auth",
		"channel_monitor_enabled",
		"public_channel_status_enabled",
		"server_utc_offset",
		"landing_notice_enabled",
		"landing_notice_text",
		"landing_notice_url",
	}, mapKeys(resp.Data))
	require.NotContains(t, resp.Data, "payment_enabled")
	require.NotContains(t, resp.Data, "email_verify_enabled")
	require.NotContains(t, resp.Data, "version")

	var returnedLogo string
	require.NoError(t, json.Unmarshal(resp.Data["site_logo"], &returnedLogo))
	require.Equal(t, service.PublicSiteLogoURL(rawLogo), returnedLogo)
	require.True(t, strings.HasPrefix(returnedLogo, publicSettingsPath+"?scope=logo&v="))
}

func TestPublicSiteLogoURLPreservesURLLogos(t *testing.T) {
	for _, logoURL := range []string{
		"https://cdn.example.com/logo.png",
		"/uploads/logo.webp",
	} {
		require.Equal(t, logoURL, service.PublicSiteLogoURL(logoURL))
	}
	require.Empty(t, service.PublicSiteLogoURL("data:image/png;base64,not-valid-base64"))
}

func TestSettingHandler_GetPublicSiteLogoServesRevisionedImage(t *testing.T) {
	gin.SetMode(gin.TestMode)
	content := []byte("\x89PNG\r\n\x1a\nlogo-content")
	rawLogo := "data:image/png;base64," + base64.StdEncoding.EncodeToString(content)
	logo, ok := service.DecodePublicSiteLogo(rawLogo)
	require.True(t, ok)
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeySiteLogo: rawLogo,
		service.SettingKeySiteName: "must not be read",
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath+"?scope=logo&v="+logo.Revision, nil)
	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Equal(t, content, recorder.Body.Bytes())
	require.Equal(t, "image/png", recorder.Header().Get("Content-Type"))
	require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
	require.Equal(t, `"`+logo.Revision+`"`, recorder.Header().Get("ETag"))
	require.Equal(t, "public, max-age=31536000, immutable", recorder.Header().Get("Cache-Control"))
	require.Equal(t, []string{service.SettingKeySiteLogo}, repo.requestedKeys)

	uncachedRecorder := httptest.NewRecorder()
	uncachedContext, _ := gin.CreateTestContext(uncachedRecorder)
	uncachedContext.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath+"?scope=logo&v=stale", nil)
	h.GetPublicSettings(uncachedContext)
	require.Equal(t, http.StatusOK, uncachedRecorder.Code)
	require.Equal(t, "no-store", uncachedRecorder.Header().Get("Cache-Control"))

	notModifiedRecorder := httptest.NewRecorder()
	notModifiedContext, _ := gin.CreateTestContext(notModifiedRecorder)
	notModifiedContext.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath+"?scope=logo&v="+logo.Revision, nil)
	notModifiedContext.Request.Header.Set("If-None-Match", `"`+logo.Revision+`"`)
	h.GetPublicSettings(notModifiedContext)
	require.Equal(t, http.StatusNotModified, notModifiedRecorder.Code)
	require.Empty(t, notModifiedRecorder.Body.Bytes())
}

func TestSettingHandler_GetPublicSiteLogoRejectsInvalidValues(t *testing.T) {
	gin.SetMode(gin.TestMode)
	tooLarge := "data:image/png;base64," + base64.StdEncoding.EncodeToString(make([]byte, service.MaxPublicSiteLogoBytes+1))
	for name, rawLogo := range map[string]string{
		"empty":               "",
		"external URL":        "https://cdn.example.com/logo.png",
		"unsupported MIME":    "data:text/html;base64,PGgxPmJhZDwvaDE+",
		"active SVG":          "data:image/svg+xml;base64," + base64.StdEncoding.EncodeToString([]byte(`<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>`)),
		"not base64":          "data:image/png,plain-text",
		"malformed base64":    "data:image/png;base64,%%%",
		"embedded whitespace": "data:image/png;base64,bG9n b2J5dGVz",
		"too large":           tooLarge,
	} {
		t.Run(name, func(t *testing.T) {
			h := NewSettingHandler(service.NewSettingService(&settingHandlerPublicRepoStub{values: map[string]string{
				service.SettingKeySiteLogo: rawLogo,
			}}, &config.Config{}), "test-version")
			recorder := httptest.NewRecorder()
			c, _ := gin.CreateTestContext(recorder)
			c.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath+"?scope=logo", nil)
			h.GetPublicSettings(c)

			require.Equal(t, http.StatusNotFound, recorder.Code)
			require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
			require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
		})
	}
}

func TestSettingHandler_PublicCommunityQRScopeNeverServesImage(t *testing.T) {
	gin.SetMode(gin.TestMode)
	rawImage := "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCommunityQREnabled: "true",
		service.SettingKeyCommunityQRImage:   rawImage,
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, publicSettingsPath+"?scope=community-qr", nil)
	h.GetPublicSettings(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Contains(t, recorder.Header().Get("Content-Type"), "application/json")
	require.Contains(t, recorder.Body.String(), `"community_qr_enabled":true`)
	require.NotContains(t, recorder.Body.String(), rawImage)
	require.NotContains(t, repo.requestedKeys, service.SettingKeyCommunityQRImage)
}

func TestSettingHandler_GetCommunityQRImageServesValidatedBytesFromNarrowSettingsRead(t *testing.T) {
	gin.SetMode(gin.TestMode)
	encoded := "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	content, err := base64.StdEncoding.DecodeString(encoded)
	require.NoError(t, err)
	rawImage := "data:image/png;base64," + encoded
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCommunityQREnabled: "true",
		service.SettingKeyCommunityQRImage:   rawImage,
		service.SettingKeySiteName:           "must not be read",
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/community-qr", nil)
	h.GetCommunityQRImage(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Equal(t, content, recorder.Body.Bytes())
	require.Equal(t, "image/png", recorder.Header().Get("Content-Type"))
	require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
	require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
	require.Equal(t, []string{service.SettingKeyCommunityQREnabled, service.SettingKeyCommunityQRImage}, repo.requestedKeys)
}

func TestSettingHandler_GetHeaderNavigationQRImageServesOnlyTheRequestedEntry(t *testing.T) {
	gin.SetMode(gin.TestMode)
	encoded := "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	content, err := base64.StdEncoding.DecodeString(encoded)
	require.NoError(t, err)
	rawImage := "data:image/png;base64," + encoded
	menuJSON, err := json.Marshal([]map[string]any{
		{"id": "support", "placement": "header", "navigation_type": "qr", "visibility": "all"},
		{"id": "docs", "placement": "both", "url": "https://example.com"},
	})
	require.NoError(t, err)
	imageJSON, err := json.Marshal(map[string]string{"support": rawImage})
	require.NoError(t, err)
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCustomMenuItems:   string(menuJSON),
		service.SettingKeyHeaderNavQRImages: string(imageJSON),
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Params = gin.Params{{Key: "id", Value: "support"}}
	c.Set(string(middleware2.ContextKeyUserRole), "user")
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/header-navigation/support/qr", nil)
	h.GetHeaderNavigationQRImage(c)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Equal(t, content, recorder.Body.Bytes())
	require.Equal(t, "image/png", recorder.Header().Get("Content-Type"))
	require.Equal(t, []string{
		service.SettingKeyCustomMenuItems,
		service.SettingKeyHeaderNavQRImages,
	}, repo.requestedKeys)
}

func TestSettingHandler_GetHeaderNavigationQRImageHonorsRoleVisibility(t *testing.T) {
	gin.SetMode(gin.TestMode)
	rawImage := "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	menuJSON, err := json.Marshal([]map[string]any{{
		"id": "admin-support", "placement": "header", "navigation_type": "qr", "visibility": "admin",
	}})
	require.NoError(t, err)
	imageJSON, err := json.Marshal(map[string]string{"admin-support": rawImage})
	require.NoError(t, err)
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCustomMenuItems:   string(menuJSON),
		service.SettingKeyHeaderNavQRImages: string(imageJSON),
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	requestAs := func(role string) *httptest.ResponseRecorder {
		recorder := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(recorder)
		c.Params = gin.Params{{Key: "id", Value: "admin-support"}}
		c.Set(string(middleware2.ContextKeyUserRole), role)
		c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/header-navigation/admin-support/qr", nil)
		h.GetHeaderNavigationQRImage(c)
		return recorder
	}

	require.Equal(t, http.StatusNotFound, requestAs("user").Code)
	require.Equal(t, http.StatusOK, requestAs("admin").Code)
}

func TestSettingHandler_GetHeaderNavigationQRImageFailsClosed(t *testing.T) {
	gin.SetMode(gin.TestMode)
	validImage := "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	menuJSON, err := json.Marshal([]map[string]any{
		{"id": "sidebar", "placement": "sidebar", "navigation_type": "qr", "visibility": "all"},
		{"id": "link", "placement": "header", "visibility": "all"},
		{"id": "broken", "placement": "header", "navigation_type": "qr", "visibility": "all"},
	})
	require.NoError(t, err)
	imageJSON, err := json.Marshal(map[string]string{
		"sidebar": validImage,
		"link":    validImage,
		"broken":  "data:image/png;base64,%%%",
	})
	require.NoError(t, err)
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCustomMenuItems:   string(menuJSON),
		service.SettingKeyHeaderNavQRImages: string(imageJSON),
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")

	request := func(id string, authenticated bool) *httptest.ResponseRecorder {
		recorder := httptest.NewRecorder()
		c, _ := gin.CreateTestContext(recorder)
		c.Params = gin.Params{{Key: "id", Value: id}}
		if authenticated {
			c.Set(string(middleware2.ContextKeyUserRole), "user")
		}
		c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/header-navigation/"+id+"/qr", nil)
		h.GetHeaderNavigationQRImage(c)
		return recorder
	}

	unauthorized := request("sidebar", false)
	require.Equal(t, http.StatusUnauthorized, unauthorized.Code)
	require.Equal(t, "no-store", unauthorized.Header().Get("Cache-Control"))
	require.Equal(t, "nosniff", unauthorized.Header().Get("X-Content-Type-Options"))
	for _, id := range []string{"missing", "sidebar", "link", "broken"} {
		recorder := request(id, true)
		require.Equal(t, http.StatusNotFound, recorder.Code, id)
		require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"), id)
		require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"), id)
	}
}

func TestSettingHandler_GetCommunityQRImageRejectsInvalidValues(t *testing.T) {
	gin.SetMode(gin.TestMode)
	tooLarge := append([]byte("\x89PNG\r\n\x1a\n"), make([]byte, service.MaxCommunityQRImageBytes-7)...)
	for name, rawImage := range map[string]string{
		"empty":               "",
		"active SVG":          "data:image/svg+xml;base64," + base64.StdEncoding.EncodeToString([]byte(`<svg><script>alert(1)</script></svg>`)),
		"HTML disguised PNG":  "data:image/png;base64," + base64.StdEncoding.EncodeToString([]byte(`<html>bad</html>`)),
		"malformed base64":    "data:image/png;base64,%%%",
		"embedded whitespace": "data:image/png;base64,iVBO Rw0KGgo=",
		"too large":           "data:image/png;base64," + base64.StdEncoding.EncodeToString(tooLarge),
	} {
		t.Run(name, func(t *testing.T) {
			repo := &settingHandlerPublicRepoStub{values: map[string]string{
				service.SettingKeyCommunityQREnabled: "true",
				service.SettingKeyCommunityQRImage:   rawImage,
			}}
			h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")
			recorder := httptest.NewRecorder()
			c, _ := gin.CreateTestContext(recorder)
			c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/community-qr", nil)
			h.GetCommunityQRImage(c)

			require.Equal(t, http.StatusNotFound, recorder.Code)
			require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
			require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
			require.Equal(t, []string{service.SettingKeyCommunityQREnabled, service.SettingKeyCommunityQRImage}, repo.requestedKeys)
		})
	}
}

func TestSettingHandler_GetCommunityQRImageIsHiddenWhileDisabled(t *testing.T) {
	gin.SetMode(gin.TestMode)
	rawImage := "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	repo := &settingHandlerPublicRepoStub{values: map[string]string{
		service.SettingKeyCommunityQREnabled: "false",
		service.SettingKeyCommunityQRImage:   rawImage,
	}}
	h := NewSettingHandler(service.NewSettingService(repo, &config.Config{}), "test-version")
	recorder := httptest.NewRecorder()
	c, _ := gin.CreateTestContext(recorder)
	c.Request = httptest.NewRequest(http.MethodGet, "/api/v1/settings/community-qr", nil)
	h.GetCommunityQRImage(c)

	require.Equal(t, http.StatusNotFound, recorder.Code)
	require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
	require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
	require.Equal(t, []string{service.SettingKeyCommunityQREnabled, service.SettingKeyCommunityQRImage}, repo.requestedKeys)
}

func mapKeys(values map[string]json.RawMessage) []string {
	keys := make([]string, 0, len(values))
	for key := range values {
		keys = append(keys, key)
	}
	return keys
}
