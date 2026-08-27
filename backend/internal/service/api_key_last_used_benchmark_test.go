//go:build unit

package service

import (
	"context"
	"testing"
	"time"
)

type benchmarkLastUsedRepo struct{ APIKeyRepository }

func (r *benchmarkLastUsedRepo) UpdateLastUsed(ctx context.Context, _ int64, _ time.Time) error {
	timer := time.NewTimer(20 * time.Millisecond)
	defer timer.Stop()
	select {
	case <-timer.C:
		return nil
	case <-ctx.Done():
		return ctx.Err()
	}
}

// Measures request-path cost with a deterministic 20 ms metadata database.
// The optional shutdown interface lets the identical fixture run on the pinned
// synchronous baseline as well as on the bounded asynchronous implementation.
func BenchmarkAPIKeyLastUsedColdRequestPath(b *testing.B) {
	svc := &APIKeyService{apiKeyRepo: &benchmarkLastUsedRepo{}}
	b.Cleanup(func() {
		if stoppable, ok := any(svc).(interface{ StopLastUsedWorker(context.Context) error }); ok {
			ctx, cancel := context.WithTimeout(context.Background(), time.Second)
			defer cancel()
			if err := stoppable.StopLastUsedWorker(ctx); err != nil {
				b.Error(err)
			}
		}
	})
	b.ReportAllocs()
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := svc.TouchLastUsed(context.Background(), int64(i+1)); err != nil {
			b.Fatal(err)
		}
	}
}
