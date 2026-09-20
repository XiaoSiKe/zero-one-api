package routes

import (
	"github.com/Wei-Shaw/sub2api/internal/handler"
	"github.com/Wei-Shaw/sub2api/internal/pkg/response"
	"github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"

	"github.com/gin-gonic/gin"
)

// RegisterChannelStatusRoutes registers the public, aggregate-only channel
// status endpoint used by the landing page. It deliberately does not expose
// the authenticated per-channel monitor API.
func RegisterChannelStatusRoutes(
	v1 *gin.RouterGroup,
	h *handler.Handlers,
	settingService *service.SettingService,
	panelRateLimiter *middleware.PanelRateLimiter,
) {
	summaryCache := service.NewPublicChannelStatusSummaryCache()
	status := v1.Group("/channel-status")
	status.Use(panelRateLimiter.PublicIP())
	status.GET("/summary", func(c *gin.Context) {
		c.Header("Cache-Control", "no-store")
		runtime := settingService.GetPublicChannelStatusRuntime(c.Request.Context())
		if !runtime.Enabled {
			response.Success(c, service.PublicChannelStatusSummary{
				Mode:   service.PublicChannelStatusDisabled,
				State:  service.PublicChannelStatusUnknown,
				Reason: service.PublicChannelStatusDisabled,
			})
			return
		}

		summary, err := summaryCache.Get(
			c.Request.Context(),
			service.ChannelMonitorModeV1,
			h.ChannelMonitor.GetPublicSummary,
		)
		if err != nil {
			response.ErrorFrom(c, err)
			return
		}
		response.Success(c, summary)
	})
}
