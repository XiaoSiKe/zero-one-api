//go:build unit

package admin

import (
	"context"
	"encoding/base64"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/service"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func validCommunityQRImageForAdminTest(suffix string) string {
	if strings.Contains(suffix, "new") {
		return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEklEQVR4nGNkYPjPwMDAxAAGAAsfAQMU4wsAAAAAAElFTkSuQmCC"
	}
	return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
}

// Saving settings is a whole-document PUT. A client that sends only the field it
// cares about must not reset everything else: a payload as small as
// `{"risk_control_enabled":true}` used to clear site_name, after which
// getStringOrDefault rendered the empty value as the built-in default and the
// login page silently changed name.

func TestUpdateSettingsPartialPayloadKeepsUnsentKeys(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeySiteName:         "Example Gateway",
		service.SettingKeySiteSubtitle:     "Example Gateway Platform",
		service.SettingKeySMTPHost:         "smtp.example.com",
		service.SettingKeySMTPFrom:         "noreply@example.com",
		service.SettingKeyTurnstileEnabled: "true",
	})

	rec := doUpdateSettings(t, h, map[string]any{"risk_control_enabled": true}, nil)
	require.Equal(t, http.StatusOK, rec.Code)

	require.Equal(t, "true", repo.values[service.SettingKeyRiskControlEnabled],
		"the field the caller actually sent must be written")

	require.Equal(t, "Example Gateway", repo.values[service.SettingKeySiteName])
	require.Equal(t, "Example Gateway Platform", repo.values[service.SettingKeySiteSubtitle])
	require.Equal(t, "smtp.example.com", repo.values[service.SettingKeySMTPHost])
	require.Equal(t, "noreply@example.com", repo.values[service.SettingKeySMTPFrom])
	require.Equal(t, "true", repo.values[service.SettingKeyTurnstileEnabled])
}

// A full payload keeps whole-document semantics: fields explicitly set to their
// zero value are still cleared.
func TestUpdateSettingsFullPayloadStillClearsSentEmptyFields(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeySiteName: "Example Gateway",
	})

	rec := doUpdateSettings(t, h, map[string]any{"site_name": ""}, nil)
	require.Equal(t, http.StatusOK, rec.Code)

	require.Equal(t, "", repo.values[service.SettingKeySiteName],
		"an explicitly sent empty value is a deliberate clear, not an omission")
}

// smtp_from_email is the one request field whose JSON name differs from its
// setting key; the alias keeps it from being treated as always-omitted.
func TestUpdateSettingsSMTPFromAliasIsWritable(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeySMTPFrom: "old@example.com",
	})

	rec := doUpdateSettings(t, h, map[string]any{"smtp_from_email": "new@example.com"}, nil)
	require.Equal(t, http.StatusOK, rec.Code)

	require.Equal(t, "new@example.com", repo.values[service.SettingKeySMTPFrom])
}

func TestUpdateSettingsGrokDefaultBaseURLModeIsWritable(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyGrokDefaultBaseURLMode: service.GrokDefaultBaseURLModeCLI,
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"grok_default_base_url_mode": service.GrokDefaultBaseURLModeEUWest1,
	}, nil)
	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, service.GrokDefaultBaseURLModeEUWest1, repo.values[service.SettingKeyGrokDefaultBaseURLMode])
}

func TestUpdateSettingsLandingNoticePartialUpdateKeepsUnsentFields(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyLandingNoticeEnabled: "false",
		service.SettingKeyLandingNoticeText:    "Old notice",
		service.SettingKeyLandingNoticeURL:     "/old-target",
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"landing_notice_text": "  New notice  ",
	}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, "false", repo.values[service.SettingKeyLandingNoticeEnabled])
	require.Equal(t, "New notice", repo.values[service.SettingKeyLandingNoticeText])
	require.Equal(t, "/old-target", repo.values[service.SettingKeyLandingNoticeURL])
	require.Contains(t, rec.Body.String(), `"landing_notice_enabled":false`)
	require.Contains(t, rec.Body.String(), `"landing_notice_text":"New notice"`)
	require.Contains(t, rec.Body.String(), `"landing_notice_url":"/old-target"`)
}

func TestSettingHandlerCommunityQRAdminGetAndPartialUpdateRoundTrip(t *testing.T) {
	oldImage := validCommunityQRImageForAdminTest("old")
	newImage := validCommunityQRImageForAdminTest("new")
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyCommunityQREnabled:     "false",
		service.SettingKeyCommunityQRImage:       oldImage,
		service.SettingKeyCommunityQRTitle:       "交流群",
		service.SettingKeyCommunityQRDescription: "旧副标题",
	})

	getRecorder := httptest.NewRecorder()
	getContext, _ := gin.CreateTestContext(getRecorder)
	getContext.Request = httptest.NewRequest(http.MethodGet, "/api/v1/admin/settings", nil)
	h.GetSettings(getContext)
	require.Equal(t, http.StatusOK, getRecorder.Code)
	require.Contains(t, getRecorder.Body.String(), `"community_qr_enabled":false`)
	require.Contains(t, getRecorder.Body.String(), oldImage)
	require.Contains(t, getRecorder.Body.String(), `"community_qr_title":"交流群"`)
	require.Contains(t, getRecorder.Body.String(), `"community_qr_description":"旧副标题"`)

	enableRecorder := doUpdateSettings(t, h, map[string]any{"community_qr_enabled": true}, nil)
	require.Equal(t, http.StatusOK, enableRecorder.Code)
	require.Equal(t, "true", repo.values[service.SettingKeyCommunityQREnabled])
	require.Equal(t, oldImage, repo.values[service.SettingKeyCommunityQRImage], "omitting image must retain it")
	require.Contains(t, enableRecorder.Body.String(), `"community_qr_enabled":true`)
	require.Contains(t, enableRecorder.Body.String(), oldImage)

	imageRecorder := doUpdateSettings(t, h, map[string]any{"community_qr_image": newImage}, nil)
	require.Equal(t, http.StatusOK, imageRecorder.Code)
	require.Equal(t, "true", repo.values[service.SettingKeyCommunityQREnabled], "omitting enabled must retain it")
	require.Equal(t, newImage, repo.values[service.SettingKeyCommunityQRImage])

	copyRecorder := doUpdateSettings(t, h, map[string]any{
		"community_qr_title":       "  售后二群  ",
		"community_qr_description": "  扫码加入售后群获取支持  ",
	}, nil)
	require.Equal(t, http.StatusOK, copyRecorder.Code)
	require.Equal(t, "售后二群", repo.values[service.SettingKeyCommunityQRTitle])
	require.Equal(t, "扫码加入售后群获取支持", repo.values[service.SettingKeyCommunityQRDescription])
	require.Equal(t, newImage, repo.values[service.SettingKeyCommunityQRImage], "copy-only update must retain the QR image")

	clearRecorder := doUpdateSettings(t, h, map[string]any{
		"community_qr_enabled": false,
		"community_qr_image":   "",
	}, nil)
	require.Equal(t, http.StatusOK, clearRecorder.Code)
	require.Equal(t, "false", repo.values[service.SettingKeyCommunityQREnabled])
	require.Empty(t, repo.values[service.SettingKeyCommunityQRImage])
}

func TestUpdateSettingsCustomMenuPlacementDefaultsAndValidates(t *testing.T) {
	t.Run("legacy item defaults to sidebar", func(t *testing.T) {
		h, repo := newStepUpSwitchTestHandler(t, map[string]string{})
		recorder := doUpdateSettings(t, h, map[string]any{
			"custom_menu_items": []map[string]any{{
				"id": "legacy-help", "label": "帮助", "url": "https://example.com/help",
				"visibility": "user", "sort_order": 0,
			}},
		}, nil)

		require.Equal(t, http.StatusOK, recorder.Code)
		require.Contains(t, repo.values[service.SettingKeyCustomMenuItems], `"placement":"sidebar"`)
	})

	for _, placement := range []string{"sidebar", "header", "both"} {
		t.Run(placement+" item round trips", func(t *testing.T) {
			h, repo := newStepUpSwitchTestHandler(t, map[string]string{})
			recorder := doUpdateSettings(t, h, map[string]any{
				"custom_menu_items": []map[string]any{{
					"id": "admin-tools", "label": "管理工具", "url": "https://example.com/admin",
					"visibility": "admin", "placement": placement, "sort_order": 1,
				}},
			}, nil)

			require.Equal(t, http.StatusOK, recorder.Code)
			require.Contains(t, repo.values[service.SettingKeyCustomMenuItems], `"placement":"`+placement+`"`)
			require.Contains(t, recorder.Body.String(), `"placement":"`+placement+`"`)
		})
	}

	t.Run("invalid placement is rejected", func(t *testing.T) {
		h, _ := newStepUpSwitchTestHandler(t, map[string]string{})
		recorder := doUpdateSettings(t, h, map[string]any{
			"custom_menu_items": []map[string]any{{
				"id": "bad", "label": "错误", "url": "https://example.com/bad",
				"visibility": "user", "placement": "footer", "sort_order": 0,
			}},
		}, nil)

		require.Equal(t, http.StatusBadRequest, recorder.Code)
		require.Contains(t, recorder.Body.String(), "'sidebar', 'header', or 'both'")
	})

	t.Run("all visibility round trips", func(t *testing.T) {
		h, repo := newStepUpSwitchTestHandler(t, map[string]string{})
		recorder := doUpdateSettings(t, h, map[string]any{
			"custom_menu_items": []map[string]any{{
				"id": "shared-help", "label": "共享帮助", "url": "https://example.com/help",
				"visibility": "all", "placement": "both", "sort_order": 0,
			}},
		}, nil)

		require.Equal(t, http.StatusOK, recorder.Code)
		require.Contains(t, repo.values[service.SettingKeyCustomMenuItems], `"visibility":"all"`)
		require.Contains(t, recorder.Body.String(), `"visibility":"all"`)
	})

	t.Run("QR image is stored outside public menu metadata", func(t *testing.T) {
		h, repo := newStepUpSwitchTestHandler(t, map[string]string{})
		rawImage := validCommunityQRImageForAdminTest("header")
		recorder := doUpdateSettings(t, h, map[string]any{
			"custom_menu_items": []map[string]any{{
				"id": "support", "label": "售后支持", "url": "",
				"visibility": "all", "placement": "header", "navigation_type": "qr",
				"qr_description": "扫码联系售后", "qr_image": rawImage, "sort_order": 0,
			}},
		}, nil)

		require.Equal(t, http.StatusOK, recorder.Code)
		require.NotContains(t, repo.values[service.SettingKeyCustomMenuItems], rawImage)
		require.NotContains(t, repo.values[service.SettingKeyCustomMenuItems], "qr_image")
		require.Contains(t, repo.values[service.SettingKeyHeaderNavQRImages], rawImage)
		require.Contains(t, recorder.Body.String(), `"qr_image":"`)
	})

	t.Run("invalid visibility is rejected", func(t *testing.T) {
		h, _ := newStepUpSwitchTestHandler(t, map[string]string{})
		recorder := doUpdateSettings(t, h, map[string]any{
			"custom_menu_items": []map[string]any{{
				"id": "bad", "label": "错误", "url": "https://example.com/bad",
				"visibility": "guest", "placement": "sidebar", "sort_order": 0,
			}},
		}, nil)

		require.Equal(t, http.StatusBadRequest, recorder.Code)
		require.Contains(t, recorder.Body.String(), "'user', 'admin', or 'all'")
	})
}

func TestUpdateSettingsCommunityQRPartialPayloadKeepsOpsRuntimeEnabled(t *testing.T) {
	rawImage := validCommunityQRImageForAdminTest("ops-safe")
	h, _ := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyCommunityQREnabled:   "false",
		service.SettingKeyCommunityQRImage:     rawImage,
		service.SettingKeyOpsMonitoringEnabled: "true",
	})
	opsService := service.NewOpsService(nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil)
	opsService.SetMonitoringEnabled(true)
	h.opsService = opsService

	recorder := doUpdateSettings(t, h, map[string]any{"community_qr_enabled": true}, nil)

	require.Equal(t, http.StatusOK, recorder.Code)
	require.True(t, opsService.IsMonitoringEnabled(context.Background()), "QR-only PUT must publish the persisted ops value, not the omitted request zero value")
}

func TestUpdateSettingsCommunityQRRejectsUnsafeOrIncompleteValues(t *testing.T) {
	validImage := validCommunityQRImageForAdminTest("existing")
	for name, body := range map[string]map[string]any{
		"enable without image": {"community_qr_enabled": true},
		"active SVG": {
			"community_qr_image": "data:image/svg+xml;base64," + base64.StdEncoding.EncodeToString([]byte(`<svg><script>alert(1)</script></svg>`)),
		},
		"HTML disguised as PNG": {
			"community_qr_image": "data:image/png;base64," + base64.StdEncoding.EncodeToString([]byte(`<html>bad</html>`)),
		},
		"whitespace": {"community_qr_image": " " + validImage},
		"malformed":  {"community_qr_image": "data:image/png;base64,%%%"},
	} {
		t.Run(name, func(t *testing.T) {
			initial := map[string]string{
				service.SettingKeyCommunityQREnabled: "false",
				service.SettingKeyCommunityQRImage:   validImage,
			}
			if name == "enable without image" {
				initial[service.SettingKeyCommunityQRImage] = ""
			}
			h, repo := newStepUpSwitchTestHandler(t, initial)
			recorder := doUpdateSettings(t, h, body, nil)

			require.Equal(t, http.StatusBadRequest, recorder.Code)
			require.Equal(t, "false", repo.values[service.SettingKeyCommunityQREnabled])
			require.Equal(t, initial[service.SettingKeyCommunityQRImage], repo.values[service.SettingKeyCommunityQRImage])
		})
	}
}

func TestUpdateSettingsPublicChannelStatusSwitchIsIndependentAndPartialSafe(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyChannelMonitorEnabled:      "false",
		service.SettingKeyPublicChannelStatusEnabled: "false",
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"public_channel_status_enabled": true,
	}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, "false", repo.values[service.SettingKeyChannelMonitorEnabled])
	require.Equal(t, "true", repo.values[service.SettingKeyPublicChannelStatusEnabled])
}

func TestUpdateSettingsLandingNoticeAcceptsSafeRelativeURL(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{})

	rec := doUpdateSettings(t, h, map[string]any{
		"landing_notice_url": "/keys?from=notice",
	}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, "/keys?from=notice", repo.values[service.SettingKeyLandingNoticeURL])
}

func TestUpdateSettingsLandingNoticeAllowsExplicitClear(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyLandingNoticeEnabled: "true",
		service.SettingKeyLandingNoticeText:    "Existing notice",
		service.SettingKeyLandingNoticeURL:     "/existing",
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"landing_notice_text": "",
		"landing_notice_url":  "",
	}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, "true", repo.values[service.SettingKeyLandingNoticeEnabled])
	require.Empty(t, repo.values[service.SettingKeyLandingNoticeText])
	require.Empty(t, repo.values[service.SettingKeyLandingNoticeURL])
	require.Contains(t, rec.Body.String(), `"landing_notice_text":""`)
	require.Contains(t, rec.Body.String(), `"landing_notice_url":""`)
}

func TestUpdateSettingsLandingNoticeRejectsInvalidInput(t *testing.T) {
	for name, body := range map[string]map[string]any{
		"text over 160 characters": {"landing_notice_text": strings.Repeat("界", service.LandingNoticeTextMaxRunes+1)},
		"multiline text":           {"landing_notice_text": "line one\nline two"},
		"protocol relative URL":    {"landing_notice_url": "//evil.example/keys"},
		"javascript URL":           {"landing_notice_url": "javascript:alert(1)"},
	} {
		t.Run(name, func(t *testing.T) {
			h, repo := newStepUpSwitchTestHandler(t, map[string]string{
				service.SettingKeyLandingNoticeText: "Existing notice",
				service.SettingKeyLandingNoticeURL:  "/existing",
			})

			rec := doUpdateSettings(t, h, body, nil)

			require.Equal(t, http.StatusBadRequest, rec.Code)
			require.Equal(t, "Existing notice", repo.values[service.SettingKeyLandingNoticeText])
			require.Equal(t, "/existing", repo.values[service.SettingKeyLandingNoticeURL])
		})
	}
}

func TestDiffSettingsIncludesLandingNoticeFields(t *testing.T) {
	before := &service.SystemSettings{
		LandingNoticeEnabled: true,
		LandingNoticeText:    "Old notice",
		LandingNoticeURL:     "/old",
	}
	after := &service.SystemSettings{
		LandingNoticeEnabled: false,
		LandingNoticeText:    "New notice",
		LandingNoticeURL:     "https://example.com/new",
	}

	changed := diffSettings(before, after, nil, nil, UpdateSettingsRequest{})

	require.ElementsMatch(t, []string{
		service.SettingKeyLandingNoticeEnabled,
		service.SettingKeyLandingNoticeText,
		service.SettingKeyLandingNoticeURL,
	}, changed)
}

func TestDiffSettingsIncludesCommunityQRFields(t *testing.T) {
	before := &service.SystemSettings{CommunityQREnabled: false, CommunityQRImage: validCommunityQRImageForAdminTest("old")}
	after := &service.SystemSettings{CommunityQREnabled: true, CommunityQRImage: validCommunityQRImageForAdminTest("new")}

	changed := diffSettings(before, after, nil, nil, UpdateSettingsRequest{})

	require.ElementsMatch(t, []string{
		service.SettingKeyCommunityQREnabled,
		service.SettingKeyCommunityQRImage,
	}, changed)
}

func TestUpdateSettingsRejectsTwoCaptchaProviders(t *testing.T) {
	h, _ := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyTurnstileEnabled:   "true",
		service.SettingKeyTurnstileSiteKey:   "site-key",
		service.SettingKeyTurnstileSecretKey: "turnstile-secret",
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"turnstile_enabled":                true,
		"turnstile_site_key":               "site-key",
		"turnstile_secret_key":             "turnstile-secret",
		"tencent_captcha_enabled":          true,
		"tencent_captcha_app_id":           "123456789",
		"tencent_captcha_app_secret_key":   "app-secret",
		"tencent_captcha_cloud_secret_id":  "cloud-secret-id",
		"tencent_captcha_cloud_secret_key": "cloud-secret-key",
	}, nil)

	require.Equal(t, http.StatusBadRequest, rec.Code)
	require.Contains(t, rec.Body.String(), "cannot be enabled at the same time")
}

func TestUpdateSettingsRequiresFourTencentCaptchaCredentialsWhenEnabled(t *testing.T) {
	h, _ := newStepUpSwitchTestHandler(t, map[string]string{})

	rec := doUpdateSettings(t, h, map[string]any{
		"tencent_captcha_enabled": true,
		"tencent_captcha_app_id":  "123456789",
	}, nil)

	require.Equal(t, http.StatusBadRequest, rec.Code)
	require.Contains(t, rec.Body.String(), "AppSecretKey")
}

func TestUpdateSettingsRetainsStoredTencentCaptchaCredentialsWhenInputsEmpty(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyTencentCaptchaAppSecretKey:   "stored-app-secret",
		service.SettingKeyTencentCaptchaCloudSecretID:  "stored-cloud-secret-id",
		service.SettingKeyTencentCaptchaCloudSecretKey: "stored-cloud-secret-key",
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"tencent_captcha_enabled":          true,
		"tencent_captcha_app_id":           "123456789",
		"tencent_captcha_app_secret_key":   "",
		"tencent_captcha_cloud_secret_id":  "",
		"tencent_captcha_cloud_secret_key": "",
	}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, "stored-app-secret", repo.values[service.SettingKeyTencentCaptchaAppSecretKey])
	require.Equal(t, "stored-cloud-secret-id", repo.values[service.SettingKeyTencentCaptchaCloudSecretID])
	require.Equal(t, "stored-cloud-secret-key", repo.values[service.SettingKeyTencentCaptchaCloudSecretKey])
}

// 天御站点决定前端加载哪个 SDK 与服务端打哪个接入点，两端必须一致。
// 部分载荷把它重置回中国站，会让已配国际站的部署在下一次任意保存后整体失效。
func TestUpdateSettingsPartialPayloadKeepsTencentCaptchaRegion(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyTencentCaptchaRegion: service.TencentCaptchaRegionINTL,
	})

	rec := doUpdateSettings(t, h, map[string]any{"risk_control_enabled": true}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, service.TencentCaptchaRegionINTL,
		repo.values[service.SettingKeyTencentCaptchaRegion])
}

func TestUpdateSettingsNormalizesUnknownTencentCaptchaRegion(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyTencentCaptchaRegion: service.TencentCaptchaRegionINTL,
	})

	rec := doUpdateSettings(t, h, map[string]any{"tencent_captcha_region": "sgp"}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, service.TencentCaptchaRegionCN,
		repo.values[service.SettingKeyTencentCaptchaRegion],
		"未知站点必须落回中国站，不能写入无法识别的值")
}

func TestUpdateSettingsWritesTencentCaptchaRegionWhenSent(t *testing.T) {
	h, repo := newStepUpSwitchTestHandler(t, map[string]string{})

	rec := doUpdateSettings(t, h, map[string]any{"tencent_captcha_region": "intl"}, nil)

	require.Equal(t, http.StatusOK, rec.Code)
	require.Equal(t, service.TencentCaptchaRegionINTL,
		repo.values[service.SettingKeyTencentCaptchaRegion])
}

func TestUpdateSettingsValidatesTencentCaptchaAppIDWhenEnabledFlagIsOmitted(t *testing.T) {
	h, _ := newStepUpSwitchTestHandler(t, map[string]string{
		service.SettingKeyTencentCaptchaEnabled:        "true",
		service.SettingKeyTencentCaptchaAppID:          "123456789",
		service.SettingKeyTencentCaptchaAppSecretKey:   "stored-app-secret",
		service.SettingKeyTencentCaptchaCloudSecretID:  "stored-cloud-secret-id",
		service.SettingKeyTencentCaptchaCloudSecretKey: "stored-cloud-secret-key",
	})

	rec := doUpdateSettings(t, h, map[string]any{
		"tencent_captcha_app_id": "not-a-number",
	}, nil)

	require.Equal(t, http.StatusBadRequest, rec.Code)
	require.Contains(t, rec.Body.String(), "positive integer")
}
