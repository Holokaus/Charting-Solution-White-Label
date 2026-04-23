/**
 * Module 22961 - Auto-beautified from TradingView webpack bundle
 *
 * @module 22961
 * @date 2026-04-23
 * @size 931 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 76662
 *
 * Exports:
 *   - doAnimate (internal: r)
 *   - lerp (internal: s)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";

function s(e, t, i) {
  return e * (1 - i) + t * i
}
i.d(t, {
  doAnimate: () => r,
  lerp: () => s
});
const o = {
  from: 0,
  duration: 250,
  easing: i(76662).easingFunc.easeOutCubic
};
class n {
  constructor(e) {
    this._doing = !0, this._completed = !1, this._options = {
      ...o,
      ...e
    };
    const t = performance.now();
    window.requestAnimationFrame((e => {
      this._animation(t, this._options.from, e)
    }))
  }
  stop() {
    this._doing = !1
  }
  completed() {
    return this._completed
  }
  _animation(e, t, i) {
    if (!this._doing) return void this._finishAnimation();
    const o = (i = !i || i < 1e12 ? performance.now() : i) - e,
      n = o >= this._options.duration || t === this._options.to,
      r = s(this._options.from, this._options.to, this._options.easing(o / this._options.duration)),
      a = n ? this._options.to : r,
      l = a - t;
    this._options.onStep(l, a), n ? this._finishAnimation() : window.requestAnimationFrame((t => {
      this._animation(e, a, t)
    }))
  }
  _finishAnimation() {
    this._options.onComplete && this._options.onComplete(), this._completed = !0
  }
}

function r(e) {
  return new n(e)
