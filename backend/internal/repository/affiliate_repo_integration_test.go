//go:build integration

package repository

import (
	"context"
	"fmt"
	"sync"
	"testing"
	"time"

	dbent "github.com/Wei-Shaw/sub2api/ent"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/lib/pq"
	"github.com/stretchr/testify/require"
)

func querySingleFloat(t *testing.T, ctx context.Context, client *dbent.Client, query string, args ...any) float64 {
	t.Helper()
	rows, err := client.QueryContext(ctx, query, args...)
	require.NoError(t, err)
	defer func() { _ = rows.Close() }()

	require.True(t, rows.Next(), "expected one row")
	var value float64
	require.NoError(t, rows.Scan(&value))
	require.NoError(t, rows.Err())
	return value
}

func querySingleInt(t *testing.T, ctx context.Context, client *dbent.Client, query string, args ...any) int {
	t.Helper()
	rows, err := client.QueryContext(ctx, query, args...)
	require.NoError(t, err)
	defer func() { _ = rows.Close() }()

	require.True(t, rows.Next(), "expected one row")
	var value int
	require.NoError(t, rows.Scan(&value))
	require.NoError(t, rows.Err())
	return value
}

func TestAffiliateRepository_TransferQuotaToBalance_UsesClaimedQuotaBeforeClear(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()

	repo := NewAffiliateRepository(client, integrationDB)

	u := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-transfer-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
		Balance:      5.5,
		Concurrency:  5,
	})

	affCode := fmt.Sprintf("AFF%09d", time.Now().UnixNano()%1_000_000_000)
	_, err := client.ExecContext(txCtx, `
INSERT INTO user_affiliates (user_id, aff_code, aff_quota, aff_history_quota, created_at, updated_at)
VALUES ($1, $2, $3, $3, NOW(), NOW())`, u.ID, affCode, 12.34)
	require.NoError(t, err)

	transferred, balance, err := repo.TransferQuotaToBalance(txCtx, u.ID)
	require.NoError(t, err)
	require.InDelta(t, 12.34, transferred, 1e-9)
	require.InDelta(t, 17.84, balance, 1e-9)

	affQuota := querySingleFloat(t, txCtx, client,
		"SELECT aff_quota::double precision FROM user_affiliates WHERE user_id = $1", u.ID)
	require.InDelta(t, 0.0, affQuota, 1e-9)

	persistedBalance := querySingleFloat(t, txCtx, client,
		"SELECT balance::double precision FROM users WHERE id = $1", u.ID)
	require.InDelta(t, 17.84, persistedBalance, 1e-9)

	ledgerCount := querySingleInt(t, txCtx, client,
		"SELECT COUNT(*) FROM user_affiliate_ledger WHERE user_id = $1 AND action = 'transfer'", u.ID)
	require.Equal(t, 1, ledgerCount)

	rows, err := client.QueryContext(txCtx, `
SELECT amount::double precision,
       balance_after::double precision,
       aff_quota_after::double precision,
       aff_frozen_quota_after::double precision,
       aff_history_quota_after::double precision
FROM user_affiliate_ledger
WHERE user_id = $1 AND action = 'transfer'
LIMIT 1`, u.ID)
	require.NoError(t, err)
	defer func() { _ = rows.Close() }()
	require.True(t, rows.Next(), "expected transfer ledger")
	var amount, balanceAfter, quotaAfter, frozenAfter, historyAfter float64
	require.NoError(t, rows.Scan(&amount, &balanceAfter, &quotaAfter, &frozenAfter, &historyAfter))
	require.InDelta(t, 12.34, amount, 1e-9)
	require.InDelta(t, 17.84, balanceAfter, 1e-9)
	require.InDelta(t, 0.0, quotaAfter, 1e-9)
	require.InDelta(t, 0.0, frozenAfter, 1e-9)
	require.InDelta(t, 12.34, historyAfter, 1e-9)
}

// TestAffiliateRepository_AccrueQuota_ReusesOuterTransaction guards the
// cross-layer tx propagation invariant: when AccrueQuota is called with a ctx
// that already carries a transaction (via dbent.NewTxContext), repo.withTx
// must reuse that tx rather than opening a nested one. If this invariant
// breaks, AccrueQuota would commit independently and survive a rollback of
// the outer tx, which would violate payment_fulfillment's all-or-nothing
// semantics.
func TestAffiliateRepository_AccrueQuota_ReusesOuterTransaction(t *testing.T) {
	ctx := context.Background()

	outerTx, err := integrationEntClient.Tx(ctx)
	require.NoError(t, err, "begin outer tx")
	// Defensive cleanup: if any require.* below fires before the explicit
	// Rollback, this prevents the tx from leaking until container teardown.
	// Rollback is idempotent at the driver level (extra rollback returns an
	// error we ignore).
	t.Cleanup(func() { _ = outerTx.Rollback() })
	client := outerTx.Client()
	txCtx := dbent.NewTxContext(ctx, outerTx)

	inviter := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-inviter-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
		Concurrency:  5,
	})
	invitee := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-invitee-%d@example.com", time.Now().UnixNano()+1),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
		Concurrency:  5,
	})

	repo := NewAffiliateRepository(client, integrationDB)
	_, err = repo.EnsureUserAffiliate(txCtx, inviter.ID)
	require.NoError(t, err)
	_, err = repo.EnsureUserAffiliate(txCtx, invitee.ID)
	require.NoError(t, err)

	bound, err := repo.BindInviter(txCtx, invitee.ID, inviter.ID, nil)
	require.NoError(t, err)
	require.True(t, bound, "invitee must bind to inviter")

	applied, err := repo.AccrueQuota(txCtx, inviter.ID, invitee.ID, 3.5, 0, nil)
	require.NoError(t, err)
	require.True(t, applied, "AccrueQuota must report applied=true")

	// Visible inside the outer tx.
	innerQuota := querySingleFloat(t, txCtx, client,
		"SELECT aff_quota::double precision FROM user_affiliates WHERE user_id = $1", inviter.ID)
	require.InDelta(t, 3.5, innerQuota, 1e-9)

	// Roll back the outer tx; if AccrueQuota had opened its own inner tx and
	// committed it, the rows would still be visible to the global client.
	require.NoError(t, outerTx.Rollback())

	rows, err := integrationEntClient.QueryContext(ctx,
		"SELECT COUNT(*) FROM user_affiliates WHERE user_id IN ($1, $2)",
		inviter.ID, invitee.ID)
	require.NoError(t, err)
	defer func() { _ = rows.Close() }()
	require.True(t, rows.Next())
	var postRollbackCount int
	require.NoError(t, rows.Scan(&postRollbackCount))
	require.Equal(t, 0, postRollbackCount,
		"AccrueQuota must propagate the outer tx — found persisted rows after rollback")
}

func TestAffiliateRepository_BindInviterStoresMetadataAndRejectsCycles(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()
	repo := NewAffiliateRepository(client, integrationDB)

	admin := mustCreateUser(t, client, &service.User{
		Email: fmt.Sprintf("affiliate-bind-admin-%d@example.com", time.Now().UnixNano()), PasswordHash: "hash",
		Role: service.RoleAdmin, Status: service.StatusActive, Concurrency: 5,
	})
	a := mustCreateUser(t, client, &service.User{
		Email: fmt.Sprintf("affiliate-bind-a-%d@example.com", time.Now().UnixNano()), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	b := mustCreateUser(t, client, &service.User{
		Email: fmt.Sprintf("affiliate-bind-b-%d@example.com", time.Now().UnixNano()), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	c := mustCreateUser(t, client, &service.User{
		Email: fmt.Sprintf("affiliate-bind-c-%d@example.com", time.Now().UnixNano()), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	for _, userID := range []int64{a.ID, b.ID, c.ID} {
		_, err := repo.EnsureUserAffiliate(txCtx, userID)
		require.NoError(t, err)
	}

	bound, err := repo.BindInviter(txCtx, a.ID, a.ID, &admin.ID)
	require.ErrorIs(t, err, service.ErrAffiliateSelfBind)
	require.False(t, bound)

	bound, err = repo.BindInviter(txCtx, b.ID, a.ID, nil)
	require.NoError(t, err)
	require.True(t, bound)
	bound, err = repo.BindInviter(txCtx, c.ID, b.ID, &admin.ID)
	require.NoError(t, err)
	require.True(t, bound)

	rows, err := client.QueryContext(txCtx, `
SELECT inviter_id, inviter_bound_at, inviter_bound_by_admin_id
FROM user_affiliates
WHERE user_id = $1`, c.ID)
	require.NoError(t, err)
	require.True(t, rows.Next())
	var inviterID int64
	var boundAt time.Time
	var actorID int64
	require.NoError(t, rows.Scan(&inviterID, &boundAt, &actorID))
	require.NoError(t, rows.Close())
	require.Equal(t, b.ID, inviterID)
	require.Equal(t, admin.ID, actorID)
	require.False(t, boundAt.IsZero())

	// a -> c would close a -> c -> b -> a and must be rejected.
	bound, err = repo.BindInviter(txCtx, a.ID, c.ID, &admin.ID)
	require.ErrorIs(t, err, service.ErrAffiliateCycle)
	require.False(t, bound)

	// Existing c -> b is immutable even when the new inviter would be valid.
	bound, err = repo.BindInviter(txCtx, c.ID, a.ID, &admin.ID)
	require.NoError(t, err)
	require.False(t, bound)
	summary, err := repo.EnsureUserAffiliate(txCtx, c.ID)
	require.NoError(t, err)
	require.NotNil(t, summary.InviterID)
	require.Equal(t, b.ID, *summary.InviterID)
	require.NotNil(t, summary.InviterBoundAt)

	// inviter_id uses ON DELETE SET NULL. A retained bound_at is an immutable
	// tombstone and must still block replacement after the old inviter vanishes.
	originalBoundAt := *summary.InviterBoundAt
	_, err = client.ExecContext(txCtx,
		"UPDATE user_affiliates SET inviter_id = NULL WHERE user_id = $1", c.ID)
	require.NoError(t, err)
	bound, err = repo.BindInviter(txCtx, c.ID, a.ID, &admin.ID)
	require.NoError(t, err)
	require.False(t, bound)
	summary, err = repo.EnsureUserAffiliate(txCtx, c.ID)
	require.NoError(t, err)
	require.Nil(t, summary.InviterID)
	require.NotNil(t, summary.InviterBoundAt)
	require.True(t, summary.InviterBoundAt.Equal(originalBoundAt))
}

func TestAffiliateRepository_BindInviterConcurrentCAS(t *testing.T) {
	ctx := context.Background()
	repo := NewAffiliateRepository(integrationEntClient, integrationDB)
	suffix := time.Now().UnixNano()

	admin := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-cas-admin-%d@example.com", suffix), PasswordHash: "hash",
		Role: service.RoleAdmin, Status: service.StatusActive, Concurrency: 5,
	})
	inviterA := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-cas-a-%d@example.com", suffix), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	inviterB := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-cas-b-%d@example.com", suffix), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	invitee := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-cas-invitee-%d@example.com", suffix), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	userIDs := []int64{admin.ID, inviterA.ID, inviterB.ID, invitee.ID}
	t.Cleanup(func() {
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM user_affiliates WHERE user_id IN ($1, $2, $3, $4)", userIDs[0], userIDs[1], userIDs[2], userIDs[3])
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM users WHERE id IN ($1, $2, $3, $4)", userIDs[0], userIDs[1], userIDs[2], userIDs[3])
	})
	for _, userID := range []int64{inviterA.ID, inviterB.ID, invitee.ID} {
		_, err := repo.EnsureUserAffiliate(ctx, userID)
		require.NoError(t, err)
	}

	start := make(chan struct{})
	type result struct {
		bound bool
		err   error
	}
	results := make(chan result, 2)
	var wg sync.WaitGroup
	for _, inviterID := range []int64{inviterA.ID, inviterB.ID} {
		wg.Add(1)
		go func(candidateID int64) {
			defer wg.Done()
			<-start
			bound, err := repo.BindInviter(ctx, invitee.ID, candidateID, &admin.ID)
			results <- result{bound: bound, err: err}
		}(inviterID)
	}
	close(start)
	wg.Wait()
	close(results)

	successes := 0
	for item := range results {
		require.NoError(t, item.err)
		if item.bound {
			successes++
		}
	}
	require.Equal(t, 1, successes, "exactly one concurrent binding may win")

	summary, err := repo.EnsureUserAffiliate(ctx, invitee.ID)
	require.NoError(t, err)
	require.NotNil(t, summary.InviterID)
	require.Contains(t, []int64{inviterA.ID, inviterB.ID}, *summary.InviterID)
	totalCount := querySingleInt(t, ctx, integrationEntClient,
		"SELECT SUM(aff_count) FROM user_affiliates WHERE user_id IN ($1, $2)", inviterA.ID, inviterB.ID)
	require.Equal(t, 1, totalCount)
}

func TestAffiliateRepository_BindInviterSerializesDisjointCycleClosure(t *testing.T) {
	ctx := context.Background()
	repo := NewAffiliateRepository(integrationEntClient, integrationDB)
	suffix := time.Now().UnixNano()
	makeUser := func(label string, role string) *service.User {
		return mustCreateUser(t, integrationEntClient, &service.User{
			Email: fmt.Sprintf("affiliate-cycle-%s-%d@example.com", label, suffix), PasswordHash: "hash",
			Role: role, Status: service.StatusActive, Concurrency: 5,
		})
	}
	admin := makeUser("admin", service.RoleAdmin)
	a := makeUser("a", service.RoleUser)
	b := makeUser("b", service.RoleUser)
	c := makeUser("c", service.RoleUser)
	d := makeUser("d", service.RoleUser)
	userIDs := []int64{admin.ID, a.ID, b.ID, c.ID, d.ID}
	t.Cleanup(func() {
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM user_affiliates WHERE user_id = ANY($1)", pq.Array(userIDs))
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM users WHERE id = ANY($1)", pq.Array(userIDs))
	})
	for _, userID := range []int64{a.ID, b.ID, c.ID, d.ID} {
		_, err := repo.EnsureUserAffiliate(ctx, userID)
		require.NoError(t, err)
	}

	// Baseline paths are B -> C and D -> A. Concurrently accepting both
	// A -> B and C -> D would close A -> B -> C -> D -> A.
	bound, err := repo.BindInviter(ctx, b.ID, c.ID, &admin.ID)
	require.NoError(t, err)
	require.True(t, bound)
	bound, err = repo.BindInviter(ctx, d.ID, a.ID, &admin.ID)
	require.NoError(t, err)
	require.True(t, bound)

	type bindResult struct {
		bound bool
		err   error
	}
	start := make(chan struct{})
	results := make(chan bindResult, 2)
	edges := [][2]int64{{a.ID, b.ID}, {c.ID, d.ID}}
	var wg sync.WaitGroup
	for _, edge := range edges {
		wg.Add(1)
		go func(inviteeID, inviterID int64) {
			defer wg.Done()
			<-start
			bound, err := repo.BindInviter(ctx, inviteeID, inviterID, &admin.ID)
			results <- bindResult{bound: bound, err: err}
		}(edge[0], edge[1])
	}
	close(start)
	wg.Wait()
	close(results)

	successes := 0
	cycleRejects := 0
	for result := range results {
		if result.bound {
			require.NoError(t, result.err)
			successes++
			continue
		}
		require.ErrorIs(t, result.err, service.ErrAffiliateCycle)
		cycleRejects++
	}
	require.Equal(t, 1, successes)
	require.Equal(t, 1, cycleRejects)

	for _, startID := range []int64{a.ID, b.ID, c.ID, d.ID} {
		seen := make(map[int64]bool, 4)
		currentID := startID
		for currentID > 0 {
			require.False(t, seen[currentID], "affiliate graph contains a cycle from user %d", startID)
			seen[currentID] = true
			summary, err := repo.EnsureUserAffiliate(ctx, currentID)
			require.NoError(t, err)
			if summary.InviterID == nil {
				break
			}
			currentID = *summary.InviterID
		}
	}
}

func TestAffiliateRepository_BindInviterMapsUnknownUsers(t *testing.T) {
	ctx := context.Background()
	repo := NewAffiliateRepository(integrationEntClient, integrationDB)
	valid := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-unknown-user-%d@example.com", time.Now().UnixNano()), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	t.Cleanup(func() {
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM user_affiliates WHERE user_id = $1", valid.ID)
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM users WHERE id = $1", valid.ID)
	})

	const missingInviteeID int64 = 9_000_000_000_000_000_001
	const missingInviterID int64 = 9_000_000_000_000_000_002
	bound, err := repo.BindInviter(ctx, missingInviteeID, valid.ID, nil)
	require.False(t, bound)
	require.ErrorIs(t, err, service.ErrUserNotFound)

	bound, err = repo.BindInviter(ctx, valid.ID, missingInviterID, nil)
	require.False(t, bound)
	require.ErrorIs(t, err, service.ErrUserNotFound)
}

func TestAffiliateRepository_BindInviterRejectsSoftDeletedUsersWithoutSideEffects(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()
	repo := NewAffiliateRepository(client, integrationDB)

	makeUser := func(label string) *service.User {
		return mustCreateUser(t, client, &service.User{
			Email:        fmt.Sprintf("affiliate-soft-delete-%s-%d@example.com", label, time.Now().UnixNano()),
			PasswordHash: "hash",
			Role:         service.RoleUser,
			Status:       service.StatusActive,
			Concurrency:  5,
		})
	}
	deletedInvitee := makeUser("invitee")
	activeInviter := makeUser("active-inviter")
	activeInvitee := makeUser("active-invitee")
	deletedInviter := makeUser("inviter")

	_, err := client.ExecContext(txCtx,
		"UPDATE users SET deleted_at = NOW() WHERE id IN ($1, $2)",
		deletedInvitee.ID, deletedInviter.ID)
	require.NoError(t, err)

	bound, err := repo.BindInviter(txCtx, deletedInvitee.ID, activeInviter.ID, nil)
	require.False(t, bound)
	require.ErrorIs(t, err, service.ErrUserNotFound)

	bound, err = repo.BindInviter(txCtx, activeInvitee.ID, deletedInviter.ID, nil)
	require.False(t, bound)
	require.ErrorIs(t, err, service.ErrUserNotFound)

	require.Equal(t, 0, querySingleInt(t, txCtx, client, `
SELECT COUNT(*)
FROM user_affiliates
WHERE user_id IN ($1, $2, $3, $4)`,
		deletedInvitee.ID, activeInviter.ID, activeInvitee.ID, deletedInviter.ID),
		"rejected bindings must not create profiles or relationships for either endpoint")
}

func TestAffiliateRepository_TransferQuotaToBalance_EmptyQuota(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()

	repo := NewAffiliateRepository(client, integrationDB)

	u := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-empty-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
		Balance:      3.21,
		Concurrency:  5,
	})

	affCode := fmt.Sprintf("AFF%09d", time.Now().UnixNano()%1_000_000_000)
	_, err := client.ExecContext(txCtx, `
INSERT INTO user_affiliates (user_id, aff_code, aff_quota, aff_history_quota, created_at, updated_at)
VALUES ($1, $2, 0, 0, NOW(), NOW())`, u.ID, affCode)
	require.NoError(t, err)

	transferred, balance, err := repo.TransferQuotaToBalance(txCtx, u.ID)
	require.ErrorIs(t, err, service.ErrAffiliateQuotaEmpty)
	require.InDelta(t, 0.0, transferred, 1e-9)
	require.InDelta(t, 0.0, balance, 1e-9)

	persistedBalance := querySingleFloat(t, txCtx, client,
		"SELECT balance::double precision FROM users WHERE id = $1", u.ID)
	require.InDelta(t, 3.21, persistedBalance, 1e-9)
}

func TestAffiliateRepository_GetAffiliateUserOverviewReadsProfilelessUserWithoutCreatingProfile(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()
	repo := NewAffiliateRepository(client, integrationDB)

	profileless := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-overview-profileless-%d@example.com", time.Now().UnixNano()),
		Username:     "Profileless Customer",
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
		Concurrency:  5,
	})
	require.Equal(t, 0, querySingleInt(t, txCtx, client,
		"SELECT COUNT(*) FROM user_affiliates WHERE user_id = $1", profileless.ID))

	settingRepo := NewSettingRepository(client)
	require.NoError(t, settingRepo.Set(txCtx, service.SettingKeyAffiliateRebateRate, "37.5"))
	affiliateService := service.NewAffiliateService(
		repo,
		service.NewSettingService(settingRepo, nil),
		nil,
		nil,
	)
	overview, err := affiliateService.AdminGetUserOverview(txCtx, profileless.ID)
	require.NoError(t, err)
	require.Equal(t, profileless.ID, overview.UserID)
	require.Equal(t, profileless.Email, overview.Email)
	require.Equal(t, profileless.Username, overview.Username)
	require.Empty(t, overview.AffCode)
	require.False(t, overview.RebateRateCustom)
	require.InDelta(t, 37.5, overview.RebateRatePercent, 1e-9, "service must fall back to the global rebate rate")
	require.Zero(t, overview.InvitedCount)
	require.Zero(t, overview.RebatedInviteeCount)
	require.Zero(t, overview.AvailableQuota)
	require.Zero(t, overview.HistoryQuota)
	require.Equal(t, 0, querySingleInt(t, txCtx, client,
		"SELECT COUNT(*) FROM user_affiliates WHERE user_id = $1", profileless.ID),
		"overview reads must not create an affiliate profile")

	const missingUserID int64 = 9_000_000_000_000_000_003
	overview, err = affiliateService.AdminGetUserOverview(txCtx, missingUserID)
	require.Nil(t, overview)
	require.ErrorIs(t, err, service.ErrUserNotFound)

	deleted := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-overview-deleted-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
		Concurrency:  5,
	})
	_, err = repo.EnsureUserAffiliate(txCtx, deleted.ID)
	require.NoError(t, err)
	_, err = client.ExecContext(txCtx,
		"UPDATE users SET deleted_at = NOW() WHERE id = $1", deleted.ID)
	require.NoError(t, err)

	overview, err = repo.GetAffiliateUserOverview(txCtx, deleted.ID)
	require.Nil(t, overview)
	require.ErrorIs(t, err, service.ErrUserNotFound)
	require.Equal(t, 1, querySingleInt(t, txCtx, client,
		"SELECT COUNT(*) FROM user_affiliates WHERE user_id = $1", deleted.ID),
		"overview reads must not mutate an existing affiliate profile")
}

// TestAffiliateRepository_AdminCustomCode covers the success path of admin
// invite-code rewrite + reset within a shared test transaction:
// - UpdateUserAffCode replaces aff_code, sets aff_code_custom=true, lookup works
// - the old code can no longer be found
// - ResetUserAffCode reverts aff_code_custom and assigns a new system-format code
//
// The conflict path (duplicate code → ErrAffiliateCodeTaken) lives in its own
// test because a unique-violation aborts the surrounding Postgres tx, which
// would poison subsequent assertions in the same transaction.
func TestAffiliateRepository_AdminCustomCode(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()

	repo := NewAffiliateRepository(client, integrationDB)

	u := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-custom-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
	})

	original, err := repo.EnsureUserAffiliate(txCtx, u.ID)
	require.NoError(t, err)
	require.False(t, original.AffCodeCustom, "system-generated codes start as non-custom")
	originalCode := original.AffCode

	// Rewrite to a custom code
	customCode := fmt.Sprintf("VIP%09d", time.Now().UnixNano()%1_000_000_000)
	require.NoError(t, repo.UpdateUserAffCode(txCtx, u.ID, customCode))

	updated, err := repo.EnsureUserAffiliate(txCtx, u.ID)
	require.NoError(t, err)
	require.Equal(t, customCode, updated.AffCode)
	require.True(t, updated.AffCodeCustom)

	// Lookup by new custom code finds the user
	byCode, err := repo.GetAffiliateByCode(txCtx, customCode)
	require.NoError(t, err)
	require.Equal(t, u.ID, byCode.UserID)

	// Old system code should no longer match
	_, err = repo.GetAffiliateByCode(txCtx, originalCode)
	require.ErrorIs(t, err, service.ErrAffiliateProfileNotFound)

	// Reset back to a fresh system code, clears custom flag
	newSysCode, err := repo.ResetUserAffCode(txCtx, u.ID)
	require.NoError(t, err)
	require.NotEqual(t, customCode, newSysCode)

	reset, err := repo.EnsureUserAffiliate(txCtx, u.ID)
	require.NoError(t, err)
	require.Equal(t, newSysCode, reset.AffCode)
	require.False(t, reset.AffCodeCustom)

	// The old custom code is now free again
	_, err = repo.GetAffiliateByCode(txCtx, customCode)
	require.ErrorIs(t, err, service.ErrAffiliateProfileNotFound)
}

// TestAffiliateRepository_AdminCustomCode_Conflict isolates the unique-violation
// path. PostgreSQL aborts the enclosing tx when a unique constraint fires, so
// this test must be the only assertion and run in its own tx — production
// callers each have their own outer tx, so this matches real behavior.
func TestAffiliateRepository_AdminCustomCode_Conflict(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()

	repo := NewAffiliateRepository(client, integrationDB)

	taker := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-conflict-taker-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser, Status: service.StatusActive,
	})
	requester := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-conflict-req-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser, Status: service.StatusActive,
	})

	takenCode := fmt.Sprintf("HOT%09d", time.Now().UnixNano()%1_000_000_000)
	require.NoError(t, repo.UpdateUserAffCode(txCtx, taker.ID, takenCode))

	// Now requester tries to grab the same code → conflict.
	err := repo.UpdateUserAffCode(txCtx, requester.ID, takenCode)
	require.ErrorIs(t, err, service.ErrAffiliateCodeTaken)
}

func TestAffiliateRepository_AdminUserSettingsRollsBackOnCodeConflict(t *testing.T) {
	ctx := context.Background()
	repo := NewAffiliateRepository(integrationEntClient, integrationDB)
	suffix := time.Now().UnixNano()

	taker := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-atomic-taker-%d@example.com", suffix), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	requester := mustCreateUser(t, integrationEntClient, &service.User{
		Email: fmt.Sprintf("affiliate-atomic-requester-%d@example.com", suffix), PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive, Concurrency: 5,
	})
	userIDs := []int64{taker.ID, requester.ID}
	t.Cleanup(func() {
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM user_affiliates WHERE user_id = ANY($1)", pq.Array(userIDs))
		_, _ = integrationDB.ExecContext(context.Background(),
			"DELETE FROM users WHERE id = ANY($1)", pq.Array(userIDs))
	})

	takenCode := fmt.Sprintf("TAK%09d", suffix%1_000_000_000)
	originalCode := fmt.Sprintf("OWN%09d", suffix%1_000_000_000)
	require.NoError(t, repo.UpdateUserAffCode(ctx, taker.ID, takenCode))
	require.NoError(t, repo.UpdateUserAffCode(ctx, requester.ID, originalCode))
	originalRate := 12.5
	require.NoError(t, repo.SetUserRebateRate(ctx, requester.ID, &originalRate))

	newRate := 48.0
	err := repo.UpdateUserSettings(ctx, requester.ID, service.AffiliateUserSettingsUpdate{
		AffCode:              &takenCode,
		UpdateRebateRate:     true,
		AffRebateRatePercent: &newRate,
	})
	require.ErrorIs(t, err, service.ErrAffiliateCodeTaken)

	got, err := repo.EnsureUserAffiliate(ctx, requester.ID)
	require.NoError(t, err)
	require.Equal(t, originalCode, got.AffCode)
	require.NotNil(t, got.AffRebateRatePercent)
	require.InDelta(t, originalRate, *got.AffRebateRatePercent, 1e-9,
		"rate update must roll back when the later code update conflicts")
}

// TestAffiliateRepository_AdminRebateRate covers per-user exclusive rate
// set/clear and the Batch variant including NULL semantics.
func TestAffiliateRepository_AdminRebateRate(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()

	repo := NewAffiliateRepository(client, integrationDB)

	u1 := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-rate-%d-a@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
	})
	u2 := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-rate-%d-b@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser,
		Status:       service.StatusActive,
	})

	// Set exclusive rate for u1
	rate := 42.5
	require.NoError(t, repo.SetUserRebateRate(txCtx, u1.ID, &rate))

	got, err := repo.EnsureUserAffiliate(txCtx, u1.ID)
	require.NoError(t, err)
	require.NotNil(t, got.AffRebateRatePercent)
	require.InDelta(t, 42.5, *got.AffRebateRatePercent, 1e-9)

	// Clear exclusive rate
	require.NoError(t, repo.SetUserRebateRate(txCtx, u1.ID, nil))
	cleared, err := repo.EnsureUserAffiliate(txCtx, u1.ID)
	require.NoError(t, err)
	require.Nil(t, cleared.AffRebateRatePercent)

	// Batch set both users
	batchRate := 15.0
	require.NoError(t, repo.BatchSetUserRebateRate(txCtx, []int64{u1.ID, u2.ID}, &batchRate))

	for _, uid := range []int64{u1.ID, u2.ID} {
		v, err := repo.EnsureUserAffiliate(txCtx, uid)
		require.NoError(t, err)
		require.NotNil(t, v.AffRebateRatePercent)
		require.InDelta(t, 15.0, *v.AffRebateRatePercent, 1e-9)
	}

	// Batch clear
	require.NoError(t, repo.BatchSetUserRebateRate(txCtx, []int64{u1.ID, u2.ID}, nil))
	for _, uid := range []int64{u1.ID, u2.ID} {
		v, err := repo.EnsureUserAffiliate(txCtx, uid)
		require.NoError(t, err)
		require.Nil(t, v.AffRebateRatePercent)
	}
}

// TestAffiliateRepository_ListUsersWithCustomSettings verifies the admin list
// only includes users with at least one override applied.
func TestAffiliateRepository_ListUsersWithCustomSettings(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()

	repo := NewAffiliateRepository(client, integrationDB)

	// User without any custom config — should NOT appear in the list.
	plainEmail := fmt.Sprintf("affiliate-plain-%d@example.com", time.Now().UnixNano())
	uPlain := mustCreateUser(t, client, &service.User{
		Email: plainEmail, PasswordHash: "hash",
		Role: service.RoleUser, Status: service.StatusActive,
	})
	_, err := repo.EnsureUserAffiliate(txCtx, uPlain.ID)
	require.NoError(t, err)

	// User with a custom code — should appear.
	uCode := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-codeonly-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser, Status: service.StatusActive,
	})
	require.NoError(t, repo.UpdateUserAffCode(txCtx, uCode.ID, fmt.Sprintf("VIP%09d", time.Now().UnixNano()%1_000_000_000)))

	// User with only an exclusive rate — should appear.
	uRate := mustCreateUser(t, client, &service.User{
		Email:        fmt.Sprintf("affiliate-rateonly-%d@example.com", time.Now().UnixNano()),
		PasswordHash: "hash",
		Role:         service.RoleUser, Status: service.StatusActive,
	})
	r := 33.3
	require.NoError(t, repo.SetUserRebateRate(txCtx, uRate.ID, &r))

	entries, total, err := repo.ListUsersWithCustomSettings(txCtx, service.AffiliateAdminFilter{
		Page: 1, PageSize: 100,
	})
	require.NoError(t, err)

	// Build a quick lookup to assert per-user attributes (other tests may have
	// inserted custom rows in the same DB; we only care about our 3).
	byUserID := make(map[int64]service.AffiliateAdminEntry, len(entries))
	for _, e := range entries {
		byUserID[e.UserID] = e
	}

	require.NotContains(t, byUserID, uPlain.ID, "users without overrides must not appear")

	codeEntry, ok := byUserID[uCode.ID]
	require.True(t, ok, "custom-code user missing from list")
	require.True(t, codeEntry.AffCodeCustom)
	require.Nil(t, codeEntry.AffRebateRatePercent)

	rateEntry, ok := byUserID[uRate.ID]
	require.True(t, ok, "custom-rate user missing from list")
	require.False(t, rateEntry.AffCodeCustom)
	require.NotNil(t, rateEntry.AffRebateRatePercent)
	require.InDelta(t, 33.3, *rateEntry.AffRebateRatePercent, 1e-9)

	require.GreaterOrEqual(t, total, int64(2), "total must include at least our 2 custom rows")
}

func TestAffiliateRepository_ListInviteRecordsFiltersExactInviterAndUsesBoundAt(t *testing.T) {
	ctx := context.Background()
	tx := testEntTx(t)
	txCtx := dbent.NewTxContext(ctx, tx)
	client := tx.Client()
	repo := NewAffiliateRepository(client, integrationDB)

	makeUser := func(label string) *service.User {
		return mustCreateUser(t, client, &service.User{
			Email:        fmt.Sprintf("affiliate-list-%s-%d@example.com", label, time.Now().UnixNano()),
			PasswordHash: "hash",
			Role:         service.RoleUser,
			Status:       service.StatusActive,
			Concurrency:  5,
		})
	}
	inviterA := makeUser("inviter-a")
	inviterB := makeUser("inviter-b")
	zeroInviteInviter := makeUser("inviter-zero")
	inviteeA1 := makeUser("invitee-a1")
	inviteeA2 := makeUser("invitee-a2")
	inviteeA3 := makeUser("invitee-a3")
	inviteeB := makeUser("invitee-b")
	for _, userID := range []int64{
		inviterA.ID,
		inviterB.ID,
		inviteeA1.ID,
		inviteeA2.ID,
		inviteeA3.ID,
		inviteeB.ID,
	} {
		_, err := repo.EnsureUserAffiliate(txCtx, userID)
		require.NoError(t, err)
	}

	baseBoundAt := time.Date(2026, time.August, 24, 8, 30, 0, 0, time.UTC)
	bindings := []struct {
		invitee *service.User
		inviter *service.User
		boundAt time.Time
	}{
		{invitee: inviteeA1, inviter: inviterA, boundAt: baseBoundAt},
		{invitee: inviteeA2, inviter: inviterA, boundAt: baseBoundAt.Add(time.Hour)},
		{invitee: inviteeA3, inviter: inviterA, boundAt: baseBoundAt.Add(2 * time.Hour)},
		{invitee: inviteeB, inviter: inviterB, boundAt: baseBoundAt.Add(3 * time.Hour)},
	}
	for _, binding := range bindings {
		bound, err := repo.BindInviter(txCtx, binding.invitee.ID, binding.inviter.ID, nil)
		require.NoError(t, err)
		require.True(t, bound)
		_, err = client.ExecContext(txCtx,
			"UPDATE user_affiliates SET inviter_bound_at = $1 WHERE user_id = $2",
			binding.boundAt, binding.invitee.ID)
		require.NoError(t, err)
	}

	for _, accrual := range []struct {
		inviteeID int64
		amount    float64
	}{
		{inviteeID: inviteeA1.ID, amount: 1.25},
		{inviteeID: inviteeA1.ID, amount: 2.50},
		{inviteeID: inviteeA2.ID, amount: 5.00},
	} {
		applied, err := repo.AccrueQuota(txCtx, inviterA.ID, accrual.inviteeID, accrual.amount, 0, nil)
		require.NoError(t, err)
		require.True(t, applied)
	}
	transferred, _, err := repo.TransferQuotaToBalance(txCtx, inviterA.ID)
	require.NoError(t, err)
	require.InDelta(t, 8.75, transferred, 1e-9)
	require.Equal(t, 1, querySingleInt(t, txCtx, client,
		"SELECT COUNT(*) FROM user_affiliate_ledger WHERE user_id = $1 AND action = 'transfer'", inviterA.ID))

	emptyItems, total, err := repo.ListAffiliateInviteRecords(txCtx, service.AffiliateRecordFilter{
		Page: 1, PageSize: 20, InviterID: zeroInviteInviter.ID,
	})
	require.NoError(t, err)
	require.Empty(t, emptyItems)
	require.Zero(t, total, "a valid user with zero invitations must return an empty relationship page")

	pageOne, total, err := repo.ListAffiliateInviteRecords(txCtx, service.AffiliateRecordFilter{
		Page: 1, PageSize: 2, InviterID: inviterA.ID, SortBy: "created_at", SortDesc: true,
	})
	require.NoError(t, err)
	require.Equal(t, int64(3), total, "total must count only the exact inviter before pagination")
	require.Len(t, pageOne, 2)
	require.Equal(t, []int64{inviteeA3.ID, inviteeA2.ID}, []int64{pageOne[0].InviteeID, pageOne[1].InviteeID})
	require.True(t, pageOne[0].CreatedAt.Equal(bindings[2].boundAt))

	pageTwo, total, err := repo.ListAffiliateInviteRecords(txCtx, service.AffiliateRecordFilter{
		Page: 2, PageSize: 2, InviterID: inviterA.ID, SortBy: "created_at", SortDesc: true,
	})
	require.NoError(t, err)
	require.Equal(t, int64(3), total)
	require.Len(t, pageTwo, 1)
	require.Equal(t, inviteeA1.ID, pageTwo[0].InviteeID)

	searched, total, err := repo.ListAffiliateInviteRecords(txCtx, service.AffiliateRecordFilter{
		Search: "invitee-a2", Page: 1, PageSize: 20, InviterID: inviterA.ID,
	})
	require.NoError(t, err)
	require.Equal(t, int64(1), total)
	require.Len(t, searched, 1)
	require.Equal(t, inviteeA2.ID, searched[0].InviteeID)

	startAt := bindings[1].boundAt
	endAt := bindings[2].boundAt
	bounded, total, err := repo.ListAffiliateInviteRecords(txCtx, service.AffiliateRecordFilter{
		Page: 1, PageSize: 20, InviterID: inviterA.ID,
		StartAt: &startAt, EndAt: &endAt, SortBy: "created_at",
	})
	require.NoError(t, err)
	require.Equal(t, int64(2), total, "start_at and end_at must be inclusive")
	require.Len(t, bounded, 2)
	require.Equal(t, []int64{inviteeA2.ID, inviteeA3.ID}, []int64{bounded[0].InviteeID, bounded[1].InviteeID})

	byRebate, total, err := repo.ListAffiliateInviteRecords(txCtx, service.AffiliateRecordFilter{
		Page: 1, PageSize: 20, InviterID: inviterA.ID, SortBy: "total_rebate", SortDesc: true,
	})
	require.NoError(t, err)
	require.Equal(t, int64(3), total)
	require.Len(t, byRebate, 3)
	require.Equal(t, []int64{inviteeA2.ID, inviteeA1.ID, inviteeA3.ID}, []int64{
		byRebate[0].InviteeID,
		byRebate[1].InviteeID,
		byRebate[2].InviteeID,
	})
	require.InDelta(t, 5.00, byRebate[0].TotalRebate, 1e-9)
	require.InDelta(t, 3.75, byRebate[1].TotalRebate, 1e-9, "multiple accruals for one invitee must be summed")
	require.Zero(t, byRebate[2].TotalRebate, "invitees without accruals must report zero")
}
