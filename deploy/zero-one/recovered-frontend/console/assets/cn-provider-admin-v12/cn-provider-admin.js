const E = "zero-one-provider-catalog-admin", _ = "zero-one-provider-catalog-admin-style", N = "zero-one-provider-catalog-admin-active", s = {
  accounts: "/admin/accounts",
  groups: "/admin/groups",
  channels: "/admin/channels/pricing",
  "channel-monitor": "/admin/channels/monitor",
  "channel-status": "/monitor",
  ops: "/admin/ops",
  subscriptions: "/admin/subscriptions",
  settings: "/admin/settings"
}, m = /* @__PURE__ */ new Map();
let d = null, u = null, a = null, c = null, f = null, h = 0;
function g() {
  return window.location.pathname === s.accounts ? "accounts" : window.location.pathname === s.groups ? "groups" : window.location.pathname === s.channels ? "channels" : window.location.pathname === s["channel-monitor"] ? "channel-monitor" : window.location.pathname === s["channel-status"] ? "channel-status" : window.location.pathname === s.ops ? "ops" : window.location.pathname === s.subscriptions ? "subscriptions" : window.location.pathname === s.settings ? "settings" : null;
}
function y() {
  var o, r, i, l, p, S;
  const t = document.querySelector("#app"), n = (S = (p = (l = (i = (r = (o = t == null ? void 0 : t.__vue_app__) == null ? void 0 : o.config) == null ? void 0 : r.globalProperties) == null ? void 0 : i.$pinia) == null ? void 0 : l._s) == null ? void 0 : p.get("auth")) == null ? void 0 : S.runMode, e = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
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
function A() {
  document.body.classList.add(N);
  const t = "/assets/cn-provider-admin-v12/cn-provider-admin.css", n = document.getElementById(_);
  if ((n == null ? void 0 : n.getAttribute("href")) === t) return;
  n == null || n.remove();
  const e = document.createElement("link");
  e.id = _, e.rel = "stylesheet", e.href = t, document.head.append(e);
}
function b(t, n) {
  for (const e of Array.from(t.children))
    !(e instanceof HTMLElement) || e === n || (m.has(e) || m.set(e, { display: e.style.display, inert: e.inert }), e.style.display = "none", e.inert = !0, e.dataset.zeroOneProviderCatalogHidden = "true");
}
function P() {
  var n;
  h += 1, c = null, a == null || a.unmount(), a = null, d = null, u = null;
  const t = document.getElementById(E);
  t instanceof HTMLElement && (delete t.dataset.zeroOneProviderCatalogAdmin, t.remove()), document.body.classList.remove(N), (n = document.getElementById(_)) == null || n.remove(), O();
}
function I(t, n) {
  const e = y().locale === "zh", o = document.createElement("div");
  o.className = "card mx-auto mt-8 max-w-xl p-6 text-center", o.setAttribute("role", "alert");
  const r = document.createElement("h2");
  r.className = "text-lg font-semibold text-gray-900 dark:text-white", r.textContent = e ? "管理页面加载失败" : "Management page failed to load";
  const i = document.createElement("p");
  i.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", i.textContent = e ? "原控制台外壳仍然可用，请重试加载供应商管理页面。" : "The approved Console shell is still available. Retry loading the Provider management page.";
  const l = document.createElement("button");
  l.type = "button", l.className = "btn btn-primary mt-4", l.textContent = e ? "重试" : "Retry", l.addEventListener("click", () => {
    g() === t && window.location.reload();
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
  A();
  let e = document.getElementById(E);
  if (e instanceof HTMLElement || (e = document.createElement("div"), e.id = E, e.dataset.zeroOneProviderCatalogAdmin = t, n.append(e)), b(n, e), a && d === t && u === e && e.isConnected && e.parentElement === n) {
    try {
      await a.syncState(y());
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
    const i = await import("./cnProviderAdminLeaf-B6vuXkvp.js").then((p) => p.aj), l = T(i);
    if (!l) throw new Error("CN Provider Admin leaf is missing its surface factory");
    if (r = await l(t, y()), o !== h || g() !== t || !n.isConnected || !e.isConnected || e.parentElement !== n) {
      r.unmount(), queueMicrotask(w);
      return;
    }
    r.mount(e), await r.syncState(y()), a = r, d = t, u = e;
  } catch (i) {
    r == null || r.unmount(), o === h && g() === t && (f = t, a = null, d = null, u = null, I(t, e)), console.error("CN Provider Admin failed to mount:", i);
  } finally {
    (c == null ? void 0 : c.revision) === o && (c = null);
  }
}
function w() {
  const t = g();
  if (!t) {
    (a || c || f || m.size > 0) && P(), f = null;
    return;
  }
  if (f === t) return;
  const n = document.querySelector("main");
  n instanceof HTMLElement && z(t, n);
}
const C = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!C)
  throw new Error("CN Provider Admin requires the approved navigation reconciliation module");
const R = window, v = R.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__;
R.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__ = () => {
  v == null || v(), w();
};
C.register("provider-catalog-admin", w);
C.request();
