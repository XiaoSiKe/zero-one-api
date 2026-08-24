# 零一 API 技术方案

## Baseline And Change Boundary

项目的稳定技术基线为
[`Wei-Shaw/sub2api v0.1.179@75f88be5f75c27771836b586f7de1503afa0e3bc`](https://github.com/Wei-Shaw/sub2api/tree/75f88be5f75c27771836b586f7de1503afa0e3bc)。
公开 fork [`01-Yang/zero-one-api`](https://github.com/01-Yang/zero-one-api)
配置为 `origin`，官方仓库 `Wei-Shaw/sub2api` 配置为只读
`upstream`。`main` 是零一 API 唯一产品、CI 和发布分支；不保留第二产品分支。

`.github/upstream-baseline.json` 是 schema v4 Overlay Registry，所有常规回放路径必须唯一归属 `Console Skin`、`Public Capabilities`、`Supported Preview`、`Visual Regression` 或 `Marketing Source Assets`。Registry 只接受精确文件或精确目录，不接受 glob 或未命名的顺带改动。Product Change Protection 会对固定 Upstream Baseline 后的全部产品差异做闭包检查：每个差异必须由 `preserve_on_upstream_sync`、Approved UI Snapshot、带退出条件的 legacy hotfix 或精确 backport 之一保留，仅有 Overlay 归属会使 readiness 失败。`preserve_on_upstream_sync` 禁止目录和 glob，每一项必须唯一归属一个 Overlay，且从 schema v4 开始只能新增、不能在上游同步时删除。`upstream_sync` 持久绑定旧 upstream Tag/commit、合并前 product tip 和真实双亲 merge commit，CI 与 publish 会重放 product-to-merge 差异并拒绝任一受保护文件被覆盖。临时生产正确性修补保留在带退出条件的独立 legacy hotfix 区块；安全 backport 继续锁定逐文件 SHA-256 与 Git mode。`frontend/src/api/` 与 `frontend/src/types/` 默认不可变，只有 Registry 中精确命名并绑定 owner 且逐文件进入 `preserve_on_upstream_sync` 的兼容文件例外可以通过，相邻文件仍被拒绝。v179 的渠道定价 API 例外只把数据库可空的 multiplier 字段表达为可选且可空，使已批准 Console 能继续构建，不改变请求或响应字段。

| Overlay owner | Interface and seam |
| --- | --- |
| `Console Skin` | Console 表面、共享壳层、色板与展示组件；不授权数据或权限语义变更。 |
| `Public Capabilities` | Public Site、公告、公开状态，以及受鉴权的邀请归属等产品合约；只拥有列出的路径和具名 immutable 单文件例外。 |
| `Supported Preview` | Zero One Compose、Caddy、镜像与 CI 合约；不授权通用上游部署路径。 |
| `Visual Regression` | 固定环境的像素门禁及设计核对源 artifact；历史 `artifacts/design-qa/` 不是正式 snapshot baseline。 |
| `Marketing Source Assets` | 四张受管海报及用途清单；不得进入运行时镜像或被产品代码引用。 |

Owner 表示路径的冲突审阅责任，不允许重复 owner。机械色板迁移若必须触及
同时含产品逻辑的文件，仍保留更敏感的 `Public Capabilities` owner，并在
独立 `Console Skin` 提交中仅修改 class 使用点；不得为此新增共享目录权限。

`Public Capabilities` 内部继续按窄接口拆分。`Console Channel Status Truth
State` 只负责把空列表和未知探测状态 fail-closed 为 unavailable；`Public
Pricing Projection` 只消费既有 `/api/v1/model-plaza` 并投影公开价目；
`Public Site Content Composition` 只拥有 Landing 的静态文案、导航和交互编排。
它们均不授权 CSS、色板、Action 高光实现或监控明细字段。

## Runtime Architecture

```text
Internet
  -> Caddy :80/:443
       -> React static files for exact GET/HEAD api.01yapi.com/
       -> Approved UI Snapshot for documented api.01yapi.com Console paths
       -> Sub2API :8080 for every other api.01yapi.com request
       -> 308 same-URI compatibility redirect for every app.01yapi.com request
  -> Sub2API
       -> PostgreSQL
       -> Redis
```

Sub2API remains one Go process and keeps its embedded Vue SPA as an unmatched-route fallback. The approved Console routes and assets are served from the recovered UI snapshot in the project-owned edge image, while Sub2API remains authoritative for every API, authentication, authorization and persistence operation. See [ADR 0004](adr/0004-approved-ui-snapshot-at-edge.md).

The React app lives in `landing/`, uses Vite with base `/_landing/`, and is built into the edge image. It is not embedded in Vue and does not add a second frontend runtime to the Console.

## Public Interfaces

| Host and request | Result |
| --- | --- |
| `api.01yapi.com`, exact `GET/HEAD /` | React Public Site |
| `api.01yapi.com/_landing/assets/*` | Immutable hashed React static assets |
| `api.01yapi.com/_landing/THIRD_PARTY_NOTICES.txt` | No-cache third-party notice |
| `GET /api/v1/announcements/public` | Anonymous, field-limited Public Announcement feed |
| `GET /api/v1/channel-status/summary` | Anonymous aggregate only when its independent public switch is enabled |
| Approved `api.01yapi.com` Console page and asset routes, including `/dashboard`, `/keys` and `/monitor` | Recovered Approved UI Snapshot in the edge image |
| Every remaining `api.01yapi.com` request, including `/v1/*` | Transparent Sub2API proxy |
| Every `app.01yapi.com` method and URI | Non-cacheable 308 redirect to the same path and query on `https://api.01yapi.com` |
| `01yapi.com` and `www.01yapi.com` | 308 redirect to the primary host with URI retained |

The Zero One overlay adds two deliberately narrow public product APIs. Public
Announcements require explicit `public_visible` authorization and return only
`id`, `title`, and `content`, with at most 20 active, enabled, currently effective
rows. Public Channel Status is separately authorized by
`public_channel_status_enabled`, defaults off, and fails closed when settings
cannot be read. Its summary aggregates every enabled monitor without exposing
channels, providers, models, groups, volumes, error details, or credentials. The
Public Site also reads `GET /api/v1/settings/public`; capability switches remain
off until that request succeeds rather than being inferred from a `404`. The
Public Announcement entry is not one of those switches: an old backend `404`
keeps the entry visible and produces a retryable unavailable state instead of
silently removing it. The separate Landing Notice banner is a single site-level
message and optional link from public settings; it does not read Announcement
rows and cannot grant `public_visible` authorization.

Manual Affiliate Attribution is an authenticated administrator capability, not
a public API. It repairs only a never-attributed invitee, accepts only a human
JWT administrator, rejects Admin API Keys, and follows the existing sensitive-
operation step-up policy (recent TOTP is required when that policy is enabled).
It persists the actor and binding time, treats the binding time as a no-rebind
tombstone, rejects self, cyclic and replacement relationships, and never
recalculates historical rebates.
Eligibility begins at the binding timestamp while the existing validity window
remains anchored to the invitee affiliate profile's creation time. See
[ADR 0006](adr/0006-admin-affiliate-attribution.md).

The Console keeps the server-provided site settings authoritative, but its compiled display fallback is also `零一 API` with the approved tagline. This prevents a settings timeout or first-paint race from exposing the upstream product name; it does not change the settings API or persistence behavior.

Two presentation-only differences are intentional and reviewed. An unset local
theme preference starts in dark mode, while an explicit `light` or `dark` choice
is preserved. CC Switch imports use the configured site name (or the `零一 API`
display fallback) only for the provider's human-readable `name`; the app,
endpoint, API key, config format and usage script fields remain unchanged. Text
that enters a protocol test request, including the English Grok TTS probe, keeps
the upstream technical default even when its surrounding placeholder is branded.

The proxy deliberately uses a catch-all rule. Sub2API exposes `/v1`, `/v1beta`, `/responses`, `/backend-api/codex`, `/antigravity`, root-level media endpoints and WebSockets; a hand-maintained allowlist would silently break current or future clients.

## Build And Release

1. Install and test the Vue frontend using the existing pnpm lockfile.
2. Install and test `landing/` using its own lockfile.
3. Build the root Dockerfile to compile Vue, embed it in Go and produce the custom Sub2API image.
4. Build `deploy/zero-one/Dockerfile.edge` to compile React and package Caddy with static assets.
5. Tag images with source revision and deploy by immutable digest. Do not deploy `latest`.
6. Validate Compose and Caddy configuration before replacing running containers.

The Sub2API and edge images must come from the same source commit. Apply and
verify migrations, deploy and verify the Sub2API image, then switch the matching
edge image. Image rollback does not reverse a database migration; see
[ADR 0003](adr/0003-public-capabilities-and-coherent-release.md).

上游同步以 `Wei-Shaw/sub2api` 正式稳定 tag 为唯一 baseline，不直接合并
`upstream/main`。通用 `latest` 镜像、管理后台一键升级和上游 README
中的一键安装/覆盖命令也不得用于 Zero One 产品部署。只有符合上述生产正确性例外的已审核提交才可临时 cherry-pick，且不得将它伪装成 stable tag baseline。更新时获取 `upstream` tags，从
`main` 创建 `codex/sync-sub2api-vX.Y.Z` 短期集成分支，
合并新的稳定 tag，运行全部测试、构建和视觉验收后，再通过 PR
合回 `main`。每次同步同时更新本节的 tag 与完整提交 SHA。
主题改动保持集中，使新增上游页面继承设计系统，避免逐页分叉。

`v0.1.179` 保留 Zero One 已验证的深拷贝隔离、分组定价快照 v20、创建默认值、复制/校验、durable cache invalidation、Batch Image 和 Model Plaza 传播修复。上游本版本将长上下文计费门控改为分组或账号任一启用即生效；Zero One 为避免存量账号静默改变账单，继续采用分组与账号同时启用的口径，同时兼容 v179 的渠道区间倍率。本版本还移除每个模型请求都会输出完整会话关联信息的四段 `[DEBUG-STICKY]` 日志。后端权限仅限 `.github/upstream-baseline.json` 的 `legacy_hotfixes` 区块所列精确文件。下一个稳定 tag 一旦包含等价修复，同步 PR 必须删除重复 backport 和对应 legacy path，不得将临时权限永久化。

`v0.1.179` 延续 Go `1.26.6` 基线，`.github/upstream-baseline.json` 的 `approved_backports` 保持为空列表。退出判定依据是稳定 Tag 中的等价内容，而不是将精确 commit 误记为已合并。

`v0.1.179` 仍未包含分组用量汇总触发器测试的 session-timezone 等价修复。Zero One 只将这两项测试的“今日”改为 DB session 的 `CURRENT_DATE`，不修改 migration 或运行时语义。该精确测试路径位于独立的 CI timezone legacy hotfix 区块，下一个包含等价修复的稳定 Tag 必须将其移除。

The repository's dedicated Zero One CI job validates React, Vue, Go unit and
integration suites, Compose,
the root Sub2API Docker build and the Caddy edge Docker build independently.
It uses source-revision image tags as build artifacts only. The manual
`Zero One Publish` workflow is the sole registry publisher: it accepts a full
commit SHA from `main` plus the exact confirmation word `PUBLISH`,
requires a successful Zero One CI run and publishes immutable multi-architecture
GHCR images with SBOM and provenance attestations. It never publishes `latest`.
Production deployment records the resulting digests and uses them with
`--no-build`.

## Network Requirements

Caddy is the only public process. PostgreSQL, Redis and Sub2API have no host port mapping. Caddy removes common client-supplied CDN IP headers and rebuilds `X-Real-IP` and `X-Forwarded-For` from the direct socket peer; Sub2API trusts only this internal proxy boundary. Keep `forwarded_client_ip_headers` empty while the origin is DNS-only and directly reachable.

Caddy leaves streaming flush behavior at its automatic default, applies no proxy response compression, and does not cache API responses. Static React assets may use immutable caching. WebSocket upgrades and client cancellation pass through the normal Caddy reverse proxy transport.

v1 uses DNS-only records to avoid adding a CDN buffering layer. The canonical,
compatibility, apex and `www` domains point at the same edge host. The retired
`api.01yapi.cc` host is not part of the product and must not be configured or
monitored by this deployment.

The edge image carries the Public Site and its third-party notice. The notice
lives in `landing/public/` and therefore enters Vite's `dist/` output before
the edge image copies that output into Caddy. This preserves the upstream root
`.dockerignore` boundary while meeting the React Bits attribution requirement.

## Application Settings

After first login, configure the existing administrator settings:

- `site_name`: `零一 API`
- `site_subtitle`: `从零到一，连接每一次模型调用。`
- `api_base_url`: `https://api.01yapi.com`
- `frontend_url`: `https://api.01yapi.com`
- `registration_enabled`: `true`
- `payment_enabled`: `false`
- `promo_code_enabled`: `false`
- `invitation_code_enabled`: `false`

Deployment must use `RUN_MODE=standard`; simple mode hides the user and administrator Redeem Code routes.

These values intentionally remain in the existing administrator settings rather
than changing Sub2API's database defaults. A new database therefore must not be
announced or exposed as production until an administrator saves every value
above and the public-settings release gate passes:

```bash
node deploy/zero-one/verify-public-settings.mjs https://api.01yapi.com/api/v1/settings/public
```

The public endpoint verifies every listed value except `frontend_url`, which is
administrator-only and must be checked on `/admin/settings` during release.
Before enabling OAuth or captcha, update their callback and origin allowlists to
the same canonical origin. The gate requires Node.js 20 or newer on the release
workstation; Node is not a runtime dependency of the production containers.
