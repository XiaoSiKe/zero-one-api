function d(t) {
  var r, s;
  if (!t || typeof t != "object") return;
  const n = t, e = n.reason ?? n.code ?? ((s = (r = n.response) == null ? void 0 : r.data) == null ? void 0 : s.code);
  return e != null ? String(e) : void 0;
}
function p(t) {
  return !t || typeof t != "object" ? void 0 : t.metadata;
}
function u(t, n, e) {
  const r = t(n);
  if (r === n) return e;
  const s = t.te;
  return s && !s(n) ? e : r;
}
function y(t, n) {
  const e = { ...t };
  return typeof e.key == "string" && (e.key = u(n, `admin.settings.payment.field_${e.key}`, e.key)), typeof e.keys == "string" && (e.keys = e.keys.split("/").map((r) => u(n, `admin.settings.payment.field_${r}`, r)).join(" / ")), e;
}
function m(t, n, e, r) {
  const s = d(t);
  if (s) {
    const a = `${e}.${s}`, i = p(t) ?? {}, c = y(i, n), o = n(a, c);
    if (o !== a) return o;
    const f = n.te;
    if (f && f(a)) return o;
  }
  return g(t, r);
}
function g(t, n = "Unknown error", e) {
  var s, a, i, c;
  if (!t) return n;
  if (e) {
    const o = d(t);
    if (o && e[o]) return e[o];
  }
  if (typeof t == "object" && t !== null) {
    const o = t;
    if (o.message) return o.message;
    if (o.error) return o.error;
    if ((a = (s = o.response) == null ? void 0 : s.data) != null && a.detail) return o.response.data.detail;
    if ((c = (i = o.response) == null ? void 0 : i.data) != null && c.message) return o.response.data.message;
  }
  if (t instanceof Error) return t.message;
  const r = String(t);
  return r === "[object Object]" ? n : r;
}
export {
  g as a,
  m as e
};
