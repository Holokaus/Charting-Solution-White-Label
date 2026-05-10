/**
 * ============================================================================
 * TRADINGVIEW MODULE 64876 - VISIBILITY CONTROLLER
 * ============================================================================
 *
 * Purpose: Create visibility controller for UI elements with multiple behavior modes
 *
 * Size: 2.5 KB
 *
 * Function: createVisibilityController(source, target)
 *   - Creates property for visibility control
 *   - Supports multiple visibility modes (always on/off, mouse over)
 *   - Handles mobile touch vs desktop behavior
 *   - Provides restoration to default values
 *
 * Visibility Modes:
 *   - alwaysOn: Element always visible
 *   - alwaysOff: Element always hidden
 *   - visibleOnMouseOver: Visible on mouse hover (desktop)
 *   - visibleOnTapSelection: Visible on tap selection (mobile)
 *
 * Dependencies:
 *   - 11542: i18n translations
 *   - 32563: Mobile touch detection
 *   - 41072: Primitive property creation
 *   - 1765: Settings adapter
 *
 * Exports:
 *   - createVisibilityController: Factory function
 *
 * @module 64876
 * @category UI System
 * @subcategory Visibility Control
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.moduleRequire_d(moduleConfig, {
    createVisibilityController: () => createVisibilityController
  });

  const i18n = moduleRequire(11542),
    mobileTouch = moduleRequire(32563),
    createPrimitiveProperty = moduleRequire(41072),
    settingsAdapter = moduleRequire(1765);

  // Visibility mode enumeration
  !function(VisibilityMode) {
    VisibilityMode[VisibilityMode.AlwaysOn = "alwaysOn"] = "AlwaysOn";
    VisibilityMode[VisibilityMode.VisibleOnMouseOver = "visibleOnMouseOver"] = "VisibleOnMouseOver";
    VisibilityMode[VisibilityMode.AlwaysOff = "alwaysOff"] = "AlwaysOff";
  }(VisibilityMode || (VisibilityMode = {}));

  const VISIBLE_ON_MOUSE_OVER = "visibleOnMouseOver";

  /**
   * Create visibility controller with behavior modes
   * @param {Object} source - Source object with visibility property
   * @param {Object} target - Target object to control
   * @returns {Object} Visibility controller object
   */
  function createVisibilityController(source, target) {
    let visibilityProperty, visibilityController;

    function createProperty() {
      if (!visibilityProperty) {
        visibilityProperty = createPrimitiveProperty();
        let currentMode = settingsAdapter.getValue(source);
        
        // Initialize mode if not set
        if (void 0 !== moduleRequire && void 0 !== target) {
          visibilityProperty.setValue(getVisibilityMode(currentMode));
        }
        
        // Subscribe to target changes and update mode
        visibilityProperty.subscribe(target, (newMode => {
          visibilityProperty.setValue(getVisibilityMode(newMode));
        }));
      }
      
      return visibilityProperty;
    }

    function getVisibilityMode(mode) {
      return "alwaysOn" === mode || "alwaysOff" === mode ? mode : VISIBLE_ON_MOUSE_OVER;
    }

    return {
      property: createProperty(),
      availableValues: function() {
        return [{
          id: "visibleOnMouseOver",
          value: "visibleOnMouseOver",
          title: mobileTouch.mobiletouch ? 
            i18n.watchedValue_t(null, void 0, moduleRequire(58302)) : 
            i18n.watchedValue_t(null, void 0, moduleRequire(10309))
        }, {
          id: "alwaysOn",
          value: "alwaysOn",
          title: i18n.watchedValue_t(null, void 0, moduleRequire(36299))
        }, {
          id: "alwaysOff",
          value: "alwaysOff",
          title: i18n.watchedValue_t(null, void 0, moduleRequire(40452))
        }];
      },
      actualBehavior: function() {
        if (!visibilityController) {
          visibilityController = createPrimitiveProperty();
          const currentMode = createProperty();
          
          visibilityController.setValue(getVisibilityMode(currentMode.value()));
          currentMode.subscribe(visibilityController, (newMode => {
            visibilityController.setValue(getVisibilityMode(newMode));
          }));
        }
        
        return visibilityController;
      },
      restoreDefaultValue: function() {
        createProperty().setValue(VISIBLE_ON_MOUSE_OVER);
        createProperty().remove(source);
      }
    };
  }
}
