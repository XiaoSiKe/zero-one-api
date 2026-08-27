package repository

import (
	"context"
	"errors"
	"testing"

	"entgo.io/ent/dialect"
	entsql "entgo.io/ent/dialect/sql"
	"github.com/DATA-DOG/go-sqlmock"
	dbent "github.com/Wei-Shaw/sub2api/ent"
	"github.com/stretchr/testify/require"
)

func TestRedeemCodeRepositoryBatchDeletePropagatesDatabaseFailure(t *testing.T) {
	db, mock, err := sqlmock.New()
	require.NoError(t, err)
	t.Cleanup(func() { _ = db.Close() })
	client := dbent.NewClient(dbent.Driver(entsql.OpenDB(dialect.Postgres, db)))
	repo := NewRedeemCodeRepository(client)
	dbErr := errors.New("database unavailable")
	mock.ExpectExec(`DELETE FROM "redeem_codes"`).WillReturnError(dbErr)
	deleted, err := repo.BatchDelete(context.Background(), []int64{1, 2, 2})
	require.ErrorIs(t, err, dbErr)
	require.Zero(t, deleted)
	require.NoError(t, mock.ExpectationsWereMet())
}
