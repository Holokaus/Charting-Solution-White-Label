/**
 * Module 84526 - Symbol Info Dialog Launcher
 *
 * @description Exports function to show the symbol information dialog
 * @dependencies 
 *   - 8622, 8185, 5371, 2202, 5563, 2647, 3359, 445, 2112, 9036, 2227, 9418, 2477, 9374 (dialog component modules)
 *   - 46069 (SymbolInfoDialogImpl binding)
 * @exports showSymbolInfoDialog
 */

/**
 * Shows the symbol information dialog for a given symbol
 * 
 * This function lazily loads all required dialog components via webpack's
 * asynchronous module loading, then displays the symbol info dialog.
 * 
 * The dialog shows comprehensive information about a financial instrument including:
 * - Basic symbol details (name, exchange, type)
 * - Trading specifications (tick size, lot size, margins)
 * - Session information
 * - Fundamental data
 * - Related news and events
 *
 * @param {Object} symbolData - The symbol data to display in the dialog
 * @param {string} symbolData.symbol - The ticker symbol
 * @param {string} symbolData.exchange - The exchange identifier
 * 
 * @example
 * // Show symbol info for AAPL
 * showSymbolInfoDialog({
 *   symbol: 'AAPL',
 *   exchange: 'NASDAQ'
 * });
 * 
 * @example
 * // Show symbol info from chart context
 * chart.on('symbolClick', (symbolData) => {
 *   showSymbolInfoDialog(symbolData);
 * });
 */
function showSymbolInfoDialog(symbolData) {
  // Load all required dialog component modules asynchronously
  // These modules contain the UI components, data providers, and business logic
  Promise.all([
    require(8622),  // Dialog base component
    require(8185),  // Symbol data provider
    require(5371),  // Exchange info module
    require(2202),  // Trading specs renderer
    require(5563),  // Session times display
    require(2647),  // Fundamental data panel
    require(3359),  // News feed integration
    require(445),   // Events calendar
    require(2112),  // Related symbols
    require(9036),  // Technical summary
    require(2227),  // Analyst ratings
    require(9418),  // Financials data
    require(2477),  // Chart preview widget
    require(9374)   // Dialog styling/theme
  ])
    // Bind the loaded modules to create the dialog implementation
    .then(require.bind(require, 46069))
    // Extract and use the SymbolInfoDialogImpl singleton
    .then(({ SymbolInfoDialogImpl }) => {
      SymbolInfoDialogImpl.getInstance().show(symbolData);
    })
    .catch(error => {
      console.error('Failed to load symbol info dialog:', error);
    });
}

module.exports = {
  showSymbolInfoDialog
};
