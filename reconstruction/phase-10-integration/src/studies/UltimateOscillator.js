export class UltimateOscillator {
  static inputs = [
    { name: 'period1', type: 'integer', default: 7 },
    { name: 'period2', type: 'integer', default: 14 },
    { name: 'period3', type: 'integer', default: 28 }
  ];
  static outputs = ['UO'];

  constructor(inputs = {}) {
    this.p1 = inputs.period1 || 7;
    this.p2 = inputs.period2 || 14;
    this.p3 = inputs.period3 || 28;
  }

  calculate(bars) {
    if (!bars || bars.length < this.p3 + 1) return [];
    const bp = [null]; const tr = [null];
    for (let i = 1; i < bars.length; i++) {
      const close = bars[i].close;
      const low = bars[i].low;
      const high = bars[i].high;
      const prevClose = bars[i - 1].close;
      bp.push(close - Math.min(low, prevClose));
      tr.push(Math.max(high, prevClose) - Math.min(low, prevClose));
    }
    const avg = (period) => {
      const result = [null];
      for (let i = 1; i < bars.length; i++) {
        if (i < period) { result.push(null); continue; }
        let sumBP = 0, sumTR = 0;
        for (let j = i - period + 1; j <= i; j++) {
          sumBP += bp[j] || 0;
          sumTR += tr[j] || 1;
        }
        result.push(sumTR === 0 ? 50 : sumBP / sumTR);
      }
      return result;
    };
    const avg1 = avg(this.p1);
    const avg2 = avg(this.p2);
    const avg3 = avg(this.p3);
    const result = [null];
    for (let i = 1; i < bars.length; i++) {
      if (avg1[i] === null || avg2[i] === null || avg3[i] === null) {
        result.push(null);
      } else {
        result.push(100 * (4 * avg1[i] + 2 * avg2[i] + avg3[i]) / 7);
      }
    }
    return result;
  }
}
