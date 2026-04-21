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
  `const ensureNotNull = i(50151).ensureNotNull;
const WatchedValue = i(2072).WatchedValue;
const DataSource = i(72207).DataSource;
const Delegate = i(48096).Delegate;
const isActingAsSymbolSource = i(22455).isActingAsSymbolSource;`);
body = body.replace(/function l\(e\)\{return e instanceof c\}/g, 'function isPriceDataSource(dataSource) { return dataSource instanceof PriceDataSource; }');
body = body.replace(/class c extends n\.DataSource/g, 'class PriceDataSource extends DataSource');
body = body.replace(/new r\.Delegate/g, 'new Delegate()');
body = body.replace(/new o\.WatchedValue\(null\)/g, 'new WatchedValue(null)');
body = body.replace(/\(0,s\.ensureNotNull\)/g, 'ensureNotNull');
body = body.replace(/\(0,a\.isActingAsSymbolSource\)/g, 'isActingAsSymbolSource');

// Format constructor
body = body.replace(/constructor\(e,t\)\{super\(t\),this\._formatterChanged=new Delegate\(\),this\._priceStepChanged=new Delegate\(\),this\._currencyChanged=new Delegate\(\),this\._unitChanged=new Delegate\(\),this\._priceRangeReadyChanged=new Delegate\(\),this\._dataRangeUpdated=new Delegate\(\),this\._priceStep=null,this\._signature=new WatchedValue\(null\),this\._priceRangeReady=!0,this\._model=e\}/g,
  `constructor(model, sourceId) {
    super(sourceId);
    this._formatterChanged = new Delegate();
    this._priceStepChanged = new Delegate();
    this._currencyChanged = new Delegate();
    this._unitChanged = new Delegate();
    this._priceRangeReadyChanged = new Delegate();
    this._dataRangeUpdated = new Delegate();
    this._priceStep = null;
    this._signature = new WatchedValue(null);
    this._priceRangeReady = true;
    this._model = model;
  }`);

// Format methods one by one
body = body.replace(/base\(\)\{return 0\}/g, 'base() {\n    return 0;\n  }');
body = body.replace(/model\(\)\{return this\._model\}/g, 'model() {\n    return this._model;\n  }');
body = body.replace(/currencyChanged\(\)\{return this\._currencyChanged\}/g, 'currencyChanged() {\n    return this._currencyChanged;\n  }');
body = body.replace(/isCurrencySource\(\)\{return!0\}/g, 'isCurrencySource() {\n    return true;\n  }');
body = body.replace(/isDisplayedInLegend\(\)\{return!0\}/g, 'isDisplayedInLegend() {\n    return true;\n  }');
body = body.replace(/unitChanged\(\)\{return this\._unitChanged\}/g, 'unitChanged() {\n    return this._unitChanged;\n  }');
body = body.replace(/isUnitSource\(\)\{return!0\}/g, 'isUnitSource() {\n    return true;\n  }');
body = body.replace(/signature\(\)\{return this\._signature\.readonly\(\)\}/g, 'signature() {\n    return this._signature.readonly();\n  }');
body = body.replace(/priceRange\(e,t,i\)\{return null\}/g, 'priceRange(isBarVisible, extendedSession, includeGlobalValues) {\n    return null;\n  }');
body = body.replace(/isDraggable\(\)\{return!0\}/g, 'isDraggable() {\n    return true;\n  }');
body = body.replace(/priceLineColor\(e\)\{return e\}/g, 'priceLineColor(color) {\n    return color;\n  }');
body = body.replace(/formatterChanged\(\)\{return this\._formatterChanged\}/g, 'formatterChanged() {\n    return this._formatterChanged;\n  }');
body = body.replace(/priceStep\(e\)\{return this\._priceStep\}/g, 'priceStep(value) {\n    return this._priceStep;\n  }');
body = body.replace(/priceStepChanged\(\)\{return this\._priceStepChanged\}/g, 'priceStepChanged() {\n    return this._priceStepChanged;\n  }');
body = body.replace(/isIncludedInAutoScale\(\)\{return!0\}/g, 'isIncludedInAutoScale() {\n    return true;\n  }');
body = body.replace(/tableViewValuesProvider\(\)\{return null\}/g, 'tableViewValuesProvider() {\n    return null;\n  }');
body = body.replace(/chartFloatingTooltipValuesProvider\(\)\{return this\.valuesProvider\(\)\}/g, 'chartFloatingTooltipValuesProvider() {\n    return this.valuesProvider();\n  }');
body = body.replace(/correctScaleMargins\(e\)\{return e\}/g, 'correctScaleMargins(margins) {\n    return margins;\n  }');
body = body.replace(/priceRangeReady\(\)\{return this\._priceRangeReady\}/g, 'priceRangeReady() {\n    return this._priceRangeReady;\n  }');
body = body.replace(/priceRangeReadyChanged\(\)\{return this\._priceRangeReadyChanged\}/g, 'priceRangeReadyChanged() {\n    return this._priceRangeReadyChanged;\n  }');
body = body.replace(/disablePriceRangeReady\(\)\{const e=this\.priceScale\(\);null===e\|\|e\.isAutoScale\(\)\|\|e\.mainSource\(\)!==this\|\|\(this\._priceRangeReady=!1,e\.recalculatePriceRangeOnce\(\)\),this\._priceRangeReadyChanged\.fire\(!1\)\}/g,
  `disablePriceRangeReady() {
    const priceScale = this.priceScale();
    if (priceScale !== null && !priceScale.isAutoScale() && priceScale.mainSource() === this) {
      this._priceRangeReady = false;
      priceScale.recalculatePriceRangeOnce();
    }
    this._priceRangeReadyChanged.fire(false);
  }`);
body = body.replace(/statusView\(\)\{return null\}/g, 'statusView() {\n    return null;\n  }');
body = body.replace(/legendView\(\)\{return null\}/g, 'legendView() {\n    return null;\n  }');
body = body.replace(/marketStatusModel\(\)\{return null\}/g, 'marketStatusModel() {\n    return null;\n  }');
body = body.replace(/dataUpdatedModeModel\(\)\{return null\}/g, 'dataUpdatedModeModel() {\n    return null;\n  }');
body = body.replace(/dataProblemModel\(\)\{return null\}/g, 'dataProblemModel() {\n    return null;\n  }');
body = body.replace(/alertSourceModel\(\)\{return null\}/g, 'alertSourceModel() {\n    return null;\n  }');
body = body.replace(/canHasAlertOnLineTools\(\)\{return!0\}/g, 'canHasAlertOnLineTools() {\n    return true;\n  }');
body = body.replace(/dataRangeUpdated\(\)\{return this\._dataRangeUpdated\}/g, 'dataRangeUpdated() {\n    return this._dataRangeUpdated;\n  }');
body = body.replace(/_onIndexDiffsApplied\(e\)\{const\[t,i\]=ensureNotNull\(this\._plotsDataRange\(\)\);let o=1\/0,n=-1\/0;for\(const t of e\)o=Math\.min\(o,t\.old,t\.new\),n=Math\.max\(n,t\.old,t\.new\);this\._dataRangeUpdated\.fire\(\{type:\"partial\",startIndex:Math\.max\(o,t\),endIndex:Math\.min\(n,i\)\}\)\}/g,
  `_onIndexDiffsApplied(diffs) {
    const [minIndex, maxIndex] = ensureNotNull(this._plotsDataRange());
    let oldestIndex = Infinity;
    let newestIndex = -Infinity;
    
    for (const diff of diffs) {
      oldestIndex = Math.min(oldestIndex, diff.old, diff.new);
      newestIndex = Math.max(newestIndex, diff.old, diff.new);
    }
    
    this._dataRangeUpdated.fire({
      type: "partial",
      startIndex: Math.max(oldestIndex, minIndex),
      endIndex: Math.min(newestIndex, maxIndex)
    });
  }`);
body = body.replace(/_plotsDataRange\(\)\{return null\}/g, '_plotsDataRange() {\n    return null;\n  }');
body = body.replace(/_enablePriceRangeReady\(\)\{this\._priceRangeReady=!0,this\._priceRangeReadyChanged\.fire\(!0\)\}/g, '_enablePriceRangeReady() {\n    this._priceRangeReady = true;\n    this._priceRangeReadyChanged.fire(true);\n  }');
body = body.replace(/_onSourceCurrencyChanged\(\)\{isActingAsSymbolSource\(this\)\|\|this\._currencyChanged\.fire\(\)\}/g, '_onSourceCurrencyChanged() {\n    if (!isActingAsSymbolSource(this)) {\n      this._currencyChanged.fire();
    }\n  }');
body = body.replace(/_onSourceUnitChanged\(\)\{isActingAsSymbolSource\(this\)\|\|this\._unitChanged\.fire\(\)\}/g, '_onSourceUnitChanged() {\n    if (!isActingAsSymbolSource(this)) {\n      this._unitChanged.fire();
    }\n  }');
body = body.replace(/_onSourcePriceRangeReadyChanged\(e\)\{isActingAsSymbolSource\(this\)\|\|e\|\|this\.disablePriceRangeReady\(\)\}/g, '_onSourcePriceRangeReadyChanged(isReady) {\n    if (!isActingAsSymbolSource(this) && !isReady) {\n      this.disablePriceRangeReady();
    }\n  }');

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

const ensureNotNull = i(50151).ensureNotNull;
const WatchedValue = i(2072).WatchedValue;
const DataSource = i(72207).DataSource;
const Delegate = i(48096).Delegate;
const isActingAsSymbolSource = i(22455).isActingAsSymbolSource;

function isPriceDataSource(dataSource) {
  return dataSource instanceof PriceDataSource;
}

class PriceDataSource extends DataSource {
  ${body}
}

export { PriceDataSource, isPriceDataSource };
`;

console.log(output);
