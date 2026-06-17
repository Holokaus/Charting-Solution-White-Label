export class KeltnerChannels {
  static inputs = [
    { name: 'length', type: 'integer', default: 20 },
    { name: 'multiplier', type: 'float', default: 1.5 },
    { name: 'maType', type: 'select', options: ['EMA', 'SMA'], default: 'EMA' }
  ];
  static outputs = ['Middle', 'Upper', 'Lower'];

  constructor(inputs = {}) {
    this.length = inputs.length || 20;
    this.multiplier = inputs.multiplier || 1.5;
    this.maType = inputs.maType || 'EMA';
  }

  calculate(bars) {
    if (!bars || bars.length < this.length + 1) return [];
    const closes = bars.map(b => b.close);
    const middle = this.maType === 'EMA' ? this._ema(closes, this.length) : this._sma(closes, this.length);
    const tr = [null];
    for (let i = 1; i < bars.length; i++) {
      tr.push(Math.max(bars[i].high - bars[i].low, Math.abs(bars[i].high - bars[i - 1].close), Math.abs(bars[i].low - bars[i - 1].close)));
    }
    const atr = this._rma(tr, this.length);
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (middle[i] === null || atr[i] === null) { result.push({ Middle: null, Upper: null, Lower: null }); }
      else { result.push({ Middle: middle[i], Upper: middle[i] + this.multiplier * atr[i], Lower: middle[i] - this.multiplier * atr[i] }); }
    }
    return result;
  }

  _ema(values, period) {
    const result = []; let ema = null; const k = 2 / (period + 1);
    for (let i = 0; i < values.length; i++) {
      if (ema === null) {
        if (i < period - 1) { result.push(null); continue; }
        let sum = 0; for (let j = i - period + 1; j <= i; j++) sum += values[j];
        ema = sum / period;
      } else { ema = k * values[i] + (1 - k) * ema; }
      result.push(ema);
    }
    return result;
  }
  _sma(values, period) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < period - 1) { result.push(null); continue; }
      let sum = 0; for (let j = i - period + 1; j <= i; j++) sum += values[j];
      result.push(sum / period);
    }
    return result;
  }
  _rma(values, period) {
    const result = []; let rma = null;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === null) { result.push(null); continue; }
      if (rma === null) { if (i < period - 1) { result.push(null); continue; }
        let sum = 0; for (let j = i - period + 1; j <= i; j++) sum += values[j];
        rma = sum / period; } else { rma = (rma * (period - 1) + values[i]) / period; }
      result.push(rma);
    }
    return result;
  }
}
