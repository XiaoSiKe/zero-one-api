const y = "zero-one-provider-catalog-admin", E = "zero-one-provider-catalog-admin-style", S = "zero-one-provider-catalog-admin-active", m = {
  channels: "/admin/channels/pricing",
  "channel-monitor": "/admin/channels/monitor",
  ops: "/admin/ops",
  subscriptions: "/admin/subscriptions"
}, u = /* @__PURE__ */ new Map();
let s = null, d = null, r = null, l = null, p = null, f = 0;
function v() {
  return window.location.pathname === m.channels ? "channels" : window.location.pathname === m["channel-monitor"] ? "channel-monitor" : window.location.pathname === m.ops ? "ops" : window.location.pathname === m.subscriptions ? "subscriptions" : null;
}
function h() {
  var a, o, i, c, w, O;
  const t = document.querySelector("#app"), n = (O = (w = (c = (i = (o = (a = t == null ? void 0 : t.__vue_app__) == null ? void 0 : a.config) == null ? void 0 : o.globalProperties) == null ? void 0 : i.$pinia) == null ? void 0 : c._s) == null ? void 0 : w.get("auth")) == null ? void 0 : O.runMode, e = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
  return {
    locale: String(e).toLowerCase().startsWith("zh") ? "zh" : "en",
    runMode: n === "simple" ? "simple" : "standard"
  };
}
function N() {
  for (const [t, n] of u)
    t.style.display = n.display, t.inert = n.inert, delete t.dataset.zeroOneProviderCatalogHidden;
  u.clear();
}
function R() {
  document.body.classList.add(S);
  const t = "/assets/cn-provider-admin-v3/cn-provider-admin.css", n = document.getElementById(E);
  if ((n == null ? void 0 : n.getAttribute("href")) === t) return;
  n == null || n.remove();
  const e = document.createElement("link");
  e.id = E, e.rel = "stylesheet", e.href = t, document.head.append(e);
}
function b(t, n) {
  for (const e of Array.from(t.children))
    !(e instanceof HTMLElement) || e === n || (u.has(e) || u.set(e, { display: e.style.display, inert: e.inert }), e.style.display = "none", e.inert = !0, e.dataset.zeroOneProviderCatalogHidden = "true");
}
function I() {
  var n;
  f += 1, l = null, r == null || r.unmount(), r = null, s = null, d = null;
  const t = document.getElementById(y);
  t instanceof HTMLElement && (delete t.dataset.zeroOneProviderCatalogAdmin, t.remove()), document.body.classList.remove(S), (n = document.getElementById(E)) == null || n.remove(), N();
}
function P(t, n) {
  const e = h().locale === "zh", a = document.createElement("div");
  a.className = "card mx-auto mt-8 max-w-xl p-6 text-center", a.setAttribute("role", "alert");
  const o = document.createElement("h2");
  o.className = "text-lg font-semibold text-gray-900 dark:text-white", o.textContent = e ? "管理页面加载失败" : "Management page failed to load";
  const i = document.createElement("p");
  i.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", i.textContent = e ? "原控制台外壳仍然可用，请重试加载供应商管理页面。" : "The approved Console shell is still available. Retry loading the Provider management page.";
  const c = document.createElement("button");
  c.type = "button", c.className = "btn btn-primary mt-4", c.textContent = e ? "重试" : "Retry", c.addEventListener("click", () => {
    v() === t && window.location.reload();
  }), a.append(o, i, c), n.replaceChildren(a), n.dataset.zeroOneProviderCatalogAdmin = t;
}
async function T(t, n) {
  R();
  let e = document.getElementById(y);
  if (e instanceof HTMLElement || (e = document.createElement("div"), e.id = y, e.dataset.zeroOneProviderCatalogAdmin = t, n.append(e)), b(n, e), r && s === t && d === e && e.isConnected && e.parentElement === n) {
    try {
      await r.syncState(h());
    } catch (i) {
      console.error("CN Provider Admin failed to synchronize shell state:", i);
    }
    return;
  }
  if ((l == null ? void 0 : l.surface) === t && l.host === e && e.isConnected && e.parentElement === n)
    return;
  const a = ++f;
  l = { surface: t, host: e, revision: a }, r == null || r.unmount(), r = null, s = null, d = null, e.replaceChildren(), e.dataset.zeroOneProviderCatalogAdmin = t;
  let o = null;
  try {
    if (o = await (await import("./cnProviderAdminLeaf-DkKZCNPa.js").then((c) => c.a8)).prepareCNProviderSurface(t, h()), a !== f || v() !== t || !n.isConnected || !e.isConnected || e.parentElement !== n) {
      o.unmount(), queueMicrotask(C);
      return;
    }
    o.mount(e), await o.syncState(h()), r = o, s = t, d = e;
  } catch (i) {
    o == null || o.unmount(), a === f && v() === t && (p = t, r = null, s = null, d = null, P(t, e)), console.error("CN Provider Admin failed to mount:", i);
  } finally {
    (l == null ? void 0 : l.revision) === a && (l = null);
  }
}
function C() {
  const t = v();
  if (!t) {
    (r || l || p || u.size > 0) && I(), p = null;
    return;
  }
  if (p === t) return;
  const n = document.querySelector("main");
  n instanceof HTMLElement && T(t, n);
}
const g = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!g)
  throw new Error("CN Provider Admin requires the approved navigation reconciliation module");
const A = window, _ = A.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__;
A.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__ = () => {
  _ == null || _(), C();
};
g.register("provider-catalog-admin", C);
g.request();
