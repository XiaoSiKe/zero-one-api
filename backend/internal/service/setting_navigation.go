package service

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"
)

const (
	imageTutorialMenuID     = "image-tutorial"
	legacyImageTutorialPath = "/image-tutorial"
	imageTutorialMenuPath   = "/custom/image-tutorial"
)

func withLegacyImageTutorialMenu(items []PublicCustomMenuItem, legacyURL string) ([]PublicCustomMenuItem, bool) {
	next := make([]PublicCustomMenuItem, 0, len(items)+1)
	for _, item := range items {
		if item.ID != imageTutorialMenuID {
			next = append(next, item)
			continue
		}
		if isImageTutorialMenuItem(item) {
			return items, true
		}
	}
	legacyURL = strings.TrimSpace(legacyURL)
	if extractOriginFromURL(legacyURL) == "" {
		return next, false
	}
	next = append(next, PublicCustomMenuItem{
		ID:         imageTutorialMenuID,
		Label:      "生图教程",
		URL:        legacyURL,
		Visibility: "all",
		Placement:  "sidebar",
		SortOrder:  len(next),
	})
	return next, true
}

func isImageTutorialMenuItem(item PublicCustomMenuItem) bool {
	return item.ID == imageTutorialMenuID &&
		item.NavType != "qr" &&
		(item.Placement == "sidebar" || item.Placement == "both") &&
		extractOriginFromURL(item.URL) != ""
}

func hasImageTutorialMenuItem(items []PublicCustomMenuItem) bool {
	for _, item := range items {
		if isImageTutorialMenuItem(item) {
			return true
		}
	}
	return false
}

func withImageTutorialSidebarOrder(order []string, enabled bool) []string {
	if !enabled {
		return order
	}
	next := make([]string, 0, len(order)+1)
	seen := make(map[string]struct{}, len(order)+1)
	for _, path := range order {
		if path == legacyImageTutorialPath {
			path = imageTutorialMenuPath
		}
		if _, ok := seen[path]; ok {
			continue
		}
		seen[path] = struct{}{}
		next = append(next, path)
	}
	if _, ok := seen[imageTutorialMenuPath]; !ok {
		next = append(next, imageTutorialMenuPath)
	}
	return next
}

func hasImageTutorialMenu(raw string) bool {
	return hasImageTutorialMenuItem(parseNavigationCustomMenuItems(raw))
}

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
		SettingKeyLegacyImageTutorialURL,
		SettingKeyProfileNavEnabled, SettingKeySubscriptionNavEnabled, SettingKeyModelPlazaNavPlacement,
		SettingKeyOpsMonitoringEnabled, SettingKeyOpsRealtimeMonitoringEnabled, SettingKeyOpsQueryModeDefault,
	})
	if err != nil {
		return nil, fmt.Errorf("get admin navigation settings: %w", err)
	}
	menuItems, hasImageTutorial := withLegacyImageTutorialMenu(
		parseNavigationCustomMenuItems(settings[SettingKeyCustomMenuItems]),
		settings[SettingKeyLegacyImageTutorialURL],
	)
	return &AdminNavigationSettings{
		CustomMenuItems:              menuItems,
		UserSidebarOrder:             withImageTutorialSidebarOrder(ParseSidebarOrder(settings[SettingKeyUserSidebarOrder]), hasImageTutorial),
		AdminSidebarOrder:            withImageTutorialSidebarOrder(ParseSidebarOrder(settings[SettingKeyAdminSidebarOrder]), hasImageTutorial),
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
