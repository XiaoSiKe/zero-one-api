# ADR 0022：站内无限画布工作台

状态：已接受。

用户要求把 `basketikun/infinite-canvas` 集成到零一 API，供站内用户顺畅使用，并在验证、PR、合并后部署。视频 API 由后续提供。

## 产品与模块归属

`/studio/` 是 Canonical Product Domain 下的独立 React 文档，不在 Vue Console 路由中挂载第二套框架，不使用外站 iframe。Console 的用户与管理员个人菜单提供普通链接；工作台提供返回 Console 的入口。现有 Public Site、Console、模型网关、计费、权限与兼容域名保持原合同。该新增入口是用户授权的 UI 增量，依照 ADR 0004 更新 Approved UI Snapshot。

`studio/UPSTREAM.json` 固定第三方仓库及完整提交。`studio/web/` 保留实际工作台源码、构建依赖、MIT 作者标识和原许可证；集成逻辑归 `src/integration/`，不另外实现画布引擎。`deploy/zero-one/build-studio.mjs` 生成 Edge 交付资源并校验可复现性。旧的内容哈希资源保留，防止已打开页面在升级后无法加载。Backend 与 Edge 继续依照 ADR 0003 从同一 main SHA 构建并一致发布。

## 登录、数据与 API

轻量启动器先通过现有 `/api/v1/auth/me` 验证登录，再加载画布代码和持久化状态。401 的续期复用 Console 的 `refreshAuthTokens` 与跨标签 Web Lock；网络失败提供重试，不能当作未登录或授权成功。身份变更或退出登录卸载当前文档；定时与前台恢复验证延续 Console 的 60 秒身份检查节奏。

IndexedDB 的项目、素材、生成记录、插件数据，以及 localStorage 的 API 配置和偏好，全部按已验证 User ID 命名。该命名是浏览器内的账户隔离，不是针对同源脚本、共享操作系统账号或开发者工具的加密边界。作品默认仅保存在当前浏览器；页面明确提示定期导出，保留含素材的项目导入导出。当前没有站内云保存或跨设备自动同步，不新增数据库迁移。

用户主动选择自己的有效 OpenAI/Grok API Key。密钥列表使用 Console 的 JWT 接口，模型目录使用所选 Key 的 `/v1/models`；图片能力复用现有 `keyAllowsImageGeneration`，实际生成、权限与账单继续由网关裁决。不创建隐藏 Key，不硬编码声称已开通的模型，不向第三方传递站内 JWT。模型调用保留上游浏览器直连模式，API Key 存在该用户的浏览器本地配置。

视频与音频节点、素材导入和画布编排保留，站内自动接入不添加未经验证的视频/音频模型。页面说明视频 API 尚未接入；后续可通过既有渠道配置填写获得授权的兼容 API。远程 JavaScript 节点插件与自定义模型脚本在共享产品 origin 上不执行；内置节点保留，CSP 不开放 `unsafe-eval` 或第三方脚本源。

## 验证与发布

新增验证覆盖匿名跳转、登录故障、站内入口、项目创建/节点编辑/撤销/持久化/导入导出、两用户隔离、Key 模型发现及错误恢复、深链接与缺失资源、桌面和移动端。`make test-affected` 使用 ADR 0013 的唯一策略；Studio 源码或交付变化触发构建、依赖审计与浏览器行为检查。部署沿用运维手册的备份、真实恢复、Backend-first、Safe Edge switch 与至少 30 分钟观察要求。
