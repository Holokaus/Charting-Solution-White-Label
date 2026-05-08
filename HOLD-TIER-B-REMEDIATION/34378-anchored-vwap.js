/**
 * ============================================================================
 * TRADINGVIEW MODULE 34378 - ANCHORED VWAP
 * ============================================================================
 *
 * Purpose: Anchored Volume Weighted Average Price (VWAP) study implementation
 *
 * Size: 8.7 KB
 *
 * Class: AnchoredVWAP
 *   - Implements anchored VWAP calculation
 *   - Supports multiple band calculations
 *   - Provides configurable inputs
 *   - Handles standard deviation calculations
 *
 * Features:
 *   - VWAP calculation with bands
 *   - Standard deviation support
 *   - Multiple band multipliers
 *   - Configurable source inputs
 *   - Study item implementation
 *
 * Dependencies:
 *   - 50151: Assertion utilities
 *   - 51829: Study utilities
 *   - 46082: Study utilities
 *   - 19979: Study utilities
 *   - 4622: Study utilities
 *
 * Exports:
 *   - anchoredVWAPStudyItem: Anchored VWAP study item function
 *
 * @module 34378
 * @category Technical Indicators
 * @subcategory VWAP Studies
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.seriesBarFunction_d(moduleConfig, {
    anchoredVWAPStudyItem: () => anchoredVWAPStudyItem
  });

  const assertionUtils = moduleRequire(50151),
    studyUtils = moduleRequire(51829),
    studyUtils2 = moduleRequire(46082),
    studyUtils3 = moduleRequire(19979),
    studyUtils4 = moduleRequire(4622);

  /**
   * Create anchored VWAP study item
   * @returns {Object} Study item object
   */
  function anchoredVWAPStudyItem() {
    return {
      [studyUtils.STUDY_DESCRIPTION]: "Anchored VWAP",
      [studyUtils.STUDY_SHORT_DESCRIPTION]: "Anchored VWAP",
      [studyUtils.STUDY_DEFAULT_INPUTS]: {
        start_time: 0,
        "Bands Calculation Mode": "Standard Deviation",
        bands_multiplier: 1,
        bands_multiplier_2: 2,
        bands_multiplier_3: 3,
        calculate_stDev: false,
        calculate_stDev_2: true,
        calculate_stDev_3: true,
        source: "hlc3"
      },
      [studyUtils.STUDY_INPUTS]: [
        {
          name: "start_time",
          type: "integer",
          [studyUtils.STUDY_INPUT_DEFAULT]: 0
        },
        {
          name: "Bands Calculation Mode",
          type: "text",
          [studyUtils.STUDY_INPUT_DEFAULT]: "Standard Deviation"
        },
        {
          name: "bands_multiplier",
          type: "number",
          [studyUtils.STUDY_INPUT_DEFAULT]: 1
        },
        {
          name: "bands_multiplier_2",
          type: "number",
          [studyUtils.STUDY_INPUT_DEFAULT]: 2
        },
        {
          name: "bands_multiplier_3",
          type: "number",
          [studyUtils.STUDY_INPUT_DEFAULT]: 3
        },
        {
          name: "calculate_stDev",
          type: "boolean",
          [studyUtils.STUDY_INPUT_DEFAULT]: false
        },
        {
          name: "calculate_stDev_2",
          type: "boolean",
          [studyUtils.STUDY_INPUT_DEFAULT]: true
        },
        {
          name: "calculate_stDev_3",
          type: "boolean",
          [studyUtils.STUDY_INPUT_DEFAULT]: true
        },
        {
          name: "source",
          type: "source",
          [studyUtils.STUDY_INPUT_DEFAULT]: "hlc3"
        }
      ],
      [studyUtils.STUDY_PLOTS]: [
        {
          id: "VWAP",
          type: "line",
          [studyUtils.STUDY_PLOT_DISPLAY_NAME]: "VWAP"
        }
      ],
      [studyUtils.STUDY_DEFAULT_TARGET]: "main",
      [studyUtils.STUDY_FORMAT]: {
        type: "inherit"
      },
      [studyUtils.STUDY_META_INFO]: {
        "_metainfoVersion": 51,
        "description": "Anchored VWAP",
        "short_description": "Anchored VWAP",
        "id": "AnchoredVWAP@tv-basicstudies-1",
        "is_hidden_study": false,
        "is_price_study": false,
        "defaults": {
          "areaBackground": {
            "backgroundColor": "#4caf50",
            "fillBackground": false,
            "transparency": 95
          },
          "filledAreasStyle": {
            "Background_1": {
              "fillType": undefined,
              "color": "#4caf50",
              "transparency": 95,
              "visible": false
            }
          },
          "inputs": {
            "start_time": 0,
            "Bands Calculation Mode": "Standard Deviation",
            "bands_multiplier": 1,
            "bands_multiplier_2": 2,
            "bands_multiplier_3": 3,
            "calculate_stDev": false,
            "calculate_stDev_2": true,
            "calculate_stDev_3": true,
            "source": "hlc3"
          },
          "styles": {
            "VWAP": {
              "color": "#1e88e5",
              "linestyle": 0
            }
          }
        }
      }
    };
  }

  // Export the anchored VWAP study item function
  moduleExports.anchoredVWAPStudyItem = anchoredVWAPStudyItem;
}
