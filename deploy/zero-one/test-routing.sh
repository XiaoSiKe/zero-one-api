#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
production_caddyfile="$repo_root/deploy/zero-one/Caddyfile"
preview_caddyfile="$repo_root/deploy/zero-one/Caddyfile.preview"
shared_caddyfile="$repo_root/deploy/zero-one/Caddyfile.shared"
recovered_console_index="$repo_root/deploy/zero-one/recovered-frontend/console/index.html"
recovered_console_entry='await import("/assets/redeem-cachebust-20260820-fix6/index-9xJBhx8B.js")'
recovered_console_entry_asset="$repo_root/deploy/zero-one/recovered-frontend/console/assets/index-9xJBhx8B.js"
recovered_pricing_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/useKeyedDebouncedSearch-BrW9dWBu.js"
recovered_console_redeem_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/RedeemView-B-81-jXj.js"
recovered_console_admin_redeem_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/RedeemView-Bn5PLb3-.js"
recovered_console_promo_chunk="$repo_root/deploy/zero-one/recovered-frontend/console/assets/PromoCodesView-D-9XRE_y.js"
recovered_asset_alias="$repo_root/deploy/zero-one/recovered-frontend/console/assets/redeem-cachebust-20260820-fix6"
recovered_floating_overlay="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-floating-panels-v1.js"
recovered_local_guard="$repo_root/deploy/zero-one/recovered-frontend/console/assets/zero-one-local-preview-guard-v1.js"

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
require "$preview_caddyfile" "connect-src 'self'; frame-src 'none'"
require "$preview_caddyfile" 'import landing_routes'

require "$shared_caddyfile" '(landing_routes) {'
require "$shared_caddyfile" 'method GET HEAD'
require "$shared_caddyfile" 'path /'
require "$shared_caddyfile" 'handle_path /_landing/* {'
require "$shared_caddyfile" 'import sub2api_proxy'
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
require "$recovered_console_index" 'await import("/assets/zero-one-local-preview-guard-v1.js")'
require "$recovered_console_index" 'await import("/assets/zero-one-floating-panels-v1.js")'
forbid "$recovered_pricing_chunk" 'getModelDefaultPricing('
require "$recovered_console_redeem_chunk" 'redeem'
require "$recovered_console_admin_redeem_chunk" 'box'
require "$recovered_console_entry_asset" 'i.min_value=l,i.max_value=d'
require "$recovered_console_entry_asset" 'ModelPlaza'
require "$recovered_console_promo_chunk" 'promo.create'
require "$recovered_floating_overlay" 'Runtime overlay for the approved recovered Console snapshot.'
require "$recovered_floating_overlay" "selector: '.date-picker-dropdown'"
require "$recovered_floating_overlay" "selector: '.select-dropdown[data-v-60ed8961]'"
require "$recovered_floating_overlay" 'dataset.zeroOneFloatingPanel'
require "$recovered_local_guard" "const loopbackHosts = new Set(['127.0.0.1', 'localhost', '::1'])"
require "$recovered_local_guard" 'Local preview blocked an external request:'
require "$recovered_local_guard" '本地预览已阻止外部跳转，当前页面仍连接本地 Docker。'

if [ "$(readlink "$recovered_asset_alias")" != '.' ]; then
	echo 'recovered Console cache-busting asset alias is missing' >&2
	exit 1
fi

node "$repo_root/deploy/zero-one/verify-console-asset-closure.mjs" \
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
