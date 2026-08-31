#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
script="$repo_root/deploy/zero-one/safe-edge-switch.sh"
test_root=$(mktemp -d)
old_image='ghcr.io/01-yang/zero-one-edge@sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
new_image='ghcr.io/xiaosike/zero-one-edge@sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'

cleanup() {
	rm -rf "$test_root"
}
trap cleanup EXIT INT TERM

fail() {
	echo "safe Edge switch contract failed: $1" >&2
	exit 1
}

make_fixture() {
	case_name=$1
	case_dir="$test_root/$case_name"
	mkdir -p "$case_dir/bin"
	printf 'EDGE_IMAGE=%s\nUNCHANGED_SECRET=keep-me\n' "$old_image" >"$case_dir/.env"
	: >"$case_dir/docker.log"
	: >"$case_dir/curl.count"
	printf '%s\n' 0 >"$case_dir/time"
	printf '%s\n' "$case_dir"
}

install_fakes() {
	case_dir=$1
	cat >"$case_dir/bin/flock" <<'EOF'
#!/bin/sh
exit 0
EOF
	cat >"$case_dir/bin/date" <<'EOF'
#!/bin/sh
set -eu
if [ "$*" = '+%s' ]; then
	cat "$FAKE_TIME_FILE"
	exit
fi
printf '%s\n' '20260826T120000Z'
EOF
	cat >"$case_dir/bin/sleep" <<'EOF'
#!/bin/sh
set -eu
now=$(cat "$FAKE_TIME_FILE")
printf '%s\n' "$((now + $1))" >"$FAKE_TIME_FILE"
exit 0
EOF
	cat >"$case_dir/bin/docker" <<'EOF'
#!/bin/sh
set -eu
printf '%s\n' "$*" >>"$FAKE_DOCKER_LOG"
if [ "$1" = pull ]; then
	[ "${FAKE_PULL_FAIL_IMAGE:-}" != "$2" ]
	exit
fi
if [ "$1" = run ]; then
	[ "${FAKE_PREFLIGHT_FAIL:-false}" != true ]
	exit
fi
if [ "$1" = inspect ]; then
	format=$3
	container_id=$4
	case "$format" in
		*Config.Image*)
			case "$container_id" in
				edge-new) sed -n 's/^EDGE_IMAGE=//p' "$FAKE_ENV_FILE" ;;
				edge-old) printf '%s\n' "$FAKE_OLD_IMAGE" ;;
			esac
			;;
		*) printf '%s\n' healthy ;;
	esac
	exit
fi
if [ "$1" = compose ]; then
	shift
	env_file=
	while [ "$#" -gt 0 ]; do
		case "$1" in
			--env-file) env_file=$2; shift 2 ;;
			-f) shift 2 ;;
			ps)
				service_name=$3
				case "$service_name" in
					sub2api)
						if [ "${FAKE_MUTATE_SUB2API:-false}" = true ] && [ -f "$FAKE_STATE_FILE" ]; then
							printf '%s\n' sub2api-changed
						else
							printf '%s\n' sub2api-stable
						fi
						;;
					postgres) printf '%s\n' postgres-stable ;;
					redis) printf '%s\n' redis-stable ;;
					edge)
						image=$(sed -n 's/^EDGE_IMAGE=//p' "$env_file")
						[ "$image" = "$FAKE_OLD_IMAGE" ] && printf '%s\n' edge-old || printf '%s\n' edge-new
						;;
				esac
				exit
				;;
			up)
				image=$(sed -n 's/^EDGE_IMAGE=//p' "$env_file")
				[ "${FAKE_UP_FAIL_IMAGE:-}" != "$image" ]
				[ "$image" = "$FAKE_OLD_IMAGE" ] || : >"$FAKE_STATE_FILE"
				exit
				;;
			*) shift ;;
		esac
	done
fi
exit 1
EOF
	cat >"$case_dir/bin/curl" <<'EOF'
#!/bin/sh
set -eu
count=0
[ ! -s "$FAKE_CURL_COUNT" ] || count=$(cat "$FAKE_CURL_COUNT")
count=$((count + 1))
printf '%s\n' "$count" >"$FAKE_CURL_COUNT"
image=$(sed -n 's/^EDGE_IMAGE=//p' "$FAKE_ENV_FILE")
if [ "$image" = "$FAKE_OLD_IMAGE" ]; then
	[ "${FAKE_OLD_READY:-true}" = true ]
	exit
fi
ready_after=${FAKE_NEW_READY_AFTER:-1}
[ "$ready_after" -gt 0 ] && [ "$count" -ge "$ready_after" ]
EOF
	chmod +x "$case_dir/bin/date" "$case_dir/bin/docker" "$case_dir/bin/curl" "$case_dir/bin/flock" "$case_dir/bin/sleep"
}

run_switch() {
	case_dir=$1
	shift
	env \
		PATH="$case_dir/bin:$PATH" \
		FAKE_DOCKER_LOG="$case_dir/docker.log" \
		FAKE_CURL_COUNT="$case_dir/curl.count" \
		FAKE_STATE_FILE="$case_dir/switched" \
		FAKE_TIME_FILE="$case_dir/time" \
		FAKE_ENV_FILE="$case_dir/.env" \
		FAKE_OLD_IMAGE="$old_image" \
		ZERO_ONE_EDGE_SWITCH_LOCK_FILE="$case_dir/edge.lock" \
		"$@" \
		sh "$script" "$case_dir/.env" "$new_image"
}

success_dir=$(make_fixture success)
install_fakes "$success_dir"
run_switch "$success_dir" FAKE_NEW_READY_AFTER=3 >"$success_dir/output"
grep -Fq "EDGE_IMAGE=$new_image" "$success_dir/.env" || fail 'success did not persist the new digest'
grep -Fq 'UNCHANGED_SECRET=keep-me' "$success_dir/.env" || fail 'success changed an unrelated env value'
[ "$(cat "$success_dir/curl.count")" -eq 3 ] || fail 'HTTPS delay was not retried'
grep -Fq -- '--no-deps --force-recreate edge' "$success_dir/docker.log" || fail 'Edge was not recreated without dependencies'
grep -Fq -- '--entrypoint caddy' "$success_dir/docker.log" || fail 'new Edge Caddy configuration was not preflighted'
success_backup=$(find "$success_dir" -name '.env.before-edge-*' -type f | head -n 1)
[ -n "$success_backup" ] || fail 'success did not create an environment rollback copy'
[ "$(stat -c '%a' "$success_backup" 2>/dev/null || stat -f '%Lp' "$success_backup")" = 600 ] ||
	fail 'environment rollback copy is not restricted to mode 600'

rollback_dir=$(make_fixture rollback)
install_fakes "$rollback_dir"
if run_switch "$rollback_dir" FAKE_NEW_READY_AFTER=0 >"$rollback_dir/output" 2>&1; then
	fail 'HTTPS timeout unexpectedly succeeded'
fi
grep -Fq "EDGE_IMAGE=$old_image" "$rollback_dir/.env" || fail 'timeout did not restore the old digest'
grep -Fq 'old Edge restored' "$rollback_dir/output" || fail 'successful rollback was not reported'

rollback_fail_dir=$(make_fixture rollback-fail)
install_fakes "$rollback_fail_dir"
if run_switch "$rollback_fail_dir" FAKE_NEW_READY_AFTER=0 FAKE_OLD_READY=false >"$rollback_fail_dir/output" 2>&1; then
	fail 'rollback failure unexpectedly succeeded'
fi
grep -Fq 'rollback also failed' "$rollback_fail_dir/output" || fail 'rollback failure was not reported'

recreate_fail_dir=$(make_fixture recreate-fail)
install_fakes "$recreate_fail_dir"
if run_switch "$recreate_fail_dir" FAKE_NEW_READY_AFTER=1 FAKE_UP_FAIL_IMAGE="$new_image" >"$recreate_fail_dir/output" 2>&1; then
	fail 'new Edge recreation failure unexpectedly succeeded'
fi
grep -Fq "EDGE_IMAGE=$old_image" "$recreate_fail_dir/.env" || fail 'recreation failure did not restore the old digest'
grep -Fq 'old Edge restored' "$recreate_fail_dir/output" || fail 'recreation rollback was not reported'

pull_fail_dir=$(make_fixture pull-fail)
install_fakes "$pull_fail_dir"
if run_switch "$pull_fail_dir" FAKE_PULL_FAIL_IMAGE="$new_image" >"$pull_fail_dir/output" 2>&1; then
	fail 'new Edge pull failure unexpectedly succeeded'
fi
grep -Fq "EDGE_IMAGE=$old_image" "$pull_fail_dir/.env" || fail 'pull failure changed the environment file'
if grep -Fq -- '--no-deps --force-recreate edge' "$pull_fail_dir/docker.log"; then
	fail 'pull failure recreated the healthy old Edge'
fi

preflight_fail_dir=$(make_fixture preflight-fail)
install_fakes "$preflight_fail_dir"
if run_switch "$preflight_fail_dir" FAKE_PREFLIGHT_FAIL=true >"$preflight_fail_dir/output" 2>&1; then
	fail 'new Edge preflight failure unexpectedly succeeded'
fi
grep -Fq "EDGE_IMAGE=$old_image" "$preflight_fail_dir/.env" || fail 'preflight failure changed the environment file'
if grep -Fq -- '--no-deps --force-recreate edge' "$preflight_fail_dir/docker.log"; then
	fail 'preflight failure recreated the healthy old Edge'
fi

dependency_dir=$(make_fixture dependency-change)
install_fakes "$dependency_dir"
if run_switch "$dependency_dir" FAKE_NEW_READY_AFTER=1 FAKE_MUTATE_SUB2API=true >"$dependency_dir/output" 2>&1; then
	fail 'dependency identity change unexpectedly succeeded'
fi

invalid_dir=$(make_fixture invalid)
install_fakes "$invalid_dir"
if PATH="$invalid_dir/bin:$PATH" sh "$script" "$invalid_dir/.env" 'ghcr.io/xiaosike/zero-one-edge:latest' >"$invalid_dir/output" 2>&1; then
	fail 'mutable image tag unexpectedly passed validation'
fi
[ ! -s "$invalid_dir/docker.log" ] || fail 'invalid image invoked Docker'

newline_dir=$(make_fixture newline)
install_fakes "$newline_dir"
newline_image=$(printf '%s\n%s' "$new_image" 'EDGE_IMAGE=attacker')
if PATH="$newline_dir/bin:$PATH" sh "$script" "$newline_dir/.env" "$newline_image" >"$newline_dir/output" 2>&1; then
	fail 'newline image injection unexpectedly passed validation'
fi
[ ! -s "$newline_dir/docker.log" ] || fail 'newline image injection invoked Docker'

printf '%s\n' 'safe Edge switch contract OK'
