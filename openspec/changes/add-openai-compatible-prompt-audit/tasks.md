# Prompt Audit 实施状态

历史实施清单已全部勾选；完整逐项记录见[不可变版本](https://github.com/XiaoSiKe/zero-one-api/blob/10da249486895f287ef745fe6f5468db9ec77a2b/openspec/changes/add-openai-compatible-prompt-audit/tasks.md)。这不代表以后每次发布自动通过，也不授权启用生产 blocking。

维护与验收按以下入口进行，避免在已完成清单里维护第二套需求：

- 行为合同：[specs 与阅读索引](README.md)。
- 架构、状态转换和失败策略：[design](design.md)。
- API、协议入口与副作用顺序：[implementation-guide](implementation-guide.md)。
- 可执行回归、灰度和生产准入：[verification](verification.md)。
- 来源与历史验证：[implementation-evidence](implementation-evidence.md)。

后续新需求和缺陷按仓库约定进入 GitHub Issues；不能通过改动历史勾选状态替代新的实现与验证证据。
