# Zero One Deployment Overlay

This is an additive production overlay for 零一 API. It intentionally does not
modify the upstream Compose files or expose application, database, or cache
ports. The root `Dockerfile` builds the branded Sub2API image; `Dockerfile.edge`
builds `landing/` and packages its static output with Caddy.

## Supported Local Edge Preview

The supported preview runs the real source-built Sub2API backend with
PostgreSQL and Redis, then serves the Landing and Console through one local
Caddy origin. Mailpit shares the backend network namespace so SMTP can remain
on `127.0.0.1:1025` inside that namespace.

```bash
cp deploy/.env.example deploy/.env.preview
chmod 600 deploy/.env.preview
docker compose --env-file deploy/.env.preview -f deploy/docker-compose.dev.yml -f deploy/docker-compose.preview.yml build sub2api
docker compose --env-file deploy/.env.preview -f deploy/docker-compose.dev.yml -f deploy/docker-compose.preview.yml build edge
docker compose --env-file deploy/.env.preview -f deploy/docker-compose.dev.yml -f deploy/docker-compose.preview.yml up -d --no-build
```

Replace the placeholder secrets in `deploy/.env.preview` before starting. Open
the single-origin preview at `http://127.0.0.1:3001` and Mailpit at
`http://127.0.0.1:8025`. The preview override removes the development
backend's direct host port; backend and Console routes remain available through
the edge. All published preview ports are hard-bound to loopback, regardless of
the upstream `BIND_HOST` setting.

The preview build explicitly sets `VITE_LOCAL_EDGE_PREVIEW=true`; production
Compose, CI builds and published edge images explicitly set it to `false`.
Stop the stack with the same file and environment arguments:

```bash
docker compose --env-file deploy/.env.preview -f deploy/docker-compose.dev.yml -f deploy/docker-compose.preview.yml down
```

## Production Bootstrap

```bash
cp deploy/zero-one/.env.example deploy/zero-one/.env
chmod 600 deploy/zero-one/.env
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml -f deploy/zero-one/compose.bootstrap.yml config
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml -f deploy/zero-one/compose.bootstrap.yml up -d --build postgres redis sub2api
```

These build commands are for local evaluation only. Replace every placeholder
secret before the first start. The bootstrap override
publishes Sub2API only on `127.0.0.1:18080`; use an SSH tunnel when administering
a remote server. Keep public DNS unpointed until the required settings pass the
release gate.

After the administrator saves the required brand and feature settings from
`docs/TECHNICAL-PLAN.md`, run the release gate before public launch:

```bash
node deploy/zero-one/verify-public-settings.mjs http://127.0.0.1:18080/api/v1/settings/public
```

The upstream database defaults are deliberately unchanged, so this gate is
required for every fresh database. Verify the administrator-only `frontend_url`
value separately on `/admin/settings`. Node.js 20 or newer is required only on
the release workstation. Follow `docs/OPERATIONS.md` to remove the bootstrap
port, point DNS and start the public edge. Production first start follows the
same digest-pinned `pull` + `up --no-build` policy as every later release; it
must not use the local preview build commands above.

Only Caddy publishes `80`, `443/tcp`, and `443/udp`. `sub2api`, PostgreSQL,
and Redis remain on Docker networks. `RUN_MODE` is deliberately fixed to
`standard`; simple mode removes the Redeem Code user and administrator paths.

## Production Images

CI builds two images with source-revision tags: one from the root Dockerfile
and one from `Dockerfile.edge`. Promote their registry digests, not mutable
tags. Set `SUB2API_IMAGE`, `EDGE_IMAGE`, `POSTGRES_IMAGE`, and `REDIS_IMAGE`
to approved digest references in the production environment, pull them, then
start without building. `CADDY_IMAGE` and `NODE_IMAGE` are build inputs only;
the edge image already contains Caddy and the Vite build output:

```bash
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml pull postgres redis sub2api
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml up -d --no-build postgres redis sub2api
```

Keep the previous image digests in the release record for rollback. Switch Edge
only through the authoritative
[Safe Edge switch procedure](../../docs/OPERATIONS.md#safe-edge-switch); the
same operations manual owns settings, backup, monitoring, recovery and smoke
tests.

The static repository checks are available as
`sh deploy/zero-one/test-routing.sh`, `sh deploy/zero-one/test-compose.sh`,
`sh deploy/zero-one/test-direct-upstream.sh`, and
`node deploy/zero-one/verify-marketing-sources.mjs`. When Docker is available,
run `sh deploy/zero-one/test-live-routing.sh IMAGE` for production and
`sh deploy/zero-one/test-live-routing.sh IMAGE preview` for the supported
preview. CI validates both rendered Caddy configurations and runs both live
contracts against a disposable upstream service; no database is required.

## Host-local SuperAPI direct tunnel

The production overlay maps the stable name `superapi-direct` to Docker's host
gateway. When the SuperAPI direct tunnel is listening on host port `18181`, use
`http://superapi-direct:18181` as the OpenAI Provider Account Base URL and keep
the account proxy unset. Do not store a bridge address such as `172.x.x.x` in a
Provider Account: Docker can allocate a different bridge subnet whenever the
Compose network is recreated.

Resolve `superapi-direct` inside the running `sub2api` container; do not infer
its address from the Compose network subnet or an earlier deployment. The
host-side bridge's `BRIDGE_LISTEN` value and the UFW `to` address must both
equal that resolved address. The production unit reads `BRIDGE_LISTEN` from
`/etc/01yapi-bridge/client.env`:

```bash
resolved_host_gateway="$(
  docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml \
    exec -T sub2api getent hosts superapi-direct | awk 'NR == 1 { print $1 }'
)"
bridge_listen="$(
  sudo sh -eu -c \
    '. /etc/01yapi-bridge/client.env; printf "%s\n" "$BRIDGE_LISTEN"'
)"
test -n "$resolved_host_gateway"
test "${resolved_host_gateway}:18181" = "$bridge_listen"
sudo ss -lntp | grep -F "${resolved_host_gateway}:18181"
sudo ufw status numbered | grep -F "$resolved_host_gateway" | \
  grep -F '18181/tcp' | grep -F '01yapi bridge via host-gateway'
```

If either comparison fails, keep the Provider Account off the new route and
follow the replacement procedure in `docs/OPERATIONS.md`; a successful health
request to an old listener is not sufficient.

Before moving production traffic, verify the tunnel from the same network
namespace as Sub2API, duplicate the Provider Account (duplicates start with
scheduling paused), change only the duplicate's Base URL, and run at least
three account connectivity tests. The host-side listener must accept traffic
only from the current Compose gateway subnet; port `18181` must not have a
public firewall rule.

```bash
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml \
  exec -T sub2api wget -qO- -T 5 http://superapi-direct:18181/health
```

Roll out one Provider Account at a time. Record its previous Base URL before
the change, then compare same-model, same-reasoning-effort native Responses
traffic. Roll back that Base URL if TTFT P50/P90 or provider 5xx does not improve.

Measure user-perceived TTFT with the repository benchmark. It starts at the
client request and stops at the first semantic text or tool event, while still
draining the short response so usage recording can complete. It ignores SSE
keepalives, preambles, usage-only events and terminal metadata. The API key is
accepted only from `ZERO_ONE_API_KEY` or stdin and is never printed:

```bash
ZERO_ONE_API_KEY='REDACTED' node deploy/zero-one/benchmark-ttft.mjs \
  --base-url https://api.01yapi.com \
  --endpoint /v1/responses \
  --model gpt-5.6-sol \
  --reasoning high \
  --requests 50 \
  --warmup 3 \
  --max-output-tokens 16
```

Use a disposable key and remove it from the shell environment immediately
afterward. Compare identical cohorts. Keep a route change only when both P50
and P90 improve by at least 10%, provider-owned 5xx stays at or below 2%, and
the controlled time window has no missing usage or billing records.

## Encrypted Backups

Install [`age`](https://age-encryption.org/), `flock` and `mountpoint` (the last
two are normally provided by util-linux) on the deployment host and create an
offline recovery key. Put only its public recipient in the scheduler
environment; keep the corresponding private key outside the server. Schedule
the included script daily, for example:

```cron
30 2 * * * BACKUP_DIR=/mnt/offsite/zero-one BACKUP_AGE_RECIPIENT=age1... /srv/zero-one/deploy/zero-one/backup-postgres.sh /srv/zero-one/deploy/zero-one/.env >> /var/log/zero-one-backup.log 2>&1
```

It creates separate encrypted PostgreSQL and deployment-state archives, keeps
seven daily copies and promotes Sunday snapshots into four weekly copies.
`BACKUP_DIR` must be the off-host mount point itself. While that filesystem is
mounted, create `.offsite-mounted` inside it; the script requires both the mount
and sentinel before writing. `BACKUP_SENTINEL_FILE` can select another single
file name. A normal local `/srv` directory is not sufficient.

Run a quarterly isolated restore drill from a recovery host with the offline age
identity and an approved PostgreSQL image digest:

```bash
RESTORE_AGE_IDENTITY=/secure/offline/zero-one.agekey \
RESTORE_POSTGRES_IMAGE='postgres:18-alpine@sha256:REPLACE_WITH_APPROVED_DIGEST' \
sh deploy/zero-one/restore-drill.sh \
  /mnt/offsite/zero-one/daily/postgres-YYYY-MM-DD.dump.age \
  /mnt/offsite/zero-one/daily/zero-one-state-YYYY-MM-DD.tar.gz.age
```

The drill checks checksums, decrypts in a private temporary directory and runs
`pg_restore --exit-on-error` against a disposable PostgreSQL container with no
network or published ports. It never reads the production Compose environment
and removes its temporary container and volume on exit.
