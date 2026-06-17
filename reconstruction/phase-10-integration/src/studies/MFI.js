export class MFI {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 100, default: 14 }
  ];
  static outputs = ['MFI'];

  constructor(inputs = {}) {
    this.length = inputs.length || 14;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length + 1) return [];
    const pmf = [null], nmf = [null];
    for (let i = 1; i < bars.length; i++) {
      const tp = (bars[i].high + bars[i].low + bars[i].close) / 3;
      const prevTP = (bars[i - 1].high + bars[i - 1].low + bars[i - 1].close) / 3;
      const mf = tp * bars[i].volume;
      if (tp > prevTP) { pmf.push(mf); nmf.push(0); }
      else if (tp < prevTP) { pmf.push(0); nmf.push(mf); }
      else { pmf.push(0); nmf.push(0); }
    }
    const result = [null];
    for (let i = 1; i < bars.length; i++) {
      if (i < this.length) { result.push(null); continue; }
      let sumPMF = 0, sumNMF = 0;
      for (let j = i - this.length + 1; j <= i; j++) {
        sumPMF += pmf[j] || 0;
        sumNMF += nmf[j] || 0;
      }
      const mfi = sumNMF === 0 ? 100 : 100 - 100 / (1 + sumPMF / sumNMF);
      result.push(mfi);
    }
    return result;
  }
}
