//go:build unit

package repository

import (
	"context"
	"math"
	"testing"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/alicebob/miniredis/v2"
	"github.com/redis/go-redis/v9"
	"github.com/stretchr/testify/require"
)

func TestRedeemRateLimitKey(t *testing.T) {
	tests := []struct {
		name     string
		userID   int64
		expected string
	}{
		{
			name:     "normal_user_id",
			userID:   123,
			expected: "redeem:ratelimit:123",
		},
		{
			name:     "zero_user_id",
			userID:   0,
			expected: "redeem:ratelimit:0",
		},
		{
			name:     "negative_user_id",
			userID:   -1,
			expected: "redeem:ratelimit:-1",
		},
		{
			name:     "max_int64",
			userID:   math.MaxInt64,
			expected: "redeem:ratelimit:9223372036854775807",
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			got := redeemRateLimitKey(tc.userID)
			require.Equal(t, tc.expected, got)
		})
	}
}

func TestRedeemLockKey(t *testing.T) {
	tests := []struct {
		name string
		code string
	}{
		{
			name: "normal_code",
			code: "ABC123",
		},
		{
			name: "empty_code",
			code: "",
		},
		{
			name: "code_with_special_chars",
			code: "CODE-2024:test",
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			got := redeemLockKey(tc.code)
			require.Equal(t, redeemLockKeyPrefix+service.RedeemCodeHash(tc.code), got)
		})
	}
}

func newRedeemTestCache(t *testing.T) (*redeemCache, *miniredis.Miniredis) {
	t.Helper()
	server := miniredis.RunT(t)
	rdb := redis.NewClient(&redis.Options{Addr: server.Addr()})
	t.Cleanup(func() { _ = rdb.Close() })
	return &redeemCache{rdb: rdb}, server
}

func TestRedeemRateLimitUsesFixedOneHourWindow(t *testing.T) {
	cache, server := newRedeemTestCache(t)
	ctx := context.Background()
	key := redeemRateLimitKey(123)
	require.NoError(t, cache.IncrementRedeemAttemptCount(ctx, 123))
	require.Equal(t, time.Hour, server.TTL(key))
	server.FastForward(20 * time.Minute)
	require.NoError(t, cache.IncrementRedeemAttemptCount(ctx, 123))
	require.Equal(t, 40*time.Minute, server.TTL(key), "another failure must not restart the window")
	count, err := cache.GetRedeemAttemptCount(ctx, 123)
	require.NoError(t, err)
	require.Equal(t, 2, count)
	server.FastForward(40 * time.Minute)
	count, err = cache.GetRedeemAttemptCount(ctx, 123)
	require.NoError(t, err)
	require.Zero(t, count)
}

func TestRedeemRateLimitReadNormalizesLegacyWindowWithoutResettingCount(t *testing.T) {
	cache, server := newRedeemTestCache(t)
	ctx := context.Background()
	key := redeemRateLimitKey(123)
	require.NoError(t, cache.rdb.Set(ctx, key, 20, 24*time.Hour).Err())
	count, err := cache.GetRedeemAttemptCount(ctx, 123)
	require.NoError(t, err)
	require.Equal(t, 20, count)
	require.Equal(t, time.Hour, server.TTL(key))
	server.FastForward(15 * time.Minute)
	count, err = cache.GetRedeemAttemptCount(ctx, 123)
	require.NoError(t, err)
	require.Equal(t, 20, count)
	require.Equal(t, 45*time.Minute, server.TTL(key))
}

func TestRedeemRateLimitIncrementNormalizesLegacyWindow(t *testing.T) {
	cache, server := newRedeemTestCache(t)
	ctx := context.Background()
	key := redeemRateLimitKey(123)
	require.NoError(t, cache.rdb.Set(ctx, key, 7, 24*time.Hour).Err())
	require.NoError(t, cache.IncrementRedeemAttemptCount(ctx, 123))
	count, err := cache.GetRedeemAttemptCount(ctx, 123)
	require.NoError(t, err)
	require.Equal(t, 8, count)
	require.Equal(t, time.Hour, server.TTL(key))
}

func TestRedeemRateLimitRepairsPersistentLegacyKey(t *testing.T) {
	cache, server := newRedeemTestCache(t)
	ctx := context.Background()
	key := redeemRateLimitKey(123)
	require.NoError(t, cache.rdb.Set(ctx, key, 20, 0).Err())
	count, err := cache.GetRedeemAttemptCount(ctx, 123)
	require.NoError(t, err)
	require.Equal(t, 20, count)
	require.Equal(t, time.Hour, server.TTL(key))
}

func TestRedeemLockKeyDoesNotContainPlaintext(t *testing.T) {
	const code = "secret-benefit-code"
	key := redeemLockKey(code)
	require.NotContains(t, key, code)
	require.Len(t, key, len(redeemLockKeyPrefix)+64)
}

func TestRedeemLockLateReleasePreservesNewOwner(t *testing.T) {
	cache, server := newRedeemTestCache(t)
	ctx := context.Background()
	const code = "owned-code"
	first, err := cache.AcquireRedeemLock(ctx, code, time.Second)
	require.NoError(t, err)
	require.NotEmpty(t, first)
	contended, err := cache.AcquireRedeemLock(ctx, code, time.Second)
	require.NoError(t, err)
	require.Empty(t, contended)
	server.FastForward(time.Second)
	second, err := cache.AcquireRedeemLock(ctx, code, time.Second)
	require.NoError(t, err)
	require.NotEmpty(t, second)
	require.NotEqual(t, first, second)
	require.NoError(t, cache.ReleaseRedeemLock(ctx, code, first))
	stored, err := cache.rdb.Get(ctx, redeemLockKey(code)).Result()
	require.NoError(t, err)
	require.Equal(t, second, stored)
	require.NoError(t, cache.ReleaseRedeemLock(ctx, code, second))
	require.False(t, server.Exists(redeemLockKey(code)))
}
