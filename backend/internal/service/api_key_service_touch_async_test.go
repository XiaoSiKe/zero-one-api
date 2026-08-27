//go:build unit

package service

import (
	"context"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

type blockedLastUsedRepo struct {
	APIKeyRepository
	started chan struct{}
	release chan struct{}
}

func (r *blockedLastUsedRepo) UpdateLastUsed(ctx context.Context, _ int64, _ time.Time) error {
	close(r.started)
	select {
	case <-r.release:
		return nil
	case <-ctx.Done():
		return ctx.Err()
	}
}

func TestAPIKeyService_TouchLastUsedDoesNotWaitForDatabase(t *testing.T) {
	repo := &blockedLastUsedRepo{started: make(chan struct{}), release: make(chan struct{})}
	svc := lastUsedTestService(t, repo)
	done := make(chan error, 1)
	go func() { done <- svc.TouchLastUsed(context.Background(), 42) }()
	defer close(repo.release)
	select {
	case <-repo.started:
	case <-time.After(time.Second):
		t.Fatal("metadata write did not start")
	}
	select {
	case err := <-done:
		require.NoError(t, err)
	case <-time.After(100 * time.Millisecond):
		t.Fatal("metadata database latency blocked the model request")
	}
}

type observedLastUsed struct {
	id           int64
	usedAt       time.Time
	requestError error
	deadline     time.Time
}

type recordingLastUsedRepo struct {
	APIKeyRepository
	calls  chan observedLastUsed
	block  chan struct{}
	active atomic.Int64
	peak   atomic.Int64
}

func (r *recordingLastUsedRepo) UpdateLastUsed(ctx context.Context, id int64, usedAt time.Time) error {
	active := r.active.Add(1)
	defer r.active.Add(-1)
	for peak := r.peak.Load(); active > peak && !r.peak.CompareAndSwap(peak, active); peak = r.peak.Load() {
	}
	deadline, _ := ctx.Deadline()
	r.calls <- observedLastUsed{id: id, usedAt: usedAt, requestError: ctx.Err(), deadline: deadline}
	if id == 1 && r.block != nil {
		select {
		case <-r.block:
		case <-ctx.Done():
			return ctx.Err()
		}
	}
	return nil
}

func TestAPIKeyLastUsedWriterCoalescesQueuedKeyToLatestArrival(t *testing.T) {
	repo := &recordingLastUsedRepo{calls: make(chan observedLastUsed, 4), block: make(chan struct{})}
	svc := lastUsedTestService(t, repo)
	require.NoError(t, svc.TouchLastUsed(context.Background(), 1))
	select {
	case <-repo.calls:
	case <-time.After(time.Second):
		t.Fatal("worker did not start")
	}
	first := time.Now().Add(-time.Second)
	latest := time.Now()
	svc.lastUsedWriter.submit(2, first)
	svc.lastUsedWriter.submit(2, latest)
	svc.lastUsedWriter.submit(2, first)
	close(repo.block)
	select {
	case call := <-repo.calls:
		require.Equal(t, int64(2), call.id)
		require.Equal(t, latest, call.usedAt)
	case <-time.After(time.Second):
		t.Fatal("queued key was not written")
	}
	waitLastUsedWrites(t, svc, 2, 0)
	require.Equal(t, int64(1), repo.peak.Load())
}

func TestAPIKeyLastUsedWriterDropsOverflowWithoutSynchronousFallback(t *testing.T) {
	repo := &recordingLastUsedRepo{calls: make(chan observedLastUsed, 2), block: make(chan struct{})}
	svc := lastUsedTestService(t, repo)
	require.NoError(t, svc.TouchLastUsed(context.Background(), 1))
	select {
	case <-repo.calls:
	case <-time.After(time.Second):
		t.Fatal("worker did not start")
	}
	for id := int64(2); id <= apiKeyLastUsedQueueSize+1; id++ {
		require.NoError(t, svc.TouchLastUsed(context.Background(), id))
	}
	require.Equal(t, uint64(1), svc.lastUsedWriter.dropped.Load())
	svc.lastUsedWriter.mu.Lock()
	queued := len(svc.lastUsedWriter.pending)
	svc.lastUsedWriter.mu.Unlock()
	require.Equal(t, apiKeyLastUsedQueueSize, queued)
	require.Equal(t, int64(1), repo.active.Load())
	// Cleanup cancels the active SQL and discards queued work without executing it.
}

func TestAPIKeyLastUsedWriterDetachedBudgetAndBoundedStop(t *testing.T) {
	repo := &recordingLastUsedRepo{calls: make(chan observedLastUsed, 2), block: make(chan struct{})}
	svc := lastUsedTestService(t, repo)
	requestCtx, cancelRequest := context.WithCancel(context.Background())
	cancelRequest()
	require.NoError(t, svc.TouchLastUsed(requestCtx, 1))
	select {
	case call := <-repo.calls:
		require.NoError(t, call.requestError)
		require.WithinDuration(t, time.Now().Add(apiKeyLastUsedWriteTimeout), call.deadline, time.Second)
	case <-time.After(time.Second):
		t.Fatal("worker did not start")
	}
	stopCtx, cancelStop := context.WithTimeout(context.Background(), time.Second)
	defer cancelStop()
	require.NoError(t, svc.StopLastUsedWorker(stopCtx))
	require.Zero(t, repo.active.Load())
	dropped := svc.lastUsedWriter.dropped.Load()
	require.NoError(t, svc.TouchLastUsed(context.Background(), 2))
	require.Equal(t, dropped+1, svc.lastUsedWriter.dropped.Load())
	require.Empty(t, repo.calls, "stopped writer must not restart or execute new SQL")
}

func TestAPIKeyLastUsedWriterConcurrentStopAndTouch(t *testing.T) {
	repo := &recordingLastUsedRepo{calls: make(chan observedLastUsed, 128)}
	svc := lastUsedTestService(t, repo)
	start := make(chan struct{})
	var wg sync.WaitGroup
	errs := make(chan error, 66)
	for id := int64(1); id <= 64; id++ {
		wg.Add(1)
		go func(keyID int64) {
			defer wg.Done()
			<-start
			errs <- svc.TouchLastUsed(context.Background(), keyID)
		}(id)
	}
	for i := 0; i < 2; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			<-start
			ctx, cancel := context.WithTimeout(context.Background(), time.Second)
			defer cancel()
			errs <- svc.StopLastUsedWorker(ctx)
		}()
	}
	close(start)
	wg.Wait()
	close(errs)
	for err := range errs {
		require.NoError(t, err)
	}
	require.Zero(t, repo.active.Load())
	require.LessOrEqual(t, repo.peak.Load(), int64(1))
	svc.lastUsedWriter.mu.Lock()
	remaining := len(svc.lastUsedWriter.pending)
	svc.lastUsedWriter.mu.Unlock()
	require.Zero(t, remaining)
}

type uncancellableLastUsedRepo struct {
	APIKeyRepository
	started chan struct{}
	release chan struct{}
}

func (r *uncancellableLastUsedRepo) UpdateLastUsed(context.Context, int64, time.Time) error {
	close(r.started)
	<-r.release
	return nil
}

func TestAPIKeyLastUsedWriterStopHonorsCallerDeadline(t *testing.T) {
	repo := &uncancellableLastUsedRepo{started: make(chan struct{}), release: make(chan struct{})}
	svc := lastUsedTestService(t, repo)
	defer close(repo.release)
	require.NoError(t, svc.TouchLastUsed(context.Background(), 1))
	select {
	case <-repo.started:
	case <-time.After(time.Second):
		t.Fatal("worker did not start")
	}
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Millisecond)
	defer cancel()
	require.ErrorIs(t, svc.StopLastUsedWorker(ctx), context.DeadlineExceeded)
	require.NoError(t, svc.TouchLastUsed(context.Background(), 2), "timed-out shutdown must still reject new metadata work")
}

func TestAPIKeyLastUsedWriterInflightArrivalsShareDebounce(t *testing.T) {
	repo := &recordingLastUsedRepo{calls: make(chan observedLastUsed, 3), block: make(chan struct{})}
	svc := lastUsedTestService(t, repo)
	require.NoError(t, svc.TouchLastUsed(context.Background(), 1))
	select {
	case <-repo.calls:
	case <-time.After(time.Second):
		t.Fatal("worker did not start")
	}
	for i := 0; i < 20; i++ {
		require.NoError(t, svc.TouchLastUsed(context.Background(), 1))
	}
	close(repo.block)
	waitLastUsedWrites(t, svc, 1, 0)
	require.NoError(t, svc.TouchLastUsed(context.Background(), 1))
	require.Empty(t, repo.calls, "one in-flight write and its debounce must absorb concurrent touches")
}
