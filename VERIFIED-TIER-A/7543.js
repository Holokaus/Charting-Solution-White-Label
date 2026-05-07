/**
 * Module 7543 - DataSource Utilities
 * 
 * @description Exports utility functions for DataSource type checking
 * @dependencies None
 * @exports isDataSource
 */

/**
 * Checks if an object is a valid DataSource
 * @param {Object} dataSource - The object to check
 * @returns {boolean} true if the object has showInObjectTree property
 */
function isDataSource(dataSource) {
  return Boolean(dataSource.showInObjectTree);
}

module.exports = {
  isDataSource
};
