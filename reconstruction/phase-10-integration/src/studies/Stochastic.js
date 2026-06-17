export class Stochastic {
  static inputs = [
    { name: 'kPeriod', type: 'integer', min: 1, max: 100, default: 14 },
    { name: 'kSmooth', type: 'integer', min: 1, max: 50, default: 3 },
    { name: 'dPeriod', type: 'integer', min: 1, max: 50, default: 3 }
  ];
  static outputs = ['K', 'D'];

  constructor(inputs = {}) {
    this.kPeriod = inputs.kPeriod || 14;
    this.kSmooth = inputs.kSmooth || 3;
    this.dPeriod = inputs.dPeriod || 3;
  }

  calculate(bars) {
    if (!bars || bars.length < this.kPeriod) return [];
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (i < this.kPeriod - 1) {
        result.push({ K: null, D: null });
      } else {
        let high14 = -Infinity, low14 = Infinity;
        for (let j = i - this.kPeriod + 1; j <= i; j++) {
          if (bars[j].high > high14) high14 = bars[j].high;
          if (bars[j].low < low14) low14 = bars[j].low;
        }
        const rawK = high14 === low14 ? 50 : ((bars[i].close - low14) / (high14 - low14)) * 100;
        result.push({ K: rawK, D: null });
      }
    }
    const kValues = result.map(r => r.K);
    const smoothK = this._sma(kValues, this.kSmooth);
    const smoothD = this._sma(smoothK, this.dPeriod);
    for (let i = 0; i < result.length; i++) {
      result[i].K = smoothK[i];
      result[i].D = smoothD[i];
    }
    return result;
  }

  _sma(values, period) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < period - 1) { result.push(null); continue; }
      let sum = 0;
      for (let j = i - period + 1; j <= i; j++) {
        if (values[j] === null) { sum = null; break; }
        sum += values[j];
      }
      result.push(sum !== null ? sum / period : null);
    }
    return result;
  }
}
