/**
 * Module: 55393
 * Semantic: watchedValue
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.773Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 55393 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

55393: (exports, t, i) => {
    "use strict";
    i.d(t, {
      LineToolBrushBase: () => r
    });
    var state = i(50151),
      o = i(41414),
      nextValue = i(22613);
    class r extends o.LineDataSource {
      constructor() {
        super(...arguments), this._hasEditableCoordinates = new nextValue.WatchedValue(!1), this._finished = !1
      }
      pointsCount() {
        return -1
      }
      finished() {
        return this._finished
      }
      finish() {
        this._finished = !0, this._lastPoint = null, this._normalizePoints(), this.createServerPoints()
      }
      hasOnlyOnePoint() {
        return 1 === this._points.length
      }
      addPoint(exports, t, i) {
        if (this._finished) return !0;
        if (this._lastPoint = null, this._points.length > 0) {
          const t = this._points[this._points.length - 1],
            i = (0, state.ensureNotNull)(this.pointToScreenPoint(t));
          if ((0,
              state.ensureNotNull)(this.pointToScreenPoint(exports)).subtract(i).length() < 2) return this._finished
        }
        return super.addPoint(exports), this._finished
      }
      restorePoints(exports, t, i) {
        super.restorePoints(exports, t, i), this._finished = !0
      }
    }