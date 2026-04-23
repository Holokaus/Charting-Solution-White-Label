/**
 * Module 99955 - Auto-beautified from TradingView webpack bundle
 *
 * @module 99955
 * @date 2026-04-23
 * @size 1228 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 51829
 *
 * Exports:
 *   - extrapolateBarsFrontByCount (internal: n)
 *   - extrapolateBarsFrontToTime (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  extrapolateBarsFrontByCount: () => n,
  extrapolateBarsFrontToTime: () => o
});
var s = i(51829);

function o(e, t, i, s, n = !1) {
  if (t > i) {
    const r = o(e, i, t, s, n);
    return r.count = -r.count, r
  }
  return r(e, t, 1, ((e, t) => t > i || 0 !== s && e > s), n)
}

function n(e, t, i, s = !1) {
  const o = i < 0 ? -1 : 1;
  return r(e, t, o, ((e, t) => e >= i * o), s)
}

function r(e, t, i, o, n) {
  let r = 0,
    a = t;
  e.moveTo(a);
  let l = 0,
    c = Number.MAX_VALUE,
    h = !1,
    d = t;
  const u = [];
  for (; !o(r, a);) {
    if (l > 15) throw new Error("Internal error 0x10 while extrapolating.");
    const o = e.indexOfBar(a);
    if (o === s.SessionStage.PRE_SESSION && 1 === i) a = e.startOfBar(0), e.moveTo(a);
    else if (o === s.SessionStage.PRE_SESSION && -1 === i) a = e.startOfBar(s.SessionStage.PRE_SESSION), e.moveTo(a);
    else if (o === s.SessionStage.POST_SESSION && 1 === i) a = e.startOfBar(s.SessionStage.POST_SESSION),
      e.moveTo(a);
    else {
      if (o === s.SessionStage.POST_SESSION && -1 === i) throw new Error("Internal error 0x12 while extrapolating.");
      {
        const _ = e.startOfBar(o);
        if (_ > t && i > 0 || t > _ && i < 0) {
          if (h && c === _) throw new Error("Internal error 0x11 while extrapolating.");
          h = !0, c = _, l = 0, r++, d = _, n && u.push(d)
        }
        if (0 === o && -1 === i) a = _ - 1;
        else {
          a = e.startOfBar(o + i);
          const t = e.startOfBar(s.SessionStage.POST_SESSION);
          a > t && (e.moveTo(t), a = e.startOfBar(0))
        }
      }
    }
    l++
  }
  return {
    time: d,
    times: u,
    count: r
  }
