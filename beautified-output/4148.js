/**
 * Module 4148 - Object Utilities Export
 * 
 * Re-exports commonly used object utility functions:
 * - clone: Deep clone objects
 * - isNumber: Type check for numbers
 * - isObject: Type check for objects
 * 
 * @module ObjectUtilities
 * @see Core utilities module (87465)
 */

import { clone, isNumber, isObject } from './87465-core-utilities.js';

export { clone, isNumber, isObject };
export default { clone, isNumber, isObject };

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → moduleExports (unused)
// - t → moduleRequirements (unused)
// - i → moduleLoader (unused)
// - s → objectUtilities (clone, isNumber, isObject)
// ============================================================================