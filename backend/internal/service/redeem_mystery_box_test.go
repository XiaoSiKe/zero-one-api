package service

import (
	"fmt"
	"math"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestRandomMysteryBoxAmountUsesInclusiveCentRange(t *testing.T) {
	for i := 0; i < 100; i++ {
		amount, err := randomMysteryBoxAmount(1.25, 1.30)
		require.NoError(t, err)
		require.GreaterOrEqual(t, amount, 1.25)
		require.LessOrEqual(t, amount, 1.30)
		require.InDelta(t, math.Round(amount*100), amount*100, 0.000001)
	}
}

func TestRandomMysteryBoxAmountAllowsFixedReward(t *testing.T) {
	amount, err := randomMysteryBoxAmount(2.34, 2.34)
	require.NoError(t, err)
	require.Equal(t, 2.34, amount)
}

func TestValidateMysteryBoxRangeRejectsInvalidAmounts(t *testing.T) {
	_, _, err := validateMysteryBoxRange(2, 1)
	require.ErrorContains(t, err, "maximum amount")

	_, _, err = validateMysteryBoxRange(1.001, 2)
	require.ErrorContains(t, err, "two decimal places")

	_, _, err = validateMysteryBoxRange(0, 2)
	require.ErrorContains(t, err, "positive finite value")
}

func TestRedeemCodeHashRedactionCannotBeRedeemedAsPlaintext(t *testing.T) {
	code := "0123456789abcdef0123456789abcdef"
	hash := RedeemCodeHash(code)
	redacted := RedactedRedeemCode(code, hash)

	require.Len(t, hash, 64)
	require.NotEqual(t, code, redacted)
	require.NotEqual(t, hash, RedeemCodeHash(redacted))
}

func TestCurrencyCentsRejectsZeroRoundingAndStorageOverflow(t *testing.T) {
	for _, value := range []float64{1e-9, 1e-8, 0.009, 1.000000001, 1.001, 1e12, math.NaN(), math.Inf(1), math.Inf(-1)} {
		t.Run(fmt.Sprintf("%g", value), func(t *testing.T) {
			_, err := currencyCents(value)
			require.Error(t, err)
		})
	}
	for _, value := range []float64{0.01, 1.23, 999999999999.99} {
		cents, err := currencyCents(value)
		require.NoError(t, err)
		require.Equal(t, value, float64(cents)/100)
	}
}
