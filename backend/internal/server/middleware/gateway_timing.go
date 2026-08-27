package middleware

import (
	"net/http"
	"strings"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/gatewaytiming"
	"github.com/gin-gonic/gin"
)

// GatewayTiming runs before authentication. Only HTTP text-generation routes
// participate: WebSocket connections keep their existing per-turn clock.
func GatewayTiming() gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.Request != nil && c.Request.Method == http.MethodPost && isHTTPGatewayTimingPath(c.Request.URL.Path) {
			c.Request = c.Request.WithContext(gatewaytiming.Start(c.Request.Context(), time.Now()))
		}
		c.Next()
	}
}

func isHTTPGatewayTimingPath(path string) bool {
	switch path {
	case "/v1/messages", "/antigravity/v1/messages", "/v1/chat/completions", "/chat/completions":
		return true
	}
	for _, prefix := range []string{"/v1/responses", "/responses", "/backend-api/codex/responses"} {
		if path == prefix || strings.HasPrefix(path, prefix+"/") {
			return true
		}
	}
	return false
}
