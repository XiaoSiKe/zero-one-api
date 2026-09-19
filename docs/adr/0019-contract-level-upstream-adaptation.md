# ADR 0019：上游同步保护产品契约，不冻结普通实现

状态：已接受。细化 ADR 0004、0013、0017 与 Product Change Protection 的执行边界。

## 背景

旧版上游边界把 `preserve_on_upstream_sync` 中每个文件同时解释为“产品归属”与“相对升级前提交字节不变”。清单扩展到一千余个文件后，普通网关修复、依赖安全更新、类型调整与上游新增能力都会被判定为覆盖产品代码，即使现有 ADR、接口和测试行为完全保持。这使保护机制从防止产品回退变成了阻止实现演进。

## 决策

`.github/upstream-baseline.json` schema 5 将两种责任分开：

- `preserve_on_upstream_sync` 是产品契约归属和连续性登记。同步不能静默删除登记项，但允许在 ADR、DTO 边界、迁移合同与测试保持成立时修改实现。
- `preserve_bytes_on_upstream_sync` 是明确的字节锁。只有已发布且 URL 不可变的生产资产进入该集合；同步或后续产品提交对其任何文件的修改都失败。
- `immutable_paths`、命名例外、临时 hotfix 与精确 backport 继续按原规则执行，不因本 ADR 放宽。

v0.2.7 同步时锁定既有 `cn-provider-shell-v10`、`cn-provider-admin-v8`、`online-image-v17`、`password-recovery-v6` 与 recovered landing。新的账号成本可见性能力发布到独立 `cn-provider-shell-v11`；v11 依赖 v10 并只增加一个生成器拥有的运行时模块，不能原地覆盖历史目录。

生产环境原有的通用 `gpt-image-2.5` 别名、模型目录与定价行为作为 Public Capabilities 契约登记；实现与测试允许继续吸收上游 Flare、Sunburst 等型号更新，但同步不能静默删除通用别名或把它降级成未登记的临时 hotfix。

## 验证边界

产品行为由 ADR、权限测试、服务端成本解析器测试、汇总守恒、导出合同、生成器幂等和定向 Chromium 用例保护。后端、API、未交付前端源码或类型变化不自动触发视觉回归；Usage 交付变化运行 Usage 套件；共享布局、路由、入口、未知交付路径以及本策略自身变化 fail closed 到完整 Chromium。

本 ADR 首次合入必须执行一次完整 Chromium 基线。之后，未进入生产交付图的上游源码更新不再重复检查全部页面。
