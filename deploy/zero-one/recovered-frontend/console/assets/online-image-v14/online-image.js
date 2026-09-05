const l = "/images", x = "zero-one-online-image", A = "zero-one-online-image-style", R = "zero-one-online-image-active", v = "data-zero-one-online-image-link", g = /* @__PURE__ */ new Map();
let r = null, E = null, u = null, f = !1, m = 0;
function b(e, t) {
  return p().locale === "zh" ? e : t;
}
function h() {
  return document.querySelector("#app");
}
function p() {
  var n, o, i, a, s, _, d;
  const e = (d = (_ = (s = (a = (i = (o = (n = h()) == null ? void 0 : n.__vue_app__) == null ? void 0 : o.config) == null ? void 0 : i.globalProperties) == null ? void 0 : a.$pinia) == null ? void 0 : s._s) == null ? void 0 : _.get("auth")) == null ? void 0 : d.runMode, t = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
  return {
    locale: String(t).toLowerCase().startsWith("zh") ? "zh" : "en",
    runMode: e === "simple" ? "simple" : "standard"
  };
}
function z() {
  var e, t, n, o, i, a;
  return ((a = (i = (o = (n = (t = (e = h()) == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : o.$pinia) == null ? void 0 : i._s) == null ? void 0 : a.get("auth")) || null;
}
function q() {
  var e, t, n, o;
  return ((o = (n = (t = (e = h()) == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : o.$router) || null;
}
function N(e) {
  const t = b("在线生图", "Online Images");
  e.getAttribute("href") !== l && e.setAttribute("href", l), e.dataset.navigationPath !== l && (e.dataset.navigationPath = l), e.getAttribute("aria-label") !== t && e.setAttribute("aria-label", t);
  const n = e.classList.contains("sidebar-link-collapsed") ? t : "";
  e.title !== n && (e.title = n);
  const o = window.location.pathname === l;
  e.classList.contains("sidebar-link-active") !== o && e.classList.toggle("sidebar-link-active", o);
  const i = e.querySelector(".sidebar-label");
  i && i.textContent !== t && (i.textContent = t);
}
function H() {
  const e = document.querySelector("aside nav");
  if (!(e instanceof HTMLElement)) return;
  const t = [...e.querySelectorAll('a[href="/images"]')], n = t.find((a) => !a.hasAttribute(v)), o = z();
  if (!(o != null && o.token) || !o.user || p().runMode === "simple") {
    t.filter((a) => a.hasAttribute(v)).forEach((a) => a.remove());
    return;
  }
  if (n) {
    t.filter((a) => a !== n && a.hasAttribute(v)).forEach((a) => a.remove()), N(n);
    return;
  }
  let i = t[0];
  if (!i) {
    const a = e.querySelector('a[href="/redeem"]') || e.querySelector('a[href="/keys"]');
    if (!a) return;
    i = a.cloneNode(!0), i.setAttribute(v, "true"), i.removeAttribute("data-tour");
    const s = i.querySelector("svg");
    s && (s.setAttribute("viewBox", "0 0 24 24"), s.setAttribute("fill", "none"), s.setAttribute("stroke", "currentColor"), s.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.25 2.25 0 00-1.906-1.059H9.554a2.25 2.25 0 00-1.906 1.059l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>'), i.addEventListener("click", (_) => {
      var O, S, I, C, L, T, y, M;
      const d = q();
      d && (_.preventDefault(), (M = (y = (T = (L = (C = (I = (S = (O = h()) == null ? void 0 : O.__vue_app__) == null ? void 0 : S.config) == null ? void 0 : I.globalProperties) == null ? void 0 : C.$pinia) == null ? void 0 : L._s) == null ? void 0 : T.get("app")) == null ? void 0 : y.setMobileOpen) == null || M.call(y, !1), d.push(l));
    }), a.after(i), queueMicrotask(() => c == null ? void 0 : c.request());
  }
  N(i);
}
function k() {
  if (document.body.classList.add(R), document.getElementById(A)) return;
  const e = document.createElement("link");
  e.id = A, e.rel = "stylesheet", e.href = "/assets/online-image-v14/online-image.css", document.head.append(e);
}
function P(e, t) {
  for (const n of Array.from(e.children))
    !(n instanceof HTMLElement) || n === t || (g.has(n) || g.set(n, { display: n.style.display, inert: n.inert }), n.style.display !== "none" && (n.style.display = "none"), n.inert || (n.inert = !0), n.dataset.zeroOneOnlineImageHidden !== "true" && (n.dataset.zeroOneOnlineImageHidden = "true"));
}
function B() {
  for (const [e, t] of g)
    e.style.display = t.display, e.inert = t.inert, delete e.dataset.zeroOneOnlineImageHidden;
  g.clear();
}
function D() {
  var t;
  m += 1, u = null, r == null || r.unmount(), r = null, E = null;
  const e = document.getElementById(x);
  e instanceof HTMLElement && e.dataset.zeroOneOnlineImagePlaceholder !== "true" && e.remove(), document.body.classList.remove(R), (t = document.getElementById(A)) == null || t.remove(), B();
}
function V(e) {
  const t = document.createElement("div");
  t.className = "card mx-auto mt-8 max-w-xl p-6 text-center", t.setAttribute("role", "alert");
  const n = document.createElement("h2");
  n.className = "text-lg font-semibold text-gray-900 dark:text-white", n.textContent = b("在线生图加载失败", "Online image generation failed to load");
  const o = document.createElement("p");
  o.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", o.textContent = b("控制台外壳仍然可用，请重试加载在线生图。", "The Console shell is still available. Retry loading online image generation.");
  const i = document.createElement("button");
  i.type = "button", i.className = "btn btn-primary btn-specular mt-4", i.textContent = b("重试", "Retry"), i.addEventListener("click", () => window.location.reload()), t.append(n, o, i), e.replaceChildren(t);
}
async function $(e, t) {
  if (k(), P(e, t), r && E === t && t.isConnected && t.parentElement === e) {
    await r.syncState(p());
    return;
  }
  if (u) return;
  const n = ++m;
  r == null || r.unmount(), r = null, E = null, t.replaceChildren(), u = (async () => {
    let o = null;
    try {
      if (o = await (await import("./onlineImageLeaf-BhDXshpj.js")).prepareOnlineImageSurface(p()), n !== m || window.location.pathname !== l || !e.isConnected || !t.isConnected || t.parentElement !== e) {
        o.unmount(), queueMicrotask(w);
        return;
      }
      o.mount(t), await o.syncState(p()), r = o, E = t, f = !1;
    } catch (i) {
      o == null || o.unmount(), n === m && window.location.pathname === l && (f = !0, V(t)), console.error("Online image generation failed to mount:", i);
    } finally {
      n === m && (u = null);
    }
  })(), await u;
}
function w() {
  if (H(), window.location.pathname !== l) {
    (r || u || f || g.size > 0) && D(), f = !1;
    return;
  }
  if (f) return;
  const e = document.querySelector(
    `#${x}[data-zero-one-online-image-placeholder="true"]`
  ), t = e == null ? void 0 : e.closest("main");
  e && t instanceof HTMLElement && $(t, e);
}
const c = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!c) throw new Error("Online image generation requires the approved navigation reconciliation module");
window.__ZERO_ONE_ONLINE_IMAGE_ACCESS__ = {
  // Preserve the immutable shell bridge without querying keys for navigation.
  setClient() {
    c.request();
  }
};
window.__ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__ = w;
c.register("online-image", w);
c.request();
