//go:build unit

package service

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

type channelMonitorRuntimeStub struct {
	rt ChannelMonitorRuntime
}

func (s channelMonitorRuntimeStub) GetChannelMonitorRuntime(context.Context) ChannelMonitorRuntime {
	return s.rt
}

func TestRunCheck_DisabledReturnsDisabled(t *testing.T) {
	svc := NewChannelMonitorService(nil, nil)
	svc.SetRuntimeReader(channelMonitorRuntimeStub{rt: ChannelMonitorRuntime{Enabled: false}})

	_, err := svc.RunCheck(context.Background(), 1)
	require.ErrorIs(t, err, ErrChannelMonitorDisabled)
}

func TestRunCheck_NilRuntimeReaderFailsClosed(t *testing.T) {
	svc := NewChannelMonitorService(nil, nil)

	_, err := svc.RunCheck(context.Background(), 1)
	require.ErrorIs(t, err, ErrChannelMonitorDisabled)
}

func TestChannelMonitorRuntimeActiveProbesAllowed(t *testing.T) {
	require.False(t, (ChannelMonitorRuntime{Enabled: false}).ActiveProbesAllowed())
	require.True(t, (ChannelMonitorRuntime{Enabled: true}).ActiveProbesAllowed())
}
