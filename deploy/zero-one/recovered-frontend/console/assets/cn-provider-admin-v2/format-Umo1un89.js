import { a3 as n } from "./cnProviderAdminLeaf-BPO9X3xc.js";
function u(t) {
  if (t == null) return "0";
  const o = n(), r = Math.abs(t);
  return new Intl.NumberFormat(o, {
    notation: r >= 1e4 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(t);
}
function c(t, o = 2) {
  if (t === 0) return "0 Bytes";
  const r = 1024, a = o < 0 ? 0 : o, i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], e = Math.floor(Math.log(t) / Math.log(r));
  return parseFloat((t / Math.pow(r, e)).toFixed(a)) + " " + i[e];
}
function m(t, o = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: !1
}, r) {
  if (!t) return "";
  const a = new Date(t);
  if (isNaN(a.getTime())) return "";
  const i = r ?? n();
  return new Intl.DateTimeFormat(i, o).format(a);
}
function f(t, o, r) {
  return m(t, o, r);
}
function d(t, o) {
  return m(
    t,
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1
    },
    o
  );
}
export {
  u as a,
  f as b,
  d as c,
  c as f
};
