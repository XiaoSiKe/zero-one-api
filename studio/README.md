# 零一 API 无限画布

来源为 [basketikun/infinite-canvas](https://github.com/basketikun/infinite-canvas)，固定版本见 `UPSTREAM.json`，原许可证见 `LICENSE`。保留上游画布、图片、视频、素材与提示词界面，集成说明见 [ADR 0022](../docs/adr/0022-infinite-canvas-studio.md)。

用户登录零一 API 后从“无限画布”打开 `/studio/`。不配置 API 也可以创建画布、编辑节点、导入素材与导出项目；点击“接入站内密钥”选择自己的有效密钥，并读取可用图片/对话模型。视频 API 待后续配置。作品与 API Key 默认保存在当前浏览器，并按站内 User ID 隔离；请定期导出，当前不提供站内云保存。

```sh
npm ci --prefix studio/web
npm run typecheck --prefix studio/web
npm test --prefix studio/web
node deploy/zero-one/build-studio.mjs
node deploy/zero-one/build-studio.mjs --check
```

本地开发用 `npm run dev --prefix studio/web`，打开 `http://127.0.0.1:3010/studio/`；开发代理指向本地 `127.0.0.1:18080` Backend。正式交付使用生成的 Edge 静态资源；不另行启动上游 Node 服务或 canvas-proxy，不安装全局工具。远程可执行插件和模型脚本在此部署中禁用，内置节点可用。
