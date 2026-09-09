# ADR 0018：v0.2.4 后代码退役与模块归属

状态：已接受。

## 背景

v0.2.4 同步完成后，重新从路由、异步入口、组件 import、生成器与恢复版入口建立引用闭包。部分早期组件、适配器和测试已经没有生产消费者；继续保留会让后续上游同步误判为仍需兼容的产品能力，也会让同一功能出现多个名义 owner。

## 决策

只有在 v0.2.4 最终入口中为零生产引用、且存在当前实现或明确已退役的模块才可删除。删除路径必须同时登记在 `.github/upstream-baseline.json` 的 `retired_preserved_paths`，以后同步上游时不得静默复活。只验证被删实现的测试、stub、barrel export 和失真注释随实现一起退役；仍覆盖当前行为的测试保留。

本轮退役：

- 旧 Admin Order detail/table、Payment Method 图表和 Top Users 榜单；订单当前入口由 `AdminOrdersView`、`OrderTable` 与退款对话框负责。
- 旧 `PaymentQRDialog`、`StripePaymentInline`；当前支付页和独立支付路由负责支付流程。
- 无消费者的 `Skeleton`、`StatCard`、`StatusBadge` 与 common/auth barrel；组件改为直接 import。
- 旧 Profile bindings wrapper、Ops email/runtime settings cards 与 Affiliate rebates wrapper；当前页面内 owner 或重定向路由负责对应行为。
- 无消费者的 `useForm`、Codex 客户端 helper、Landing `SpecularAction` 别名及其专属测试。

退役墓碑的精确路径如下（实现和只覆盖该实现的测试必须成对登记）：

- `frontend/src/api/codex.ts`
- `frontend/src/api/__tests__/codex.spec.ts`
- `frontend/src/components/admin/payment/AdminOrderDetail.vue`
- `frontend/src/components/admin/payment/AdminOrderTable.vue`
- `frontend/src/components/admin/payment/PaymentMethodChart.vue`
- `frontend/src/components/admin/payment/TopUsersLeaderboard.vue`
- `frontend/src/components/common/Skeleton.vue`
- `frontend/src/components/common/StatCard.vue`
- `frontend/src/components/common/StatusBadge.vue`
- `frontend/src/components/common/index.ts`
- `frontend/src/components/payment/PaymentQRDialog.vue`
- `frontend/src/components/payment/StripePaymentInline.vue`
- `frontend/src/components/payment/__tests__/PaymentQRDialog.spec.ts`
- `frontend/src/components/user/profile/ProfileAccountBindingsCard.vue`
- `frontend/src/composables/useForm.ts`
- `frontend/src/composables/__tests__/useForm.spec.ts`
- `frontend/src/views/admin/affiliates/AdminAffiliateRebatesView.vue`
- `frontend/src/views/admin/ops/components/OpsEmailNotificationCard.vue`
- `frontend/src/views/admin/ops/components/OpsRuntimeSettingsCard.vue`
- `frontend/src/views/auth/index.ts`
- `landing/src/components/SpecularAction.tsx`
- `landing/src/components/SpecularAction.test.tsx`

历史设计核对与旧预览入口的精确退役路径：

- `design-qa.md`
- `artifacts/design-qa/034-exact-ui-functional-status.png`
- `artifacts/design-qa/034-ui-column-settings-layer-fixed.png`
- `artifacts/design-qa/comparison-1440-final.jpg`
- `artifacts/design-qa/comparison-brand-mark-header.jpg`
- `artifacts/design-qa/comparison-quick-start-scroll.jpg`
- `artifacts/design-qa/comparison.html`
- `artifacts/design-qa/current-1440-billing.png`
- `artifacts/design-qa/current-1440-model-plaza.png`
- `artifacts/design-qa/current-1440-pricing.png`
- `artifacts/design-qa/current-1440-status.png`
- `artifacts/design-qa/latest-desktop-scroll-1440x900.png`
- `artifacts/design-qa/latest-desktop-top-1440x900.png`
- `artifacts/design-qa/latest-mobile-scroll-390x844.png`
- `artifacts/design-qa/latest-mobile-top-390x844.png`
- `artifacts/design-qa/local-1440-pricing-final.png`
- `artifacts/design-qa/local-1440-pricing.png`
- `artifacts/design-qa/local-1440-top-final.png`
- `artifacts/design-qa/local-1440-top.png`
- `artifacts/design-qa/local-390-menu-final.png`
- `artifacts/design-qa/local-390-menu.png`
- `artifacts/design-qa/local-390-pricing-final.png`
- `artifacts/design-qa/local-390-pricing.png`
- `artifacts/design-qa/local-390-top-final.png`
- `artifacts/design-qa/local-390-top.png`
- `artifacts/design-qa/local-900x520-final.png`
- `artifacts/design-qa/recovered-old-1440-billing.png`
- `artifacts/design-qa/recovered-old-1440-pricing.png`
- `artifacts/design-qa/recovered-old-1440-status.png`
- `artifacts/design-qa/reference-1440-pricing.png`
- `artifacts/design-qa/reference-1440-top.png`
- `artifacts/design-qa/restored-2026-08-18-status-desktop.png`
- `artifacts/design-qa/restored-2026-08-18-status.png`
- `deploy/zero-one/compose.production-baseline-preview.yml`

v0.2.4 重新生成前即未发布的中间资源与失效测试 helper：

- `backend/internal/integration/e2e_helpers_test.go`
- `deploy/zero-one/recovered-frontend/console/assets/password-recovery-v6/_plugin-vue_export-helper-BzMx7MZG.js`
- `deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v8/AccountsView-CqGntwat.js`
- `deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v8/GroupsView-BoyyLsHH.js`
- `deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v8/cnProviderAdminLeaf-BhlEtnfM.js`
- `deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v8/index-Cd_2Lby2.js`
- `deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v8/index-DIg8WdAu.js`
- `deploy/zero-one/recovered-frontend/console/assets/cn-provider-admin-v8/platforms-DPfm85ol.js`

模块 owner 固定为：

- Console Skin：Console 组件、管理页、组合式函数和它们的交互测试。
- Public Capabilities：API 客户端、产品路由与行为合同、本文档。
- Supported Preview：恢复版生成、路由和 Compose 验证。
- Visual Regression：正式 Playwright 场景与已批准截图。

结构收敛后：

- `GroupEditorDialog` 是创建／编辑分组字段的唯一 UI 定义；两个提交处理器继续分别拥有 create/update payload 和重置周期。
- `AccountEditorDialog` 是账号创建／编辑的唯一内部入口；公开的 `CreateAccountModal` 与 `EditAccountModal` 仅保留原 props/emits 兼容。模式专属 OAuth／资格流程位于内部 panel，共同凭据、模型映射、倍率、WS 与平台判断继续由既有共享 helper 和组件负责。
- SettingsView 仍唯一拥有加载、统一 draft、保存序列化、TOTP step-up 与键盘 Tab 状态；Security、Gateway、Users、General、Agreement、Features、Payment、Email、Backup 九个 section component 只声明对应 DOM owner，不增加 DTO、store 或保存 API。Channel Monitor 排行榜设置归 Gateway section。
- 未发布的 `cn-provider-admin-v8` 由 v0.2.4 最终源码重新生成并同时接管 accounts、groups、channels、channel monitor、ops、subscriptions 六个入口；v7 保持字节不变。`online-image-v17` 是本次新命名空间，已发布 v16 不改。

历史设计核对材料不再作为可变工作区文件保存；正式截图由 Visual Regression owner 管理，历史说明引用产生它们的不可变 Git commit。旧 v0.1.183 production-baseline preview Compose 及其专属断言退役，当前回滚只使用受支持且经过门禁的路径。

## 约束

- 上游同步后必须重新检查引用闭包，不能沿用旧版本的“死代码”判断。
- 已发布恢复资源与不可变 URL 不得修改；新基线只能创建新版本目录。
- 结构收敛不得改变请求 payload、DOM 语义、焦点顺序、错误展示或保存 API。
- `retired_preserved_paths` 是退役墓碑；恢复任一路径必须由后续 ADR 明确撤销本决定并补回测试。

## 验证

- `rg` 引用闭包、Console/Landing typecheck、lint、全量单测和正式 build。
- 上游边界、升级准备、恢复版生成幂等与历史资产 SHA-256 门禁。
- 固定 Playwright Chromium 桌面、移动端与 320px 视觉/行为验证。
