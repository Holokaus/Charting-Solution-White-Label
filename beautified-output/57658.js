/**
 * Module 57658 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

57658: (e, t, i) => {
    "use strict";
    i.d(t, {
      TextWidthCache: () => n,
      getMinTextMetrics: () => o
    });
    var s = i(16659);

    function o(e) {
      return {
        width: e.width,
        actualBoundingBoxAscent: e.actualBoundingBoxAscent,
        actualBoundingBoxDescent: e.actualBoundingBoxDescent,
        fontBoundingBoxAscent: e.fontBoundingBoxAscent,
        fontBoundingBoxDescent: e.fontBoundingBoxDescent
      }
    }
    class n {
      constructor(e = 150) {
        this._fontStyle = "", this._cache = new s.CircularCacheBuffer(e, 1.5)
      }
      reset() {
        this._cache.clear()
      }
      measureText(e, t) {
        return this.getMetrics(e, t).width
      }
      yMidCorrection(e, t) {
        const i = this.getMetrics(e, t);
        return void 0 !== i.actualBoundingBoxAscent && void 0 !== i.actualBoundingBoxDescent ? (i
          .actualBoundingBoxAscent - i.actualBoundingBoxDescent) / 2 : 0
      }
      getMetrics(e, t) {
        e.font !== this._fontStyle && (this.reset(), this._fontStyle = e.font);
        const i = this._cache.get(t);
        if (void 0 !== i) return i;
        const s = e.textBaseline;
        e.textBaseline = "middle";
        const n = o(e.measureText(t));
        return e.textBaseline = s, 0 === n.width && t.length || this._cache.set(t, n), n
      }
    }