# sub2api 项目开发指南

> 本文档记录项目环境配置、常见坑点和注意事项，供 Claude Code 和团队成员参考。

## 一、项目基本信息

| 项目 | 说明 |
|------|------|
| **上游仓库** | Wei-Shaw/sub2api |
| **Fork 仓库** | bayma888/sub2api-bmai |
| **技术栈** | Go 后端 (Ent ORM + Gin) + Vue3 前端 (pnpm) |
| **数据库** | PostgreSQL 16 + Redis |
| **包管理** | 后端: go modules, 前端: **pnpm**（不是 npm） |

### Zero One 稳定基线规则

`main` 是唯一产品、CI 和部署分支；它的同步、构建和部署只跟随 `Wei-Shaw/sub2api` 的正式稳定
Tag，并同时记录 Tag 与其 peel 后的完整 commit SHA。不得把
`upstream/main`、通用 `latest` 镜像、管理后台一键升级，或上游 README
中的一键安装/覆盖命令用于 Zero One 产品环境。那些说明仍适用于原始
Sub2API，但不能覆盖 Zero One 的 Overlay Registry、双镜像或迁移发布流程。

## 二、本地环境配置

### PostgreSQL 16 (Windows 服务)

| 配置项 | 值 |
|--------|-----|
| 端口 | 5432 |
| psql 路径 | `C:\Program Files\PostgreSQL\16\bin\psql.exe` |
| pg_hba.conf | `C:\Program Files\PostgreSQL\16\data\pg_hba.conf` |
| 数据库凭据 | user=`sub2api`, password=`sub2api`, dbname=`sub2api` |
| 超级用户 | user=`postgres`, password=`postgres` |

### Redis

| 配置项 | 值 |
|--------|-----|
| 端口 | 6379 |
| 密码 | 无 |

### 开发工具

```bash
# golangci-lint（CI 用 v2.9，本地建议装同一版以免版本差异带来的噪音）
go install github.com/golangci/golangci-lint/v2/cmd/golangci-lint@v2.9

# pnpm (前端包管理)
npm install -g pnpm
```

## 三、CI/CD 流水线

### GitHub Actions Workflows

| Workflow | 触发条件 | 检查内容 |
|----------|----------|----------|
| **backend-ci.yml** | push, pull_request | 单元测试 + 集成测试 + golangci-lint v2.9 |
| **security-scan.yml** | push, pull_request, 每周一 | govulncheck + gosec + pnpm audit |
| **release.yml** | tag `v*` | 构建发布（PR 不触发） |

### CI 要求

- Go 版本必须是 **1.26.6**：相关 workflow 都用 `go-version-file: backend/go.mod` 取版本，随后硬断言 `go version | grep -q 'go1.26.6'`。升级 Go 时要同时改 `backend/go.mod`、`backend-ci.yml`（两处）、`release.yml`、`security-scan.yml` 和 `zero-one-ci.yml` 里的断言，**以及三个 Dockerfile 里的 Go 构建镜像**（`Dockerfile` / `deploy/Dockerfile` 的 `ARG GOLANG_IMAGE`、`backend/Dockerfile` 的 `FROM golang:`）。前者漏了 CI 会在版本校验步骤直接失败；后者漏了会在 Docker 构建时失败（`go.mod requires go >= X (running Y; GOTOOLCHAIN=local)`）。
- 前端使用 `pnpm install --frozen-lockfile`，必须提交 `pnpm-lock.yaml`
- Zero One CI 必须同时校验提交态 Overlay Registry 与 `--worktree` 模式；本地回放未提交内容时也要运行后者。

### 本地测试命令

```bash
# 后端单元测试
cd backend && go test -tags=unit ./...

# 后端集成测试
cd backend && go test -tags=integration ./...

# 代码质量检查
cd backend && golangci-lint run ./...

# 前端依赖安装（必须用 pnpm）
cd frontend && pnpm install
```

## 四、常见坑点 & 解决方案

### 坑 1：pnpm-lock.yaml 必须同步提交

**问题**：`package.json` 新增依赖后，CI 的 `pnpm install --frozen-lockfile` 失败。

**原因**：上游 CI 使用 pnpm，lock 文件不同步会报错。

**解决**：
```bash
cd frontend
pnpm install  # 更新 pnpm-lock.yaml
git add pnpm-lock.yaml
git commit -m "chore: update pnpm-lock.yaml"
```

---

### 坑 2：npm 和 pnpm 的 node_modules 冲突

**问题**：之前用 npm 装过 `node_modules`，pnpm install 报 `EPERM` 错误。

**解决**：
```bash
cd frontend
rm -rf node_modules  # 或 PowerShell: Remove-Item -Recurse -Force node_modules
pnpm install
```

---

### 坑 3：PowerShell 中 bcrypt hash 的 `$` 被转义

**问题**：bcrypt hash 格式如 `$2a$10$xxx...`，PowerShell 把 `$2a` 当变量解析，导致数据丢失。

**解决**：将 SQL 写入文件，用 `psql -f` 执行：
```bash
# 错误示范（PowerShell 会吃掉 $）
psql -c "INSERT INTO users ... VALUES ('$2a$10$...')"

# 正确做法
echo "INSERT INTO users ... VALUES ('\$2a\$10\$...')" > temp.sql
psql -U sub2api -h 127.0.0.1 -d sub2api -f temp.sql
```

---

### 坑 4：psql 不支持中文路径

**问题**：`psql -f "D:\中文路径\file.sql"` 报错找不到文件。

**解决**：复制到纯英文路径再执行：
```bash
cp "D:\中文路径\file.sql" "C:\temp.sql"
psql -f "C:\temp.sql"
```

---

### 坑 5：PostgreSQL 密码重置流程

**场景**：忘记 PostgreSQL 密码。

**步骤**：
1. 修改 `C:\Program Files\PostgreSQL\16\data\pg_hba.conf`
   ```
   # 将 scram-sha-256 改为 trust
   host    all    all    127.0.0.1/32    trust
   ```
2. 重启 PostgreSQL 服务
   ```powershell
   Restart-Service postgresql-x64-16
   ```
3. 无密码登录并重置
   ```bash
   psql -U postgres -h 127.0.0.1
   ALTER USER sub2api WITH PASSWORD 'sub2api';
   ALTER USER postgres WITH PASSWORD 'postgres';
   ```
4. 改回 `scram-sha-256` 并重启

---

### 坑 6：Go interface 新增方法后 test stub 必须补全

**问题**：给 interface 新增方法后，编译报错 `does not implement interface (missing method XXX)`。

**原因**：所有测试文件中实现该 interface 的 stub/mock 都必须补上新方法。

**解决**：
```bash
# 搜索所有实现该 interface 的 struct
cd backend
grep -r "type.*Stub.*struct" internal/
grep -r "type.*Mock.*struct" internal/

# 逐一补全新方法
```

---

### 坑 7：Windows 上 psql 连 localhost 的 IPv6 问题

**问题**：psql 连 `localhost` 先尝试 IPv6 (::1)，可能报错后再回退 IPv4。

**建议**：直接用 `127.0.0.1` 代替 `localhost`。

---

### 坑 8：Windows 没有 make 命令

**问题**：CI 里用 `make test-unit`，本地 Windows 没有 make。

**解决**：直接用 Makefile 里的原始命令：
```bash
# 代替 make test-unit
go test -tags=unit ./...

# 代替 make test-integration
go test -tags=integration ./...
```

---

### 坑 9：Ent Schema 修改后必须重新生成

**问题**：修改 `ent/schema/*.go` 后，代码不生效。

**解决**：
```bash
cd backend
go generate ./ent  # 重新生成 ent 代码
git add ent/       # 生成的文件也要提交
```

---

### 坑 10：前端测试看似正常，但后端调用失败（模型映射被批量误改）

**典型现象**：
- 前端按钮点测看起来正常；
- 实际通过 API/客户端调用时返回 `Service temporarily unavailable` 或提示无可用账号；
- 常见于 OpenAI 账号（例如 Codex 模型）在批量修改后突然不可用。

**根因**：
- OpenAI 账号编辑页默认不显式展示映射规则，容易让人误以为“没映射也没关系”；
- 但在**批量修改同时选中不同平台账号**（OpenAI + Antigravity/Gemini）时，模型白名单/映射可能被跨平台策略覆盖；
- 结果是 OpenAI 账号的关键模型映射丢失或被改坏，后端选不到可用账号。

**修复方案（按优先级）**：
1. **快速修复（推荐）**：在批量修改中补回正确的透传映射（例如 `gpt-5.3-codex -> gpt-5.3-codex-spark`）。
2. **彻底重建**：删除并重新添加全部相关账号（最稳但成本高）。

**关键经验**：
- 如果某模型已被软件内置默认映射覆盖，通常不需要额外再加透传；
- 但当上游模型更新快于本仓库默认映射时，**手动批量添加透传映射**是最简单、最低风险的临时兜底方案；
- 批量操作前尽量按平台分组，不要混选不同平台账号。

---

### 坑 11：PR 提交前检查清单

提交 PR 前务必本地验证：

- [ ] `go test -tags=unit ./...` 通过
- [ ] `go test -tags=integration ./...` 通过
- [ ] `golangci-lint run ./...` 无新增问题
- [ ] `pnpm-lock.yaml` 已同步（如果改了 package.json）
- [ ] 所有 test stub 补全新接口方法（如果改了 interface）
- [ ] Ent 生成的代码已提交（如果改了 schema）

## 五、常用命令速查

### 数据库操作

```bash
# 连接数据库
psql -U sub2api -h 127.0.0.1 -d sub2api

# 查看所有用户
psql -U postgres -h 127.0.0.1 -c "\du"

# 查看所有数据库
psql -U postgres -h 127.0.0.1 -c "\l"

# 执行 SQL 文件
psql -U sub2api -h 127.0.0.1 -d sub2api -f migration.sql
```

### Git 操作

零一 API 的二开开发与上游同步是两条不同流程。二开 UI 必须先冻结为新的
Approved UI Snapshot；普通上游同步只能更新后端及明确列出的 API/type 兼容
路径，不能顺带更新、重建或覆盖首页、Console、登录页及 recovered 静态资源。
完整发布与回滚原则见
[`docs/OPERATIONS.md`](docs/OPERATIONS.md#release-and-rollback) 和
[`ADR 0004`](docs/adr/0004-approved-ui-snapshot-at-edge.md)。

#### 当前二开开发（包括首页和 Console UI）

1. 在独立功能分支开发；不得修改 `.github/upstream-baseline.json` 的
   `release`/`commit`，也不得在功能分支合并新的 upstream Tag。
2. 新增或变更的二开路径必须登记到 `.github/upstream-baseline.json` 中已有的
   owner。所有不由 Approved UI Snapshot、带退出条件的 `legacy_hotfixes` 或精确
   `approved_backports` 保留的产品差异，还必须逐文件登记到
   `preserve_on_upstream_sync`；这里禁止目录、glob 和顺带扩权。仅有 Overlay 归属
   只表示允许修改，不表示普通上游同步时会保留。邀请归属模块的
   一次性补绑、安全与非追溯口径见
   [`ADR 0006`](docs/adr/0006-admin-affiliate-attribution.md)。功能测试和 Registry
   工作树检查必须通过：

   ```bash
   node --test .github/scripts/*.test.mjs
   node .github/scripts/verify-upstream-boundary.mjs --worktree
   node .github/scripts/verify-upgrade-readiness.mjs --recorded-sync --worktree
   ```

3. UI 变化必须完成桌面与移动端视觉回归、路由和 recovered asset closure
   检查。人工确认截图后，先提交已审核 UI，再创建新的、不可移动的 annotated
   Tag；随后把该 Tag 和解引用 commit 写入
   `.github/scripts/ui-baseline.json`：

   ```bash
   ui_ref='ui-approved-YYYY-MM-DD-rN'
   git tag -a "$ui_ref" -m "Approve Zero One UI snapshot YYYY-MM-DD"
   ui_commit="$(git rev-parse "$ui_ref^{commit}")"

   node -e '
     const fs = require("fs");
     const manifestPath = ".github/scripts/ui-baseline.json";
     const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
     manifest.baseline_ref = process.argv[1];
     manifest.baseline_commit = process.argv[2];
     fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
   ' "$ui_ref" "$ui_commit"
   git add .github/scripts/ui-baseline.json
   git commit -m "chore: advance approved UI snapshot to $ui_ref"

   node .github/scripts/verify-ui-boundary.mjs
   node .github/scripts/verify-ui-boundary.mjs --worktree
   sh deploy/zero-one/test-routing.sh
   node deploy/zero-one/verify-console-asset-closure.mjs \
     deploy/zero-one/recovered-frontend/console
   ```

   不得移动或复用旧的 `ui-approved-*` Tag；未经视觉审核时，UI boundary
   失败是正确的阻断结果，不能通过放宽 protected paths 让它变绿。

#### 未来同步上游稳定 Tag

每次升级必须使用独立 PR 和独立 worktree。`upstream/main`、`latest`、预发布
Tag 和未解引用的 Tag 都不能作为基线。建议一次性禁止误推 upstream：

```bash
git remote set-url --push upstream DISABLED
```

以下流程先保留产品 tip，然后使用 `--no-commit` 合并；在任何 merge commit
产生之前，从产品 tip 恢复 manifest 中的全部 protected UI 路径，以及 Overlay
Registry 的全部 `preserve_on_upstream_sync` 精确文件：

```bash
new_ref='vX.Y.Z'
git fetch origin main
sync_dir="../zero-one-sync-${new_ref#v}"
git worktree add "$sync_dir" -b "codex/sync-sub2api-$new_ref" origin/main
cd "$sync_dir"

test -z "$(git status --porcelain=v1 --untracked-files=all)"
test "$(git remote get-url upstream)" = \
  'https://github.com/Wei-Shaw/sub2api.git'
old_ref="$(node -p "JSON.parse(require('fs').readFileSync('.github/upstream-baseline.json')).release")"
old_commit="$(node -p "JSON.parse(require('fs').readFileSync('.github/upstream-baseline.json')).commit")"
git fetch --no-tags upstream "refs/tags/$new_ref:refs/tags/$new_ref"
new_commit="$(git rev-parse "$new_ref^{commit}")"
product_tip="$(git rev-parse HEAD)"

node .github/scripts/verify-upstream-boundary.mjs
node .github/scripts/verify-ui-boundary.mjs
git merge --no-ff --no-commit "$new_ref"

node -e '
  const fs = require("fs");
  const manifest = JSON.parse(fs.readFileSync(".github/scripts/ui-baseline.json"));
  for (const path of manifest.protected_paths) console.log(path);
' | while IFS= read -r protected_path; do
  git restore --source="$product_tip" --staged --worktree -- "$protected_path"
done

node -e '
  const fs = require("fs");
  const manifest = JSON.parse(fs.readFileSync(".github/upstream-baseline.json"));
  for (const path of manifest.preserve_on_upstream_sync) console.log(path);
' | while IFS= read -r protected_path; do
  git restore --source="$product_tip" --staged --worktree -- "$protected_path"
done
```

恢复后必须逐 owner 审查剩余 overlay/hotfix 冲突，并逐文件移植真正需要的 API/type
兼容变化。禁止使用 blanket `-X ours`、`-X theirs`、整目录 `checkout --theirs`
或依赖本机 `merge=ours` driver，也禁止重新构建 recovered Console 来消除冲突。
如果新 upstream Tag 修改了一个 `preserve_on_upstream_sync` 文件，先保持产品 tip
版本；有价值的上游差异必须另开产品变更，逐行移植并重新测试，不得在同步 PR
直接覆盖：

```bash
git diff --name-only --diff-filter=U
git diff --name-status "$old_ref" "$new_ref" -- frontend/src/api frontend/src/types

# product_tip 在合并前已通过同一门禁；这里再次检查合并中的 index/worktree。
# verifier 会阻止所有受保护 UI 差异，同时只放行 manifest 明列的
# frontend/src/api 与 frontend/src/types 兼容路径。
node .github/scripts/verify-ui-boundary.mjs --worktree
git diff --exit-code "$product_tip" -- .github/scripts/ui-baseline.json

node -e '
  const fs = require("fs");
  const manifest = JSON.parse(fs.readFileSync(".github/upstream-baseline.json"));
  for (const path of manifest.preserve_on_upstream_sync) console.log(path);
' | while IFS= read -r protected_path; do
  if ! git diff --quiet "$product_tip" -- "$protected_path"; then
    echo "protected product file differs from product_tip: $protected_path" >&2
    exit 1
  fi
done
```

合并内容审核完后，先提交真实的双亲 merge commit，再用一个后续提交更新
`.github/upstream-baseline.json`。`upstream_sync` 必须持久记录旧 upstream
Tag/commit、合并前的产品 commit，以及刚刚产生的 merge commit；后者必须
以 `product_tip` 为第一父提交、以 `new_commit` 为第二父提交。这个记录会被
以后每次 CI 和发布重放校验，不能通过省略 workflow 输入绕过：

```bash
test -z "$(git diff --name-only --diff-filter=U)"
git commit -m "merge: sync upstream $new_ref and preserve product overlays"
sync_merge="$(git rev-parse HEAD)"
test "$(git show -s --format='%P' "$sync_merge")" = "$product_tip $new_commit"

node -e '
  const fs = require("fs");
  const path = ".github/upstream-baseline.json";
  const manifest = JSON.parse(fs.readFileSync(path, "utf8"));
  manifest.release = process.argv[1];
  manifest.commit = process.argv[2];
  manifest.upstream_sync = {
    previous_release: process.argv[3],
    previous_commit: process.argv[4],
    product_commit: process.argv[5],
    merge_commit: process.argv[6],
  };
  fs.writeFileSync(path, `${JSON.stringify(manifest, null, 2)}\n`);
' "$new_ref" "$new_commit" "$old_ref" "$old_commit" "$product_tip" "$sync_merge"

# 逐条审查 legacy_hotfixes 的 valid_for_release 和 exit_condition，
# 同步版本文档，然后提交可审计的升级证明。
git add .github/upstream-baseline.json
git commit -m "chore: attest upstream sync $old_ref to $new_ref"

node --test .github/scripts/*.test.mjs
node .github/scripts/verify-upstream-boundary.mjs \
  --product-ref "$product_tip"
node .github/scripts/verify-upstream-boundary.mjs --worktree \
  --product-ref "$product_tip"
node .github/scripts/verify-ui-boundary.mjs
node .github/scripts/verify-ui-boundary.mjs --worktree
node .github/scripts/verify-upgrade-readiness.mjs --recorded-sync --worktree
sh deploy/zero-one/test-routing.sh
```

`product_tip` 必须是合并前记录的完整 40 位 commit，并且是当前同步提交的祖先；
`--product-ref HEAD`（或任何解引用后等于当前 `HEAD` 的名字）会被门禁直接拒绝。
`upstream_sync` 缺失、SHA 格式错误、指向当前 `HEAD`、不是双亲 merge、
旧 Tag 被重打，或 merge 改动了任一 `preserve_on_upstream_sync` 文件时，
CI 和 publish 都会失败。普通功能提交不需要新的产品 ref：门禁重放已记录
的历史合并边界，而不会把后续正常产品改动误判为 upstream 覆盖。
本次 v0.1.178 的 product manifest 是旧 schema v3，尚无
`preserve_on_upstream_sync`，因此只在这一次 bootstrap 中按空集合兼容。从
schema v4 开始，下一个 manifest 的保护清单必须是合并前清单的超集；
同步 PR 可以新增保护项，但不得删除旧项来隐藏同一次覆盖。

再完成 Go、Vue、Landing、visual regression、镜像构建和 live routing 测试后才可
合并 PR。普通上游升级严禁修改 `ui-baseline.json` 的已批准 Tag/commit，也严禁移动
任何 `ui-approved-*` Tag。

#### 冲突与回滚

- merge 尚未提交：执行 `git merge --abort`。protected UI 冲突始终恢复
  `product_tip`，API/type 兼容逐文件处理。
- merge 已提交但门禁失败：不要合并 PR；修复，或删除独立 worktree/分支后重做。
  禁止 reset/force-push `main`。
- merge 已进入 `main`：通过 revert PR 回退；若回退 merge commit，使用
  `git revert -m 1 <merge_commit>`。
- 已部署：按 `docs/OPERATIONS.md` 回切上一对 Backend/Edge 镜像 digest。数据库
  migration 不随代码自动回滚；只有验证过备份并安排维护窗口后才能单独回滚数据库。

### 前端操作

```bash
# 安装依赖（必须用 pnpm）
cd frontend
pnpm install

# 开发服务器
pnpm dev

# 构建
pnpm build
```

### 后端操作

```bash
# 运行服务器
cd backend
go run ./cmd/server/

# 生成 Ent 代码
go generate ./ent

# 运行测试
go test -tags=unit ./...
go test -tags=integration ./...

# Lint 检查
golangci-lint run ./...
```

## 六、项目结构速览

```
sub2api-bmai/
├── backend/
│   ├── cmd/server/          # 主程序入口
│   ├── ent/                 # Ent ORM 生成代码
│   │   └── schema/          # 数据库 Schema 定义
│   ├── internal/
│   │   ├── handler/         # HTTP 处理器
│   │   ├── service/         # 业务逻辑
│   │   ├── repository/      # 数据访问层
│   │   └── server/          # 服务器配置
│   ├── migrations/          # 数据库迁移脚本
│   └── config.yaml          # 配置文件
├── frontend/
│   ├── src/
│   │   ├── api/             # API 调用
│   │   ├── components/      # Vue 组件
│   │   ├── views/           # 页面视图
│   │   ├── types/           # TypeScript 类型
│   │   └── i18n/            # 国际化
│   ├── package.json         # 依赖配置
│   └── pnpm-lock.yaml       # pnpm 锁文件（必须提交）
└── .claude/
    └── CLAUDE.md            # 本文档
```

## 七、参考资源

- [上游仓库](https://github.com/Wei-Shaw/sub2api)
- [Ent 文档](https://entgo.io/docs/getting-started)
- [Vue3 文档](https://vuejs.org/)
- [pnpm 文档](https://pnpm.io/)
