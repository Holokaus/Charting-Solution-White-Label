/**
 * Module 61710 - Auto-beautified from TradingView webpack bundle
 *
 * @module 61710
 * @date 2026-04-23
 * @size 5518 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 2088, 6652, 12217, 26610, 29447, 50151, 68192
 *
 * Exports:
 *   - moveAfterSource (internal: B)
 *   - moveBeforeSource (internal: V)
 *   - newLineToolZOrder (internal: P)
 *   - newStudyZOrder (internal: x)
 *   - prepareZOrderFixIfRequired (internal: R)
 *   - reorderDataSourcesStateZOrder (internal: w)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

61710: (e, t, i) => {
    "use strict";
    i.d(t, {
      moveAfterSource: () => B,
      moveBeforeSource: () => V,
      newLineToolZOrder: () => P,
      newStudyZOrder: () => x,
      prepareZOrderFixIfRequired: () => R,
      reorderDataSourcesStateZOrder: () => w
    });
    var s, o = i(68192),
      n = i(50151),
      r = i(26610),
      a = i(2088),
      l = i(6652),
      c = i(29447),
      h = i(12217);

    function d(e) {
      return (0, r.isLineTool)(e) && !e.isSpeciallyZOrderedSource()
    }

    function u(e) {
      return (0, a.isStudy)(e) && !e.isSpeciallyZOrderedSource() || (0, a.isStudyStub)(e)
    }

    function _(e, t) {
      return e.zorder - t.zorder
    }

    function p(e, t) {
      (0, c.isMainSeriesState)(e) ? e.zorder = 0: e.zorder = t
    }

    function m(e, t) {
      e.setZorder(t)
    }

    function g(e) {
      return e.zorder()
    }

    function f(e) {
      return Math.round(1e3 * e) / 1e3
    }

    function y(e, t) {
      const i = Math.max(e, t),
        s = Math.min(e, t);
      return Math.max(0, Math.ceil(i) - Math.floor(s) - 1)
    }

    function v(e, t, i) {
      let s = 0;
      const o = function(e, t) {
        const i = 1e3;
        return Math.abs(t * i - e * i) / i
      }(t, e);
      var n;
      return o > i ? (e = Math.trunc(e), s = Math.floor(o / (i + 1))) : (n = o / (i + 1), s = Math.floor(1e3 * n) / 1e3), {
        startZOrder: e,
        zOrderStep: s
      }
    }

    function S(e, t, i, s) {
      let o = e.length,
        n = t;
      for (let t = e.length - 1; t >= -1; t--)
        if (-1 === t || s(e[t])) {
          const s = t;
          let r = I(n);
          if (o - 1 === s) s >= 0 && i(e[s], r);
          else {
            const t = y(o, s);
            let a = 0;
            for (; 0 === a;) {
              const e = v(n, r, t);
              n = e.startZOrder, a = e.zOrderStep, 0 === a && (r -= 1e4, 0 === r && (r -= 1e4))
            }
            let l = o - 1;
            for (; l > s;) {
              const t = f(n - a);
              i(e[l], t), n = t, l--
            }
            s >= 0 && i(e[s], r)
          }
          n = r, o = s
        }
    }

    function b(e, t, i, s) {
      let o = -1,
        n = t;
      for (let t = 0; t <= e.length; t++)
        if (t === e.length || s(e[t])) {
          const s = t;
          let r = M(n);
          if (o + 1 === s) s <= e.length - 1 && i(e[s], r);
          else {
            const t = y(o, s);
            let a = 0;
            for (; 0 === a;) {
              const e = v(n, r, t);
              n = e.startZOrder, a = e.zOrderStep, 0 === a && (r += 1e4, 0 === r && (r += 1e4))
            }
            let l = o + 1;
            for (; l <= s - 1;) {
              const t = f(n + a);
              i(e[l], t), n = t, l++
            }
            s <= e.length - 1 && i(e[s], r)
          }
          n = r, o = s
        }
    }

    function w(e) {
      ! function(e, t, i, s, o, n) {
        let r = null;
        const a = [];
        for (const o of e) t(o) ? (a.push(o), r = o) : (i(o) || s(o)) && a.push(o);
        a.sort(n), null !== r && o(r, 0);
        const l = null === r ? -1 : a.indexOf(r); - 1 !== l ? (S(a.slice(0, l), 0, o, i), b(a.slice(l + 1), 0, o, i)) : b(a, 0, o, i)
      }(e, c.isMainSeriesState, c.isStudyState, c.isLineToolState, p, _)
    }

    function C(e, t) {
      const i = Math.floor(e / 1e4);
      let s = t.get(i);
      return void 0 === s && (s = [], t.set(i, s)), s
    }

    function T(e, t, i, s, o, n) {
      let r = -1 / 0,
        a = 1 / 0,
        l = -1 / 0,
        c = 0;
      const h = new Map;
      for (let s = 0; s < e.length; ++s) {
        const n = e[s],
          d = o(n);
        t(n) ? (r = Math.max(r, d), C(d, h).push(n)) : i(n) && (d < 0 && (a = Math.min(a, d), l = Math.max(l, d)), c = Math.max(c, d))
      }
      if (n) {
        const e = Math.max(c, r),
          t = v(e, M(e), 1);
        return f(t.startZOrder + t.zOrderStep)
      }
      if (r === -1 / 0) {
        const e = a === 1 / 0 ? 0 : a,
          t = v(I(e), e, 1);
        return f(t.startZOrder + t.zOrderStep)
      }
      const d = v(r, M(r), 1);
      if (0 !== d.zOrderStep) return f(d.startZOrder + d.zOrderStep);
      const u = C(r, h).sort(((e, t) => o(e) - o(t)));
      let _ = I(o(u[0]));
      const p = M(_),
        m = v(_, p, u.length + 1).zOrderStep;
      return 0 !== m ? (u.forEach((e => {
        const t = f(_ + m);
        s(e, t), _ = t
      })), f(_ + m)) : f(p + 5e3)
    }

    function P(e, t) {
      return T(e, d, u, m, g, t)
    }

    function x(e) {
      let t = -1e4;
      for (const i of e) u(i) && (t = Math.min(t, i.zorder() - 1e4));
      return 0 === t ? -1e4 : t
    }

    function M(e) {
      const t = 1e4 * Math.ceil(e / 1e4);
      return t === e ? t + 1e4 : t
    }

    function I(e) {
      const t = 1e4 * Math.floor(e / 1e4);
      return t === e ? t - 1e4 : t
    }

    function A(e, t, i, s, o, n, r) {
      const a = t.length,
        {
          newItems: l,
          movedItemsStartIndex: c
        } = i > 0 ? (0, h.moveAfter)(e, t, i - 1) : (0, h.moveBefore)(e, t, 0);
      let d = !1;
      for (let t = c; t < c + a; t++)
        if (l[t] !== e[t]) {
          d = !0;
          break
        } if (!d) return;
      if (s(t[0])) return void(i < e.length && r(e[i]) < 0 ? b(l.slice(c + 1), 0, n, o) : S(l.slice(0, c), 0, n, o));
      t.some((e => o(e))) ? function(e, t, i, s, o, n) {
        let r, a, l = -1,
          c = -1;
        0 === i ? (c = L(e, i + t, s), a = n(e[c])) : i + t === e.length ? (l = k(e, i - 1, s), r = n(e[l])) : (l = k(e, i - 1, s), r = n(e[l]), c = L(e, i + t, s), a = n(e[c]));
        if ((void 0 === r || r < 0) && void 0 !== a && a <= 0) S(e.slice(0, c), a, o, s);
        else if ((void 0 === a || a > 0) && void 0 !== r && r >= 0) b(e.slice(l + 1), r, o, s);
        else {
          i + t < e.length - i ? S(e.slice(0, i + t), n(e[i + t]), o, s) : b(e.slice(i), n(e[i - 1]), o, s)
        }
      }(l, a, c, o, n, r) : function(e, t, i, s, o, n, r) {
        let a, l;
        0 === i ? l = r(e[i + t]) : i + t === e.length ? a = r(e[i - 1]) : (a = r(e[i - 1]), l = r(e[i + t]));
        let c = 0,
          h = 0,
          d = 0,
          u = 0,
          _ = 0;
        if ((void 0 === a || a < 0) && void 0 !== l && l <= 0) {
          c = l;
          const e = v(c, void 0 !== a ? a : I(l), t);
          c = e.startZOrder, _ = e.zOrderStep, d = i + t - 1, u = d - t, h = -1
        } else if ((void 0 === l || l > 0) && void 0 !== a && a >= 0) {
          c = a;
          const e = v(c, void 0 !== l ? l : M(a), t);
          c = e.startZOrder, _ = e.zOrderStep, d = i, u = d + t, h = 1
        }
        if (0 !== _)
          for (; d !== u;) {
            const t = f(c + h * _);
            n(e[d], t), c = t, d += h
          } else {
            const t = e.findIndex((e => o(e))); - 1 !== t ? (S(e.slice(0, t), 0, n, s), b(e.slice(t + 1), 0, n, s)) : b(e, 0, n, s)
          }
      }(l, a, c, o, s, n, r)
    }

    function L(e, t, i) {
      for (; t < e.length && i(e[t]);) t++;
      return Math.min(t, e.length - 1)
    }

    function k(e, t, i) {
      for (; t >= 0 && i(e[t]);) t--;
      return Math.max(0, t)
    }

    function E(e, t, i, s, o, n, r) {
      const a = e.indexOf(i) + 1;
      A(e, t, a, s, o, n, r)
    }

    function D(e, t, i, s, o, n, r) {
      const a = e.indexOf(i);
      A(e, t, a, s, o, n, r)
    }

    function B(e, t, i) {
      E(e, t, i, l.isSeries, u, m, g)
    }

    function V(e, t, i) {
      D(e, t, i, l.isSeries, u, m, g)
    }

    function R(e) {
      const t = function(e) {
          const t = new Map;
          for (const i of e.panes)
            for (const e of i.lines) t.set(e.id, {
              pane: i,
              line: e
            });
          return t
        }(e),
        i = new Map;
      for (const s of e.groups) {
        const e = new Set(s.tools),
          r = s.tools.map((e => (0, n.ensureDefined)(t.get(e)))).map((e => e.line.zOrder)),
          a = Math.max(...r),
          l = (0, n.ensureDefined)(t.get(s.tools[0])).pane,
          c = (0, o.default)(l.lines, (t => t.zOrder < a && !e.has(t.id)))?.zOrder ?? -1 / 0,
          h = s.tools.filter((e => (0, n.ensureDefined)(t.get(e)).line.zOrder < c)).reverse();
        for (let e = 0; e < h.length; e++) {
          const s = c + e + 1;
          i.set(h[e], s);
          const o = (0, n.ensureDefined)(t.get(h[e]));
          o.line.zOrder = s;
          let r = -1,
            a = -1;
          for (let e = 0; e < l.lines.length; e++) {
            const t = l.lines[e];
            if (t.id === o.line.id && (r = e), t.zOrder > s && (a = e), r >= 0 && a >= 0) break
          }
          l.lines.splice(-1 === a ? 1 / 0 : a, 0, o.line), l.lines.splice(r, 1)
        }
      }
      return i
    }! function(e) {
      e[e.MainSeriesZOrder = 0] = "MainSeriesZOrder", e[e.StudyBaseZOrder = 1e4] = "StudyBaseZOrder", e[e.MaxFractionLength = 3] = "MaxFractionLength"
    }(s || (s = {}))
