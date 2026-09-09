# ADR 0012：管理员仪表盘只保留消费卡片

状态：部分被 [ADR 0015](0015-v023-cost-dashboard-and-rollback-compatibility.md) 取代。消费卡片、不可变资源和日期浮层继续有效；用户主数字、成本口径及消费／Token 趋势由新记录负责。

后续说明：[ADR 0013](0013-affected-verification-policy.md) 取代本记录的无条件完整视觉执行要求。`cn-provider-shell-v7`、v8 和 `password-recovery-v3`、v4 保持不可变；v0.2.3 的成本恢复已固定为 v9/v5，[ADR 0016](0016-billing-rate-display-clarity.md) 在不改变数值口径的前提下使用 v10/v6 收敛倍率展示。

## 决策

管理员仪表盘不再增加独立财务区。第一行原“API 密钥”卡片改为“总消费”，原“账号”卡片改为“今日消费”；其余原生卡片、图表、日期筛选和快捷操作保持原样。

两张消费卡读取原生 `DashboardStats` 的 `total_actual_cost` 和 `today_actual_cost`，含义均为客户实际扣费。金额使用美元符号、千位分隔和固定两位小数。它们复用仪表盘既有 `snapshot-v2` 请求、缓存、错误处理与手动刷新，不建立第二套 API 客户端、逐日查询、轮询、身份恢复或 Chart 生命周期。

当前 Console 不展示“今日收益”“总收益”“每日收益”或独立财务明细。ADR 0015 增加的实际消费与 Token 趋势复用既有 `snapshot-v2` 和日期控件，不恢复 `dashboard-finance-v4`。

后端已经持久化的上游成本证据、数据库迁移、`total_account_cost` 和 `finance` 兼容字段继续保留。它们仍服务账单明细、导出、成本审计、旧客户端和回滚，不因删除当前收益 UI 而反向删除或回写数据。

## 日期浮层

ADR 0010 的日期浮层修复继续有效。日期节点保留在 Vue 父节点中，通过浏览器顶层显示；重复打开、Escape 关闭和 320px 窄屏布局仍是受保护行为。该修复不依赖旧财务适配器。

## 不可变资源与生成链

已发布的 `dashboard-finance-v1` 至 `dashboard-finance-v4`、`cn-provider-shell-v1` 至 `cn-provider-shell-v6` 及 `password-recovery-v1` 至 `password-recovery-v2` 保持原 URL 和字节内容，避免缓存引用、旧页面与回滚失效。

当前恢复版使用 `cn-provider-shell-v10`。v9 仍固定原生成本、用户总数和两张趋势图，v10 只增加 ADR 0016 的倍率与账号标识清晰度；已发布的 v7–v9 保持原字节。CN Provider 使用 `cn-provider-admin-v8` 接管账号页，v7 保持不可变；Online Image 继续使用 `online-image-v16`。密码找回同步生成到 `password-recovery-v6`，复用 v10 的 Vue、Router、API 和 Store；v5 继续复用 v9 并保持不可变。

## 保护与验收

- 维护源码、生成器、恢复版入口、v7/v3 资源、单元测试、浏览器测试、消费卡截图、日期浮层和本 ADR 均登记在 Product Change Protection 中。
- 单元测试验证两张既有卡片的字段映射与固定两位小数。
- 生成器测试验证补丁 seam 唯一、v6 不变、v7 仅修改授权模块，并验证密码找回使用当前运行时。
- 浏览器测试验证桌面和手机端的“总消费 / 今日消费”、两位小数、无收益 UI、无额外 `/admin/usage/stats` 请求，以及四个日期页面的重复打开与 320px 布局。
- 旧财务适配器的专用计算、实时数据库和收益截图验收随当前入口退役；后端账单与成本测试继续保护仍在使用的数据合同。

以下旧验收文件由本决策逐文件退役；Product Change Protection 保留这些路径的墓碑，禁止在没有新决策的情况下重新引入：

- `deploy/zero-one/dashboard-finance.test.mjs`
- `deploy/zero-one/test-dashboard-finance-live.mjs`
- `visual-regression/tests/dashboard-finance.behavior.spec.ts`
- `visual-regression/tests/__screenshots__/chromium-desktop/console-finance-summary.png`
- `visual-regression/tests/__screenshots__/chromium-desktop/console-finance-trends.png`
- `visual-regression/tests/__screenshots__/chromium-mobile/console-finance-summary.png`
- `visual-regression/tests/__screenshots__/chromium-mobile/console-finance-trends.png`
