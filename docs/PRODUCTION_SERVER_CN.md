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

## 当前生产基线

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

1. `git fetch origin`，核对目标 SHA，然后 `git switch --detach <TARGET_SHA>`。
2. 仅更新 `.env` 中 `SUB2API_IMAGE` 与 `EDGE_IMAGE` 的完整 digest；不改任何 secret 或持久化路径。
3. `docker compose ... pull sub2api edge`。
4. `docker compose ... up -d --no-build sub2api`，等待健康并核对迁移账本。
5. 验证公开设置、登录、API 鉴权和一条低成本探针请求。
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

应用回滚只切换回上一组 Sub2API/Edge 镜像摘要并重建对应容器，默认不回滚
数据库。v0.1.183 没有新增迁移，回滚到 v0.1.182 时必须保持当前 `274` 条迁移
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
