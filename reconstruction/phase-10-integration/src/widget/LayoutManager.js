const CURRENT_VERSION = '30.0.0-reconstructed';

export class LayoutManager {
  constructor() {
    this._state = null;
  }

  save() {
    return {
      version: CURRENT_VERSION,
      timestamp: Date.now(),
      charts: [],
      layout: { sashWeights: [0.7, 0.3] }
    };
  }

  load(state) {
    if (!state || typeof state !== 'object') {
      throw new Error('Invalid layout state: must be an object');
    }
    if (!state.version) {
      throw new Error('Invalid layout state: missing version');
    }
    if (!this._isCompatible(state.version)) {
      throw new Error(`Incompatible layout version: ${state.version}`);
    }
    this._state = state;
    return state;
  }

  addChart(chartState) {
    if (!this._state) {
      this._state = this.save();
    }
    this._state.charts.push(chartState);
    return this._state;
  }

  removeChart(index) {
    if (this._state && index >= 0 && index < this._state.charts.length) {
      this._state.charts.splice(index, 1);
    }
  }

  setLayout(layout) {
    if (this._state) {
      this._state.layout = { ...this._state.layout, ...layout };
    }
  }

  serialize() {
    const state = this._state || this.save();
    return JSON.stringify(state);
  }

  deserialize(string) {
    try {
      const state = JSON.parse(string);
      return this.load(state);
    } catch (e) {
      throw new Error(`Failed to deserialize layout: ${e.message}`);
    }
  }

  getState() {
    return this._state;
  }

  _isCompatible(version) {
    const major = (v) => parseInt(v.split('.')[0], 10);
    return major(version) === major(CURRENT_VERSION);
  }

  static createChartState(symbol, interval) {
    return {
      symbol: symbol || '',
      interval: interval || '1D',
      chartType: 0,
      studies: [],
      drawings: [],
      visibleRange: null,
      priceScale: { mode: 0, autoScale: true }
    };
  }
}
