export class Ichimoku {
  static inputs = [
    { name: 'tenkanPeriod', type: 'integer', default: 9 },
    { name: 'kijunPeriod', type: 'integer', default: 26 },
    { name: 'senkouBPeriod', type: 'integer', default: 52 }
  ];
  static outputs = ['Tenkan', 'Kijun', 'SenkouA', 'SenkouB', 'Chikou'];

  constructor(inputs = {}) {
    this.tenkan = inputs.tenkanPeriod || 9;
    this.kijun = inputs.kijunPeriod || 26;
    this.senkouB = inputs.senkouBPeriod || 52;
  }

  calculate(bars) {
    if (!bars || bars.length < Math.max(this.tenkan, this.kijun, this.senkouB)) return [];
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      const tenkan = i < this.tenkan - 1 ? null : this._midpoint(bars, i, this.tenkan);
      const kijun = i < this.kijun - 1 ? null : this._midpoint(bars, i, this.kijun);
      const senkouB = i < this.senkouB - 1 ? null : this._midpoint(bars, i, this.senkouB);
      const senkouA = (tenkan !== null && kijun !== null) ? (tenkan + kijun) / 2 : null;
      const chikou = i < bars.length - this.kijun ? bars[i + this.kijun]?.close ?? null : null;
      result.push({ Tenkan: tenkan, Kijun: kijun, SenkouA: senkouA, SenkouB: senkouB, Chikou: chikou });
    }
    return result;
  }

  _midpoint(bars, idx, period) {
    let h = -Infinity, l = Infinity;
    for (let j = idx - period + 1; j <= idx; j++) {
      if (bars[j].high > h) h = bars[j].high;
      if (bars[j].low < l) l = bars[j].low;
    }
    return (h + l) / 2;
  }
}
