//go:build unit

package routes

import (
	"context"
	"encoding/base64"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/handler"
	servermiddleware "github.com/Wei-Shaw/sub2api/internal/server/middleware"
	"github.com/Wei-Shaw/sub2api/internal/service"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type communityQRRouteSettingRepo struct {
	values        map[string]string
	requestedKeys []string
}

func (r *communityQRRouteSettingRepo) Get(context.Context, string) (*service.Setting, error) {
	return nil, service.ErrSettingNotFound
}

func (r *communityQRRouteSettingRepo) GetValue(_ context.Context, key string) (string, error) {
	value, ok := r.values[key]
	if !ok {
		return "", service.ErrSettingNotFound
	}
	return value, nil
}

func (r *communityQRRouteSettingRepo) Set(_ context.Context, key, value string) error {
	r.values[key] = value
	return nil
}

func (r *communityQRRouteSettingRepo) GetMultiple(_ context.Context, keys []string) (map[string]string, error) {
	r.requestedKeys = append([]string(nil), keys...)
	values := make(map[string]string, len(keys))
	for _, key := range keys {
		values[key] = r.values[key]
	}
	return values, nil
}

func (r *communityQRRouteSettingRepo) SetMultiple(_ context.Context, values map[string]string) error {
	for key, value := range values {
		r.values[key] = value
	}
	return nil
}

func (r *communityQRRouteSettingRepo) GetAll(context.Context) (map[string]string, error) {
	return r.values, nil
}

func (r *communityQRRouteSettingRepo) Delete(_ context.Context, key string) error {
	delete(r.values, key)
	return nil
}

func TestCommunityQRImageRouteRequiresJWTAndPublicScopeCannotServeImage(t *testing.T) {
	gin.SetMode(gin.TestMode)
	encoded := "iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAEElEQVR4nGP8zwACTGCSAQANHQEDgslx/wAAAABJRU5ErkJggg=="
	content, err := base64.StdEncoding.DecodeString(encoded)
	require.NoError(t, err)
	rawImage := "data:image/png;base64," + encoded
	repo := &communityQRRouteSettingRepo{values: map[string]string{
		service.SettingKeyCommunityQREnabled: "true",
		service.SettingKeyCommunityQRImage:   rawImage,
		service.SettingKeyCustomMenuItems:    `[{"id":"support","placement":"header","navigation_type":"qr","visibility":"all"}]`,
		service.SettingKeyHeaderNavQRImages:  `{"support":"` + rawImage + `"}`,
	}}
	settingService := service.NewSettingService(repo, &config.Config{})

	jwtAuth := servermiddleware.JWTAuthMiddleware(func(c *gin.Context) {
		if c.GetHeader("Authorization") != "Bearer test-user-token" {
			servermiddleware.AbortWithError(c, http.StatusUnauthorized, "UNAUTHORIZED", "Authorization required")
			return
		}
		c.Set(string(servermiddleware.ContextKeyUserRole), service.RoleUser)
		c.Next()
	})
	auditLog := servermiddleware.AuditLogMiddleware(func(c *gin.Context) { c.Next() })
	router := gin.New()
	RegisterAuthRoutes(
		router.Group("/api/v1"),
		&handler.Handlers{
			Auth:    &handler.AuthHandler{},
			Setting: handler.NewSettingHandler(settingService, "test-version"),
		},
		jwtAuth,
		auditLog,
		nil,
		settingService,
		nil,
	)

	t.Run("legacy anonymous public scope returns JSON without image", func(t *testing.T) {
		recorder := httptest.NewRecorder()
		request := httptest.NewRequest(http.MethodGet, "/api/v1/settings/public?scope=community-qr", nil)
		router.ServeHTTP(recorder, request)

		require.Equal(t, http.StatusOK, recorder.Code)
		require.Contains(t, recorder.Header().Get("Content-Type"), "application/json")
		require.Contains(t, recorder.Body.String(), `"community_qr_enabled":true`)
		require.NotContains(t, recorder.Body.String(), rawImage)
		require.NotContains(t, repo.requestedKeys, service.SettingKeyCommunityQRImage)
	})

	t.Run("new route rejects anonymous requests", func(t *testing.T) {
		recorder := httptest.NewRecorder()
		request := httptest.NewRequest(http.MethodGet, "/api/v1/settings/community-qr", nil)
		router.ServeHTTP(recorder, request)

		require.Equal(t, http.StatusUnauthorized, recorder.Code)
		require.NotEqual(t, content, recorder.Body.Bytes())
	})

	t.Run("new route serves authenticated requests", func(t *testing.T) {
		recorder := httptest.NewRecorder()
		request := httptest.NewRequest(http.MethodGet, "/api/v1/settings/community-qr", nil)
		request.Header.Set("Authorization", "Bearer test-user-token")
		router.ServeHTTP(recorder, request)

		require.Equal(t, http.StatusOK, recorder.Code)
		require.Equal(t, content, recorder.Body.Bytes())
		require.Equal(t, "image/png", recorder.Header().Get("Content-Type"))
		require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
		require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
	})

	t.Run("header QR cache never bypasses JWT or a changed entry", func(t *testing.T) {
		request := func(authenticated bool) *httptest.ResponseRecorder {
			recorder := httptest.NewRecorder()
			request := httptest.NewRequest(http.MethodGet, "/api/v1/settings/header-navigation/support/qr", nil)
			if authenticated {
				request.Header.Set("Authorization", "Bearer test-user-token")
			}
			router.ServeHTTP(recorder, request)
			return recorder
		}
		for range 2 {
			recorder := request(true)
			require.Equal(t, http.StatusOK, recorder.Code)
			require.Equal(t, content, recorder.Body.Bytes())
			require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
			require.Equal(t, "nosniff", recorder.Header().Get("X-Content-Type-Options"))
		}
		require.Equal(t, http.StatusUnauthorized, request(false).Code)
		repo.values[service.SettingKeyCustomMenuItems] = `[{"id":"support","placement":"header","navigation_type":"qr","visibility":"admin"}]`
		require.Equal(t, http.StatusNotFound, request(true).Code)
	})
}
