package routes

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestRequireAffiliateHumanSessionRejectsAdminAPIKey(t *testing.T) {
	gin.SetMode(gin.TestMode)

	request := func(authMethod string) *httptest.ResponseRecorder {
		router := gin.New()
		router.POST("/bind", func(c *gin.Context) {
			c.Set("auth_method", authMethod)
			c.Next()
		}, requireAffiliateHumanSession, func(c *gin.Context) {
			c.Status(http.StatusNoContent)
		})
		res := httptest.NewRecorder()
		router.ServeHTTP(res, httptest.NewRequest(http.MethodPost, "/bind", nil))
		return res
	}

	apiKeyResponse := request(service.AuditAuthMethodAdminAPIKey)
	require.Equal(t, http.StatusForbidden, apiKeyResponse.Code)
	require.Contains(t, apiKeyResponse.Body.String(), "STEP_UP_ADMIN_API_KEY_FORBIDDEN")

	jwtResponse := request(service.AuditAuthMethodJWT)
	require.Equal(t, http.StatusNoContent, jwtResponse.Code)
}
