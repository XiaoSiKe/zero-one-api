//go:build unit

package service

import (
	"context"
	"errors"
	"sync"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

func lastUsedTestService(t *testing.T, repo APIKeyRepository) *APIKeyService {
	t.Helper()
	svc := &APIKeyService{apiKeyRepo: repo}
	svc.StartLastUsedWorker()
	t.Cleanup(func() {
		ctx, cancel := context.WithTimeout(context.Background(), time.Second)
		defer cancel()
		require.NoError(t, svc.StopLastUsedWorker(ctx))
	})
	return svc
}

func waitLastUsedWrites(t *testing.T, svc *APIKeyService, successful, failed uint64) {
	t.Helper()
	require.Eventually(t, func() bool {
		return svc.lastUsedWriter.written.Load() == successful && svc.lastUsedWriter.failed.Load() == failed
	}, time.Second, time.Millisecond)
}

func TestAPIKeyService_TouchLastUsed_InvalidKeyID(t *testing.T) {
	repo := &apiKeyRepoStub{
		updateLastUsed: func(ctx context.Context, id int64, usedAt time.Time) error {
			return errors.New("should not be called")
		},
	}
	svc := lastUsedTestService(t, repo)

	require.NoError(t, svc.TouchLastUsed(context.Background(), 0))
	require.NoError(t, svc.TouchLastUsed(context.Background(), -1))
	require.Empty(t, repo.touchedIDs)
}

func TestAPIKeyService_TouchLastUsed_FirstTouchSucceeds(t *testing.T) {
	repo := &apiKeyRepoStub{}
	svc := lastUsedTestService(t, repo)

	err := svc.TouchLastUsed(context.Background(), 123)
	require.NoError(t, err)
	waitLastUsedWrites(t, svc, 1, 0)
	require.Equal(t, []int64{123}, repo.touchedIDs)
	require.Len(t, repo.touchedUsedAts, 1)
	require.False(t, repo.touchedUsedAts[0].IsZero())

	cached, ok := svc.lastUsedTouchL1.Load(int64(123))
	require.True(t, ok, "successful touch should update debounce cache")
	_, isTime := cached.(time.Time)
	require.True(t, isTime)
}

func TestAPIKeyService_TouchLastUsed_DebouncedWithinWindow(t *testing.T) {
	repo := &apiKeyRepoStub{}
	svc := lastUsedTestService(t, repo)

	require.NoError(t, svc.TouchLastUsed(context.Background(), 123))
	require.NoError(t, svc.TouchLastUsed(context.Background(), 123))
	waitLastUsedWrites(t, svc, 1, 0)

	require.Equal(t, []int64{123}, repo.touchedIDs, "second touch within debounce window should not hit repository")
}

func TestAPIKeyService_TouchLastUsed_ExpiredDebounceTouchesAgain(t *testing.T) {
	repo := &apiKeyRepoStub{}
	svc := lastUsedTestService(t, repo)

	require.NoError(t, svc.TouchLastUsed(context.Background(), 123))
	waitLastUsedWrites(t, svc, 1, 0)

	// 强制将 debounce 时间回拨到窗口之外，触发第二次写库。
	svc.lastUsedTouchL1.Store(int64(123), time.Now().Add(-apiKeyLastUsedMinTouch-time.Second))

	require.NoError(t, svc.TouchLastUsed(context.Background(), 123))
	waitLastUsedWrites(t, svc, 2, 0)
	require.Len(t, repo.touchedIDs, 2)
	require.Equal(t, int64(123), repo.touchedIDs[0])
	require.Equal(t, int64(123), repo.touchedIDs[1])
}

func TestAPIKeyService_TouchLastUsed_RepoError(t *testing.T) {
	repo := &apiKeyRepoStub{
		updateLastUsed: func(ctx context.Context, id int64, usedAt time.Time) error {
			return errors.New("db write failed")
		},
	}
	svc := lastUsedTestService(t, repo)

	err := svc.TouchLastUsed(context.Background(), 123)
	require.NoError(t, err, "best-effort metadata failure must not fail the model request")
	waitLastUsedWrites(t, svc, 0, 1)
	require.Equal(t, []int64{123}, repo.touchedIDs)

	cached, ok := svc.lastUsedTouchL1.Load(int64(123))
	require.True(t, ok, "failed touch should still update retry debounce cache")
	_, isTime := cached.(time.Time)
	require.True(t, isTime)
}

func TestAPIKeyService_TouchLastUsed_RepoErrorDebounced(t *testing.T) {
	repo := &apiKeyRepoStub{
		updateLastUsed: func(ctx context.Context, id int64, usedAt time.Time) error {
			return errors.New("db write failed")
		},
	}
	svc := lastUsedTestService(t, repo)

	firstErr := svc.TouchLastUsed(context.Background(), 456)
	require.NoError(t, firstErr)
	waitLastUsedWrites(t, svc, 0, 1)

	secondErr := svc.TouchLastUsed(context.Background(), 456)
	require.NoError(t, secondErr, "failed touch should be debounced and skip immediate retry")
	require.Equal(t, []int64{456}, repo.touchedIDs, "debounced retry should not hit repository again")
}

type touchSingleflightRepo struct {
	*apiKeyRepoStub
	mu      sync.Mutex
	calls   int
	blockCh chan struct{}
}

func (r *touchSingleflightRepo) UpdateLastUsed(ctx context.Context, id int64, usedAt time.Time) error {
	r.mu.Lock()
	r.calls++
	r.mu.Unlock()
	<-r.blockCh
	return nil
}

func TestAPIKeyService_TouchLastUsed_ConcurrentFirstTouchDeduplicated(t *testing.T) {
	repo := &touchSingleflightRepo{
		apiKeyRepoStub: &apiKeyRepoStub{},
		blockCh:        make(chan struct{}),
	}
	svc := lastUsedTestService(t, repo)

	const workers = 20
	startCh := make(chan struct{})
	errCh := make(chan error, workers)
	var wg sync.WaitGroup

	for i := 0; i < workers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			<-startCh
			errCh <- svc.TouchLastUsed(context.Background(), 321)
		}()
	}

	close(startCh)

	require.Eventually(t, func() bool {
		repo.mu.Lock()
		defer repo.mu.Unlock()
		return repo.calls >= 1
	}, time.Second, 10*time.Millisecond)

	close(repo.blockCh)
	wg.Wait()
	close(errCh)

	for err := range errCh {
		require.NoError(t, err)
	}

	repo.mu.Lock()
	defer repo.mu.Unlock()
	require.Equal(t, 1, repo.calls, "并发首次 touch 只应写库一次")
}
