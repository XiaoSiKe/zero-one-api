#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)
command -v docker >/dev/null 2>&1 || {
	echo 'docker is required for the build-context contract' >&2
	exit 1
}

umask 077
fixture_dir=$(mktemp -d "${TMPDIR:-/tmp}/zero-one-build-context.XXXXXX")
cleanup() {
	case "$fixture_dir" in
		*/zero-one-build-context.*) rm -rf -- "$fixture_dir" ;;
		*) echo 'refusing to clean an unexpected fixture path' >&2 ;;
	esac
}
trap cleanup EXIT
trap 'exit 130' INT TERM

context_dir=$fixture_dir/context
output_dir=$fixture_dir/output
mkdir -p "$context_dir"
# Only the ignore rules come from the checkout. Never read real env/state files.
cp "$repo_root/.dockerignore" "$context_dir/.dockerignore"
printf 'FROM scratch\nCOPY . /context/\n' > "$fixture_dir/Dockerfile"

excluded_paths='
.env
.env.local
.env.example.secret
deploy/zero-one/.env
deploy/.env.preview
frontend/.env.production
nested/deeper/.env
nested/deeper/.env.private
deploy/zero-one/state/postgres/pgdata
deploy/zero-one/state/redis/appendonlydir/appendonly.aof
deploy/zero-one/state/sub2api/config.yaml
deploy/zero-one/state/caddy-data/cert.key
deploy/zero-one/state/.env.example
.release-backups/point/postgres.dump
.release-backups/point/state-stage/config/runtime.env
.release-builds/checkout/backend/main.go
deploy/data/legacy-state
deploy/postgres_data/legacy-state
deploy/redis_data/legacy-state'

required_paths='
.env.example
deploy/.env.example
deploy/zero-one/.env.example
LICENSE
COPYING.GPLv3
THIRD_PARTY_NOTICES.md
docs/legal/admin-compliance.zh.md
frontend/package.json
backend/go.mod
deploy/zero-one/Caddyfile
deploy/zero-one/Caddyfile.shared
deploy/zero-one/recovered-frontend/landing/index.html
deploy/zero-one/recovered-frontend/landing/THIRD_PARTY_NOTICES.txt
deploy/zero-one/recovered-frontend/console/index.html
deploy/zero-one/recovered-frontend/console/assets/app.js'

# These fixed paths intentionally contain no whitespace; all contents are fake.
for relative_path in $excluded_paths $required_paths; do
	mkdir -p "$context_dir/$(dirname -- "$relative_path")"
	printf 'Synthetic build-context sentinel: %s\n' "$relative_path" > "$context_dir/$relative_path"
done

# Exercise Docker's actual matching, without a base-image pull, RUN, or registry push.
if ! docker build --network=none --pull=false --progress=plain \
	--file "$fixture_dir/Dockerfile" \
	--output "type=local,dest=$output_dir" "$context_dir" > "$fixture_dir/build.log" 2>&1; then
	sed -n '1,160p' "$fixture_dir/build.log" >&2
	exit 1
fi

failed=0
for relative_path in $excluded_paths; do
	if [ -e "$output_dir/context/$relative_path" ]; then
		printf 'build-context exclusion failed: %s\n' "$relative_path" >&2
		failed=1
	fi
done
for relative_path in $required_paths; do
	if ! cmp -s "$context_dir/$relative_path" "$output_dir/context/$relative_path"; then
		printf 'required build-context input missing or changed: %s\n' "$relative_path" >&2
		failed=1
	fi
done
[ "$failed" -eq 0 ]
echo 'zero-one synthetic Docker build-context contract OK'
