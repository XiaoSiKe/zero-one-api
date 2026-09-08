package admin

import (
	"context"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/pkg/usagestats"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type dashboardRefreshRepo struct {
	service.UsageLogRepository
	users         atomic.Int64
	calls         atomic.Int32
	trendRequests atomic.Int64
	trendCalls    atomic.Int32
}

func (r *dashboardRefreshRepo) GetUsageTrendWithUsageFilters(
	_ context.Context,
	start time.Time,
	_ time.Time,
	granularity string,
	_ usagestats.UsageLogFilters,
) ([]usagestats.TrendDataPoint, error) {
	r.trendCalls.Add(1)
	format := "2006-01-02"
	if granularity == "hour" {
		format = "2006-01-02 15:00"
	}
	return []usagestats.TrendDataPoint{{Date: start.Format(format), Requests: r.trendRequests.Load()}}, nil
}

func (r *dashboardRefreshRepo) GetDashboardStats(context.Context) (*usagestats.DashboardStats, error) {
	r.calls.Add(1)
	return &usagestats.DashboardStats{TotalUsers: r.users.Load()}, nil
}

type dashboardRefreshCache struct {
	mu    sync.Mutex
	value string
}

func (c *dashboardRefreshCache) GetDashboardStats(context.Context) (string, error) {
	c.mu.Lock()
	defer c.mu.Unlock()
	if c.value == "" {
		return "", service.ErrDashboardStatsCacheMiss
	}
	return c.value, nil
}

func (c *dashboardRefreshCache) SetDashboardStats(_ context.Context, value string, _ time.Duration) error {
	c.mu.Lock()
	c.value = value
	c.mu.Unlock()
	return nil
}

func (c *dashboardRefreshCache) DeleteDashboardStats(context.Context) error {
	c.mu.Lock()
	c.value = ""
	c.mu.Unlock()
	return nil
}

func TestDashboardSnapshotV2RefreshBypassesBothCaches(t *testing.T) {
	t.Cleanup(resetDashboardReadCachesForTest)
	resetDashboardReadCachesForTest()
	gin.SetMode(gin.TestMode)

	repo := &dashboardRefreshRepo{}
	repo.users.Store(10)
	cache := &dashboardRefreshCache{}
	cfg := &config.Config{
		Dashboard:    config.DashboardCacheConfig{Enabled: true},
		DashboardAgg: config.DashboardAggregationConfig{Enabled: true},
	}
	handler := NewDashboardHandler(service.NewDashboardService(repo, nil, cache, cfg), nil)
	router := gin.New()
	router.GET("/admin/dashboard/snapshot-v2", handler.GetSnapshotV2)

	request := func(path string) (*httptest.ResponseRecorder, int64) {
		recorder := httptest.NewRecorder()
		router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, "/admin/dashboard/snapshot-v2"+path, nil))
		require.Equal(t, http.StatusOK, recorder.Code)
		var body struct {
			Data struct {
				Stats struct {
					TotalUsers int64 `json:"total_users"`
				} `json:"stats"`
			} `json:"data"`
		}
		require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &body))
		return recorder, body.Data.Stats.TotalUsers
	}

	query := "?include_trend=false&include_model_stats=false&include_group_stats=false"
	first, users := request(query)
	require.Equal(t, int64(10), users)
	require.Equal(t, "miss", first.Header().Get("X-Snapshot-Cache"))

	repo.users.Store(20)
	second, users := request(query)
	require.Equal(t, int64(10), users)
	require.Equal(t, "hit", second.Header().Get("X-Snapshot-Cache"))

	refreshed, users := request(query + "&refresh=true")
	require.Equal(t, int64(20), users)
	require.Equal(t, "refresh", refreshed.Header().Get("X-Snapshot-Cache"))
	require.Equal(t, int32(2), repo.calls.Load())

	after, users := request(query)
	require.Equal(t, int64(20), users)
	require.Equal(t, "hit", after.Header().Get("X-Snapshot-Cache"))
}

func TestDashboardSnapshotV2RefreshBypassesNestedQueryCache(t *testing.T) {
	t.Cleanup(resetDashboardReadCachesForTest)
	resetDashboardReadCachesForTest()
	gin.SetMode(gin.TestMode)

	repo := &dashboardRefreshRepo{}
	repo.trendRequests.Store(10)
	handler := NewDashboardHandler(service.NewDashboardService(repo, nil, nil, nil), nil)
	router := gin.New()
	router.GET("/admin/dashboard/snapshot-v2", handler.GetSnapshotV2)

	request := func(refresh bool) int64 {
		path := "/admin/dashboard/snapshot-v2?include_stats=false&include_model_stats=false&include_group_stats=false"
		if refresh {
			path += "&refresh=true"
		}
		recorder := httptest.NewRecorder()
		router.ServeHTTP(recorder, httptest.NewRequest(http.MethodGet, path, nil))
		require.Equal(t, http.StatusOK, recorder.Code)
		var body struct {
			Data struct {
				Trend []struct {
					Requests int64 `json:"requests"`
				} `json:"trend"`
			} `json:"data"`
		}
		require.NoError(t, json.Unmarshal(recorder.Body.Bytes(), &body))
		require.NotEmpty(t, body.Data.Trend)
		var nonzero []int64
		for _, point := range body.Data.Trend {
			if point.Requests != 0 {
				nonzero = append(nonzero, point.Requests)
			}
		}
		require.Len(t, nonzero, 1, "the repository point must survive zero-bucket filling")
		return nonzero[0]
	}

	require.Equal(t, int64(10), request(false))
	repo.trendRequests.Store(20)
	require.Equal(t, int64(10), request(false))
	require.Equal(t, int64(20), request(true))
	require.Equal(t, int32(2), repo.trendCalls.Load())
}
