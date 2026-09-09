import { a9 as f, a5 as a } from "./cnProviderAdminLeaf-CHNemIo-.js";
function h(t) {
  if (!t) return a.global.t("common.time.never");
  const n = /* @__PURE__ */ new Date(), o = new Date(t), e = n.getTime() - o.getTime();
  if (e < 0 || isNaN(e)) return a.global.t("common.time.never");
  const i = Math.floor(e / 1e3), r = Math.floor(i / 60), s = Math.floor(r / 60), u = Math.floor(s / 24);
  return u > 0 ? a.global.t("common.time.daysAgo", { n: u }) : s > 0 ? a.global.t("common.time.hoursAgo", { n: s }) : r > 0 ? a.global.t("common.time.minutesAgo", { n: r }) : a.global.t("common.time.justNow");
}
function w(t) {
  if (t == null) return "0";
  const n = f(), o = Math.abs(t);
  return new Intl.NumberFormat(n, {
    notation: o >= 1e4 ? "compact" : "standard",
    maximumFractionDigits: 1
  }).format(t);
}
function M(t, n = "USD") {
  if (t == null) return "$0.00";
  const o = f(), e = t > 0 && t < 0.01 ? 6 : 2;
  return new Intl.NumberFormat(o, {
    style: "currency",
    currency: n,
    minimumFractionDigits: e,
    maximumFractionDigits: e
  }).format(t);
}
function T(t, n = 2) {
  if (t === 0) return "0 Bytes";
  const o = 1024, e = n < 0 ? 0 : n, i = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = Math.floor(Math.log(t) / Math.log(o));
  return parseFloat((t / Math.pow(o, r)).toFixed(e)) + " " + i[r];
}
function m(t, n = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: !1
}, o) {
  if (!t) return "";
  const e = new Date(t);
  if (isNaN(e.getTime())) return "";
  const i = o ?? f();
  return new Intl.DateTimeFormat(i, n).format(e);
}
function b(t, n, o) {
  return m(t, n, o);
}
function D(t, n) {
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
    n
  );
}
function F(t) {
  if (!t) return "";
  const n = new Date(t * 1e3);
  if (isNaN(n.getTime())) return "";
  const o = n.getFullYear(), e = String(n.getMonth() + 1).padStart(2, "0"), i = String(n.getDate()).padStart(2, "0"), r = String(n.getHours()).padStart(2, "0"), s = String(n.getMinutes()).padStart(2, "0");
  return `${o}-${e}-${i}T${r}:${s}`;
}
function N(t) {
  if (!t) return null;
  const n = new Date(t);
  return isNaN(n.getTime()) ? null : Math.floor(n.getTime() / 1e3);
}
function B() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}
function y(t) {
  return m(t, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1
  });
}
function x(t, n) {
  if (t == null) return "0";
  const o = Math.abs(t);
  return (n == null ? void 0 : n.allowBillions) !== !1 && o >= 1e9 ? `${(t / 1e9).toFixed(1)}B` : o >= 1e6 ? `${(t / 1e6).toFixed(1)}M` : o >= 1e3 ? `${(t / 1e3).toFixed(1)}K` : t.toString();
}
function l(t) {
  if (!t) return null;
  const n = /* @__PURE__ */ new Date(), e = new Date(t).getTime() - n.getTime();
  if (e <= 0 || isNaN(e)) return null;
  const i = Math.floor(e / (1e3 * 60)), r = Math.floor(i / 60), s = Math.floor(r / 24), u = r % 24, c = i % 60;
  return s > 0 ? a.global.t("common.time.countdown.daysHours", { d: s, h: u }) : r > 0 ? a.global.t("common.time.countdown.hoursMinutes", { h: r, m: c }) : a.global.t("common.time.countdown.minutes", { m: i });
}
function p(t) {
  const n = l(t);
  return n ? a.global.t("common.time.countdown.withSuffix", { time: n }) : null;
}
function d(t) {
  const n = Number(t);
  return Number.isFinite(n) ? n : 0;
}
function S(t) {
  const n = d(t);
  return n >= 1e3 ? (n / 1e3).toFixed(2) + "K" : n >= 1 ? n.toFixed(2) : n >= 0.01 ? n.toFixed(3) : n.toFixed(4);
}
export {
  b as a,
  l as b,
  p as c,
  D as d,
  y as e,
  F as f,
  B as g,
  x as h,
  S as i,
  w as j,
  M as k,
  h as l,
  T as m,
  N as p,
  d as t
};
