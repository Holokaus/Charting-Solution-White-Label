export class BollingerBands {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 200, default: 20 },
    { name: 'mult', type: 'float', min: 0.1, max: 5, default: 2.0 }
  ];

  static outputs = ['Middle', 'Upper', 'Lower'];

  constructor(inputs = {}) {
    this.length = inputs.length || 20;
    this.mult = inputs.mult || 2.0;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];

    const closes = bars.map(b => b.close);
    const result = [];

    for (let i = 0; i < closes.length; i++) {
      if (i < this.length - 1) {
        result.push({ middle: null, upper: null, lower: null });
      } else {
        let sum = 0;
        for (let j = i - this.length + 1; j <= i; j++) sum += closes[j];
        const middle = sum / this.length;

        let sqSum = 0;
        for (let j = i - this.length + 1; j <= i; j++) {
          sqSum += (closes[j] - middle) ** 2;
        }
        const stddev = Math.sqrt(sqSum / this.length);

        result.push({
          middle,
          upper: middle + this.mult * stddev,
          lower: middle - this.mult * stddev
        });
      }
    }

    return result;
  }
}
