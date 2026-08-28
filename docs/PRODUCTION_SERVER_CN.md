# 零一 API 生产服务器维护手册

> 本文记录生产维护入口、目录、持久化边界和标准发布步骤。不得在本文或 Git 中写入私钥正文、管理员密码、API Key、Provider 凭据、JWT Secret、TOTP 加密密钥或 `.env` 内容。

## 服务器与 SSH

| 项目 | 当前值 |
|---|---|
| 规范域名 | `https://api.01yapi.com` |
| 兼容跳转域名 | `https://app.01yapi.com` |
| 生产公网 IP | `38.54.110.125` |
| 主机名 | `zwfgbuha.vm` |
| SSH 用户 / 端口 | `root` / `22` |
| 本机私钥 | `/Users/yangzi/.ssh/zero-one-production_rsa` |
| 私钥指纹 | `SHA256:V5XWaUIJBrbY6k/5vKAnYSCE8Kk2KkozHDIA1iRty7c` |
| 已知主机文件 | `/Users/yangzi/.ssh/known_hosts` |

连接命令：

```bash
ssh -o IdentitiesOnly=yes \
  -i /Users/yangzi/.ssh/zero-one-production_rsa \
  root@38.54.110.125
```

私钥必须保持 `0600`，只存放在受控维护机器上；不要上传到服务器、GitHub、网盘或聊天记录。首次更换主机时应通过控制台核对新指纹，禁止为了省事使用 `StrictHostKeyChecking=no`。

## 生产目录与 Compose

| 项目 | 当前值 |
|---|---|
| 仓库目录 | `/srv/zero-one` |
| 部署目录 | `/srv/zero-one/deploy/zero-one` |
| Compose 文件 | `/srv/zero-one/deploy/zero-one/compose.yml` |
| 环境文件 | `/srv/zero-one/deploy/zero-one/.env` |
| Compose project | `zero-one-api` |
| 服务 | `postgres`、`redis`、`sub2api`、`edge` |

所有生产 Compose 命令都从仓库根目录执行，并完整带上环境文件与 Compose 文件：

```bash
cd /srv/zero-one
docker compose \
  --env-file deploy/zero-one/.env \
  -f deploy/zero-one/compose.yml \
  ps
```

公网只允许 Caddy Edge 发布 `80`、`443/tcp` 和 `443/udp`。Sub2API `8080`、PostgreSQL `5432`、Redis `6379` 不得映射到公网。

## 不可删除的持久化数据

生产数据均通过 bind mount 保存在 `/srv/zero-one/deploy/zero-one/state/`：

- PostgreSQL：`state/postgres` → `/var/lib/postgresql/data`
- Redis：`state/redis` → `/data`
- Sub2API 数据：`state/sub2api` → `/app/data`
- Caddy 证书与状态：`state/caddy-data`、`state/caddy-config`

升级只允许重建容器，不允许执行 `docker compose down -v`、`docker volume prune`、`docker system prune --volumes`，也不允许删除或覆盖上述目录。生产仓库中已有 `.release-backups/`、`.release-builds/` 和历史 `.env.before-*` 文件；它们是发布恢复材料，不得使用 `git clean` 清理。

## GitHub 托管迁移（2026-08-28）

产品源码托管目标为 [`XiaoSiKe/zero-one-api`](https://github.com/XiaoSiKe/zero-one-api)，
`XiaoSiKe` 为登录名，`01-Yang` 为显示名。导入、权限与 CI 的实际验收记录见
[`OPERATIONS.md`](OPERATIONS.md#repository-hosting-migration-2026-08-28)。

源码托管迁移阶段没有操作生产；随后经所有者授权，已完成下述独立的镜像发布与
生产维护。服务器 `origin` 现为新仓库地址，`upstream` 为
`https://github.com/Wei-Shaw/sub2api.git`，其 push URL 为 `DISABLED`。
所有者选择保持独立仓库，不再申请 GitHub 原生 fork 关联。

新 GHCR 包已实际发布且可匿名拉取，生产机没有为此保存个人 PAT 或创建 Docker
登录配置。旧部署与回滚记录继续保留真实包名和摘要；不能仅替换 registry owner
就声称得到同一镜像。只修改本项目需要的配置，不复制旧账号凭据、不改历史作者，
也不因托管迁移而轮换 JWT、TOTP、数据库或其他业务密钥。

## 当前生产基线（2026-08-28）

同一源码的双镜像由
[Zero One Publish 33172188926](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33172188926)
在 attempt 1 发布成功；没有重复 dispatch 或自动重跑：

```text
源码    e245f86c19eca2c8820f29b7b5167409f9f47ea2
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:7c008a49a58b26a4ebc4caf842d6f1251b4b0f11d8993d202b2b9c23caea3a58
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:6ca66c891d78466ce2e4f653cbe751cbd1b2aa01ec9579c48ee85a90db19a9aa
```

以上是 OCI **index digest**，不是 config 或 layer digest。两个包的 amd64/arm64
manifest、实际 config 标签、SBOM/provenance 已匿名校验；生产 x86_64 主机实际拉取并
运行 amd64。没有把 arm64 元数据校验写成 arm64 运行测试。
可选的 `compose.production-baseline-preview.yml` 也已固定到该 Backend digest，
替换了已过时的旧账号 v0.1.179 引用；这不表示启动了本机预览或改写了历史回滚记录。

后端容器于 `2026-08-28T13:31:45.039332802Z` 启动、`13:31:50Z` 通过健康与 HTTPS
检查；随后仅通过 `safe-edge-switch.sh` 切换 Edge，其启动时间为
`2026-08-28T13:34:31.368148287Z`，真实 HTTPS readiness 通过。
两者版本仍是 v0.1.183，没有升级上游、改变上游号池、回填数据或新增 SQL 迁移。
PostgreSQL/Redis 容器 ID、挂载和镜像未变；`.env` 排除两个镜像字段后的 SHA-256
保持一致。Edge 未配置 Docker healthcheck，其就绪结论来自 HTTPS，不能写成
四个容器均有 Docker `healthy` 状态。

`13:41:06Z` 只读复核：100 张表、274 条迁移、176 个用户、190 个 API Key、
1,177 个兑换码、172 条邀请关系、80,935 条 usage log、0 条支付订单；迁移账本
整体摘要与恢复点一致、无无效索引。日志和用量中观察到新后端成功请求及新的首 Token
分段字段；这不是主动扣费探针，也不能据此推算上游延迟改善百分比。
新请求级 `first_token_ms` 口径自上述后端启动时间生效，历史值不回填、不直接混合比较。

本次恢复点：

```text
服务器 /srv/zero-one/.release-backups/20260828T130305Z-pre-xiaosike-3e0298cb9.nS6fkX
维护机 /Users/yangzi/Documents/个人项目/零一中转站-production-backups/20260828T130305Z-pre-xiaosike-3e0298cb9.nS6fkX
```

五份 age 密文分别保存 PostgreSQL dump、部署配置/证书/应用状态、Redis RDB、四份
旧镜像和旧源码。密文及解密后 SHA-256 均通过；数据库 dump 与 `SNAPSHOT.json`
使用同一个只读 MVCC snapshot。维护机已实际执行 PostgreSQL 18 `--network none`、
无对外端口、独立卷的恢复，100 张表、274 条账本及六项计数
`176/190/1,177/172/80,801/0` 完全一致。Redis 与文件状态是分别采集的恢复点，
不声明跨存储原子性。旧镜像的四条 index→amd64 manifest→config/layers 链共
48 个独立 blob 校验通过；未执行 `docker load` 覆盖维护机现有标签。

恢复私钥仅在维护机受限的 `.recovery-keys/zero-one.agekey`，没有上传生产机或 GitHub。
验证后已删除此次服务器明文 staging 和本机临时恢复容器/卷/解密副本；加密异机备份、
旧镜像缓存、全部历史 `.release-*` 与 `.env.before-*` 均保留。归档应继续保留原始
校验和、`RESTORE_RESULT.json`、`BACKEND_DEPLOYMENT.json`、`FINAL_CONTAINERS.jsonl`、
`LIVE_DB_CHECK.json`、`PLAINTEXT_CLEANUP` 和匿名验收记录，不上传私有备份到 Actions。

20 项匿名线上检查已核验：HTML/版本化兑换资源哈希、通知路由、公开设置、无 Key
JSON 401、兼容域名 GET/HEAD/POST 的不可缓存 308 与完整 URI，以及 apex 308。
这不代替真实登录、核销、扣费模型请求、真实 SSE 流或 WebSocket 101 升级的受控生产探针。
相关离线/集成/浏览器门禁由精确源码 CI 覆盖；专用限额探针密钥未提供，不借用客户 Key。

**尚需独立配置的运维事项：** `/mnt/offsite/zero-one` 尚未挂载，日备份任务未安装。
本次加密异机恢复点不等于自动日备份已启用；需要所有者提供/批准异机存储目标后，
再配置挂载、sentinel、公钥及受限定时任务，不能伪造挂载条件绕过 `backup-postgres.sh`。

### 本次直接回滚基线

切换前实际运行的是下述 v0.1.183 加固版，而不是更早文档中的首次部署：

```text
源码    3e0298cb9376587fde282352b06d9dcc86c024fa
Sub2API ghcr.io/01-yang/zero-one-sub2api@sha256:7b985fb94ff45577b5ef7bc1c2b013c83b7ddc114695acda0fb178459c27957e
Edge    ghcr.io/01-yang/zero-one-edge@sha256:78eefb0a9a998355b7eba61e8dc700e4bcfa241298d766db11f2df9bdfa64135
```

该旧账号远程包的可用性不能保证，因此保留生产缓存和加密离线镜像归档；不要清理它们，
也不要把旧 digest 改写到新命名空间。两版迁移目录完全相同，常规应用回滚不恢复数据库。
旧镜像归档只保存本机已有架构；灾难恢复时先核对 index/平台/config 的关系，不能把
Docker containerd image store 的 Image ID 误当成 config digest 或声称已经验证过加载。

## 历史 v0.1.183 首次部署

2026-08-26 已按 Backend-first 原地部署 v0.1.183，运行源码和不可变镜像为：

```text
源码    e06e9b7a391ecc49acbc58c917cf216b57688432
Sub2API ghcr.io/01-yang/zero-one-sub2api@sha256:d05e886fb3cf3ade29ccfe6f99b90da0bdb6db5e4286f99ee537065b8965de7d
Edge    ghcr.io/01-yang/zero-one-edge@sha256:c05449150e362f97daa03e580b567c18235e09f965af0c1932c7d7a8510a1409
```

v0.1.183 没有新增迁移，生产迁移账本仍为 `274` 条。稳定性复核时共有
`168` 个用户、`178` 个 API Key、`1,170` 个兑换码、`164` 条邀请关系、
`72,178` 条 usage log 和 `0` 条支付订单；这些在线计数会继续增长，只能用于
确认升级过程没有异常下降。

本次升级前的已验证热备份位于：

```text
服务器 /srv/zero-one/.release-backups/20260825T201308Z-hot-pre-v183-7ce8b6b37c
维护机 /Users/yangzi/Documents/个人项目/零一中转站-production-backups/20260825T201308Z-hot-pre-v183-7ce8b6b37c
```

该备份已通过 SHA-256、`pg_restore --list`、状态包展开和一次性
PostgreSQL 18 `--network none` 隔离恢复；恢复后有 `100` 张业务表、`274`
条迁移，备份时点的 `168/178/1,170/164/72,178/0` 六项核心计数逐项一致。
目录中的 `RESTORE_VERIFICATION`、`BACKEND_DEPLOYMENT`、`EDGE_DEPLOYMENT`、
`DEPLOYMENT_RESULT` 和 `STABILITY_CHECK` 分别记录隔离恢复、Backend-first
镜像切换与稳定性复核结果，不包含密码、API Key 或私钥。Edge 首次切换因
容器 `running` 早于 HTTPS 监听而触发自动回滚；增加 HTTPS readiness gate 后
再次切换并通过完整路由检查，期间 Sub2API、PostgreSQL 和 Redis 保持健康。

## v0.1.182 回滚基线

升级 v0.1.183 前的生产源码为
`7ce8b6b37c76f71f56b9ae4d79199a19cac32fb7`，镜像为：

```text
Sub2API ghcr.io/01-yang/zero-one-sub2api@sha256:a0e46559a3d946ae93fc5041a4cc1eeb302f85b5430950de33f1f79cf52169ff
Edge    ghcr.io/01-yang/zero-one-edge@sha256:9c31136889b83c10d5a73cb50801ea1ca9f82fadff9f2c3efe9b4354882e0c86
```

切换瞬间数据库约 `637 MB`，共有 `168` 个用户、`178` 个 API Key、
`1,170` 个兑换码、`164` 条邀请关系、`72,178` 条 usage log 和 `0` 条支付
订单。v0.1.183 没有新增迁移，因此应用回滚只需恢复这两个旧镜像摘要，不回滚
PostgreSQL。

## 每次发布前

1. 确认目标提交已推送，GitHub 的 Zero One CI、后端测试、安全扫描和固定 Linux Chromium 视觉回归全部通过。
2. 记录当前源码提交、四个镜像摘要、容器健康状态、数据库大小和核心表计数。
3. 创建 PostgreSQL custom-format dump、部署状态归档和 SHA-256；把副本复制到生产机之外，并用 `pg_restore --list` 或隔离恢复演练验证可读。
4. 确认服务器至少保留镜像、数据库备份和临时构建所需空间。
5. 确认 `.env` 中的 `JWT_SECRET`、`TOTP_ENCRYPTION_KEY`、数据库密码和业务配置不会被源码更新覆盖。

仓库正式日备份入口是 `deploy/zero-one/backup-postgres.sh`。它要求 off-host 挂载点、sentinel 和 age 公钥；私有恢复密钥不得放在生产机。发布前临时备份不能替代日备份制度。

## 原地升级

生产必须部署同一源码提交构建的 Sub2API 与 Edge 不可变镜像摘要，不使用 `latest`。源码目录可以保持 detached HEAD；切换提交前先确认没有 tracked 修改，并保留全部 untracked 恢复材料。

发布顺序固定为 Backend-first：

1. 核对恢复点、旧 source/digest 和无 tracked 修改；`git fetch origin` 后核对目标 SHA，
   此时尚不切换源码或修改 `.env`。
2. 拉取并验证同源码双镜像，受限备份 `.env`，在源码/环境变更前启用分阶段回滚：
   尚未重建 Backend 时，失败只恢复 source/env；
   已重建时必须恢复旧镜像、检查真实 `Config.Image` 与健康状态，再恢复旧 source。
3. 使用 `git switch --no-overwrite-ignore --detach <TARGET_SHA>`，不得覆盖 ignored 恢复材料。
   只更新 `SUB2API_IMAGE`，`EDGE_IMAGE` 留给第 6 步。始终核对业务字段哈希，不改 secret 或挂载。
4. `docker compose ... up -d --no-deps --no-build --pull never --force-recreate --timeout 30 sub2api`，
   等待健康、HTTPS 和账本检查；证明 PostgreSQL/Redis/Edge 的容器身份未变。
5. 验证公开设置、登录、API 鉴权和独立授权的专用限额探针；缺少凭据时明确记录未执行项，
   不借用客户 Key、不把匿名 401 或正常流量观察写成受控业务探针。
6. 按 [`OPERATIONS.md` 的 Safe Edge switch](OPERATIONS.md#safe-edge-switch)
   唯一流程切换 Edge，随后再做兼容 308、SSE 与 WebSocket smoke test。

迁移以 `schema_migrations.filename` 的完整文件名记账，不只看数字前缀。v0.1.181 会分别执行 `229_affiliate_manual_binding.sql`、`229_plugins.sql` 和 `230_plugin_artifacts.sql`；前两个同为 `229_` 不构成冲突。三项迁移均应先在生产备份的隔离恢复库上验证。

## 发布后检查

```bash
cd /srv/zero-one
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml ps
docker compose --env-file deploy/zero-one/.env -f deploy/zero-one/compose.yml logs --tail=200 sub2api
curl -fsS https://api.01yapi.com/health
curl -fsS https://api.01yapi.com/api/v1/settings/public
curl -sS -o /dev/null -D - https://app.01yapi.com/dashboard
```

还要核对：

- `/`、`/dashboard`、`/keys`、`/monitor` 正常，批准 UI 未变化。
- `/v1/models` 未带 Key 时返回 API 鉴权错误，不返回 HTML。
- `app.01yapi.com` 保留路径和查询参数并返回不可缓存的 `308`。
- 新迁移已登记；用户、API Key、订单、余额、返利与 usage log 计数没有异常下降。
- PostgreSQL、Redis、Sub2API、Edge 均健康，日志没有 migration、checksum、panic 或持续 5xx。
- `01yapi-bridge-client.service` 仍为 active，容器内 `superapi-direct:18181/health` 可达，同时 `18181` 不对公网开放。

## 回滚

应用回滚优先使用上文记录的直接上一组 Sub2API/Edge 镜像摘要并重建对应容器，默认不回滚
数据库。本次两个 v0.1.183 版本之间没有 SQL 变化；若另行授权回到更早 v0.1.182，仍必须保持当前 `274` 条迁移
账本不变。只有在隔离验证证明数据库本身损坏、且已进入维护窗口时，才允许从
已验证备份恢复数据库。

回滚后重新执行全部路由、登录、API 鉴权和核心数据计数检查。任何数据库恢复都是独立的高风险操作，不能和普通容器回滚混在一起执行。

## 常用只读命令

```bash
# 容器、镜像和健康状态
docker ps --format 'table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}'

# 磁盘
df -hT

# 数据库大小
docker exec zero-one-api-postgres-1 \
  psql -U sub2api -d sub2api -Atc \
  'select pg_size_pretty(pg_database_size(current_database()));'

# 最近迁移
docker exec zero-one-api-postgres-1 \
  psql -U sub2api -d sub2api -Atc \
  'select filename from schema_migrations order by applied_at desc limit 20;'

# Bridge 状态
systemctl is-active 01yapi-bridge-client.service
```

完整产品级备份、恢复、SuperAPI bridge 和 smoke-test 细节继续以 [`docs/OPERATIONS.md`](OPERATIONS.md) 为准。
