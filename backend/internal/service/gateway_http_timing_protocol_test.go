//go:build unit

package service

import (
	"io"
	"net/http"
	"strings"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/pkg/apicompat"
	"github.com/Wei-Shaw/sub2api/internal/pkg/gatewaytiming"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestHTTPVisibleTimingAcrossProtocolAdapters(t *testing.T) {
	gin.SetMode(gin.TestMode)
	svc := &OpenAIGatewayService{cfg: &config.Config{}}
	account := rawChatCompletionsTestAccount()
	responses := "data: {\"type\":\"response.created\",\"response\":{\"id\":\"resp_timing\",\"model\":\"model\"}}\n\n" +
		"data: {\"type\":\"response.output_text.delta\",\"delta\":\"Hello\",\"output_index\":0,\"content_index\":0}\n\n" +
		"data: {\"type\":\"response.completed\",\"response\":{\"id\":\"resp_timing\",\"status\":\"completed\",\"output\":[{\"type\":\"message\",\"role\":\"assistant\",\"content\":[{\"type\":\"output_text\",\"text\":\"Hello\"}]}],\"usage\":{\"input_tokens\":7,\"output_tokens\":3}}}\n\n"
	chat := "data: {\"choices\":[{\"index\":0,\"delta\":{\"role\":\"assistant\",\"content\":\"\"}}]}\n\n" +
		"data: {\"choices\":[{\"index\":0,\"delta\":{\"content\":\"Hello\"}}]}\n\n" +
		"data: {\"choices\":[{\"index\":0,\"delta\":{},\"finish_reason\":\"stop\"}]}\n\n" +
		"data: {\"choices\":[],\"usage\":{\"prompt_tokens\":7,\"completion_tokens\":3}}\n\n" +
		"data: [DONE]\n\n"
	tests := []struct {
		name, input string
		call        func(*gin.Context, *http.Response) (*OpenAIForwardResult, error)
	}{
		{"Responses to Chat", responses, func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.handleChatStreamingResponse(r, c, account, "model", "model", "model", time.Now(), 0)
		}},
		{"Responses to Messages", responses, func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.handleAnthropicStreamingResponse(r, c, account, "model", "model", "model", time.Now())
		}},
		{"raw Chat", chat, func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.streamRawChatCompletions(c, r, account, "model", "model", "model", nil, nil, time.Now(), 0)
		}},
		{"Chat to Responses", chat, func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.streamChatCompletionsAsResponses(c, r, "model", nil, nil, false, nil, "model", "model", nil, nil, time.Now())
		}},
		{"Chat to Messages", chat, func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.streamChatCompletionsAsAnthropic(c, r, "model", "model", "model", nil, nil, time.Now())
		}},
		{"native Anthropic to Chat", miniAnthropicSSEStream(), func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.handleCCStreamingFromNativeAnthropic(r, c, "model", "model", "model", nil, time.Now(), true)
		}},
		{"native Anthropic to Responses", miniAnthropicSSEStream(), func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.handleResponsesStreamingFromNativeAnthropic(r, c, "model", "model", "model", nil, time.Now(), apicompat.ResponsesClientToolMapping{})
		}},
		{"native Anthropic passthrough", miniAnthropicSSEStream(), func(c *gin.Context, r *http.Response) (*OpenAIForwardResult, error) {
			return svc.handleNativeAnthropicStreamingResponse(c.Request.Context(), r, c, account, "model", "model", "model", nil, time.Now())
		}},
	}
	for _, tc := range tests {
		for _, mode := range []string{"visible", "empty", "write failure"} {
			t.Run(tc.name+"/"+mode, func(t *testing.T) {
				writer := newOpenAIResponseFlushRecorder()
				c := timedHTTPContext(writer)
				input := tc.input
				if mode == "empty" {
					input = strings.ReplaceAll(input, "Hello", "")
				}
				if mode == "write failure" {
					writer.failAfterWrites = 0
				}
				resp := &http.Response{StatusCode: 200, Header: http.Header{}, Body: io.NopCloser(strings.NewReader(input))}
				defer resp.Body.Close()
				result, err := tc.call(c, resp)
				require.NoError(t, err)
				require.NotNil(t, result)
				first := gatewaytiming.FromContext(c.Request.Context()).Snapshot().FirstOutputMs
				if mode == "visible" {
					require.NotNil(t, first)
					require.GreaterOrEqual(t, *first, 200)
				} else {
					require.Nil(t, first, "preambles or upstream-only drain must not become a visible token")
				}
			})
		}
	}
}
