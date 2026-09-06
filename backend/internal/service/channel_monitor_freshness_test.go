package service

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestBuildUserViewTreatsOverdueProbeAsUnavailable(t *testing.T) {
	now := time.Date(2026, 9, 6, 10, 0, 0, 0, time.UTC)
	monitor := &ChannelMonitor{ID: 1, PrimaryModel: "gpt-5.5", IntervalSeconds: 60, JitterSeconds: 10}
	latest := &ChannelMonitorLatest{
		Model: "gpt-5.5", Status: MonitorStatusOperational, CheckedAt: now.Add(-4 * time.Minute),
	}
	summary := MonitorStatusSummary{PrimaryStatus: MonitorStatusOperational}

	view := buildUserViewFromSummaryAt(monitor, summary, latest, nil, now)
	require.Empty(t, view.PrimaryStatus)
	require.Nil(t, view.PrimaryLatencyMs)
	require.Nil(t, view.PrimaryPingLatencyMs)
}

func TestBuildUserViewKeepsRecentProbeOperational(t *testing.T) {
	now := time.Date(2026, 9, 6, 10, 0, 0, 0, time.UTC)
	latency := 250
	monitor := &ChannelMonitor{ID: 1, PrimaryModel: "gpt-5.5", IntervalSeconds: 60, JitterSeconds: 10}
	latest := &ChannelMonitorLatest{
		Model: "gpt-5.5", Status: MonitorStatusOperational, LatencyMs: &latency,
		PingLatencyMs: &latency, CheckedAt: now.Add(-time.Minute),
	}
	summary := MonitorStatusSummary{PrimaryStatus: MonitorStatusOperational, PrimaryLatencyMs: &latency}

	view := buildUserViewFromSummaryAt(monitor, summary, latest, nil, now)
	require.Equal(t, MonitorStatusOperational, view.PrimaryStatus)
	require.Equal(t, &latency, view.PrimaryLatencyMs)
	require.Equal(t, &latency, view.PrimaryPingLatencyMs)
}

func TestCurrentMonitorStatusSummaryClearsStaleExtraModels(t *testing.T) {
	now := time.Date(2026, 9, 6, 10, 0, 0, 0, time.UTC)
	checkedAt := now.Add(-4 * time.Minute)
	latency := 250
	summary := CurrentMonitorStatusSummary(
		&ChannelMonitor{IntervalSeconds: 60},
		MonitorStatusSummary{
			PrimaryStatus: MonitorStatusOperational,
			ExtraModels:   []ExtraModelStatus{{Model: "gpt-5.6-sol", Status: MonitorStatusOperational, LatencyMs: &latency}},
		},
		&checkedAt,
		now,
	)
	require.Empty(t, summary.PrimaryStatus)
	require.Empty(t, summary.ExtraModels[0].Status)
	require.Nil(t, summary.ExtraModels[0].LatencyMs)
}
