// Package gatewaytiming owns HTTP gateway request timing, independently of the
// per-attempt timings used by account scheduling. It never retains payloads.
package gatewaytiming

import (
	"context"
	"sync"
	"time"
)

type contextKey struct{}

type Stage uint8

const (
	Auth Stage = iota
	UserQueue
	AccountQueue
	Routing
	UpstreamHeaders
	RetryBackoff
	stageCount
)

type Timing struct {
	mu          sync.Mutex
	startedAt   time.Time
	firstOutput *time.Duration
	stages      [stageCount]time.Duration
	attempts    int
}

type Snapshot struct {
	Duration          time.Duration
	FirstOutputMs     *int
	AuthMs            int64
	UserQueueMs       int64
	AccountQueueMs    int64
	RoutingMs         int64
	UpstreamHeadersMs int64
	RetryBackoffMs    int64
	Attempts          int
}

// Start is idempotent so aliases or nested route groups cannot reset the clock.
func Start(ctx context.Context, at time.Time) context.Context {
	if ctx == nil {
		ctx = context.Background()
	}
	if FromContext(ctx) != nil {
		return ctx
	}
	return context.WithValue(ctx, contextKey{}, &Timing{startedAt: at})
}

func FromContext(ctx context.Context) *Timing {
	if ctx == nil {
		return nil
	}
	timing, _ := ctx.Value(contextKey{}).(*Timing)
	return timing
}

// MarkFirstOutput is called only after a complete visible event was written and
// flushed. Protocol progress/keepalives must never call it.
func MarkFirstOutput(ctx context.Context) bool {
	timing := FromContext(ctx)
	if timing == nil || ctx.Err() != nil {
		return false
	}
	timing.mu.Lock()
	defer timing.mu.Unlock()
	if timing.firstOutput == nil {
		elapsed := time.Since(timing.startedAt)
		if elapsed < 0 {
			elapsed = 0
		}
		timing.firstOutput = &elapsed
		return true
	}
	return false
}

func Observe(ctx context.Context, stage Stage) func() {
	if FromContext(ctx) == nil {
		return func() {}
	}
	started := time.Now()
	var once sync.Once
	return func() { once.Do(func() { Add(ctx, stage, time.Since(started)) }) }
}

func Add(ctx context.Context, stage Stage, elapsed time.Duration) {
	timing := FromContext(ctx)
	if timing == nil || stage >= stageCount || elapsed < 0 {
		return
	}
	timing.mu.Lock()
	timing.stages[stage] += elapsed
	timing.mu.Unlock()
}

func Attempt(ctx context.Context) {
	if timing := FromContext(ctx); timing != nil {
		timing.mu.Lock()
		timing.attempts++
		timing.mu.Unlock()
	}
}

// Snapshot copies values before they cross into asynchronous usage recording.
func (t *Timing) Snapshot() Snapshot {
	t.mu.Lock()
	defer t.mu.Unlock()
	result := Snapshot{
		Duration: time.Since(t.startedAt), Attempts: t.attempts,
		AuthMs: t.stages[Auth].Milliseconds(), UserQueueMs: t.stages[UserQueue].Milliseconds(),
		AccountQueueMs: t.stages[AccountQueue].Milliseconds(), RoutingMs: t.stages[Routing].Milliseconds(),
		UpstreamHeadersMs: t.stages[UpstreamHeaders].Milliseconds(), RetryBackoffMs: t.stages[RetryBackoff].Milliseconds(),
	}
	if result.Duration < 0 {
		result.Duration = 0
	}
	if t.firstOutput != nil {
		ms := int(t.firstOutput.Milliseconds())
		result.FirstOutputMs = &ms
	}
	return result
}
