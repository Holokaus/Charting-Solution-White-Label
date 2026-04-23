/**
 * Module 20820 - Auto-beautified from TradingView webpack bundle
 *
 * @module 20820
 * @date 2026-04-23
 * @size 373 bytes
 *
 * Status: Beautified (variable renaming pending)
 *
 * Dependencies: 27714
 *
 * Exports:
 *   - MediaCoordinatesPaneRenderer (internal: o)
 *
 * Next Steps:
 *   1. Rename single-letter variables to semantic names
 *   2. Add JSDoc comments for classes/functions
 *   3. Map dependency relationships
 */

"use strict";
i.d(t, {
  MediaCoordinatesPaneRenderer: () => o
});
var s = i(27714);
class o {
  draw(e, t) {
    new s.CanvasRenderingTarget2D(e, t.mediaSize, t.bitmapSize).useMediaCoordinateSpace((e => this._drawImpl(e)))
  }
  drawBackground(e, t) {
    new s.CanvasRenderingTarget2D(e, t.mediaSize, t.bitmapSize).useMediaCoordinateSpace((e => this._drawBackgroundImpl(e)))
  }
  _drawBackgroundImpl(e) {}
