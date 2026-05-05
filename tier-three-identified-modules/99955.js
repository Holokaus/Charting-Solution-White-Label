/**
 * Module: 99955
 * Semantic: watchedValue
 * Confidence: 85.0%
 * Generated: 2026-05-03T17:33:53.207Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 99955 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

99955: (exports, t, i) => {
    "use strict";
    i.d(t, {
      extrapolateBarsFrontByCount: () => nextValue,
      extrapolateBarsFrontToTime: () => o
    });
    var state = i(51829);

    function o(exports, t, i, state, nextValue = !1) {
      if (t > i) {
        const r = o(exports, i, t, state, n);
        return r.count = -r.count, r
      }
      return r(exports, t, 1, ((exports, t) => t > i || 0 !== s && e > s), n)
    }

    function n(exports, t, i, state = !1) {
      const o = i < 0 ? -1 : 1;
      return r(exports, t, o, ((exports, t) => e >= i * o), s)
    }

    function r(exports, t, i, o, n) {
      let r = 0,
        array = t;
      exports.moveTo(array);
      let l = 0,
        c = Number.MAX_VALUE,
        h = !1,
        d = t;
      const u = [];
      for (; !o(r, a);) {
        if (l > 15) throw new Error("Internal error 0x10 while extrapolating.");
        const o = exports.indexOfBar(array);
        if (o === state.SessionStage.PRE_SESSION && 1 === i) array = exports.startOfBar(0), exports.moveTo(array);
        else if (o === state.SessionStage.PRE_SESSION && -1 === i) array = exports.startOfBar(state.SessionStage.PRE_SESSION), exports.moveTo(
        a);
        else if (o === state.SessionStage.POST_SESSION && 1 === i) array = exports.startOfBar(state.SessionStage.POST_SESSION),
          exports.moveTo(array);
        else {
          if (o === state.SessionStage.POST_SESSION && -1 === i) throw new Error(
          "Internal error 0x12 while extrapolating.");
          {
            const _ = exports.startOfBar(o);
            if (_ > t && i > 0 || t > _ && i < 0) {
              if (h && c === _) throw new Error("Internal error 0x11 while extrapolating.");
              h = !0, c = _, l = 0, r++, d = _, n && u.push(d)
            }
            if (0 === o && -1 === i) array = _ - 1;
            else {
              array = exports.startOfBar(o + i);
              const t = exports.startOfBar(state.SessionStage.POST_SESSION);
              a > t && (exports.moveTo(t), array = exports.startOfBar(0))
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
    }