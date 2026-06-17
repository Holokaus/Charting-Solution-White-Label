export class DonchianChannels {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 200, default: 20 }
  ];
  static outputs = ['Upper', 'Middle', 'Lower'];

  constructor(inputs = {}) {
    this.length = inputs.length || 20;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (i < this.length - 1) { result.push({ Upper: null, Middle: null, Lower: null }); continue; }
      let h = -Infinity, l = Infinity;
      for (let j = i - this.length + 1; j <= i; j++) {
        if (bars[j].high > h) h = bars[j].high;
        if (bars[j].low < l) l = bars[j].low;
      }
      result.push({ Upper: h, Middle: (h + l) / 2, Lower: l });
    }
    return result;
  }
}
