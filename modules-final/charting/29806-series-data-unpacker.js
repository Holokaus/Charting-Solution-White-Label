/**
 * ============================================================================
 * TRADINGVIEW MODULE 29806 - SERIES DATA UNPACKER
 * ============================================================================
 *
 * Purpose: Series data unpacking and processing utilities
 *
 * Size: 1.8 KB
 *
 * Functions:
 *   - unpackNonSeriesData: Unpack non-series data from envelope
 *
 * Features:
 *   - Series data envelope parsing
 *   - JSON data validation
 *   - Index replacement handling
 *   - Offset management
 *   - Graphics command processing
 *   - Erase command handling
 *   - Update state management
 *
 * Dependencies:
 *   - 30551: Series data utilities
 *   - 50151: Assertion utilities
 *
 * Exports:
 *   - unpackNonSeriesData: Series data unpacker function
 *
 * @module 29806
 * @category Data Management
 * @subpackage Series Unpacking
 * ============================================================================
 */

(moduleExports, moduleConfig, moduleRequire) => {
  "use strict";
  moduleRequire.series_d(moduleConfig, {
    unpackNonSeriesData: () => unpackNonSeriesData
  });

  const seriesDataUtils = moduleRequire(30551),
    assertionUtils = moduleRequire(50151);

  /**
   * Unpack non-series data from envelope
   * @param {string} envelopeData - Envelope data string
   * @returns {Object|null} Unpacked data object or null if invalid
   */
  function unpackNonSeriesData(envelopeData) {
    if ("" === envelopeData) {
      return null;
    }
    
    const parsedData = JSON.parse(envelopeData);
    
    if (!seriesDataUtils.isObject(parsedData) || 
        "function" == typeof parsedData) {
      throw new Error("Non-object content in non-series envelope");
    }
    
    const unpackedData = {
      indexes_replace: false
    };
    
    // Handle index replacement property
    if (seriesDataUtils.hasProperty(parsedData, "indexes_replace")) {
      unpackedData.indexes_replace = parsedData.indexes_replace;
    }
    
    // Handle offsets property
    if (seriesDataUtils.hasProperty(parsedData, "offsets") && 
        seriesDataUtils.hasProperty(parsedData, "isUpdate")) {
      if ("boolean" != typeof parsedData.isUpdate) {
        throw new Error('Invalid type of "isUpdate" field');
      }
      unpackedData.isUpdate = parsedData.isUpdate;
    }
    
    // Handle data property
    if (seriesDataUtils.hasProperty(parsedData, "data")) {
      unpackedData.data = parsedData.data;
    }
    
    // Handle graphics commands property
    if (seriesDataUtils.hasProperty(parsedData, "graphicsCmds")) {
      unpackedData.graphicsCmds = function(graphicsData) {
        if (!seriesDataUtils.isObject(graphicsData)) {
          throw new Error("Graphics commands should be wrapped in an object");
        }
        
        if (seriesDataUtils.hasProperty(graphicsData, "create") && 
            seriesDataUtils.hasProperty(graphicsData, "erase")) {
          const eraseCommands = graphicsData.erase;
          
          assertionUtils.assert(Array.isArray(eraseCommands), 
            "Collection of erase commands should be array");
          
          for (const command of eraseCommands) {
            if (!seriesDataUtils.isObject(command) || 
                !seriesDataUtils.hasProperty(command, "action")) {
              throw new Error("Command should be an object with 'action' property");
            }
            
            assertionUtils.assert("all" === command.action || "one" === command.action,
              "Erase command action should be 'all' or 'one'");
          }
          
          return command;
        }
        
        return graphicsData;
      }(parsedData.graphicsCmds);
    }
    
    return unpackedData;
  }
}
