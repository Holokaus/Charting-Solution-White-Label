/**
 * Module 76422 - Auto-beautified from TradingView webpack bundle
 *
 * @module 76422
 * @date 2026-04-23
 * @size 686 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 48096
 *
 * Exports:
 *   - emit (internal: u)
 *   - emitOnce (internal: _)
 *   - on (internal: c)
 *   - subscribe (internal: h)
 *   - subscribeToAll (internal: d)
 *   - unsubscribe (internal: a)
 *   - unsubscribeAll (internal: l)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.r(t), i.d(t, {
  emit: () => u,
  emitOnce: () => _,
  on: () => c,
  subscribe: () => h,
  subscribeToAll: () => d,
  unsubscribe: () => a,
  unsubscribeAll: () => l
});
var s = i(48096);
const o = {},
  n = [],
  r = {};

function a(e, t, i) {
  o[e].unsubscribe(i, t)
}

function l(e, t) {
  o[e].unsubscribeAll(t)
}

function c(e, t, i) {
  h(e, t, i)
}

function h(e, t, i, n) {
  o.hasOwnProperty(e) || (o[e] = new s.Delegate), r[e] ? t.call(i) : o[e].subscribe(i, t, n)
}

function d(e) {
  n.push(e)
}

function u(e, ...t) {
  const i = [e].concat(t);
  n.forEach((e => {
    e.apply(null, i)
  })), o.hasOwnProperty(e) && o[e].fire.apply(o[e], t)
}

function _(e) {
  r[e] && console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`), r[e] = !0, u.apply(null, arguments)
