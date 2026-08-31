#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
production_config=$(mktemp)
preview_config=$(mktemp)
production_baseline_preview_config=$(mktemp)

cleanup() {
	rm -f "$production_config" "$preview_config" "$production_baseline_preview_config"
}
trap cleanup EXIT INT TERM

command -v docker >/dev/null 2>&1 || {
	echo 'docker is required for the Compose contract' >&2
	exit 1
}
command -v jq >/dev/null 2>&1 || {
	echo 'jq is required for the Compose contract' >&2
	exit 1
}

docker compose \
	--env-file "$repo_root/deploy/zero-one/.env.example" \
	-f "$repo_root/deploy/zero-one/compose.yml" \
	config --format json >"$production_config"

jq -e '
  .services.edge.build.args.VITE_LOCAL_EDGE_PREVIEW == "false" and
  (.services.edge | has("depends_on") | not) and
  .services.edge.healthcheck.test[0] == "CMD" and
  .services.edge.healthcheck.test[1] == "wget" and
  .services.edge.healthcheck.test[-1] == "https://127.0.0.1/" and
  (.services.sub2api.extra_hosts | index("superapi-direct=host-gateway") != null)
' "$production_config" >/dev/null

# deploy/.env.example deliberately sets BIND_HOST=0.0.0.0. The preview must
# remain loopback-only even when that upstream development setting is present.
docker compose \
	--env-file "$repo_root/deploy/.env.example" \
	-f "$repo_root/deploy/docker-compose.dev.yml" \
	-f "$repo_root/deploy/docker-compose.preview.yml" \
	config --format json >"$preview_config"

jq -e '
  [.services[] | .ports[]?] as $ports |
  ($ports | length) == 2 and
  all($ports[]; .host_ip == "127.0.0.1") and
  (.services.edge.ports | length) == 1 and
  .services.edge.ports[0].target == 80 and
  (.services.sub2api.ports | length) == 1 and
  .services.sub2api.ports[0].target == 8025 and
  .services.edge.build.args.VITE_LOCAL_EDGE_PREVIEW == "true" and
  .services.sub2api.build.dockerfile == "Dockerfile" and
  .services.sub2api.depends_on.postgres.condition == "service_healthy" and
  .services.sub2api.depends_on.redis.condition == "service_healthy" and
  .services.mailpit.network_mode == "service:sub2api" and
  .services.mailpit.environment.MP_SMTP_BIND_ADDR == "127.0.0.1:1025" and
  any(.services.edge.volumes[]; .target == "/etc/caddy/Caddyfile") and
  any(.services.edge.volumes[]; .target == "/etc/caddy/Caddyfile.shared")
' "$preview_config" >/dev/null

docker compose \
	--env-file "$repo_root/deploy/.env.example" \
	-f "$repo_root/deploy/docker-compose.dev.yml" \
	-f "$repo_root/deploy/docker-compose.preview.yml" \
	-f "$repo_root/deploy/zero-one/compose.production-baseline-preview.yml" \
	config --format json >"$production_baseline_preview_config"

jq -e '
  .services.sub2api.image == "ghcr.io/xiaosike/zero-one-sub2api@sha256:7c008a49a58b26a4ebc4caf842d6f1251b4b0f11d8993d202b2b9c23caea3a58" and
  (.services.sub2api | has("build") | not) and
  .services.sub2api.ports[0].host_ip == "127.0.0.1" and
  .services.sub2api.ports[0].target == 8025 and
  .services.edge.build.args.VITE_LOCAL_EDGE_PREVIEW == "true"
' "$production_baseline_preview_config" >/dev/null

echo 'zero-one production, preview, and production-baseline preview Compose contract OK'
