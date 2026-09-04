package admin

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type opsDashboardCaptureRepo struct {
	service.OpsRepository
	filters chan service.OpsDashboardFilter
}

func (r *opsDashboardCaptureRepo) capture(f *service.OpsDashboardFilter) error {
	r.filters <- *f
	return errors.New("dashboard repository unavailable")
}
func (r *opsDashboardCaptureRepo) GetDashboardOverview(_ context.Context, f *service.OpsDashboardFilter) (*service.OpsDashboardOverview, error) {
	return nil, r.capture(f)
}
func (r *opsDashboardCaptureRepo) GetThroughputTrend(_ context.Context, f *service.OpsDashboardFilter, _ int) (*service.OpsThroughputTrendResponse, error) {
	return nil, r.capture(f)
}
func (r *opsDashboardCaptureRepo) GetLatencyHistogram(_ context.Context, f *service.OpsDashboardFilter) (*service.OpsLatencyHistogramResponse, error) {
	return nil, r.capture(f)
}
func (r *opsDashboardCaptureRepo) GetErrorTrend(_ context.Context, f *service.OpsDashboardFilter, _ int) (*service.OpsErrorTrendResponse, error) {
	return nil, r.capture(f)
}
func (r *opsDashboardCaptureRepo) GetErrorDistribution(_ context.Context, f *service.OpsDashboardFilter) (*service.OpsErrorDistributionResponse, error) {
	return nil, r.capture(f)
}

func TestOpsDashboardHTTPContract(t *testing.T) {
	gin.SetMode(gin.TestMode)
	available := service.NewOpsService(nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil)
	disabled := service.NewOpsService(nil, nil, &config.Config{Ops: config.OpsConfig{Enabled: false}}, nil, nil, nil, nil, nil, nil, nil, nil)
	handlers := map[string]func(*OpsHandler, *gin.Context){
		"overview":           (*OpsHandler).GetDashboardOverview,
		"throughput":         (*OpsHandler).GetDashboardThroughputTrend,
		"latency":            (*OpsHandler).GetDashboardLatencyHistogram,
		"error-trend":        (*OpsHandler).GetDashboardErrorTrend,
		"error-distribution": (*OpsHandler).GetDashboardErrorDistribution,
		"snapshot":           (*OpsHandler).GetDashboardSnapshotV2,
	}
	for name, handler := range handlers {
		t.Run(name, func(t *testing.T) {
			for _, tc := range []struct {
				name    string
				svc     *service.OpsService
				query   string
				status  int
				message string
			}{
				{"unavailable-first", nil, "?group_id=bad", 503, "Ops service not available"},
				{"disabled-first", disabled, "?group_id=bad", 404, ""},
				{"time-before-group", available, "?start_time=bad&group_id=bad", 400, "parsing time"},
				{"reversed-time", available, "?start_time=2026-09-02T00:00:00Z&end_time=2026-09-01T00:00:00Z", 400, "start_time must be <= end_time"},
				{"group-zero", available, "?group_id=0", 400, "Invalid group_id"},
				{"group-negative", available, "?group_id=-1", 400, "Invalid group_id"},
				{"group-overflow", available, "?group_id=9223372036854775808", 400, "Invalid group_id"},
				{"group-invalid", available, "?group_id=bad", 400, "Invalid group_id"},
			} {
				t.Run(tc.name, func(t *testing.T) {
					rec := httptest.NewRecorder()
					c, _ := gin.CreateTestContext(rec)
					c.Request = httptest.NewRequest(http.MethodGet, "/dashboard"+tc.query, nil)
					handler(NewOpsHandler(tc.svc), c)
					require.Equal(t, tc.status, rec.Code)
					var body responseEnvelope
					require.NoError(t, json.Unmarshal(rec.Body.Bytes(), &body))
					require.Contains(t, body.Message, tc.message)
				})
			}
			t.Run("forward-filter-and-repository-error", func(t *testing.T) {
				repo := &opsDashboardCaptureRepo{filters: make(chan service.OpsDashboardFilter, 3)}
				svc := service.NewOpsService(repo, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil)
				rec := httptest.NewRecorder()
				c, _ := gin.CreateTestContext(rec)
				c.Request = httptest.NewRequest(http.MethodGet, "/dashboard?start_time=2026-09-01T00:00:00Z&end_time=2026-09-01T01:00:00Z&platform=%20openai%20&group_id=%207%20&mode=raw", nil)
				handler(NewOpsHandler(svc), c)
				require.Equal(t, http.StatusInternalServerError, rec.Code)
				require.NotEmpty(t, repo.filters)
				close(repo.filters)
				for filter := range repo.filters {
					require.Equal(t, "openai", filter.Platform)
					require.Equal(t, int64(7), *filter.GroupID)
					require.Equal(t, service.OpsQueryModeRaw, filter.QueryMode)
					require.Equal(t, time.Date(2026, 9, 1, 0, 0, 0, 0, time.UTC), filter.StartTime)
					require.Equal(t, time.Hour, filter.EndTime.Sub(filter.StartTime))
				}
			})
		})
	}
}
