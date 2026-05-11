/**
 * Module 2383 - Hit Test Result System
 * Core infrastructure for hit testing in TradingView charts
 * Handles mouse/touch events, hit test results, and action dispatching
 */

// Import dependencies
var isEqual = i(50279);
var ensureNotNull = i(50151);

/**
 * Area names for different UI regions
 */
var AreaName;
(function(AreaName) {
    AreaName.Style = "Style";
    AreaName.Text = "Text";
    AreaName.Line = "Line";
    AreaName.Tooltip = "Tooltip";
    AreaName.Button = "Button";
    AreaName.SourceItemMove = "SourceItemMove";
    AreaName.AnchorPoint = "AnchorPoint";
})(AreaName || (AreaName = {}));

/**
 * Mouse wheel behavior modes
 */
var MouseWheelMode;
(function(MouseWheelMode) {
    MouseWheelMode[MouseWheelMode.Both = 0] = "Both";
    MouseWheelMode[MouseWheelMode.Horz = 1] = "Horz";
    MouseWheelMode[MouseWheelMode.Vert = 2] = "Vert";
})(MouseWheelMode || (MouseWheelMode = {}));

/**
 * Hit target types - determines what was clicked
 */
var HitTarget;
(function(HitTarget) {
    HitTarget[HitTarget.MovePointBackground = 1] = "MovePointBackground";
    HitTarget[HitTarget.Regular = 2] = "Regular";
    HitTarget[HitTarget.MovePoint = 3] = "MovePoint";
    HitTarget[HitTarget.ChangePoint = 4] = "ChangePoint";
    HitTarget[HitTarget.Custom = 5] = "Custom";
})(HitTarget || (HitTarget = {}));

/**
 * HitTestResult - Represents the result of a hit test operation
 * Contains information about what UI element was clicked and associated handlers
 */
class HitTestResult {
    constructor(target, data = null, eraseMarker = undefined) {
        this._target = target;      // HitTarget enum value
        this._data = data;          // Event handler data
        this._eraseMarker = eraseMarker;
    }

    /** Get the hit target type */
    target() {
        return this._target;
    }

    /** Get the event handler data */
    data() {
        return this._data;
    }

    /** Merge additional data into existing handler data */
    mergeData(newData) {
        this._data = {
            ...ensureNotNull(this._data),
            ...newData
        };
    }

    /** Check if there's a pressed mouse move handler */
    hasPressedMoveHandler(event) {
        if (this._data === null) return false;
        
        if (event.isTouch) {
            return this._data.touchMoveHandler !== undefined;
        } else {
            return this._data.pressedMouseMoveHandler !== undefined;
        }
    }

    /** Try to call mouse down or touch start handler */
    tryCallMouseDownOrTouchStartHandler(event, point) {
        if (this._data === null) return false;
        
        if (event.isTouch) {
            if (this._data.touchStartHandler !== undefined) {
                this._data.touchStartHandler(event, point);
                return true;
            }
        } else {
            if (this._data.mouseDownHandler !== undefined) {
                this._data.mouseDownHandler(event, point);
                return true;
            }
        }
        return false;
    }

    /** Try to call mouse up or touch end handler */
    tryCallMouseUpOrTouchEndHandler(event, point) {
        if (this._data === null) return false;
        
        if (event.isTouch) {
            if (this._data.touchEndHandler !== undefined) {
                this._data.touchEndHandler(event, point);
                return true;
            }
        } else {
            if (this._data.mouseUpHandler !== undefined) {
                this._data.mouseUpHandler(event, point);
                return true;
            }
        }
        return false;
    }

    /** Try to call mouse enter handler */
    tryCallMouseEnterHandler(event, point) {
        if (this._data === null) return false;
        if (this._data.mouseEnterHandler !== undefined) {
            this._data.mouseEnterHandler(event, point);
            return true;
        }
        return false;
    }

    /** Try to call mouse leave handler */
    tryCallMouseLeaveHandler(event, point) {
        if (this._data === null) return false;
        if (this._data.mouseLeaveHandler !== undefined) {
            this._data.mouseLeaveHandler(event, point);
            return true;
        }
        return false;
    }

    /** Try to call mouse move handler */
    tryCallMouseMoveHandler(event, point) {
        if (this._data === null) return false;
        if (this._data.mouseMoveHandler !== undefined) {
            this._data.mouseMoveHandler(event, point);
            return true;
        }
        return false;
    }

    /** Try to call click or tap handler */
    tryCallClickOrTapHandler(event, point) {
        if (this._data === null) return false;
        
        if (event.isTouch) {
            if (this._data.tapHandler !== undefined) {
                this._data.tapHandler(event, point);
                return true;
            }
        } else {
            if (this._data.clickHandler !== undefined) {
                this._data.clickHandler(event, point);
                return true;
            }
        }
        return false;
    }

    /** Try to call double click or double tap handler */
    tryCallDblClickOrDblTapHandler(event, point) {
        if (this._data === null) return false;
        
        if (event.isTouch) {
            if (this._data.doubleTapHandler !== undefined) {
                this._data.doubleTapHandler(event, point);
                return true;
            }
        } else {
            if (this._data.doubleClickHandler !== undefined) {
                this._data.doubleClickHandler(event, point);
                return true;
            }
        }
        return false;
    }

    /** Try to call context menu handler */
    tryCallContextMenuHandler(event, point) {
        if (this._data === null) return false;
        
        if (event.isTouch) {
            if (this._data.touchContextMenuHandler !== undefined) {
                this._data.touchContextMenuHandler(event, point);
                return true;
            }
        } else {
            if (this._data.contextMenuHandler !== undefined) {
                this._data.contextMenuHandler(event, point);
                return true;
            }
        }
        return false;
    }

    /** Get erase marker flag */
    eraseMarker() {
        return this._eraseMarker;
    }
}

/**
 * Check if two hit test result data objects are equal
 */
function hitTestResultDataAreEqual(data1, data2) {
    if (data1 && data2 && data1.equals && data2.equals) {
        return data1.equals(data2);
    }
    return isEqual.default(data1, data2);
}

/**
 * Check if default action should be executed for given hit test
 */
function shouldDefaultActionBeExecuted(event, hitTestData, areaName, hitTarget) {
    if (hitTestData.executeDefaultAction === undefined) {
        return false;
    }
    
    if (event.isTouch) {
        return Boolean(hitTestData.executeDefaultAction[hitTarget]);
    } else {
        return Boolean(hitTestData.executeDefaultAction[areaName]);
    }
}

/**
 * Try to call appropriate handler based on event type
 * Priority: Touch handlers over mouse handlers
 */
function tryCallHandler(event, hitTestData, mouseHandler, touchHandler) {
    if (event.isTouch) {
        if (touchHandler !== undefined) {
            touchHandler(event, hitTestData);
            return true;
        }
    } else {
        if (mouseHandler !== undefined) {
            mouseHandler(event, hitTestData);
            return true;
        }
    }
    return false;
}

// Export public API
i.d(t, {
    AreaName: () => AreaName,
    MouseWheelMode: () => MouseWheelMode,
    HitTarget: () => HitTarget,
    HitTestResult: () => HitTestResult,
    hitTestResultDataAreEqual: () => hitTestResultDataAreEqual,
    shouldDefaultActionBeExecuted: () => shouldDefaultActionBeExecuted,
    tryCallHandler: () => tryCallHandler
});
