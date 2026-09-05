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

当前运行版本以实际容器的镜像 digest、OCI revision 和本次发布恢复点中的验收记录为准。
源码目录 HEAD 可能包含后续文档或维护更新，不能替代运行镜像版本。下文带日期的生产
基线均为历史验收记录；新发布的双镜像、迁移账本、数据校验和回滚材料保存在生产机
`.release-backups/` 及维护机对应的受限备份目录中。

公网只允许 Caddy Edge 发布 `80`、`443/tcp` 和 `443/udp`。Sub2API `8080`、PostgreSQL `5432`、Redis `6379` 不得映射到公网。

## 不可删除的持久化数据

生产数据均通过 bind mount 保存在 `/srv/zero-one/deploy/zero-one/state/`：

- PostgreSQL：`state/postgres` → `/var/lib/postgresql/data`
- Redis：`state/redis` → `/data`
- Sub2API 数据：`state/sub2api` → `/app/data`
- Caddy 证书与状态：`state/caddy-data`、`state/caddy-config`

升级只允许重建容器，不允许执行 `docker compose down -v`、`docker volume prune`、`docker system prune --volumes`，也不允许删除或覆盖上述目录。生产仓库中已有 `.release-backups/`、`.release-builds/` 和历史 `.env.before-*` 文件；它们是发布恢复材料，不得使用 `git clean` 清理。

## 发布与回滚入口

- 产品仓库为 `XiaoSiKe/zero-one-api`；生产只部署同一 main SHA 构建的 Backend/Edge 镜像摘要。
- 发布证据与顺序：[运维手册](OPERATIONS.md#release-and-rollback)。Edge 仅通过 [Safe Edge switch](OPERATIONS.md#safe-edge-switch) 切换。
- 加密备份和实际恢复：[Backup And Recovery](OPERATIONS.md#backup-and-recovery)。临时发布恢复点不能冒充正式异地日备份。
- 发布前后执行[业务烟测](OPERATIONS.md#required-smoke-tests)，并核对本页列出的持久化挂载、数据库/Redis 容器身份和桥接服务。
- 回滚以本次恢复点的 source、镜像 digest、业务配置哈希和迁移账本为准。普通应用回滚保留数据库及之后产生的新数据。

## 历史发布索引

以下均为历史验收，不代表当前运行版本。完整记录保存在不可变 Git 提交中；恢复操作使用本次发布前恢复点，不能从历史表中挑选旧摘要。旧作者、许可证、镜像归属和恢复证据不改写。

| 历史事件 | 不可变来源 |
| --- | --- |
| GitHub 托管迁移（2026-08-28） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L67-L82) |
| 历史生产基线（2026-09-03，渠道状态与密码找回修复） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L83-L181) |
| 历史生产基线（2026-09-02，v0.2.0） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L182-L302) |
| 历史生产基线（2026-09-01，v0.1.185） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L303-L383) |
| 历史生产基线（2026-08-31，v0.1.184） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L384-L456) |
| 历史生产基线（2026-08-28） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L457-L536) |
| 2026-08-28 托管迁移前回滚基线 | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L522-L536) |
| v0.1.182 回滚基线 | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/PRODUCTION_SERVER_CN.md#L568-L582) |
| Repository Hosting Migration (2026-08-28) | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L398-L453) |
| 2026-08-28 hardening validation | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L522-L656) |
| Authorized production namespace cutover (2026-08-28) | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L570-L656) |
| 导航与加载修复验收（2026-08-27） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L733-L760) |
| 兑换码与首 Token 加固验收（2026-08-28） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L761-L801) |
| 入口可用性与登录首屏优化验收（2026-08-31） | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L802-L836) |

| Repository Access Incidents | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L382-L397) |
| Visual fixture diagnosis during migration acceptance | [完整记录](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/docs/OPERATIONS.md#L619-L656) |

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
