package repository

import (
	"context"
	"errors"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/alicebob/miniredis/v2"
	"github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/require"
)

type simultaneousResetReadCache struct {
	service.EmailCache
	barrier sync.WaitGroup
}

type failedResetConsumeCache struct{ service.EmailCache }

func (c *failedResetConsumeCache) ConsumePasswordResetToken(context.Context, string, string) (bool, error) {
	return false, errors.New("cache write unavailable")
}

func TestPasswordResetTokenConsumptionFailureDoesNotSucceed(t *testing.T) {
	server := miniredis.RunT(t)
	client := redis.NewClient(&redis.Options{Addr: server.Addr()})
	t.Cleanup(func() { _ = client.Close() })
	cache := &failedResetConsumeCache{EmailCache: NewEmailCache(client)}
	ctx := context.Background()
	require.NoError(t, cache.SetPasswordResetToken(ctx, "test@example.com", &service.PasswordResetTokenData{Token: "valid"}, time.Minute))
	svc := service.NewEmailService(nil, cache)
	require.ErrorIs(t, svc.ConsumePasswordResetToken(ctx, "test@example.com", "valid"), service.ErrServiceUnavailable)
}

func TestPasswordResetTokenRejectsWrongExpiredAndReplacedTokens(t *testing.T) {
	server := miniredis.RunT(t)
	client := redis.NewClient(&redis.Options{Addr: server.Addr()})
	t.Cleanup(func() { _ = client.Close() })
	cache := NewEmailCache(client)
	ctx := context.Background()
	const email = "test@example.com"
	require.NoError(t, cache.SetPasswordResetToken(ctx, email, &service.PasswordResetTokenData{Token: "new-token"}, time.Minute))
	for _, token := range []string{"wrong", "old-token"} {
		consumed, err := cache.ConsumePasswordResetToken(ctx, email, token)
		require.NoError(t, err)
		require.False(t, consumed)
		data, err := cache.GetPasswordResetToken(ctx, email)
		require.NoError(t, err)
		require.Equal(t, "new-token", data.Token)
	}
	consumed, err := cache.ConsumePasswordResetToken(ctx, "TEST@EXAMPLE.COM", "new-token")
	require.NoError(t, err)
	require.True(t, consumed, "保持邮箱大小写归一化")
	consumed, err = cache.ConsumePasswordResetToken(ctx, email, "new-token")
	require.NoError(t, err)
	require.False(t, consumed)
	require.NoError(t, cache.SetPasswordResetToken(ctx, email, &service.PasswordResetTokenData{Token: "expired"}, time.Second))
	server.FastForward(2 * time.Second)
	consumed, err = cache.ConsumePasswordResetToken(ctx, email, "expired")
	require.NoError(t, err)
	require.False(t, consumed)
}

func (c *simultaneousResetReadCache) GetPasswordResetToken(ctx context.Context, email string) (*service.PasswordResetTokenData, error) {
	data, err := c.EmailCache.GetPasswordResetToken(ctx, email)
	// 让并发请求都完成验证前读取，确定性覆盖原先 GET/DEL 之间的重复核销窗口。
	c.barrier.Done()
	c.barrier.Wait()
	return data, err
}

func TestPasswordResetTokenCanOnlyBeConsumedOnceConcurrently(t *testing.T) {
	server := miniredis.RunT(t)
	client := redis.NewClient(&redis.Options{Addr: server.Addr()})
	t.Cleanup(func() { _ = client.Close() })
	cache := &simultaneousResetReadCache{EmailCache: NewEmailCache(client)}
	ctx := context.Background()
	require.NoError(t, cache.SetPasswordResetToken(ctx, "test@example.com", &service.PasswordResetTokenData{
		Token: "one-time-token", CreatedAt: time.Now(),
	}, time.Minute))
	svc := service.NewEmailService(nil, cache)
	const callers = 8
	cache.barrier.Add(callers)
	var done sync.WaitGroup
	var successes atomic.Int32
	errors := make(chan error, callers)
	for range callers {
		done.Add(1)
		go func() {
			defer done.Done()
			err := svc.ConsumePasswordResetToken(ctx, "test@example.com", "one-time-token")
			if err == nil {
				successes.Add(1)
			} else {
				errors <- err
			}
		}()
	}
	done.Wait()
	close(errors)
	require.Equal(t, int32(1), successes.Load(), "同一找回链接只能有一个成功的核销者")
	for err := range errors {
		require.ErrorIs(t, err, service.ErrInvalidResetToken)
	}
}
