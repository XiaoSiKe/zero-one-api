let r = 0;
function o(n = "item") {
  const e = /* @__PURE__ */ new WeakMap();
  return (t) => {
    const c = e.get(t);
    if (c)
      return c;
    const a = `${n}-${++r}`;
    return e.set(t, a), a;
  };
}
export {
  o as c
};
