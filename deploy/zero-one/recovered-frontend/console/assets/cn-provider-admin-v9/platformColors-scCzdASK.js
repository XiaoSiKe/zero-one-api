const a = "bg-slate-500/10 text-slate-600 border-slate-500/30 dark:text-slate-400", r = {
  anthropic: "bg-zo-alert-500/10 text-zo-alert-600 dark:bg-zo-alert-500/10 dark:text-zo-alert-300",
  openai: "bg-zo-signal-500/10 text-zo-signal-600 dark:bg-zo-signal-500/10 dark:text-zo-signal-300",
  antigravity: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/10 dark:text-purple-300",
  gemini: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300",
  grok: "bg-zinc-800/10 text-zinc-800 dark:bg-zinc-500/10 dark:text-zinc-200",
  kimi: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/10 dark:text-pink-300",
  zhipu: "bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300",
  deepseek: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/10 dark:text-teal-300",
  minimax: "bg-rose-500/10 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300",
  composite: "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300"
}, i = {
  anthropic: "text-zo-alert-600 dark:text-zo-alert-400",
  openai: "text-zo-signal-600 dark:text-zo-signal-400",
  antigravity: "text-purple-600 dark:text-purple-400",
  gemini: "text-blue-600 dark:text-blue-400",
  grok: "text-zinc-800 dark:text-zinc-200",
  kimi: "text-pink-600 dark:text-pink-400",
  zhipu: "text-indigo-600 dark:text-indigo-400",
  deepseek: "text-teal-600 dark:text-teal-400",
  minimax: "text-rose-600 dark:text-rose-400",
  composite: "text-cyan-700 dark:text-cyan-300"
}, n = "text-primary-600 dark:text-primary-400";
function e(t) {
  return t === "anthropic" || t === "openai" || t === "antigravity" || t === "gemini" || t === "grok" || t === "kimi" || t === "zhipu" || t === "deepseek" || t === "minimax" || t === "composite";
}
function o(t) {
  return e(t) ? r[t] : a;
}
function k(t) {
  return e(t) ? i[t] : n;
}
function x(t) {
  switch (t) {
    case "anthropic":
      return "Anthropic";
    case "openai":
      return "OpenAI";
    case "antigravity":
      return "Antigravity";
    case "gemini":
      return "Gemini";
    case "grok":
      return "Grok";
    case "kimi":
      return "Kimi";
    case "zhipu":
      return "Zhipu GLM";
    case "deepseek":
      return "DeepSeek";
    case "minimax":
      return "MiniMax";
    case "composite":
      return "Composite";
    default:
      return t || "API";
  }
}
export {
  x as a,
  o as b,
  k as p
};
