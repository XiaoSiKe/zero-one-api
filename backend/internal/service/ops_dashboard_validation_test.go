package service

import (
	"context"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	infraerrors "github.com/Wei-Shaw/sub2api/internal/pkg/errors"
	"github.com/stretchr/testify/require"
)

func TestOpsDashboardServiceValidation(t *testing.T) {
	now := time.Now()
	methods := map[string]func(*OpsService, *OpsDashboardFilter) error{
		"overview": func(s *OpsService, f *OpsDashboardFilter) error {
			_, err := s.GetDashboardOverview(context.Background(), f)
			return err
		},
		"throughput": func(s *OpsService, f *OpsDashboardFilter) error {
			_, err := s.GetThroughputTrend(context.Background(), f, 60)
			return err
		},
		"latency": func(s *OpsService, f *OpsDashboardFilter) error {
			_, err := s.GetLatencyHistogram(context.Background(), f)
			return err
		},
		"error-trend": func(s *OpsService, f *OpsDashboardFilter) error {
			_, err := s.GetErrorTrend(context.Background(), f, 60)
			return err
		},
		"error-distribution": func(s *OpsService, f *OpsDashboardFilter) error {
			_, err := s.GetErrorDistribution(context.Background(), f)
			return err
		},
	}
	for name, call := range methods {
		t.Run(name, func(t *testing.T) {
			for _, tc := range []struct {
				filter *OpsDashboardFilter
				reason string
			}{
				{nil, "OPS_FILTER_REQUIRED"},
				{&OpsDashboardFilter{EndTime: now}, "OPS_TIME_RANGE_REQUIRED"},
				{&OpsDashboardFilter{StartTime: now}, "OPS_TIME_RANGE_REQUIRED"},
				{&OpsDashboardFilter{StartTime: now, EndTime: now.Add(-time.Hour)}, "OPS_TIME_RANGE_INVALID"},
			} {
				err := call(&OpsService{opsRepo: &opsRepoMock{}}, tc.filter)
				require.Equal(t, 400, infraerrors.Code(err))
				require.Equal(t, tc.reason, infraerrors.Reason(err))
			}
			require.Equal(t, "OPS_REPO_UNAVAILABLE", infraerrors.Reason(call(&OpsService{}, nil)))
			err := call(&OpsService{cfg: &config.Config{Ops: config.OpsConfig{Enabled: false}}}, nil)
			require.ErrorIs(t, err, ErrOpsDisabled)
		})
	}
}
