package service

import "context"

func (s *OpsService) GetThroughputTrend(ctx context.Context, filter *OpsDashboardFilter, bucketSeconds int) (*OpsThroughputTrendResponse, error) {
	if err := s.prepareDashboardFilter(ctx, filter); err != nil {
		return nil, err
	}

	result, err := s.opsRepo.GetThroughputTrend(ctx, filter, bucketSeconds)
	if err != nil && shouldFallbackOpsPreagg(filter, err) {
		rawFilter := cloneOpsFilterWithMode(filter, OpsQueryModeRaw)
		return s.opsRepo.GetThroughputTrend(ctx, rawFilter, bucketSeconds)
	}
	return result, err
}
