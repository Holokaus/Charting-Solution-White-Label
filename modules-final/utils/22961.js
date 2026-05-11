/**
 * Module: 22961
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.383Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 22961 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

22961: (exports, t, i) => {
    "use strict";

    function s(exports, t, i) {
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
      constructor(exports) {
        this._doing = !0, this._completed = !1, this._options = {
          ...o,
          ...e
        };
        const t = performance.now();
        window.requestAnimationFrame((exports => {
          this._animation(t, this._options.from, e)
        }))
      }
      stop() {
        this._doing = !1
      }
      completed() {
        return this._completed
      }
      _animation(exports, t, i) {
        if (!this._doing) return void this._finishAnimation();
        const o = (i = !i || i < 1e12 ? performance.now() : i) - exports,
          newSeries = o >= this._options.duration || t === this._options.to,
          r = s(this._options.from, this._options.to, this._options.easing(o / this._options.duration)),
          a = n ? this._options.to : r,
          l = a - t;
        this._options.onStep(l, a), n ? this._finishAnimation() : window.requestAnimationFrame((t => {
          this._animation(exports, a, t)
        }))
      }
      _finishAnimation() {
        this._options.onComplete && this._options.onComplete(), this._completed = !0
      }
    }

    function r(exports) {
      return new n(exports)
    }
}
