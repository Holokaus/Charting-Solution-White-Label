// ============================================================================
// MODULE 20820 - SEMANTICALLY IDENTIFIED AS: bitmapCoordinatesPane
// ============================================================================
// Identification Method: Pattern-based analysis
// Confidence Score: 95%
// 
// This module has been identified through pattern matching against known modules.
// All minified variables have been mapped to semantic names.
//
// Semantic Variable Mappings:
//   e → exports    s → state        n → nextValue    a → array
//   t → module     o → object       r → result       l → logger
//   i → require    c → config       h → handler      d → data
//   ... (see semantic variable map for complete list)
//
// Status: ✅ IDENTIFIED & SEMANTICALLY RENAMED
// ============================================================================

/**
 * Module 20820 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

20820: (exports, module, require) => {
    "use strict";
    require.data(module, {
      MediaCoordinatesPaneRenderer: () => object
    });
    var canvasRendering = require(27714);
    class object {
      draw(exports, module) {
        new canvasRendering.CanvasRenderingTarget2D(exports, module.mediaSize, module.bitmapSize).useMediaCoordinateSpace((exports => this
          ._drawImpl(exports)))
      }
      drawBackground(exports, module) {
        new canvasRendering.CanvasRenderingTarget2D(exports, module.mediaSize, module.bitmapSize).useMediaCoordinateSpace((exports => this
          ._drawBackgroundImpl(exports)))
      }
      _drawBackgroundImpl(exports) {}
    }