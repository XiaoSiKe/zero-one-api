#!/bin/sh
set -eu

edge_image=${1:?usage: test-live-routing.sh EDGE_IMAGE [production|preview]}
routing_mode=${2:-production}
repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
test_dir=$(mktemp -d)
test_suffix="${GITHUB_RUN_ID:-local}-$routing_mode-$$"
network_name="zero-one-routing-$test_suffix"
upstream_name="zero-one-upstream-$test_suffix"
edge_name="zero-one-edge-$test_suffix"

cleanup() {
	docker rm -f "$edge_name" "$upstream_name" >/dev/null 2>&1 || true
	docker network rm "$network_name" >/dev/null 2>&1 || true
	rm -rf "$test_dir"
}
trap cleanup EXIT INT TERM

fail() {
	echo "live Caddy routing contract failed: $1" >&2
	docker logs "$edge_name" >&2 2>/dev/null || true
	docker logs "$upstream_name" >&2 2>/dev/null || true
	exit 1
}

assert_text() {
	value=$1
	expected=$2
	label=$3
	printf '%s' "$value" | grep -Fq "$expected" || fail "$label"
}

case "$routing_mode" in
	production)
		sed \
			-e 's/^api\.01yapi\.com {/http:\/\/api.01yapi.test:8080 {/' \
			-e 's/^app\.01yapi\.com {/http:\/\/app.01yapi.test:8080 {/' \
			-e 's/^01yapi\.com, www\.01yapi\.com {/http:\/\/01yapi.test:8080, http:\/\/www.01yapi.test:8080 {/' \
			"$repo_root/deploy/zero-one/Caddyfile" >"$test_dir/Caddyfile"
		listen_port=8080
		request_host=api.01yapi.test
		;;
	preview)
		cp "$repo_root/deploy/zero-one/Caddyfile.preview" "$test_dir/Caddyfile"
		listen_port=80
		request_host=preview.01yapi.test
		;;
	*)
		echo "unknown routing mode: $routing_mode" >&2
		exit 2
		;;
esac
cp "$repo_root/deploy/zero-one/Caddyfile.shared" "$test_dir/Caddyfile.shared"

docker network create "$network_name" >/dev/null
docker run -d \
	--name "$upstream_name" \
	--network "$network_name" \
	--network-alias sub2api \
	-v "$repo_root/deploy/zero-one/test-upstream.mjs:/srv/test-upstream.mjs:ro" \
	node:24-alpine node /srv/test-upstream.mjs >/dev/null

docker run -d \
	--name "$edge_name" \
	--network "$network_name" \
	-p "127.0.0.1::$listen_port" \
	-e ACME_EMAIL=ci@example.invalid \
	-v "$test_dir:/etc/caddy:ro" \
	"$edge_image" >/dev/null

edge_port=$(docker inspect --format "{{(index (index .NetworkSettings.Ports \"$listen_port/tcp\") 0).HostPort}}" "$edge_name")
edge_url="http://127.0.0.1:$edge_port"

attempt=0
until curl -fsS -H "Host: $request_host" "$edge_url/" >"$test_dir/landing.html" &&
	curl -fsS -H "Host: $request_host" "$edge_url/health-probe" >/dev/null; do
	attempt=$((attempt + 1))
	if [ "$attempt" -ge 30 ]; then
		fail 'edge did not become ready'
	fi
	sleep 1
done

docker cp "$edge_name:/srv/console" "$test_dir"
docker run --rm \
	-v "$repo_root/deploy/zero-one/verify-console-asset-closure.mjs:/verify-console-asset-closure.mjs:ro" \
	-v "$test_dir/console:/srv/console:ro" \
	node:24-alpine node /verify-console-asset-closure.mjs /srv/console || fail 'Console asset closure is incomplete'
docker run --rm \
	-v "$repo_root/deploy/zero-one/build-cn-provider-shell.mjs:/build-cn-provider-shell.mjs:ro" \
	-v "$repo_root/deploy/zero-one/verify-cn-provider-console.mjs:/verify-cn-provider-console.mjs:ro" \
	-v "$test_dir/console:/srv/console:ro" \
	node:24-alpine node /verify-cn-provider-console.mjs /srv/console || fail 'CN Provider Console contract is incomplete'
docker run --rm \
	-v "$repo_root/deploy/zero-one/verify-online-image-console.mjs:/verify-online-image-console.mjs:ro" \
	-v "$test_dir/console:/srv/console:ro" \
	node:24-alpine node /verify-online-image-console.mjs /srv/console || fail 'Online image Console contract is incomplete'

landing=$(cat "$test_dir/landing.html")
assert_text "$landing" '<title>零一 API</title>' 'primary root did not return the React page'

head_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/")
assert_text "$head_headers" 'Cache-Control: no-cache, no-store, must-revalidate' 'primary HEAD root cache policy changed'

asset_path=$(printf '%s' "$landing" | grep -o '/_landing/assets/[^" ]*\.js' | head -n 1)
[ -n "$asset_path" ] || fail 'landing JavaScript asset was not discoverable'
asset_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url$asset_path")
assert_text "$asset_headers" 'Cache-Control: public, max-age=31536000, immutable' 'hashed landing asset is not immutable'

console=$(curl -fsS -H "Host: $request_host" "$edge_url/login")
assert_text "$console" '<title>零一 API - AI API Gateway</title>' 'primary login did not return the recovered console'
assert_text "$console" 'fetch("/api/v1/settings/public"' 'recovered console did not bootstrap live public settings'
assert_text "$console" 'await import("/assets/cn-provider-admin-v1/cn-provider-admin.js")' 'recovered console CN Provider route adapter is missing'
assert_text "$console" 'await import("/assets/cn-provider-shell-v3/index-9xJBhx8B.js")' 'recovered console approved shell seam is missing'
assert_text "$console" 'await import("/assets/zero-one-local-preview-guard-v2.js")' 'recovered console local preview guard is missing'
assert_text "$console" 'await import("/assets/zero-one-custom-page-security-v1.js")' 'recovered console custom page security guard is missing'
assert_text "$console" 'await import("/assets/zero-one-navigation-reconciliation-v1.js?v=3")' 'recovered Console navigation reconciliation is missing'
assert_text "$console" 'await import("/assets/zero-one-console-parity-v1.js?v=6")' 'recovered console parity overlay is missing'
assert_text "$console" 'await import("/assets/zero-one-community-qr-v1.js?v=14")' 'recovered console header-navigation settings adapter is missing'
assert_text "$console" 'await import("/assets/zero-one-header-custom-menu-v1.js?v=24")' 'recovered console header custom-menu adapter is missing'
assert_text "$console" 'await import("/assets/zero-one-redeem-actions-v1.js?v=1")' 'recovered console redeem actions adapter is missing'
assert_text "$console" 'await import("/assets/zero-one-affiliate-admin-v1.js?v=6")' 'recovered console affiliate administration adapter is missing'
assert_text "$console" 'await import("/assets/online-image-v10/online-image.js")' 'recovered console online image adapter is missing'
assert_text "$console" 'await import("/assets/zero-one-settings-unified-save-v1.js")' 'recovered console unified settings save adapter is missing'
assert_text "$console" 'await import("/assets/zero-one-floating-panels-v1.js?v=2")' 'recovered console floating overlay is missing'

for console_path in setup home login register email-verify forgot-password reset-password key-usage model-plaza dashboard keys images batch-image usage redeem affiliate available-channels profile subscriptions purchase orders admin monitor; do
	console_variant=$(curl -fsS -H "Host: $request_host" "$edge_url/$console_path")
	assert_text "$console_variant" 'await import("/assets/cn-provider-shell-v3/index-9xJBhx8B.js")' "Console route /$console_path escaped the recovered snapshot"
	case "$console_variant" in
		*repaired-20260818*) fail "Console route /$console_path leaked the Backend embedded frontend" ;;
	esac
	slash_headers=$(curl -sSI -H "Host: $request_host" "$edge_url/$console_path/")
	assert_text "$slash_headers" '308 Permanent Redirect' "Console route /$console_path/ was not canonicalized"
	assert_text "$slash_headers" "Location: /$console_path" "Console route /$console_path/ redirected to the wrong path"
	console_slash_variant=$(curl -fsSL -H "Host: $request_host" "$edge_url/$console_path/")
	assert_text "$console_slash_variant" 'await import("/assets/cn-provider-shell-v3/index-9xJBhx8B.js")' "canonical Console route /$console_path/ escaped the recovered snapshot"
done
login_query_headers=$(curl -sSI -H "Host: $request_host" "$edge_url/login/?redirect=%2Fmodel-plaza")
assert_text "$login_query_headers" 'Location: /login?redirect=%2Fmodel-plaza' 'Console trailing-slash redirect did not preserve its query string'
console_asset_path=$(printf '%s' "$console" | grep -o '/assets/[^" ]*\.js' | head -n 1)
[ -n "$console_asset_path" ] || fail 'console JavaScript asset was not discoverable'
console_asset_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url$console_asset_path")
assert_text "$console_asset_headers" 'Cache-Control: public, max-age=31536000, immutable' 'hashed console asset is not immutable'
for redeem_asset in index-9xJBhx8B.js RedeemView-B-81-jXj.js RedeemView-Bn5PLb3-.js zero-one-redeem-contract-20260828.js; do
	redeem_asset_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/github-migration-20260828/$redeem_asset")
	assert_text "$redeem_asset_headers" 'Cache-Control: public, max-age=31536000, immutable' 'versioned redeem asset is missing or not immutable'
done
cn_provider_shell_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/cn-provider-shell-v3/index-9xJBhx8B.js")
assert_text "$cn_provider_shell_headers" 'Cache-Control: public, max-age=31536000, immutable' 'CN Provider approved shell seam is not immutable'
cn_provider_placeholder_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/cn-provider-shell-v3/zero-one-cn-provider-route-placeholder-v1.js")
assert_text "$cn_provider_placeholder_headers" 'Cache-Control: public, max-age=31536000, immutable' 'CN Provider route placeholder is not immutable'
for cn_provider_asset_path in "$test_dir"/console/assets/cn-provider-admin-v1/*; do
	[ -f "$cn_provider_asset_path" ] || continue
	cn_provider_asset=$(basename "$cn_provider_asset_path")
	cn_provider_asset_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/cn-provider-admin-v1/$cn_provider_asset")
	assert_text "$cn_provider_asset_headers" 'Cache-Control: public, max-age=31536000, immutable' 'versioned CN Provider route asset is missing or not immutable'
done
for online_image_asset_path in "$test_dir"/console/assets/online-image-v10/*; do
	[ -f "$online_image_asset_path" ] || continue
	online_image_asset=$(basename "$online_image_asset_path")
	online_image_asset_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/online-image-v10/$online_image_asset")
	assert_text "$online_image_asset_headers" 'Cache-Control: public, max-age=31536000, immutable' 'versioned online image asset is missing or not immutable'
done
floating_overlay_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-floating-panels-v1.js")
assert_text "$floating_overlay_headers" 'Cache-Control: public, max-age=31536000, immutable' 'floating overlay asset is not immutable'
local_guard_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-local-preview-guard-v2.js")
assert_text "$local_guard_headers" 'Cache-Control: public, max-age=31536000, immutable' 'local preview guard asset is not immutable'
console_parity_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-console-parity-v1.js")
assert_text "$console_parity_headers" 'Cache-Control: public, max-age=31536000, immutable' 'console parity overlay is not immutable'
console_parity_css_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-console-parity-v1.css")
assert_text "$console_parity_css_headers" 'Cache-Control: public, max-age=31536000, immutable' 'console parity stylesheet is not immutable'
header_navigation_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-community-qr-v1.js")
assert_text "$header_navigation_headers" 'Cache-Control: public, max-age=31536000, immutable' 'header-navigation settings adapter is not immutable'
header_navigation_css_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-community-qr-v1.css")
assert_text "$header_navigation_css_headers" 'Cache-Control: public, max-age=31536000, immutable' 'header-navigation settings stylesheet is not immutable'
header_custom_menu_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-header-custom-menu-v1.js")
assert_text "$header_custom_menu_headers" 'Cache-Control: public, max-age=31536000, immutable' 'header custom-menu adapter is not immutable'
header_custom_menu_css_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-header-custom-menu-v1.css")
assert_text "$header_custom_menu_css_headers" 'Cache-Control: public, max-age=31536000, immutable' 'header custom-menu stylesheet is not immutable'
redeem_actions_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-redeem-actions-v1.js")
assert_text "$redeem_actions_headers" 'Cache-Control: public, max-age=31536000, immutable' 'redeem actions adapter is not immutable'
redeem_actions_css_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-redeem-actions-v1.css")
assert_text "$redeem_actions_css_headers" 'Cache-Control: public, max-age=31536000, immutable' 'redeem actions stylesheet is not immutable'
affiliate_admin_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-affiliate-admin-v1.js")
assert_text "$affiliate_admin_headers" 'Cache-Control: public, max-age=31536000, immutable' 'affiliate administration adapter is not immutable'
affiliate_admin_css_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/assets/zero-one-affiliate-admin-v1.css")
assert_text "$affiliate_admin_css_headers" 'Cache-Control: public, max-age=31536000, immutable' 'affiliate administration stylesheet is not immutable'

if [ "$routing_mode" = preview ]; then
	console_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/login")
	assert_text "$console_headers" "connect-src 'self'; frame-src http: https:" 'preview Console CSP does not allow configured iframe pages'
	case "$console_headers" in
		*airwallex.com* | *stripe.com*) fail 'preview Console CSP permits external payment scripts' ;;
	esac
fi

custom_page_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/custom/iframe-contract")
if [ "$routing_mode" = preview ]; then
	assert_text "$custom_page_headers" "connect-src 'self'; frame-src http: https:" 'preview custom page CSP does not permit configured HTTP iframes'
else
	assert_text "$custom_page_headers" 'https://checkout-demo.airwallex.com https:; frame-ancestors' 'custom page CSP does not permit configured HTTPS iframes'
fi

missing_console_asset_headers=$(curl -sS -D - -o /dev/null -H "Host: $request_host" "$edge_url/assets/not-found.css")
assert_text "$missing_console_asset_headers" 'HTTP/1.1 404 Not Found' 'missing console asset did not return 404'
assert_text "$missing_console_asset_headers" 'Cache-Control: no-store' 'missing console asset is cacheable'

notice_headers=$(curl -fsSI -H "Host: $request_host" "$edge_url/_landing/THIRD_PARTY_NOTICES.txt")
assert_text "$notice_headers" 'Cache-Control: no-cache' 'third-party notice cache policy changed'

post_root=$(curl -fsS -X POST -H "Host: $request_host" --data 'probe' "$edge_url/")
assert_text "$post_root" '"method":"POST"' 'non-GET root did not reach Sub2API'
assert_text "$post_root" '"url":"/"' 'proxied root path changed'

for api_path in /api/v1/settings/public /v1/models /v1beta/models /responses /backend-api/codex /antigravity; do
	api_response=$(curl -fsS -H "Host: $request_host" "$edge_url$api_path")
	assert_text "$api_response" "\"url\":\"$api_path\"" "$api_path did not reach Sub2API"
done

header_response=$(curl -fsS \
	-H "Host: $request_host" \
	-H 'session_id: underscore-ok' \
	-H 'CF-Connecting-IP: 8.8.8.8' \
	-H 'True-Client-IP: 8.8.4.4' \
	-H 'X-Client-IP: 1.1.1.1' \
	-H 'X-Cluster-Client-IP: 9.9.9.9' \
	-H 'X-Real-IP: 208.67.222.222' \
	-H 'X-Forwarded-For: 208.67.220.220, 4.2.2.2' \
	"$edge_url/headers")
assert_text "$header_response" '"session_id":"underscore-ok"' 'underscore request header was not preserved'
assert_text "$header_response" '"x-real-ip":' 'X-Real-IP was not rebuilt'
assert_text "$header_response" '"x-forwarded-for":' 'X-Forwarded-For was not rebuilt'
for spoofed_ip in 8.8.8.8 8.8.4.4 1.1.1.1 9.9.9.9 208.67.222.222 208.67.220.220 4.2.2.2; do
	if printf '%s' "$header_response" | grep -Fq "$spoofed_ip"; then
		fail "spoofed client IP reached Sub2API: $spoofed_ip"
	fi
done

if [ "$routing_mode" = production ]; then
	for legacy_uri in \
		'/?source=contract' \
		'/dashboard?source=contract' \
		'/keys?source=contract' \
		'/monitor?source=contract' \
		'/v1/models?source=contract'; do
		legacy_headers=$(curl -fsS -D - -o /dev/null -H 'Host: app.01yapi.test' "$edge_url$legacy_uri")
		assert_text "$legacy_headers" 'HTTP/1.1 308 Permanent Redirect' "legacy domain did not permanently redirect $legacy_uri"
		assert_text "$legacy_headers" 'Cache-Control: no-store' "legacy redirect is cacheable for $legacy_uri"
		assert_text "$legacy_headers" "Location: https://api.01yapi.com$legacy_uri" "legacy redirect lost its path or query for $legacy_uri"
	done

	legacy_post_headers=$(curl -fsS -X POST -D - -o /dev/null -H 'Host: app.01yapi.test' --data 'probe' "$edge_url/v1/messages?source=contract")
	assert_text "$legacy_post_headers" 'HTTP/1.1 308 Permanent Redirect' 'legacy POST did not permanently redirect'
	assert_text "$legacy_post_headers" 'Location: https://api.01yapi.com/v1/messages?source=contract' 'legacy POST redirect lost its path or query'
fi

set +e
curl -sS --max-time 1 --no-buffer \
	-D "$test_dir/sse.headers" \
	-o "$test_dir/sse.body" \
	-H "Host: $request_host" \
	"$edge_url/sse"
sse_status=$?
set -e
[ "$sse_status" -eq 28 ] || fail 'SSE probe completed before the upstream stream delay'
assert_text "$(cat "$test_dir/sse.headers")" 'Content-Type: text/event-stream' 'SSE content type changed'
assert_text "$(cat "$test_dir/sse.body")" 'data: first' 'SSE first event was buffered'
if grep -Fiq 'Content-Encoding:' "$test_dir/sse.headers"; then
	fail 'SSE response was compressed'
fi

set +e
curl -sS --max-time 1 --no-buffer \
	-o "$test_dir/sse-disconnect.body" \
	-H "Host: $request_host" \
	"$edge_url/sse-disconnect"
disconnect_status=$?
set -e
[ "$disconnect_status" -eq 28 ] || fail 'client-disconnect probe completed before cancellation'
assert_text "$(cat "$test_dir/sse-disconnect.body")" 'data: connected' 'client-disconnect probe did not start streaming'

disconnect_observed=false
attempt=0
while [ "$attempt" -lt 5 ]; do
	disconnect_response=$(curl -fsS -H "Host: $request_host" "$edge_url/sse-disconnect-status")
	if printf '%s' "$disconnect_response" | grep -Fq '"observed":true'; then
		disconnect_observed=true
		break
	fi
	attempt=$((attempt + 1))
	sleep 1
done
[ "$disconnect_observed" = true ] || fail 'client disconnect was not propagated to the upstream stream'

websocket_key='dGhlIHNhbXBsZSBub25jZQ==' # gitleaks:allow -- public RFC 6455 handshake fixture
websocket_response=$(curl -sS -i --http1.1 --max-time 2 \
	-H "Host: $request_host" \
	-H 'Connection: Upgrade' \
	-H 'Upgrade: websocket' \
	-H 'Sec-WebSocket-Version: 13' \
	-H "Sec-WebSocket-Key: $websocket_key" \
	"$edge_url/ws" 2>/dev/null || true)
assert_text "$websocket_response" '101 Switching Protocols' 'WebSocket upgrade did not pass through Caddy'

if [ "$routing_mode" = production ]; then
	redirect_headers=$(curl -fsSI -H 'Host: 01yapi.test' "$edge_url/status?source=contract")
	assert_text "$redirect_headers" 'HTTP/1.1 308 Permanent Redirect' 'apex redirect status changed'
	assert_text "$redirect_headers" 'Location: https://api.01yapi.com/status?source=contract' 'apex redirect lost its path or query'
fi

echo "zero-one live $routing_mode Caddy routing contract OK"
