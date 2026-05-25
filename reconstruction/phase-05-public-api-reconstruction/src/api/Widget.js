import { ChartAPI } from './ChartAPI.js';
import { EventEmitter } from '../utils/EventEmitter.js';
import { WidgetOptionsValidator } from '../utils/Validator.js';
import { IFrameHost } from '../iframe/IFrameHost.js';

export class Widget {
  constructor(options) {
    const validator = new WidgetOptionsValidator();
    const validation = validator.validate(options);
    if (!validation.valid) {
      console.warn('Widget constructor validation warnings:', validation.errors);
    }
    this._options = validator.applyDefaults(options);
    this._ready = false;
    this._eventEmitter = new EventEmitter();
    this._charts = [new ChartAPI(0, this)];
    this._activeChartIndex = 0;
    this._theme = this._options.theme || 'dark';
    this._debugMode = false;
    this._destroyed = false;

    this._ifameHost = new IFrameHost(this._options.container);

    this._init();
  }

  _init() {
    setTimeout(() => {
      this._ready = true;
      this._eventEmitter.emit('onChartReady', null);
    }, 100);
  }

  // Core Chart Control Methods
  save(callback, options) {
    const state = {
      version: '30.0.0-reconstructed',
      symbol: this._options.symbol,
      interval: this._options.interval,
      chartType: this._options.chartType || 0,
      studies: [],
      drawings: [],
      layout: { charts: this._charts.length },
      timestamp: Date.now(),
    };
    if (callback) callback(state);
    return state;
  }

  load(state, options, callback) {
    this._options.symbol = state.symbol;
    this._options.interval = state.interval;
    if (callback) callback();
    this._eventEmitter.emit('onChartLoaded', state);
  }

  setSymbol(symbol, interval, onChartReady) {
    this._options.symbol = symbol;
    if (interval) this._options.interval = interval;
    this._eventEmitter.emit('onSymbolChanged', { symbol, interval });
    if (onChartReady) setTimeout(onChartReady, 50);
  }

  chart(index = 0) {
    return this._charts[index] || this._charts[0];
  }

  remove() {
    this._destroyed = true;
    this._eventEmitter.removeAllListeners();
    this._charts = [];
    if (this._ifameHost) this._ifameHost.destroy();
  }

  // Symbol & Resolution Methods
  symbolInterval() {
    return { symbol: this._options.symbol, interval: this._options.interval };
  }

  getIntervals() {
    return WidgetOptionsValidator.SUPPORTED_INTERVALS;
  }

  setTimeFrame(timeframe) {
    this._eventEmitter.emit('onTimeFrameChanged', { timeframe });
  }

  // Study Methods
  getStudiesList() {
    return [
      'Bollinger Bands', 'MACD', 'RSI', 'Stochastic', 'Average True Range',
      'Commodity Channel Index', 'Elder-Ray Index', 'Force Index',
      'Ichimoku Cloud', 'Keltner Channels', 'Moving Average',
      'Moving Average Exponential', 'Moving Average Weighted',
      'On Balance Volume', 'Parabolic SAR', 'Pivot Points High Low',
      'Pivot Points Standard', 'Price Oscillator', 'Price Volume Trend',
      'Rate of Change', 'Relative Strength Index', 'Slow Stochastic',
      'Smooth Moving Average', 'Standard Deviation', 'Stochastic RSI',
      'Triple Exponential Average', 'True Strength Index',
      'Turtle Channels', 'Vortex Indicator', 'Volume',
      'Volume Oscillator', 'Williams Percent Range', 'Zig Zag',
    ];
  }

  getStudyInputs(studyName) {
    return [{ name: 'length', type: 'integer', min: 1, max: 100, default: 14 }];
  }

  getStudyStyles(studyName) {
    return [{ name: 'color', type: 'color', default: '#2196F3' }];
  }

  addCustomCSSFile(filePath) {}

  // Layout & Theme Methods
  layout() { return 'layout_1'; }
  setLayout(id) {}
  layoutName() { return 'Default Layout'; }
  resetLayoutSizes(paneIndex) {}
  setLayoutSizes(sizes) {}

  changeTheme(theme, disableUndo) {
    this._theme = theme;
    this._eventEmitter.emit('onThemeChanged', { theme });
  }

  getTheme() { return this._theme; }

  // Multi-Chart Methods
  activeChart() { return this._charts[this._activeChartIndex]; }
  activeChartIndex() { return this._activeChartIndex; }
  chartsCount() { return this._charts.length; }
  setActiveChart(index) { this._activeChartIndex = index; }
  unloadUnusedCharts() {}

  // Drawing Tool Methods
  selectLineTool(toolName, skipIfSameToolSelected) {}
  selectedLineTool() { return null; }
  hideAllDrawingTools() {}
  lockAllDrawingTools() {}
  drawOnAllCharts(enabled) {}
  drawOnAllChartsEnabled() { return false; }

  // Undo/Redo Methods
  undo() { this._eventEmitter.emit('onUndo', null); }
  redo() { this._eventEmitter.emit('onRedo', null); }
  clearUndoHistory() {}
  undoRedoState() { return { undo: false, redo: false }; }

  // Toolbar & UI Methods
  createButton(options) { return { id: 'custom-btn', remove: () => {} }; }
  createDropdown(options) { return { id: 'custom-dropdown', remove: () => {} }; }
  removeButton(buttonId) {}
  navigationButtonsVisibility() { return { back: false, forward: false }; }
  paneButtonsVisibility() { return { indicators: true }; }

  // Dialog Methods
  showLoadChartDialog() {}
  showSaveAsChartDialog() {}
  showNoticeDialog(options) {}
  showConfirmDialog(options) {}
  closePopupsAndDialogs() {}

  // Screenshots & Export
  takeScreenshot() {}
  takeClientScreenshot(callback) { if (callback) callback(null); }

  // Sync Methods
  symbolSync() { return {}; }
  intervalSync() { return {}; }
  timeSync() { return {}; }
  crosshairSync() { return {}; }
  dateRangeSync() { return {}; }
  setIntervalLinkingEnabled(enabled) {}
  setDateRangeLinkingEnabled(enabled) {}

  // Formatting Methods
  mainSeriesPriceFormatter() { return { format: (v) => String(v) }; }
  dateFormat() { return {}; }
  timeHoursFormat() { return {}; }
  currencyAndUnitVisibility() { return { currency: false, unit: false }; }

  // Server-Based Chart Methods
  getSavedCharts(callback) { if (callback) callback([]); }
  loadChartFromServer(id) {}
  saveChartToServer(showDialog, onSuccess, onFail) { if (onSuccess) onSuccess(); }
  removeChartFromServer(id, onSuccess) { if (onSuccess) onSuccess(); }

  // Additional UI Methods
  getLanguage() { return this._options.locale || 'en'; }
  watchList() { return { getItems: () => [], setItems: () => {} }; }
  news() { return null; }
  widgetbar() { return null; }
  setDebugMode(enabled) { this._debugMode = enabled; }
  onChartReady(callback) {
    if (this._ready) setTimeout(callback, 0);
    else this._eventEmitter.once('onChartReady', callback);
  }
  headerReady() { return Promise.resolve(); }

  // Event System
  subscribe(eventName, callback) {
    return this._eventEmitter.on(eventName, callback);
  }

  unsubscribe(eventName, callback) {
    this._eventEmitter.off(eventName, callback);
  }
}
