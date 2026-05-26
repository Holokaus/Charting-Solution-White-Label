export class MovingAverage {
  static inputs = [
    { name: 'type', type: 'select', options: ['SMA', 'EMA', 'WMA', 'SMMA'], default: 'SMA' },
    { name: 'length', type: 'integer', min: 1, max: 200, default: 14 },
    { name: 'source', type: 'select', options: ['close', 'high', 'low', 'open'], default: 'close' }
  ];

  static outputs = ['MA'];

  constructor(inputs = {}) {
    this.type = inputs.type || 'SMA';
    this.length = inputs.length || 14;
    this.source = inputs.source || 'close';
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];

    const values = bars.map(b => b[this.source]);
    const result = [];

    switch (this.type) {
      case 'SMA':
        return this._sma(values);
      case 'EMA':
        return this._ema(values);
      case 'WMA':
        return this._wma(values);
      case 'SMMA':
        return this._smma(values);
      default:
        return this._sma(values);
    }
  }

  _sma(values) {
    const result = [];
    for (let i = 0; i < values.length; i++) {
      if (i < this.length - 1) {
        result.push(null);
      } else {
        let sum = 0;
        for (let j = i - this.length + 1; j <= i; j++) sum += values[j];
        result.push(sum / this.length);
      }
    }
    return result;
  }

  _ema(values) {
    const result = [];
    const k = 2 / (this.length + 1);
    let ema = null;
    for (let i = 0; i < values.length; i++) {
      if (ema === null) {
        let sum = 0;
        if (i < this.length - 1) { result.push(null); continue; }
        for (let j = i - this.length + 1; j <= i; j++) sum += values[j];
        ema = sum / this.length;
      } else {
        ema = k * values[i] + (1 - k) * ema;
      }
      result.push(ema);
    }
    return result;
  }

  _wma(values) {
    const result = [];
    const weightSum = (this.length * (this.length + 1)) / 2;
    for (let i = 0; i < values.length; i++) {
      if (i < this.length - 1) {
        result.push(null);
      } else {
        let sum = 0;
        for (let j = 0; j < this.length; j++) {
          sum += values[i - j] * (this.length - j);
        }
        result.push(sum / weightSum);
      }
    }
    return result;
  }

  _smma(values) {
    const result = [];
    let smma = null;
    for (let i = 0; i < values.length; i++) {
      if (smma === null) {
        if (i < this.length - 1) { result.push(null); continue; }
        let sum = 0;
        for (let j = i - this.length + 1; j <= i; j++) sum += values[j];
        smma = sum / this.length;
      } else {
        smma = (smma * (this.length - 1) + values[i]) / this.length;
      }
      result.push(smma);
    }
    return result;
  }
}
