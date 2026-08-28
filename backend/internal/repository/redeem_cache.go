package repository

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"time"

	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/redis/go-redis/v9"
)

const (
	redeemRateLimitKeyPrefix = "redeem:ratelimit:"
	redeemLockKeyPrefix      = "redeem:lock:"
	redeemRateLimitDuration  = service.RedeemRateLimitDuration
)

// Read and increment both repair legacy 24-hour/no-expiry keys while preserving
// their count. Subsequent failures cannot extend a live one-hour window.
var redeemAttemptScript = redis.NewScript(`
local count
if ARGV[2] == '1' then
  count = redis.call('INCR', KEYS[1])
else
  count = redis.call('GET', KEYS[1])
end
if not count then return 0 end
local ttl = redis.call('PTTL', KEYS[1])
local window = tonumber(ARGV[1])
if ttl == -1 or ttl > window then
  redis.call('PEXPIRE', KEYS[1], window)
end
return tonumber(count)
`)

var redeemLockReleaseScript = redis.NewScript(`
if redis.call('GET', KEYS[1]) == ARGV[1] then
  return redis.call('DEL', KEYS[1])
end
return 0
`)

// redeemRateLimitKey generates the Redis key for redeem attempt rate limiting.
func redeemRateLimitKey(userID int64) string {
	return fmt.Sprintf("%s%d", redeemRateLimitKeyPrefix, userID)
}

// redeemLockKey generates the Redis key for redeem code locking.
func redeemLockKey(code string) string {
	return redeemLockKeyPrefix + service.RedeemCodeHash(code)
}

type redeemCache struct {
	rdb *redis.Client
}

func NewRedeemCache(rdb *redis.Client) service.RedeemCache {
	return &redeemCache{rdb: rdb}
}

func (c *redeemCache) GetRedeemAttemptCount(ctx context.Context, userID int64) (int, error) {
	key := redeemRateLimitKey(userID)
	return redeemAttemptScript.Run(ctx, c.rdb, []string{key}, redeemRateLimitDuration.Milliseconds(), 0).Int()
}

func (c *redeemCache) IncrementRedeemAttemptCount(ctx context.Context, userID int64) error {
	key := redeemRateLimitKey(userID)
	return redeemAttemptScript.Run(ctx, c.rdb, []string{key}, redeemRateLimitDuration.Milliseconds(), 1).Err()
}

func (c *redeemCache) AcquireRedeemLock(ctx context.Context, code string, ttl time.Duration) (string, error) {
	var token [16]byte
	if _, err := rand.Read(token[:]); err != nil {
		return "", err
	}
	owner := hex.EncodeToString(token[:])
	key := redeemLockKey(code)
	acquired, err := c.rdb.SetNX(ctx, key, owner, ttl).Result()
	if err != nil || !acquired {
		return "", err
	}
	return owner, nil
}

func (c *redeemCache) ReleaseRedeemLock(ctx context.Context, code, owner string) error {
	if owner == "" {
		return nil
	}
	key := redeemLockKey(code)
	return redeemLockReleaseScript.Run(ctx, c.rdb, []string{key}, owner).Err()
}
