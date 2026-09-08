package admin

import (
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/usagestats"
	"github.com/stretchr/testify/require"
)

func TestFillDashboardTrendBucketsStopsAtCurrentHour(t *testing.T) {
	location := time.FixedZone("Asia/Shanghai", 8*60*60)
	start := time.Date(2026, 9, 8, 0, 0, 0, 0, location)
	end := start.AddDate(0, 0, 1)
	now := time.Date(2026, 9, 8, 2, 20, 0, 0, location)
	points := []usagestats.TrendDataPoint{{Date: "2026-09-08 01:00", TotalTokens: 10, ActualCost: 1.25}}

	got := fillDashboardTrendBuckets(points, start, end, "hour", now)
	require.Equal(t, []string{"2026-09-08 00:00", "2026-09-08 01:00", "2026-09-08 02:00"}, []string{
		got[0].Date, got[1].Date, got[2].Date,
	})
	require.Zero(t, got[0].TotalTokens)
	require.Equal(t, int64(10), got[1].TotalTokens)
	require.Equal(t, 1.25, got[1].ActualCost)
}

func TestFillDashboardTrendBucketsOmitsFutureDays(t *testing.T) {
	location := time.FixedZone("Asia/Shanghai", 8*60*60)
	start := time.Date(2026, 9, 7, 0, 0, 0, 0, location)
	end := time.Date(2026, 9, 11, 0, 0, 0, 0, location)
	now := time.Date(2026, 9, 8, 12, 0, 0, 0, location)

	got := fillDashboardTrendBuckets(nil, start, end, "day", now)
	require.Equal(t, []string{"2026-09-07", "2026-09-08"}, []string{got[0].Date, got[1].Date})
}
