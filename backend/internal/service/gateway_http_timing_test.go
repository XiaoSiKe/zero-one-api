package service

import (
	"context"
	"errors"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/pkg/gatewaytiming"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func timedHTTPContext(writer http.ResponseWriter) *gin.Context {
	c, _ := gin.CreateTestContext(writer)
	c.Request = httptest.NewRequest(http.MethodPost, "/v1/responses", nil).WithContext(
		gatewaytiming.Start(context.Background(), time.Now().Add(-200*time.Millisecond)))
	return c
}

func TestHTTPUsageTimingIsFrozenWithoutChangingSchedulerResult(t *testing.T) {
	gin.SetMode(gin.TestMode)
	c := timedHTTPContext(httptest.NewRecorder())
	attemptMs := 3
	attempt := &OpenAIForwardResult{Stream: true, FirstTokenMs: &attemptMs, Duration: 8 * time.Millisecond, Usage: OpenAIUsage{InputTokens: 7}}
	noOutput := OpenAIHTTPUsageResult(c, attempt)
	require.Nil(t, noOutput.FirstTokenMs, "metadata-only request must not inherit the attempt's placeholder")
	_, err := c.Writer.WriteString("data: {\"type\":\"response.output_text.delta\",\"delta\":\"ok\"}\n\n")
	require.NoError(t, err)
	require.NoError(t, flushHTTPStream(c, true))
	usage := OpenAIHTTPUsageResult(c, attempt)
	require.NotSame(t, attempt, usage)
	require.GreaterOrEqual(t, *usage.FirstTokenMs, 200)
	require.GreaterOrEqual(t, usage.Duration.Milliseconds(), int64(*usage.FirstTokenMs))
	require.Equal(t, 3, *attempt.FirstTokenMs)
	require.Equal(t, 8*time.Millisecond, attempt.Duration)
	require.Equal(t, attempt.Usage, usage.Usage)
	require.Nil(t, noOutput.FirstTokenMs, "earlier snapshot must not change after the first output")
	ops, _ := c.Get(OpsTimeToFirstTokenMsKey)
	require.Equal(t, int64(*usage.FirstTokenMs), ops)
	ws := &OpenAIForwardResult{Stream: true, OpenAIWSMode: true, FirstTokenMs: &attemptMs, Duration: 8 * time.Millisecond}
	require.Same(t, ws, OpenAIHTTPUsageResult(c, ws))
	plain := &ForwardResult{Stream: true, FirstTokenMs: &attemptMs, Duration: 8 * time.Millisecond}
	plainUsage := HTTPUsageResult(c, plain)
	require.GreaterOrEqual(t, *plainUsage.FirstTokenMs, 200)
	require.Equal(t, 3, *plain.FirstTokenMs)
}

func TestHTTPFirstOutputWaitsForCompleteFrameAndSuccessfulFlush(t *testing.T) {
	gin.SetMode(gin.TestMode)
	for _, passthrough := range []bool{false, true} {
		name := "native"
		if passthrough {
			name = "passthrough"
		}
		t.Run(name, func(t *testing.T) {
			blankGate, flushGate := make(chan struct{}), make(chan struct{})
			blankWaiting := make(chan struct{})
			writer := newOpenAIResponseFlushRecorder()
			writer.blockFlush, writer.flushBlocked, writer.releaseFlush = 1, make(chan struct{}), flushGate
			c := timedHTTPContext(writer)
			timing := gatewaytiming.FromContext(c.Request.Context())
			body := &stagedOpenAISSEReadCloser{
				segments: [][]byte{
					[]byte("data: {\"type\":\"response.created\"}\n\ndata: {\"type\":\"response.output_text.delta\",\"delta\":\"ok\"}\n"),
					[]byte("\n"),
					[]byte("data: {\"type\":\"response.completed\",\"response\":{\"usage\":{\"input_tokens\":1,\"output_tokens\":1}}}\n\n"),
				}, gates: []<-chan struct{}{nil, blankGate}, waiting: []chan struct{}{nil, blankWaiting},
			}
			svc := &OpenAIGatewayService{cfg: &config.Config{}}
			resp := &http.Response{Header: http.Header{}, Body: body}
			account := &Account{ID: 1, Platform: PlatformOpenAI}
			done := make(chan error, 1)
			go func() {
				var err error
				if passthrough {
					_, err = svc.handleStreamingResponsePassthrough(c.Request.Context(), resp, c, account, time.Now(), "model", "model")
				} else {
					_, err = svc.handleStreamingResponse(c.Request.Context(), resp, c, account, time.Now(), "model", "model")
				}
				done <- err
			}()
			<-blankWaiting
			require.Nil(t, timing.Snapshot().FirstOutputMs, "a data line is not a dispatched SSE event")
			close(blankGate)
			<-writer.flushBlocked
			require.Nil(t, timing.Snapshot().FirstOutputMs, "blocked flush must not be called a delivered token")
			close(flushGate)
			require.NoError(t, <-done)
			require.GreaterOrEqual(t, *timing.Snapshot().FirstOutputMs, 200)
		})
	}
}

type failedTimingFlusher struct{ gin.ResponseWriter }

func (w *failedTimingFlusher) FlushError() error { return errors.New("synthetic flush failure") }

type failedUnderlyingTimingFlusher struct{ *httptest.ResponseRecorder }

func (w *failedUnderlyingTimingFlusher) FlushError() error {
	return errors.New("underlying transport flush failure")
}

func TestHTTPFirstOutputObservesFlushFailureBelowGin(t *testing.T) {
	gin.SetMode(gin.TestMode)
	w := &failedUnderlyingTimingFlusher{httptest.NewRecorder()}
	c := timedHTTPContext(w)
	_, err := c.Writer.WriteString("data: {\"type\":\"response.output_text.delta\",\"delta\":\"ok\"}\n\n")
	require.NoError(t, err)
	require.ErrorContains(t, flushHTTPStream(c, true), "underlying transport flush failure")
	require.Nil(t, gatewaytiming.FromContext(c.Request.Context()).Snapshot().FirstOutputMs)
	require.True(t, c.Writer.Written(), "Gin must still commit its deferred response headers")
}

func TestHTTPFirstOutputDoesNotTreatEOFAsEventDelimiter(t *testing.T) {
	gin.SetMode(gin.TestMode)
	for _, path := range []string{"native", "passthrough", "raw Chat"} {
		t.Run(path, func(t *testing.T) {
			c := timedHTTPContext(httptest.NewRecorder())
			payload := `data: {"type":"response.completed","response":{"output":[{"type":"message","content":[{"type":"output_text","text":"hello"}]}],"usage":{"input_tokens":1,"output_tokens":1}}}`
			if path == "raw Chat" {
				payload = `data: {"choices":[{"delta":{"content":"hello"},"finish_reason":"stop"}],"usage":{"prompt_tokens":1,"completion_tokens":1}}`
			}
			resp := &http.Response{StatusCode: 200, Header: http.Header{}, Body: io.NopCloser(strings.NewReader(payload))}
			svc := &OpenAIGatewayService{cfg: &config.Config{}}
			account := &Account{ID: 1, Platform: PlatformOpenAI, Type: AccountTypeAPIKey}
			switch path {
			case "native":
				_, _ = svc.handleStreamingResponse(c.Request.Context(), resp, c, account, time.Now(), "model", "model")
			case "passthrough":
				_, _ = svc.handleStreamingResponsePassthrough(c.Request.Context(), resp, c, account, time.Now(), "model", "model")
			case "raw Chat":
				_, _ = svc.streamRawChatCompletions(c, resp, account, "model", "model", "model", nil, nil, time.Now(), 0)
			}
			require.Nil(t, gatewaytiming.FromContext(c.Request.Context()).Snapshot().FirstOutputMs)
		})
	}
}

func TestHTTPFirstOutputIgnoresFailedWritesFlushesAndPreambles(t *testing.T) {
	gin.SetMode(gin.TestMode)
	c := timedHTTPContext(httptest.NewRecorder())
	_, err := c.Writer.WriteString(": keepalive\n\n")
	require.NoError(t, err)
	require.NoError(t, flushHTTPStream(c, false))
	require.Nil(t, gatewaytiming.FromContext(c.Request.Context()).Snapshot().FirstOutputMs)
	c.Writer = &failedTimingFlusher{c.Writer}
	require.Error(t, flushHTTPStream(c, true))
	require.Nil(t, gatewaytiming.FromContext(c.Request.Context()).Snapshot().FirstOutputMs)
	for _, failing := range []bool{false, true} {
		w := newOpenAIResponseFlushRecorder()
		if failing {
			w.failAfterWrites = 0
		}
		c := timedHTTPContext(w)
		payload := "data: {\"type\":\"response.created\"}\n\n"
		if failing {
			payload += "data: {\"type\":\"response.output_text.delta\",\"delta\":\"ok\"}\n\n"
		}
		payload += "data: {\"type\":\"response.completed\",\"response\":{\"usage\":{\"input_tokens\":1,\"output_tokens\":1}}}\n\n"
		svc := &OpenAIGatewayService{cfg: &config.Config{}}
		_, _ = svc.handleStreamingResponse(c.Request.Context(), &http.Response{Header: http.Header{}, Body: io.NopCloser(strings.NewReader(payload))}, c,
			&Account{ID: 1, Platform: PlatformOpenAI}, time.Now(), "model", "model")
		require.Nil(t, gatewaytiming.FromContext(c.Request.Context()).Snapshot().FirstOutputMs)
	}
}

func TestVisibleOutputClassifiersExcludeProtocolScaffolding(t *testing.T) {
	for _, payload := range []string{
		`null`, `{"choices":[null]}`, `{"choices":[{"delta":{"role":"assistant","content":""}}]}`,
		`{"choices":[{"delta":{"tool_calls":[{"id":"call_1","function":{"name":"tool","arguments":""}}]}}]}`,
		`{"type":"message_start","message":{"role":"assistant"}}`, `{"type":"content_block_start","content_block":{"type":"tool_use","input":{}}}`,
		`{"type":"response.output_text.delta","delta":{}}`, `{"type":"response.output_text.delta","delta":123}`,
	} {
		require.False(t, httpSSEFrameHasVisibleOutput("data: "+payload+"\n\n"), payload)
	}
	for _, payload := range []string{
		`{"choices":[{"delta":{"content":" "}}]}`, `{"choices":[{"delta":{"function_call":{"arguments":"{}"}}}]}`,
		`{"type":"response.output_text.delta","delta":"ok"}`, `{"type":"response.function_call_arguments.delta","delta":"{}"}`,
		`{"type":"content_block_delta","delta":{"type":"thinking_delta","thinking":"thinking"}}`,
		`{"type":"response.completed","response":{"output":[{"type":"message","content":[{"type":"output_text","text":"ok"}]}]}}`,
		`{"type":"response.refusal.done","refusal":"No."}`,
		`{"type":"response.content_part.done","part":{"type":"refusal","refusal":"No."}}`,
		`{"type":"response.completed","response":{"output":[{"type":"message","content":[{"type":"refusal","refusal":"No."}]}]}}`,
	} {
		require.True(t, httpSSEFrameHasVisibleOutput("data: "+payload+"\n\n"), payload)
	}
}
