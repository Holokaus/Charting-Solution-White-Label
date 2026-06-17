export class WilliamsR {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 100, default: 14 }
  ];
  static outputs = ['Williams %R'];

  constructor(inputs = {}) {
    this.length = inputs.length || 14;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (i < this.length - 1) { result.push(null); continue; }
      let hh = -Infinity, ll = Infinity;
      for (let j = i - this.length + 1; j <= i; j++) {
        if (bars[j].high > hh) hh = bars[j].high;
        if (bars[j].low < ll) ll = bars[j].low;
      }
      const wr = hh === ll ? -50 : -100 * (hh - bars[i].close) / (hh - ll);
      result.push(wr);
    }
    return result;
  }
}
