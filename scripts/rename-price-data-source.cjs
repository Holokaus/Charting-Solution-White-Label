const fs = require('fs');

const code = fs.readFileSync('modules-v2/67135.js', 'utf8');
const match = code.match(/67135:\(e,t,i\)=>\{\"use strict\";(.+)\}/s);

if (!match) {
  console.error('Failed to parse module 67135');
  process.exit(1);
}

let body = match[1];

// Remove exports
body = body.replace(/i\.d\(t,\{PriceDataSource:\(\)=>c,isPriceDataSource:\(\)=>l\}\);/, '');

// Replace imports
body = body.replace(
  /var s=i\(50151\),o=i\(2072\),n=i\(72207\),r=i\(48096\),a=i\(22455\);/,
  `const ensureNotNull = i(50151).ensureNotNull;
const WatchedValue = i(2072).WatchedValue;
const DataSource = i(72207).DataSource;
const Delegate = i(48096).Delegate;
const isActingAsSymbolSource = i(22455).isActingAsSymbolSource;`
);

// Rename identifiers
body = body.replace(/function l\(e\)\{return e instanceof c\}/g, 'function isPriceDataSource(dataSource) { return dataSource instanceof PriceDataSource; }');
body = body.replace(/class c extends n\.DataSource/g, 'class PriceDataSource extends DataSource');
body = body.replace(/new r\.Delegate/g, 'new Delegate()');
body = body.replace(/new o\.WatchedValue\(null\)/g, 'new WatchedValue(null)');
body = body.replace(/\(0,s\.ensureNotNull\)/g, 'ensureNotNull');
body = body.replace(/\(0,a\.isActingAsSymbolSource\)/g, 'isActingAsSymbolSource');

const output = `/**
 * Module 67135 - PriceDataSource
 *
 * Base class for all price-based data sources in TradingView charts.
 * Extends DataSource with price-specific functionality including:
 * - Price formatting and step management
 * - Currency and unit handling
 * - Price range calculations
 * - Data range updates
 *
 * @dependencies
 * - 50151: ensureNotNull utility
 * - 2072: WatchedValue for reactive signatures
 * - 72207: DataSource base class
 * - 48096: Delegate for event handling
 * - 22455: isActingAsSymbolSource utility
 */

${body}

export { PriceDataSource, isPriceDataSource };
`;

console.log(output);
