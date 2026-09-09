# ADR 0016：账号倍率、上游声明倍率与账单快照分层展示

状态：倍率列、Provider Account 身份和 v10 资源决策继续有效；其中成本来源和未知值展示已由 [ADR 0017](0017-upstream-declared-account-cost.md) 取代。

## 问题

账号管理默认隐藏真正用于账号成本快照的 `rate_multiplier`，却展示了另一列由上游站点自行声明的观测倍率。同时，管理员用量表只显示账号名称、分组名称以及含义不清的 `A $...`，容易把同名分组、另一个 Provider Account 和两种倍率当成同一个事实。

恢复版 v9 还将历史账单缺失的 `account_rate_multiplier` 显示为 `0.0000`，而实际成本合同使用原生默认 `1x`，导致同一账单的倍率和成本自相矛盾。

## 决策

- 账号管理默认相邻显示“当前账号倍率”和“上游声明倍率（观测）”。旧列布局只迁移一次 `rate_multiplier` 的可见性，保留其他个人化选择；管理员之后仍可再次隐藏。
- 手动探测只更新观测值，不修改当前账号倍率。只有显式开启“同步上游声明倍率”，成功探测才把不含高峰的基准 `resolved_rate_multiplier` 写入当前账号倍率。当前高峰 `effective_rate_multiplier` 不直接覆盖账单快照。
- 账单使用“用户计费倍率”、“请求时上游倍率”、“用户扣费”和“账号成本”。管理员行与费用浮层都显示 `Provider Account 名称 + ID`，分组仍是独立列。
- 账号成本由 ADR 0017 规定；`upstream_rate_multiplier IS NULL` 显示待核算，显式 `0` 是有效零倍率。用户扣费仍读取 `actual_cost`。
- 不新增后端接口、数据库字段或迁移，不回填历史账单，不自动开启倍率同步。

## 恢复版资源与保护

当前 Console 使用 `cn-provider-shell-v10`，在 v9 的审查结果上只修改账号列、用量账单、倍率格式和对应语言键。`cn-provider-shell-v9` 保持字节不变。密码找回同步生成到 `password-recovery-v6`，只复用 v10 的 Vue、Router、API 和 Store；`password-recovery-v5` 保持字节不变。新的 `cn-provider-admin-v8` 在 v7 的四个供应商管理叶子页之外接管 `/admin/accounts`，使规范 Vue 账号列契约真正进入交付闭包；`cn-provider-admin-v7` 保持字节不变。

生成器对每个应改的最小化模块使用唯一 seam 验证；任一上游压缩结构变化都终止生成，不用宽泛文本替换继续产出似是而非的账单。

## 验收

- 规范 Vue 组件与 v10 恢复版同时验证未知、零和非零上游倍率、`account_stats_cost` 优先级、Provider Account 标识和管理员／用户字段隔离。
- 账号列布局验证新默认、一次性迁移及其他个人化选择不变。
- 生成器比较 v10 的规范输出，并固定 v9 和 v5 的关键 SHA-256。完整恢复版闭包、路由和桌面／移动端界面按 [ADR 0013](0013-affected-verification-policy.md) 验证。
