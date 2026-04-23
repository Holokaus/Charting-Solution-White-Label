/**
 * Module 91799 - Auto-beautified from TradingView webpack bundle
 *
 * @module 91799
 * @date 2026-04-23
 * @size 1226 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 24640, 59332, 60521
 *
 * Exports:
 *   - formatNumber (internal: r)
 *   - parseNumber (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  formatNumber: () => r,
  parseNumber: () => l
});
var s = i(60521),
  o = i(59332),
  n = i(24640);

function r(e, t, i, o, n) {
  if (!Number.isFinite(e)) return `${e}`;
  const r = -1 === Math.sign(e) ? "-" : "";
  e = Math.abs(e);
  let a = void 0 === i ? e.toString() : e.toFixed(i);
  if (a.includes("e")) {
    if (!o) return `${r}${a.replace(".",t.decimalSign)}`;
    {
      const i = new s.Big(e);
      if (a = i.lt(1) ? i.toFixed() : i.toString(), a.includes("e")) return `${r}${a.replace(".",t.decimalSign)}`
    }
  }
  const l = a.split("."),
    c = l[0];
  let h = l[1];
  const d = function(e, t) {
    let i = e.length;
    const s = [];
    for (; i > 0;) s.unshift(e.slice(Math.max(i - 3, 0), i)), i -= 3;
    return s.join(t)
  }(c, t.groupingSeparator);
  return void 0 !== i && (h = 0 === i ? void 0 : e.toFixed(i).slice(-i)), void 0 !== n && void 0 !== h && (h = function(e, t) {
    let i = e.length - 1;
    for (let s = i; s >= t && "0" === e[s]; s -= 1) i -= 1;
    return e.slice(0, i + 1)
  }(h, n)), h ? `${r}${d}${t.decimalSign}${h}` : `${r}${d}`
}
const a = (0, o.default)((e => {
  const t = e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  return new RegExp(t, "gm")
}));

function l(e, t) {
  if (/^(NaN|[+|-]?Infinity)$/.test(e)) return parseFloat(e);
  e = (0, n.stripLTRMarks)(e);
  const i = a(t.groupingSeparator);
  return i && (e = e.replace(i, "")), e = e.replace(t.decimalSign, "."), /^(\+|-)?\d+(\.\d+|\.)?(e(\+|-)?\d+)?$/.test(e) ? parseFloat(e) : NaN
