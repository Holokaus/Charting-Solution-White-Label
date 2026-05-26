import { StateMachine } from '../../../phase-06-widget-core/src/StateMachine.js';
import { ThemeManager } from '../../../phase-06-widget-core/src/ThemeManager.js';
import { LayoutManager } from '../../../phase-06-widget-core/src/LayoutManager.js';
import { Chart } from '../chart/Chart.js';

export class Widget {
  constructor(options) {
    this._options = options || {};
    this._container = typeof options.container === 'string'
      ? document.querySelector(options.container)
      : options.container;
    if (!this._container) throw new Error('Widget requires a valid container');

    this._emitter = { _handlers: {}, emit(event, data) { (this._handlers[event] || []).forEach(h => h(data)); }, on(event, handler) { (this._handlers[event] = this._handlers[event] || []).push(handler); } };

    this._stateMachine = new StateMachine(this._emitter);
    this._themeManager = new ThemeManager(this._container);
    this._layoutManager = new LayoutManager();

    this._datafeed = options.datafeed || null;
    this._symbol = options.symbol || 'AAPL';
    this._interval = options.interval || '1D';

    this._chart = null;
    this._studies = [];

    this._init();
  }

  _init() {
    if (this._options.theme) {
      this._themeManager.apply(this._options.theme);
    }
    this._stateMachine.transition('loading');
    this._chart = new Chart(this._container, this._symbol, this._interval, this._datafeed);
    this._stateMachine.transition('ready');
    this._stateMachine.transition('active');

    if (this._options.symbol) this._chart.setSymbol(this._options.symbol);
    if (this._options.interval) this._chart.setInterval(this._options.interval);
  }

  chart() {
    return this._chart;
  }

  setSymbol(symbol) {
    this._symbol = symbol;
    if (this._chart) this._chart.setSymbol(symbol);
  }

  setInterval(interval) {
    this._interval = interval;
    if (this._chart) this._chart.setInterval(interval);
  }

  changeTheme(theme) {
    this._themeManager.apply(theme);
    if (this._chart) this._chart._options.theme = theme;
  }

  addStudy(studyName, inputs) {
    const registry = this._options.studyRegistry;
    if (!registry) return null;
    const study = registry.create(studyName, inputs);
    this._studies.push(study);
    if (this._chart) this._chart.addStudy(study);
    return study;
  }

  remove() {
    if (this._chart) this._chart.destroy();
    this._stateMachine.destroy();
  }

  get state() { return this._stateMachine.state; }
}
