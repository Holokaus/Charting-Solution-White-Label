export class MACD {
  static inputs = [
    { name: 'fast', type: 'integer', min: 1, max: 100, default: 12 },
    { name: 'slow', type: 'integer', min: 1, max: 200, default: 26 },
    { name: 'signal', type: 'integer', min: 1, max: 100, default: 9 }
  ];

  static outputs = ['MACD', 'Signal', 'Histogram'];

  constructor(inputs = {}) {
    this.fast = inputs.fast || 12;
    this.slow = inputs.slow || 26;
    this.signal = inputs.signal || 9;
  }

  calculate(bars) {
    if (!bars || bars.length < this.slow) return [];

    const closes = bars.map(b => b.close);
    const fastEMA = this._ema(closes, this.fast);
    const slowEMA = this._ema(closes, this.slow);

    const macdLine = [];
    for (let i = 0; i < closes.length; i++) {
      if (fastEMA[i] === null || slowEMA[i] === null) {
        macdLine.push(null);
      } else {
        macdLine.push(fastEMA[i] - slowEMA[i]);
      }
    }

    const signalLine = this._ema(macdLine.filter(v => v !== null), this.signal);
    const result = [];

    let sigIdx = 0;
    const signalVals = [];

    for (let i = 0; i < closes.length; i++) {
      if (macdLine[i] === null) {
        result.push({ macd: null, signal: null, histogram: null });
      } else {
        const sig = signalLine[sigIdx];
        const hist = sig !== null ? macdLine[i] - sig : null;
        result.push({ macd: macdLine[i], signal: sig, histogram: hist });
        signalVals.push(sig);
        sigIdx++;
      }
    }

    return result;
  }

  _ema(values, period) {
    const result = [];
    const k = 2 / (period + 1);
    let ema = null;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === null) { result.push(null); continue; }
      if (ema === null) {
        if (i < period - 1) { result.push(null); continue; }
        let sum = 0;
        for (let j = i - period + 1; j <= i; j++) sum += values[j];
        ema = sum / period;
      } else {
        ema = k * values[i] + (1 - k) * ema;
      }
      result.push(ema);
    }
    return result;
  }
}
