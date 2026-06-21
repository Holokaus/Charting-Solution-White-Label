/**
 * Module 55393 - Semantic Remediation
 * @description Converted from mechanical prefixing to semantic variable names
 * @dependencies None identified
 */

55393: (exports, module, require) => {
    "use strict";
    require.watchedValue_d(module, {
      LineToolBrushBase: () => config
    });
    var constants = require(50151),
      result = require(41414),
      name = require(22613);
    class config extends result.LineDataSource {
      constructor() {
        super(...arguments), this._hasEditableCoordinates = new name.WatchedValue(!1), this._finished = !1
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
      addPoint(exports, module, require) {
        if (this._finished) return !0;
        if (this._lastPoint = null, this._points.length > 0) {
          const module = this._points[this._points.length - 1],
            require = (0, constants.ensureNotNull)(this.pointToScreenPoint(module));
          if ((0,
              constants.ensureNotNull)(this.pointToScreenPoint(exports)).subtract(require).length() < 2) return this._finished
        }
        return super.addPoint(exports), this._finished
      }
      restorePoints(exports, module, require) {
        super.restorePoints(exports, module, require), this._finished = !0
      }
    }