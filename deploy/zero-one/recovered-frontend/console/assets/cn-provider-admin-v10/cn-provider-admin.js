const _ = "zero-one-provider-catalog-admin", g = "zero-one-provider-catalog-admin-style", N = "zero-one-provider-catalog-admin-active", S = "/assets/cn-provider-admin-v8/cnProviderAdminLeaf-CHNemIo-.js", s = {
  accounts: "/admin/accounts",
  groups: "/admin/groups",
  channels: "/admin/channels/pricing",
  "channel-monitor": "/admin/channels/monitor",
  "channel-status": "/monitor",
  ops: "/admin/ops",
  subscriptions: "/admin/subscriptions"
}, m = /* @__PURE__ */ new Map();
let d = null, u = null, a = null, c = null, f = null, h = 0;
function y() {
  return window.location.pathname === s.accounts ? "accounts" : window.location.pathname === s.groups ? "groups" : window.location.pathname === s.channels ? "channels" : window.location.pathname === s["channel-monitor"] ? "channel-monitor" : window.location.pathname === s["channel-status"] ? "channel-status" : window.location.pathname === s.ops ? "ops" : window.location.pathname === s.subscriptions ? "subscriptions" : null;
}
function v() {
  var o, r, i, l, p, A;
  const t = document.querySelector("#app"), n = (A = (p = (l = (i = (r = (o = t == null ? void 0 : t.__vue_app__) == null ? void 0 : o.config) == null ? void 0 : r.globalProperties) == null ? void 0 : i.$pinia) == null ? void 0 : l._s) == null ? void 0 : p.get("auth")) == null ? void 0 : A.runMode, e = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
  return {
    locale: String(e).toLowerCase().startsWith("zh") ? "zh" : "en",
    runMode: n === "simple" ? "simple" : "standard"
  };
}
function O() {
  for (const [t, n] of m)
    t.style.display = n.display, t.inert = n.inert, delete t.dataset.zeroOneProviderCatalogHidden;
  m.clear();
}
function b(t) {
  document.body.classList.add(N);
  const n = t === "channel-monitor" || t === "channel-status" ? "/assets/cn-provider-admin-v10/cn-provider-admin.css" : "/assets/cn-provider-admin-v8/cn-provider-admin.css", e = document.getElementById(g);
  if ((e == null ? void 0 : e.getAttribute("href")) === n) return;
  e == null || e.remove();
  const o = document.createElement("link");
  o.id = g, o.rel = "stylesheet", o.href = n, document.head.append(o);
}
function P(t, n) {
  for (const e of Array.from(t.children))
    !(e instanceof HTMLElement) || e === n || (m.has(e) || m.set(e, { display: e.style.display, inert: e.inert }), e.style.display = "none", e.inert = !0, e.dataset.zeroOneProviderCatalogHidden = "true");
}
function I() {
  var n;
  h += 1, c = null, a == null || a.unmount(), a = null, d = null, u = null;
  const t = document.getElementById(_);
  t instanceof HTMLElement && (delete t.dataset.zeroOneProviderCatalogAdmin, t.remove()), document.body.classList.remove(N), (n = document.getElementById(g)) == null || n.remove(), O();
}
function L(t, n) {
  const e = v().locale === "zh", o = document.createElement("div");
  o.className = "card mx-auto mt-8 max-w-xl p-6 text-center", o.setAttribute("role", "alert");
  const r = document.createElement("h2");
  r.className = "text-lg font-semibold text-gray-900 dark:text-white", r.textContent = e ? "管理页面加载失败" : "Management page failed to load";
  const i = document.createElement("p");
  i.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", i.textContent = e ? "原控制台外壳仍然可用，请重试加载供应商管理页面。" : "The approved Console shell is still available. Retry loading the Provider management page.";
  const l = document.createElement("button");
  l.type = "button", l.className = "btn btn-primary mt-4", l.textContent = e ? "重试" : "Retry", l.addEventListener("click", () => {
    y() === t && window.location.reload();
  }), o.append(r, i, l), n.replaceChildren(o), n.dataset.zeroOneProviderCatalogAdmin = t;
}
function T(t) {
  if (!t || typeof t != "object") return null;
  const n = Reflect.get(t, "prepareCNProviderSurface");
  if (typeof n == "function") return n;
  const e = Reflect.get(t, "ae");
  if (!e || typeof e != "object") return null;
  const o = Reflect.get(e, "prepareCNProviderSurface");
  return typeof o == "function" ? o : null;
}
async function z(t, n) {
  b(t);
  let e = document.getElementById(_);
  if (e instanceof HTMLElement || (e = document.createElement("div"), e.id = _, e.dataset.zeroOneProviderCatalogAdmin = t, n.append(e)), P(n, e), a && d === t && u === e && e.isConnected && e.parentElement === n) {
    try {
      await a.syncState(v());
    } catch (i) {
      console.error("CN Provider Admin failed to synchronize shell state:", i);
    }
    return;
  }
  if ((c == null ? void 0 : c.surface) === t && c.host === e && e.isConnected && e.parentElement === n)
    return;
  const o = ++h;
  c = { surface: t, host: e, revision: o }, a == null || a.unmount(), a = null, d = null, u = null, e.replaceChildren(), e.dataset.zeroOneProviderCatalogAdmin = t;
  let r = null;
  try {
    const i = t === "channel-monitor" || t === "channel-status" ? await import("./cnProviderAdminLeaf-DehadpuS.js").then((p) => p.ae) : await import(
      /* @vite-ignore */
      S
    ), l = T(i);
    if (!l) throw new Error("CN Provider Admin leaf is missing its surface factory");
    if (r = await l(t, v()), o !== h || y() !== t || !n.isConnected || !e.isConnected || e.parentElement !== n) {
      r.unmount(), queueMicrotask(w);
      return;
    }
    r.mount(e), await r.syncState(v()), a = r, d = t, u = e;
  } catch (i) {
    r == null || r.unmount(), o === h && y() === t && (f = t, a = null, d = null, u = null, L(t, e)), console.error("CN Provider Admin failed to mount:", i);
  } finally {
    (c == null ? void 0 : c.revision) === o && (c = null);
  }
}
function w() {
  const t = y();
  if (!t) {
    (a || c || f || m.size > 0) && I(), f = null;
    return;
  }
  if (f === t) return;
  const n = document.querySelector("main");
  n instanceof HTMLElement && z(t, n);
}
const C = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!C)
  throw new Error("CN Provider Admin requires the approved navigation reconciliation module");
const R = window, E = R.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__;
R.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__ = () => {
  E == null || E(), w();
};
C.register("provider-catalog-admin", w);
C.request();
