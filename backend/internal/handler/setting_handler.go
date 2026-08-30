package handler

import (
	"html"
	"net/http"
	"strings"

	"github.com/Wei-Shaw/sub2api/internal/handler/dto"
	"github.com/Wei-Shaw/sub2api/internal/pkg/response"
	"github.com/Wei-Shaw/sub2api/internal/pkg/timezone"
	middleware2 "github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"

	"github.com/gin-gonic/gin"
)

// SettingHandler handles public settings and narrowly scoped authenticated
// setting assets. Authentication remains an explicit route-level contract.
type SettingHandler struct {
	settingService           *service.SettingService
	notificationEmailService *service.NotificationEmailService
}

// NewSettingHandler creates the shared settings handler.
func NewSettingHandler(settingService *service.SettingService, version string) *SettingHandler {
	if settingService != nil {
		settingService.SetVersion(version)
	}
	return &SettingHandler{
		settingService: settingService,
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
	switch c.Query("scope") {
	case "logo":
		h.getPublicSiteLogo(c)
		return
	}

	if c.Query("scope") == "landing" {
		settings, err := h.settingService.GetPublicSettings(c.Request.Context())
		if err != nil {
			response.ErrorFrom(c, err)
			return
		}
		response.Success(c, dto.LandingPublicSettings{
			SiteName:                   settings.SiteName,
			SiteLogo:                   service.PublicSiteLogoURL(settings.SiteLogo),
			SiteSubtitle:               settings.SiteSubtitle,
			DocURL:                     settings.DocURL,
			LandingTutorialURL:         settings.LandingTutorialURL,
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

	settings, err := h.settingService.GetPublicSettingsProjection(c.Request.Context())
	if err != nil {
		response.ErrorFrom(c, err)
		return
	}
	response.Success(c, settings)
}

// GetCommunityQRImage serves only validated raster bytes. Route registration
// must keep this handler behind JWT authentication; the image is deliberately
// not part of the anonymous public JSON or SSR injection payload.
func (h *SettingHandler) GetCommunityQRImage(c *gin.Context) {
	c.Header("Cache-Control", "no-store")
	c.Header("X-Content-Type-Options", "nosniff")

	image, enabled, err := h.settingService.GetCommunityQRImage(c.Request.Context())
	if err != nil {
		response.ErrorFrom(c, err)
		return
	}
	if !enabled {
		response.NotFound(c, "community QR image not found")
		return
	}
	c.Data(http.StatusOK, image.MIMEType, image.Content)
}

// GetHeaderNavigationQRImage serves one validated per-entry QR image. The
// route remains authenticated so QR bytes never enter anonymous settings JSON.
func (h *SettingHandler) GetHeaderNavigationQRImage(c *gin.Context) {
	c.Header("Cache-Control", "no-store")
	c.Header("X-Content-Type-Options", "nosniff")

	role, ok := middleware2.GetUserRoleFromContext(c)
	if !ok {
		response.Unauthorized(c, "User not authenticated")
		return
	}
	image, enabled, err := h.settingService.GetHeaderNavigationQRImage(
		c.Request.Context(),
		strings.TrimSpace(c.Param("id")),
		role,
	)
	if err != nil {
		response.ErrorFrom(c, err)
		return
	}
	if !enabled {
		response.NotFound(c, "header navigation QR image not found")
		return
	}
	c.Data(http.StatusOK, image.MIMEType, image.Content)
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
	logo, ok := service.DecodePublicSiteLogo(rawLogo)
	if !ok {
		response.NotFound(c, "site logo not found")
		return
	}

	etag := `"` + logo.Revision + `"`
	c.Header("ETag", etag)
	if c.Query("v") == logo.Revision {
		c.Header("Cache-Control", "public, max-age=31536000, immutable")
	}
	if c.Request.Header.Get("If-None-Match") == etag {
		c.AbortWithStatus(http.StatusNotModified)
		return
	}
	c.Data(http.StatusOK, logo.MIMEType, logo.Content)
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
