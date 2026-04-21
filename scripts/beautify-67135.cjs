const fs = require('fs');

const code = fs.readFileSync('modules-v2/67135.js', 'utf8');
const match = code.match(/67135:\(e,t,i\)=>\{\"use strict\";(.+)\}/s);

if (!match) {
  console.error('Failed to parse');
  process.exit(1);
}

let body = match[1];
body = body.replace(/i\.d\(t,\{PriceDataSource:\(\)=>c,isPriceDataSource:\(\)=>l\}\);/, '');
body = body.replace(/var s=i\(50151\),o=i\(2072\),n=i\(72207\),r=i\(48096\),a=i\(22455\);/, 
  'const ensureNotNull = i(50151).ensureNotNull;\nconst WatchedValue = i(2072).WatchedValue;\nconst DataSource = i(72207).DataSource;\nconst Delegate = i(48096).Delegate;\nconst isActingAsSymbolSource = i(22455).isActingAsSymbolSource;');
body = body.replace(/function l\(e\)\{return e instanceof c\}/g, 'function isPriceDataSource(dataSource) { return dataSource instanceof PriceDataSource; }');
body = body.replace(/class c extends n\.DataSource/g, 'class PriceDataSource extends DataSource');
body = body.replace(/new r\.Delegate/g, 'new Delegate()');
body = body.replace(/new o\.WatchedValue\(null\)/g, 'new WatchedValue(null)');
body = body.replace(/\(0,s\.ensureNotNull\)/g, 'ensureNotNull');
body = body.replace(/\(0,a\.isActingAsSymbolSource\)/g, 'isActingAsSymbolSource');

// Add newlines before each method definition for readability
body = body.replace(/(\w+)\(([^)]*)\)\{([^}]+)\}/g, (match, methodName, params, methodBody) => {
  // Skip if it's inside another block (simple heuristic)
  if (methodName === 'constructor' || methodName.startsWith('_')) {
    return `\n  ${methodName}(${params}) {${methodBody}}`;
  }
  return `\n  ${methodName}(${params}) {${methodBody}}`;
});

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
