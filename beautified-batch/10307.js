/**
 * Module 10307 - Auto-beautified from TradingView webpack bundle
 *
 * @module 10307
 * @date 2026-04-23
 * @size 376 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 27714
 *
 * Exports:
 *   - BitmapCoordinatesPaneRenderer (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  BitmapCoordinatesPaneRenderer: () => o
});
var s = i(27714);
class o {
  draw(e, t) {
    new s.CanvasRenderingTarget2D(e, t.mediaSize, t.bitmapSize).useBitmapCoordinateSpace((e => this._drawImpl(e)))
  }
  drawBackground(e, t) {
    new s.CanvasRenderingTarget2D(e, t.mediaSize, t.bitmapSize).useBitmapCoordinateSpace((e => this._drawBackgroundImpl(e)))
  }
  _drawBackgroundImpl(e) {}
