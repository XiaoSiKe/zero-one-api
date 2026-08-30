function k(e) {
  var t;
  return e.status === "active" && ((t = e.group) == null ? void 0 : t.allow_image_generation) === !0 && (e.group.platform === "openai" || e.group.platform === "grok");
}
const c = "/images", M = "zero-one-online-image", I = "zero-one-online-image-style", R = "zero-one-online-image-active", b = "data-zero-one-online-image-link", v = /* @__PURE__ */ new Map();
let l = null, E = null, d = null, _ = !1, p = 0, O = null, A = "", S = !1, m = !1, g = 0, y = null, f = null;
function h(e, t) {
  return w().locale === "zh" ? e : t;
}
function C() {
  return document.querySelector("#app");
}
function w() {
  var n, r, o, i, a, u, N;
  const e = (N = (u = (a = (i = (o = (r = (n = C()) == null ? void 0 : n.__vue_app__) == null ? void 0 : r.config) == null ? void 0 : o.globalProperties) == null ? void 0 : i.$pinia) == null ? void 0 : a._s) == null ? void 0 : u.get("auth")) == null ? void 0 : N.runMode, t = localStorage.getItem("sub2api_locale") || document.documentElement.lang;
  return {
    locale: String(t).toLowerCase().startsWith("zh") ? "zh" : "en",
    runMode: e === "simple" ? "simple" : "standard"
  };
}
function x() {
  var e, t, n, r, o, i;
  return ((i = (o = (r = (n = (t = (e = C()) == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : r.$pinia) == null ? void 0 : o._s) == null ? void 0 : i.get("auth")) || null;
}
function z() {
  var r, o;
  const e = x(), t = (r = e == null ? void 0 : e.user) == null ? void 0 : r.id, n = (o = e == null ? void 0 : e.user) == null ? void 0 : o.role;
  return e != null && e.token && t !== void 0 && n ? `${String(t)}:${String(n)}` : "";
}
function H(e) {
  A !== e && (A = e, g += 1, f == null || f.abort(), f = null, y = null, S = !1, m = !1);
}
function q() {
  const e = z();
  if (H(e), !e || !O || m || y) return;
  const t = ++g, n = new AbortController();
  f = n;
  const r = (async () => {
    let o = 1, i = !1;
    for (; !i; ) {
      const a = await O(o, n.signal);
      if (t !== g || e !== A) return;
      const u = Array.isArray(a == null ? void 0 : a.items) ? a.items : [];
      if (i = u.some(k), i || o >= Number((a == null ? void 0 : a.pages) || 1) || u.length === 0) break;
      o += 1;
    }
    t !== g || e !== A || (S = i, m = !0);
  })().catch(() => {
    t === g && e === A && (S = !1, m = !0);
  }).finally(() => {
    y === r && (y = null, f = null, queueMicrotask(() => s == null ? void 0 : s.request()));
  });
  y = r;
}
function P() {
  var e, t, n, r;
  return ((r = (n = (t = (e = C()) == null ? void 0 : e.__vue_app__) == null ? void 0 : t.config) == null ? void 0 : n.globalProperties) == null ? void 0 : r.$router) || null;
}
function T(e) {
  const t = h("在线生图", "Online Images");
  e.getAttribute("href") !== c && e.setAttribute("href", c), e.dataset.navigationPath !== c && (e.dataset.navigationPath = c), e.getAttribute("aria-label") !== t && e.setAttribute("aria-label", t);
  const n = e.classList.contains("sidebar-link-collapsed") ? t : "";
  e.title !== n && (e.title = n);
  const r = window.location.pathname === c;
  e.classList.contains("sidebar-link-active") !== r && e.classList.toggle("sidebar-link-active", r);
  const o = e.querySelector(".sidebar-label");
  o && o.textContent !== t && (o.textContent = t);
}
function B() {
  const e = document.querySelector("aside nav");
  if (!(e instanceof HTMLElement)) return;
  const t = [...e.querySelectorAll('a[href="/images"]')], n = t.find((o) => !o.hasAttribute(b));
  if (q(), !m || !S) {
    t.filter((o) => o.hasAttribute(b)).forEach((o) => o.remove());
    return;
  }
  if (n) {
    t.filter((o) => o !== n && o.hasAttribute(b)).forEach((o) => o.remove()), T(n);
    return;
  }
  let r = t[0];
  if (!r) {
    const o = e.querySelector('a[href="/redeem"]') || e.querySelector('a[href="/keys"]');
    if (!o) return;
    r = o.cloneNode(!0), r.setAttribute(b, "true"), r.removeAttribute("data-tour");
    const i = r.querySelector("svg");
    i && (i.setAttribute("viewBox", "0 0 24 24"), i.setAttribute("fill", "none"), i.setAttribute("stroke", "currentColor"), i.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.25 2.25 0 00-1.906-1.059H9.554a2.25 2.25 0 00-1.906 1.059l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>'), r.addEventListener("click", (a) => {
      const u = P();
      u && (a.preventDefault(), u.push(c));
    }), o.after(r), queueMicrotask(() => s == null ? void 0 : s.request());
  }
  T(r);
}
function D() {
  if (document.body.classList.add(R), document.getElementById(I)) return;
  const e = document.createElement("link");
  e.id = I, e.rel = "stylesheet", e.href = "/assets/online-image-v10/online-image.css", document.head.append(e);
}
function V(e, t) {
  for (const n of Array.from(e.children))
    !(n instanceof HTMLElement) || n === t || (v.has(n) || v.set(n, { display: n.style.display, inert: n.inert }), n.style.display !== "none" && (n.style.display = "none"), n.inert || (n.inert = !0), n.dataset.zeroOneOnlineImageHidden !== "true" && (n.dataset.zeroOneOnlineImageHidden = "true"));
}
function $() {
  for (const [e, t] of v)
    e.style.display = t.display, e.inert = t.inert, delete e.dataset.zeroOneOnlineImageHidden;
  v.clear();
}
function G() {
  var t;
  p += 1, d = null, l == null || l.unmount(), l = null, E = null;
  const e = document.getElementById(M);
  e instanceof HTMLElement && e.dataset.zeroOneOnlineImagePlaceholder !== "true" && e.remove(), document.body.classList.remove(R), (t = document.getElementById(I)) == null || t.remove(), $();
}
function K(e) {
  const t = document.createElement("div");
  t.className = "card mx-auto mt-8 max-w-xl p-6 text-center", t.setAttribute("role", "alert");
  const n = document.createElement("h2");
  n.className = "text-lg font-semibold text-gray-900 dark:text-white", n.textContent = h("在线生图加载失败", "Online image generation failed to load");
  const r = document.createElement("p");
  r.className = "mt-2 text-sm text-gray-500 dark:text-gray-400", r.textContent = h("控制台外壳仍然可用，请重试加载在线生图。", "The Console shell is still available. Retry loading online image generation.");
  const o = document.createElement("button");
  o.type = "button", o.className = "btn btn-primary btn-specular mt-4", o.textContent = h("重试", "Retry"), o.addEventListener("click", () => window.location.reload()), t.append(n, r, o), e.replaceChildren(t);
}
async function Z(e, t) {
  if (D(), V(e, t), l && E === t && t.isConnected && t.parentElement === e) {
    await l.syncState(w());
    return;
  }
  if (d) return;
  const n = ++p;
  l == null || l.unmount(), l = null, E = null, t.replaceChildren(), d = (async () => {
    let r = null;
    try {
      if (r = await (await import("./onlineImageLeaf-Dw-fchvw.js")).prepareOnlineImageSurface(w()), n !== p || window.location.pathname !== c || !e.isConnected || !t.isConnected || t.parentElement !== e) {
        r.unmount(), queueMicrotask(L);
        return;
      }
      r.mount(t), await r.syncState(w()), l = r, E = t, _ = !1;
    } catch (o) {
      r == null || r.unmount(), n === p && window.location.pathname === c && (_ = !0, K(t)), console.error("Online image generation failed to mount:", o);
    } finally {
      n === p && (d = null);
    }
  })(), await d;
}
function L() {
  if (B(), window.location.pathname !== c) {
    (l || d || _ || v.size > 0) && G(), _ = !1;
    return;
  }
  if (_) return;
  const e = document.querySelector(
    `#${M}[data-zero-one-online-image-placeholder="true"]`
  ), t = e == null ? void 0 : e.closest("main");
  e && t instanceof HTMLElement && Z(t, e);
}
const s = window.__ZERO_ONE_NAVIGATION_RECONCILIATION__;
if (!s) throw new Error("Online image generation requires the approved navigation reconciliation module");
window.__ZERO_ONE_ONLINE_IMAGE_ACCESS__ = {
  setClient(e) {
    O = e, m = !1, q(), s.request();
  }
};
window.__ZERO_ONE_ONLINE_IMAGE_SHELL_MOUNTED__ = L;
s.register("online-image", L);
s.request();
export {
  k
};
