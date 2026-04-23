/**
 * Module 48943 - Auto-beautified from TradingView webpack bundle
 *
 * @module 48943
 * @date 2026-04-23
 * @size 1036 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 22613
 *
 * Exports:
 *   - accumulate (internal: a)
 *   - combine (internal: r)
 *   - combineWithFilteredUpdate (internal: n)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  accumulate: () => a,
  combine: () => r,
  combineWithFilteredUpdate: () => n
});
var s = i(22613);

function o(e, t, ...i) {
  let o = null;
  const n = (...t) => e(...t.map((e => e.value())), o?.value()),
    r = o = new s.WatchedValue(n(...i)),
    a = () => {
      const e = i.map(((e, t) => e.value()));
      t(...e) && r.setValue(n(...i))
    },
    l = i.map((e => e.spawn()));
  for (const e of l) e.subscribe(a);
  return r.readonly().spawn((() => {
    l.forEach((e => e.destroy())), i.forEach((e => e.release()))
  }))
}

function n(e, t, ...i) {
  return o(e, t, ...i)
}

function r(e, ...t) {
  return o(e, (() => !0), ...t)
}

function a(e, t, ...i) {
  let o = null;
  const n = r(((...e) => (e.splice(-1), e)), ...i),
    a = t.spawn(),
    l = (t, ...i) => {
      const s = t.map((e => e.value()));
      return e(s, ...i, o?.value())
    },
    c = o = new s.WatchedValue(l(a.value(), ...n.value()));
  let h = [];
  const d = () => {
      c.setValue(l(h, ...n.value()))
    },
    u = e => {
      h.forEach((e => e.destroy())), h = e.map((e => e.spawn())), h.forEach((e => e.subscribe(d))), d()
    };
  u(a.value()), a.subscribe(u), n.subscribe(d);
  return c.readonly().spawn((() => {
    h.forEach((e => e.destroy())), a.destroy(), n.destroy(), t.release()
  }))
