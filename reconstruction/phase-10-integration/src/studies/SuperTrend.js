export class SuperTrend {
  static inputs = [
    { name: 'period', type: 'integer', min: 1, max: 100, default: 10 },
    { name: 'multiplier', type: 'float', min: 0.1, max: 10, default: 3 }
  ];
  static outputs = ['SuperTrend', 'Direction'];

  constructor(inputs = {}) {
    this.period = inputs.period || 10;
    this.multiplier = inputs.multiplier || 3;
  }

  calculate(bars) {
    if (!bars || bars.length < this.period + 1) return [];
    const hl2 = bars.map(b => (b.high + b.low) / 2);
    const atr = this._atr(bars, this.period);
    const result = [];
    let prevUpper = 0, prevLower = 0;
    let direction = 1;
    for (let i = 0; i < bars.length; i++) {
      if (atr[i] === null) {
        result.push({ SuperTrend: null, Direction: null });
        prevUpper = 0; prevLower = 0;
      } else {
        const upper = hl2[i] + this.multiplier * atr[i];
        const lower = hl2[i] - this.multiplier * atr[i];
        const prevClose = i > 0 ? bars[i - 1].close : bars[i].close;
        if (i === this.period) {
          direction = 1;
          prevUpper = upper; prevLower = lower;
        } else {
          if (upper < prevUpper || bars[i - 1].close > prevUpper) {
            prevUpper = upper;
          } else { prevUpper = prevUpper; }
          if (lower > prevLower || bars[i - 1].close < prevLower) {
            prevLower = lower;
          } else { prevLower = prevLower; }
        }
        if (bars[i].close > prevUpper) {
          direction = 1;
        } else if (bars[i].close < prevLower) {
          direction = -1;
        }
        const st = direction === 1 ? prevLower : prevUpper;
        result.push({ SuperTrend: st, Direction: direction });
      }
    }
    return result;
  }

  _atr(bars, period) {
    const tr = [null];
    for (let i = 1; i < bars.length; i++) {
      tr.push(Math.max(bars[i].high - bars[i].low, Math.abs(bars[i].high - bars[i - 1].close), Math.abs(bars[i].low - bars[i - 1].close)));
    }
    const result = [null]; let rma = null;
    for (let i = 1; i < tr.length; i++) {
      if (rma === null) {
        if (i < period) { result.push(null); continue; }
        let sum = 0; for (let j = i - period + 1; j <= i; j++) sum += tr[j];
        rma = sum / period;
      } else { rma = (rma * (period - 1) + tr[i]) / period; }
      result.push(rma);
    }
    return result;
  }
}
