package handler

import (
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"html"
	"net/http"
	"strings"

	"github.com/Wei-Shaw/sub2api/internal/handler/dto"
	"github.com/Wei-Shaw/sub2api/internal/pkg/response"
	"github.com/Wei-Shaw/sub2api/internal/pkg/timezone"
	"github.com/Wei-Shaw/sub2api/internal/service"

	"github.com/gin-gonic/gin"
)

const (
	publicSettingsPath     = "/api/v1/settings/public"
	maxPublicSiteLogoBytes = 300 * 1024
)

type publicSiteLogo struct {
	mimeType string
	content  []byte
	revision string
}

// SettingHandler 公开设置处理器（无需认证）
type SettingHandler struct {
	settingService           *service.SettingService
	notificationEmailService *service.NotificationEmailService
	version                  string
}

// NewSettingHandler 创建公开设置处理器
func NewSettingHandler(settingService *service.SettingService, version string) *SettingHandler {
	return &SettingHandler{
		settingService: settingService,
		version:        version,
	}
}

// SetNotificationEmailService attaches the public notification email service without
// changing the constructor signature used by existing tests.
func (h *SettingHandler) SetNotificationEmailService(notificationEmailService *service.NotificationEmailService) {
	h.notificationEmailService = notificationEmailService
}

// GetPublicSettings 获取公开设置
// GET /api/v1/settings/public
func (h *SettingHandler) GetPublicSettings(c *gin.Context) {
	if c.Query("scope") == "logo" {
		h.getPublicSiteLogo(c)
		return
	}

	settings, err := h.settingService.GetPublicSettings(c.Request.Context())
	if err != nil {
		response.ErrorFrom(c, err)
		return
	}
	if c.Query("scope") == "landing" {
		response.Success(c, dto.LandingPublicSettings{
			SiteName:                   settings.SiteName,
			SiteLogo:                   landingSiteLogoURL(settings.SiteLogo),
			SiteSubtitle:               settings.SiteSubtitle,
			DocURL:                     settings.DocURL,
			RegistrationEnabled:        settings.RegistrationEnabled,
			ModelPlazaEnabled:          settings.ModelPlazaEnabled,
			ModelPlazaRequireAuth:      settings.ModelPlazaRequireAuth,
			ChannelMonitorEnabled:      settings.ChannelMonitorEnabled,
			PublicChannelStatusEnabled: settings.PublicChannelStatusEnabled,
			ServerUTCOffset:            timezone.UTCOffset(),
			LandingNoticeEnabled:       settings.LandingNoticeEnabled,
			LandingNoticeText:          settings.LandingNoticeText,
			LandingNoticeURL:           settings.LandingNoticeURL,
		})
		return
	}

	response.Success(c, dto.PublicSettings{
		RegistrationEnabled:                 settings.RegistrationEnabled,
		EmailVerifyEnabled:                  settings.EmailVerifyEnabled,
		ForceEmailOnThirdPartySignup:        settings.ForceEmailOnThirdPartySignup,
		RegistrationEmailSuffixWhitelist:    settings.RegistrationEmailSuffixWhitelist,
		RegistrationEmailDomainQuotaEnabled: settings.RegistrationEmailDomainQuotaEnabled,
		PromoCodeEnabled:                    settings.PromoCodeEnabled,
		PasswordResetEnabled:                settings.PasswordResetEnabled,
		InvitationCodeEnabled:               settings.InvitationCodeEnabled,
		TotpEnabled:                         settings.TotpEnabled,
		PasskeyEnabled:                      settings.PasskeyEnabled,
		LoginAgreementEnabled:               settings.LoginAgreementEnabled,
		LoginAgreementMode:                  settings.LoginAgreementMode,
		LoginAgreementUpdatedAt:             settings.LoginAgreementUpdatedAt,
		LoginAgreementRevision:              settings.LoginAgreementRevision,
		LoginAgreementDocuments:             publicLoginAgreementDocumentsToDTO(settings.LoginAgreementDocuments),
		TurnstileEnabled:                    settings.TurnstileEnabled,
		TurnstileSiteKey:                    settings.TurnstileSiteKey,
		TencentCaptchaEnabled:               settings.TencentCaptchaEnabled,
		TencentCaptchaAppID:                 settings.TencentCaptchaAppID,
		TencentCaptchaRegion:                settings.TencentCaptchaRegion,
		AliyunCaptchaEnabled:                settings.AliyunCaptchaEnabled,
		AliyunCaptchaSceneID:                settings.AliyunCaptchaSceneID,
		AliyunCaptchaPrefix:                 settings.AliyunCaptchaPrefix,
		AliyunCaptchaRegion:                 settings.AliyunCaptchaRegion,
		SiteName:                            settings.SiteName,
		SiteLogo:                            settings.SiteLogo,
		SiteSubtitle:                        settings.SiteSubtitle,
		LandingNoticeEnabled:                settings.LandingNoticeEnabled,
		LandingNoticeText:                   settings.LandingNoticeText,
		LandingNoticeURL:                    settings.LandingNoticeURL,
		APIBaseURL:                          settings.APIBaseURL,
		ContactInfo:                         settings.ContactInfo,
		DocURL:                              settings.DocURL,
		HomeContent:                         settings.HomeContent,
		CompactHomeEnabled:                  settings.CompactHomeEnabled,
		HideCcsImportButton:                 settings.HideCcsImportButton,
		PurchaseSubscriptionEnabled:         settings.PurchaseSubscriptionEnabled,
		PurchaseSubscriptionURL:             settings.PurchaseSubscriptionURL,
		TableDefaultPageSize:                settings.TableDefaultPageSize,
		TablePageSizeOptions:                settings.TablePageSizeOptions,
		CustomMenuItems:                     dto.ParseUserVisibleMenuItems(settings.CustomMenuItems),
		CustomEndpoints:                     dto.ParseCustomEndpoints(settings.CustomEndpoints),
		DingTalkOAuthEnabled:                settings.DingTalkOAuthEnabled,
		LinuxDoOAuthEnabled:                 settings.LinuxDoOAuthEnabled,
		WeChatOAuthEnabled:                  settings.WeChatOAuthEnabled,
		WeChatOAuthOpenEnabled:              settings.WeChatOAuthOpenEnabled,
		WeChatOAuthMPEnabled:                settings.WeChatOAuthMPEnabled,
		WeChatOAuthMobileEnabled:            settings.WeChatOAuthMobileEnabled,
		OIDCOAuthEnabled:                    settings.OIDCOAuthEnabled,
		OIDCOAuthProviderName:               settings.OIDCOAuthProviderName,
		GitHubOAuthEnabled:                  settings.GitHubOAuthEnabled,
		GoogleOAuthEnabled:                  settings.GoogleOAuthEnabled,
		BackendModeEnabled:                  settings.BackendModeEnabled,
		PaymentEnabled:                      settings.PaymentEnabled,
		Version:                             h.version,
		ServerTimezone:                      timezone.Name(),
		ServerUTCOffset:                     timezone.UTCOffset(),
		BalanceLowNotifyEnabled:             settings.BalanceLowNotifyEnabled,
		AccountQuotaNotifyEnabled:           settings.AccountQuotaNotifyEnabled,
		BalanceLowNotifyThreshold:           settings.BalanceLowNotifyThreshold,
		BalanceLowNotifyRechargeURL:         settings.BalanceLowNotifyRechargeURL,

		ChannelMonitorEnabled:                settings.ChannelMonitorEnabled,
		PublicChannelStatusEnabled:           settings.PublicChannelStatusEnabled,
		ChannelMonitorMode:                   settings.ChannelMonitorMode,
		ChannelMonitorDefaultIntervalSeconds: settings.ChannelMonitorDefaultIntervalSeconds,
		ChannelMonitorHideThroughput:         settings.ChannelMonitorHideThroughput,
		ChannelMonitorShowQuota:              settings.ChannelMonitorShowQuota,

		AvailableChannelsEnabled: settings.AvailableChannelsEnabled,

		ModelPlazaEnabled:     settings.ModelPlazaEnabled,
		ModelPlazaRequireAuth: settings.ModelPlazaRequireAuth,

		AffiliateEnabled: settings.AffiliateEnabled,

		RiskControlEnabled: settings.RiskControlEnabled,

		AllowUserViewErrorRequests: settings.AllowUserViewErrorRequests,
	})
}

// getPublicSiteLogo serves a configured data-URI logo as a cacheable image.
// URL-based logos stay URL-based and therefore do not use this endpoint.
func (h *SettingHandler) getPublicSiteLogo(c *gin.Context) {
	c.Header("Cache-Control", "no-store")
	c.Header("X-Content-Type-Options", "nosniff")

	rawLogo, err := h.settingService.GetPublicSiteLogo(c.Request.Context())
	if err != nil {
		response.ErrorFrom(c, err)
		return
	}
	logo, ok := decodePublicSiteLogo(rawLogo)
	if !ok {
		response.NotFound(c, "site logo not found")
		return
	}

	etag := `"` + logo.revision + `"`
	c.Header("ETag", etag)
	if c.Query("v") == logo.revision {
		c.Header("Cache-Control", "public, max-age=31536000, immutable")
	}
	if c.Request.Header.Get("If-None-Match") == etag {
		c.AbortWithStatus(http.StatusNotModified)
		return
	}
	c.Data(http.StatusOK, logo.mimeType, logo.content)
}

func landingSiteLogoURL(rawLogo string) string {
	logo, ok := decodePublicSiteLogo(rawLogo)
	if ok {
		return publicSettingsPath + "?scope=logo&v=" + logo.revision
	}
	if strings.HasPrefix(strings.ToLower(strings.TrimSpace(rawLogo)), "data:") {
		return ""
	}
	return rawLogo
}

func decodePublicSiteLogo(rawLogo string) (publicSiteLogo, bool) {
	metadata, encoded, ok := strings.Cut(strings.TrimSpace(rawLogo), ",")
	if !ok || encoded == "" || strings.IndexAny(encoded, " \t\r\n") >= 0 {
		return publicSiteLogo{}, false
	}
	metadataParts := strings.Split(metadata, ";")
	if len(metadataParts) != 2 || !strings.EqualFold(metadataParts[1], "base64") {
		return publicSiteLogo{}, false
	}
	mimeType := strings.ToLower(strings.TrimSpace(strings.TrimPrefix(strings.ToLower(metadataParts[0]), "data:")))
	if !isAllowedPublicSiteLogoMIME(mimeType) || len(encoded) > base64.StdEncoding.EncodedLen(maxPublicSiteLogoBytes) {
		return publicSiteLogo{}, false
	}
	content, err := base64.StdEncoding.Strict().DecodeString(encoded)
	if err != nil || len(content) == 0 || len(content) > maxPublicSiteLogoBytes {
		return publicSiteLogo{}, false
	}
	hash := sha256.New()
	_, _ = hash.Write([]byte(mimeType))
	_, _ = hash.Write([]byte{0})
	_, _ = hash.Write(content)
	return publicSiteLogo{
		mimeType: mimeType,
		content:  content,
		revision: hex.EncodeToString(hash.Sum(nil)),
	}, true
}

func isAllowedPublicSiteLogoMIME(mimeType string) bool {
	switch mimeType {
	case "image/avif", "image/gif", "image/jpeg", "image/jpg", "image/png", "image/webp":
		return true
	default:
		return false
	}
}

// UnsubscribeNotificationEmail handles optional notification email opt-outs.
// GET /api/v1/settings/email-unsubscribe?token=...
func (h *SettingHandler) UnsubscribeNotificationEmail(c *gin.Context) {
	if h.notificationEmailService == nil {
		response.InternalError(c, "notification email service is not configured")
		return
	}
	token := strings.TrimSpace(c.Query("token"))
	if token == "" {
		response.BadRequest(c, "token is required")
		return
	}
	result, err := h.notificationEmailService.Unsubscribe(c.Request.Context(), token)
	if err != nil {
		response.BadRequest(c, err.Error())
		return
	}
	body := "<!doctype html><html><head><meta charset=\"utf-8\"><title>Unsubscribed</title></head><body style=\"font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;padding:32px;\"><h1>Unsubscribed</h1><p>You have unsubscribed <strong>" + html.EscapeString(result.Email) + "</strong> from <strong>" + html.EscapeString(result.Event) + "</strong> emails.</p></body></html>"
	c.Data(http.StatusOK, "text/html; charset=utf-8", []byte(body))
}

func publicLoginAgreementDocumentsToDTO(items []service.LoginAgreementDocument) []dto.LoginAgreementDocument {
	result := make([]dto.LoginAgreementDocument, 0, len(items))
	for _, item := range items {
		result = append(result, dto.LoginAgreementDocument{
			ID:        item.ID,
			Title:     item.Title,
			ContentMD: item.ContentMD,
		})
	}
	return result
}
