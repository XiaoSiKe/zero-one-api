package service

import (
	"net/http"
	"strings"

	"github.com/Wei-Shaw/sub2api/internal/pkg/gatewaytiming"
	"github.com/gin-gonic/gin"
	"github.com/tidwall/gjson"
)

func markHTTPFirstOutput(c *gin.Context) {
	if c != nil && c.Request != nil && gatewaytiming.FromContext(c.Request.Context()) != nil {
		if gatewaytiming.MarkFirstOutput(c.Request.Context()) {
			SetOpsLatencyMs(c, OpsTimeToFirstTokenMsKey, 0)
		}
	}
}

// flushHTTPStream never records a token for an unsuccessful flush. Callers must
// set visible only for complete events whose writes succeeded, not protocol
// preambles or events only observed while draining a disconnected upstream.
func flushHTTPStream(c *gin.Context, visible bool) error {
	if err := FlushGatewayResponseWriter(c.Writer); err != nil {
		return err
	}
	if visible {
		markHTTPFirstOutput(c)
	}
	return nil
}

// FlushGatewayResponseWriter preserves Gin's deferred header commit while
// exposing the transport's FlushError. ResponseController alone stops at Gin's
// Flush() method, which discards that error before reaching its Unwrap target.
// Wrappers with lifetime/locking behavior implement FlushError themselves.
func FlushGatewayResponseWriter(writer gin.ResponseWriter) error {
	writer.WriteHeaderNow()
	var current http.ResponseWriter = writer
	for {
		if flusher, ok := current.(interface{ FlushError() error }); ok {
			return flusher.FlushError()
		}
		if wrapped, ok := current.(interface{ Unwrap() http.ResponseWriter }); ok {
			current = wrapped.Unwrap()
			continue
		}
		return http.NewResponseController(current).Flush()
	}
}

func chatStreamDataHasVisibleOutput(data string) bool {
	if !gjson.Valid(data) {
		return false
	}
	for _, choice := range gjson.Get(data, "choices").Array() {
		delta := choice.Get("delta")
		for _, field := range []string{"content", "reasoning_content", "reasoning", "refusal"} {
			value := delta.Get(field)
			if value.Type == gjson.String && value.Str != "" {
				return true
			}
		}
		for _, call := range delta.Get("tool_calls").Array() {
			if call.Get("function.arguments").String() != "" || call.Get("custom.input").String() != "" {
				return true
			}
		}
		if delta.Get("function_call.arguments").String() != "" {
			return true
		}
	}
	return false
}

func anthropicStreamDataHasVisibleOutput(data string) bool {
	if !gjson.Valid(data) {
		return false
	}
	switch gjson.Get(data, "type").String() {
	case "content_block_delta":
		for _, field := range []string{"delta.text", "delta.thinking", "delta.partial_json"} {
			if value := gjson.Get(data, field); value.Type == gjson.String && value.Str != "" {
				return true
			}
		}
	case "content_block_start":
		for _, field := range []string{"content_block.text", "content_block.thinking"} {
			if value := gjson.Get(data, field); value.Type == gjson.String && value.Str != "" {
				return true
			}
		}
		input := gjson.Get(data, "content_block.input")
		return input.IsObject() && len(input.Map()) > 0
	}
	return false
}

// Generated downstream frames are already complete; inspect their existing data
// strings rather than wrapping/rebuffering the whole HTTP/SSE response.
func httpSSEFrameHasVisibleOutput(frame string) bool {
	for _, line := range strings.Split(frame, "\n") {
		data, ok := extractOpenAISSEDataLine(line)
		if ok && (openAIStreamDataStartsVisibleOutput(data, "") || chatStreamDataHasVisibleOutput(data) || anthropicStreamDataHasVisibleOutput(data)) {
			return true
		}
	}
	return false
}

// OpenAIHTTPUsageResult freezes request timing without modifying the attempt
// result subsequently consumed by account health/scheduling. WS remains per-turn.
func OpenAIHTTPUsageResult(c *gin.Context, result *OpenAIForwardResult) *OpenAIForwardResult {
	if result == nil || result.OpenAIWSMode || c == nil || c.Request == nil || GetOpenAIClientTransport(c) == OpenAIClientTransportWS {
		return result
	}
	timing := gatewaytiming.FromContext(c.Request.Context())
	if timing == nil {
		return result
	}
	snapshot := timing.Snapshot()
	cloned := *result
	cloned.Duration = snapshot.Duration
	cloned.FirstTokenMs = snapshot.FirstOutputMs
	if !result.Stream {
		cloned.FirstTokenMs = nil
	}
	return &cloned
}

func HTTPUsageResult(c *gin.Context, result *ForwardResult) *ForwardResult {
	if result == nil || c == nil || c.Request == nil {
		return result
	}
	timing := gatewaytiming.FromContext(c.Request.Context())
	if timing == nil {
		return result
	}
	snapshot := timing.Snapshot()
	cloned := *result
	cloned.Duration = snapshot.Duration
	cloned.FirstTokenMs = snapshot.FirstOutputMs
	if !result.Stream {
		cloned.FirstTokenMs = nil
	}
	return &cloned
}
