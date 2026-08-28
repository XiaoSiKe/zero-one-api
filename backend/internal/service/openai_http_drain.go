package service

import (
	"context"
	"io"
	"net/http"
	"sync"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/gatewaytiming"
	"github.com/gin-gonic/gin"
)

type httpUpstreamClientContextKey struct{}

// Preserve the HTTP client's cancellation signal across WithoutCancel. The
// upstream may still finish billing after disconnect; its no-progress drain is
// bounded by the already configured stream-data interval, including header wait.
// WS contexts do not acquire this marker and keep their per-turn lifecycle.
func withHTTPUpstreamClientContext(ctx context.Context, c *gin.Context) context.Context {
	if c == nil || c.Request == nil || c.Request.Method != http.MethodPost || GetOpenAIClientTransport(c) == OpenAIClientTransportWS {
		return ctx
	}
	if ctx.Value(httpUpstreamClientContextKey{}) != nil {
		return ctx
	}
	return context.WithValue(ctx, httpUpstreamClientContextKey{}, c.Request.Context())
}

type httpDrainGuard struct {
	mu           sync.Mutex
	cancel       context.CancelFunc
	stopClient   func() bool
	timer        *time.Timer
	interval     time.Duration
	clientGone   bool
	closed       bool
	lastProgress time.Time
	body         io.ReadCloser
}

func newHTTPDrainGuard(upstreamCtx, clientCtx context.Context, interval time.Duration) (context.Context, *httpDrainGuard) {
	ctx, cancel := context.WithCancel(upstreamCtx)
	guard := &httpDrainGuard{cancel: cancel, interval: interval}
	guard.stopClient = context.AfterFunc(clientCtx, func() {
		guard.mu.Lock()
		defer guard.mu.Unlock()
		if guard.closed {
			return
		}
		guard.clientGone = true
		guard.lastProgress = time.Now()
		guard.timer = time.AfterFunc(interval, guard.expire)
	})
	return ctx, guard
}

func (g *httpDrainGuard) expire() {
	g.mu.Lock()
	if g.closed {
		g.mu.Unlock()
		return
	}
	if remaining := g.interval - time.Since(g.lastProgress); remaining > 0 {
		g.timer.Reset(remaining)
		g.mu.Unlock()
		return
	}
	g.closed = true
	body := g.body
	g.mu.Unlock()
	g.cancel()
	if body != nil {
		_ = body.Close()
	}
}

func (g *httpDrainGuard) progress() {
	g.mu.Lock()
	defer g.mu.Unlock()
	if !g.closed && g.clientGone && g.timer != nil {
		g.lastProgress = time.Now()
		g.timer.Reset(g.interval)
	}
}

func (g *httpDrainGuard) finish() {
	g.mu.Lock()
	g.closed = true
	if g.timer != nil {
		g.timer.Stop()
	}
	g.mu.Unlock()
	g.stopClient()
	g.cancel()
}

func (g *httpDrainGuard) wrapBody(body io.ReadCloser) io.ReadCloser {
	wrapped := &httpDrainBody{ReadCloser: body, guard: g}
	g.mu.Lock()
	closed := g.closed
	g.body = wrapped
	g.mu.Unlock()
	if closed {
		_ = wrapped.Close()
	} else {
		g.progress() // response headers are progress before the first body read
	}
	return wrapped
}

type httpDrainBody struct {
	io.ReadCloser
	guard    *httpDrainGuard
	once     sync.Once
	closeErr error
}

func (b *httpDrainBody) Read(p []byte) (int, error) {
	n, err := b.ReadCloser.Read(p)
	if n > 0 {
		b.guard.progress()
	}
	if err != nil {
		b.guard.finish()
	}
	return n, err
}

func (b *httpDrainBody) Close() error {
	b.once.Do(func() {
		b.closeErr = b.ReadCloser.Close()
		b.guard.finish()
	})
	return b.closeErr
}

func (s *OpenAIGatewayService) guardHTTPDrain(request *http.Request) (*http.Request, *httpDrainGuard) {
	if request == nil || s.cfg == nil || s.cfg.Gateway.StreamDataIntervalTimeout <= 0 {
		return request, nil
	}
	clientCtx, ok := request.Context().Value(httpUpstreamClientContextKey{}).(context.Context)
	if !ok {
		return request, nil
	}
	ctx, guard := newHTTPDrainGuard(request.Context(), clientCtx, time.Duration(s.cfg.Gateway.StreamDataIntervalTimeout)*time.Second)
	return request.WithContext(ctx), guard
}

func observeHTTPUpstreamHeaders(request *http.Request) func() {
	if request == nil {
		return func() {}
	}
	return gatewaytiming.Observe(request.Context(), gatewaytiming.UpstreamHeaders)
}
