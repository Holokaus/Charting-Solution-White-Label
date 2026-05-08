/**
 * ============================================================================
 * TRADINGVIEW MODULE 52499 - WATCHED OBJECTS EXPORT
 * ============================================================================
 *
 * Purpose: Export WatchedObject and WatchedValue classes for reactive programming
 *
 * Size: 0.5 KB
 *
 * Exports:
 *   - WatchedObject: Reactive object wrapper class
 *   - WatchedValue: Reactive value wrapper class
 *
 * Dependencies:
 *   - 2072: WatchedObject implementation
 *   - 59998: WatchedValue implementation
 *
 * @module 52499
 * @category Reactive Programming
 * @subcategory Watched Objects
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    WatchedObject: () => WatchedObjectModule.WatchedObject,
    WatchedValue: () => WatchedValueModule.WatchedValue
  });

  const WatchedObjectModule = moduleRequire(2072),
    WatchedValueModule = moduleRequire(59998);
}
