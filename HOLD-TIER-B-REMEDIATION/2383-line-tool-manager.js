/**
 * ============================================================================
 * TRADINGVIEW MODULE 2383 - LINE TOOL MANAGER
 * ============================================================================
 *
 * Purpose: Line tool management and hit testing
 *
 * Size: 3.7 KB
 *
 * Enumerations:
 *   - AreaName: Area names for line tools
 *   - HitTarget: Hit target types
 *   - HitTestResult: Hit test result types
 *   - Action: Action types for line tools
 *
 * Classes:
 *   - HitTestResult: Hit test result implementation
 *
 * Features:
 *   - Line tool hit testing
 *   - Action execution management
 *   - Touch and mouse handling
 *   - Default action execution
 *
 * Dependencies:
 *   - 50279: Line tool utilities
 *   - 50151: Line tool utilities
 *
 * Exports:
 *   - AreaName: Area name enumeration
 *   - HitTarget: Hit target enumeration
 *   - HitTestResult: Hit test result class
 *   - hitTestResultDataAreEqual: Hit test result comparison function
 *   - shouldDefaultActionBeExecuted: Default action check function
 *   - tryCallHandler: Handler call function
 *
 * @module 2383
 * @category Line Tools
 * @subpackage Management
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    AreaName: () => AreaName,
    HitTarget: () => HitTarget,
    HitTestResult: () => HitTestResult,
    hitTestResultDataAreEqual: () => hitTestResultDataAreEqual,
    shouldDefaultActionBeExecuted: () => shouldDefaultActionBeExecuted,
    tryCallHandler: () => tryCallHandler
  });

  const lineToolUtils = moduleRequire(50279),
    lineToolUtils2 = moduleRequire(50151);

  /**
   * Area name enumeration
   */
  !function(AreaName) {
    AreaName.Style = "Style";
    AreaName.Text = "Text";
    AreaName.Line = "Line";
    AreaName.Tooltip = "Tooltip";
    AreaName.Button = "Button";
    AreaName.SourceItemMove = "SourceItemMove";
    AreaName.AnchorPoint = "AnchorPoint";
  }(AreaName || (AreaName = {}));

  /**
   * Hit target enumeration
   */
  !function(HitTarget) {
    HitTarget[HitTarget.Both = 0] = "Both";
    HitTarget[HitTarget.Horz = 1] = "Horz";
    HitTarget[HitTarget.Vert = 2] = "Vert";
  }(HitTarget || (HitTarget = {}));

  /**
   * Action enumeration
   */
  !function(Action) {
    Action[Action.MovePointBackground = 1] = "MovePointBackground";
    Action[Action.Regular = 2] = "Regular";
    Action[Action.MovePoint = 3] = "MovePoint";
    Action[Action.ChangePoint = 4] = "ChangePoint";
    Action[Action.Custom = 5] = "Custom";
  }(Action || (Action = {}));

  /**
   * Check if touch event should execute action
   * @param {Object} event - Touch event
   * @param {Object} action - Action object
   * @param {Object} hitTarget - Hit target
   * @returns {boolean} True if action should be executed
   */
  function shouldExecuteTouchAction(event, action, hitTarget) {
    if (event.isTouch) {
      if (void 0 !== hitTarget) {
        return hitTarget(event, action);
      }
    } else if (void 0 !== action) {
      return action(event, action);
    }
    return false;
  }

  /**
   * Check if default action should be executed
   * @param {Object} event - Event object
   * @param {Object} action - Action object
   * @param {Object} hitTarget - Hit target
   * @returns {boolean} True if default action should be executed
   */
  function shouldDefaultActionBeExecuted(event, action, hitTarget) {
    return void 0 !== action.executeDefaultAction && 
           (event.isTouch ? Boolean(action.executeDefaultAction[hitTarget]) : Boolean(action.executeDefaultAction[action]));
  }

  /**
   * Compare hit test result data
   * @param {Object} result1 - First result
   * @param {Object} result2 - Second result
   * @returns {boolean} True if results are equal
   */
  function hitTestResultDataAreEqual(result1, result2) {
    return result1 && result2 && result1.equals && result2.equals ? 
           result1.equals(result2) : 
           (0, lineToolUtils2.default)(result1, result2);
  }

  /**
   * Try to call handler function
   * @param {Function} handler - Handler function
   * @param {Array} args - Arguments array
   * @returns {*} Handler result or null
   */
  function tryCallHandler(handler, args) {
    try {
      return handler(...args);
    } catch (error) {
      console.error('Error in line tool handler:', error);
      return null;
    }
  }

  /**
   * Hit test result implementation
   */
  class HitTestResult {
    /**
     * @param {Object} target - Target object
     * @param {Object} data - Data object
     * @param {Object} eraseMarker - Erase marker
     */
    constructor(target, data, eraseMarker) {
      this._target = target;
      this._data = data || null;
      this._eraseMarker = eraseMarker;
    }

    /**
     * Get target object
     * @returns {Object} Target object
     */
    target() {
      return this._target;
    }

    /**
     * Get data object
     * @returns {Object} Data object
     */
    data() {
      return this._data;
    }

    /**
     * Get erase marker
     * @returns {Object} Erase marker
     */
    eraseMarker() {
      return this._eraseMarker;
    }
  }
}
