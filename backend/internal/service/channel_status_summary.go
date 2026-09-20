package service

import (
	"context"
	"fmt"
	"math"
	"strings"
	"sync"
	"time"

	"golang.org/x/sync/singleflight"
)

// PublicChannelStatusSummary is the public landing-page status contract. It
// exposes only the monitor display name, health state, availability, and check
// timestamps; provider, model, group, upstream error, request volume, and
// credential information remain private.
type PublicChannelStatusSummary struct {
	// Mode defines the provenance of the active-probe aggregate.
	Mode           string                    `json:"mode,omitempty"`
	State          string                    `json:"state"`
	Reason         string                    `json:"reason,omitempty"`
	LatencyMs      *int                      `json:"latency_ms"`
	Availability7d *float64                  `json:"availability_7d"`
	ObservedAt     *time.Time                `json:"observed_at"`
	Items          []PublicChannelStatusItem `json:"items,omitempty"`
}

type PublicChannelStatusItem struct {
	Name           string                             `json:"name"`
	State          string                             `json:"state"`
	Availability7d *float64                           `json:"availability_7d"`
	ObservedAt     *time.Time                         `json:"observed_at"`
	Timeline       []PublicChannelStatusTimelinePoint `json:"timeline"`
}

type PublicChannelStatusTimelinePoint struct {
	Status    string    `json:"status"`
	CheckedAt time.Time `json:"checked_at"`
}

const (
	PublicChannelStatusOperational = "operational"
	PublicChannelStatusDegraded    = "degraded"
	PublicChannelStatusUnknown     = "unknown"
	PublicChannelStatusDisabled    = "disabled"

	PublicChannelStatusModeActiveProbe = "active_probe"

	publicChannelStatusNoMonitors       = "no_monitors"
	publicChannelStatusInsufficientData = "insufficient_data"
	publicChannelStatusSummaryCacheTTL  = 30 * time.Second
)

type publicChannelStatusSummaryCacheEntry struct {
	summary   PublicChannelStatusSummary
	expiresAt time.Time
}

// PublicChannelStatusSummaryCache keeps successful anonymous summaries in
// process for a short period. Entries are keyed by monitor mode so switching
// implementations never serves a summary produced by the other mode.
type PublicChannelStatusSummaryCache struct {
	mu      sync.RWMutex
	entries map[string]publicChannelStatusSummaryCacheEntry
	group   singleflight.Group
	ttl     time.Duration
	now     func() time.Time
}

func NewPublicChannelStatusSummaryCache() *PublicChannelStatusSummaryCache {
	return &PublicChannelStatusSummaryCache{
		entries: make(map[string]publicChannelStatusSummaryCacheEntry),
		ttl:     publicChannelStatusSummaryCacheTTL,
		now:     time.Now,
	}
}

func (c *PublicChannelStatusSummaryCache) Get(
	ctx context.Context,
	mode string,
	load func(context.Context) (*PublicChannelStatusSummary, error),
) (*PublicChannelStatusSummary, error) {
	if c == nil || load == nil {
		return nil, fmt.Errorf("public channel status cache is unavailable")
	}
	if summary, ok := c.get(mode); ok {
		return summary, nil
	}

	result, err, _ := c.group.Do(mode, func() (any, error) {
		if summary, ok := c.get(mode); ok {
			return summary, nil
		}
		summary, err := load(ctx)
		if err != nil {
			return nil, err
		}
		if summary == nil {
			return nil, fmt.Errorf("public channel status summary is unavailable")
		}
		c.store(mode, *summary)
		copy := *summary
		return &copy, nil
	})
	if err != nil {
		return nil, err
	}
	summary, ok := result.(*PublicChannelStatusSummary)
	if !ok || summary == nil {
		return nil, fmt.Errorf("public channel status cache returned an invalid result")
	}
	return summary, nil
}

func (c *PublicChannelStatusSummaryCache) get(mode string) (*PublicChannelStatusSummary, bool) {
	now := c.now()
	c.mu.RLock()
	entry, ok := c.entries[mode]
	c.mu.RUnlock()
	if !ok || !now.Before(entry.expiresAt) {
		return nil, false
	}
	copy := entry.summary
	return &copy, true
}

func (c *PublicChannelStatusSummaryCache) store(mode string, summary PublicChannelStatusSummary) {
	c.mu.Lock()
	c.entries[mode] = publicChannelStatusSummaryCacheEntry{
		summary:   summary,
		expiresAt: c.now().Add(c.ttl),
	}
	c.mu.Unlock()
}

func unknownPublicChannelStatus(reason string) PublicChannelStatusSummary {
	return PublicChannelStatusSummary{
		State:  PublicChannelStatusUnknown,
		Reason: reason,
	}
}

func unknownPublicChannelStatusForMode(mode, reason string) PublicChannelStatusSummary {
	summary := unknownPublicChannelStatus(reason)
	summary.Mode = mode
	return summary
}

// GetPublicChannelStatusSummary derives a real, anonymous-safe V1 aggregate.
// It uses the same enabled monitors and monitor-history records that power the
// authenticated channel-status page, but only returns the aggregate above.
func (s *ChannelMonitorService) GetPublicChannelStatusSummary(ctx context.Context) (*PublicChannelStatusSummary, error) {
	if s == nil || s.repo == nil {
		return nil, fmt.Errorf("channel monitor service is unavailable")
	}

	monitors, err := s.repo.ListEnabled(ctx)
	if err != nil {
		return nil, fmt.Errorf("list enabled monitors: %w", err)
	}
	if len(monitors) == 0 {
		summary := unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusNoMonitors)
		return &summary, nil
	}
	for _, monitor := range monitors {
		if monitor == nil {
			summary := unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusInsufficientData)
			return &summary, nil
		}
	}

	ids, primaryByID, _ := collectMonitorIndexes(monitors)
	latestByMonitor, err := s.repo.ListLatestForMonitorIDs(ctx, ids)
	if err != nil {
		return nil, fmt.Errorf("load latest monitor checks: %w", err)
	}
	availabilityByMonitor, err := s.repo.ComputeAvailabilityForMonitors(ctx, ids, monitorAvailability7Days)
	if err != nil {
		return nil, fmt.Errorf("compute monitor availability: %w", err)
	}

	// 汇总仍要求全部监控就绪，但逐渠道展示不受其他渠道缺样本影响。
	// 时间轴失败只影响历史展示，复用已有批量读取及告警路径。
	now := time.Now().UTC()
	summary := buildPublicChannelStatusSummaryV1At(monitors, primaryByID, latestByMonitor, availabilityByMonitor, now)
	summary.Items = buildPublicChannelStatusItemsV1(
		monitors, primaryByID, latestByMonitor, availabilityByMonitor,
		s.batchTimeline(ctx, ids, primaryByID), now,
	)
	return &summary, nil
}

func buildPublicChannelStatusItemsV1(
	monitors []*ChannelMonitor,
	primaryByID map[int64]string,
	latestByMonitor map[int64][]*ChannelMonitorLatest,
	availabilityByMonitor map[int64][]*ChannelMonitorAvailability,
	historyByMonitor map[int64][]*ChannelMonitorHistoryEntry,
	now time.Time,
) []PublicChannelStatusItem {
	items := make([]PublicChannelStatusItem, 0, len(monitors))
	for _, monitor := range monitors {
		if monitor == nil || strings.TrimSpace(monitor.Name) == "" {
			continue
		}
		primaryModel := primaryByID[monitor.ID]
		latest := pickLatest(latestByMonitor[monitor.ID], primaryModel)
		availability := indexAvailabilityByModel(availabilityByMonitor[monitor.ID])[primaryModel]
		item := PublicChannelStatusItem{
			Name:     strings.TrimSpace(monitor.Name),
			State:    PublicChannelStatusUnknown,
			Timeline: publicChannelStatusTimeline(historyByMonitor[monitor.ID]),
		}
		if availability != nil && availability.TotalChecks > 0 {
			operationalChecks := max(0, min(availability.OperationalChecks, availability.TotalChecks))
			availability7d := float64(operationalChecks) / float64(availability.TotalChecks) * 100
			item.Availability7d = &availability7d
		}
		if latest != nil && !latest.CheckedAt.IsZero() {
			observedAt := latest.CheckedAt.UTC()
			item.ObservedAt = &observedAt
			// 保留真实的历史可用率与采样时间，过期样本不能继续显示为运行正常。
			if item.Availability7d != nil && !isPublicChannelStatusSampleStale(monitor, latest.CheckedAt, now) {
				item.State = publicChannelStatusItemState(latest.Status)
			}
		}
		items = append(items, item)
	}
	return items
}

func publicChannelStatusItemState(status string) string {
	if status == MonitorStatusOperational {
		return PublicChannelStatusOperational
	}
	if status == "" {
		return PublicChannelStatusUnknown
	}
	return PublicChannelStatusDegraded
}

func publicChannelStatusTimeline(history []*ChannelMonitorHistoryEntry) []PublicChannelStatusTimelinePoint {
	timeline := make([]PublicChannelStatusTimelinePoint, 0, len(history))
	for _, entry := range history {
		if entry == nil || entry.CheckedAt.IsZero() {
			continue
		}
		timeline = append(timeline, PublicChannelStatusTimelinePoint{
			Status:    publicChannelStatusTimelineState(entry.Status),
			CheckedAt: entry.CheckedAt.UTC(),
		})
	}
	return timeline
}

func publicChannelStatusTimelineState(status string) string {
	switch status {
	case MonitorStatusOperational, MonitorStatusDegraded, "failed", "error":
		return status
	default:
		return PublicChannelStatusUnknown
	}
}

// buildPublicChannelStatusSummaryV1At is kept pure so status semantics can be
// tested without a database. Every enabled monitor must have a primary-model
// sample before the public page is allowed to report a health state.
func buildPublicChannelStatusSummaryV1At(
	monitors []*ChannelMonitor,
	primaryByID map[int64]string,
	latestByMonitor map[int64][]*ChannelMonitorLatest,
	availabilityByMonitor map[int64][]*ChannelMonitorAvailability,
	now time.Time,
) PublicChannelStatusSummary {
	if len(monitors) == 0 {
		return unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusNoMonitors)
	}

	var (
		isDegraded        bool
		latencyTotal      int64
		latencyCount      int64
		operationalChecks int64
		totalChecks       int64
		oldestObservedAt  time.Time
	)

	for _, monitor := range monitors {
		if monitor == nil {
			return unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusInsufficientData)
		}

		primaryModel := primaryByID[monitor.ID]
		latest := pickLatest(latestByMonitor[monitor.ID], primaryModel)
		if latest == nil || latest.CheckedAt.IsZero() || latest.Status == "" {
			return unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusInsufficientData)
		}
		if isPublicChannelStatusSampleStale(monitor, latest.CheckedAt, now) {
			return unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusInsufficientData)
		}
		if oldestObservedAt.IsZero() || latest.CheckedAt.Before(oldestObservedAt) {
			oldestObservedAt = latest.CheckedAt.UTC()
		}
		if latest.Status != MonitorStatusOperational {
			isDegraded = true
		}
		if latest.LatencyMs != nil && *latest.LatencyMs >= 0 {
			latencyTotal += int64(*latest.LatencyMs)
			latencyCount++
		}

		availability := indexAvailabilityByModel(availabilityByMonitor[monitor.ID])[primaryModel]
		if availability == nil || availability.TotalChecks <= 0 {
			return unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusInsufficientData)
		}
		operational := availability.OperationalChecks
		if operational < 0 {
			operational = 0
		}
		if operational > availability.TotalChecks {
			operational = availability.TotalChecks
		}
		operationalChecks += int64(operational)
		totalChecks += int64(availability.TotalChecks)
	}

	if totalChecks <= 0 || oldestObservedAt.IsZero() {
		return unknownPublicChannelStatusForMode(PublicChannelStatusModeActiveProbe, publicChannelStatusInsufficientData)
	}

	availability := float64(operationalChecks) / float64(totalChecks) * 100
	summary := PublicChannelStatusSummary{
		Mode:           PublicChannelStatusModeActiveProbe,
		State:          PublicChannelStatusOperational,
		Availability7d: &availability,
		ObservedAt:     &oldestObservedAt,
	}
	if isDegraded {
		summary.State = PublicChannelStatusDegraded
	}
	if latencyCount > 0 {
		latency := int(math.Round(float64(latencyTotal) / float64(latencyCount)))
		summary.LatencyMs = &latency
	}
	return summary
}

// isPublicChannelStatusSampleStale marks a probe as unavailable after two
// worst-case scheduled intervals plus the complete check timeout. The page may
// then show "collecting data" rather than presenting a dormant probe as live.
func isPublicChannelStatusSampleStale(monitor *ChannelMonitor, checkedAt, now time.Time) bool {
	if monitor == nil || now.IsZero() || !checkedAt.Before(now) {
		return false
	}

	intervalSeconds := monitor.IntervalSeconds
	if intervalSeconds < monitorMinIntervalSeconds {
		intervalSeconds = monitorMinIntervalSeconds
	}
	jitterSeconds := monitor.JitterSeconds
	if jitterSeconds < 0 {
		jitterSeconds = 0
	}
	if maxJitter := intervalSeconds - monitorMinIntervalSeconds; jitterSeconds > maxJitter {
		jitterSeconds = maxJitter
	}
	maxScheduledDelay := time.Duration(intervalSeconds+jitterSeconds) * time.Second
	staleAfter := 2*maxScheduledDelay + monitorRequestTimeout + monitorPingTimeout + monitorRunOneBuffer
	return now.Sub(checkedAt) > staleAfter
}
