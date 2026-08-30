const r = "/images", w = "zero-one-online-image", b = "zero-one-online-image-style", S = "zero-one-online-image-active", v = "data-zero-one-online-image-link", f = /* @__PURE__ */ new Map();
let i = null, g = null, s = null, m = !1, d = 0;
function y(e, t) {
  return h().locale === "zh" ? e : t;
}
function O() {
  return document.querySelector("#app");
}
function h() {
  var n, o, a, l, p, u, E;
  const e = (E = (u = (p = (l = (a = (o = (n = O()) == null ? void 0 : n.__vue_app__) == null ? void 0 : o.config) == null ? void 0 : a.globalProperties) == null ? void 0 : l.$pinia) == null ? void 0 : p._s) == null ? void 0 : u.get("auth")) == null ? void 0 : E.runMode, t = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
  return {
    locale: String(t).toLowerCase().startsWith("zh") ? "zh" : "en",
    runMode: e === "simple" ? "simple" : "standard"
  };
}
function I() {
  var e, t, n, o;
  return ((o = (n = (t = (e = O()) == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : o.$router) || null;
}
function A(e) {
  const t = y("在线生图", "Online Images");
  e.getAttribute("href") !== r && e.setAttribute("href", r), e.dataset.navigationPath !== r && (e.dataset.navigationPath = r), e.getAttribute("aria-label") !== t && e.setAttribute("aria-label", t);
  const n = e.classList.contains("sidebar-link-collapsed") ? t : "";
  e.title !== n && (e.title = n);
  const o = window.location.pathname === r;
  e.classList.contains("sidebar-link-active") !== o && e.classList.toggle("sidebar-link-active", o);
  const a = e.querySelector(".sidebar-label");
  a && a.textContent !== t && (a.textContent = t);
}
function T() {
  const e = document.querySelector("aside nav");
  if (!(e instanceof HTMLElement)) return;
  const t = [...e.querySelectorAll('a[href="/images"]')], n = t.find((a) => !a.hasAttribute(v));
  if (n) {
    t.filter((a) => a !== n && a.hasAttribute(v)).forEach((a) => a.remove()), A(n);
    return;
  }
  let o = t[0];
  if (!o) {
    const a = e.querySelector('a[href="/redeem"]') || e.querySelector('a[href="/keys"]');
    if (!a) return;
    o = a.cloneNode(!0), o.setAttribute(v, "true"), o.removeAttribute("data-tour");
    const l = o.querySelector("svg");
    l && (l.setAttribute("viewBox", "0 0 24 24"), l.setAttribute("fill", "none"), l.setAttribute("stroke", "currentColor"), l.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.25 2.25 0 00-1.906-1.059H9.554a2.25 2.25 0 00-1.906 1.059l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>'), o.addEventListener("click", (p) => {
      const u = I();
      u && (p.preventDefault(), u.push(r));
    }), a.after(o), queueMicrotask(() => c == null ? void 0 : c.request());
  }
  A(o);
}
function L() {
  if (document.body.classList.add(S), document.getElementById(b)) return;
  const e = document.createElement("link");
  e.id = b, e.rel = "stylesheet", e.href = "/assets/online-image-v9/online-image.css", document.head.append(e);
}
function C(e, t) {
  for (const n of Array.from(e.children))
    !(n instanceof HTMLElement) || n === t || (f.has(n) || f.set(n, { display: n.style.display, inert: n.inert }), n.style.display !== "none" && (n.style.display = "none"), n.inert || (n.inert = !0), n.dataset.zeroOneOnlineImageHidden !== "true" && (n.dataset.zeroOneOnlineImageHidden = "true"));
}
function x() {
  for (const [e, t] of f)
    e.style.display = t.display, e.inert = t.inert, delete e.dataset.zeroOneOnlineImageHidden;
  f.clear();
}
function M() {
  var t;
  d += 1, s = null, i == null || i.unmount(), i = null, g = null;
  const e = document.getElementById(w);
  e instanceof HTMLElement && e.dataset.zeroOneOnlineImagePlaceholder !== "true" && e.remove(), document.body.classList.remove(S), (t = document.getElementById(b)) == null || t.remove(), x();
}
function N(e) {
  const t = document.createElement("div");
  t.className = "card mx-auto mt-8 max-w-xl p-6 text-center", t.setAttribute("role", "alert");
  const n = document.createElement("h2");
  n.className = "text-lg font-semibold text-gray-900 dark:text-white", n.textContent = y("在线生图加载失败", "Online image generation failed to load");
  const o = document.createElement("p");
  o.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", o.textContent = y("控制台外壳仍然可用，请重试加载在线生图。", "The Console shell is still available. Retry loading online image generation.");
  const a = document.createElement("button");
  a.type = "button", a.className = "btn btn-primary btn-specular mt-4", a.textContent = y("重试", "Retry"), a.addEventListener("click", () => window.location.reload()), t.append(n, o, a), e.replaceChildren(t);
}
async function z(e, t) {
  if (L(), C(e, t), i && g === t && t.isConnected && t.parentElement === e) {
    await i.syncState(h());
    return;
  }
  if (s) return;
  const n = ++d;
  i == null || i.unmount(), i = null, g = null, t.replaceChildren(), s = (async () => {
    let o = null;
    try {
      if (o = await (await import("./onlineImageLeaf-CiknPGSt.js")).prepareOnlineImageSurface(h()), n !== d || window.location.pathname !== r || !e.isConnected || !t.isConnected || t.parentElement !== e) {
        o.unmount(), queueMicrotask(_);
        return;
      }
      o.mount(t), await o.syncState(h()), i = o, g = t, m = !1;
    } catch (a) {
      o == null || o.unmount(), n === d && window.location.pathname === r && (m = !0, N(t)), console.error("Online image generation failed to mount:", a);
    } finally {
      n === d && (s = null);
    }
  })(), await s;
}
function _() {
  if (T(), window.location.pathname !== r) {
    (i || s || m || f.size > 0) && M(), m = !1;
    return;
  }
  if (m) return;
  const e = document.querySelector(
    `#${w}[data-zero-one-online-image-placeholder="true"]`
  ), t = e == null ? void 0 : e.closest("main");
  e && t instanceof HTMLElement && z(t, e);
}
const c = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!c) throw new Error("Online image generation requires the approved navigation reconciliation module");
window.__ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__ = _;
c.register("online-image", _);
c.request();
