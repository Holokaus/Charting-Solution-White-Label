export class ATR {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 200, default: 14 }
  ];
  static outputs = ['ATR'];

  constructor(inputs = {}) {
    this.length = inputs.length || 14;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length + 1) return [];
    const trValues = [null];
    for (let i = 1; i < bars.length; i++) {
      const high = bars[i].high;
      const low = bars[i].low;
      const prevClose = bars[i - 1].close;
      trValues.push(Math.max(high - low, Math.abs(high - prevClose), Math.abs(low - prevClose)));
    }
    return this._sma(trValues, this.length);
  }

  _sma(values, period) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i] === null || i < period - 1) { result.push(null); continue; }
      let sum = 0;
      for (let j = i - period + 1; j <= i; j++) sum += values[j];
      result.push(sum / period);
    }
    return result;
  }
}
