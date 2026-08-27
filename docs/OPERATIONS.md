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

### Safe Edge switch

After the Backend-first checks pass, Edge must be switched only through the
repository-owned gate:

```bash
sh deploy/zero-one/safe-edge-switch.sh \
  deploy/zero-one/.env \
  ghcr.io/01-yang/zero-one-edge@sha256:<64-lowercase-hex-digest>
```

The script accepts only an immutable digest, locks concurrent releases, saves a
restricted `.env.before-edge-*` rollback copy and changes only `EDGE_IMAGE`. It
recreates Edge with `--no-deps --no-build`, proves that Sub2API, PostgreSQL and
Redis keep the same healthy container identities, and waits up to 90 seconds
for the canonical HTTPS health endpoint through local port 443. Container
`running` alone is never readiness. Pull, recreation, dependency-isolation or
HTTPS failures restore the previous digest and require the old Edge to pass the
same HTTPS gate; a failed rollback is reported separately. Do not replace this
entrypoint with a direct `docker compose up edge` during a release.

The approved UI is a separate release boundary. The current protected snapshot
is the `ui-approved-2026-08-27-r17` tag at commit
`108d3d6865889416a00807d49d6567f88a2e777f`. The
`ui-approved-2026-08-27-r16` tag remains immutable as the previous accepted UI.
An upstream version update must not modify `landing/src`, the protected console
source paths, or `deploy/zero-one/recovered-frontend`. This explicitly covers
the landing page, login/register pages, the console shell, model-plaza pricing,
the community entry, Affiliate Attribution, online recharge and custom-page
loading, and the redeem, benefit-code, and mystery-box surfaces. The API and shared type
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

The safe Edge switch performs its own application rollback. Other application
rollback uses the previous image digests without rolling back the database
unless an upstream migration is proven incompatible. Database rollback is a
separate destructive operation and must be based on a verified backup and
maintenance window.

## 导航与加载修复验收（2026-08-27）

本次工作只提交源码、恢复快照及保护记录，不自动发布镜像或变更生产服务器。
后续上线仍须遵循同一提交构建 Backend/Edge、Backend-first 和现有安全切换流程。
轻量导航接口先随 Backend 就绪，再切换使用它的 Edge；管理员完整设置编辑接口保持兼容。

- 管理员导航使用 `GET /api/v1/admin/settings?scope=navigation`，只返回九个导航字段；
  不读取或返回 Logo、二维码原图和支付配置。普通设置编辑仍使用完整 GET/PUT。
  多个导航消费者共享读取并沿用现有令牌续期，支付请求慢或失败不能阻塞菜单；保存成功值不能被先前请求覆盖。
- 验证仪表盘第一、折叠组及子菜单整体排序、模型广场、自定义菜单和邀请返利路径别名。
  保存、刷新、简洁模式、手机侧栏、折叠与路由切换后，实际顺序和键盘顺序应一致；空闲时无持续重排。
- 二维码只在点击后逐次鉴权，响应保留 `no-store` 和 `nosniff`。服务内缓存只复用已校验
  内容，最多 16 项、5 MiB；每次读取当前配置并重新判断角色，撤权、删除、换图、读取失败均不得绕过。
  测试关闭取消、重新打开、损坏图片和下载／解码超过 15 秒后重试，确认 Blob URL 被释放。
- 测试 iframe 先于菜单元数据完成、同 ID 修改名称和 URL、快速切换以及重试后的旧事件。
  15 秒慢加载提示不代表失败或成功；重试创建新代次，迟到成功清除提示，新窗口入口仍可用。
  不预加载外部页面，不把第三方网络耗时记为站内性能改善。
- 公共设置与首屏注入对支持的栅格 Logo 使用带版本号的同源 URL；后台保留原图编辑值。
  Console 原有 SVG data URI 保持兼容，但不得将 SVG 放入同源图片端点白名单，Landing 规则不变。恢复版 HTML
  从 328,002 字节降到 5,137 字节（98.43%），不再内嵌约 323 KB Logo。
  同一 1024 像素二维码服务基准：冷缓存约 0.917–1.053 ms/op、1.135 MB/op；
  热缓存约 12.18–12.65 µs/op、29.4 KB/op。该数据只衡量服务处理，不包含外网传输。

每次发布前回放 Console/Landing 全量测试、Go ordinary/unit/integration、lint/security、
固定 Playwright 1.55.1 镜像的全部视觉与交互用例、保护清单、资源闭包、Compose 和双镜像路由测试。
测试内明确选择跳过的外部探测应单独列出，不得把缺少凭据或环境的测试写成已执行通过。
截图仅在审核实际差异后更新；先创建新的不可变 UI 批准标签，再更新基线清单，保留旧标签。

## 兑换码与首 Token 加固验收（2026-08-28）

本轮仅交付源码、恢复版 Console、测试与保护记录；没有自动发布镜像或修改生产配置。
后续上线继续遵循同源码双镜像、Backend-first、备份与安全 Edge 切换流程。
本轮无新增数据库迁移，不回填历史奖励或用量；领域约定见 ADR 0008。

- 福利码与盲盒码每码一次、每用户每批一次；管理员不能通过启用、过期或删除
  清除领取证明。核销与管理操作在真实 PostgreSQL 中并发回放，检查实际奖励、余额
  和 used/by/at 不回退。批量删除按实际 affected rows 计数，数据库错误不得显示成功。
- 正整分奖励范围为 0.01–999999999999.99，盲盒可使用等值上下限；普通余额码、订阅码、
  邀请码与既有累计充值语义不变。福利与盲盒不参与邀请返利。
- Redis 错误窗口从首次错误起一小时、最多 20 次，后续错误不延长窗口；旧 24 小时
  或永久 TTL 收敛到一小时但保留计数。锁键不包含明文兑换码，过期旧请求不能释放新租约。
- 兑换已成功而用户资料、历史或订阅读取失败时，显示成功并提供只读刷新。
  请求结果不明时核对历史，不自动重新核销。测试初始慢历史请求不能覆盖兑换后的记录。
- API Key 使用时间使用独立 1-worker、1024-Key 有界待办队列：排队期间合并最新时间，
  执行中的新触达沿用本次写入的防抖窗口；成功 30 秒防抖、失败 5 秒退避、SQL 预算 10 秒。
  队满不回退同步写库。鉴权、额度和账单仍按原规则执行。
  相同 Linux ARM64 / Go 1.27 / 2 CPU 的离线 fixture，将元数据数据库延迟固定为 20 ms，
  每轮 20 个新 Key、重复三轮：基线 `83495fcf7` 的请求路径为 21.426–22.439 ms/op，
  异步实现的提交路径为 441.6–718.8 ns/op。后台写入仍需原来的 20 ms；这只证明
  元数据 SQL 已离开关键路径，不代表真实模型或外网首 Token 提速同等幅度。
- HTTP 访问日志新增 `gateway_timing_version=1`、`gateway_auth_ms`、`user_queue_ms`、
  `account_queue_ms`、`account_selection_ms`、`upstream_headers_total_ms`、
  `retry_backoff_ms`、`upstream_attempts`，有输出时才写 `gateway_first_output_ms`。
  它们是阶段计时，不应将“整个流时长减响应头等待”称为本站开销。
- 新用量的 `first_token_ms` 是鉴权前入口到首个有效完整事件写出并 flush 的时间；
  `duration_ms` 使用同一请求起点。调度器仍使用原单次 attempt 指标。
  此统计口径可能比旧值更大，不代表性能回退；上线时间必须记录，不能直接混合新旧分布。
  WebSocket 保留逐 turn 指标；外网客户端到屏时延仍须客户端测量。
- 对启用流闲置预算的 HTTP 路径，客户端断开及时释放用户槽位，账户槽位等到上游结束
  或按原闲置配置回收后释放。配置显式为 0 时保留既有取消释放行为，不隐式增加阈值。
  不修改并发额度、粘性、重试次数或 Caddy SSE flush 配置。
- `benchmark-ttft.mjs` 使用完整 SSE 事件并单独统计失败；`success_rate` 为 0–1，
  `ttft_ms` 仅含有效成功样本，包含 P50/P90/P95/P99。流内失败或无终止帧不得计为成功。
  离线回归使用假上游；任何未来生产探针另行授权并使用专用限额密钥。

恢复版 Console 使用 `redeem-ttft-20260828` 资源命名空间，旧 alias 保留。
发布前必须运行新的桌面／移动兑换行为用例、source/recovered 一致性测试与原视觉门禁。
不得以新截图覆盖差异、放宽阈值或把缺少外部条件的用例计为已执行通过。

## Required Smoke Tests

- For releases based on v0.1.183, which adds no database migration beyond the v0.1.181 ledger, confirm `schema_migrations` contains both `226_channel_monitor_quota_mode.sql` and `226_add_usage_log_effective_model_indexes_notx.sql`, followed by `227_composite_routes_add_cn_providers.sql` and `228_channel_pricing_multipliers.sql`, in addition to the existing 221–225 Zero One migrations. Verify the two effective-model indexes are valid and ready, channel multiplier columns are nullable with positive-value constraints, `groups.long_context_pricing_enabled` remains non-null with default `true`, the group auth-cache trigger function still compares both pricing columns, and the Zero One group-and-account long-context billing gate is covered by the release tests.
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
