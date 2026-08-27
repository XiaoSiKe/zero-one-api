package service

import (
	"context"
	"encoding/json"
	"fmt"
)

// AdminNavigationSettings is the small authenticated projection used by the
// Console shell. Editing continues to use the complete settings endpoint.
type AdminNavigationSettings struct {
	CustomMenuItems              []PublicCustomMenuItem `json:"custom_menu_items"`
	UserSidebarOrder             []string               `json:"user_sidebar_order"`
	AdminSidebarOrder            []string               `json:"admin_sidebar_order"`
	ProfileNavEnabled            bool                   `json:"profile_navigation_enabled"`
	SubscriptionNavEnabled       bool                   `json:"subscription_navigation_enabled"`
	ModelPlazaNavPlacement       string                 `json:"model_plaza_placement"`
	OpsMonitoringEnabled         bool                   `json:"ops_monitoring_enabled"`
	OpsRealtimeMonitoringEnabled bool                   `json:"ops_realtime_monitoring_enabled"`
	OpsQueryModeDefault          string                 `json:"ops_query_mode_default"`
}

func (s *SettingService) GetAdminNavigationSettings(ctx context.Context) (*AdminNavigationSettings, error) {
	settings, err := s.settingRepo.GetMultiple(ctx, []string{
		SettingKeyCustomMenuItems, SettingKeyUserSidebarOrder, SettingKeyAdminSidebarOrder,
		SettingKeyProfileNavEnabled, SettingKeySubscriptionNavEnabled, SettingKeyModelPlazaNavPlacement,
		SettingKeyOpsMonitoringEnabled, SettingKeyOpsRealtimeMonitoringEnabled, SettingKeyOpsQueryModeDefault,
	})
	if err != nil {
		return nil, fmt.Errorf("get admin navigation settings: %w", err)
	}
	return &AdminNavigationSettings{
		CustomMenuItems:              parseNavigationCustomMenuItems(settings[SettingKeyCustomMenuItems]),
		UserSidebarOrder:             ParseSidebarOrder(settings[SettingKeyUserSidebarOrder]),
		AdminSidebarOrder:            ParseSidebarOrder(settings[SettingKeyAdminSidebarOrder]),
		ProfileNavEnabled:            !isFalseSettingValue(settings[SettingKeyProfileNavEnabled]),
		SubscriptionNavEnabled:       !isFalseSettingValue(settings[SettingKeySubscriptionNavEnabled]),
		ModelPlazaNavPlacement:       normalizeModelPlazaNavPlacement(settings[SettingKeyModelPlazaNavPlacement]),
		OpsMonitoringEnabled:         !isFalseSettingValue(settings[SettingKeyOpsMonitoringEnabled]),
		OpsRealtimeMonitoringEnabled: !isFalseSettingValue(settings[SettingKeyOpsRealtimeMonitoringEnabled]),
		OpsQueryModeDefault:          string(ParseOpsQueryMode(settings[SettingKeyOpsQueryModeDefault])),
	}, nil
}

// Decode into the metadata allowlist, never the admin editing DTO that can
// contain QR image bytes. Both public and admin navigation use this shape.
func parseNavigationCustomMenuItems(raw string) []PublicCustomMenuItem {
	var items []PublicCustomMenuItem
	if err := json.Unmarshal([]byte(raw), &items); err != nil || items == nil {
		return []PublicCustomMenuItem{}
	}
	return items
}
