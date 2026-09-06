package routes

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/handler"
	"github.com/Wei-Shaw/sub2api/internal/handler/admin"
	"github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestDataManagementRoutesRetainAuthenticationAndStepUp(t *testing.T) {
	gin.SetMode(gin.TestMode)
	r := gin.New()
	authenticated := false
	group := r.Group("/admin", func(c *gin.Context) {
		if !authenticated {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
	})
	registerDataManagementRoutes(group, &handler.Handlers{Admin: &handler.AdminHandlers{
		DataManagement: admin.NewDataManagementHandler(service.NewDataManagementService()),
	}}, middleware.StepUpAuthMiddleware(func(c *gin.Context) {
		c.AbortWithStatus(http.StatusForbidden)
	}))
	for _, route := range r.Routes() {
		url := strings.NewReplacer(":source_type", "postgres", ":profile_id", "p", ":job_id", "j").Replace(route.Path)
		rec := httptest.NewRecorder()
		r.ServeHTTP(rec, httptest.NewRequest(route.Method, url, nil))
		require.Equal(t, http.StatusUnauthorized, rec.Code, route.Path)
	}
	authenticated = true
	for _, tt := range []struct{ method, path string }{
		{"POST", "/s3/profiles"}, {"PUT", "/s3/profiles/p"},
		{"POST", "/s3/profiles/p/activate"}, {"POST", "/backups"},
	} {
		rec := httptest.NewRecorder()
		r.ServeHTTP(rec, httptest.NewRequest(tt.method, "/admin/data-management"+tt.path, strings.NewReader("{}")))
		require.Equal(t, http.StatusForbidden, rec.Code, tt.path)
	}
}
