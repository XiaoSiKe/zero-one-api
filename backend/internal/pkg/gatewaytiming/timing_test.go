package gatewaytiming

import (
	"context"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func TestRequestTimingIncludesAdmissionAndKeepsFrozenSnapshots(t *testing.T) {
	ctx := Start(context.Background(), time.Now().Add(-250*time.Millisecond))
	require.Same(t, FromContext(ctx), FromContext(Start(ctx, time.Now())))
	require.Nil(t, FromContext(ctx).Snapshot().FirstOutputMs)
	Add(ctx, Auth, 30*time.Millisecond)
	Add(ctx, UserQueue, 60*time.Millisecond)
	Add(ctx, UpstreamHeaders, 10*time.Millisecond)
	Add(ctx, UpstreamHeaders, 20*time.Millisecond)
	Attempt(ctx)
	Attempt(ctx)
	MarkFirstOutput(ctx)
	one := FromContext(ctx).Snapshot()
	require.GreaterOrEqual(t, *one.FirstOutputMs, 250)
	require.GreaterOrEqual(t, one.Duration.Milliseconds(), int64(*one.FirstOutputMs))
	require.Equal(t, int64(30), one.AuthMs)
	require.Equal(t, int64(60), one.UserQueueMs)
	require.Equal(t, int64(30), one.UpstreamHeadersMs)
	require.Equal(t, 2, one.Attempts)
	*one.FirstOutputMs = -1
	MarkFirstOutput(ctx)
	require.GreaterOrEqual(t, *FromContext(ctx).Snapshot().FirstOutputMs, 250)
}

func TestRequestTimingCanceledClientDoesNotAcquireFirstOutput(t *testing.T) {
	parent, cancel := context.WithCancel(context.Background())
	ctx := Start(parent, time.Now())
	cancel()
	MarkFirstOutput(ctx)
	require.Nil(t, FromContext(ctx).Snapshot().FirstOutputMs)
	MarkFirstOutput(context.Background())
	Add(context.Background(), Auth, time.Second)
	Attempt(context.Background())
}

func TestStageCompletionIsOnceOnly(t *testing.T) {
	ctx := Start(context.Background(), time.Now())
	finish := Observe(ctx, Routing)
	finish()
	before := FromContext(ctx).Snapshot().RoutingMs
	finish()
	require.Equal(t, before, FromContext(ctx).Snapshot().RoutingMs)
}
