# 零一 API 词汇表

**Public Site（官网）**:
访客在使用产品前看到的品牌入口，负责呈现零一 API 并引导注册、登录和查看模型。
_Avoid_: 首页后台、控制台首页

**Console（控制台）**:
用户和管理员登录后管理密钥、用量、兑换及系统资源的产品界面。
_Avoid_: 官网、React 后台

**Upstream Baseline（上游基线）**:
由正式稳定标签及其解引用后的完整提交共同固定的 Sub2API 源码边界；升级和差异归属均以该提交为准。
_Avoid_: upstream/main、latest、浮动版本

**Upstream Provenance（上游来源证明）**:
由完整 Git 历史、固定 Upstream Baseline 的祖先关系和只读 upstream remote 共同保留的来源记录；不同于 GitHub 原生 fork/parent 元数据，独立托管不抹去来源，也不能伪称平台已关联。
_Avoid_: 改作者即迁移、改 remote 即原生 fork、删除重建保留全部元数据

**Publish Source Evidence（发布源验证证明）**:
精确产品仓库和源码 SHA 在 main push 上对应的最新产品/安全工作流及当前 attempt 的实际成功 job 集合；缺失、跳过、失败、待运行和手动诊断不能替代。证明通过仍不代表获准发布或部署。
_Avoid_: 任意一次绿灯、只看 workflow 名称、用旧成功掩盖新失败、无条件成功汇总

**License Delivery（许可材料交付）**:
对象码交付时随附未改写的 LGPLv3、配套 GPLv3 与适用的第三方通知，并保留对应源码和组件自身的许可边界；不是项目改为 GPL-only，也不是对商业用途或上游账号使用的授权。
_Avoid_: 删除原作者、统一标成 MIT、附许可证即全项目合规认证

**Approved UI Snapshot（已批准 UI 快照）**:
完成桌面与移动端视觉审核后，以不可移动标签固定的 Landing、Console 与恢复版静态资源集合；普通上游升级不得改变它。
_Avoid_: 最新前端、自动构建产物、临时截图

**Product Change Protection（产品变更保护）**:
对固定 Upstream Baseline 之后的每个产品差异逐路径证明保留策略的发布门禁；每个差异必须由 `preserve_on_upstream_sync`、Approved UI Snapshot、带退出条件的临时修补或精确 backport 之一覆盖，仅有 Overlay 归属不代表更新时会保留。
_Avoid_: Overlay 允许清单、人工记忆、测试通过即代表不会被覆盖

**Public Settings Projection（公开设置投影）**:
匿名 Console 设置接口与 HTML 首帧注入共同使用的显式安全字段集合；新增字段属于公开授权决定，Landing 只读取它所需的更窄投影，Header Navigation QR 原图等鉴权资源不进入其中。
_Avoid_: System Settings 原样输出、两份手工同步的公开 DTO、原始设置表转储

**Coherent Release（一致发布）**:
由同一源码提交构建的 Sub2API 与 Edge 两个不可变镜像及其迁移账本；必须按 Backend-first 顺序部署并共同记录。
_Avoid_: latest 发布、混合版本、独立前端发布

**Canonical Product Domain（规范产品域名）**:
零一 API 唯一公开推荐的产品入口；同一 origin 承载 Public Site、Console 和模型调用。
_Avoid_: 独立 Console 域名、备用 API 域名、多个等价入口

**Compatibility Domain（兼容域名）**:
仅为历史链接保留，并把任意请求以保留路径和查询参数的永久重定向送到 Canonical Product Domain；不承载产品页面或模型调用。
_Avoid_: Console 域名、备用线路、第二 API 地址

**User（用户）**:
注册零一 API、创建 API Key 并消费模型服务的个人或团队成员。
_Avoid_: 上游账号、号池账号

**Administrator（管理员）**:
拥有系统运维权限、可管理用户、Provider Account、渠道、价格、设置和 Redeem Code 的角色。
_Avoid_: 普通用户、站长账号

**Provider Account（上游账号）**:
向零一 API 提供模型调用能力和额度的已授权账号资源。
_Avoid_: User、客户账号

**Provider Platform Catalog（供应商平台目录）**:
Provider Account、分组筛选、渠道定价、渠道监控、运维筛选、订阅筛选、错误透传规则与 Composite 路由目标共同使用的有序一等平台集合；新增平台必须在一个目录中同时进入这些管理入口。它不同于模型白名单，Qwen、Mistral 等模型名称不自动成为 Provider Account 平台。
_Avoid_: 模型白名单、各页面复制的平台数组、任意 OpenAI 兼容模型列表

**API Key（密钥）**:
User 创建并用于鉴权模型 API 请求的凭证。
_Avoid_: Provider Account 凭证、管理员密码

**Redeem Code（兑换码）**:
由 Administrator 创建、由 User 核销以获得余额、并发或订阅权益的凭证。
_Avoid_: 在线支付、购买促销码、优惠券

**Promo Code（购买促销码）**:
在线购买流程中调整订单价格的营销凭证。
_Avoid_: Redeem Code

**Benefit Redeem Code（福利码）**:
一种按批次发放固定余额的 Redeem Code；每码核销一次，每个 User 每批次只领取一次。奖励是存储范围内不少于 0.01 的整分金额，不产生邀请返利。
_Avoid_: Promo Code、支付优惠、可重复领取余额

**Mystery Box Redeem Code（盲盒码）**:
一种按批次发放随机余额的 Redeem Code；在正整分闭区间使用安全随机抽取，允许上下限相等。实际奖励、领取记录和余额在同一事务提交；每用户每批次一次，管理操作不能重新抽奖或改变已发奖励。
_Avoid_: 概率营销策略、重复开箱、兑换前固定面值

**Redeem Claim（领取证明）**:
兑换码的 used 状态、used_by 或 used_at 中任一领取标记。管理操作不能通过重启、过期、修改权益或删除清除此证明；核销和管理转换必须基于数据库内的最新状态。邀请码注册流程内部既有失败回滚仍是独立合同。
_Avoid_: 可重置状态、删除后重新领取资格

**Site First Token（站点首 Token）**:
从 HTTP 模型网关入口（鉴权前）到首个真正有内容的完整流事件写出并 flush 的耗时，包含本站处理、排队、之前失败尝试与退避；心跳、开始事件、空增量不计入。它不是用户设备到屏时延，WebSocket 仍逐 turn 计时。此口径启用前的历史用量不回填。
_Avoid_: 首个网络字节、首个 SSE metadata、纯上游耗时、客户端端到端时延

**Attempt First Token（单次尝试首 Token）**:
一次转发 Implementation 开始到首个有效输出的耗时，继续供 Provider Account 调度使用；不得把整个请求的排队和之前尝试累加到这个值。请求级用量使用独立冻结副本。
_Avoid_: Site First Token、全请求耗时、仅模型推理耗时

**API Key Last-used Bookkeeping（密钥使用时间记录）**:
API Key 已鉴权后的尽力而为元数据维护，不参与权限、额度或计费决策。独立有界 worker 按 Key ID 合并排队中的到达时间；队满不阻塞请求，迟到写入不得令时间倒退或复活已删除密钥。
_Avoid_: 计费账单、异步鉴权、无限后台任务

**Affiliate Attribution（邀请归属关系）**:
一个 Invitee 最多归属一个 Inviter。Administrator 只能为从未绑定过邀请人的现有 User 做一次人工补绑；绑定时间是不可覆盖的墓碑，即使邀请人账号删除后 `inviter_id` 被清空，也不能再绑。禁止自绑、循环关系、覆盖、改绑或解绑。补绑只影响绑定时间之后完成付款的交易，不追溯订单、余额或既有返利流水；返利有效期仍从 Invitee 的 Affiliate 档案创建时间计算，不因补绑而重新起算。人工补绑仅接受人类操作者的 JWT Administrator，不接受 Admin API Key，并受既有敏感操作 step-up 策略保护；该策略启用时必须完成近期 TOTP step-up。关系记录必须持久保存绑定时间；操作者 ID 是不随 Administrator 账号删除而清空的审计快照。
_Avoid_: 邀请码补发、历史返利重算、可编辑客户分组、Admin API Key 批量归属

**Agent Value（代理价值）**:
一个 User 作为邀请人累计获得的全部返利，权威值为 Affiliate 档案的 `aff_history_quota`。它包含当前可提、仍在冻结和已经提取到余额的返利；提取不减少代理价值。没有 Affiliate 档案的 User 代理价值为零。管理员客户目录按代理价值倒序、再按 User ID 倒序排列。
_Avoid_: 当前可提额度、提现余额、订单金额、客户端逐页求和

**Exclusive Agent（专属代理）**:
由 Administrator 设置了专属返利比例（`aff_rebate_rate_percent IS NOT NULL`）的 User。只设置专属邀请码而没有专属返利比例的 User 不是 Exclusive Agent。该标签只描述邀请返利运营身份，不改变 User 的系统权限角色。
_Avoid_: 自定义邀请码用户、Administrator 角色、普通 Inviter、客户分组

**Public Announcement（公开公告）**:
由 Administrator 明确标记为公开，并通过匿名官网接口投影为纯文本标题与正文的有效公告；历史公告默认不公开。
_Avoid_: Console 内部公告、默认公开公告、富文本营销内容

**Landing Notice（官网置顶通知）**:
由 Administrator 单独配置的官网顶部短文本与可选跳转链接；它不读取 Announcement 记录，也不替代 `public_visible` 的逐条公开授权。
_Avoid_: Public Announcement feed、历史公告、Console 弹窗公告

**Header Navigation QR Entry（顶部二维码入口）**:
由 Administrator 明确添加、可配置角色可见范围并上传安全栅格二维码的 Console 顶部导航入口；公开设置只投影导航元数据，原始图片仅在已登录用户点击后通过逐入口 JWT 鉴权端点加载，缺图、越权、未登录或校验失败时必须拒绝输出并显示安全错误态。多个入口共享同一导航排序与协调机制；历史 `community_qr_*` 设置只保留兼容数据，不再是入口权威来源。
_Avoid_: 公开 Base64 配置、默认开启、SVG 二维码、单一交流群开关、官网公告

**Public Channel Status（公开渠道状态）**:
由独立公开开关授权，将全部已启用监控聚合为匿名窄摘要的官网状态；不公开内部标识、供应商配置、模型或流量明细。
_Avoid_: Console 渠道监控、渠道明细、公开监控数据

既有展示行只包含公开显示名称、状态、可用率与检测时间。各行独立判断数据是否齐全、是否过期；一行未就绪不能清空其他行，整体摘要仍按完整样本保守判断。刷新失败保留的历史结果必须明确标记未更新。

**Password Recovery（密码找回）**:
由 `email_verify_enabled` 和 `password_reset_enabled` 共同授权的邮件找回流程。登录入口与两条密码路由遵循服务端公开能力，设置读取中或失败时不开放提交。成功确认不透露邮箱是否注册；令牌经过校验后原子核销，同一链接仅能成功一次，密码变更使旧登录凭据失效。生产重置链接使用 Canonical Product Domain。
_Avoid_: 从注册按钮推断权限、隐藏后端错误即启用、先读取再无条件删除令牌
