/**
 * Module 97719 - Intervals Visibilities Property
 * 
 * Property class for managing interval visibility settings across timeframes.
 * Controls which chart intervals are visible/hidden in the UI.
 * 
 * @module IntervalsVisibilitiesProperty
 * @see Property base class (43337)
 * @see Property dependencies (81922)
 */

import { Property } from './43337-property.js';
import './81922-property-dependencies.js';

/**
 * Property class for interval visibility management
 * @class IntervalsVisibilitiesProperty
 * @extends Property
 */
export class IntervalsVisibilitiesProperty extends Property {
  /**
   * Get current state of property
   * @param {*} defaultValue - Default value if undefined
   * @param {*} mergeValue - Value to merge
   * @returns {*} Current property state
   */
  state(defaultValue, mergeValue) {
    return super.state(defaultValue, mergeValue);
  }
  
  /**
   * Always store state, even if undefined
   * @returns {boolean} Always returns false
   */
  storeStateIfUndefined() {
    return false;
  }
}

export default IntervalsVisibilitiesProperty;

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - e → defaultValue (first parameter)
// - t → mergeValue (second parameter)
// - i → unused
// - s → PropertyClass (Property class)
// - o → IntervalsVisibilitiesProperty (exported class)
// ============================================================================