# ADR 0017：Provider Account 成本使用请求时上游声明倍率

状态：已接受。取代 [ADR 0015](0015-v023-cost-dashboard-and-rollback-compatibility.md) 与 [ADR 0016](0016-billing-rate-display-clarity.md) 中使用本地账号倍率计算 Provider Account 成本的部分；不改变客户实际扣费。

## 决策

管理员账单、账号窗口、模型／分组／端点统计与仪表盘的 Provider Account 成本统一为：

`COALESCE(account_stats_cost, total_cost) × upstream_rate_multiplier`。

`upstream_rate_multiplier` 是请求开始时根据账号最近一次成功上游声明计算并冻结的有效倍率。它使用 `resolved_rate_multiplier`，按声明时区和请求时间应用高峰系数；与是否把声明同步到本地账号倍率无关。账号凭据、Base URL 或代理身份改变时，既有边界继续清除旧声明，防止跨上游复用。

本地 `account_rate_multiplier` 继续服务账号调度、额度核算、审计和旧镜像回滚，但不再是 Provider Account 成本来源。修改本地倍率、重新探测或启用同步不能改写历史账单。

显式上游零倍率表示已确认零成本。没有请求时声明、声明晚于请求、声明不完整，或请求不是声明覆盖的 Token 计费范围时，账号成本为待核算；不得用 1x、0x、当前账号设置或当前探测结果回算。不回填历史记录。

客户扣费继续读取 `actual_cost`，标准金额继续读取 `total_cost`。普通 User DTO 和页面不公开 Provider Account、上游倍率或账号成本。

## 聚合与兼容

聚合使用 `zero_one_cost_sum`：任一组成记录缺少上游成本证据时，整体账号成本保持未知。兼容 hourly/daily 表继续写入旧 `account_cost` 供旧镜像读取，同时用 `upstream_account_cost` 与同代 `upstream_cost_computed_at` 保存当前声明口径；旧 writer 更新后，当前 reader 不把旧值冒充新口径。

现有 `usage_logs.upstream_rate_multiplier`、迁移 234、DTO 和探测快照已经提供所需证据，本决策不增加迁移或数据库字段。

## 展示与验收

- 账单红色副金额标为“账号成本”；蓝色主金额仍是用户扣费。
- 浮层显示请求时上游倍率、Provider Account 名称与 ID、账号成本及待核算状态，不把本地倍率标成成本倍率。
- 导出未知成本为空，零成本为零；不把未知写成零。
- 回归必须覆盖本地倍率与上游倍率不同、上游零倍率、缺失倍率、高峰时区、高精度倍率、历史本地倍率变化和普通 User 字段隔离。
