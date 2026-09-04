package service

import "context"

func (s *OpsService) GetLatencyHistogram(ctx context.Context, filter *OpsDashboardFilter) (*OpsLatencyHistogramResponse, error) {
	if err := s.prepareDashboardFilter(ctx, filter); err != nil {
		return nil, err
	}

	result, err := s.opsRepo.GetLatencyHistogram(ctx, filter)
	if err != nil && shouldFallbackOpsPreagg(filter, err) {
		rawFilter := cloneOpsFilterWithMode(filter, OpsQueryModeRaw)
		return s.opsRepo.GetLatencyHistogram(ctx, rawFilter)
	}
	return result, err
}
