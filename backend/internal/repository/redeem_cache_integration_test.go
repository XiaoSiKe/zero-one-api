//go:build integration

package repository

import (
	"fmt"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/stretchr/testify/suite"
)

type RedeemCacheSuite struct {
	IntegrationRedisSuite
	cache *redeemCache
}

func (s *RedeemCacheSuite) SetupTest() {
	s.IntegrationRedisSuite.SetupTest()
	s.cache = NewRedeemCache(s.rdb).(*redeemCache)
}

func (s *RedeemCacheSuite) TestGetRedeemAttemptCount_Missing() {
	missingUserID := int64(99999)
	count, err := s.cache.GetRedeemAttemptCount(s.ctx, missingUserID)
	require.NoError(s.T(), err, "expected nil error for missing rate-limit key")
	require.Equal(s.T(), 0, count, "expected zero count for missing key")
}

func (s *RedeemCacheSuite) TestIncrementAndGetRedeemAttemptCount() {
	userID := int64(1)
	key := fmt.Sprintf("%s%d", redeemRateLimitKeyPrefix, userID)

	require.NoError(s.T(), s.cache.IncrementRedeemAttemptCount(s.ctx, userID), "IncrementRedeemAttemptCount")
	count, err := s.cache.GetRedeemAttemptCount(s.ctx, userID)
	require.NoError(s.T(), err, "GetRedeemAttemptCount")
	require.Equal(s.T(), 1, count, "count mismatch")

	ttl, err := s.rdb.TTL(s.ctx, key).Result()
	require.NoError(s.T(), err, "TTL")
	s.AssertTTLWithin(ttl, 1*time.Second, redeemRateLimitDuration)
}

func (s *RedeemCacheSuite) TestMultipleIncrements() {
	userID := int64(2)

	require.NoError(s.T(), s.cache.IncrementRedeemAttemptCount(s.ctx, userID))
	require.NoError(s.T(), s.cache.IncrementRedeemAttemptCount(s.ctx, userID))
	require.NoError(s.T(), s.cache.IncrementRedeemAttemptCount(s.ctx, userID))

	count, err := s.cache.GetRedeemAttemptCount(s.ctx, userID)
	require.NoError(s.T(), err)
	require.Equal(s.T(), 3, count, "count after 3 increments")
}

func (s *RedeemCacheSuite) TestAcquireAndReleaseRedeemLock() {
	owner, err := s.cache.AcquireRedeemLock(s.ctx, "CODE", 10*time.Second)
	require.NoError(s.T(), err, "AcquireRedeemLock")
	require.NotEmpty(s.T(), owner)

	// Second acquire should fail
	contended, err := s.cache.AcquireRedeemLock(s.ctx, "CODE", 10*time.Second)
	require.NoError(s.T(), err, "AcquireRedeemLock 2")
	require.Empty(s.T(), contended, "expected lock to be held")

	// Release
	require.NoError(s.T(), s.cache.ReleaseRedeemLock(s.ctx, "CODE", owner), "ReleaseRedeemLock")

	// Now acquire should succeed
	owner, err = s.cache.AcquireRedeemLock(s.ctx, "CODE", 10*time.Second)
	require.NoError(s.T(), err, "AcquireRedeemLock after release")
	require.NotEmpty(s.T(), owner)
}

func (s *RedeemCacheSuite) TestAcquireRedeemLock_TTL() {
	lockKey := redeemLockKey("CODE2")
	lockTTL := 15 * time.Second

	owner, err := s.cache.AcquireRedeemLock(s.ctx, "CODE2", lockTTL)
	require.NoError(s.T(), err, "AcquireRedeemLock CODE2")
	require.NotEmpty(s.T(), owner)

	ttl, err := s.rdb.TTL(s.ctx, lockKey).Result()
	require.NoError(s.T(), err, "TTL lock key")
	s.AssertTTLWithin(ttl, 1*time.Second, lockTTL)
}

func (s *RedeemCacheSuite) TestReleaseRedeemLock_Idempotent() {
	// Release a lock that doesn't exist should not error
	require.NoError(s.T(), s.cache.ReleaseRedeemLock(s.ctx, "NONEXISTENT", "unused-owner"))

	// Acquire, release, release again
	owner, err := s.cache.AcquireRedeemLock(s.ctx, "IDEMPOTENT", 10*time.Second)
	require.NoError(s.T(), err)
	require.NotEmpty(s.T(), owner)
	require.NoError(s.T(), s.cache.ReleaseRedeemLock(s.ctx, "IDEMPOTENT", owner))
	require.NoError(s.T(), s.cache.ReleaseRedeemLock(s.ctx, "IDEMPOTENT", owner), "second release should be idempotent")
}

func (s *RedeemCacheSuite) TestLegacyRateLimitCountAndWindowArePreserved() {
	const userID = int64(42)
	key := redeemRateLimitKey(userID)
	s.Require().NoError(s.rdb.Set(s.ctx, key, 20, 24*time.Hour).Err())
	count, err := s.cache.GetRedeemAttemptCount(s.ctx, userID)
	s.Require().NoError(err)
	s.Require().Equal(20, count, "reading a previously blocked key must not clear its count")
	ttl, err := s.rdb.PTTL(s.ctx, key).Result()
	s.Require().NoError(err)
	s.AssertTTLWithin(ttl, time.Second, time.Hour)
	s.Require().NoError(s.rdb.PExpire(s.ctx, key, 40*time.Minute).Err())
	s.Require().NoError(s.cache.IncrementRedeemAttemptCount(s.ctx, userID))
	count, err = s.cache.GetRedeemAttemptCount(s.ctx, userID)
	s.Require().NoError(err)
	s.Require().Equal(21, count)
	ttl, err = s.rdb.PTTL(s.ctx, key).Result()
	s.Require().NoError(err)
	s.AssertTTLWithin(ttl, time.Second, 40*time.Minute)
}

func (s *RedeemCacheSuite) TestLateReleaseDoesNotDeleteAnotherOwner() {
	const code = "SECRET-BENEFIT"
	first, err := s.cache.AcquireRedeemLock(s.ctx, code, time.Second)
	s.Require().NoError(err)
	s.Require().NotEmpty(first)
	key := redeemLockKey(code)
	s.Require().NotContains(key, code)
	// Replace the lease as if it expired and another request acquired it.
	s.Require().NoError(s.rdb.Set(s.ctx, key, "second-owner", time.Second).Err())
	s.Require().NoError(s.cache.ReleaseRedeemLock(s.ctx, code, first))
	owner, err := s.rdb.Get(s.ctx, key).Result()
	s.Require().NoError(err)
	s.Require().Equal("second-owner", owner)
	s.Require().NoError(s.cache.ReleaseRedeemLock(s.ctx, code, owner))
	exists, err := s.rdb.Exists(s.ctx, key).Result()
	s.Require().NoError(err)
	s.Require().Zero(exists)
}

func TestRedeemCacheSuite(t *testing.T) {
	suite.Run(t, new(RedeemCacheSuite))
}
