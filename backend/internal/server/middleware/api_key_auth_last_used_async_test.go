//go:build unit

package middleware

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/config"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/require"
)

type authBlockedMetadataRepo struct {
	*stubApiKeyRepo
	started chan struct{}
	release chan struct{}
}

func (r *authBlockedMetadataRepo) UpdateLastUsed(ctx context.Context, _ int64, _ time.Time) error {
	close(r.started)
	select {
	case <-r.release:
		return nil
	case <-ctx.Done():
		return ctx.Err()
	}
}

func TestAPIKeyAuthForwardsWhileLastUsedWriteIsBlocked(t *testing.T) {
	gin.SetMode(gin.TestMode)
	key := &service.APIKey{ID: 42, UserID: 7, Key: "test-metadata-only", Status: service.StatusActive,
		User:  &service.User{ID: 7, Status: service.StatusActive, Role: service.RoleUser, Balance: 1, Concurrency: 2},
		Group: &service.Group{ID: 1, Status: service.StatusActive, Platform: service.PlatformOpenAI, Hydrated: true},
	}
	key.GroupID = &key.Group.ID
	repo := &authBlockedMetadataRepo{
		stubApiKeyRepo: &stubApiKeyRepo{getByKey: func(context.Context, string) (*service.APIKey, error) { return key, nil }},
		started:        make(chan struct{}), release: make(chan struct{}),
	}
	cfg := &config.Config{RunMode: config.RunModeSimple}
	svc := service.NewAPIKeyService(repo, nil, nil, nil, nil, nil, cfg)
	t.Cleanup(func() {
		close(repo.release)
		ctx, cancel := context.WithTimeout(context.Background(), time.Second)
		defer cancel()
		require.NoError(t, svc.StopLastUsedWorker(ctx))
	})
	upstreamCalled := make(chan struct{}, 1)
	upstream := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		upstreamCalled <- struct{}{}
		w.WriteHeader(http.StatusNoContent)
	}))
	defer upstream.Close()
	router := gin.New()
	router.Use(gin.HandlerFunc(NewAPIKeyAuthMiddleware(svc, nil, cfg)))
	router.POST("/v1/responses", func(c *gin.Context) {
		resp, err := http.Get(upstream.URL)
		if err != nil {
			c.Status(http.StatusBadGateway)
			return
		}
		_ = resp.Body.Close()
		c.Status(resp.StatusCode)
	})
	request := httptest.NewRequest(http.MethodPost, "/v1/responses", nil)
	request.Header.Set("Authorization", "Bearer test-metadata-only")
	recorder := httptest.NewRecorder()
	done := make(chan struct{})
	go func() { defer close(done); router.ServeHTTP(recorder, request) }()
	select {
	case <-repo.started:
	case <-time.After(time.Second):
		t.Fatal("metadata write did not start")
	}
	select {
	case <-upstreamCalled:
	case <-time.After(time.Second):
		t.Fatal("metadata SQL blocked upstream dispatch")
	}
	select {
	case <-done:
	case <-time.After(time.Second):
		t.Fatal("request did not finish while metadata SQL was blocked")
	}
	require.Equal(t, http.StatusNoContent, recorder.Code)
}
