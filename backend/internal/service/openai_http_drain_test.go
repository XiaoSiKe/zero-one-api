package service

import (
	"context"
	"io"
	"net/http"
	"net/http/httptest"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestHTTPDrainGuardLeavesLiveHeaderWaitUnchanged(t *testing.T) {
	client, cancel := context.WithCancel(context.Background())
	defer cancel()
	ctx, guard := newHTTPDrainGuard(context.WithoutCancel(client), client, 40*time.Millisecond)
	defer guard.finish()
	select {
	case <-ctx.Done():
		t.Fatal("the disconnect-only guard changed a live request's unlimited header wait")
	case <-time.After(60 * time.Millisecond):
	}
	cancel()
	select {
	case <-ctx.Done():
	case <-time.After(time.Second):
		t.Fatal("canceled request with no response headers did not release its transport")
	}
}

type countedDrainBody struct {
	io.ReadCloser
	closes atomic.Int32
}

func (b *countedDrainBody) Close() error { b.closes.Add(1); return b.ReadCloser.Close() }

func TestHTTPDrainGuardResetsOnProgressAndClosesExactlyOnce(t *testing.T) {
	client, cancel := context.WithCancel(context.Background())
	defer cancel()
	ctx, guard := newHTTPDrainGuard(context.WithoutCancel(client), client, 250*time.Millisecond)
	defer guard.finish()
	reader, writer := io.Pipe()
	defer func() { require.NoError(t, writer.Close()) }()
	inner := &countedDrainBody{ReadCloser: reader}
	body := guard.wrapBody(inner)
	defer func() { require.NoError(t, body.Close()) }()
	cancel()
	for i := 0; i < 4; i++ {
		time.Sleep(100 * time.Millisecond)
		guard.progress()
		require.NoError(t, ctx.Err(), "upstream progress must keep billing drain alive")
	}
	select {
	case <-ctx.Done():
	case <-time.After(time.Second):
		t.Fatal("stalled body was not reclaimed")
	}
	require.NoError(t, body.Close())
	require.NoError(t, body.Close())
	require.Equal(t, int32(1), inner.closes.Load())
}

type hangingHTTPHeaders struct {
	HTTPUpstream
	started chan struct{}
}

func (u *hangingHTTPHeaders) Do(req *http.Request, _ string, _ int64, _ int) (*http.Response, error) {
	close(u.started)
	<-req.Context().Done()
	return nil, req.Context().Err()
}

func TestHTTPDrainCancellationCoversActualHeaderRoundTrip(t *testing.T) {
	gin.SetMode(gin.TestMode)
	client, cancel := context.WithCancel(context.Background())
	defer cancel()
	c, _ := gin.CreateTestContext(httptest.NewRecorder())
	c.Request = httptest.NewRequest(http.MethodPost, "/v1/responses", nil).WithContext(client)
	upstreamCtx, release := detachUpstreamContext(withHTTPUpstreamClientContext(client, c))
	defer release()
	req := httptest.NewRequest(http.MethodPost, "https://mock.invalid/v1/responses", nil).WithContext(upstreamCtx)
	upstream := &hangingHTTPHeaders{started: make(chan struct{})}
	svc := &OpenAIGatewayService{cfg: &config.Config{Gateway: config.GatewayConfig{StreamDataIntervalTimeout: 1}}, httpUpstream: upstream}
	done := make(chan error, 1)
	go func() { _, err := svc.doOpenAIUpstream(req, "", &Account{ID: 1}); done <- err }()
	<-upstream.started
	cancel()
	select {
	case err := <-done:
		require.ErrorIs(t, err, context.Canceled)
	case <-time.After(1500 * time.Millisecond):
		t.Fatal("actual upstream header round trip outlived canceled-client idle budget")
	}
}

func TestHTTPDrainGuardDoesNotChangeWSOrDisabledPolicy(t *testing.T) {
	gin.SetMode(gin.TestMode)
	c, _ := gin.CreateTestContext(httptest.NewRecorder())
	c.Request = httptest.NewRequest(http.MethodGet, "/v1/responses", nil)
	ctx := context.Background()
	require.Equal(t, ctx, withHTTPUpstreamClientContext(ctx, c))
	req := httptest.NewRequest(http.MethodGet, "https://mock.invalid", nil)
	svc := &OpenAIGatewayService{cfg: &config.Config{Gateway: config.GatewayConfig{StreamDataIntervalTimeout: 1}}}
	out, guard := svc.guardHTTPDrain(req)
	require.Same(t, req, out)
	require.Nil(t, guard)
	svc.cfg.Gateway.StreamDataIntervalTimeout = 0
	c.Request.Method = http.MethodPost
	req = req.WithContext(withHTTPUpstreamClientContext(ctx, c))
	out, guard = svc.guardHTTPDrain(req)
	require.Same(t, req, out)
	require.Nil(t, guard)
}
