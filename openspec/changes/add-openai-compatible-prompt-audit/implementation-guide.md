# Prompt Audit 维护入口

模块已实现；本文保留接入矩阵，避免维护第二套配置、状态机和 SQL 定义。后续更新先核对真实调用者，再运行对应回归。

| 内容 | 唯一维护位置 |
| --- | --- |
| 能力和兼容边界 | [proposal](proposal.md) 与三个 [specs](README.md) |
| 模块职责、状态机、事务与失败策略 | [design](design.md) |
| 接入协议与副作用顺序 | 本文下方矩阵；新增路由必须更新结构测试 |
| 验证与上线准入 | [verification](verification.md) |
| 来源、许可与冻结材料 | [source-baseline](source-baseline.md)、[source-freeze](source-freeze/MANIFEST.md) |
| 历史实施证据 | [implementation-evidence](implementation-evidence.md) |

凭据不得进入公开 DTO、错误、日志、数据库提示词快照或文档。生产开关不因文档整理而启用；发布准入继续按 verification 执行。

原分步实施指南及已解决的设计选择保留在[不可变历史版本](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/openspec/changes/add-openai-compatible-prompt-audit/implementation-guide.md)。

## 11. 管理 API 映射

统一前缀：`/admin/prompt-audit`。全部复用现有管理员鉴权、安全中间件和管理操作审计。

| 方法 | 路径 | 用途 | 关键约束 |
| --- | --- | --- | --- |
| GET | `/config` | 读取公共配置 | 不回显密文/明文 token |
| PUT | `/config` | 原子保存完整配置 | 版本递增、allowlist 审计 |
| POST | `/endpoints/probe` | 测试保存或临时凭据 | 禁重定向、SSRF 防护、结果脱敏 |
| GET | `/runtime` | 运行态与指标 | 显示真实 degraded/error |
| GET | `/events` | 复合筛选分页 | 稳定排序；用户名/邮箱/API Key 名称分列 |
| GET | `/events/:id` | 事件详情 | 脱敏预览、归一结果和派生 issue_summaries |
| DELETE | `/events/:id` | 单条硬删除 | 审计、孤立 job 安全清理 |
| POST | `/events/batch-delete` | 按 ID 批量删除 | 限制 ID 数量、事务分批 |
| POST | `/events/delete-preview` | 预览筛选删除 | 强制起止时间，返回 count/max_id/hash/token |
| POST | `/events/delete-by-filter` | 确认筛选删除 | confirm=true，认证 token/actor/hash，限制 id≤max_id |

分组选择复用目标项目现有管理员 group 查询 API，不为 Prompt Audit 复制一份分组事实源。若现有 API 不适合轻量选择器，只新增薄的只读适配，并在实现前回写本表。

建议错误 envelope 继续使用项目管理 API 的统一结构；业务错误码稳定，内部 SQL/Redis/HTTP 错误不得透传。

## 12. 网关 Handler 路由矩阵

下表记录协议接入面；维护时以当前 Handler 和路由结构测试核对。路由别名共享相同 Handler，因此测试必须至少覆盖主路由与每类 alias。

| 协议/入口 | 路由 | 现有 Handler 文件/方法 | Stage | 拒绝构造器 |
| --- | --- | --- | --- | --- |
| Anthropic Messages | `POST /v1/messages` | `gateway_handler.go: Messages` 或 `openai_gateway_handler.go: Messages` | http | Anthropic error helper |
| OpenAI Responses | `POST /v1/responses`、`/responses`、`/backend-api/codex/responses` 及 subpath | `gateway_handler_responses.go: Responses` 或 `openai_gateway_handler.go: Responses` | http | Responses/OpenAI helper |
| OpenAI Chat Completions | `POST /v1/chat/completions`、`/chat/completions` | `gateway_handler_chat_completions.go: ChatCompletions` 或 `openai_chat_completions.go: ChatCompletions` | http | Chat/OpenAI helper |
| Gemini Generate/Stream | `POST /v1beta/models/*modelAction` | `gemini_v1beta_handler.go: GeminiV1BetaModels` | http | Google error helper |
| OpenAI Images | `POST /v1/images/generations`、`/v1/images/edits` | `openai_images.go: Images` | http | OpenAI helper |
| Grok image/video 文本请求 | images/videos 路由 | `grok_media.go: handleGrokMedia` | http | OpenAI helper |
| Responses WebSocket 首轮 | `GET /v1/responses`、`/responses`、`/backend-api/codex/responses` | `openai_gateway_handler.go: ResponsesWebSocket` | first_turn | close 4403/1013 |
| Responses WebSocket 后续轮次 | 每个 `response.create` | 同上 BeforeRequest/turn callback | subsequent_turn | close 4403/1013 |

维护时还必须从 `backend/internal/server/routes/gateway.go` 枚举所有携带用户文本的新增/旁路入口，重点复核：

- `/v1/images/generations/async`、`/v1/images/edits/async`。
- `/v1/images/batches` 及 batch item 的实际提交入口。
- Grok video generation/edit/extension。
- 任何不经过上述公共 Handler 的内部转发、兼容 alias 或后续新增路由。

对额外入口有两种合法结论：接入 Coordinator；或证明它已在上游公共 Handler 处检查且不会二次收费/二次扫描。结论和测试必须加入路由矩阵，不能静默跳过。

接入位置不变量：鉴权、body limit、基本 JSON/model 校验之后；账号选择、用户/账号并发 slot、订阅/余额预扣、usage 写入、上游拨号和 SSE 首字节之前。

## 13. HTTP、SSE、WebSocket 处理细节

| 情况 | HTTP/SSE | WS close | reason/code |
| --- | ---: | ---: | --- |
| Prompt Block | 403 | 4403 | `prompt_guard_blocked` |
| Guard Unavailable | 503 | 1013 | `prompt_guard_unavailable` |
| Guard Invalid response | 503 | 1013 | `prompt_guard_invalid_response` |

- HTTP/SSE 必须保留各协议 envelope，不能所有协议统一成 Gin `{"error":"..."}`。
- OpenAI Chat/Responses 在 error 对象添加稳定 `code`；Claude 保留 permission_error/api_error type 并添加可选 `code`。
- Gemini 保留数值 HTTP `error.code` 和 canonical status，只在 `google.rpc.ErrorInfo.reason` 放稳定代码；metadata 仅 request_id。
- SSE 在 Guard 结果前不得写 status/header/data/comment/keepalive；否则无法返回 403/503。
- WS 握手本身没有 Prompt，不扫描。首个 `response.create` 在任何本轮资源/上游副作用前扫描。
- 后续每个 `response.create` 重新提取本轮输入并标记 `subsequent_turn`。
- WS close reason 长度必须在协议限制内，只使用稳定短码；详细内部错误只进脱敏指标/日志。
- Legacy moderation 同时 Block 时，继续使用其原错误/close 行为和文案。

