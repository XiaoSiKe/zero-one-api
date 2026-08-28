//go:build unit

package handler

import (
	"context"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"sync"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
	"go.uber.org/zap"
)

type httpDrainSlotCache struct {
	fakeConcurrencyCache
	mu              sync.Mutex
	busy            map[int64]bool
	releases        map[int64]int
	accountReleased chan struct{}
	userReleased    chan struct{}
	accountOnce     sync.Once
	userOnce        sync.Once
}

func (s *httpDrainSlotCache) AcquireAccountSlot(_ context.Context, id int64, _ int, _ string) (bool, error) {
	s.mu.Lock()
	defer s.mu.Unlock()
	if s.busy[id] {
		return false, nil
	}
	s.busy[id] = true
	return true, nil
}

func (s *httpDrainSlotCache) ReleaseAccountSlot(_ context.Context, id int64, _ string) error {
	s.mu.Lock()
	s.busy[id] = false
	s.releases[id]++
	s.mu.Unlock()
	if id == 1 {
		s.accountOnce.Do(func() { close(s.accountReleased) })
	}
	return nil
}

func (s *httpDrainSlotCache) ReleaseUserSlot(context.Context, int64, string) error {
	s.userOnce.Do(func() { close(s.userReleased) })
	return nil
}

type httpDrainSlotUpstream struct {
	service.HTTPUpstream
	firstBody io.ReadCloser
	started   chan struct{}
}

func (u *httpDrainSlotUpstream) Do(_ *http.Request, _ string, id int64, _ int) (*http.Response, error) {
	if id == 1 {
		close(u.started)
		return &http.Response{StatusCode: 200, Header: http.Header{}, Body: u.firstBody}, nil
	}
	return &http.Response{StatusCode: 200, Header: http.Header{}, Body: io.NopCloser(strings.NewReader(
		"data: {\"type\":\"response.output_text.delta\",\"delta\":\"second\"}\n\n" +
			"data: {\"type\":\"response.completed\",\"response\":{\"usage\":{\"input_tokens\":2,\"output_tokens\":1}}}\n\n"))}, nil
}

func TestNativeHTTPDrainKeepsAccountBusyButReleasesUser(t *testing.T) {
	gin.SetMode(gin.TestMode)
	cache := &httpDrainSlotCache{
		busy: make(map[int64]bool), releases: make(map[int64]int),
		accountReleased: make(chan struct{}), userReleased: make(chan struct{}),
	}
	concurrency := service.NewConcurrencyService(cache)
	reader, writer := io.Pipe()
	defer reader.Close()
	defer writer.Close()
	upstream := &httpDrainSlotUpstream{firstBody: reader, started: make(chan struct{})}
	cfg := &config.Config{Gateway: config.GatewayConfig{StreamDataIntervalTimeout: 1}}
	gw := service.NewOpenAIGatewayService(nil, nil, nil, nil, nil, nil, nil, cfg,
		nil, concurrency, nil, nil, nil, upstream, nil, nil, nil, nil, nil, nil, nil, nil)
	h := &OpenAIGatewayHandler{gatewayService: gw, concurrencyHelper: NewConcurrencyHelper(concurrency, SSEPingFormatComment, 0), cfg: cfg}
	account := func(id int64) *service.Account {
		return &service.Account{ID: id, Platform: service.PlatformOpenAI, Type: service.AccountTypeAPIKey,
			Concurrency: 1, Credentials: map[string]any{"api_key": "synthetic-key", "base_url": "https://mock.invalid"},
			Extra: map[string]any{"use_responses_api": true}}
	}
	requestCtx, cancel := context.WithCancel(context.Background())
	defer cancel()
	c, _ := gin.CreateTestContext(httptest.NewRecorder())
	c.Request = httptest.NewRequest(http.MethodPost, "/v1/responses", nil).WithContext(requestCtx)
	streamStarted := false
	userRelease, acquired := h.acquireResponsesUserSlot(c, 1, 1, true, &streamStarted, zap.NewNop())
	require.True(t, acquired)
	defer userRelease()
	accountRelease, result := h.acquireResponsesAccountSlot(c, nil, "", &service.AccountSelectionResult{
		Account: account(1), WaitPlan: &service.AccountWaitPlan{MaxConcurrency: 1, Timeout: time.Second, MaxWaiting: 2},
	}, true, &streamStarted, zap.NewNop())
	require.Equal(t, openAISlotAcquireOK, result)
	defer accountRelease()
	finished := make(chan *service.OpenAIForwardResult, 1)
	go func() {
		defer accountRelease()
		res, _ := gw.Forward(requestCtx, c, account(1), []byte(`{"model":"gpt-test","input":"first","stream":true}`))
		finished <- res
	}()
	defer func() { _ = reader.Close() }()
	<-upstream.started
	cancel()
	select {
	case <-cache.userReleased:
	case <-time.After(time.Second):
		t.Fatal("client cancellation did not release the user slot")
	}
	select {
	case <-cache.accountReleased:
		_ = reader.Close()
		<-finished
		t.Fatal("account was falsely advertised as idle while its upstream response was still draining")
	case <-time.After(40 * time.Millisecond):
	}

	// Request B sees A's real upstream occupancy and can use another account.
	_, acquired, err := h.concurrencyHelper.TryAcquireAccountSlot(context.Background(), 1, 1)
	require.NoError(t, err)
	require.False(t, acquired)
	releaseB, acquired, err := h.concurrencyHelper.TryAcquireAccountSlot(context.Background(), 2, 1)
	require.NoError(t, err)
	require.True(t, acquired)
	defer releaseB()
	second, _ := gin.CreateTestContext(httptest.NewRecorder())
	second.Request = httptest.NewRequest(http.MethodPost, "/v1/responses", nil)
	resB, err := gw.Forward(second.Request.Context(), second, account(2), []byte(`{"model":"gpt-test","input":"second","stream":true}`))
	require.NoError(t, err)
	require.Equal(t, 1, resB.Usage.OutputTokens)

	_, err = io.WriteString(writer, "data: {\"type\":\"response.completed\",\"response\":{\"usage\":{\"input_tokens\":7,\"output_tokens\":3}}}\n\n")
	require.NoError(t, err)
	_ = writer.Close()
	select {
	case res := <-finished:
		require.NotNil(t, res)
		require.Equal(t, 7, res.Usage.InputTokens)
		require.Equal(t, 3, res.Usage.OutputTokens)
	case <-time.After(time.Second):
		t.Fatal("upstream drain did not finish")
	}
	accountRelease()
	cache.mu.Lock()
	defer cache.mu.Unlock()
	require.False(t, cache.busy[1])
	require.Equal(t, 1, cache.releases[1])
}

func TestHTTPAccountReleasePreservesDisabledIdleAndWS(t *testing.T) {
	gin.SetMode(gin.TestMode)
	for _, tc := range []struct {
		name string
		cfg  *config.Config
		ws   bool
	}{
		{name: "no config"},
		{name: "idle disabled", cfg: &config.Config{}},
		{name: "WS", cfg: &config.Config{Gateway: config.GatewayConfig{StreamDataIntervalTimeout: 180}}, ws: true},
	} {
		t.Run(tc.name, func(t *testing.T) {
			ctx, cancel := context.WithCancel(context.Background())
			defer cancel()
			c, _ := gin.CreateTestContext(httptest.NewRecorder())
			c.Request = httptest.NewRequest(http.MethodPost, "/v1/responses", nil).WithContext(ctx)
			if tc.ws {
				service.SetOpenAIClientTransport(c, service.OpenAIClientTransportWS)
			}
			released := make(chan struct{})
			h := &OpenAIGatewayHandler{cfg: tc.cfg}
			release := h.wrapHTTPAccountRelease(c, ctx, func() { close(released) })
			cancel()
			select {
			case <-released:
			case <-time.After(time.Second):
				t.Fatal("legacy cancellation release was changed")
			}
			release() // a second call must not release twice
		})
	}
}
