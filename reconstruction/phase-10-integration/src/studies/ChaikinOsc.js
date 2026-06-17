export class ChaikinOsc {
  static inputs = [
    { name: 'fastPeriod', type: 'integer', default: 3 },
    { name: 'slowPeriod', type: 'integer', default: 10 }
  ];
  static outputs = ['ChaikinOsc'];

  constructor(inputs = {}) {
    this.fast = inputs.fastPeriod || 3;
    this.slow = inputs.slowPeriod || 10;
  }

  calculate(bars) {
    if (!bars || bars.length < this.slow + 1) return [];
    const adl = [0];
    for (let i = 1; i < bars.length; i++) {
      const h = bars[i].high, l = bars[i].low, c = bars[i].close, v = bars[i].volume;
      const clv = h === l ? 0 : ((c - l) - (h - c)) / (h - l);
      adl.push(adl[i - 1] + clv * v);
    }
    const emaFast = this._ema(adl, this.fast);
    const emaSlow = this._ema(adl, this.slow);
    const result = [];
    for (let i = 0; i < adl.length; i++) {
      if (emaFast[i] === null || emaSlow[i] === null) { result.push(null); }
      else { result.push(emaFast[i] - emaSlow[i]); }
    }
    return result;
  }

  _ema(values, period) {
    const result = []; let ema = null; const k = 2 / (period + 1);
    for (let i = 0; i < values.length; i++) {
      if (ema === null) { if (i < period - 1) { result.push(null); continue; }
        let sum = 0; for (let j = i - period + 1; j <= i; j++) sum += values[j];
        ema = sum / period; } else { ema = k * values[i] + (1 - k) * ema; }
      result.push(ema);
    }
    return result;
  }
}
