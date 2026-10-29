import { i as r } from "./ConfirmDialog.vue_vue_type_script_setup_true_lang-DZ8D1X4J.js";
const i = "bg-slate-500/10 text-slate-600 border-slate-500/30 dark:text-slate-400", o = {
  anthropic: "bg-zo-alert-500/10 text-zo-alert-600 dark:bg-zo-alert-500/10 dark:text-zo-alert-300",
  openai: "bg-zo-signal-500/10 text-zo-signal-600 dark:bg-zo-signal-500/10 dark:text-zo-signal-300",
  antigravity: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/10 dark:text-purple-300",
  gemini: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300",
  grok: "bg-zinc-800/10 text-zinc-800 dark:bg-zinc-500/10 dark:text-zinc-200",
  kimi: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/10 dark:text-pink-300",
  zhipu: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
  deepseek: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/10 dark:text-teal-300",
  minimax: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300",
  opencode_go: "bg-amber-500/10 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  typesafe: "bg-sky-500/10 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300",
  command_code: "bg-neutral-500/10 text-neutral-700 dark:bg-neutral-500/10 dark:text-neutral-300",
  cline: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300",
  composite: "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300"
}, n = {
  anthropic: "text-zo-alert-600 dark:text-zo-alert-400",
  openai: "text-zo-signal-600 dark:text-zo-signal-400",
  antigravity: "text-purple-600 dark:text-purple-400",
  gemini: "text-blue-600 dark:text-blue-400",
  grok: "text-zinc-800 dark:text-zinc-200",
  kimi: "text-pink-600 dark:text-pink-400",
  zhipu: "text-indigo-600 dark:text-indigo-400",
  deepseek: "text-teal-600 dark:text-teal-400",
  minimax: "text-rose-600 dark:text-rose-400",
  opencode_go: "text-amber-700 dark:text-amber-300",
  typesafe: "text-sky-700 dark:text-sky-300",
  command_code: "text-neutral-700 dark:text-neutral-300",
  cline: "text-violet-600 dark:text-violet-400",
  composite: "text-cyan-700 dark:text-cyan-300"
}, d = "text-primary-600 dark:text-primary-400";
function a(t) {
  return t === "anthropic" || t === "openai" || t === "antigravity" || t === "gemini" || t === "grok" || t === "kimi" || t === "zhipu" || t === "deepseek" || t === "minimax" || t === "opencode_go" || t === "typesafe" || t === "command_code" || t === "cline" || t === "composite";
}
function x(t) {
  return a(t) ? o[t] : i;
}
function l(t) {
  return a(t) ? n[t] : d;
}
function g(t) {
  var e;
  return t === "composite" ? "Composite" : ((e = r(t)) == null ? void 0 : e.display_name) ?? (t || "API");
}
export {
  g as a,
  x as b,
  l as p
};
