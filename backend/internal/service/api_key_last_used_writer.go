package service

import (
	"context"
	"sync"
	"sync/atomic"
	"time"

	"github.com/alitto/pond/v2"
)

const (
	apiKeyLastUsedQueueSize    = 1024
	apiKeyLastUsedWriteTimeout = 10 * time.Second
)

// apiKeyLastUsedWriter owns the bounded bookkeeping queue. It never retains a
// credential, Gin context, or a request context. A pending key occupies one slot
// even when several requests coalesce before the worker snapshots its timestamp.
type apiKeyLastUsedWriter struct {
	service *APIKeyService
	mu      sync.Mutex
	pending map[int64]time.Time
	pool    pond.Pool
	ctx     context.Context
	cancel  context.CancelFunc
	closed  bool
	stopped <-chan struct{}
	written atomic.Uint64
	failed  atomic.Uint64
	dropped atomic.Uint64
}

func (s *APIKeyService) StartLastUsedWorker() {
	s.lastUsedWriterOnce.Do(func() {
		ctx, cancel := context.WithCancel(context.Background())
		s.lastUsedWriter = &apiKeyLastUsedWriter{
			service: s,
			pending: make(map[int64]time.Time),
			pool:    pond.NewPool(1, pond.WithQueueSize(apiKeyLastUsedQueueSize)),
			ctx:     ctx,
			cancel:  cancel,
		}
	})
}

// StopLastUsedWorker rejects new work and cancels in-flight metadata SQL before
// the database is closed. Unlike billing, queued metadata may be dropped at exit.
func (s *APIKeyService) StopLastUsedWorker(ctx context.Context) error {
	s.StartLastUsedWorker()
	w := s.lastUsedWriter
	w.mu.Lock()
	if !w.closed {
		w.closed = true
		w.cancel()
		w.dropped.Add(uint64(len(w.pending)))
		clear(w.pending)
		w.stopped = w.pool.Stop().Done()
	}
	done := w.stopped
	w.mu.Unlock()
	select {
	case <-done:
		return nil
	case <-ctx.Done():
		return ctx.Err()
	}
}

func (w *apiKeyLastUsedWriter) submit(keyID int64, arrivedAt time.Time) {
	w.mu.Lock()
	defer w.mu.Unlock()
	if w.closed {
		w.dropped.Add(1)
		return
	}
	if previous, ok := w.pending[keyID]; ok {
		if arrivedAt.After(previous) {
			w.pending[keyID] = arrivedAt
		}
		return
	}
	if cached, ok := w.service.lastUsedTouchL1.Load(keyID); ok {
		if next, ok := cached.(time.Time); ok && arrivedAt.Before(next) {
			return
		}
	}
	if len(w.pending) >= apiKeyLastUsedQueueSize {
		w.dropped.Add(1)
		return
	}
	w.pending[keyID] = arrivedAt
	if _, accepted := w.pool.TrySubmit(func() { w.write(keyID) }); !accepted {
		delete(w.pending, keyID)
		w.dropped.Add(1)
	}
}

func (w *apiKeyLastUsedWriter) write(keyID int64) {
	w.mu.Lock()
	if w.closed {
		w.mu.Unlock()
		return
	}
	arrivedAt := w.pending[keyID]
	w.mu.Unlock()

	ctx, cancel := context.WithTimeout(w.ctx, apiKeyLastUsedWriteTimeout)
	err := w.service.apiKeyRepo.UpdateLastUsed(ctx, keyID, arrivedAt)
	cancel()

	w.mu.Lock()
	defer w.mu.Unlock()
	delete(w.pending, keyID)
	if w.closed {
		return
	}
	if err != nil {
		w.service.lastUsedTouchL1.Store(keyID, time.Now().Add(apiKeyLastUsedFailBackoff))
		w.failed.Add(1)
		return
	}
	w.service.lastUsedTouchL1.Store(keyID, time.Now().Add(apiKeyLastUsedMinTouch))
	w.written.Add(1)
}
