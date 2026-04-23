/**
 * Module 16879 - Auto-beautified from TradingView webpack bundle
 *
 * @module 16879
 * @date 2026-04-23
 * @size 1998 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 50151
 *
 * Exports:
 *   - compareTwoCollectionsByIds (internal: y)
 *   - indexOf (internal: f)
 *   - intersect (internal: p)
 *   - join (internal: m)
 *   - lowerbound (internal: r)
 *   - lowerboundExt (internal: n)
 *   - lowerbound_int (internal: a)
 *   - mapEntriesGenerator (internal: S)
 *   - moveAfter (internal: u)
 *   - moveBefore (internal: _)
 *   - moveToHead (internal: d)
 *   - nestedMapGenerator (internal: b)
 *   - removeItemFromArray (internal: g)
 *   - subtract (internal: h)
 *   - sum (internal: v)
 *   - upperbound (internal: l)
 *   - upperbound_int (internal: c)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  compareTwoCollectionsByIds: () => y,
  indexOf: () => f,
  intersect: () => p,
  join: () => m,
  lowerbound: () => r,
  lowerboundExt: () => n,
  lowerbound_int: () => a,
  mapEntriesGenerator: () => S,
  moveAfter: () => u,
  moveBefore: () => _,
  moveToHead: () => d,
  nestedMapGenerator: () => b,
  removeItemFromArray: () => g,
  subtract: () => h,
  sum: () => v,
  upperbound: () => l,
  upperbound_int: () => c
});
var s = i(50151);

function o(e, t) {
  return e < t
}

function n(e, t, i, s, o) {
  let n = o - s;
  for (; 0 < n;) {
    const o = n >> 1,
      r = s + o;
    i(e(r), t) ? (s = r + 1, n -= o + 1) : n = o
  }
  return s
}

function r(e, t, i, s = 0, o = e.length) {
  return n((t => e[t]), t, i, s, o)
}

function a(e, t, i = 0, s = e.length) {
  return r(e, t, o, i, s)
}

function l(e, t, i, s = 0, o = e.length) {
  let n = o - s;
  for (; 0 < n;) {
    const o = n >> 1,
      r = s + o;
    i(t, e[r]) ? n = o : (s = r + 1, n -= o + 1)
  }
  return s
}

function c(e, t, i = 0, s = e.length) {
  return l(e, t, o, i, s)
}

function h(e, t) {
  return e.filter((e => !t.includes(e)))
}

function d(e, t) {
  const i = e.indexOf(t);
  return i < 0 ? e.slice() : [t].concat(e.slice(0, i)).concat(e.slice(i + 1))
}

function u(e, t, i) {
  const s = new Set(t),
    o = [],
    n = [],
    r = [];
  return e.forEach(((e, t) => {
    s.has(e) ? n.push(e) : (o.push(e), r.push(t))
  })), i = i < e.length - 1 ? a(r, i + 1) : o.length, o.splice(i, 0, ...n), {
    newItems: o,
    movedItemsStartIndex: i
  }
}

function _(e, t, i) {
  const s = new Set(t),
    o = [],
    n = [],
    r = [];
  return e.forEach(((e, t) => {
    s.has(e) ? n.push(e) : (o.push(e), r.push(t))
  })), i = i <= e.length - 1 ? a(r, i) : o.length, o.splice(i, 0, ...n), {
    newItems: o,
    movedItemsStartIndex: i
  }
}

function p(e, t) {
  const i = new Set;
  return e.forEach((e => {
    t.has(e) && i.add(e)
  })), i
}

function m(e, t) {
  const i = new Set(e);
  return t.forEach((e => i.add(e))), i
}

function g(e, t) {
  const i = e.indexOf(t);
  (0, s.assert)(-1 !== i, "Item is not found"), e.splice(i, 1)
}

function f(e, t) {
  for (let i = 0; i < e.length; i++)
    if (t(e[i])) return i;
  return -1
}

function y(e, t) {
  if (e.length !== t.length) return !1;
  for (let i = 0; i < e.length; ++i)
    if (e[i].id() !== t[i].id()) return !1;
  return !0
}

function v(e) {
  return e.reduce(((e, t) => e + t), 0)
}

function* S(e) {
  for (const [t, i] of e) yield [t, i]
}

function* b(e, t) {
    for (const [i, s] of e)
      if (void 0 === t)
        for (const [, e] of s) yield [i, e];
      else {
        const e = s.get(t);
        void 0 !== e && (yield [i, e])
      }
