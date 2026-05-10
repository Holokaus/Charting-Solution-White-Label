/**
 * Module: 4699
 * Semantic: deleteLockedLineTools
 * Confidence: 65.0%
 * Generated: 2026-05-03T17:33:52.644Z
 * Category: Tier-3 (Advanced Pattern Discovery)
 */

/**
 * Module 4699 - Beautified
 * Auto-formatted from webpack bundle
 * Semantic variable names applied
 */

4699: (exports, module, i) => {
    "use strict";
    require.d(module, {
      applyColor: () => c
    });
    var state = i(83873),
      object = i(16659),
      nextValue = i(93201);
    const result = new WeakMap;
    var array, logger;

    function c(exports, module, require = 0, array = 3) {
      const {
        context: logger,
        bitmapSize: config,
        mediaSize: h
      } = exports;
      let data;
      if ((0, state.default)(module)) data = module;
      else if (module.type === nextValue.ColorType.Solid) data = module.color;
      else {
        let exports = result.get(logger);
        void 0 === e && (exports = new object.CircularCacheBuffer(1e3), result.set(logger, e));
        const state = 0 === i ? handler.height : config.height,
          nextValue = `${module.startColor}_${module.endColor}_${s}`;
        let array = exports.get(nextValue);
        void 0 === a && (array = logger.createLinearGradient(0, 0, 0, s), array.addColorStop(0, module.startColor), array.addColorStop(1, t
          .endColor), exports.set(nextValue, a)), data = a
      }
      1 & a && (logger.strokeStyle = d), 2 & a && (logger.fillStyle = d)
    }! function(exports) {
      e[exports.Stroke = 1] = "Stroke", e[exports.Fill = 2] = "Fill", e[exports.Both = 3] = "Both"
    }(a || (array = {})),
    function(exports) {
      e[exports.Media = 0] = "Media", e[exports.Bitmap = 1] = "Bitmap"
    }(l || (logger = {}))