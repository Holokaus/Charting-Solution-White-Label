export class ADX {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 100, default: 14 }
  ];
  static outputs = ['ADX', 'DI+', 'DI-'];

  constructor(inputs = {}) {
    this.length = inputs.length || 14;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length + 1) return [];
    const tr = [null]; const up = [null]; const down = [null];
    for (let i = 1; i < bars.length; i++) {
      const h = bars[i].high, l = bars[i].low, pc = bars[i - 1].close;
      tr.push(Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc)));
      up.push(bars[i].high - bars[i - 1].high);
      down.push(bars[i - 1].low - bars[i].low);
    }
    const smoothedTR = this._rma(tr, this.length);
    const smoothedUp = this._rma(up.map((v, i) => v > 0 && v > (down[i] || 0) ? v : 0), this.length);
    const smoothedDown = this._rma(down.map((v, i) => v > 0 && v > (up[i] || 0) ? v : 0), this.length);
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (i < this.length) {
        result.push({ ADX: null, 'DI+': null, 'DI-': null });
      } else {
        const diPlus = smoothedTR[i] === 0 ? 0 : 100 * smoothedUp[i] / smoothedTR[i];
        const diMinus = smoothedTR[i] === 0 ? 0 : 100 * smoothedDown[i] / smoothedTR[i];
        const dx = (diPlus + diMinus) === 0 ? 0 : 100 * Math.abs(diPlus - diMinus) / (diPlus + diMinus);
        result.push({ ADX: dx, 'DI+': diPlus, 'DI-': diMinus });
      }
    }
    const adxValues = result.map(r => r.ADX);
    const smoothedADX = this._rma(adxValues, this.length);
    for (let i = 0; i < result.length; i++) result[i].ADX = smoothedADX[i];
    return result;
  }

  _rma(values, period) {
    const result = []; let rma = null;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === null) { result.push(null); continue; }
      if (rma === null) {
        if (i < period - 1) { result.push(null); continue; }
        let sum = 0; for (let j = i - period + 1; j <= i; j++) sum += values[j];
        rma = sum / period;
      } else { rma = (rma * (period - 1) + values[i]) / period; }
      result.push(rma);
    }
    return result;
  }
}
