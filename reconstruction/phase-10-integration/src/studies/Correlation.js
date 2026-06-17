export class Correlation {
  static inputs = [
    { name: 'length', type: 'integer', min: 2, max: 200, default: 20 },
    { name: 'source', type: 'select', options: ['close', 'high', 'low', 'open'], default: 'close' }
  ];
  static outputs = ['Correlation'];

  constructor(inputs = {}) {
    this.length = inputs.length || 20;
    this.source = inputs.source || 'close';
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];
    const values = bars.map(b => b[this.source]);
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < this.length - 1) { result.push(null); continue; }
      const n = this.length;
      let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
      for (let j = 0; j < n; j++) {
        const x = j;
        const y = values[i - this.length + 1 + j];
        sumX += x; sumY += y; sumXY += x * y; sumX2 += x * x; sumY2 += y * y;
      }
      const num = n * sumXY - sumX * sumY;
      const den = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
      result.push(den === 0 ? 0 : num / den);
    }
    return result;
  }
}
