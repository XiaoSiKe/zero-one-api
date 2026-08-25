# 零一 API 运维手册

生产主机、SSH、本机私钥路径、持久化目录和原地发布速查见
[`PRODUCTION_SERVER_CN.md`](PRODUCTION_SERVER_CN.md)。私钥正文和任何运行时 secret
不得写入仓库。

## Initial Deployment

1. Keep the public DNS records unpointed. Copy `deploy/zero-one/.env.example` to `deploy/zero-one/.env`, replace every placeholder secret and replace all four runtime image values with approved registry digests.
2. From the repository root, validate both Compose files, pull the pinned images, then start PostgreSQL, Redis and Sub2API with the loopback-only bootstrap override:

   ```bash
   docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml -f deploy/zero-one/compose.bootstrap.yml config -q
   docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml -f deploy/zero-one/compose.bootstrap.yml pull postgres redis sub2api
   docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml -f deploy/zero-one/compose.bootstrap.yml up -d --no-build postgres redis sub2api
   ```

3. If operating remotely, open an SSH tunnel with `ssh -L 18080:127.0.0.1:18080 SERVER`. Log in at `http://127.0.0.1:18080/login`, enable administrator 2FA and apply every setting in `docs/TECHNICAL-PLAN.md`, including the site subtitle and `frontend_url`.
4. From a release workstation with Node.js 20 or newer, run `node deploy/zero-one/verify-public-settings.mjs http://127.0.0.1:18080/api/v1/settings/public`. Confirm `frontend_url=https://api.01yapi.com` once more in `/admin/settings`, and update every OAuth or captcha callback/origin allowlist to the same canonical origin before enabling that capability.
5. Remove the temporary loopback port by recreating Sub2API from the production Compose file only, then confirm port `18080` is no longer listening:

   ```bash
   docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml up -d --no-build --force-recreate sub2api
   docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml port sub2api 8080
   ```

   The final command must print nothing. Do not continue if it reports a host port.
6. Start the pinned edge image with `pull` followed by `up -d --no-build`, then point DNS-only A/AAAA records for `api.01yapi.com`, compatibility-only `app.01yapi.com`, `01yapi.com` and `www.01yapi.com` to the server. Do not add or manage `api.01yapi.cc`; it is not part of this product.
7. Confirm Caddy has obtained certificates, every service reports healthy and the public release gate passes at `https://api.01yapi.com/api/v1/settings/public` before announcing the service.

The bootstrap override binds `18080` to loopback only and must not be used after
initial settings are saved. Never expose 8080, 18080, 5432 or 6379 in the host
firewall. Keep fixed values for `JWT_SECRET` and `TOTP_ENCRYPTION_KEY`; changing
them invalidates sessions or enrolled 2FA secrets.

### Client IP Boundary

The v1 edge is reached directly and is not behind a CDN. Caddy removes
client-supplied `CF-Connecting-IP`, `True-Client-IP`, `X-Client-IP` and
`X-Cluster-Client-IP`, then rebuilds `X-Real-IP` and `X-Forwarded-For` from the
socket peer. Keep the Administrator setting `forwarded_client_ip_headers`
empty in this topology. If a CDN is introduced later, restrict the origin to
that CDN's maintained egress ranges and update both the trusted-proxy and
header policy before enabling a CDN-specific client-IP header.

Before each production release, replace the local image names in `.env` with
approved immutable registry digests and use `docker compose ... up -d --no-build`.
Never use `latest` as a production image reference. Caddy's ACME storage is
part of the deployment state; preserve `deploy/zero-one/state/caddy-data` when
migrating the host to avoid unnecessary certificate issuance.

The version badge is informational for this managed Docker deployment. Do not
use Sub2API's in-place binary update or rollback endpoints: the container runs
as a non-root user, and an upstream binary would also discard the Zero One
Console customizations. Upgrade and roll back only by switching the approved
project-owned image digest through the release procedure below.

## Administrator Workflow

The same login page serves users and administrators. An administrator is redirected to `/admin/dashboard`; `/admin/ops` is the operational monitor. User, group, channel, Provider Account, proxy, announcement, usage, risk and system settings remain under the existing `/admin/*` routes.

Redeem Code workflow:

1. Generate balance, concurrency or subscription codes at `/admin/redeem`.
2. Export or distribute codes through an approved private channel.
3. The User redeems once at `/redeem` and checks the resulting balance or entitlement.
4. Use the administrator page to expire, delete or audit codes.

Online purchasing stays disabled. `/admin/promo-codes` belongs to the purchase flow and is not a replacement for Redeem Code management.

## Monitoring

Monitor container health, PostgreSQL readiness, Redis response, disk usage, TLS expiry, HTTP 5xx rate and latency. The `/health` endpoint checks process liveness only; it does not prove that PostgreSQL, Redis or upstream model calls work.

Add three external probes:

- An unauthenticated `GET /api/v1/settings/public` check through the Canonical Product Domain.
- A non-following request to an `app.01yapi.com` path that verifies its same-URI `308` compatibility redirect.
- A low-frequency authenticated model request using a dedicated probe User and tightly limited API Key.

Alert separately for canonical-host DNS/TLS failure, compatibility-redirect
failure and origin failure.

Inspect Caddy's JSON access logs for status, latency and client IP, but avoid
adding request-body or authorization-header logging. Use the dashboard and
application audit logs for user-level troubleshooting rather than copying
Provider Account credentials into an incident ticket.

The Compose overlay caps each container's Docker JSON logs at five 100 MB files.
Monitor both Docker storage and application data volumes; rotation limits disk
growth but does not replace centralized logs when longer retention is required.

### SuperAPI direct-tunnel rollout

`sub2api` resolves the stable name `superapi-direct` through Docker's
`host-gateway` mapping. A host-local SuperAPI tunnel on port `18181` must be
configured in Provider Accounts as `http://superapi-direct:18181` with no
account proxy. Never pin a Docker bridge IP in the database: its subnet is an
implementation detail and can change after Compose network recreation.

Docker's resolved `host-gateway` address is not necessarily the gateway of the
`zero-one-api_gateway` network. It can also change when Docker or its networks
are recreated. Always resolve it inside the current `sub2api` container and
compare it with the effective host listener configuration. Production uses
`01yapi-bridge-client.service`, whose environment file is
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
test -n "$bridge_listen"
printf 'superapi-direct=%s BRIDGE_LISTEN=%s\n' \
  "$resolved_host_gateway" "$bridge_listen"
test "${resolved_host_gateway}:18181" = "$bridge_listen"
```

Do not proceed if the last command fails. To replace a stale binding safely:

1. Keep the affected Provider Accounts unschedulable or on their previous Base
   URL. Resolve and review the current IPv4 gateway network subnet; do not
   reuse a subnet from an earlier deployment:

   ```bash
   gateway_subnet="$(
     docker network inspect zero-one-api_gateway \
       --format '{{range .IPAM.Config}}{{println .Subnet}}{{end}}' | \
       awk 'index($0, ":") == 0 && NF { print; exit }'
   )"
   test -n "$gateway_subnet"
   printf 'gateway subnet=%s host-gateway=%s\n' \
     "$gateway_subnet" "$resolved_host_gateway"
   ```

2. Run `sudo ufw status numbered` and identify the single rule with comment
   `01yapi bridge via host-gateway`. Add its narrowly scoped replacement first:

   ```bash
   sudo ufw allow in proto tcp from "$gateway_subnet" \
     to "$resolved_host_gateway" port 18181 \
     comment '01yapi bridge via host-gateway'
   ```

   It must be an `ALLOW IN` from the current gateway subnet to
   `$resolved_host_gateway` on `18181/tcp`. Never use `Anywhere`, the public
   interface, an address copied from an earlier deployment, or the network's
   gateway by assumption.
3. Run `sudoedit /etc/01yapi-bridge/client.env`, set `BRIDGE_LISTEN` to the
   exact `${resolved_host_gateway}:18181` value, then restart and verify the
   unit:

   ```bash
   sudo systemctl restart 01yapi-bridge-client.service
   sudo systemctl is-active --quiet 01yapi-bridge-client.service
   ```

4. Re-run the equality check above. Confirm the listener and replacement UFW
   rule target the same address:

   ```bash
   sudo ss -lntp | grep -F "${resolved_host_gateway}:18181"
   sudo ufw status numbered | grep -F "$resolved_host_gateway" | \
     grep -F '18181/tcp' | grep -F '01yapi bridge via host-gateway'
   ```

5. After the container health check and an external check confirming that
   `PUBLIC_IP:18181` is still unreachable, list the numbered UFW rules again
   and delete only the stale rule. UFW renumbers rules after changes, so never
   reuse an earlier rule number.

Verify the tunnel from inside the production container before editing an
account. This request carries no Provider credential:

```bash
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml \
  exec -T sub2api wget -qO- -T 5 http://superapi-direct:18181/health
```

For a safe canary, duplicate the target Provider Account, leave the duplicate
unschedulable, change only its Base URL, and run three same-model connectivity
tests. Delete the duplicate after the test. Then change one production account
and observe at least 50 comparable native `/v1/responses` requests before
moving another account. Compare the same model, reasoning effort and time
window; use these initial acceptance thresholds unless a newer incident
baseline is recorded:

- TTFT P50 at most 12 seconds and P90 at most 25 seconds.
- Provider-owned `/v1/responses` 5xx attempt rate at most 2 percent.

Record the previous Base URL as the per-account rollback value. If either
threshold regresses, restore that value immediately and keep the remaining
accounts on their current route while investigating the upstream credential
pool. A passing `/health` check proves reachability only; it does not replace
the canary model calls or usage-log comparison.

## Backup And Recovery

- Run an encrypted PostgreSQL logical backup every day and retain 7 daily plus 4 weekly copies outside the server.
- `deploy/zero-one/backup-postgres.sh` is the scheduled backup entry point. It
  uses `age` public-key encryption, writes a checksum next to each custom dump,
  retains 7 daily copies and promotes Sunday copies into 4 weekly recovery
  points. It requires `flock` and `mountpoint` from util-linux. The private
  recovery key must not reside on the production host.
- The same task creates a separately encrypted archive containing the runtime
  `.env`, Caddy/Compose files and `deploy/zero-one/state/sub2api`, with the same
  7-daily/4-weekly retention. Redis persistence may be copied for faster
  recovery but is not a substitute for PostgreSQL backup.
- Never store `.env`, database dumps or Provider Account credentials in Git.
- Perform a documented restore exercise at least once per quarter using an isolated host.

Recovery order is PostgreSQL, Sub2API data, Redis, then application and edge containers. After recovery, verify administrator login, API Key authentication, one streamed model request and one Redeem Code redemption with a test user.

`BACKUP_DIR` must itself be an off-host filesystem mount point; a subdirectory on
the production root filesystem does not satisfy the backup requirement. After
mounting it, create the sentinel inside the mounted filesystem:

```bash
mountpoint -q /mnt/offsite/zero-one
printf '%s\n' 'zero-one off-site backup target' > /mnt/offsite/zero-one/.offsite-mounted
chmod 600 /mnt/offsite/zero-one/.offsite-mounted
```

The backup refuses to create any directory until both `mountpoint` and the
sentinel succeed, so a dropped mount cannot silently receive local backups. Set
`BACKUP_SENTINEL_FILE` in the scheduler environment to use another single file
name. Create the sentinel only after the remote filesystem is mounted; never
place a copy in the hidden local mount-point directory. A bind mount from the
same server still passes these mechanical checks and is not an off-host backup.

Run restore drills only on an isolated recovery host that has the offline age
identity and Docker. Use the approved PostgreSQL 18 image digest from the release
record, and provide the matching state archive when available:

```bash
RESTORE_AGE_IDENTITY=/secure/offline/zero-one.agekey \
RESTORE_POSTGRES_IMAGE='postgres:18-alpine@sha256:REPLACE_WITH_APPROVED_DIGEST' \
sh deploy/zero-one/restore-drill.sh \
  /mnt/offsite/zero-one/daily/postgres-YYYY-MM-DD.dump.age \
  /mnt/offsite/zero-one/daily/zero-one-state-YYYY-MM-DD.tar.gz.age
```

`restore-drill.sh` verifies both adjacent checksum files, decrypts only into a
private temporary directory, checks the deployment-state archive, and restores
the database with `pg_restore --exit-on-error` into a new random Docker volume.
The temporary PostgreSQL container uses `--network none`, publishes no ports,
never joins the production Compose project and is deleted with its volume on
exit. A successful run reports the number of restored public tables. It cannot
be pointed at the production database because it accepts no database address or
Compose environment file.

The backup destination must be encrypted and outside the production host.
Document the backup encryption key owner and restore permissions separately;
do not place encryption keys, dumps, `.env`, or Provider Account secrets in
this repository.

## Release And Rollback

Before release, record the deployed Sub2API and edge image digests and take a database backup. Deploy immutable images, run the routing and smoke checks, then announce completion.

The approved UI is a separate release boundary. The current protected snapshot
is the `ui-approved-2026-08-25-r7` tag at commit
`a05ae3883d81291adc18a08a03844aed2c09a7e7`. The
`ui-approved-2026-08-24-r6` tag remains immutable as the previous accepted UI.
An upstream version update must not modify `landing/src`, the protected console
source paths, or `deploy/zero-one/recovered-frontend`. This explicitly covers
the landing page, login/register pages, the console shell, model-plaza pricing,
the community entry, Affiliate Attribution, and the redeem, benefit-code, and
mystery-box surfaces. The API and shared type
paths under `frontend/src/api` and `frontend/src/types` remain available for
compatibility work. CI runs `verify-ui-boundary.mjs` and fails before a build if
the protected UI changes or if `Dockerfile.edge` switches away from the pinned
recovered landing and console sources.

Every CI and publish run validates the repository-owned `upstream_sync`
attestation in `.github/upstream-baseline.json`. It binds the previous stable
Tag/commit, the full product commit captured before the merge, and the resulting
two-parent merge commit. The merge must use that product commit as its first
parent and the pinned upstream commit as its second parent, and every
`preserve_on_upstream_sync` file must be unchanged across that merge. Missing,
stale, malformed, self-`HEAD`, or non-ancestor metadata fails closed. Ordinary
feature releases replay the recorded historical boundary and need no optional
workflow input, so omitting an input cannot bypass the publish gate.
The v0.1.178 schema-v3 product manifest predates the preserve registry and is
treated as an empty list for this one bootstrap only. Every schema-v4 successor
must retain all paths protected by its pre-merge product manifest; additions
are allowed, but removing a path during a sync fails the release gate.

To approve an intentional UI release, review desktop and mobile visual
regression output first, commit the reviewed UI, create a new dated
`ui-approved-YYYY-MM-DD[-revision]` tag at that commit, and update
`.github/scripts/ui-baseline.json` with the tag and commit. Do not move the tag
as part of an ordinary upstream sync.

Rollback uses the previous image digests without rolling back the database unless an upstream migration is proven incompatible. Database rollback is a separate destructive operation and must be based on a verified backup and maintenance window.

## Required Smoke Tests

- For releases based on v0.1.182, which adds no database migration beyond the v0.1.181 ledger, confirm `schema_migrations` contains both `226_channel_monitor_quota_mode.sql` and `226_add_usage_log_effective_model_indexes_notx.sql`, followed by `227_composite_routes_add_cn_providers.sql` and `228_channel_pricing_multipliers.sql`, in addition to the existing 221–225 Zero One migrations. Verify the two effective-model indexes are valid and ready, channel multiplier columns are nullable with positive-value constraints, `groups.long_context_pricing_enabled` remains non-null with default `true`, the group auth-cache trigger function still compares both pricing columns, and the Zero One group-and-account long-context billing gate is covered by the release tests.
- Confirm `schema_migrations` contains `229_affiliate_manual_binding.sql`. Verify `user_affiliates.inviter_bound_at`, the no-self-inviter check, and `inviter_bound_by_admin_id` as an immutable audit snapshot without a deleting user foreign key; deleting an administrator must not erase the recorded actor ID. Legacy bound rows must retain their original profile creation time as the backfilled binding time and have no administrator actor.
- Confirm `schema_migrations` also contains `229_plugins.sql` and `230_plugin_artifacts.sql`. Migration identity is the complete filename, so `229_affiliate_manual_binding.sql` and `229_plugins.sql` are separate ordered migrations rather than a numeric-version collision. Verify both plugin tables and the package artifact column exist; no existing user, key, order, usage or affiliate rows may be rewritten by these additive migrations.
- Exercise one dedicated probe API Key after deploy, then verify its hashed Redis `apikey:auth:` entry reports snapshot `version: 20` and carries `long_context_pricing_enabled` plus `model_pricing`. Never print or store the raw API Key or the complete cache document.
- Confirm an omitted `long_context_pricing_enabled` field on a disposable admin group create defaults to `true`, while an explicit `false` remains false; delete the disposable group afterward.
- With disposable users and no production orders, confirm manual Affiliate Attribution accepts only a human JWT administrator and rejects an Admin API Key. When the sensitive-operation step-up policy is enabled, confirm it rejects the operation until a recent TOTP step-up. Also confirm it rejects self/cyclic/second bindings, persists actor and binding time, and treats the retained binding time as a no-rebind tombstone after inviter deletion. Payments from before the binding must remain without rebate; only otherwise-eligible payments after the binding may earn one. Confirm the validity deadline still derives from the invitee affiliate profile creation time.
- For any enabled group-level model card, compare the configured price with one low-cost usage record. Include a long-context boundary check and, when Batch Image or Model Plaza is enabled, verify group-card precedence and an explicit zero-price tier without using a production customer key.
- `GET https://api.01yapi.com/` returns the React page; `POST /v1/messages` reaches API authentication rather than HTML.
- `GET https://api.01yapi.com/dashboard`, `/keys` and `/monitor` return the Approved UI Snapshot, while `/v1/*` continues to reach Sub2API.
- The public-settings release gate passes, and `/admin/settings` shows `frontend_url=https://api.01yapi.com`.
- `GET`, `HEAD` and `POST` requests to representative `app.01yapi.com` paths return non-cacheable `308` responses to the same path and query on `https://api.01yapi.com`; the compatibility host never serves Console or model traffic directly.
- SSE sends its first event promptly and continues without buffering; `/responses` and administrator operations WebSockets upgrade successfully.
- Apex and `www` return `308` while preserving the path and query string.
- Administrator creates a test Redeem Code, a User redeems it once, and a second redemption fails.
