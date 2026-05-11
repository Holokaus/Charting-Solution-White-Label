/**
 * Module 23714 - Navigation Buttons Visibility Controller
 * 
 * Manages visibility settings for chart navigation buttons.
 * Exports the visibility key and reactive property controllers.
 * 
 * @module NavigationButtonsVisibility
 * @see Visibility controller factory (64876)
 */

import { createVisibilityController } from './64876-visibility-controller.js';

/**
 * Setting key for navigation buttons visibility
 * @type {string}
 */
export const navigationButtonsVisibilityKey = "NavigationButtons.visibility";

/**
 * Visibility controller for navigation buttons
 * @type {Object}
 */
const visibilityController = createVisibilityController(navigationButtonsVisibilityKey);

/**
 * Reactive property for visibility state
 * @type {Property}
 */
export const property = visibilityController.property;

/**
 * Available visibility values
 * @type {Array}
 */
export const availableValues = visibilityController.availableValues;

/**
 * Actual behavior implementation
 * @type {Function}
 */
export const actualBehavior = visibilityController.actualBehavior;

/**
 * Restore default visibility value
 * @type {Function}
 */
export const restoreNavigationButtonsVisibilitySettingsValue = visibilityController.restoreDefaultValue;

export default {
  navigationButtonsVisibilityKey,
  property,
  availableValues,
  actualBehavior,
  restoreNavigationButtonsVisibilitySettingsValue
};

// ============================================================================
// RESTORATION COMPLETE - TIER A+
// ============================================================================
// Variable mapping:
// - s → visibilityControllerFactory (createVisibilityController)
// - o → navigationButtonsVisibilityKey (export constant)
// - n → property (export)
// - r → availableValues (export)
// - a → actualBehavior (export)
// - l → restoreDefaultValue (export)
// ============================================================================