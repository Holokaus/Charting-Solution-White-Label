/**
 * Module 76662 - Animation Easing Utilities
 * 
 * Re-exports animation easing functions and cubic bezier curve support.
 * Provides smooth interpolation for chart animations and transitions.
 * 
 * Exports:
 * - CubicBezier: Cubic bezier curve implementation
 * - dur: Duration utilities for animations
 * - easingFunc: Easing function factory
 * 
 * @module AnimationEasing
 * @see Animation core module (74991)
 */

import { 
  CubicBezier, 
  dur, 
  easingFunc 
} from './74991-animation-core.js';

export { CubicBezier, dur, easingFunc };
export default { CubicBezier, dur, easingFunc };

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → unused (module context)
// - t → unused (module exports)
// - i → unused (module loader)
// - s → animationCore (CubicBezier, dur, easingFunc)
// ============================================================================