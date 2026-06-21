/**
 * Module 3186 - Graphics List Collection
 * 
 * This module provides a collection class for managing graphics primitives
 * in the TradingView charting library. It handles both stable (persistent)
 * and variable (dynamic) graphics elements.
 * 
 * @module 3186
 * @category Graphics/Core
 */

/**
 * GraphicsListColl - Collection for managing graphics primitives
 * 
 * This class maintains two types of graphics:
 * - Stable graphics: Persistent elements that remain consistent
 * - Variable graphics: Dynamic elements that can change frequently
 * 
 * The collection supports operations like adding primitives, marking items,
 * deleting erased items, and checking validity states.
 * 
 * @class GraphicsListColl
 * @public
 * 
 * @example
 * // Create a new graphics collection
 * const coll = new GraphicsListColl();
 * 
 * // Add stable graphics
 * coll.addStable(graphicElement);
 * 
 * // Set variable graphics
 * coll.setVariable(dynamicGraphic);
 * 
 * // Get primitives data
 * const data = coll.primitivesData(context);
 */
export class GraphicsListColl {
  /**
   * Creates a new GraphicsListColl instance
   * 
   * @constructor
   * @property {Array} _stable - Array of stable graphics elements
   * @property {Object|null} _variable - Variable graphics element (nullable)
   * @property {Object|null} _owner - Owner reference for the collection
   */
  constructor() {
    /** @private @type {Array} */
    this._stable = [];
    
    /** @private @type {Object|null} */
    this._variable = null;
    
    /** @private @type {Object|null} */
    this._owner = null;
  }

  /**
   * Adds a stable graphics element to the collection
   * 
   * @param {Object} graphic - The stable graphics element to add
   * @throws {Error} If graphic doesn't have setOwner method
   */
  addStable(graphic) {
    graphic.setOwner(this);
    this._stable.push(graphic);
  }

  /**
   * Sets the variable graphics element
   * Replaces any existing variable element
   * 
   * @param {Object|null} graphic - The variable graphics element or null
   */
  setVariable(graphic) {
    this._variable = graphic;
    if (this._variable !== null) {
      this._variable.setOwner(this);
    }
  }

  /**
   * Collects primitives data from all graphics in the collection
   * 
   * @param {Object} context - Rendering context for primitive data extraction
   * @returns {Array} Array of primitives data from all graphics
   */
  primitivesData(context) {
    const result = [];
    this._forEach((graphic) => {
      result.push(...graphic.primitivesData(context));
    });
    return result;
  }

  /**
   * Deletes erased items from all graphics in the collection
   */
  deleteErasedItems() {
    this._forEach((graphic) => {
      graphic.deleteErasedItems();
    });
  }

  /**
   * Marks posted items in all graphics in the collection
   */
  markPostedItems() {
    this._forEach((graphic) => {
      graphic.markPostedItems();
    });
  }

  /**
   * Checks if all graphics in the collection are NaN (invalid)
   * 
   * @returns {boolean} True if all graphics are NaN, false otherwise
   */
  isNaN() {
    return this._all((graphic) => graphic.isNaN());
  }

  /**
   * Marks the owner as dirty (needs update)
   */
  dirty() {
    if (this._owner !== null) {
      this._owner.dirty();
    }
  }

  /**
   * Sets the owner of this collection
   * 
   * @param {Object} owner - The owner object
   * @private
   */
  setOwner(owner) {
    this._owner = owner;
  }

  /**
   * Iterates over all graphics (stable and variable)
   * 
   * @param {Function} callback - Function to call for each graphic
   * @private
   */
  _forEach(callback) {
    for (const graphic of this._stable) {
      callback(graphic);
    }
    if (this._variable !== null) {
      callback(this._variable);
    }
  }

  /**
   * Tests a condition against all graphics
   * Returns true only if condition is true for ALL graphics
   * 
   * @param {Function} predicate - Predicate function to test
   * @returns {boolean} True if predicate returns true for all graphics
   * @private
   */
  _all(predicate) {
    for (const graphic of this._stable) {
      if (!predicate(graphic)) {
        return false;
      }
    }
    return this._variable === null || predicate(this._variable);
  }
}

/**
 * Default export of GraphicsListColl class
 */
export default GraphicsListColl;
