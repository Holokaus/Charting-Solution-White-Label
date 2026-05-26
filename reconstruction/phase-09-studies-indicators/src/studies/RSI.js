export class RSI {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 100, default: 14 }
  ];

  static outputs = ['RSI'];

  constructor(inputs = {}) {
    this.length = inputs.length || 14;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length + 1) return [];

    const closes = bars.map(b => b.close);
    const gains = [];
    const losses = [];

    for (let i = 1; i < closes.length; i++) {
      const diff = closes[i] - closes[i - 1];
      gains.push(Math.max(0, diff));
      losses.push(Math.max(0, -diff));
    }

    const avgGain = this._rma(gains, this.length);
    const avgLoss = this._rma(losses, this.length);
    const result = [];

    for (let i = 0; i < closes.length; i++) {
      if (i <= this.length) {
        result.push(null);
      } else {
        const ag = avgGain[i - 1];
        const al = avgLoss[i - 1];
        const rs = al === 0 ? Infinity : ag / al;
        const rsi = 100 - (100 / (1 + rs));
        result.push(rsi);
      }
    }

    return result;
  }

  _rma(values, period) {
    const result = [];
    let rma = null;
    for (let i = 0; i < values.length; i++) {
      if (rma === null) {
        if (i < period - 1) { result.push(null); continue; }
        let sum = 0;
        for (let j = i - period + 1; j <= i; j++) sum += values[j];
        rma = sum / period;
      } else {
        rma = (rma * (period - 1) + values[i]) / period;
      }
      result.push(rma);
    }
    return result;
  }
}
