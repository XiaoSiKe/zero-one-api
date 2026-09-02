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

## 当前生产基线（2026-09-02，v0.2.0）

经所有者授权，已将
[`PR #21`](https://github.com/XiaoSiKe/zero-one-api/pull/21) 以 merge commit
`03b0e68f034c30c11279892bf032d3b3aba48358` 合入 `main`，再按 Backend-first
流程完成生产原地升级。[main CI 33616389914](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33616389914)、
[Security 33616389963](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33616389963)
和唯一一次 [Publish 33617572332](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33617572332)
均为同一精确源码 SHA 且成功：

```text
镜像源码 03b0e68f034c30c11279892bf032d3b3aba48358
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:26d742ae2c5d7dbab788551525dd6067fdbf23203da3d15dccd48d4df672e241
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:65838f3eefcfce20e5dc0e205870f66fca4c1aaa878f47ae598c2df1094e0dd0
```

两个 OCI index 均包含 amd64/arm64、SBOM 和 provenance；生产 x86_64 主机运行
amd64 manifest。两张运行镜像的 OCI revision 均为上述完整 commit，Sub2API 实际报告
`0.2.0`。生产部署配置随后经下述健康检查修复更新到
`e442cd5a8b68a69f3db4cfeb64b71cc4ebca3573`，镜像源码与摘要不变，没有重复发布。
本版本的批准 UI 为
`ui-approved-2026-09-02-r5@fd727f51f18fc14997c63dbc8f2fc04f836c58b6`；版本同步继续
保护已登记的 490 个二开文件，未引入未经评审的上游 Console 控件。

升级前创建的恢复点为：

```text
服务器 /srv/zero-one/.release-backups/20260902T100625Z-pre-v020-03b0e68f03
维护机 /Users/yangzi/Documents/关于实践/关于项目/零一中转站-production-backups/20260902T100625Z-pre-v020-03b0e68f03
```

恢复点用 age 分别加密 PostgreSQL custom dump、Redis RDB、部署/证书/应用状态、旧源码
和旧双镜像；五个密文的服务器/维护机 SHA-256 全部一致，生产机没有落地数据库明文。
维护机在无发布端口、内部 Docker 网络和独立临时卷中实际执行 PostgreSQL 18
`pg_restore --exit-on-error`，Redis RDB 的 checksum 也通过。恢复库先得到 100 张表和
277 条迁移；目标 v0.2.0 Backend 随后健康启动并精确新增：

```text
232_channel_cache_write_1h_pricing.sql
232_group_force_openai_fast.sql
232_group_reasoning_effort_over_limit.sql
233_group_free_openai_fast.sql
```

演练后的迁移数为 281，重启目标 Backend 后账本不再变化。三个 Group 字段和四张渠道
定价表的类型、默认值、非空/可空边界均符合迁移合同；五张受影响表的旧字段逐行 JSON
比较为零差异。全部核心/财务聚合、其余非运行时表的逐表行数与双内容指纹、非运行时
序列均保持一致；Provider Account 与 Channel Monitor 的启动刷新只命中允许的运行态列。
迁移后的完整文件名账本 SHA-256 为
`2e550c883e9db6aee6f275f38372075a4f1560834d03393fabc79e4a0dfe7945`，无效或未 ready
索引为 0；隔离容器、卷、网络和解密文件已自动清理。

生产切换前快照为 219 个 User、17 个 Provider Account、230 个 API Key、1,190 个
Redeem Code、215 个 Affiliate 档案（其中 22 条有效 inviter 关系）、8 个 Channel Monitor、
91,523 条 usage log 和 0 个支付订单。仅重建 Backend 后，表数为 100、迁移数为 281，
上述业务计数没有下降；其间一条正常请求使余额与 `usage_actual_cost` 等额变化。最终快照
包含 220 个 User、231 个 API Key、216 个 Affiliate 档案和 91,569 条 usage log；正常用户
注册及 20 元充值使累计充值和 `balance + usage_actual_cost` 同增 20，订单、冻结余额、
Affiliate 历史返利等聚合没有异常下降。三轮稳定性观察中
`balance + usage_actual_cost` 均为 `4719.8258920242`。

PostgreSQL `536cb90ab411...`、Redis `4e9f6ffcb22c...` 在升级中未重建；新 Sub2API 为
`fa5f7e5d99d4...`。Backend-first 切换后的首个 Edge 为 `0596c5d9e706...`，最终 Edge 为
`02a381f3dffc...`。四个容器最终均 healthy、重启次数 0，
业务环境字段（排除双镜像引用）的 SHA-256 前后均为
`659b4544ab65505d7983b1c983b3be3050bc43c06434721249f7a26c956c92a3`。旧 Edge 在切换前
因既有 healthcheck 进程记账泄漏达到 `pids.current=4605`，虽然真实 HTTPS 仍可用，Docker
状态已为 unhealthy；仓库 `safe-edge-switch.sh` 首次重建后立即恢复 healthy。

延时观测发现首次重建只重置了计数，没有消除原因：Caddy 始终只有 8–9 个真实线程，
而 Edge 内的 TLS BusyBox `wget` 每 10 秒健康检查会额外启动 helper，`pids.current` 从
61 继续增长到 364；同机 PostgreSQL、Redis 和 Sub2API 的非 TLS 健康检查没有该现象。
纯 HTTP 读取 Caddy 本地管理端点前后计数不变。经
[`PR #23`](https://github.com/XiaoSiKe/zero-one-api/pull/23) 合入
`e442cd5a8b68a69f3db4cfeb64b71cc4ebca3573` 后，Edge 健康检查改为
`http://127.0.0.1:2019/config/`，而 `safe-edge-switch.sh` 继续单独执行规范域名真实 HTTPS
门禁。PR 的 [CI 33622632164](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33622632164)
首轮唯一失败是 GitHub runner 的 Testcontainers Ryuk 60 秒启动超时；同一 integration
test 在维护机固定 Go 1.27 容器通过，未改业务代码，CI attempt 2 全套通过。合并后的
[main CI 33624999065](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33624999065)
和 [Security 33624999098](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33624999098)
也均成功。

生产只切换到该配置提交并用原 Edge digest 重建 Edge；PostgreSQL、Redis、Sub2API
容器 ID、281 条迁移账本和业务环境哈希均未变化。新 Edge 五轮 12 秒间隔观测为
`7/7`、`8/8`、`8/8`、`8/8`、`8/8`（`pids.current/cgroup.threads`），延时复核仍为
`8/8`，`pids.events max` 始终为 0，规范域名 HTTPS 持续正常。

23 项匿名线上检查覆盖规范域名 GET/HEAD、`/home`、登录/注册和主要 Console 路由、
Public Settings/Public Announcement、无 Key 的 Models/Messages/Responses JSON 401、
三个受保护静态资源、Compatibility Domain GET/HEAD/POST 的不可缓存 308，以及 apex/www
路径与查询保留 308。固定 Playwright 1.55.1 Linux Chromium 另行确认 Landing、登录和
注册真实渲染、表单完整、匿名 Dashboard 回到登录，page error 和 console error 均为 0。
`01yapi-bridge-client.service` 保持 active，Backend 内 `superapi-direct:18181/health` 可达；
端口只绑定 Docker host-gateway，维护机禁用代理后的公网 HTTP 探测超时。维护机 TUN
环境下单独的 TCP connect 假阳性不作为公网开放证据。

本次没有借用客户 API Key 执行真实计费模型、SSE/WebSocket 101、在线生图、Redeem Code
核销或管理员写入探针；这些缺少专用测试凭据的项目不写成已执行成功。最终 102 项证据、
实际运维脚本和三张浏览器截图已在上述双端恢复目录归档，并有独立
`FINAL_EVIDENCE_SHA256`。修复脚本曾短暂把渲染后的 Compose 写入受限服务器恢复目录；
该文件可能含展开的环境值，未被读取、未传出且未进入证据包，发现后已截断删除，脚本也
改为管道内校验。

### 本次直接回滚基线

```text
源码    9cd6ee29b9a88ef75e361c5dc78cbbff35413448
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:106d3ec27ce2123bb5d4fbe69b572ccc7a56adca933becae56fce70b4f441c49
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:75e94ee5c34e2875c13c273dd7a61bc02033a380517b7b1edb5b9cf42160ed32
```

环境回滚副本为
`.release-backups/20260902T100625Z-pre-v020-03b0e68f03/env.before-backend-v020-20260902T103023Z.SNO4a5`
和 `deploy/zero-one/.env.before-edge-20260902T103110Z.LkTZkg`，权限均为 `0600`。四个新迁移
只增加兼容列。健康检查修复前的 Compose 另存为
`.release-backups/20260902T100625Z-pre-v020-03b0e68f03/compose.before-edge-healthcheck-20260902T113117Z.yml`。
普通应用回滚恢复上述旧源码和双镜像，但保留 281 条迁移账本；配置回滚可单独使用该
Compose 副本。只有隔离验证证明数据库本身损坏且进入独立维护窗口后，才允许使用已验证
恢复点恢复 PostgreSQL。

## 历史生产基线（2026-09-01，v0.1.185）

经所有者授权，已将
[`PR #18`](https://github.com/XiaoSiKe/zero-one-api/pull/18) 以 merge commit
`9cd6ee29b9a88ef75e361c5dc78cbbff35413448` 合入 `main`，并按
Backend-first 流程完成生产原地升级。[main CI 33475553190](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33475553190)、
[Security 33475553171](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33475553171)
和 [Publish 33476674634](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33476674634)
均为同一精确源码 SHA 且成功：

```text
镜像源码 9cd6ee29b9a88ef75e361c5dc78cbbff35413448
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:106d3ec27ce2123bb5d4fbe69b572ccc7a56adca933becae56fce70b4f441c49
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:75e94ee5c34e2875c13c273dd7a61bc02033a380517b7b1edb5b9cf42160ed32
```

两个 OCI index 均包含 amd64/arm64、SBOM 和 provenance；生产 x86_64 主机运行
amd64 manifest。Sub2API 实际报告 `0.1.185` 和上述完整 commit，两张运行镜像的
OCI revision/source 标签均精确匹配。当前批准 UI 为
`ui-approved-2026-09-01-r12@1242dbfcb2f8226015e3a070ff734ac70f502419`；
r12 只校准共享侧栏的 v0.1.185 版本徽标矩形，未改变矩形外像素或 Console 实现。

本版本没有新增数据库迁移。生产保持 100 张 public 表和 277 条完整文件名迁移账本；
账本 SHA-256 为 `bb4bd178161fcd5f423d72f1cc2bed540983ebb7c23f069dad7095b44af0b7c3`，
必需的 229–231 迁移、字段和约束均存在，无效或未 ready 索引为 0。升级前恢复点为：

```text
服务器 /srv/zero-one/.release-backups/20260901T061807Z-pre-v185-5e83b3e0d2
维护机 /Users/yangzi/Documents/关于实践/关于项目/零一中转站-production-backups/20260901T061807Z-pre-v185-5e83b3e0d2
```

恢复点以 age 分别加密 PostgreSQL custom dump、Redis RDB、部署/证书/应用状态、旧源码
和旧双镜像；服务器与维护机 SHA-256 全部通过，未在服务器落地数据库明文。维护机使用
PostgreSQL 18 的内部 Docker 网络和无发布端口临时卷实际执行 `pg_restore --exit-on-error`，
恢复出 100 张表和 277 条迁移。目标 v0.1.185 Backend 随后在该隔离恢复库上健康启动；
全部核心/财务聚合、非运行时表的逐表行数与双内容指纹、非运行时序列及迁移账本保持一致。
Provider Account 与 Channel Monitor 行数不变，启动产生的状态刷新只命中已列明的运行时列；
Ops、Dashboard、scheduler 与监控历史的运行态写入单独记录，临时容器、卷、网络和解密文件
已清理。

生产切换前快照为 206 个 User、17 个 Provider Account、218 个 API Key、1,189 个
Redeem Code、202 个 Affiliate 档案（其中 14 条有效 inviter 关系）、8 个 Channel Monitor、
87,986 条 usage log 和 0 个支付订单。Backend 切换和 Edge 最终验收时这些计数及全部财务
聚合均未变化。三轮稳定性观察的最后一轮为 87,992 条 usage log；新增的正常使用使余额
减少 `0.02036520`，`usage_actual_cost` 同额增加，三轮
`balance + usage_actual_cost` 均为 `4424.8258920991`。累计充值、Key 配额、冻结余额、
Affiliate 历史返利和订单聚合没有异常下降。

PostgreSQL `536cb90ab411...`、Redis `4e9f6ffcb22c...` 在升级中未重建；新 Sub2API 为
`a939c8ea39ef...`，新 Edge 为 `4db58d74fa1f...`，四个容器最终均 healthy、重启次数 0。
业务环境字段（排除双镜像引用）的 SHA-256 前后均为
`659b4544ab65505d7983b1c983b3be3050bc43c06434721249f7a26c956c92a3`。
Edge 只通过仓库 `safe-edge-switch.sh` 切换，并通过真实 HTTPS 与 Docker health。

22 项匿名线上检查覆盖规范域名 GET/HEAD、Landing、登录/注册、主要 Console 路由、
Public Settings/Announcement、无 Key 的 Models/Messages/Responses JSON 401、受保护静态资产、
Compatibility Domain GET/HEAD/POST 的不可缓存 308，以及 apex/www 的路径与查询保留 308。
维护机 `agent-browser` 另行确认 Landing、登录和注册真实渲染、表单完整且 page errors 为 0。
`01yapi-bridge-client.service` 和容器内 `superapi-direct:18181/health` 均正常。

本次没有借用客户 API Key 执行真实计费模型、SSE/WebSocket 101、在线生图、Redeem Code
核销或管理员写入探针；这些缺少专用测试凭据的项目不写成已执行成功。仓库完整离线、集成、
固定 Linux 浏览器和路由门禁已通过，线上匿名路由证明 API 请求没有落到 HTML。

### 本次直接回滚基线

```text
源码    5e83b3e0d2d8bc72178102c7395fa416cd85f4ff
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:19e695453305edc4a234e2d5e12b720cf93c9066cf9a14cd9c3d0f5bc8527f6d
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:48a48d2fbdb8ee72ebfa7042f0d9da20e4797d19ea67813fc97edb3e61f14e32
```

受限环境回滚副本为
`.release-backups/20260901T061807Z-pre-v185-5e83b3e0d2/env.before-backend-v185-20260901T065109Z.wspxyT`
和 `deploy/zero-one/.env.before-edge-20260901T065227Z.FVWgCZ`，权限均为 `0600`。
v0.1.185 没有新增迁移，普通应用回滚只恢复旧源码和双镜像，保留 277 条账本；只有隔离验证
证明数据库损坏且进入独立维护窗口后，才允许使用上述恢复点恢复 PostgreSQL。

正式 off-site 挂载和自动日备份仍未配置；本次受限服务器恢复点与维护机加密副本不能写成
已经启用的自动备份制度。

## 历史生产基线（2026-08-31，v0.1.184）

经所有者授权，已将
[`PR #12`](https://github.com/XiaoSiKe/zero-one-api/pull/12) 以 merge commit
合入 `main`，并按 Backend-first 流程完成生产原地升级。PR 12/12 检查、
[main CI 33393806111](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33393806111)、
[Security 33393806251](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33393806251)
及 [Publish 33395180635](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33395180635)
均成功：

```text
镜像源码 eae86034f035fa1c5b1ca24674a96d6183467d4f
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:654942ef4ae2a1ad72efa0f773d3921def6caf52e519c1ce6e3d529725eba8c0
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:9d9b5fba4a692210a4aa85dcdaa4c8fc8857e7e5e900b8cc313555316f7709e5
```

两个 OCI index 均包含 amd64/arm64、SBOM 和 provenance；生产 x86_64 主机运行
amd64 manifest。Sub2API `--version` 为 `0.1.184`，两个运行容器的 OCI revision
均精确对应上述源码。当前批准 UI 为
`ui-approved-2026-08-31-r7@961832c76e288ee15cc3eea8c1cde946d78d7aeb`；
桌面及 390×844 真实生产浏览器验证首页和自定义生图教程，首次打开未出现“页面不存在”，
iframe 可见、无横向溢出或 Console error。

PostgreSQL `536cb90ab411...` 与 Redis `4e9f6ffcb22c...` 容器和 bind mount 未重建；
新 Sub2API 为 `f150a927e6e9...`、新 Edge 为 `9aa60032bba1...`。业务环境字段
（排除两个镜像引用）的 SHA-256 前后均为
`659b4544ab65505d7983b1c983b3be3050bc43c06434721249f7a26c956c92a3`。
Edge 通过仓库 `safe-edge-switch.sh` 唯一入口切换并通过本机 HTTPS readiness。

迁移账本从 `274` 增至 `277`，按完整文件名新增：

- `231_add_usage_log_native_compaction_v2.sql`
- `231_add_usage_log_requested_reasoning_effort.sql`
- `231_user_restrict_public_groups.sql`

三项迁移先在新备份的隔离恢复库中由目标 Backend 的真实迁移器演练；迁移前后核心计数
和全部财务聚合逐项一致。生产最终快照仍为 100 张表、197 个用户、210 个 API Key、
1,186 个兑换码、193 条邀请关系、87,307 条 usage log、0 条支付订单、0 个无效索引。
切换窗口新增 5 条正常用量，余额合计减少 `0.12626898`，`usage_actual_cost` 同额增加，
两者精确对消；累计充值、Key 配额、冻结余额和返利聚合均未变化。

本次恢复点：

```text
服务器 /srv/zero-one/.release-backups/20260831T125427Z-pre-v184-ad7646d65a.7ATMMy
维护机 /Users/yangzi/Documents/关于实践/关于项目/零一中转站-production-backups/20260831T125427Z-pre-v184-ad7646d65a.7ATMMy
```

恢复点分别加密 PostgreSQL custom dump、Redis RDB、部署状态、旧源码和旧产品镜像；
生产端/维护机端 SHA-256 均通过。维护机在无网络、无发布端口的 PostgreSQL 18 容器中
执行 `pg_restore --exit-on-error` 成功，再用目标 Backend 演练 `274 → 277`；一次性容器、
卷、网络和解密明文均已清理。四轮发布后观察均为 HTTPS 200、版本 0.1.184、容器重启
次数 0、迁移 277、无效索引 0。正式 off-site 挂载和日备份任务仍未配置，不能把本次
异机恢复点写成已完成自动日备份。

### 本次直接回滚基线

```text
源码    ad7646d65a1a029d6e3e1f6aa9e198ea685d8b91
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:536322b386c3e786b02ad2aeec105fb189f152696de8eac081d5b74f38789ca4
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:e47b9936dc538dc0e37425858211afc9da2658fb918c03cf4b65509d33d2d3b5
```

受限环境回滚副本为
`deploy/zero-one/.env.before-backend-v184-20260831T132418Z.ws8CWR` 和
`deploy/zero-one/.env.before-edge-20260831T132545Z.j2Wuq7`。三项 `231` 都是兼容的
加列迁移；普通应用回滚保留 `277` 条账本，不恢复 PostgreSQL。只有证明数据库损坏且
进入独立维护窗口后，才允许使用上述已验证恢复点执行数据库恢复。

没有借用客户 Key 执行真实计费模型、SSE/WebSocket 101、在线生图或兑换码写入探针；
匿名鉴权、路由、固定浏览器和完整离线/集成契约均已验证，缺少专用测试凭据的项目不得
写成生产真实模型请求成功。

## 历史生产基线（2026-08-28）

同一源码的双镜像由
[Zero One Publish 33172188926](https://github.com/XiaoSiKe/zero-one-api/actions/runs/33172188926)
在 attempt 1 发布成功；没有重复 dispatch 或自动重跑：

```text
镜像源码 e245f86c19eca2c8820f29b7b5167409f9f47ea2
Sub2API ghcr.io/xiaosike/zero-one-sub2api@sha256:7c008a49a58b26a4ebc4caf842d6f1251b4b0f11d8993d202b2b9c23caea3a58
Edge    ghcr.io/xiaosike/zero-one-edge@sha256:6ca66c891d78466ce2e4f653cbe751cbd1b2aa01ec9579c48ee85a90db19a9aa
```

以上是 OCI **index digest**，不是 config 或 layer digest。两个包的 amd64/arm64
manifest、实际 config 标签、SBOM/provenance 已匿名校验；生产 x86_64 主机实际拉取并
运行 amd64。没有把 arm64 元数据校验写成 arm64 运行测试。
可选的 `compose.production-baseline-preview.yml` 也已固定到该 Backend digest，
替换了已过时的旧账号 v0.1.179 引用；这不表示启动了本机预览或改写了历史回滚记录。
当前批准标签为 `ui-approved-2026-08-28-r4@d5e4b4cc70e733ede2d1dab61fecdab510b1be19`；
r4 只修正两个测试文件，生产 UI 资产与 r3 完全一致，运行镜像不因此重发。
其原生 Linux 验收为 147 passed、65 既有排除、0 flaky/retry，详见运维记录。

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

### 2026-08-28 托管迁移前回滚基线

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

记录中“镜像源码”指 OCI revision 对应的构建提交，不以运维工作目录的 HEAD 替代。
后续若只是同步已验收 main 的构建防护、预览配置、测试和文档，应先证明 Backend、
Frontend、Landing、恢复资源及生产 Compose/Caddy/Dockerfile 等运行输入没有改变；
使用 `--no-overwrite-ignore` 切换 checkout，并复核四个容器 ID 和业务环境哈希不变。
此操作不重建容器，最后同时记录 checkout SHA 与仍在运行的镜像 SHA。

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

迁移以 `schema_migrations.filename` 的完整文件名记账，不只看数字前缀。v0.1.184
保留 `229_affiliate_manual_binding.sql`、`229_plugins.sql` 和
`230_plugin_artifacts.sql`，并新增三个不同完整文件名的 `231_` 迁移；数字前缀相同
不构成冲突。所有待执行迁移均应先在生产备份的隔离恢复库上由目标 Backend 验证。

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

应用回滚优先使用上文 v0.1.184 直接回滚基线的 Sub2API/Edge 镜像摘要并重建对应
容器，默认不回滚数据库。三个 `231_` 迁移只增加兼容列，应用回滚仍保持当前 `277`
条迁移账本不变。只有在隔离验证证明数据库本身损坏、且已进入维护窗口时，才允许从
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
