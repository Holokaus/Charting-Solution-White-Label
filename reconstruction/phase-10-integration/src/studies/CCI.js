export class CCI {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 200, default: 20 }
  ];
  static outputs = ['CCI'];

  constructor(inputs = {}) {
    this.length = inputs.length || 20;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (i < this.length - 1) { result.push(null); continue; }
      let sumTP = 0;
      for (let j = i - this.length + 1; j <= i; j++) {
        sumTP += (bars[j].high + bars[j].low + bars[j].close) / 3;
      }
      const sma = sumTP / this.length;
      let sumMD = 0;
      for (let j = i - this.length + 1; j <= i; j++) {
        const tp = (bars[j].high + bars[j].low + bars[j].close) / 3;
        sumMD += Math.abs(tp - sma);
      }
      const md = sumMD / this.length;
      const tp = (bars[i].high + bars[i].low + bars[i].close) / 3;
      const cci = md === 0 ? 0 : (tp - sma) / (0.015 * md);
      result.push(cci);
    }
    return result;
  }
}
