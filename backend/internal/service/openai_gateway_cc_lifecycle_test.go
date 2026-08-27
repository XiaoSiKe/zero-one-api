//go:build unit

package service

import (
	"errors"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

func TestRawChatStreamReadErrorPreservesUsageAndIsNotSuccess(t *testing.T) {
	gin.SetMode(gin.TestMode)
	c, _ := gin.CreateTestContext(httptest.NewRecorder())
	c.Request = httptest.NewRequest(http.MethodPost, "/v1/chat/completions", nil)
	readErr := errors.New("synthetic upstream disconnected")
	resp := &http.Response{Header: http.Header{}, Body: &errTailReader{
		data: []byte("data: {\"choices\":[{\"delta\":{\"content\":\"hello\"}}]}\n\n" +
			"data: {\"choices\":[],\"usage\":{\"prompt_tokens\":11,\"completion_tokens\":3}}\n\n"),
		err: readErr,
	}}
	svc := &OpenAIGatewayService{cfg: rawChatCompletionsTestConfig()}
	result, err := svc.streamRawChatCompletions(c, resp, rawChatCompletionsTestAccount(), "model", "model", "model", nil, nil, time.Now(), 0)
	require.ErrorIs(t, err, readErr, "a truncated upstream stream must not be reported as a successful attempt")
	require.NotNil(t, result)
	require.Equal(t, 11, result.Usage.InputTokens)
	require.Equal(t, 3, result.Usage.OutputTokens)
}

func TestChatStreamsRespectConfiguredIdleAndCloseBody(t *testing.T) {
	gin.SetMode(gin.TestMode)
	for _, raw := range []bool{true, false} {
		name := "converted"
		if raw {
			name = "raw"
		}
		t.Run(name, func(t *testing.T) {
			reader, writer := io.Pipe()
			defer writer.Close()
			defer reader.Close()
			c, _ := gin.CreateTestContext(httptest.NewRecorder())
			c.Request = httptest.NewRequest(http.MethodPost, "/v1/chat/completions", nil)
			resp := &http.Response{Header: http.Header{}, Body: reader}
			svc := &OpenAIGatewayService{cfg: &config.Config{Gateway: config.GatewayConfig{StreamDataIntervalTimeout: 1}}}
			done := make(chan error, 1)
			go func() {
				if raw {
					_, err := svc.streamRawChatCompletions(c, resp, rawChatCompletionsTestAccount(), "model", "model", "model", nil, nil, time.Now(), 0)
					done <- err
					return
				}
				done <- svc.scanCCStream(c, resp, "test", "test", time.Now(), nil).Err
			}()
			select {
			case err := <-done:
				require.ErrorContains(t, err, "stream data interval timeout")
			case <-time.After(1500 * time.Millisecond):
				_ = reader.Close()
				<-done
				t.Fatal("configured idle limit did not terminate the stalled upstream read")
			}
			_, err := writer.Write([]byte("late data"))
			require.Error(t, err, "idle exit must close the body and unblock the upstream writer")
		})
	}
}

func TestRawChatRoleAndEmptyChunksDoNotStartAttemptTTFT(t *testing.T) {
	gin.SetMode(gin.TestMode)
	c, _ := gin.CreateTestContext(httptest.NewRecorder())
	c.Request = httptest.NewRequest(http.MethodPost, "/v1/chat/completions", nil)
	resp := &http.Response{Header: http.Header{}, Body: io.NopCloser(strings.NewReader(
		"data: {\"choices\":[{\"delta\":{\"role\":\"assistant\",\"content\":\"\"}}]}\n\n" +
			"data: {\"choices\":[],\"usage\":{\"prompt_tokens\":3,\"completion_tokens\":0}}\n\n" +
			"data: [DONE]\n\n"))}
	svc := &OpenAIGatewayService{cfg: rawChatCompletionsTestConfig()}
	result, err := svc.streamRawChatCompletions(c, resp, rawChatCompletionsTestAccount(), "model", "model", "model", nil, nil, time.Now(), 0)
	require.NoError(t, err)
	require.Nil(t, result.FirstTokenMs)
}
