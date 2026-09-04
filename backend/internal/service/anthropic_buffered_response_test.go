package service

import (
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/pkg/apicompat"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

// Exercise the four caller interfaces, including the native provider billing
// conversion, rather than reaching into the shared response accumulator.
func TestBufferedAnthropicResponseContract(t *testing.T) {
	type buffer func(*http.Response, *gin.Context) (int, int, error)
	paths := map[string]buffer{
		"gateway-chat": func(resp *http.Response, c *gin.Context) (int, int, error) {
			r, err := (&GatewayService{}).handleCCBufferedFromAnthropic(resp, c, "client-model", "provider-model", nil, time.Now())
			if err != nil {
				return 0, 0, err
			}
			return r.Usage.InputTokens, r.Usage.OutputTokens, nil
		},
		"gateway-responses": func(resp *http.Response, c *gin.Context) (int, int, error) {
			r, err := (&GatewayService{}).handleResponsesBufferedStreamingResponse(resp, c, "client-model", "provider-model", nil, time.Now(), apicompat.ResponsesClientToolMapping{})
			if err != nil {
				return 0, 0, err
			}
			return r.Usage.InputTokens, r.Usage.OutputTokens, nil
		},
		"native-chat": func(resp *http.Response, c *gin.Context) (int, int, error) {
			r, err := (&OpenAIGatewayService{}).handleCCBufferedFromNativeAnthropic(resp, c, "client-model", "billing-model", "provider-model", nil, time.Now())
			if err != nil {
				return 0, 0, err
			}
			return r.Usage.InputTokens - r.Usage.CacheReadInputTokens - r.Usage.CacheCreationInputTokens, r.Usage.OutputTokens, nil
		},
		"native-responses": func(resp *http.Response, c *gin.Context) (int, int, error) {
			r, err := (&OpenAIGatewayService{}).handleResponsesBufferedFromNativeAnthropic(resp, c, "client-model", "billing-model", "provider-model", nil, time.Now(), apicompat.ResponsesClientToolMapping{})
			if err != nil {
				return 0, 0, err
			}
			return r.Usage.InputTokens - r.Usage.CacheReadInputTokens - r.Usage.CacheCreationInputTokens, r.Usage.OutputTokens, nil
		},
	}
	for name, run := range paths {
		for _, index := range []string{"0", "-1", "99", "null"} {
			t.Run(name+"/index="+index, func(t *testing.T) {
				stream := strings.Join([]string{
					`event:message_start`,
					`data:{"type":"message_start","message":{"id":"msg_1","type":"message","role":"assistant","content":[],"model":"provider-model","usage":{"input_tokens":10,"cache_read_input_tokens":4,"cache_creation_input_tokens":2}}}`,
					`event:content_block_start`,
					`data:{"type":"content_block_start","index":0,"content_block":{"type":"text","text":"Hello"}}`,
					`event:content_block_delta`,
					`data:{"type":"content_block_delta","index":` + index + `,"delta":{"type":"text_delta","text":" world"}}`,
					`event:message_delta`,
					`data:{"type":"message_delta","delta":{"stop_reason":"end_turn"},"usage":{"output_tokens":5}}`,
					"",
				}, "\n")
				rec := httptest.NewRecorder()
				c, _ := gin.CreateTestContext(rec)
				resp := &http.Response{Body: io.NopCloser(strings.NewReader(stream)), Header: http.Header{}}
				if !assert.NotPanics(t, func() {
					input, output, err := run(resp, c)
					require.NoError(t, err)
					require.Equal(t, 10, input)
					require.Equal(t, 5, output)
				}) {
					return
				}
				require.Equal(t, http.StatusOK, rec.Code)
				require.Equal(t, "application/json; charset=utf-8", rec.Header().Get("Content-Type"))
				require.Contains(t, rec.Body.String(), "client-model")
				if index == "0" {
					require.Contains(t, rec.Body.String(), "Hello world")
				} else {
					require.Contains(t, rec.Body.String(), "Hello")
					require.NotContains(t, rec.Body.String(), " world")
				}
			})
		}
	}
}
