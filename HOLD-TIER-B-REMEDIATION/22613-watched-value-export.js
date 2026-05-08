/**
 * ============================================================================
 * TRADINGVIEW MODULE 22613 - WATCHED VALUE EXPORT
 * ============================================================================
 *
 * Purpose: Export WatchedValue class for reactive programming
 *
 * Size: 0.4 KB
 *
 * Exports:
 *   - WatchedValue: Reactive value wrapper class
 *
 * Dependencies:
 *   - 52499: WatchedValue implementation
 *
 * @module 22613
 * @category Reactive Programming
 * @subcategory WatchedValue
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    WatchedValue: () => WatchedValueModule.WatchedValue
  });

  const WatchedValueModule = moduleRequire(52499);
}
