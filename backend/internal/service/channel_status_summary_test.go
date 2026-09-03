package service

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func intPointer(value int) *int { return &value }

func TestPublicChannelStatusSummaryCacheUsesModeKeyAndThirtySecondTTL(t *testing.T) {
	now := time.Date(2026, 8, 17, 10, 0, 0, 0, time.UTC)
	cache := NewPublicChannelStatusSummaryCache()
	cache.now = func() time.Time { return now }
	var calls atomic.Int32
	load := func(context.Context) (*PublicChannelStatusSummary, error) {
		calls.Add(1)
		return &PublicChannelStatusSummary{State: PublicChannelStatusOperational}, nil
	}

	_, err := cache.Get(context.Background(), ChannelMonitorModeV1, load)
	require.NoError(t, err)
	_, err = cache.Get(context.Background(), ChannelMonitorModeV1, load)
	require.NoError(t, err)
	require.Equal(t, int32(1), calls.Load())

	_, err = cache.Get(context.Background(), ChannelMonitorModeV2, load)
	require.NoError(t, err)
	require.Equal(t, int32(2), calls.Load(), "a different mode must not reuse the V1 summary")

	now = now.Add(30 * time.Second)
	_, err = cache.Get(context.Background(), ChannelMonitorModeV1, load)
	require.NoError(t, err)
	require.Equal(t, int32(3), calls.Load(), "an entry expires at exactly 30 seconds")
}

func TestPublicChannelStatusSummaryCacheDoesNotCacheFailures(t *testing.T) {
	cache := NewPublicChannelStatusSummaryCache()
	var calls atomic.Int32
	load := func(context.Context) (*PublicChannelStatusSummary, error) {
		if calls.Add(1) == 1 {
			return nil, errors.New("temporary failure")
		}
		return &PublicChannelStatusSummary{State: PublicChannelStatusOperational}, nil
	}

	_, err := cache.Get(context.Background(), ChannelMonitorModeV1, load)
	require.EqualError(t, err, "temporary failure")
	_, err = cache.Get(context.Background(), ChannelMonitorModeV1, load)
	require.NoError(t, err)
	require.Equal(t, int32(2), calls.Load())
}

func TestPublicChannelStatusSummaryCacheSingleflightsConcurrentLoads(t *testing.T) {
	cache := NewPublicChannelStatusSummaryCache()
	var calls atomic.Int32
	loadStarted := make(chan struct{})
	releaseLoad := make(chan struct{})
	load := func(context.Context) (*PublicChannelStatusSummary, error) {
		if calls.Add(1) == 1 {
			close(loadStarted)
		}
		<-releaseLoad
		return &PublicChannelStatusSummary{State: PublicChannelStatusOperational}, nil
	}

	const callers = 12
	start := make(chan struct{})
	errCh := make(chan error, callers)
	var wg sync.WaitGroup
	wg.Add(callers)
	for range callers {
		go func() {
			defer wg.Done()
			<-start
			_, err := cache.Get(context.Background(), ChannelMonitorModeV1, load)
			errCh <- err
		}()
	}
	close(start)
	<-loadStarted
	require.Eventually(t, func() bool { return calls.Load() == 1 }, time.Second, time.Millisecond)
	close(releaseLoad)
	wg.Wait()
	close(errCh)
	for err := range errCh {
		require.NoError(t, err)
	}
	require.Equal(t, int32(1), calls.Load())
}

type publicStatusRepositoryStub struct {
	ChannelMonitorRepository
	monitors     []*ChannelMonitor
	latest       map[int64][]*ChannelMonitorLatest
	availability map[int64][]*ChannelMonitorAvailability
	historyError error
}

func (r *publicStatusRepositoryStub) ListEnabled(context.Context) ([]*ChannelMonitor, error) {
	return r.monitors, nil
}

func (r *publicStatusRepositoryStub) ListLatestForMonitorIDs(context.Context, []int64) (map[int64][]*ChannelMonitorLatest, error) {
	return r.latest, nil
}

func (r *publicStatusRepositoryStub) ComputeAvailabilityForMonitors(context.Context, []int64, int) (map[int64][]*ChannelMonitorAvailability, error) {
	return r.availability, nil
}

func (r *publicStatusRepositoryStub) ListRecentHistoryForMonitors(context.Context, []int64, map[int64]string, int) (map[int64][]*ChannelMonitorHistoryEntry, error) {
	return nil, r.historyError
}

func TestPublicChannelStatusKeepsRowsWhenOneMonitorHasIncompleteData(t *testing.T) {
	for _, scenario := range []string{"missing-sample", "stale-sample", "missing-availability", "empty-status"} {
		t.Run(scenario, func(t *testing.T) {
			now := time.Now().UTC()
			repo := &publicStatusRepositoryStub{
				monitors: []*ChannelMonitor{
					{ID: 1, Name: "正常渠道", PrimaryModel: "primary", IntervalSeconds: 60},
					{ID: 2, Name: "等待渠道", PrimaryModel: "primary", IntervalSeconds: 60},
				},
				latest: map[int64][]*ChannelMonitorLatest{
					1: {{Model: "primary", Status: MonitorStatusOperational, CheckedAt: now}},
					2: {{Model: "primary", Status: MonitorStatusOperational, CheckedAt: now}},
				},
				availability: map[int64][]*ChannelMonitorAvailability{
					1: {{Model: "primary", TotalChecks: 10, OperationalChecks: 9}},
					2: {{Model: "primary", TotalChecks: 10, OperationalChecks: 10}},
				},
			}
			switch scenario {
			case "missing-sample":
				delete(repo.latest, 2)
			case "stale-sample":
				repo.latest[2][0].CheckedAt = now.Add(-time.Hour)
			case "missing-availability":
				delete(repo.availability, 2)
			case "empty-status":
				repo.latest[2][0].Status = ""
			}
			svc := &ChannelMonitorService{repo: repo}
			summary, err := svc.GetPublicChannelStatusSummary(context.Background())
			require.NoError(t, err)
			require.Equal(t, PublicChannelStatusUnknown, summary.State, "不完整的汇总不能宣称全部正常")
			require.Len(t, summary.Items, 2, "单个监控未就绪不能清空其他渠道")
			require.Equal(t, "正常渠道", summary.Items[0].Name)
			require.Equal(t, PublicChannelStatusOperational, summary.Items[0].State)
			require.InDelta(t, 90, *summary.Items[0].Availability7d, 0.001)
			require.Equal(t, "等待渠道", summary.Items[1].Name)
			require.Equal(t, PublicChannelStatusUnknown, summary.Items[1].State)
			require.NotNil(t, summary.Items[1].Timeline, "空时间轴仍应符合公开数组契约")
		})
	}
}

func TestPublicChannelStatusKeepsCurrentRowsWhenHistoryFails(t *testing.T) {
	repo := &publicStatusRepositoryStub{
		monitors: []*ChannelMonitor{{ID: 1, Name: "当前渠道", PrimaryModel: "primary"}},
		latest: map[int64][]*ChannelMonitorLatest{
			1: {{Model: "primary", Status: MonitorStatusOperational, CheckedAt: time.Now().UTC()}},
		},
		availability: map[int64][]*ChannelMonitorAvailability{
			1: {{Model: "primary", TotalChecks: 10, OperationalChecks: 10}},
		},
		historyError: errors.New("history temporarily unavailable"),
	}
	svc := &ChannelMonitorService{repo: repo}
	summary, err := svc.GetPublicChannelStatusSummary(context.Background())
	require.NoError(t, err)
	require.Equal(t, PublicChannelStatusOperational, summary.State)
	require.Len(t, summary.Items, 1)
	require.Equal(t, PublicChannelStatusOperational, summary.Items[0].State)
	require.NotNil(t, summary.Items[0].Timeline)
	require.Empty(t, summary.Items[0].Timeline)
}

func TestBuildPublicChannelStatusSummaryV1AggregatesOnlyCompleteMonitorData(t *testing.T) {
	newest := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	oldest := newest.Add(-time.Minute)
	monitors := []*ChannelMonitor{
		{ID: 1, PrimaryModel: "gpt-5"},
		{ID: 2, PrimaryModel: "claude-sonnet"},
	}

	summary := buildPublicChannelStatusSummaryV1At(
		monitors,
		map[int64]string{1: "gpt-5", 2: "claude-sonnet"},
		map[int64][]*ChannelMonitorLatest{
			1: {{Model: "gpt-5", Status: MonitorStatusOperational, LatencyMs: intPointer(120), CheckedAt: newest}},
			2: {{Model: "claude-sonnet", Status: MonitorStatusOperational, LatencyMs: intPointer(180), CheckedAt: oldest}},
		},
		map[int64][]*ChannelMonitorAvailability{
			1: {{Model: "gpt-5", TotalChecks: 10, OperationalChecks: 10}},
			2: {{Model: "claude-sonnet", TotalChecks: 20, OperationalChecks: 18}},
		},
		newest.Add(time.Second),
	)

	require.Equal(t, PublicChannelStatusModeActiveProbe, summary.Mode)
	require.Equal(t, PublicChannelStatusOperational, summary.State)
	require.Empty(t, summary.Reason)
	require.NotNil(t, summary.LatencyMs)
	require.Equal(t, 150, *summary.LatencyMs)
	require.NotNil(t, summary.Availability7d)
	require.InDelta(t, 93.333333, *summary.Availability7d, 0.0001)
	require.Equal(t, oldest, *summary.ObservedAt)
}

func TestBuildPublicChannelStatusSummaryV1DoesNotInventOperationalForMissingData(t *testing.T) {
	now := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	noMonitors := buildPublicChannelStatusSummaryV1At(nil, nil, nil, nil, now)
	require.Equal(t, PublicChannelStatusModeActiveProbe, noMonitors.Mode)
	require.Equal(t, PublicChannelStatusUnknown, noMonitors.State)
	require.Equal(t, publicChannelStatusNoMonitors, noMonitors.Reason)

	missingSample := buildPublicChannelStatusSummaryV1At(
		[]*ChannelMonitor{{ID: 1, PrimaryModel: "gpt-5"}},
		map[int64]string{1: "gpt-5"},
		map[int64][]*ChannelMonitorLatest{},
		map[int64][]*ChannelMonitorAvailability{},
		now,
	)
	require.Equal(t, PublicChannelStatusUnknown, missingSample.State)
	require.Equal(t, publicChannelStatusInsufficientData, missingSample.Reason)
	require.Nil(t, missingSample.LatencyMs)
	require.Nil(t, missingSample.Availability7d)
	require.Nil(t, missingSample.ObservedAt)
}

func TestBuildPublicChannelStatusSummaryV1PreservesCurrentDegradation(t *testing.T) {
	checkedAt := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	summary := buildPublicChannelStatusSummaryV1At(
		[]*ChannelMonitor{{ID: 1, PrimaryModel: "gpt-5"}},
		map[int64]string{1: "gpt-5"},
		map[int64][]*ChannelMonitorLatest{
			1: {{Model: "gpt-5", Status: MonitorStatusDegraded, LatencyMs: intPointer(6_500), CheckedAt: checkedAt}},
		},
		map[int64][]*ChannelMonitorAvailability{
			1: {{Model: "gpt-5", TotalChecks: 4, OperationalChecks: 4}},
		},
		checkedAt.Add(time.Second),
	)

	require.Equal(t, PublicChannelStatusModeActiveProbe, summary.Mode)
	require.Equal(t, PublicChannelStatusDegraded, summary.State)
	require.NotNil(t, summary.Availability7d)
	require.Equal(t, 100.0, *summary.Availability7d)
}

func TestBuildPublicChannelStatusSummaryV1TreatsStaleProbeAsUnknown(t *testing.T) {
	now := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	checkedAt := now.Add(-10 * time.Minute)
	summary := buildPublicChannelStatusSummaryV1At(
		[]*ChannelMonitor{{ID: 1, PrimaryModel: "gpt-5", IntervalSeconds: 60}},
		map[int64]string{1: "gpt-5"},
		map[int64][]*ChannelMonitorLatest{
			1: {{Model: "gpt-5", Status: MonitorStatusOperational, LatencyMs: intPointer(120), CheckedAt: checkedAt}},
		},
		map[int64][]*ChannelMonitorAvailability{
			1: {{Model: "gpt-5", TotalChecks: 10, OperationalChecks: 10}},
		},
		now,
	)

	require.Equal(t, PublicChannelStatusModeActiveProbe, summary.Mode)
	require.Equal(t, PublicChannelStatusUnknown, summary.State)
	require.Equal(t, publicChannelStatusInsufficientData, summary.Reason)
	require.Nil(t, summary.LatencyMs)
	require.Nil(t, summary.Availability7d)
	require.Nil(t, summary.ObservedAt)
}

func TestBuildPublicChannelStatusSummaryV2KeepsTrafficMetricsOutOfProbeAvailability(t *testing.T) {
	computedAt := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	p50 := int64(240)
	summary := buildPublicChannelStatusSummaryV2(&ChannelMonitorV2Snapshot{
		Coverage: ChannelMonitorV2Coverage{ComputedAt: computedAt},
		Metrics:  ChannelMonitorV2Metric{RequestCount: 12, TTFT: ChannelMonitorV2Latency{P50Ms: &p50}},
		Health:   ChannelMonitorV2Health{Overall: "warning"},
	})

	require.Equal(t, PublicChannelStatusDegraded, summary.State)
	require.Equal(t, PublicChannelStatusModeTraffic, summary.Mode)
	require.NotNil(t, summary.LatencyMs)
	require.Equal(t, 240, *summary.LatencyMs)
	require.Nil(t, summary.Availability7d)
	require.Equal(t, computedAt, *summary.ObservedAt)
}

func TestBuildPublicChannelStatusItemsV2ProjectsPlatformMatrixIntoLegacyRows(t *testing.T) {
	computedAt := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	dataThrough := computedAt.Add(-time.Minute)
	firstBucket := computedAt.Add(-24 * time.Hour)
	secondBucket := computedAt.Add(-12 * time.Hour)

	items := buildPublicChannelStatusItemsV2(&ChannelMonitorV2Matrix{
		Coverage: ChannelMonitorV2Coverage{
			ComputedAt:  computedAt,
			DataThrough: dataThrough,
		},
		Items: []ChannelMonitorV2MatrixRow{{
			Platform: "openai",
			Metrics: ChannelMonitorV2Metric{
				RequestCount: 100,
				ErrorRate:    0.02,
			},
			Health: ChannelMonitorV2Health{Overall: "warning"},
			Buckets: []ChannelMonitorV2TrendPoint{
				{
					BucketStart: firstBucket,
					Metrics:     ChannelMonitorV2Metric{RequestCount: 50},
					Health:      ChannelMonitorV2Health{Overall: "healthy"},
				},
				{
					BucketStart: secondBucket,
					Metrics:     ChannelMonitorV2Metric{RequestCount: 50},
					Health:      ChannelMonitorV2Health{Overall: "critical"},
				},
			},
		}},
	})

	require.Len(t, items, 1)
	require.Equal(t, "openai", items[0].Name)
	require.Equal(t, PublicChannelStatusDegraded, items[0].State)
	require.NotNil(t, items[0].Availability7d)
	require.InDelta(t, 98, *items[0].Availability7d, 1e-9)
	require.Equal(t, dataThrough, *items[0].ObservedAt)
	require.Equal(t, []PublicChannelStatusTimelinePoint{
		{Status: PublicChannelStatusOperational, CheckedAt: firstBucket},
		{Status: PublicChannelStatusDegraded, CheckedAt: secondBucket},
	}, items[0].Timeline)
}

func TestChannelMonitorV2PublicSummaryUsesTheConsolePlatformMatrix(t *testing.T) {
	computedAt := time.Date(2026, 8, 16, 9, 0, 0, 0, time.UTC)
	repo := &channelMonitorV2RepoStub{
		config: ChannelMonitorV2Config{Enabled: true},
		snap: &ChannelMonitorV2Snapshot{
			Coverage: ChannelMonitorV2Coverage{ComputedAt: computedAt},
			Metrics:  ChannelMonitorV2Metric{RequestCount: 10},
			Health:   ChannelMonitorV2Health{Overall: "healthy"},
		},
		matrix: &ChannelMonitorV2Matrix{
			Coverage: ChannelMonitorV2Coverage{ComputedAt: computedAt},
			Items: []ChannelMonitorV2MatrixRow{{
				Platform: "anthropic",
				Metrics:  ChannelMonitorV2Metric{RequestCount: 10, ErrorRate: 0.1},
				Health:   ChannelMonitorV2Health{Overall: "warning"},
			}},
		},
	}
	service := NewChannelMonitorV2Service(repo)
	service.now = func() time.Time { return computedAt }

	summary, err := service.GetPublicChannelStatusSummary(context.Background())

	require.NoError(t, err)
	require.Equal(t, ChannelMonitorV2GroupByPlatform, repo.group)
	require.True(t, repo.admin)
	require.Len(t, summary.Items, 1)
	require.Equal(t, "anthropic", summary.Items[0].Name)
	require.InDelta(t, 90, *summary.Items[0].Availability7d, 1e-9)
}
