# ADR 0014：保留已退役数据管理的 HTTP 兼容层

状态：已接受。

旧 Data Management Agent 已由上游退役：健康查询固定返回 `enabled=false`，
其余有效请求固定返回 `DATA_MANAGEMENT_DEPRECATED`。原 Handler 在这一判定后
仍维护永远不可达的 RPC 成功流程和输入/输出模型，增加了无效维护面。

保留 `/api/v1/admin/data-management/*` 的路由、鉴权、step-up、JSON/路径校验
顺序、状态码及错误结构。健康查询继续返回 200，有效业务请求继续返回 503，
原本先做校验的无效请求继续返回 400。请求 JSON 类型由
`data_management_compat.go` 保留；当前 `/api/v1/admin/backups/*` 的备份服务、
数据库、设置和旧前端 API/type 导出均不改变。

删除不可达的 RPC 调用及其专属类型，用 HTTP 兼容、权限和参数顺序回归替代
旧内部 RPC 测试。下列上游路径以本记录绑定退役墓碑，未来同步不能重新引入：

- `backend/internal/service/data_management_grpc.go`
- `backend/internal/service/data_management_grpc_test.go`

本决策不恢复旧 Agent，不增加新的备份实现或修改业务数据。
