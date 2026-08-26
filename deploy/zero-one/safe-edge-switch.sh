#!/bin/sh
set -u

if [ "$#" -ne 2 ]; then
	echo "usage: safe-edge-switch.sh ENV_FILE NEW_EDGE_IMAGE_DIGEST" >&2
	exit 2
fi

env_file=$1
new_image=$2
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
compose_file="$script_dir/compose.yml"
readiness_timeout_seconds=90
lock_file=${ZERO_ONE_EDGE_SWITCH_LOCK_FILE:-/tmp/zero-one-edge-switch.lock}

fail() {
	echo "safe Edge switch failed: $1" >&2
	exit 1
}

for command_name in awk chmod cp curl date docker flock grep mktemp mv rm sed sleep; do
	command -v "$command_name" >/dev/null 2>&1 || fail "required command is missing: $command_name"
done

[ -f "$env_file" ] || fail "environment file does not exist: $env_file"
[ -f "$compose_file" ] || fail "Compose file does not exist: $compose_file"

is_immutable_image() {
	image=$1
	case "$image" in
		'' | *[!A-Za-z0-9._:/@-]*) return 1 ;;
	esac
	printf '%s\n' "$image" | grep -Eq '^[A-Za-z0-9][A-Za-z0-9._:/-]*@sha256:[0-9a-f]{64}$'
}

is_immutable_image "$new_image" ||
	fail 'new Edge image must be an immutable @sha256 digest reference'

edge_image_lines=$(grep -c '^EDGE_IMAGE=' "$env_file" || true)
[ "$edge_image_lines" -eq 1 ] || fail 'environment file must contain exactly one EDGE_IMAGE entry'
old_image=$(sed -n 's/^EDGE_IMAGE=//p' "$env_file")
is_immutable_image "$old_image" ||
	fail 'current EDGE_IMAGE must be an immutable @sha256 digest reference'
[ "$new_image" != "$old_image" ] || fail 'new Edge image already matches the current image'

umask 077
exec 9>"$lock_file"
flock -n 9 || fail 'another Edge switch is already running'

compose() {
	docker compose --env-file "$env_file" -f "$compose_file" "$@"
}

service_id() {
	compose ps -q "$1"
}

container_health() {
	docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$1"
}

capture_dependency_ids() {
	for service_name in sub2api postgres redis; do
		container_id=$(service_id "$service_name")
		[ -n "$container_id" ] || return 1
		[ "$(container_health "$container_id")" = healthy ] || return 1
		eval "before_${service_name}_id=\$container_id"
	done
}

verify_dependencies_unchanged() {
	for service_name in sub2api postgres redis; do
		container_id=$(service_id "$service_name")
		eval "expected_id=\$before_${service_name}_id"
		[ "$container_id" = "$expected_id" ] || return 1
		[ "$(container_health "$container_id")" = healthy ] || return 1
	done
}

write_edge_image() {
	target_image=$1
	tmp_file=$(mktemp "${env_file}.tmp.XXXXXX") || return 1
	if ! awk -v image="$target_image" '
		/^EDGE_IMAGE=/ { print "EDGE_IMAGE=" image; next }
		{ print }
	' "$env_file" >"$tmp_file"; then
		rm -f "$tmp_file"
		return 1
	fi
	chmod 600 "$tmp_file" || {
		rm -f "$tmp_file"
		return 1
	}
	mv "$tmp_file" "$env_file"
}

wait_for_https() {
	deadline=$(( $(date '+%s') + readiness_timeout_seconds ))
	while [ "$(date '+%s')" -lt "$deadline" ]; do
		if curl --fail --silent --show-error \
			--connect-timeout 1 --max-time 1 \
			--resolve api.01yapi.com:443:127.0.0.1 \
			https://api.01yapi.com/health >/dev/null 2>&1; then
			return 0
		fi
		[ "$(date '+%s')" -lt "$deadline" ] && sleep 1
	done
	return 1
}

recreate_edge() {
	compose up -d --no-build --no-deps --force-recreate edge
}

restore_old_edge() {
	echo 'new Edge failed; restoring the previous immutable image' >&2
	write_edge_image "$old_image" || return 1
	recreate_edge >/dev/null || return 1
	wait_for_https || return 1
	verify_dependencies_unchanged || return 1
	return 0
}

rollback_and_fail() {
	reason=$1
	if restore_old_edge; then
		echo "new Edge failed, old Edge restored: $reason" >&2
		exit 1
	fi
	echo "new Edge failed and rollback also failed: $reason" >&2
	exit 2
}

switch_in_progress=false
handle_interrupt() {
	trap - HUP INT TERM
	if [ "$switch_in_progress" = true ] && restore_old_edge; then
		echo 'Edge switch interrupted; old Edge restored' >&2
		exit 130
	fi
	echo 'Edge switch interrupted and rollback failed' >&2
	exit 131
}
trap handle_interrupt HUP INT TERM

capture_dependency_ids || fail 'Sub2API, PostgreSQL, and Redis must all be healthy before switching Edge'
switch_in_progress=true
docker pull "$new_image" >/dev/null || rollback_and_fail 'could not pull the new Edge image'

timestamp=$(date -u '+%Y%m%dT%H%M%SZ')
backup_file=$(mktemp "${env_file}.before-edge-${timestamp}.XXXXXX") ||
	fail 'could not allocate the environment rollback copy'
if ! cp "$env_file" "$backup_file" || ! chmod 600 "$backup_file"; then
	rm -f "$backup_file"
	fail 'could not create the environment rollback copy'
fi
if ! write_edge_image "$new_image"; then
	switch_in_progress=false
	fail 'could not atomically update EDGE_IMAGE'
fi

recreate_edge >/dev/null || rollback_and_fail 'container recreation failed'
edge_id=$(service_id edge)
[ -n "$edge_id" ] || rollback_and_fail 'new Edge container is missing'
configured_image=$(docker inspect --format '{{.Config.Image}}' "$edge_id")
[ "$configured_image" = "$new_image" ] || rollback_and_fail 'new Edge container uses the wrong image'
verify_dependencies_unchanged || rollback_and_fail 'a non-Edge service changed or became unhealthy'
wait_for_https || rollback_and_fail 'HTTPS readiness did not pass within 90 seconds'
verify_dependencies_unchanged || rollback_and_fail 'a non-Edge service changed after HTTPS readiness'
switch_in_progress=false
trap - HUP INT TERM

echo "Edge switch complete: $new_image"
echo "environment rollback copy: $backup_file"
