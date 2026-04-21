/**
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
const isActingAsSymbolSource = i(22455).isActingAsSymbolSource;function isPriceDataSource(dataSource) { return dataSource instanceof PriceDataSource; }class PriceDataSource extends DataSource{
  constructor(e,t) {super(t),this._formatterChanged=new Delegate(),this._priceStepChanged=new Delegate(),this._currencyChanged=new Delegate(),this._unitChanged=new Delegate(),this._priceRangeReadyChanged=new Delegate(),this._dataRangeUpdated=new Delegate(),this._priceStep=null,this._signature=new WatchedValue(null),this._priceRangeReady=!0,this._model=e}
  base() {return 0}
  model() {return this._model}
  currencyChanged() {return this._currencyChanged}
  isCurrencySource() {return!0}
  isDisplayedInLegend() {return!0}
  unitChanged() {return this._unitChanged}
  isUnitSource() {return!0}
  signature() {return this._signature.readonly()}
  priceRange(e,t,i) {return null}
  isDraggable() {return!0}
  priceLineColor(e) {return e}
  formatterChanged() {return this._formatterChanged}
  priceStep(e) {return this._priceStep}
  priceStepChanged() {return this._priceStepChanged}
  isIncludedInAutoScale() {return!0}
  tableViewValuesProvider() {return null}
  chartFloatingTooltipValuesProvider() {return this.valuesProvider()}
  correctScaleMargins(e) {return e}
  priceRangeReady() {return this._priceRangeReady}
  priceRangeReadyChanged() {return this._priceRangeReadyChanged}
  disablePriceRangeReady() {const e=this.priceScale();null===e||e.isAutoScale()||e.mainSource()!==this||(this._priceRangeReady=!1,e.recalculatePriceRangeOnce()),this._priceRangeReadyChanged.fire(!1)}
  statusView() {return null}
  legendView() {return null}
  marketStatusModel() {return null}
  dataUpdatedModeModel() {return null}
  dataProblemModel() {return null}
  alertSourceModel() {return null}
  canHasAlertOnLineTools() {return!0}
  dataRangeUpdated() {return this._dataRangeUpdated}
  _onIndexDiffsApplied(e) {const[t,i]=ensureNotNull(this._plotsDataRange());let o=1/0,n=-1/0;for(const t of e)o=Math.min(o,t.old,t.new),n=Math.max(n,t.old,t.new);this._dataRangeUpdated.fire({type:"partial",startIndex:Math.max(o,t),endIndex:Math.min(n,i)})}
  _plotsDataRange() {return null}
  _enablePriceRangeReady() {this._priceRangeReady=!0,this._priceRangeReadyChanged.fire(!0)}
  _onSourceCurrencyChanged() {isActingAsSymbolSource(this)||this._currencyChanged.fire()}
  _onSourceUnitChanged() {isActingAsSymbolSource(this)||this._unitChanged.fire()}
  _onSourcePriceRangeReadyChanged(e) {isActingAsSymbolSource(this)||e||this.disablePriceRangeReady()}

export { PriceDataSource, isPriceDataSource };

