package routes

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type channelStatusErrorSettingRepo struct {
	service.SettingRepository
}

type channelStatusCountingSettingRepo struct {
	service.SettingRepository
	calls int
}

func (channelStatusErrorSettingRepo) GetMultiple(context.Context, []string) (map[string]string, error) {
	return nil, errors.New("settings store unavailable")
}

func (r *channelStatusCountingSettingRepo) GetMultiple(context.Context, []string) (map[string]string, error) {
	r.calls++
	return map[string]string{service.SettingKeyPublicChannelStatusEnabled: "false"}, nil
}

func newPublicChannelStatusSettings(publicEnabled bool, monitorEnabled bool) *service.SettingService {
	publicValue := "false"
	if publicEnabled {
		publicValue = "true"
	}
	monitorValue := "false"
	if monitorEnabled {
		monitorValue = "true"
	}
	return service.NewSettingService(&channelMonitorRouteSettingRepoStub{values: map[string]string{
		service.SettingKeyPublicChannelStatusEnabled: publicValue,
		service.SettingKeyChannelMonitorEnabled:      monitorValue,
	}}, &config.Config{})
}

func TestChannelStatusSummaryDisabledDoesNotRequireAuthentication(t *testing.T) {
	gin.SetMode(gin.TestMode)
	router := gin.New()
	RegisterChannelStatusRoutes(
		router.Group("/api/v1"),
		nil,
		newPublicChannelStatusSettings(false, true),
		nil,
	)

	recorder := httptest.NewRecorder()
	router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/api/v1/channel-status/summary", nil))

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Equal(t, "no-store", recorder.Header().Get("Cache-Control"))
	var response struct {
		Code int            `json:"code"`
		Data map[string]any `json:"data"`
	}
	require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &response))
	require.Equal(t, 0, response.Code)
	require.Equal(t, service.PublicChannelStatusDisabled, response.Data["mode"])
	require.Equal(t, service.PublicChannelStatusUnknown, response.Data["state"])
	require.Equal(t, service.PublicChannelStatusDisabled, response.Data["reason"])
	for _, privateField := range []string{"id", "name", "provider", "group", "model", "endpoint", "api_key", "error", "request_count"} {
		require.NotContains(t, response.Data, privateField)
	}
}

func TestChannelStatusSummaryFailsClosedWhenSettingsCannotBeRead(t *testing.T) {
	gin.SetMode(gin.TestMode)
	router := gin.New()
	settings := service.NewSettingService(channelStatusErrorSettingRepo{}, &config.Config{})
	RegisterChannelStatusRoutes(router.Group("/api/v1"), nil, settings, nil)

	recorder := httptest.NewRecorder()
	router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/api/v1/channel-status/summary", nil))

	require.Equal(t, http.StatusOK, recorder.Code)
	require.Contains(t, recorder.Body.String(), `"mode":"disabled"`)
	require.Contains(t, recorder.Body.String(), `"reason":"disabled"`)
}

func TestChannelStatusSummaryChecksPublicSwitchOnEveryRequest(t *testing.T) {
	gin.SetMode(gin.TestMode)
	repo := &channelStatusCountingSettingRepo{}
	settings := service.NewSettingService(repo, &config.Config{})
	router := gin.New()
	RegisterChannelStatusRoutes(router.Group("/api/v1"), nil, settings, nil)

	for range 2 {
		recorder := httptest.NewRecorder()
		router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/api/v1/channel-status/summary", nil))
		require.Equal(t, http.StatusOK, recorder.Code)
		require.Contains(t, recorder.Body.String(), `"reason":"disabled"`)
	}

	require.Equal(t, 2, repo.calls)
}
