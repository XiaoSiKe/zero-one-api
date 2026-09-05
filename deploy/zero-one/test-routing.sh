#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
production_caddyfile="$repo_root/deploy/zero-one/Caddyfile"
preview_caddyfile="$repo_root/deploy/zero-one/Caddyfile.preview"
shared_caddyfile="$repo_root/deploy/zero-one/Caddyfile.shared"
recovered_console_index="$repo_root/deploy/zero-one/recovered-frontend/console/index.html"
recovered_console_entry='await import("/assets/cn-provider-shell-v6/index-9xJBhx8B.js")'
recovered_console_entry_asset="$repo_root/deploy/zero-one/recovered-frontend/console/assets/cn-provider-shell-v6/index-9xJBhx8B.js"
recovered_pricing_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/useKeyedDebouncedSearch-BrW9dWBu.js"
recovered_console_redeem_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/RedeemView-B-81-jXj.js"
recovered_console_admin_redeem_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/RedeemView-Bn5PLb3-.js"
recovered_console_promo_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/PromoCodesView-D-9XRE_y.js"
recovered_asset_alias="$repo_root/deploy/zero-one/recovered-frontend/console/assets/github-migration-20260828"
recovered_payment_result="$repo_root/deploy/zero-one/recovered-frontend/console/assets/PaymentResultView-v182-balance-refresh.js"
recovered_floating_overlay="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-floating-panels-v1.js"
recovered_navigation_reconciliation="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-navigation-reconciliation-v1.js"
recovered_local_guard="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-local-preview-guard-v2.js"
recovered_custom_page_security="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-custom-page-security-v1.js"
recovered_console_parity="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-console-parity-v1.js"
recovered_console_parity_css="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-console-parity-v1.css"
recovered_header_navigation="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-community-qr-v1.js"
recovered_header_navigation_css="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-community-qr-v1.css"
recovered_header_custom_menu="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-header-custom-menu-v1.js"
recovered_header_custom_menu_css="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-header-custom-menu-v1.css"
recovered_settings_unified_save="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-settings-unified-save-v1.js"
recovered_redeem_actions="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-redeem-actions-v1.js"
recovered_redeem_actions_css="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-redeem-actions-v1.css"
recovered_ccswitch_launch="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-ccswitch-launch-v1.js"
recovered_affiliate_admin="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-affiliate-admin-v1.js"
recovered_affiliate_admin_css="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-affiliate-admin-v1.css"
recovered_login_recovery="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-login-recovery-v2.js"
recovered_online_image="$repo_root/deploy/zero-one/recovered-frontend/console/assets/online-image-v13/online-image.js"
recovered_online_image_css="$repo_root/deploy/zero-one/recovered-frontend/console/assets/online-image-v13/online-image.css"

require() {
	file=$1
	contract=$2
	if ! grep -Fq "$contract" "$file"; then
		echo "missing Caddy routing contract in ${file#"$repo_root"/}: $contract" >&2
		exit 1
	fi
}

forbid() {
	file=$1
	contract=$2
	if grep -Fq "$contract" "$file"; then
		echo "forbidden recovered Console behavior in ${file#"$repo_root"/}: $contract" >&2
		exit 1
	fi
}

require "$production_caddyfile" 'import Caddyfile.shared'
require "$production_caddyfile" 'api.01yapi.com {'
require "$production_caddyfile" 'import landing_routes'
require "$production_caddyfile" 'app.01yapi.com {'
require "$production_caddyfile" 'header Cache-Control "no-store"'
require "$production_caddyfile" 'redir https://api.01yapi.com{uri} 308'
forbid "$production_caddyfile" 'api.01yapi.cc'
require "$production_caddyfile" '01yapi.com, www.01yapi.com {'
require "$production_caddyfile" 'redir https://api.01yapi.com{uri} 308'

require "$preview_caddyfile" 'auto_https off'
require "$preview_caddyfile" 'import Caddyfile.shared'
require "$preview_caddyfile" ':80 {'
require "$preview_caddyfile" '@preview_console_pages {'
require "$preview_caddyfile" '/keys /keys/ /images /images/ /batch-image /batch-image/'
require "$preview_caddyfile" '/payment/* /custom/* /admin /admin/'
require "$preview_caddyfile" "connect-src 'self'; frame-src http: https:"
require "$preview_caddyfile" 'import landing_routes'

require "$shared_caddyfile" '(landing_routes) {'
require "$shared_caddyfile" 'method GET HEAD'
require "$shared_caddyfile" 'path /'
require "$shared_caddyfile" 'handle_path /_landing/* {'
require "$shared_caddyfile" '@console_exact_trailing_slash {'
require "$shared_caddyfile" 'uri strip_suffix /'
require "$shared_caddyfile" 'redir {uri} 308'
require "$shared_caddyfile" 'import sub2api_proxy'
require "$shared_caddyfile" '/keys /keys/ /images /images/ /batch-image /batch-image/'
require "$shared_caddyfile" 'reverse_proxy sub2api:8080'
require "$shared_caddyfile" 'header_up -CF-Connecting-IP'
require "$shared_caddyfile" 'header_up -True-Client-IP'
require "$shared_caddyfile" 'header_up -X-Client-IP'
require "$shared_caddyfile" 'header_up -X-Cluster-Client-IP'
require "$shared_caddyfile" 'header_up X-Real-IP {remote_host}'
require "$shared_caddyfile" 'header_up X-Forwarded-For {remote_host}'
require "$shared_caddyfile" 'https://checkout-demo.airwallex.com https:; frame-ancestors'

require "$recovered_console_index" 'fetch("/api/v1/settings/public"'
require "$recovered_console_index" "$recovered_console_entry"
require "$recovered_console_index" 'await import("/assets/zero-one-local-preview-guard-v2.js")'
require "$recovered_console_index" 'await import("/assets/zero-one-custom-page-security-v1.js")'
require "$recovered_console_index" 'await import("/assets/zero-one-navigation-reconciliation-v1.js?v=3")'
require "$recovered_console_index" 'await import("/assets/zero-one-console-parity-v1.js?v=8")'
require "$recovered_console_index" 'href="/assets/zero-one-console-parity-v1.css?v=5"'
require "$recovered_console_index" 'await import("/assets/zero-one-community-qr-v1.js?v=14")'
require "$recovered_console_index" 'href="/assets/zero-one-community-qr-v1.css?v=6"'
require "$recovered_console_index" 'await import("/assets/zero-one-header-custom-menu-v1.js?v=25")'
forbid "$recovered_console_index" '/assets/zero-one-header-custom-menu-v1.js?v=24'
require "$recovered_header_custom_menu" "style.setProperty('display', 'none', 'important')"
require "$recovered_console_index" 'window.__ZERO_ONE_PUBLIC_SETTINGS__ = settings'
require "$recovered_console_index" 'applyPublicSettings(payload?.data)'
require "$recovered_console_index" 'registrationSettings.then(applyPublicSettings)'
forbid "$recovered_console_index" 'new MutationObserver'
require "$recovered_console_index" 'href="/assets/zero-one-header-custom-menu-v1.css?v=7"'
require "$recovered_console_index" 'await import("/assets/zero-one-redeem-actions-v1.js?v=1")'
require "$recovered_console_index" 'href="/assets/zero-one-redeem-actions-v1.css?v=1"'
require "$recovered_console_index" 'await import("/assets/zero-one-ccswitch-launch-v1.js?v=2")'
require "$recovered_console_index" 'await import("/assets/zero-one-affiliate-admin-v1.js?v=6")'
require "$recovered_console_index" 'await import("/assets/online-image-v13/online-image.js")'
require "$recovered_console_index" 'await import("/assets/zero-one-settings-unified-save-v1.js")'
require "$recovered_console_index" 'href="/assets/zero-one-affiliate-admin-v1.css?v=3"'
require "$recovered_console_index" 'await import("/assets/zero-one-floating-panels-v1.js?v=3")'
require "$recovered_console_index" 'await import("/assets/zero-one-login-recovery-v2.js?v=4")'
forbid "$recovered_pricing_chunk" 'getModelDefaultPricing('
require "$recovered_console_redeem_chunk" 'redeem'
require "$recovered_console_admin_redeem_chunk" 'box'
require "$recovered_console_redeem_chunk" 'refreshRedeemState'
require "$recovered_console_redeem_chunk" 'redeemError'
require "$recovered_console_admin_redeem_chunk" 'validateRedeemGeneration'
require "$recovered_console_admin_redeem_chunk" 'deleteAllUnusedRedeemCodes'
require "$recovered_console_entry_asset" 'i.min_value=l,i.max_value=d'
require "$recovered_console_entry_asset" 'ModelPlaza'
require "$recovered_console_entry_asset" 'assets/PaymentResultView-v182-balance-refresh.js'
require "$recovered_payment_result" 'refreshUserBalanceForSuccessfulOrder'
require "$recovered_payment_result" 'userBalanceRefreshStarted'
require "$recovered_console_promo_chunk" 'promo.create'
require "$recovered_floating_overlay" 'Runtime overlay for the approved recovered Console snapshot.'
require "$recovered_floating_overlay" "selector: '.date-picker-dropdown'"
require "$recovered_floating_overlay" "selector: '.select-dropdown[data-v-60ed8961]'"
require "$recovered_floating_overlay" 'dataset.zeroOneFloatingPanel'
require "$recovered_navigation_reconciliation" 'window.__ZERO_ONE_NAVIGATION_RECONCILIATION__ = { register, request }'
require "$recovered_navigation_reconciliation" "appObserver.observe(app, { childList: true, subtree: true })"
require "$recovered_navigation_reconciliation" "for (const method of ['pushState', 'replaceState'])"
require "$recovered_navigation_reconciliation" "data-zero-one-sidebar-continuity"
require "$recovered_local_guard" "const loopbackHosts = new Set(['127.0.0.1', 'localhost', '::1'])"
require "$recovered_local_guard" 'Local preview blocked an external request:'
require "$recovered_local_guard" '本地预览已阻止外部跳转，当前页面仍连接本地 Docker。'
require "$recovered_local_guard" 'External iframe pages are an intentional Custom Page feature'
forbid "$recovered_local_guard" 'node instanceof HTMLIFrameElement'
require "$recovered_custom_page_security" "const SENSITIVE_QUERY_KEYS = ['user_id', 'token']"
require "$recovered_custom_page_security" "window.location.pathname.startsWith('/custom/')"
require "$recovered_custom_page_security" "guardURLProperty(HTMLIFrameElement.prototype, 'src')"
require "$recovered_custom_page_security" "guardURLProperty(HTMLAnchorElement.prototype, 'href')"
require "$recovered_console_parity" "const USER_DASHBOARD_PATH = '/dashboard'"
require "$recovered_console_parity" "const ADMIN_DASHBOARD_PATH = '/admin/dashboard'"
require "$recovered_console_parity" "window.location.pathname === '/login'"
require "$recovered_console_parity" "surface.dataset.zeroOneCardMotion = 'true'"
require "$recovered_console_parity" "surface.classList.add('console-card-motion-surface', 'console-dashboard-surface')"
require "$recovered_console_parity_css" '.console-card-motion-surface'
require "$recovered_console_parity_css" '.console-skin-table'
require "$recovered_console_parity_css" ':has(.card, iframe, table, .fixed, .sticky)'
forbid "$recovered_console_parity_css" '.console-dashboard-surface .card:hover'
require "$recovered_header_navigation" "'data-testid': 'header-navigation-settings'"
require "$recovered_header_navigation" "'data-testid': 'header-navigation-add'"
forbid "$recovered_header_navigation" "'data-testid': 'header-navigation-save'"
require "$recovered_header_navigation" 'mergeAdminMenuItemsForSave'
require "$recovered_header_navigation" 'payload.community_qr_enabled = false'
require "$recovered_header_navigation" "placement: 'header'"
require "$recovered_header_navigation" 'augmentSettingsPayload(payload)'
forbid "$recovered_header_navigation" '/api/v1/settings/community-qr'
forbid "$recovered_header_navigation" "'data-testid': 'community-qr-button'"
require "$recovered_header_navigation_css" '.zero-one-header-navigation-settings'
require "$recovered_header_navigation_css" '.zero-one-header-navigation-entry'
require "$recovered_header_navigation_css" '.zero-one-header-navigation-fields'
require "$recovered_header_navigation" 'profile_navigation_enabled'
require "$recovered_header_navigation" 'subscription_navigation_enabled'
require "$recovered_header_navigation" 'model_plaza_placement'
require "$recovered_settings_unified_save" "'settings-unified-save'"
require "$recovered_settings_unified_save" 'button[type="submit"]'
require "$recovered_settings_unified_save" 'button[data-zero-one-standalone-save="true"]'
require "$recovered_settings_unified_save" "form.addEventListener('click', markManagedCardDirty"
require "$recovered_settings_unified_save" "form.addEventListener('keydown'"
require "$recovered_settings_unified_save" 'form.requestSubmit(bottomSave)'
require "$recovered_settings_unified_save" 'activeManagedRequestBatch'
require "$recovered_settings_unified_save" 'installManagedFetchTracking()'
require "$recovered_settings_unified_save" 'waitForManagedRequestRegistration(batch, expectedEndpoints)'
require "$recovered_settings_unified_save" 'waitForManagedResults(batch.requests)'
require "$recovered_settings_unified_save" "this.onloadend = null"
require "$recovered_settings_unified_save" 'nativeLoadEnd.call(this, event)'
require "$recovered_settings_unified_save" "nativeError.call(this, new ProgressEvent('error'))"
require "$recovered_header_navigation" 'if (!adminSettingsReady || !identity || identity !== adminSettingsIdentity) return'
require "$recovered_header_navigation" 'applySavedSettings(settings)'
require "$recovered_header_navigation" 'adminSettingsController?.abort()'
require "$recovered_header_custom_menu" 'applySavedSettings(savedSettings)'
require "$recovered_header_navigation" 'header-navigation-qr-upload-'
require "$recovered_header_navigation" 'window.__ZERO_ONE_NAVIGATION_ICON_PRESETS__'
require "$recovered_header_custom_menu" "item.placement === 'header'"
require "$recovered_header_custom_menu" "itemCard.hidden = normalizePlacement(adminMenuItems[index]?.placement) === 'header'"
require "$recovered_header_custom_menu" 'data-zero-one-header-menu-placement'
require "$recovered_header_custom_menu" "nav a.sidebar-link[href=\"' + dashboardPath + '\"]"
require "$recovered_header_custom_menu" 'publicNavigationSettings'
require "$recovered_header_custom_menu" 'normalizeMenuItemsForSave(items)'
require "$recovered_header_custom_menu" 'acceptSavedNavigation(savedSettings)'
require "$recovered_header_custom_menu" 'navigationClientReady'
require "$recovered_console_entry_asset" 'n.get("/admin/settings",{params:{scope:"navigation"},signal})'
require "$recovered_console_entry_asset" 'window.__ZERO_ONE_ADMIN_NAVIGATION__'
forbid "$recovered_console_entry_asset" 'Promise.all([gt.settings.getSettings(),gt.payment.getConfig()])'
forbid "$recovered_console_index" '"site_logo":"data:'
require "$recovered_header_custom_menu" 'reconcileCustomPageFrame(user)'
require "$recovered_header_custom_menu" 'reconcileSidebarOrder'
require "$recovered_header_custom_menu" 'sidebarRowNodes(row)'
require "$recovered_header_custom_menu" 'final: true'
forbid "$recovered_header_custom_menu" 'previewSidebarSectionOrder'
require "$recovered_header_custom_menu" 'prewarmQRAsset(item'
require "$recovered_header_custom_menu" 'await Promise.race([decoder.decode(), deadline])'
require "$recovered_header_custom_menu" 'state.loadSeen = true'
require "$recovered_header_custom_menu" "retry.dataset.testid = 'custom-page-retry'"
require "$recovered_header_navigation" 'defaultSidebarOrders'
forbid "$recovered_header_custom_menu" 'previousLink.after(link)'
require "$recovered_header_custom_menu" "link.classList.remove('router-link-active', 'router-link-exact-active', 'sidebar-link-active')"
require "$recovered_header_custom_menu" 'zero-one-sidebar-navigation-icon'
require "$recovered_header_custom_menu" 'window.__ZERO_ONE_BIND_INTERNAL_LINK__ = bind'
require "$recovered_header_custom_menu" 'description.textContent !== CUSTOM_MENU_DESCRIPTION'
require "$recovered_header_custom_menu" 'XMLHttpRequest.prototype.send'
require "$recovered_header_custom_menu_css" '.zero-one-header-custom-menu-link'
require "$recovered_header_custom_menu_css" '.zero-one-header-qr-overlay'
require "$recovered_redeem_actions" "const REDEEM_PATH = '/redeem'"
require "$recovered_redeem_actions" "const ONLINE_RECHARGE_LABEL = '在线充值'"
require "$recovered_redeem_actions" "window.__ZERO_ONE_BIND_INTERNAL_LINK__?.(recharge)"
require "$recovered_redeem_actions" "register('redeem-actions', enhanceRedeemActions)"
require "$recovered_redeem_actions_css" '.zero-one-redeem-actions'
require "$recovered_ccswitch_launch" "href.startsWith('ccswitch://')"
require "$recovered_ccswitch_launch" 'delay === LEGACY_PROBE_DELAY_MS'
require "$recovered_ccswitch_launch" "includes('keys.ccSwitchNotInstalled')"
require "$recovered_affiliate_admin" "'data-testid': 'admin-affiliate-nav'"
require "$recovered_affiliate_admin" "'data-testid': 'affiliate-bind-open'"
require "$recovered_affiliate_admin" "tabLink('邀请记录'"
require "$recovered_affiliate_admin" "'专属代理'"
require "$recovered_affiliate_admin" 'affiliate_view:'
forbid "$recovered_affiliate_admin" "tabLink('返利记录'"
require "$recovered_affiliate_admin" '/admin/users?'
require "$recovered_affiliate_admin" '/overview'
require "$recovered_affiliate_admin" "method: 'POST'"
require "$recovered_affiliate_admin" "body: { inviter_id: inviterId, invitee_id: inviteeId }"
require "$recovered_affiliate_admin" "'data-testid': 'affiliate-bind-inviter-fixed'"
require "$recovered_affiliate_admin" "'/user/totp/step-up'"
require "$recovered_affiliate_admin" "for (const key of AFFILIATE_SETTING_KEYS) delete parsed[key]"
forbid "$recovered_affiliate_admin" "userPicker('邀请人'"
require "$recovered_affiliate_admin_css" '.zero-one-affiliate-workspace'
require "$recovered_affiliate_admin_css" '.zero-one-affiliate-legacy-hidden'
require "$recovered_affiliate_admin_css" 'display: none !important;'
require "$recovered_affiliate_admin_css" '.zero-one-affiliate-dialog-overlay'
require "$recovered_login_recovery" "const RECOVERY_PATH = '/forgot-password'"
require "$recovered_login_recovery" 'a[href="/register"].btn.btn-secondary'
require "$recovered_login_recovery" "const className = registrationLink?.className || 'btn btn-secondary w-full'"
require "$recovered_login_recovery" 'placement.after(recoveryLink)'
require "$recovered_login_recovery" 'recoveryLink?.remove()'
require "$recovered_login_recovery" "const LOGIN_BUTTON_CLASS = 'btn btn-primary btn-specular w-full'"
require "$recovered_login_recovery" "window.location.pathname === '/forgot-password'"
require "$recovered_login_recovery" 'sendResetLink.className = LOGIN_BUTTON_CLASS'
require "$recovered_login_recovery" 'backWrapper.replaceChildren(backToLogin)'
require "$recovered_console_entry_asset" 'zero-one-online-image-route-placeholder-v1.js'
require "$recovered_online_image" './onlineImageLeaf-'
require "$recovered_online_image" '__ZERO_ONE_ONLINE_IMAGE_ACCESS__'
require "$recovered_online_image_css" 'online-image-control'

if [ "$(readlink "$recovered_asset_alias")" != '.' ]; then
	echo 'recovered Console cache-busting asset alias is missing' >&2
	exit 1
fi

node "$repo_root/deploy/zero-one/verify-console-asset-closure.mjs" \
	"$repo_root/deploy/zero-one/recovered-frontend/console"
node "$repo_root/deploy/zero-one/verify-cn-provider-console.mjs" \
	"$repo_root/deploy/zero-one/recovered-frontend/console"
node "$repo_root/deploy/zero-one/verify-online-image-console.mjs" \
	"$repo_root/deploy/zero-one/recovered-frontend/console"

for shell_caddyfile in "$production_caddyfile" "$preview_caddyfile"; do
	if grep -Fq 'reverse_proxy sub2api:8080' "$shell_caddyfile" ||
		grep -Fq 'handle_path /_landing/* {' "$shell_caddyfile"; then
		echo "Caddy shell duplicates shared routing: ${shell_caddyfile#"$repo_root"/}" >&2
		exit 1
	fi
done

for caddyfile in "$production_caddyfile" "$preview_caddyfile" "$shared_caddyfile"; do
	if grep -Eq '^[[:space:]]*flush_interval[[:space:]]' "$caddyfile"; then
		echo "Caddy must leave flush_interval unset: ${caddyfile#"$repo_root"/}" >&2
		exit 1
	fi
done

echo 'zero-one production and preview Caddy routing contract OK'
