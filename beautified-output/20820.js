/**
 * Module 20820 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

20820: (e, t, i) => {
    "use strict";
    i.d(t, {
      MediaCoordinatesPaneRenderer: () => o
    });
    var canvasRendering = i(27714);
    class o {
      draw(e, t) {
        new canvasRendering.CanvasRenderingTarget2D(e, t.mediaSize, t.bitmapSize).useMediaCoordinateSpace((e => this
          ._drawImpl(e)))
      }
      drawBackground(e, t) {
        new canvasRendering.CanvasRenderingTarget2D(e, t.mediaSize, t.bitmapSize).useMediaCoordinateSpace((e => this
          ._drawBackgroundImpl(e)))
      }
      _drawBackgroundImpl(e) {}
    }