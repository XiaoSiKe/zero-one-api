#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
production_config=$(mktemp)
preview_config=$(mktemp)

cleanup() {
	rm -f "$production_config" "$preview_config"
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
  (.services.edge | has("extra_hosts") | not) and
  .services.edge.healthcheck.test[0] == "CMD" and
  .services.edge.healthcheck.test[1] == "wget" and
  (.services.edge.healthcheck.test | index("--no-check-certificate") == null) and
  .services.edge.healthcheck.test[-1] == "http://127.0.0.1:2019/config/" and
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

echo 'zero-one production and preview Compose contract OK'
