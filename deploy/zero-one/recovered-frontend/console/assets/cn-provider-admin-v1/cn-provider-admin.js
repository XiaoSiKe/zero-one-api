const y = "zero-one-cn-provider-admin", h = "zero-one-cn-provider-admin-style", S = "zero-one-cn-provider-admin-active", w = {
  accounts: "/admin/accounts",
  groups: "/admin/groups"
}, u = /* @__PURE__ */ new Map();
let d = null, s = null, r = null, a = null, m = null, p = 0;
function v() {
  return window.location.pathname === w.accounts ? "accounts" : window.location.pathname === w.groups ? "groups" : null;
}
function f() {
  var i, o, l, c, _, g;
  const e = document.querySelector("#app"), n = (g = (_ = (c = (l = (o = (i = e == null ? void 0 : e.__vue_app__) == null ? void 0 : i.config) == null ? void 0 : o.globalProperties) == null ? void 0 : l.$pinia) == null ? void 0 : c._s) == null ? void 0 : _.get("auth")) == null ? void 0 : g.runMode, t = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
  return {
    locale: String(t).toLowerCase().startsWith("zh") ? "zh" : "en",
    runMode: n === "simple" ? "simple" : "standard"
  };
}
function A() {
  for (const [e, n] of u)
    e.style.display = n.display, e.inert = n.inert, delete e.dataset.zeroOneCnProviderHidden;
  u.clear();
}
function O() {
  if (document.body.classList.add(S), document.getElementById(h)) return;
  const e = document.createElement("link");
  e.id = h, e.rel = "stylesheet", e.href = "/assets/cn-provider-admin-v1/cn-provider-admin.css", document.head.append(e);
}
function N(e, n) {
  for (const t of Array.from(e.children))
    !(t instanceof HTMLElement) || t === n || (u.has(t) || u.set(t, { display: t.style.display, inert: t.inert }), t.style.display = "none", t.inert = !0, t.dataset.zeroOneCnProviderHidden = "true");
}
function R() {
  var n;
  p += 1, a = null, r == null || r.unmount(), r = null, d = null, s = null;
  const e = document.getElementById(y);
  e instanceof HTMLElement && (delete e.dataset.zeroOneCnProviderAdmin, e.dataset.zeroOneCnProviderPlaceholder !== "true" && e.remove()), document.body.classList.remove(S), (n = document.getElementById(h)) == null || n.remove(), A();
}
function z(e, n) {
  const t = f().locale === "zh", i = document.createElement("div");
  i.className = "card mx-auto mt-8 max-w-xl p-6 text-center", i.setAttribute("role", "alert");
  const o = document.createElement("h2");
  o.className = "text-lg font-semibold text-gray-900 dark:text-white", o.textContent = t ? "管理页面加载失败" : "Management page failed to load";
  const l = document.createElement("p");
  l.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", l.textContent = t ? "原控制台外壳仍然可用，请重试加载账号或分组管理。" : "The approved Console shell is still available. Retry loading account or group management.";
  const c = document.createElement("button");
  c.type = "button", c.className = "btn btn-primary mt-4", c.textContent = t ? "重试" : "Retry", c.addEventListener("click", () => {
    v() === e && window.location.reload();
  }), i.append(o, l, c), n.replaceChildren(i), n.dataset.zeroOneCnProviderAdmin = e;
}
async function P(e, n) {
  O();
  let t = document.getElementById(y);
  if (t instanceof HTMLElement || (t = document.createElement("div"), t.id = y, t.dataset.zeroOneCnProviderAdmin = e, n.append(t)), N(n, t), r && d === e && s === t && t.isConnected && t.parentElement === n) {
    try {
      await r.syncState(f());
    } catch (l) {
      console.error("CN Provider Admin failed to synchronize shell state:", l);
    }
    return;
  }
  if ((a == null ? void 0 : a.surface) === e && a.host === t && t.isConnected && t.parentElement === n)
    return;
  const i = ++p;
  a = { surface: e, host: t, revision: i }, r == null || r.unmount(), r = null, d = null, s = null, t.replaceChildren(), t.dataset.zeroOneCnProviderAdmin = e;
  let o = null;
  try {
    if (o = await (await import("./cnProviderAdminLeaf-D2Wwc1yV.js").then((c) => c.a8)).prepareCNProviderSurface(e, f()), i !== p || v() !== e || !n.isConnected || !t.isConnected || t.parentElement !== n) {
      o.unmount(), queueMicrotask(E);
      return;
    }
    o.mount(t), await o.syncState(f()), r = o, d = e, s = t;
  } catch (l) {
    o == null || o.unmount(), i === p && v() === e && (m = e, r = null, d = null, s = null, z(e, t)), console.error("CN Provider Admin failed to mount:", l);
  } finally {
    (a == null ? void 0 : a.revision) === i && (a = null);
  }
}
function E() {
  const e = v();
  if (!e) {
    (r || a || m || u.size > 0) && R(), m = null;
    return;
  }
  if (m === e) return;
  const n = document.querySelector("main");
  n instanceof HTMLElement && P(e, n);
}
const C = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!C)
  throw new Error("CN Provider Admin requires the approved navigation reconciliation module");
const I = window;
I.__ZERO_ONE_CN_PROVIDER_SHELL_MOUNTED__ = E;
C.register("cn-provider-admin", E);
C.request();
