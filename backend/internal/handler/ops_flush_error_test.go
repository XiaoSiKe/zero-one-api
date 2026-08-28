package handler

import (
	"errors"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type opsUnderlyingFlushFailure struct{ *httptest.ResponseRecorder }

func (w *opsUnderlyingFlushFailure) FlushError() error { return errors.New("transport flush failed") }

func TestOpsCaptureWriterPropagatesTransportFlushError(t *testing.T) {
	gin.SetMode(gin.TestMode)
	base := &opsUnderlyingFlushFailure{httptest.NewRecorder()}
	c, _ := gin.CreateTestContext(base)
	writer := acquireOpsCaptureWriter(c.Writer)
	defer releaseOpsCaptureWriter(writer)
	_, err := writer.WriteString("data: {\"type\":\"response.output_text.delta\",\"delta\":\"ok\"}\n\n")
	require.NoError(t, err)
	require.ErrorContains(t, writer.FlushError(), "transport flush failed")
	require.True(t, writer.Written())
}
