package routes

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/handler"
	"github.com/Wei-Shaw/sub2api/internal/pkg/gatewaytiming"
	"github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestHTTPGatewayTimingStartsBeforeAuthAcrossAliases(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := gin.New()
	seen := false
	RegisterGatewayRoutes(r, &handler.Handlers{Gateway: &handler.GatewayHandler{}, OpenAIGateway: &handler.OpenAIGatewayHandler{}, AsyncImage: handler.NewAsyncImageHandler(nil, nil)},
		middleware.APIKeyAuthMiddleware(func(c *gin.Context) {
			seen = gatewaytiming.FromContext(c.Request.Context()) != nil
			c.AbortWithStatus(http.StatusNoContent)
		}), nil, nil, nil, nil, nil, &config.Config{})
	for _, path := range []string{
		"/v1/responses", "/v1/responses/compact", "/responses", "/responses/compact",
		"/backend-api/codex/responses", "/backend-api/codex/responses/compact",
		"/v1/chat/completions", "/chat/completions", "/v1/messages", "/antigravity/v1/messages",
	} {
		t.Run(path, func(t *testing.T) {
			seen = false
			rec := httptest.NewRecorder()
			r.ServeHTTP(rec, httptest.NewRequest(http.MethodPost, path, nil))
			require.Equal(t, http.StatusNoContent, rec.Code)
			require.True(t, seen, "authentication must see the original HTTP request clock")
		})
	}
	for _, path := range []string{"/v1/responses", "/responses", "/backend-api/codex/responses"} {
		seen = false
		r.ServeHTTP(httptest.NewRecorder(), httptest.NewRequest(http.MethodGet, path, nil))
		require.False(t, seen, "WS turn timing must not inherit the HTTP connection lifetime")
	}
}
