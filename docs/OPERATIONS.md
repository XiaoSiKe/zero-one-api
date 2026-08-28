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

## Repository Access Incidents

If GitHub reports an account suspension, stop remote pushes, repository
creation, image publication and Actions dispatches. Preserve local commits,
tags and diagnostic records, and use the official
[appeal and reinstatement process](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement)
to clarify access or an authorized migration. Successful login to another
account is not evidence that the restriction has been lifted.

Account changes must not rewrite upstream authorship, licenses, historical
commit authors or old CI evidence links. Existing production image digests
describe what is actually deployed; do not replace their registry owner with
an unverified destination or imply that images have been published there.
Repository identity changes and their credentials remain separate from
production deployment and require an explicit, verified destination.

## Repository Hosting Migration (2026-08-28)

本次经仓库所有者确认已获 GitHub 允许后，迁移目标为
[`XiaoSiKe/zero-one-api`](https://github.com/XiaoSiKe/zero-one-api)。
`XiaoSiKe` 是登录名，`01-Yang` 只是显示名，不能用显示名推导 API、remote 或 GHCR 路径。

| 配置 | 迁移目标或边界 |
| --- | --- |
| 产品 `origin` | `https://github.com/XiaoSiKe/zero-one-api.git` |
| 上游 `upstream` | 保持 `Wei-Shaw/sub2api`，仅允许读取 |
| 后续 Sub2API / Edge 发布 | `ghcr.io/xiaosike/zero-one-sub2api` / `ghcr.io/xiaosike/zero-one-edge`，须独立发布授权 |
| 历史证据 | 旧 PR、Actions run、提交作者、许可证及已部署镜像摘要保留原归属 |
| 生产环境 | 本次不发布镜像、不部署服务器、不替换线上 `.env` 或业务密钥 |

迁移按以下顺序验收，不把导入已有标签当作新版本发布：

1. 核验 CLI 的实际登录名和目标仓库；Git 提交身份单独核验，不按仓库名重写
   历史作者，也不批量覆盖其他项目的全局凭据。
2. 在首次导入分支与历史标签前，临时禁用目标仓库 Actions，避免已有 `v*` 标签
   触发继承的版本发布工作流。逐项比对产品提交、上游基线、受保护 UI 标签及祖先关系，
   不强推或移动旧标签。
3. 核验目标仓库 Actions 权限、默认分支、分支保护/规则集、必需检查、Environment、
   Secrets/Variables、deploy key、webhook 和 GHCR 包权限。新建仓库不会自动继承这些
   元数据；只配置实际需要且已授权的项目，密钥值不写入 Git、日志或迁移报告。
4. 导入核对完成后恢复验证工作流，以 PR 运行完整门禁。临时停用仅用于历史导入，
   不能替代 CI，也不得通过跳过测试、降低截图阈值或关闭保护来合并。
5. 所有必需检查通过后使用 merge commit 合入 `main`，核验合并后的 CI、
   本地/远端提交和保留标签一致；不自动启动 `Zero One Publish` 或生产部署。

本地已补齐完整 Git 历史，连通性和缺失对象检查通过。首次原子导入的 5 个分支、
65 个标签已逐项核对一致，导入期间目标 Actions 运行数为 0；导入后已恢复验证。
`origin` 与本项目的 gh 默认仓库均为 `XiaoSiKe/zero-one-api`，GitHub CLI 与 Git
提交身份已核对为新账号，`upstream` 仍禁止推送。

目标仓库默认分支为 `main`，只使用 merge commit；`main` 已要求 12 项原有检查、
PR 和会话解决，管理员同样受保护，禁止强推/删除。规则集
`Zero One immutable UI approvals`（ID `21721172`）禁止更新/删除 `ui-approved-*`，
不配置绕过者。Actions 默认令牌为只读且不能批准 PR；Secrets、Variables、
Environment、deploy key 和 webhook 均未从旧账号复制，也没有为迁移添加私密值。

迁移候选 `6962df85d86c4719ebc97abc8610cebb77b9618f` 已在新仓库通过
[原生 Linux x86 视觉验收 33159665998](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33159665998)：
145 项通过、65 项既有平台排除，账号链接 2 项与兑换行为 44 项实际执行。
迁移快照为 `ui-approved-2026-08-28-r2`，旧标签均保留。合并与合并后 `main` 检查的
最终执行记录集中在[迁移 PR #1](https://github.com/XiaoSiKe/zero-one-api/pull/1)，
以该 PR 的实际 merge commit 和必需检查结论为准；候选视觉通过不等于 PR 已合并。

历史导入提示上游早期提交曾包含 59.23 MB 的 `backend/repository.test`；该文件
已在上游历史中删除，当前版本未跟踪。本次没有为消除提示改写历史或移动标签。
本机 Backend 构建曾被 Docker Hub 认证 POST 的 EOF 阻断，不能记为本地构建通过；
完整双镜像构建仍由原始 CI 门禁验证，不通过删除构建步骤或循环重试取得绿灯。

Codex/ChatGPT 的 GitHub 插件 OAuth 与本机 gh 凭据相互独立。每次切换账号都要
分别核验身份；插件身份不匹配时不经该插件写入。仓库或 Git 配置不能替代插件的
重新授权，不在文档或 Git 中复制个人令牌。

## Upstream Provenance And GitHub Fork Metadata

本产品来源于 `Wei-Shaw/sub2api`，固定基线仍为
`v0.1.183@e8cb019fabf8b55199436229044cbf9aa7a82564`。托管迁移保留了完整 Git
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

### 2026-08-28 hardening validation

许可交付候选 `5c442ee1fb8cf1d7c92f0ff4c25da9fe139cb463` 通过
[原生 Linux x64 视觉执行 33164525502](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33164525502)，
attempt 1：145 项通过、65 项既有平台排除、0 失败/flaky/retry；兑换行为 44 项与
仓库链接 2 项全部实际执行。Playwright 固定 1.55.1，配置、PNG、测试与 r2 无差异，
没有放宽全局或既有具名用例阈值。成功用例配置为 only-on-failure 截图，因此该次
artifact 是 HTML 报告，不能把现有批准基准 PNG 冒称为新下载的实际截图。

完成桌面/移动基准复核后新增不可移动 `ui-approved-2026-08-28-r3`，指向该候选；
r17、r1、r2 及旧标签不移动。新增/修改文件进入永久清单后为 440 项，Overlay 仍为
五类。正式 PR 与合并后 main 仍须通过全部 12 项必需检查，候选视觉通过不代替它们。

本地 Console 1801 项、Landing 114 项全量通过（均 0 fail/skip），类型检查、构建及
Landing audit 通过。104 项脚本策略测试、18 项 TTFT 工具测试、actionlint 1.7.12、
Compose/路由/资源闭包通过；Backend 与 Edge 实际构建成功，镜像内许可文件哈希
一致。上次迁移中的 Docker Hub 认证失败仍作为历史记录保留，不改写成当时通过。
本次未改变 Backend 业务代码；新的自动产品 CI 还必须分别执行 Go ordinary、unit、
integration 配置，安全扫描独立运行，不把以前的通过记录计为本次已执行。

随后[加固 PR #2](https://github.com/XiaoSiKe/zero-one-api/pull/2) 已使用 merge commit
合并为 `e245f86c19eca2c8820f29b7b5167409f9f47ea2`。该 SHA 的自动 main push
[Zero One CI 33166064227](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33166064227)
与 [Security 33166064241](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33166064241)
均在 attempt 1 成功，全部 12 项必需检查实际通过，且要求检查绑定 GitHub Actions
App `15368`。ordinary/unit/integration 的包级结果不能换算成实际测试用例或跳过数。

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

### Authorized production namespace cutover (2026-08-28)

所有者选择保持独立仓库，并授权继续完成新账号镜像与生产迁移；这属于源码迁移
完成之后的独立运维阶段，不改写前述“当时未发布/部署”的历史事实。
[发布 33172188926](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33172188926)
仅 dispatch 一次、attempt 1 成功，源码固定为已通过 main 自动门禁的
`e245f86c19eca2c8820f29b7b5167409f9f47ea2`，没有因本次文档和构建上下文修补重复发布。
两包在 GitHub 页面实际为 Public；匿名 index/amd64+arm64 manifest/config、SBOM 与
provenance 的内容校验以及生产 amd64 全层 pull 均通过，没有在生产保存个人 PAT。
这些校验不是独立签名认证或 arm64 运行测试；本次只读取到包已为 Public，未执行可见性修改。

已部署的不可变 index digest：

```text
ghcr.io/xiaosike/zero-one-sub2api@sha256:7c008a49a58b26a4ebc4caf842d6f1251b4b0f11d8993d202b2b9c23caea3a58
ghcr.io/xiaosike/zero-one-edge@sha256:6ca66c891d78466ce2e4f653cbe751cbd1b2aa01ec9579c48ee85a90db19a9aa
```

先创建加密异机恢复点，再在维护机无网络、无端口、独立卷的 PostgreSQL 18 中实际
恢复。100 张表、274 条账本与六项业务表计数逐项一致；候选 SQL 的 274 个 checksum
也全部精确匹配，未使用兼容例外。四份旧镜像的 amd64 OCI 摘要链验证了 48 个 blob，
保留旧缓存和加密归档，不假设旧账号 registry 可继续访问。首次临时检查器曾混淆
index Image ID 与 config digest，修正为完整链校验后才继续；没有跳过失败或加载
镜像覆盖本机标签。Redis RDB 和文件状态各有采集时点，不声明跨存储原子快照。

Backend 于 `2026-08-28T13:31:45.039332802Z` 启动、`13:31:50Z` 健康；随后通过
仓库 `safe-edge-switch.sh` 完成 Edge 切换（启动于 `13:34:31.368148287Z`），HTTPS
readiness 通过。仍为 v0.1.183，数据服务容器/镜像/挂载不变，只修改两个产品镜像
字段与本项目 Git remotes/source；业务 `.env` 哈希不变，无 SQL/业务密钥/号池配置变更。
新请求级 TTFT 统计口径从该 Backend 启动时间起生效，不能与旧 attempt 口径混合比较。

线上 20 项匿名检查共发出 20 个请求，没有重试或跟随重定向，核对了公开设置、
HTML/新兑换资源/通知文件哈希、缓存边界、无 Key JSON 401 和兼容跳转。临时检查器
最初误用管理 API 的数字错误码；实际网关 `middleware.ErrorResponse` 使用字符串
`API_KEY_REQUIRED`。保留原失败记录，并用源码产生的完整错误体 SHA-256 与原响应
匹配后纠正结论，只续做未执行的十项检查，不重放先前请求。匿名 401 不证明真正的
SSE/WebSocket upgrade；生产登录/核销/扣费探针未执行，不能计入本次主动验收。
只读日志/用量另观察到新后端的一条成功可见输出请求及新阶段字段，没有读取客户 Key。

两份实际运行镜像中 LGPL/GPL/NOTICE 的 SHA-256 与源码一致；桥接服务保持 active，
容器内健康可达。`18181` 仅监听 Docker host-gateway，UFW 仅放行网关子网，
没有该端口的公网 NAT 映射，服务器连接自身公网地址被拒绝。维护机的公网 HTTP
探测未收到响应；其路由经过 TUN 代理，因此毫秒级 TCP connect 成功不能当成
服务端公网开放的证据，也不把该测试写成独立直连网络的端到端验证。
完整恢复点、容器时间、上一组真实摘要及剩余边界见
[`PRODUCTION_SERVER_CN.md`](PRODUCTION_SERVER_CN.md#当前生产基线2026-08-28)。
当前没有配置 off-host 日备份挂载/定时任务；本次已验证的一次性加密异机备份不能
替代它。恢复私钥留在维护机，临时明文 staging 已清理，历史恢复材料不动。

### Visual fixture diagnosis during migration acceptance

PR #3 首轮 head `356ef1abe3e43fee714be935f0305dcfcbd071d7` 的
[产品 CI 33177554336](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33177554336)
与 [Security 33177554324](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33177554324)
均为 attempt 1、12 项必需 job 绿色，但逐项视觉报告实际为 **144 passed、1 flaky、
65 skipped**。原导航用例经既有 Playwright `retries: 1` 后通过，不等于测试全部
首次通过；44 个兑换用例实际均首次通过、0 skip/retry。原日志、trace、截图及失败
结论均保留，没有将它们改写成干净的 145-pass 记录。

按先复现后修复的诊断流程，捕获到白屏前 Keys/Usage/DataTable 的 `.map`、`.length`
类型错误。两个 GET `/keys`、`/groups/available` 在测试中缺少显式 fixture，落入
成功的 `data: {}`；真实后端分别返回分页对象和数组。只补这些只读空 DTO：
keys 的 `items: []、total: 0、pages: 1`，以及 groups 的 `[]`，不改生产 API 或 UI。
原 160ms 帧测试、全部断言、PNG、阈值及 retry 配置均不变。

隔离的 Playwright 1.55.1 Linux ARM64 反馈环中，旧 fixture 三次运行有一次失败，
且三份 trace 全部含 4–6 条类型错误；仅修改两个 DTO 后六次均通过，六份 trace
均无运行错误。新增真实页面请求的 DTO/零渲染错误回归先在桌面、移动端各失败一次，
再在修复后各通过一次，0 skip/retry。本机结果用于因果复现，不代替原生 Linux x86
的完整像素验收。两处测试文件本来就在永久清单和受保护快照中，必须经新的候选
视觉验收与不可移动批准标签更新，不能添加目录豁免来绕过保护。

修复候选 `d5e4b4cc70e733ede2d1dab61fecdab510b1be19` 已通过
[原生 Linux x64 验收 33180357784](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33180357784)，
attempt 1：147 passed、65 原有 skipped、0 flaky/unexpected/global error；147 个实际
执行案例均只有一条 `retry=0` 的 passed 结果。新增桌面/移动 DTO 回归、原导航用例及
44 个兑换案例全部首过，65 个排除项与旧报告逐项一致，没有删除旧用例。
据此新增不可移动 `ui-approved-2026-08-28-r4`，r3、r2、r1、r17 和其他旧标签不动。
R4 与 r3 的 Frontend、Landing、恢复版 UI 资产逐文件一致，变化仅为测试契约与回归，
不需要为此重新发布镜像。两个改动文件均在原永久清单中，仍为 441 项；正式 PR 与
合并后 main 必须再通过精确提交的完整门禁，候选校准不是最终合并许可。

运行镜像源码与运维 checkout 应分别记录。仅包含测试、文档、构建上下文及预览
防护的后续 main，可在核对应用源码/运行资源无差异后同步到生产工作目录，以便
新的 `.dockerignore` 和操作手册实际生效；这不授权重建容器、修改 `.env` 或把
新 checkout SHA 冒称为已发布镜像的构建 SHA。运行镜像仍以 OCI revision/digest 为准。

## Release And Rollback

Before release, record the deployed Sub2API and edge image digests and take a database backup. Deploy immutable images, run the routing and smoke checks, then announce completion.

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

The approved UI is a separate release boundary. The current protected snapshot
is the `ui-approved-2026-08-28-r4` tag at commit
`d5e4b4cc70e733ede2d1dab61fecdab510b1be19`. The
`ui-approved-2026-08-28-r3`, `ui-approved-2026-08-28-r2`, `ui-approved-2026-08-28-r1` and
`ui-approved-2026-08-27-r17` tags remain immutable;
all older approval tags also remain unchanged. The new snapshot passed native
Linux x86 visual and interaction verification (147 passed, 65 unchanged viewport
exclusions, zero flaky/retry) in [GitHub Actions run 33180357784](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33180357784).
This approval corrects test read-model fixtures; production UI assets are
byte-for-byte unchanged from r3.
The previous r1 snapshot and its 143-pass result remain historical evidence in
[GitHub Actions run 33104422137](https://github.com/01-Yang/zero-one-api/actions/runs/33104422137).
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
