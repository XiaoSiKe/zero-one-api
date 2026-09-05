# 零一 API 开发指南

本文只维护开发入口和验证顺序。产品术语见 [CONTEXT](CONTEXT.md)，业务决策见 [ADR](docs/adr/)，架构与二开归属见 [技术方案](docs/TECHNICAL-PLAN.md)，生产操作见 [运维手册](docs/OPERATIONS.md)。历史平台安装示例和排障过程保留在[不可变旧指南](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/DEV_GUIDE.md)，不作为当前生产配置。

## 环境与项目入口

| 内容 | 当前维护位置 |
| --- | --- |
| Go 版本与依赖 | [backend/go.mod](backend/go.mod)，与 CI 和 Dockerfile 保持一致 |
| Console 包管理与命令 | [frontend/package.json](frontend/package.json)、pnpm lockfile |
| Landing 包管理与命令 | [landing/package.json](landing/package.json)、npm lockfile |
| 浏览器版本与视口 | [visual-regression](visual-regression/README.md) |
| 端到端本地预览 | [Supported Local Edge Preview](deploy/zero-one/README.md#supported-local-edge-preview) |
| PostgreSQL/Redis 与端口 | 对应 Compose 和 `.env.example`；不使用旧文档中的个人机器密码 |

本地预览使用真实 Backend、PostgreSQL、Redis、Caddy 和隔离邮箱。开发环境文件不进入 Git，生产密钥不复制进测试配置。Console 使用 pnpm，Landing/视觉测试使用各自 npm lockfile，不能混用包管理器重建同一目录。

## 开发顺序

1. 阅读 AGENTS、术语和相关 ADR，核对工作区已有修改；从产品 main 创建 `codex/` 分支。
2. 从真实路由和调用者定位规则维护位置。前端壳层由 App.vue 维护，叶子页面只渲染内容；见 [Layout](frontend/src/components/layout/README.md)。
3. 先用最小可重复场景证明缺陷，或明确新需求的验收条件。依赖、权限、扣费、持久化和失败策略必须从原维护模块复用。
4. 修改规范源码，更新必要调用者、类型、测试与文档。不得直接手改 Ent 生成代码；数据库规则按 [迁移约定](backend/migrations/README.md) 追加，已执行的历史文件及校验和不可改写。
5. 先运行相关检查，再运行完整套件；检查最终 diff、生成产物和二开保护。测试预期不能替代业务规则。

## 验证入口

下面命令均在仓库根目录执行；需要对应工具链，集成测试需要 Docker。

```bash
make test
make build
node --test .github/scripts/*.test.mjs
node .github/scripts/verify-upstream-boundary.mjs --worktree
node .github/scripts/verify-upgrade-readiness.mjs --recorded-sync --worktree
node .github/scripts/verify-ui-boundary.mjs --worktree
npm test --prefix visual-regression
```

`make test` 包含 Go ordinary/unit/integration 与 lint、Console 的 lint/typecheck/全量测试和 Landing 验证。`make test-frontend-critical` 只用于诊断，不能代替全量结果。构建、部署/备份/路由检查和固定 Linux 浏览器证据以 [Zero One CI](.github/workflows/zero-one-ci.yml) 的完整作业为准；安全检查由 [Security Scan](.github/workflows/security-scan.yml) 维护。

### 规范前端产物

生产 Edge 使用受保护的恢复版资源，普通 Vue 构建不能覆盖整套恢复版 UI。变更对应适配层时运行其规范生成器：

```bash
pnpm --dir frontend run build:cn-provider-admin
pnpm --dir frontend run build:password-recovery
pnpm --dir frontend run build:cn-provider-shell
pnpm --dir frontend run build:online-image
```

验证源码与产物一致、资源引用闭合、再次生成不产生额外差异。旧命名空间可能被已打开页面或回滚镜像引用，不能仅凭版本号删除。UI 改动先完成桌面/手机视觉审核，再在已审核提交上创建新的不可移动 `ui-approved-*` 标签并更新基线元数据；不移动旧标签，不降低截图阈值。

### 常见边界

- 修改依赖必须使用对应包管理器更新锁文件；以 frozen-lockfile/`npm ci` 验证，不能删除锁文件绕过冲突。
- 接口新增方法时更新实现与测试替身，覆盖真实调用边界；编译成功不等于鉴权、扣费和失败路径正确。
- Account、Group、User 和 API Key 的倍率、映射与权限具有不同作用；批量更新只发送明确修改的字段，覆盖“保持原值”和显式清空。
- Shell 中的 `$`、反引号和多行 JSON 必须正确引用。优先结构化参数或文件输入；不打印密钥，不把数据库转储写入仓库。
- 中文路径、平台字体、时区和浮层尺寸需在目标环境验证。视觉差异先定位环境/数据/代码原因，不能无条件更新快照。
- 公共设置遵循显式投影，认证图片、管理员字段、上游凭据和提示词不能因增加内部类型而公开。

## PR、发布与上游同步

日常产品修改先完整本地验证，再创建 PR；必需检查通过后合并。main push 的完整产品/安全结果才可作为发布证据，手动诊断或旧 attempt 不能替代。镜像发布与生产原地升级统一按 [Release And Rollback](docs/OPERATIONS.md#release-and-rollback) 执行，权限来自用户明确授权。

未来同步上游时：

1. 选择正式稳定 Tag 及其解引用完整提交，记录合并前产品 tip；不能用浮动 upstream/main 当基线。
2. 保留完整历史、只读 upstream 和不可移动 UI 标签。以产品 tip 为第一父提交做正常双亲合并，不重置或覆盖二开文件。
3. 更新技术方案定义的 `upstream_sync` 来源记录；对冲突逐路径保留产品实现，再分别移植确实需要的上游变化。
4. 每个产品差异必须有明确 owner 和保留策略。路径改名/收敛必须保留功能、测试和维护位置的对应关系，不靠删除登记避开保护。
5. 重跑提交态和工作区态保护检查、全量功能/视觉测试，再按正常 PR、main 验证和同源双镜像流程发布。

业务规则不在本指南重复定义。新增需求和缺陷使用 [GitHub Issues](docs/agents/issue-tracker.md)，保持实际代码、ADR 与操作手册一致。
