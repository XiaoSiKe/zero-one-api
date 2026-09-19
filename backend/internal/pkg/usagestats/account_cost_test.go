package usagestats

import (
	"math"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestResolveAccountCost(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name       string
		totalCost  float64
		statsCost  *float64
		rate       *float64
		billing    *string
		wantCost   *float64
		wantStatus AccountCostStatus
	}{
		{
			name:      "confirmed token cost uses frozen total cost and upstream rate",
			totalCost: 2, rate: float64Ptr(0.25), billing: stringPtr("token"),
			wantCost: float64Ptr(0.5), wantStatus: AccountCostConfirmed,
		},
		{
			name:      "confirmed zero multiplier remains trustworthy",
			totalCost: 2, rate: float64Ptr(0), billing: stringPtr("token"),
			wantCost: float64Ptr(0), wantStatus: AccountCostConfirmed,
		},
		{
			name:      "confirmed custom frozen base cost",
			totalCost: 2, statsCost: float64Ptr(0.3), rate: float64Ptr(0.5), billing: stringPtr("token"),
			wantCost: float64Ptr(0.15), wantStatus: AccountCostConfirmed,
		},
		{
			name:      "token request without evidence",
			totalCost: 2, billing: stringPtr("token"),
			wantStatus: AccountCostMissingUpstreamEvidence,
		},
		{
			name:       "legacy request without billing mode is missing evidence",
			totalCost:  2,
			wantStatus: AccountCostMissingUpstreamEvidence,
		},
		{
			name:      "unsupported non token billing scope",
			totalCost: 2, billing: stringPtr("image"),
			wantStatus: AccountCostUnsupportedBillingScope,
		},
		{
			name:      "invalid frozen evidence is not confirmed",
			totalCost: math.NaN(), rate: float64Ptr(1), billing: stringPtr("token"),
			wantStatus: AccountCostMissingUpstreamEvidence,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			t.Parallel()
			gotCost, gotStatus := ResolveAccountCost(tt.totalCost, tt.statsCost, tt.rate, tt.billing)
			require.Equal(t, tt.wantStatus, gotStatus)
			if tt.wantCost == nil {
				require.Nil(t, gotCost)
				return
			}
			require.NotNil(t, gotCost)
			require.InDelta(t, *tt.wantCost, *gotCost, 1e-12)
		})
	}
}

func float64Ptr(value float64) *float64 { return &value }
func stringPtr(value string) *string    { return &value }
