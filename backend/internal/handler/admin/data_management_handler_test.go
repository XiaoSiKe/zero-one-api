package admin

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"path/filepath"
	"strings"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type apiEnvelope struct {
	Code    int             `json:"code"`
	Message string          `json:"message"`
	Reason  string          `json:"reason"`
	Data    json.RawMessage `json:"data"`
}

func TestDataManagementHandler_AgentHealthAlways200(t *testing.T) {
	gin.SetMode(gin.TestMode)

	svc := service.NewDataManagementServiceWithOptions(filepath.Join(t.TempDir(), "missing.sock"), 50*time.Millisecond)
	h := NewDataManagementHandler(svc)

	r := gin.New()
	r.GET("/api/v1/admin/data-management/agent/health", h.GetAgentHealth)

	rec := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/api/v1/admin/data-management/agent/health", nil)
	r.ServeHTTP(rec, req)

	require.Equal(t, http.StatusOK, rec.Code)

	var envelope apiEnvelope
	require.NoError(t, json.Unmarshal(rec.Body.Bytes(), &envelope))
	require.Equal(t, 0, envelope.Code)

	var data struct {
		Enabled    bool   `json:"enabled"`
		Reason     string `json:"reason"`
		SocketPath string `json:"socket_path"`
	}
	require.NoError(t, json.Unmarshal(envelope.Data, &data))
	require.False(t, data.Enabled)
	require.Equal(t, service.DataManagementDeprecatedReason, data.Reason)
	require.Equal(t, svc.SocketPath(), data.SocketPath)
}

func TestDataManagementHandler_NonHealthRouteReturns503WhenDisabled(t *testing.T) {
	gin.SetMode(gin.TestMode)

	svc := service.NewDataManagementServiceWithOptions(filepath.Join(t.TempDir(), "missing.sock"), 50*time.Millisecond)
	h := NewDataManagementHandler(svc)

	r := gin.New()
	r.GET("/api/v1/admin/data-management/config", h.GetConfig)

	rec := httptest.NewRecorder()
	req := httptest.NewRequest(http.MethodGet, "/api/v1/admin/data-management/config", nil)
	r.ServeHTTP(rec, req)

	require.Equal(t, http.StatusServiceUnavailable, rec.Code)

	var envelope apiEnvelope
	require.NoError(t, json.Unmarshal(rec.Body.Bytes(), &envelope))
	require.Equal(t, http.StatusServiceUnavailable, envelope.Code)
	require.Equal(t, service.DataManagementDeprecatedReason, envelope.Reason)
}

// These routes are a compatibility surface even though the agent was retired.
// Binding must still happen in the same order as the deprecated response.
func TestDataManagementHandler_DeprecatedRouteContracts(t *testing.T) {
	gin.SetMode(gin.TestMode)
	h := NewDataManagementHandler(service.NewDataManagementService())
	tests := []struct {
		name, method, route, url, body string
		handler                        gin.HandlerFunc
		status                         int
	}{
		{"config", "GET", "/config", "/config", "", h.GetConfig, 503},
		{"update config", "PUT", "/config", "/config", `{}`, h.UpdateConfig, 503},
		{"invalid config type", "PUT", "/config", "/config", `{"postgres":{"port":"bad"}}`, h.UpdateConfig, 400},
		{"source list", "GET", "/sources/:source_type", "/sources/postgres", "", h.ListSourceProfiles, 503},
		{"invalid source", "GET", "/sources/:source_type", "/sources/sqlite", "", h.ListSourceProfiles, 400},
		{"create source", "POST", "/sources/:source_type", "/sources/redis", `{"profile_id":"p","name":"n","config":{}}`, h.CreateSourceProfile, 503},
		{"invalid source before JSON", "POST", "/sources/:source_type", "/sources/sqlite", `{`, h.CreateSourceProfile, 400},
		{"missing source fields", "POST", "/sources/:source_type", "/sources/redis", `{}`, h.CreateSourceProfile, 400},
		{"update source", "PUT", "/sources/:source_type/:profile_id", "/sources/postgres/p", `{"name":"n","config":{}}`, h.UpdateSourceProfile, 503},
		{"delete source", "DELETE", "/sources/:source_type/:profile_id", "/sources/redis/p", "", h.DeleteSourceProfile, 503},
		{"activate source", "POST", "/sources/:source_type/:profile_id", "/sources/redis/p", "", h.SetActiveSourceProfile, 503},
		{"test S3", "POST", "/s3/test", "/s3/test", `{"region":"r","bucket":"b"}`, h.TestS3, 503},
		{"missing S3 fields", "POST", "/s3/test", "/s3/test", `{}`, h.TestS3, 400},
		{"S3 list", "GET", "/s3", "/s3", "", h.ListS3Profiles, 503},
		{"create S3", "POST", "/s3", "/s3", `{"profile_id":"p","name":"n"}`, h.CreateS3Profile, 503},
		{"update S3", "PUT", "/s3/:profile_id", "/s3/p", `{"name":"n"}`, h.UpdateS3Profile, 503},
		{"invalid S3 JSON", "PUT", "/s3/:profile_id", "/s3/p", `{`, h.UpdateS3Profile, 400},
		{"delete S3", "DELETE", "/s3/:profile_id", "/s3/p", "", h.DeleteS3Profile, 503},
		{"activate S3", "POST", "/s3/:profile_id", "/s3/p", "", h.SetActiveS3Profile, 503},
		{"create backup", "POST", "/backups", "/backups", `{"backup_type":"full"}`, h.CreateBackupJob, 503},
		{"invalid backup type", "POST", "/backups", "/backups", `{"backup_type":"sqlite"}`, h.CreateBackupJob, 400},
		{"list backups", "GET", "/backups", "/backups?page_size=invalid", "", h.ListBackupJobs, 503},
		{"get backup", "GET", "/backups/:job_id", "/backups/job", "", h.GetBackupJob, 503},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := gin.New()
			r.Handle(tt.method, tt.route, tt.handler)
			req := httptest.NewRequest(tt.method, tt.url, strings.NewReader(tt.body))
			req.Header.Set("Content-Type", "application/json")
			rec := httptest.NewRecorder()
			r.ServeHTTP(rec, req)
			require.Equal(t, tt.status, rec.Code, rec.Body.String())
			if tt.status == http.StatusServiceUnavailable {
				var envelope apiEnvelope
				require.NoError(t, json.Unmarshal(rec.Body.Bytes(), &envelope))
				require.Equal(t, service.DataManagementDeprecatedReason, envelope.Reason)
				require.Contains(t, rec.Body.String(), service.DefaultDataManagementAgentSocketPath)
			}
		})
	}
}
