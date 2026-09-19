package usagestats

import (
	"math"
	"strings"
)

// AccountCostStatus explains whether an upstream account cost is trustworthy.
// Historical records are never backfilled from mutable account configuration.
type AccountCostStatus string

const (
	AccountCostConfirmed               AccountCostStatus = "confirmed"
	AccountCostUnsupportedBillingScope AccountCostStatus = "unsupported_billing_scope"
	AccountCostMissingUpstreamEvidence AccountCostStatus = "missing_upstream_evidence"
)

// ResolveAccountCost derives account cost exclusively from evidence frozen on
// the usage record. A zero upstream multiplier is valid evidence and therefore
// produces a confirmed zero cost.
func ResolveAccountCost(
	totalCost float64,
	accountStatsCost *float64,
	upstreamRateMultiplier *float64,
	billingMode *string,
) (*float64, AccountCostStatus) {
	baseCost := totalCost
	if accountStatsCost != nil {
		baseCost = *accountStatsCost
	}

	if upstreamRateMultiplier != nil && isFiniteCost(baseCost) && isFiniteCost(*upstreamRateMultiplier) {
		cost := baseCost * *upstreamRateMultiplier
		if isFiniteCost(cost) {
			return &cost, AccountCostConfirmed
		}
	}

	mode := ""
	if billingMode != nil {
		mode = strings.ToLower(strings.TrimSpace(*billingMode))
	}
	if mode != "" && mode != "token" {
		return nil, AccountCostUnsupportedBillingScope
	}
	return nil, AccountCostMissingUpstreamEvidence
}

func isFiniteCost(value float64) bool {
	return !math.IsNaN(value) && !math.IsInf(value, 0)
}
