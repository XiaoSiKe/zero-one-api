package usagestats

// AddCosts preserves missing declaration evidence while summing invoice costs.
func AddCosts(a, b *float64) *float64 {
	if a == nil || b == nil {
		return nil
	}
	value := *a + *b
	return &value
}

func DivideCost(value *float64, divisor float64) *float64 {
	if value == nil {
		return nil
	}
	result := *value / divisor
	return &result
}
