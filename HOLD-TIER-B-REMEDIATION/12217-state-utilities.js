/**
 * ============================================================================
 * TRADINGVIEW MODULE 12217 - STATE UTILITIES
 * ============================================================================
 *
 * Purpose: State management utilities and collection operations
 *
 * Size: 1.2 KB
 *
 * Functions:
 *   - compareTwoCollectionsByIds: Compare collections by IDs
 *   - indexOf: Find index in collection
 *   - intersect: Find intersection of collections
 *   - join: Join collections
 *   - lowerbound: Find lower bound
 *   - lowerboundExt: Extended lower bound
 *   - lowerbound_int: Integer lower bound
 *   - mapEntriesGenerator: Generate map entries
 *   - moveAfter: Move item after another
 *   - moveBefore: Move item before another
 *   - moveToHead: Move item to head
 *   - nestedMapGenerator: Generate nested map
 *   - removeItemFromArray: Remove item from array
 *   - subtract: Subtract collections
 *   - sum: Sum collections
 *   - upperbound: Find upper bound
 *   - upperbound_int: Integer upper bound
 *
 * Features:
 *   - Collection comparison
 *   - Array manipulation
 *   - Map generation
 *   - Bound calculations
 *   - State operations
 *
 * Dependencies:
 *   - 16879: State utilities
 *
 * Exports:
 *   - compareTwoCollectionsByIds: Collection comparison function
 *   - indexOf: Index finding function
 *   - intersect: Intersection function
 *   - join: Join function
 *   - lowerbound: Lower bound function
 *   - lowerboundExt: Extended lower bound function
 *   - lowerbound_int: Integer lower bound function
 *   - mapEntriesGenerator: Map entries generator function
 *   - moveAfter: Move after function
 *   - moveBefore: Move before function
 *   - moveToHead: Move to head function
 *   - nestedMapGenerator: Nested map generator function
 *   - removeItemFromArray: Remove from array function
 *   - subtract: Subtract function
 *   - sum: Sum function
 *   - upperbound: Upper bound function
 *   - upperbound_int: Integer upper bound function
 *
 * @module 12217
 * @category Data Management
 * @subpackage State Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.data(moduleConfig, {
    compareTwoCollectionsByIds: () => state.compareTwoCollectionsByIds,
    indexOf: () => state.indexOf,
    intersect: () => state.intersect,
    join: () => state.join,
    lowerbound: () => state.lowerbound,
    lowerboundExt: () => state.lowerboundExt,
    lowerbound_int: () => state.lowerbound_int,
    mapEntriesGenerator: () => state.mapEntriesGenerator,
    moveAfter: () => state.moveAfter,
    moveBefore: () => state.moveBefore,
    moveToHead: () => state.moveToHead,
    nestedMapGenerator: () => state.nestedMapGenerator,
    removeItemFromArray: () => state.removeItemFromArray,
    subtract: () => state.subtract,
    sum: () => state.sum,
    upperbound: () => state.upperbound,
    upperbound_int: () => state.upperbound_int
  });

  const state = moduleRequire(16879);
}
