# 零一 API 运维手册

生产主机、SSH、本机私钥路径、持久化目录和原地发布速查见
[`PRODUCTION_SERVER_CN.md`](PRODUCTION_SERVER_CN.md)。私钥正文和任何运行时 secret
不得写入仓库。

## 密码找回发布验收

密码找回同时依赖 `email_verify_enabled`、`password_reset_enabled`、可用的 SMTP
发件配置和正确的 `frontend_url`。生产地址使用 `https://api.01yapi.com`。管理设置
API 的发件地址字段是 `smtp_from_email`，其内部存储键是 `smtp_from`，不可混用。
先通过 `POST /api/v1/admin/settings/test-smtp` 核验连接，再按现有设置保存协议启用
找回；回读设置并确认其他能力、导航和邮件配置保持原值。

本地与 CI 使用同一个完整验收入口：

```bash
npm ci --prefix visual-regression
node deploy/zero-one/test-password-recovery.mjs <candidate-backend-image> <candidate-edge-image>
```

该命令创建独立的 PostgreSQL、Redis、Backend、Edge 和 Mailpit，使用临时测试管理员
与普通用户，通过真实 SMTP 收取邮件，再在固定 Playwright 浏览器中提交重置并验证
链接重复使用、旧密码和旧令牌均被拒绝。测试结束清理本次容器、卷和网络，不连接生产
数据库，也不向外部邮箱发信。连接探测成功不能替代收信与改密流程的验证。

恢复版的两条密码路由从维护中的 Vue 源码生成；更新时运行
`pnpm --dir frontend run build:password-recovery`，再生成 Console 命名空间。
认证入口读取设置期间保持不可提交，关闭能力时不显示可用的找回入口。按错误码显示
中文提示；找回请求的成功响应不透露邮箱是否注册。每个重置令牌必须原子核销。

当前部署身份从运行镜像与本次恢复点读取；过去的发布结果见[历史发布索引](PRODUCTION_SERVER_CN.md#历史发布索引)。

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

## CI Resource Policy

GitHub Actions is used only to build, test, audit and validate this repository.
The [Actions product terms](https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features#actions)
also prohibit unrelated computation and disproportionate resource consumption.
A count of workflow runs is not a compliance certificate or a published safe
usage threshold; review the purpose, execution time and actual runner usage.

The two automatic validation workflows (`Zero One CI` and `Security Scan`)
use the following event boundary:

| Event | Automatic validation |
| --- | --- |
| Pull request targeting `main`, including a new commit on that PR | One run of each validation workflow |
| Push to `main`, including a merged PR | One run of each validation workflow |
| Push to a feature branch without a PR | None; run local checks and open a PR for hosted validation |
| Push of an `ui-approved-*` or other tag | Neither automatic validation workflow |
| Existing manual dispatch | Only the explicitly selected diagnostic or product workflow; not publish evidence |
| Weekly security schedule | `Security Scan` only, with the existing schedule |

`Zero One CI` is the single owner of the product verification work. `backend`
runs the ordinary, unit and integration Go build configurations once each;
`console` runs the full Console suite, including the previous critical subset.
Shell, lint and fixed Playwright 1.55.1 visual validation run in this same
workflow. `Security Scan` independently owns vulnerability checks.

All 12 required check names remain: `shell`, `test`, `frontend`,
`golangci-lint`, `backend-security`, `frontend-security`, `upstream-boundary`,
`landing`, `console`, `backend`, `deployment`, `Chromium visual regression`.
The lightweight `test` and `frontend` jobs explicitly fail unless `backend`
and `console`, respectively, completed successfully. Missing, skipped, failed
or cancelled dependencies must not produce a green compatibility check.
The old `CI` and `Zero One Visual Calibration` workflows are manual-only
diagnostics with distinct `Diagnostic …` job names; they cannot satisfy the
automatic required checks or replace release evidence.

The inherited `Release` and `CLA Assistant` workflows are disabled at the
GitHub workflow level in this product repository. Their source jobs also
require the exact upstream identity `Wei-Shaw/sub2api`, with job-scoped write
permissions and explicit timeouts. Keeping them disabled additionally prevents
an old `v*` tag from executing the historical, less-restricted Release source.
Do not re-enable either workflow as a shortcut. CLA text and historical CLA
records remain unchanged; the two historical skipped runs did not allocate
runner jobs. UI approval tags do not publish images. Product publication is
only through the separately authorized `Zero One Publish` entry point.

Each validation workflow groups concurrency by workflow name, event and PR
number (or ref). A new commit on a PR cancels the superseded run of the same PR
and workflow. Push, scheduled and manual runs are not cancelled by a different
event. For non-PR events, an in-progress run is allowed to finish; GitHub's
default single-pending-slot behavior may replace an older queued run in the
same group. Every job has an explicit time budget. Consult the job's
`timeout-minutes` for its enforced limit; full Go verification, image builds
and visual checks have separate bounded budgets. A timeout is a failed
validation, not permission to remove a test or relax a screenshot threshold.

This consolidation removes both duplicate event triggers and the repeated
backend/critical-frontend computation. PR and post-merge main validation remain
separate because they verify different commits. Do not reduce coverage or
claim a measured runner-minute improvement based only on workflow counts.
All external contributors' fork PR workflows require maintainer approval;
default tokens remain read-only and cannot approve PRs. Review workflow changes
before granting that approval, especially new network access or write scopes.

Publication requires the latest matching automatic **main push** execution of
both product and security workflows for the exact source SHA and repository,
and all expected jobs in their current attempts must have actually completed
successfully. A manual run, a missing/skipped job or a newer failed/pending
execution cannot be replaced by an older green result. The security workflow
is also part of the trusted publish-policy comparison. No workflow success
alone is authorization to publish or deploy.
An incomplete partial-rerun attempt is rejected rather than assembled from
older job attempts; a maintainer must diagnose it before deciding whether
complete verification is warranted. The bounded final reread verifies the
observed state, not an atomic lock against future GitHub reruns. Never start
automatic full reruns or push empty commits merely to satisfy this gate.

Run the offline policy regression together with the existing protection tests:

```bash
node --test .github/scripts/*.test.mjs
```

Use `gh run list/view/watch` and `gh pr checks --watch` to inspect an existing
run. Polling output, jobs and test cases are not additional workflow runs.
Record the workflow run ID and, when available, `run_attempt`; diagnose failures
before an explicit rerun. Do not loop reruns until a check becomes green, push
empty commits to obtain new runners, or run production traffic on CI workers.
Routing tests must retain temporary containers, loopback bindings and cleanup;
TTFT parser tests use fake streams, not a production upstream account pool.

## Upstream Provenance And GitHub Fork Metadata

本产品来源于 `Wei-Shaw/sub2api`，固定基线为
`v0.2.1@578785ee7fb35030b094b69624efe25670a36f5f`。托管迁移保留了完整 Git
历史，且基线是产品 `main` 的祖先。`origin` 指向 `XiaoSiKe/zero-one-api`，
`upstream` 指向原仓库并设置 push URL 为 `DISABLED`；这不改变上游许可证或作者。

2026-08-28 的 GitHub 元数据为 `fork: false`、`parent: null`、`source: null`。
仓库所有者已明确选择保持独立仓库；这是已确认的托管方式，不再列为迁移遗留项。
不请求原生 fork 关联、不删除重建仓库。上游更新继续通过只读 `upstream`、固定基线
和二开保护门禁处理，许可、署名与对应源码义务不因平台 fork 标识而改变。
“来源于上游的下游发行版”与 GitHub 页面上的 “forked from” 是不同概念。
[创建 fork API](https://docs.github.com/en/rest/repos/forks#create-a-fork) 创建新仓库，
[更新仓库 API](https://docs.github.com/en/rest/repos/repos#update-a-repository) 没有
可写的 `fork` / `parent` / `source` 字段。不能通过改 remote、README 或提交作者
声称已完成原生 fork 关联，也不删除重建当前仓库来换取该标识。

只读复核：

```bash
gh api repos/XiaoSiKe/zero-one-api --jq '{full_name,fork,parent:.parent.full_name,source:.source.full_name}'
git remote -v
git merge-base --is-ancestor e8cb019fabf8b55199436229044cbf9aa7a82564 main
git rev-parse --is-shallow-repository
```

只有日后所有者明确改变上述决定，才向
[GitHub Support](https://support.github.com/request/fork) 询问无损关联的可行性；
不能保证平台可转换，也不得把旧咨询草稿当成待自动提交的工单。

GitHub 插件重连应从当前 ChatGPT/Codex 的插件管理界面发起，GitHub 授权页必须显示
`XiaoSiKe`，仓库权限优先仅选择 `zero-one-api`。完成后重新调用插件的 profile/身份
读取接口并确认真实 login，而不是只看 gh 或网页显示名；未核验前禁止插件写入。
不要把个人令牌、OAuth 回调参数、密码或验证码复制到聊天、仓库或运维日志。
此次插件重连已核验实际登录名为 `XiaoSiKe`，仓库与 PR 读取通过；没有为了验证
写权限而制造空提交或测试 PR。现有 GitHub App 安装选择的是 **All repositories**，
覆盖当前三个项目及未来仓库；由于同一安装还服务其他项目，本次保留该范围，不能
写成“只授权了 zero-one-api”。如果日后收窄，应由所有者先确认其他项目的依赖。

## License Delivery And Use Boundaries

根 `LICENSE` 保留上游 LGPLv3 原文。`COPYING.GPLv3` 是 LGPLv3 的配套 GPL 正文，
不是把产品改为 GPL-only；随相关对象码交付两份许可文本，依据
[GNU 的许可文件说明](https://www.gnu.org/licenses/gpl-howto.en.html#license-files)。
`THIRD_PARTY_NOTICES.md` 和两个一致的公开 Landing NOTICE 保留 React Bits 的
MIT + Commons Clause，并补上实际恢复版使用的 React/ReactDOM/Scheduler MIT、
Lucide 的 ISC 与 Feather MIT 部分，以及 OGL 的 Unlicense。

根 Dockerfile、`deploy/Dockerfile`、GoReleaser runtime 镜像、Edge 镜像和
GoReleaser archives 均声明携带这三份根级材料。镜像文件位于
`/usr/share/licenses/zero-one-api/`，Landing 的通知继续通过已有
`/_landing/THIRD_PARTY_NOTICES.txt` 每次重验证（`Cache-Control: no-cache`）路由提供，
不改变批准基包的脚本、样式和布局。
根 `.dockerignore` 只为 `THIRD_PARTY_NOTICES.md` 增加具名例外。
以 `backend/` 为独立构建上下文的开发 Dockerfile 不属于本产品发布路径，不能据此
开发镜像冒充上述正式交付。修改许可附件同样遵循 UI 路径门禁和永久保留规则。

发布前还需提供与对象码相匹配、可重建的对应源码和修改记录，保留适用的替换/重链接
权利及第三方通知；公开仓库或附带许可证本身不是完成全部许可义务的证明。
本次只修复已确认的文本与打包缺口，不是 Console/Go 全部传递依赖的穷尽许可审计，
也不是商业用途的法律意见。若把 React Bits 组件或其价值作为收费产品交付，应另行
核对 Commons Clause 的适用边界或取得许可，不能将其简写成“不受限制的 MIT”。

开源许可不等于上游模型服务的转售、账号共享或规避风控授权。使用 Provider Account
前，应保留来源、API 使用及转售范围的授权证明，并按实际供应商当前协议核对；没有
授权的资源不应接入。不要利用 Actions 承载线上中转流量、持续号池探测、挖矿、刷量
或规避平台限制。账号封禁原因只能以平台通知/申诉结果确认，代码检查不能作出保证。

### Docker build-context isolation

正式镜像继续只从经过门禁的干净 Git checkout 构建。额外的 `.dockerignore` 防线
递归排除 `.env` 与 `.env.*`，仅具名保留根、`deploy/` 和 `deploy/zero-one/` 下的
`.env.example`；生产 `deploy/zero-one/state/`、`.release-backups/` 与
`.release-builds/` 也不能成为构建输入。不要以 `.gitignore` 的匹配语义推断 Docker
会递归排除同名文件，也不要把密钥、数据库或私有备份发送给远程 builder。

`sh deploy/zero-one/test-build-context.sh` 使用纯合成上下文、`FROM scratch`、无 RUN、
无网络和本地导出，验证 19 个排除路径及 15 个必需输入；不读取实际环境文件或状态。
旧规则下 13 个合成敏感路径暴露于上下文，修补后全部排除，许可证、法律文档、模板
和恢复 UI 资源仍保留。该测试加入现有 `deployment` job，不新增工作流或触发入口。
新脚本已精确登记永久保留，清单增加至 441 项，Overlay 仍为五类。
这次发现是未来工作目录构建的风险，不能据此声称此前干净 CI 构建已泄露信息。

可选 `compose.production-baseline-preview.yml` 原先仍固定旧账号 v0.1.179。
当前已更新为下面这次实际发布/部署的 v0.1.183 Backend digest，并同步精确 Compose
断言；仍由最后一层 overlay 清除开发 `build`，保留回环绑定，不使用浮动 tag。
该变更没有启动本机预览，也不连接生产数据库；旧 v0.1.179 的源码/镜像记录仍属于
历史证据，不把不可访问的旧 registry 地址机械改成新 owner。

## Release And Rollback

### 发布前提与数据边界

1. 目标必须是已合并的 main SHA，满足上文 [CI Resource Policy](#ci-resource-policy) 的完整产品/安全工作流证明；PR 成功不能替代 main push 成功。
2. 记录实际运行的四个镜像、Backend/Edge OCI revision、容器身份、持久化挂载、业务配置哈希、数据库大小与完整文件名迁移账本。服务器 checkout HEAD 不能替代镜像来源。
3. 创建本次受限恢复点，按 [Backup And Recovery](#backup-and-recovery) 加密 PostgreSQL、Redis 与部署/应用/证书状态，保存生产机之外的校验一致副本。实际恢复数据库，再用目标 Backend 演练迁移和旧镜像回滚；只执行 `pg_restore --list` 不算恢复成功。
4. 检查目标双镜像来源一致、主机架构、磁盘余量、备份和回滚材料；生产不构建镜像、不改业务密钥，不更新 PostgreSQL/Redis 版本或挂载。

### 原地升级

- 完整使用生产环境文件和 Compose 文件，路径见[主机速查](PRODUCTION_SERVER_CN.md#生产目录与-compose)。保留全部 ignored/untracked 恢复材料，禁止 `git clean` 和删除数据卷。
- 先 fetch 和核对目标 SHA，拉取并验证同源双镜像；此时不切换源码、不改 `.env`。在任何变更前启用分阶段回滚：Backend 未重建时恢复 source/env，重建后还必须恢复兼容旧镜像并验证健康。
- 在短时维护窗口停止接受新写入，排空已接受的模型请求、账单提交和可安全停止的后台工作。五分钟内无法安全排空则取消切换并恢复接流量，不强行杀掉仍有未结算请求的进程。
- 在稳定写入边界记录核心数据/主键/财务汇总，保存本次最终备份。逐项核对迁移后的原有业务列；新增列和明确授权的派生统计变化单独记录。
- 用 `git switch --no-overwrite-ignore --detach <TARGET_SHA>` 切换源码，只更新 `SUB2API_IMAGE`。执行 `docker compose ... up -d --no-deps --no-build --pull never --force-recreate --timeout 30 sub2api`，等待真实健康、鉴权、迁移和数据检查；证明 PostgreSQL、Redis、Edge 容器未被替换。
- Backend 通过后按下节唯一入口切换匹配的 Edge，完成[业务烟测](#required-smoke-tests)后恢复接流量，至少观察 30 分钟。只能使用专用测试身份，不能借用客户 Key，不能把匿名 401 当作受控模型调用验收。

### 应用回滚

回滚使用**本次发布前恢复点**的源码、兼容双镜像及环境副本，保持业务密钥、挂载和数据库不变。恢复后重做路由、登录、API 和核心账单检查。已接受的新写入不得被旧 dump 覆盖；数据库恢复只用于已确认数据库损坏的独立恢复流程。

成本声明迁移是增量：保留旧汇总列及约束，新版本使用独立上游成本列和匹配的计算时间。旧镜像重写汇总后，新版本会将陈旧上游成本视为待确认。完整口径见 [ADR 0010](adr/0010-admin-billing-finance-and-date-panels.md)。

### Safe Edge switch

After the Backend-first checks pass, Edge must be switched only through the
repository-owned gate:

```bash
sh deploy/zero-one/safe-edge-switch.sh \
  deploy/zero-one/.env \
  ghcr.io/xiaosike/zero-one-edge@sha256:<64-lowercase-hex-digest>
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

The approved UI is a separate release boundary. The current immutable tag and
commit are recorded only in `.github/scripts/ui-baseline.json`; do not duplicate
that mutable pointer or its test totals in this manual. All previous
`ui-approved-*` tags remain immutable, and the required Chromium visual
regression job owns the corresponding desktop/mobile evidence.

Visual fixtures must obtain the displayed server version from
`backend/cmd/server/VERSION` and must fail when it differs from the release in
`.github/upstream-baseline.json`. A visual test must not handwrite or override a
semantic server version. `visual-regression/tests/version-baseline.spec.ts`
enforces both rules across the complete visual test tree. This prevents an old
fixture version, such as 0.1.177, from silently returning in later screenshots.
The earlier native Linux evidence remains historical in
[GitHub Actions run 33180357784](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33180357784)
and [GitHub Actions run 33104422137](https://github.com/01-Yang/zero-one-api/actions/runs/33104422137).
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

## Required Smoke Tests

- For v0.2.1, verify the four additional migration filenames and migration-only release sequence documented in [the upgrade contract](upgrades/v0.2.1.md). Preserve `234_upstream_declared_usage_cost.sql`; verify the new request-ID index is valid and old business-column fingerprints are unchanged before starting workers.

- For releases based on v0.2.0, confirm `schema_migrations` contains both `226_channel_monitor_quota_mode.sql` and `226_add_usage_log_effective_model_indexes_notx.sql`, followed by `227_composite_routes_add_cn_providers.sql`, `228_channel_pricing_multipliers.sql`, the existing 229–230 product/plugin migrations, all three 231 migrations, `232_channel_cache_write_1h_pricing.sql`, `232_group_force_openai_fast.sql`, `232_group_reasoning_effort_over_limit.sql`, and `233_group_free_openai_fast.sql`; migration identity is the complete filename. Verify `usage_logs.native_compaction_v2` is non-null with default `false`, `usage_logs.requested_reasoning_effort` remains nullable, `users.restrict_public_groups` is non-null with default `false`, all four `cache_write_1h_price` columns remain nullable, both Fast flags default to `false`, and `groups.max_reasoning_effort_over_limit` defaults to `downgrade`. Also verify the effective-model indexes, nullable positive channel multipliers, `groups.long_context_pricing_enabled=true`, the group auth-cache trigger, and the Zero One group-and-account long-context billing gate.
- Confirm `schema_migrations` contains `229_affiliate_manual_binding.sql`. Verify `user_affiliates.inviter_bound_at`, the no-self-inviter check, and `inviter_bound_by_admin_id` as an immutable audit snapshot without a deleting user foreign key; deleting an administrator must not erase the recorded actor ID. Legacy bound rows must retain their original profile creation time as the backfilled binding time and have no administrator actor.
- Confirm `schema_migrations` also contains `229_plugins.sql` and `230_plugin_artifacts.sql`. Migration identity is the complete filename, so `229_affiliate_manual_binding.sql` and `229_plugins.sql` are separate ordered migrations rather than a numeric-version collision. Verify both plugin tables and the package artifact column exist; no existing user, key, order, usage or affiliate rows may be rewritten by these additive migrations.
- Exercise one dedicated probe API Key after deploy, then verify its hashed Redis `apikey:auth:` entry reports snapshot `version: 23` and carries `long_context_pricing_enabled`, `model_pricing`, both Fast flags, the reasoning over-limit policy and `codex_models_manifest_config`. Never print or store the raw API Key or the complete cache document.
- Confirm an omitted `long_context_pricing_enabled` field on a disposable admin group create defaults to `true`, while an explicit `false` remains false; delete the disposable group afterward.
- With disposable users and no production orders, confirm manual Affiliate Attribution accepts only a human JWT administrator and rejects an Admin API Key. When the sensitive-operation step-up policy is enabled, confirm it rejects the operation until a recent TOTP step-up. Also confirm it rejects self/cyclic/second bindings, persists actor and binding time, and treats the retained binding time as a no-rebind tombstone after inviter deletion. Payments from before the binding must remain without rebate; only otherwise-eligible payments after the binding may earn one. Confirm the validity deadline still derives from the invitee affiliate profile creation time.
- For any enabled group-level model card, compare the configured price with one low-cost usage record. Include a long-context boundary check and, when Batch Image or Model Plaza is enabled, verify group-card precedence and an explicit zero-price tier without using a production customer key.
- `GET https://api.01yapi.com/` returns the React page; `POST /v1/messages` reaches API authentication rather than HTML.
- `GET https://api.01yapi.com/login`, `/register`, `/dashboard`, `/keys` and `/monitor` return the Approved UI Snapshot. `/register` reaches the real `RegisterView` instead of an empty document: enabled registration shows the `创建账户` form and disabled registration shows its native disabled state. `/v1/*` continues to reach Sub2API.
- The public-settings release gate passes, and `/admin/settings` shows `frontend_url=https://api.01yapi.com`.
- `GET`, `HEAD` and `POST` requests to representative `app.01yapi.com` paths return non-cacheable `308` responses to the same path and query on `https://api.01yapi.com`; the compatibility host never serves Console or model traffic directly.
- SSE sends its first event promptly and continues without buffering; `/responses` and administrator operations WebSockets upgrade successfully.
- Apex and `www` return `308` while preserving the path and query string.
- Administrator creates a test Redeem Code, a User redeems it once, and a second redemption fails.
