# 零一 API

## Product Register

| Item | Decision |
| --- | --- |
| Product name | 零一 API |
| Product type | Model API relay service built on Sub2API |
| Canonical product entry | `https://api.01yapi.com` |
| Console entry | `https://api.01yapi.com/dashboard` |
| Compatibility entry | `https://app.01yapi.com/*` permanently redirects to the same path on `api.01yapi.com` |
| Registration | Public registration is enabled |
| Billing in v1 | Redeem Code only; online purchase remains disabled |
| Brand form in v1 | Text wordmark only until an approved logo is supplied |

## Users

零一 API 面向独立开发者、团队和需要使用 AI 能力的普通用户。开发者与团队希望用一个稳定、清晰的 API 入口接入模型；普通用户主要通过控制台完成注册、兑换、密钥管理和用量查看。

## Product Purpose

零一 API 基于 Sub2API 提供模型 API 中转、账号池管理、用量计费和管理员运维能力。首版成功标准是：用户能自行注册、通过兑换码获得额度、创建密钥并从唯一推荐地址调用 API；管理员能沿用开源后台完成日常运维。

## Brand Personality

克制、清晰、可靠。品牌表达简短直接，不夸大模型能力，不使用“无限”“绝对稳定”或无法验证的承诺。

## Anti-references

- 不做青紫渐变、霓虹发光、玻璃拟态或装饰光球组成的通用 AI SaaS 页面。
- 不复制 Apple 的商标、字体文件、图片或版式细节；只借鉴其克制、留白和动效节奏。
- 不把运维控制台做成营销首页，不用大字号和重复卡片妨碍高频操作。
- 不公开宣传多个等价产品地址；`api.01yapi.com` 始终是官网、Console 和模型调用的唯一推荐入口。

## Design Principles

1. 把复杂留在系统内部，把清晰的入口交给用户。
2. 官网负责建立信任并引导行动，控制台负责高效完成任务。
3. 品牌改造不改变 Sub2API 的业务行为和权限边界。
4. 通过稳定的层级、间距和反馈表达质感，不靠装饰制造高级感。
5. 所有状态、故障和域名兼容说明都应准确，不暗示不存在的高可用能力。

## Accessibility & Inclusion

目标为 WCAG 2.1 AA。键盘操作必须有清晰焦点，移动端触控目标不小于 44px，文字和状态不能只依靠颜色区分。所有持续动画都支持 `prefers-reduced-motion`，WebGL 不可用时仍可完成注册、登录和复制 API 地址等核心操作。

## Product Boundaries

- 经单独批准的福利码／盲盒码核销、API Key 使用时间记录和 HTTP 首 Token／资源生命周期加固属于长期产品合约，按 ADR 0008 逐文件登记永久保留与回归门禁。此授权不扩大普通上游同步的可修改范围，不改变既有奖励、计费、权限、并发和会话粘性规则。
- 常规产品工作仅限品牌、Public Site、Console 主题和部署边缘层，不改变 Sub2API 的业务范围、权限或兑换规则。仅当稳定上游版本存在会阻断生产正确性的已确认缺陷，或稳定基线依赖出现可达的高危/严重供应链漏洞时，才允许有测试、精确文件边界和退出条件的临时 backport。对依赖锁文件等不可变表面，还必须锁定最终文件 SHA-256 与 Git mode；下一个包含等价修复的稳定 tag 发布后必须收敛回上游实现并删除临时权限。
- `api.01yapi.com` 是官网、Console 和模型调用的唯一推荐地址；`app.01yapi.com` 只保留同路径兼容重定向，不承载产品能力。
- 不承诺自动故障转移、多机高可用、无限额度或未经验证的模型能力。
