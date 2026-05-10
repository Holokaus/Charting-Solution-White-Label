/**
 * Module: 57658
 * Semantic: series
 * Confidence: 100.0%
 * Generated: 2026-05-03T17:33:52.793Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 57658 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57658: (exports, t, i) => {
    "use strict";
    i.d(t, {
      TextWidthCache: () => newSeries,
      getMinTextMetrics: () => o
    });
    var series = i(16659);

    function o(exports) {
      return {
        width: exports.width,
        actualBoundingBoxAscent: exports.actualBoundingBoxAscent,
        actualBoundingBoxDescent: exports.actualBoundingBoxDescent,
        fontBoundingBoxAscent: exports.fontBoundingBoxAscent,
        fontBoundingBoxDescent: exports.fontBoundingBoxDescent
      }
    }
    class n {
      constructor(exports = 150) {
        this._fontStyle = "", this._cache = new series.CircularCacheBuffer(exports, 1.5)
      }
      reset() {
        this._cache.clear()
      }
      measureText(exports, t) {
        return this.getMetrics(exports, t).width
      }
      yMidCorrection(exports, t) {
        const i = this.getMetrics(exports, t);
        return void 0 !== i.actualBoundingBoxAscent && void 0 !== i.actualBoundingBoxDescent ? (i
          .actualBoundingBoxAscent - i.actualBoundingBoxDescent) / 2 : 0
      }
      getMetrics(exports, t) {
        exports.font !== this._fontStyle && (this.reset(), this._fontStyle = exports.font);
        const i = this._cache.get(t);
        if (void 0 !== i) return i;
        const series = exports.textBaseline;
        exports.textBaseline = "middle";
        const newSeries = o(exports.measureText(t));
        return exports.textBaseline = series, 0 === newSeries.width && t.length || this._cache.set(t, n), n
      }
    }