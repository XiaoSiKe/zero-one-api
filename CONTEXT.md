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

**Approved UI Snapshot（已批准 UI 快照）**:
完成桌面与移动端视觉审核后，以不可移动标签固定的 Landing、Console 与恢复版静态资源集合；普通上游升级不得改变它。
_Avoid_: 最新前端、自动构建产物、临时截图

**Product Change Protection（产品变更保护）**:
对固定 Upstream Baseline 之后的每个产品差异逐路径证明保留策略的发布门禁；每个差异必须由 `preserve_on_upstream_sync`、Approved UI Snapshot、带退出条件的临时修补或精确 backport 之一覆盖，仅有 Overlay 归属不代表更新时会保留。
_Avoid_: Overlay 允许清单、人工记忆、测试通过即代表不会被覆盖

**Public Settings Projection（公开设置投影）**:
匿名 Console 设置接口与 HTML 首帧注入共同使用的显式安全字段集合；新增字段属于公开授权决定，Landing 只读取它所需的更窄投影，Community QR 原图等鉴权资源不进入其中。
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

**API Key（密钥）**:
User 创建并用于鉴权模型 API 请求的凭证。
_Avoid_: Provider Account 凭证、管理员密码

**Redeem Code（兑换码）**:
由 Administrator 创建、由 User 核销以获得余额、并发或订阅权益的凭证。
_Avoid_: 在线支付、购买促销码、优惠券

**Promo Code（购买促销码）**:
在线购买流程中调整订单价格的营销凭证。
_Avoid_: Redeem Code

**Affiliate Attribution（邀请归属关系）**:
一个 Invitee 最多归属一个 Inviter。Administrator 只能为从未绑定过邀请人的现有 User 做一次人工补绑；绑定时间是不可覆盖的墓碑，即使邀请人账号删除后 `inviter_id` 被清空，也不能再绑。禁止自绑、循环关系、覆盖、改绑或解绑。补绑只影响绑定时间之后完成付款的交易，不追溯订单、余额或既有返利流水；返利有效期仍从 Invitee 的 Affiliate 档案创建时间计算，不因补绑而重新起算。人工补绑仅接受人类操作者的 JWT Administrator，不接受 Admin API Key，并受既有敏感操作 step-up 策略保护；该策略启用时必须完成近期 TOTP step-up。关系记录必须持久保存绑定时间；操作者 ID 是不随 Administrator 账号删除而清空的审计快照。
_Avoid_: 邀请码补发、历史返利重算、可编辑客户分组、Admin API Key 批量归属

**Public Announcement（公开公告）**:
由 Administrator 明确标记为公开，并通过匿名官网接口投影为纯文本标题与正文的有效公告；历史公告默认不公开。
_Avoid_: Console 内部公告、默认公开公告、富文本营销内容

**Landing Notice（官网置顶通知）**:
由 Administrator 单独配置的官网顶部短文本与可选跳转链接；它不读取 Announcement 记录，也不替代 `public_visible` 的逐条公开授权。
_Avoid_: Public Announcement feed、历史公告、Console 弹窗公告

**Community QR Entry（交流群入口）**:
由 Administrator 显式启用并上传安全栅格二维码后，显示在 Console 顶部导航中的按需入口；公开设置只投影显示授权，原始图片仅在已登录用户点击后通过 JWT 鉴权图片端点加载，缺图、未登录或校验失败时端点必须拒绝输出并让界面显示安全错误态。
_Avoid_: 公开 Base64 配置、默认开启、SVG 二维码、官网公告

**Public Channel Status（公开渠道状态）**:
由独立公开开关授权，将全部已启用监控聚合为匿名窄摘要的官网状态；不表示任何渠道、供应商、模型或流量明细被公开。
_Avoid_: Console 渠道监控、渠道明细、公开监控数据
