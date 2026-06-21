/**
 * Module 55393 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

55393: (watchedValue_e, watchedValue_t, watchedValue_i) => {
    "use strict";
    watchedValue_i.watchedValue_d(watchedValue_t, {
      LineToolBrushBase: () => watchedValue_r
    });
    var watchedValue_s = watchedValue_i(50151),
      watchedValue_o = watchedValue_i(41414),
      watchedValue_n = watchedValue_i(22613);
    class watchedValue_r extends watchedValue_o.LineDataSource {
      constructor() {
        super(...arguments), this._hasEditableCoordinates = new watchedValue_n.WatchedValue(!1), this._finished = !1
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
      addPoint(watchedValue_e, watchedValue_t, watchedValue_i) {
        if (this._finished) return !0;
        if (this._lastPoint = null, this._points.length > 0) {
          const watchedValue_t = this._points[this._points.length - 1],
            watchedValue_i = (0, watchedValue_s.ensureNotNull)(this.pointToScreenPoint(watchedValue_t));
          if ((0,
              watchedValue_s.ensureNotNull)(this.pointToScreenPoint(watchedValue_e)).subtract(watchedValue_i).length() < 2) return this._finished
        }
        return super.addPoint(watchedValue_e), this._finished
      }
      restorePoints(watchedValue_e, watchedValue_t, watchedValue_i) {
        super.restorePoints(watchedValue_e, watchedValue_t, watchedValue_i), this._finished = !0
      }
    }