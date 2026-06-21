/**
 * ============================================================================
 * TRADINGVIEW MODULE 76662 - BEZIER ANIMATION UTILITIES
 * ============================================================================
 *
 * Purpose: Cubic Bezier animation easing functions and duration utilities
 *
 * Size: 0.7 KB
 *
 * Functions:
 *   - CubicBezier: Cubic Bezier easing function
 *   - dur: Animation duration utilities
 *   - easingFunc: Easing function factory
 *
 * Used for:
 *   - Smooth chart animations
 *   - Drawing tool transitions
 *   - UI element animations
 *
 * Dependencies:
 *   - 74991: Animation state module
 *
 * Exports:
 *   - CubicBezier: Easing function
 *   - dur: Duration utilities
 *   - easingFunc: Easing function factory
 *
 * @module 76662
 * @category Animation
 * @subcategory Bezier Easing
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.data(moduleConfig, {
    CubicBezier: () => animationState.CubicBezier,
    dur: () => animationState.dur,
    easingFunc: () => animationState.easingFunc
  });

  const animationState = moduleRequire(74991);
}
