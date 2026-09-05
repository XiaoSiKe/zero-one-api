# Console 布局维护

已认证 Console 的壳层由 [App.vue](../../App.vue) 唯一持有：路由设置 `meta.consoleShell: true`，正常导航只替换 RouterView 内容；显式 fullscreen 查询参数沿用 App.vue 的既有处理。

[AppLayout.vue](AppLayout.vue) 组合 [AppSidebar.vue](AppSidebar.vue) 和 [AppHeader.vue](AppHeader.vue)。叶子页面不要再包一层 AppLayout，也不要自行创建第二套侧栏、导航监听或布局状态。

新页面按 [router/index.ts](../../router/index.ts) 中相邻页面的真实鉴权、角色和路由元数据接入：

```vue
<template>
  <section class="space-y-6">
    <!-- 页面内容；壳层由 App.vue 渲染 -->
  </section>
</template>
```

认证页面按现有 [AuthLayout.vue](AuthLayout.vue) 和认证路由处理。授权、导航可见性、run mode 和公开能力仍由原有 Store/接口维护；布局组件不另存一份业务真相。

生产恢复版 UI 与维护中的 Vue 源码是不同发布边界，遵循 [ADR 0004](../../../../docs/adr/0004-approved-ui-snapshot-at-edge.md) 与 [ADR 0007](../../../../docs/adr/0007-configurable-console-navigation.md)。验证包括壳层不重挂载、角色切换、闲置无循环更新、桌面/手机布局及现有视觉快照。

旧版逐页包裹 AppLayout 的示例已失效；历史材料保留在[固定版本](https://github.com/XiaoSiKe/zero-one-api/tree/10da249486895f287ef745fe6f5468db9ec77a2b/frontend/src/components/layout)。
