/**
 * Module 97217 - Line Tool Manager Utilities
 *
 * @description Exports utility functions for line tool management and type checking
 * @dependencies 30551 (isObject utility)
 * @exports isLineTool
 */

const { isObject } = require(30551);

/**
 * Checks if an object is a valid line tool
 * @param {Object} obj - The object to check
 * @returns {boolean} true if the object has isLineTool property
 */
function isLineTool(obj) {
  return isObject(obj) && 'isLineTool' in obj && obj.isLineTool === true;
}

module.exports = {
  isLineTool
};
