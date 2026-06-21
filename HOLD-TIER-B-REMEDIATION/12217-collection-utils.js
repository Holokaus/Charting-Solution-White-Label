/**
 * ============================================================================
 * TRADINGVIEW MODULE 12217 - COLLECTION UTILITIES
 * ============================================================================
 *
 * Purpose: Utility functions for array and collection operations
 *
 * Size: 1.3 KB
 *
 * Functions:
 *   - compareTwoCollectionsByIds: Compare collections by ID
 *   - indexOf: Find index of item in collection
 *   - intersect: Get intersection of two collections
 *   - join: Join two collections
 *   - lowerbound: Find lower bound in sorted collection
 *   - lowerboundExt: Extended lower bound with custom comparator
 *   - lowerbound_int: Integer lower bound
 *   - mapEntriesGenerator: Generate map entries
 *   - moveAfter: Move item after another item
 *   - moveBefore: Move item before another item
 *   - moveToHead: Move item to beginning of collection
 *   - nestedMapGenerator: Generate nested map structure
 *   - removeItemFromArray: Remove item from array
 *   - subtract: Subtract one collection from another
 *   - sum: Sum numeric values in collection
 *   - upperbound: Find upper bound in sorted collection
 *   - upperbound_int: Integer upper bound
 *
 * Dependencies:
 *   - 16879: Collection state management
 *
 * @module 12217
 * @category Data Structures
 * @subpackage Collection Utilities
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.data(moduleConfig, {
    compareTwoCollectionsByIds: () => collectionState.compareTwoCollectionsByIds,
    indexOf: () => collectionState.indexOf,
    intersect: () => collectionState.intersect,
    join: () => collectionState.join,
    lowerbound: () => collectionState.lowerbound,
    lowerboundExt: () => collectionState.lowerboundExt,
    lowerbound_int: () => collectionState.lowerbound_int,
    mapEntriesGenerator: () => collectionState.mapEntriesGenerator,
    moveAfter: () => collectionState.moveAfter,
    moveBefore: () => collectionState.moveBefore,
    moveToHead: () => collectionState.moveToHead,
    nestedMapGenerator: () => collectionState.nestedMapGenerator,
    removeItemFromArray: () => collectionState.removeItemFromArray,
    subtract: () => collectionState.subtract,
    sum: () => collectionState.sum,
    upperbound: () => collectionState.upperbound,
    upperbound_int: () => collectionState.upperbound_int
  });

  const collectionState = moduleRequire(16879);
}
