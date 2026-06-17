export class Momentum {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 200, default: 10 }
  ];
  static outputs = ['Momentum'];

  constructor(inputs = {}) {
    this.length = inputs.length || 10;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length + 1) return [];
    const result = [null];
    for (let i = 1; i < bars.length; i++) {
      if (i < this.length) { result.push(null); continue; }
      result.push(bars[i].close - bars[i - this.length].close);
    }
    return result;
  }
}
