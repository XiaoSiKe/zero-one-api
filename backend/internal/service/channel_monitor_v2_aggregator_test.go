//go:build unit

package service

import (
	"context"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestChannelMonitorV2AggregatorRepairsStaleCursorAndContinuesAfterRestart(t *testing.T) {
	stale := time.Now().UTC().Truncate(time.Minute).Add(-14 * 24 * time.Hour)
	repo := &channelMonitorV2RepoStub{watermark: &ChannelMonitorV2AggregationWatermark{
		BackfillCursor:     stale,
		ErrorCoverageStart: stale,
		// Migration residue without data_through must not be treated as real coverage.
		HasData: false,
	}}
	runtime := channelMonitorV2RuntimeStub{rt: ChannelMonitorRuntime{Enabled: true, Mode: ChannelMonitorModeV2}}

	first := NewChannelMonitorV2Aggregator(repo, nil, runtime)
	first.ctx = context.Background()
	first.runOnce()
	require.Len(t, repo.recomputed, 1)
	seed := repo.recomputed[0]
	require.WithinDuration(t, seed.end.Add(-channelMonitorV2BootstrapFirst), seed.start, time.Minute)
	require.True(t, seed.start.After(stale), "stale migration cursor must be replaced by the real bootstrap start")
	require.Equal(t, seed.start, repo.watermark.BackfillCursor)
	require.False(t, repo.watermark.DataThrough.IsZero())

	// A fresh process restores the real seed cursor, refreshes the overlap, then
	// continues immediately before that seed. The historical ranges meet exactly.
	restarted := NewChannelMonitorV2Aggregator(repo, nil, runtime)
	restarted.ctx = context.Background()
	restarted.runOnce()
	require.Len(t, repo.recomputed, 3)
	historical := repo.recomputed[2]
	require.Equal(t, seed.start, historical.end)
	require.True(t, historical.start.Before(historical.end))
	require.Equal(t, historical.start, repo.watermark.BackfillCursor)
}

func TestChannelMonitorV2MaxChunkForDepth(t *testing.T) {
	now := time.Date(2026, 8, 8, 12, 0, 0, 0, time.UTC)

	// Within last day → tightest ceiling (2h).
	require.Equal(t, channelMonitorV2MaxChunkNear1d, channelMonitorV2MaxChunkForDepth(now, now.Add(-2*time.Hour)))
	// Between 1d and 7d → 4h.
	require.Equal(t, channelMonitorV2MaxChunkNear7d, channelMonitorV2MaxChunkForDepth(now, now.Add(-2*24*time.Hour)))
	// Older than 7d → 6h (never 24h default).
	require.Equal(t, channelMonitorV2MaxChunkFar, channelMonitorV2MaxChunkForDepth(now, now.Add(-10*24*time.Hour)))
	require.Less(t, channelMonitorV2MaxChunkFar, 24*time.Hour)
	require.Equal(t, time.Hour, channelMonitorV2BackfillChunkInit)
	require.Equal(t, 15*time.Minute, channelMonitorV2MinBackfillChunk)
}

func TestChannelMonitorV2AggregatorAdaptiveChunk(t *testing.T) {
	s := NewChannelMonitorV2Aggregator(nil, nil, nil)
	now := time.Date(2026, 8, 8, 12, 0, 0, 0, time.UTC)
	cursor := now.Add(-3 * time.Hour)

	// Failure shrinks chunk and sets backoff floor.
	s.backfillChunk = 2 * time.Hour
	s.recordBackfillFailure(now, cursor)
	require.Equal(t, time.Hour, s.backfillChunk)
	require.Equal(t, time.Minute, s.nextWaitFloor)
	require.Equal(t, 1, s.backfillFailures)

	// Repeated failure halves again and raises floor.
	s.recordBackfillFailure(now, cursor)
	require.Equal(t, 30*time.Minute, s.backfillChunk)
	require.Equal(t, 2*time.Minute, s.nextWaitFloor)

	// Fast success grows within depth ceiling and clears backoff.
	s.recordBackfillSuccess(cursor.Add(-30*time.Minute), 5*time.Second, now)
	require.Equal(t, 0, s.backfillFailures)
	require.Equal(t, time.Duration(0), s.nextWaitFloor)
	require.Greater(t, s.backfillChunk, 30*time.Minute)
	require.LessOrEqual(t, s.backfillChunk, channelMonitorV2MaxChunkForDepth(now, cursor.Add(-30*time.Minute)))
}
