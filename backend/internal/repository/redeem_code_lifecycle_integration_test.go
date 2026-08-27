//go:build integration

package repository

import (
	"context"
	"errors"
	"fmt"
	"testing"
	"time"

	dbent "github.com/Wei-Shaw/sub2api/ent"
	"github.com/Wei-Shaw/sub2api/ent/redeemcode"
	"github.com/Wei-Shaw/sub2api/internal/service"
	"github.com/stretchr/testify/require"
)

func createRedeemLifecycleFixture(t *testing.T) (*redeemCodeRepository, *dbent.User, service.RedeemCode) {
	t.Helper()
	ctx := context.Background()
	suffix, err := service.GenerateRedeemCode()
	require.NoError(t, err)
	user, err := integrationEntClient.User.Create().
		SetEmail("redeem-lifecycle-" + suffix + "@example.com").
		SetPasswordHash("test-password-hash").Save(ctx)
	require.NoError(t, err)
	repo := NewRedeemCodeRepository(integrationEntClient).(*redeemCodeRepository)
	code := service.RedeemCode{
		Code: suffix, Type: service.RedeemTypeMysteryBox, Status: service.StatusUnused,
		BatchID: &suffix, MinValue: 2.34, MaxValue: 2.34,
	}
	require.NoError(t, repo.Create(ctx, &code))
	t.Cleanup(func() {
		_, err := integrationEntClient.RedeemCode.Delete().Where(redeemcode.BatchIDEQ(suffix)).Exec(context.Background())
		require.NoError(t, err)
		require.NoError(t, integrationEntClient.User.DeleteOneID(user.ID).Exec(context.Background()))
	})
	return repo, user, code
}

func redeemLifecycleService(repo service.RedeemCodeRepository, userRepo service.UserRepository) *service.RedeemService {
	return service.NewRedeemService(repo, userRepo, nil, nil, nil, integrationEntClient, nil, nil)
}

func redeemLifecycleAdmin(repo service.RedeemCodeRepository) service.AdminService {
	return service.NewAdminService(nil, nil, nil, nil, nil, repo, nil, nil, nil, nil, nil, nil,
		integrationEntClient, nil, nil, nil, nil, nil, nil, nil, nil, nil)
}

// Wait for the competing statement to actually block on PostgreSQL. This makes
// the race deterministic without sleeps that merely hope to hit the window.
func waitForRedeemRowLock(t *testing.T) {
	t.Helper()
	require.Eventually(t, func() bool {
		var waiting bool
		err := integrationDB.QueryRow(`SELECT EXISTS (
			SELECT 1 FROM pg_stat_activity
			WHERE datname = current_database() AND wait_event_type = 'Lock'
			AND query ILIKE '%redeem_codes%'
		)`).Scan(&waiting)
		return err == nil && waiting
	}, 5*time.Second, 10*time.Millisecond, "redeem operation never waited for the held row lock")
}

func TestRedeemLifecycleManagementCannotOverwriteConcurrentClaim(t *testing.T) {
	for _, operation := range []string{"batch-enable", "expire", "delete", "batch-delete"} {
		t.Run(operation, func(t *testing.T) {
			repo, user, code := createRedeemLifecycleFixture(t)
			ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
			defer cancel()
			tx, err := integrationEntClient.Tx(ctx)
			require.NoError(t, err)
			defer func() { _ = tx.Rollback() }()
			txCtx := dbent.NewTxContext(ctx, tx)
			require.NoError(t, repo.Use(txCtx, code.ID, user.ID))
			require.NoError(t, tx.Client().RedeemCode.UpdateOneID(code.ID).SetValue(2.34).Exec(txCtx))
			result := make(chan error, 1)
			go func() {
				switch operation {
				case "batch-enable":
					status := service.StatusUnused
					_, err := repo.BatchUpdate(ctx, []int64{code.ID}, service.RedeemCodeBatchUpdateFields{Status: &status})
					result <- err
				case "expire":
					_, err := redeemLifecycleAdmin(repo).ExpireRedeemCode(ctx, code.ID)
					result <- err
				case "delete":
					result <- repo.Delete(ctx, code.ID)
				case "batch-delete":
					deleted, err := repo.BatchDelete(ctx, []int64{code.ID, code.ID})
					if err == nil && deleted != 0 {
						err = fmt.Errorf("deleted %d claimed rows", deleted)
					}
					result <- err
				}
			}()
			waitForRedeemRowLock(t)
			require.NoError(t, tx.Commit())
			if operation == "batch-delete" {
				require.NoError(t, <-result)
			} else {
				require.ErrorIs(t, <-result, service.ErrRedeemCodeUsed)
			}
			stored, err := repo.GetByID(ctx, code.ID)
			require.NoError(t, err)
			require.Equal(t, service.StatusUsed, stored.Status)
			require.Equal(t, 2.34, stored.Value)
			require.NotNil(t, stored.UsedBy)
			require.Equal(t, user.ID, *stored.UsedBy)
			require.NotNil(t, stored.UsedAt)
		})
	}
}

func TestRedeemLifecycleExpiredWhileWaitingForLock(t *testing.T) {
	repo, user, code := createRedeemLifecycleFixture(t)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	expiresAt := time.Now().Add(2 * time.Second)
	require.NoError(t, integrationEntClient.RedeemCode.UpdateOneID(code.ID).SetExpiresAt(expiresAt).Exec(ctx))
	tx, err := integrationEntClient.Tx(ctx)
	require.NoError(t, err)
	defer func() { _ = tx.Rollback() }()
	_, err = tx.Client().RedeemCode.Query().Where(redeemcode.IDEQ(code.ID)).ForUpdate().Only(ctx)
	require.NoError(t, err)
	svc := redeemLifecycleService(repo, NewUserRepository(integrationEntClient, integrationDB))
	result := make(chan error, 1)
	go func() {
		_, err := svc.Redeem(ctx, user.ID, code.Code)
		result <- err
	}()
	waitForRedeemRowLock(t)
	require.Eventually(t, func() bool { return time.Now().After(expiresAt) }, 3*time.Second, 10*time.Millisecond)
	require.NoError(t, tx.Commit())
	require.ErrorIs(t, <-result, service.ErrRedeemCodeExpired)
	stored, err := repo.GetByID(ctx, code.ID)
	require.NoError(t, err)
	require.Equal(t, service.StatusUnused, stored.Status)
	require.Nil(t, stored.UsedBy)
	updatedUser, err := integrationEntClient.User.Get(ctx, user.ID)
	require.NoError(t, err)
	require.Zero(t, updatedUser.Balance)
}

func TestRedeemLifecycleClaimMarkersCannotBeReusedOrDeleted(t *testing.T) {
	for _, marker := range []string{"used_by", "used_at"} {
		for _, operation := range []string{"use", "batch-enable", "expire", "delete"} {
			t.Run(marker+"/"+operation, func(t *testing.T) {
				repo, user, code := createRedeemLifecycleFixture(t)
				ctx := context.Background()
				update := integrationEntClient.RedeemCode.UpdateOneID(code.ID)
				if marker == "used_by" {
					update.SetUsedBy(user.ID)
				} else {
					update.SetUsedAt(time.Now())
				}
				require.NoError(t, update.Exec(ctx))
				var err error
				switch operation {
				case "use":
					err = repo.Use(ctx, code.ID, user.ID)
				case "batch-enable":
					status := service.StatusUnused
					_, err = repo.BatchUpdate(ctx, []int64{code.ID}, service.RedeemCodeBatchUpdateFields{Status: &status})
				case "expire":
					_, err = redeemLifecycleAdmin(repo).ExpireRedeemCode(ctx, code.ID)
				case "delete":
					err = repo.Delete(ctx, code.ID)
				}
				require.ErrorIs(t, err, service.ErrRedeemCodeUsed)
			})
		}
	}
}

func TestRedeemLifecycleForeignKeyErrorIsNotBatchAlreadyClaimed(t *testing.T) {
	repo, _, code := createRedeemLifecycleFixture(t)
	err := repo.Use(context.Background(), code.ID, 9223372036854775807)
	require.Error(t, err)
	require.NotErrorIs(t, err, service.ErrRedeemBatchAlreadyClaimed)
}

type redeemTransactionReadRepo struct {
	service.RedeemCodeRepository
}

func (r redeemTransactionReadRepo) GetByID(ctx context.Context, id int64) (*service.RedeemCode, error) {
	if dbent.TxFromContext(ctx) == nil {
		return nil, errors.New("database read after commit is unavailable")
	}
	return r.RedeemCodeRepository.GetByID(ctx, id)
}

func TestRedeemLifecycleSuccessDoesNotReadAfterCommit(t *testing.T) {
	repo, user, code := createRedeemLifecycleFixture(t)
	svc := redeemLifecycleService(redeemTransactionReadRepo{repo}, NewUserRepository(integrationEntClient, integrationDB))
	redeemed, err := svc.Redeem(context.Background(), user.ID, code.Code)
	require.NoError(t, err)
	require.Equal(t, service.StatusUsed, redeemed.Status)
	require.Equal(t, 2.34, redeemed.Value)
	require.Equal(t, user.ID, *redeemed.UsedBy)
	updatedUser, err := integrationEntClient.User.Get(context.Background(), user.ID)
	require.NoError(t, err)
	require.InDelta(t, 2.34, updatedUser.Balance, 0.00000001)
}

type redeemFailingBalanceRepo struct {
	service.UserRepository
	cancel context.CancelFunc
}

func (r redeemFailingBalanceRepo) UpdateBalance(ctx context.Context, id int64, amount float64) error {
	if r.cancel == nil {
		return errors.New("injected credit failure")
	}
	if err := r.UserRepository.UpdateBalance(ctx, id, amount); err != nil {
		return err
	}
	r.cancel()
	return nil
}

func TestRedeemLifecycleCreditAndCancellationFailuresRollBack(t *testing.T) {
	for _, scenario := range []string{"credit-failure", "cancel-after-credit"} {
		t.Run(scenario, func(t *testing.T) {
			repo, user, code := createRedeemLifecycleFixture(t)
			ctx, cancel := context.WithCancel(context.Background())
			defer cancel()
			userRepo := redeemFailingBalanceRepo{UserRepository: NewUserRepository(integrationEntClient, integrationDB)}
			if scenario == "cancel-after-credit" {
				userRepo.cancel = cancel
			}
			_, err := redeemLifecycleService(repo, userRepo).Redeem(ctx, user.ID, code.Code)
			require.Error(t, err)
			stored, err := repo.GetByID(context.Background(), code.ID)
			require.NoError(t, err)
			require.Equal(t, service.StatusUnused, stored.Status)
			require.Nil(t, stored.UsedBy)
			require.Nil(t, stored.UsedAt)
			require.Zero(t, stored.Value)
			updatedUser, err := integrationEntClient.User.Get(context.Background(), user.ID)
			require.NoError(t, err)
			require.Zero(t, updatedUser.Balance)
		})
	}
}

func TestRedeemLifecycleConcurrentRequestsCreditOnce(t *testing.T) {
	repo, user, code := createRedeemLifecycleFixture(t)
	svc := redeemLifecycleService(repo, NewUserRepository(integrationEntClient, integrationDB))
	const requests = 12
	start := make(chan struct{})
	results := make(chan error, requests)
	for i := 0; i < requests; i++ {
		go func() {
			<-start
			_, err := svc.Redeem(context.Background(), user.ID, code.Code)
			results <- err
		}()
	}
	close(start)
	var successes int
	for i := 0; i < requests; i++ {
		err := <-results
		if err == nil {
			successes++
		} else {
			require.ErrorIs(t, err, service.ErrRedeemCodeUsed, fmt.Sprintf("request %d", i))
		}
	}
	require.Equal(t, 1, successes)
	updatedUser, err := integrationEntClient.User.Get(context.Background(), user.ID)
	require.NoError(t, err)
	require.InDelta(t, 2.34, updatedUser.Balance, 0.00000001)
}

type unavailableRedeemCache struct{}

func (unavailableRedeemCache) GetRedeemAttemptCount(context.Context, int64) (int, error) {
	return 0, errors.New("redis unavailable")
}

func (unavailableRedeemCache) IncrementRedeemAttemptCount(context.Context, int64) error {
	return errors.New("redis unavailable")
}

func (unavailableRedeemCache) AcquireRedeemLock(context.Context, string, time.Duration) (string, error) {
	return "", errors.New("redis unavailable")
}

func (unavailableRedeemCache) ReleaseRedeemLock(context.Context, string, string) error {
	return errors.New("redis unavailable")
}

func TestRedeemLifecycleRedisFailureDoesNotChangeCommittedResult(t *testing.T) {
	repo, user, code := createRedeemLifecycleFixture(t)
	svc := service.NewRedeemService(repo, NewUserRepository(integrationEntClient, integrationDB),
		nil, unavailableRedeemCache{}, nil, integrationEntClient, nil, nil)
	result, err := svc.Redeem(context.Background(), user.ID, code.Code)
	require.NoError(t, err)
	require.Equal(t, 2.34, result.Value)
	_, err = svc.Redeem(context.Background(), user.ID, code.Code)
	require.ErrorIs(t, err, service.ErrRedeemCodeUsed)
	updatedUser, err := integrationEntClient.User.Get(context.Background(), user.ID)
	require.NoError(t, err)
	require.InDelta(t, 2.34, updatedUser.Balance, 0.00000001)
}

func TestRedeemLifecycleStaleBatchUpdateCannotEraseClaim(t *testing.T) {
	repo, user, code := createRedeemLifecycleFixture(t)
	ctx := context.Background()
	stale, err := repo.GetByID(ctx, code.ID)
	require.NoError(t, err)
	_, err = redeemLifecycleService(repo, NewUserRepository(integrationEntClient, integrationDB)).Redeem(ctx, user.ID, code.Code)
	require.NoError(t, err)
	stale.Status = service.StatusExpired
	require.ErrorIs(t, repo.Update(ctx, stale), service.ErrRedeemCodeUsed)
	stored, err := repo.GetByID(ctx, code.ID)
	require.NoError(t, err)
	require.Equal(t, service.StatusUsed, stored.Status)
	require.Equal(t, 2.34, stored.Value)
	require.Equal(t, user.ID, *stored.UsedBy)
}

func TestRedeemLifecycleBatchDeleteCountsOnlyDeletedRows(t *testing.T) {
	repo, user, code := createRedeemLifecycleFixture(t)
	ctx := context.Background()
	_, err := redeemLifecycleService(repo, NewUserRepository(integrationEntClient, integrationDB)).Redeem(ctx, user.ID, code.Code)
	require.NoError(t, err)
	unused := service.RedeemCode{
		Code: "U" + code.Code[1:], Type: service.RedeemTypeBenefit,
		Value: 5, Status: service.StatusUnused, BatchID: code.BatchID,
	}
	require.NoError(t, repo.Create(ctx, &unused))
	ids := []int64{code.ID, unused.ID, unused.ID, 9223372036854775807}
	deleted, err := repo.BatchDelete(ctx, ids)
	require.NoError(t, err)
	require.Equal(t, int64(1), deleted)
	_, err = repo.GetByID(ctx, unused.ID)
	require.ErrorIs(t, err, service.ErrRedeemCodeNotFound)
	stored, err := repo.GetByID(ctx, code.ID)
	require.NoError(t, err)
	require.True(t, stored.IsUsed())
	deleted, err = repo.BatchDelete(ctx, ids)
	require.NoError(t, err)
	require.Zero(t, deleted, "missing or already claimed rows are not deletion progress")
}

func TestRedeemLifecycleBatchDeletePreservesClaimMarkers(t *testing.T) {
	for _, marker := range []string{"used_by", "used_at"} {
		t.Run(marker, func(t *testing.T) {
			repo, user, code := createRedeemLifecycleFixture(t)
			ctx := context.Background()
			update := integrationEntClient.RedeemCode.UpdateOneID(code.ID)
			if marker == "used_by" {
				update.SetUsedBy(user.ID)
			} else {
				update.SetUsedAt(time.Now())
			}
			require.NoError(t, update.Exec(ctx))
			deleted, err := repo.BatchDelete(ctx, []int64{code.ID})
			require.NoError(t, err)
			require.Zero(t, deleted)
			_, err = repo.GetByID(ctx, code.ID)
			require.NoError(t, err)
		})
	}
}
