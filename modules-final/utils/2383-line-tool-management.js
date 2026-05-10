/**
 * ============================================================================
 * TRADINGVIEW MODULE 2383 - LINE TOOL MANAGEMENT
 * ============================================================================
 *
 * Purpose: Line tool management utilities and enumerations
 *
 * Size: 4.6 KB
 *
 * Enumerations:
 *   - AreaName: Area name enumeration
 *   - HitTarget: Hit target enumeration
 *   - Action: Action enumeration
 *
 * Classes:
 *   - HitTestResult: Hit test result implementation
 *   - LineToolManager: Line tool manager base class
 *
 * Features:
 *   - Line tool area management
 *   - Hit testing functionality
 *   - Action execution handling
 *   - Default action management
 *   - Touch and mouse event handling
 *   - Tool state management
 *
 * Dependencies:
 *   - 50279: Line tool utilities
 *   - 50151: Line tool utilities
 *   - 52499: Line tool utilities
 *
 * Exports:
 *   - AreaName: Area name enumeration
 *   - HitTarget: Hit target enumeration
 *   - HitTestResult: Hit test result class
 *   - shouldDefaultActionBeExecuted: Default action check function
 *   - tryCallHandler: Call handler function
 *
 * @module 2383
 * @category Line Tools
 * @subpackage Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.lineToolManager_d(moduleConfig, {
    AreaName: () => AreaName,
    HitTarget: () => HitTarget,
    HitTestResult: () => HitTestResult,
    shouldDefaultActionBeExecuted: () => shouldDefaultActionBeExecuted,
    tryCallHandler: () => tryCallHandler
  });

  const LineToolUtils = moduleRequire(50279),
    LineToolUtils2 = moduleRequire(50151),
    LineToolUtils3 = moduleRequire(52499);

  /**
   * Initialize enumerations
   */
  function initializeEnumerations() {
    const areaNames = {};
    areaNames[AreaName.Both] = "Both";
    areaNames[AreaName.Horz] = "Horz";
    areaNames[AreaName.Vert] = "Vert";

    const hitTargets = {};
    hitTargets[HitTarget.MovePointBackground] = "MovePointBackground";
    hitTargets[HitTarget.Regular] = "Regular";
    hitTargets[HitTarget.MovePoint] = "MovePoint";
    hitTargets[HitTarget.ChangePoint] = "ChangePoint";
    hitTargets[HitTarget.Custom] = "Custom";

    return { areaNames, hitTargets };
  }

  /**
   * Initialize action enumerations
   */
  function initializeActionEnumerations() {
    const actions = {};
    actions[Action.SourceItemMove] = "SourceItemMove";
    actions[Action.AnchorPoint] = "AnchorPoint";

    return actions;
  }

  let areaNames, hitTargets, actions;

  /**
   * Area name enumeration
   */
  const AreaName = {
    Both: 0,
    Horz: 1,
    Vert: 2
  };

  /**
   * Hit target enumeration
   */
  const HitTarget = {
    MovePointBackground: 1,
    Regular: 2,
    MovePoint: 3,
    ChangePoint: 4,
    Custom: 5
  };

  /**
   * Action enumeration
   */
  const Action = {
    SourceItemMove: "SourceItemMove",
    AnchorPoint: "AnchorPoint"
  };

  /**
   * Check if default action should be executed
   * @param {Object} tool - Line tool
   * @param {Object} action - Action to check
   * @returns {boolean} True if default action should be executed
   */
  function shouldDefaultActionBeExecuted(tool, action) {
    return tool.executeDefaultAction && 
           (tool.isTouch ? Boolean(tool.executeDefaultAction[action.areaName]) : 
            Boolean(tool.executeDefaultAction[action.actionName]));
  }

  /**
   * Try to call handler function
   * @param {Function} handler - Handler function
   * @param {...*} args - Arguments to pass
   * @returns {*} Handler result
   */
  function tryCallHandler(handler, ...args) {
    try {
      return handler(...args);
    } catch (error) {
      console.error("Error in line tool handler:", error);
      return null;
    }
  }

  /**
   * Check if hit test result data are equal
   * @param {Object} result1 - First result
   * @param {Object} result2 - Second result
   * @returns {boolean} True if equal
   */
  function hitTestResultDataAreEqual(result1, result2) {
    return result1 && result2 && 
           result1.equals && 
           result2.equals && 
           result1.equals(result2);
  }

  /**
   * Hit test result class
   */
  class HitTestResult {
    constructor(target, data) {
      this.target = target;
      this.data = data;
    }

    /**
     * Check if equal to another result
     * @param {HitTestResult} other - Other result
     * @returns {boolean} True if equal
     */
    equals(other) {
      return other && 
             this.target === other.target && 
             this.data === other.data;
    }
  }

  /**
   * Line tool manager base class
   */
  class LineToolManager {
    constructor(target, data = null, eraseMarker = null) {
      this._target = target;
      this._data = data;
      this._eraseMarker = eraseMarker;
    }

    /**
     * Get target
     * @returns {Object} Current target
     */
    target() {
      return this._target;
    }

    /**
     * Get data
     * @returns {Object} Current data
     */
    getData() {
      return this._data;
    }

    /**
     * Set data
     * @param {Object} data - New data
     */
    setData(data) {
      this._data = data;
    }
  }

  // Initialize enumerations
  const enums = initializeEnumerations();
  areaNames = enums.areaNames;
  hitTargets = enums.hitTargets;
  actions = initializeActionEnumerations();

  // Export enumerations and functions
  moduleExports.AreaName = AreaName;
  moduleExports.HitTarget = HitTarget;
  moduleExports.HitTestResult = HitTestResult;
  moduleExports.shouldDefaultActionBeExecuted = shouldDefaultActionBeExecuted;
  moduleExports.tryCallHandler = tryCallHandler;
}
