#!/bin/sh
set -eu

repo_root=$(CDPATH= cd -- "$(dirname -- "$0")/../.." && pwd)

if [ "$(uname -s)" = "Linux" ]; then
	cd "$repo_root"
	exec npm test --prefix visual-regression -- "$@"
fi

command -v docker >/dev/null 2>&1 || {
	echo 'docker is required for the pinned local visual test environment' >&2
	exit 1
}

# Keep Linux native modules in anonymous volumes so a local macOS checkout is
# not left with container-only optional dependencies after verification.
exec docker run --rm --shm-size=2g -e CI=true \
	-v "$repo_root:/workspace" \
	-v /workspace/visual-regression/node_modules \
	-v /workspace/landing/node_modules \
	-w /workspace \
	mcr.microsoft.com/playwright:v1.55.1-noble \
	sh -lc 'npm ci --prefix visual-regression && npm ci --prefix landing && npm test --prefix visual-regression -- "$@"' \
	sh "$@"
