/**
 * Module 72104 - Chart Widget Actions Options
 *
 * @description Defines default configuration for chart widget action categories
 * @dependencies None
 * @exports defaultChartWidgetActionsOptions
 * @exports ChartWidgetActionType
 */

/**
 * Default configuration options for chart widget actions
 * 
 * Controls which action categories are enabled in the chart widget context menu.
 * Each property represents a category of actions that can be shown/hidden.
 *
 * @type {Object}
 * @property {boolean} general - General chart actions (copy, save, etc.)
 * @property {boolean} mainSeries - Actions related to the main price series
 * @property {boolean} mainSeriesTrade - Trading actions on main series (disabled by default)
 * @property {boolean} esdStudies - ESD (Extended Study Data) study actions
 * @property {boolean} studies - General study/indicator actions
 * @property {boolean} fundamentals - Fundamental data actions
 * @property {boolean} lineTools - Drawing tool actions
 * @property {boolean} publishedCharts - Published/shared chart actions
 * @property {boolean} ordersAndPositions - Trading orders and positions actions
 * @property {boolean} alerts - Alert management actions
 * @property {boolean} chartEvents - Chart event handling actions
 * @property {boolean} objectTree - Object tree/navigation actions
 * @property {boolean} gotoLineTool - Go-to line tool navigation (disabled by default)
 */
const defaultChartWidgetActionsOptions = {
  /** General chart-level actions */
  general: true,
  
  /** Main price series actions */
  mainSeries: true,
  
  /** Trading actions on main series - disabled by default for safety */
  mainSeriesTrade: false,
  
  /** Extended Study Data actions */
  esdStudies: true,
  
  /** Study and indicator actions */
  studies: true,
  
  /** Fundamental data actions */
  fundamentals: true,
  
  /** Drawing and line tool actions */
  lineTools: true,
  
  /** Published/shared chart actions */
  publishedCharts: true,
  
  /** Trading orders and position management */
  ordersAndPositions: true,
  
  /** Alert creation and management */
  alerts: true,
  
  /** Chart event handling */
  chartEvents: true,
  
  /** Object tree navigation */
  objectTree: true,
  
  /** Go-to line tool feature - disabled by default */
  gotoLineTool: false
};

/**
 * Enumeration of chart widget action types
 * @enum {string}
 */
const ChartWidgetActionType = {
  /** Copy action - for copying chart data or configurations */
  Copy: 'Copy'
};

module.exports = {
  defaultChartWidgetActionsOptions,
  ChartWidgetActionType
};
