export class ZigZag {
  static inputs = [
    { name: 'deviation', type: 'float', min: 0.1, max: 50, default: 5 },
    { name: 'depth', type: 'integer', min: 1, max: 50, default: 10 }
  ];
  static outputs = ['ZigZag'];

  constructor(inputs = {}) {
    this.deviation = inputs.deviation || 5;
    this.depth = inputs.depth || 10;
  }

  calculate(bars) {
    if (!bars || bars.length < this.depth * 2) return [];
    const pct = this.deviation / 100;
    const highs = bars.map(b => b.high);
    const lows = bars.map(b => b.low);
    const result = new Array(bars.length).fill(null);
    let lastPivotIdx = 0;
    let lastPivotVal = highs[0];
    let isUp = false;
    for (let i = this.depth; i < bars.length - this.depth; i++) {
      let isHigh = true, isLow = true;
      for (let j = i - this.depth; j <= i + this.depth; j++) {
        if (j < 0 || j >= bars.length) continue;
        if (highs[j] > highs[i]) isHigh = false;
        if (lows[j] < lows[i]) isLow = false;
      }
      if (isHigh || isLow) {
        if (isHigh) {
          if (isUp && highs[i] <= lastPivotVal) continue;
          if (!isUp || i - lastPivotIdx >= this.depth) {
            if (!isUp && Math.abs(highs[i] - lastPivotVal) / lastPivotVal >= pct) {
              result[i] = highs[i];
              lastPivotIdx = i; lastPivotVal = highs[i]; isUp = true;
            } else if (isUp) {
              result[i] = highs[i];
              lastPivotIdx = i; lastPivotVal = highs[i];
            }
          }
        }
        if (isLow) {
          if (!isUp && lows[i] >= lastPivotVal) continue;
          if (isUp || i - lastPivotIdx >= this.depth) {
            if (isUp && Math.abs(lows[i] - lastPivotVal) / Math.abs(lastPivotVal) >= pct) {
              result[i] = lows[i];
              lastPivotIdx = i; lastPivotVal = lows[i]; isUp = false;
            } else if (!isUp) {
              result[i] = lows[i];
              lastPivotIdx = i; lastPivotVal = lows[i];
            }
          }
        }
      }
    }
    result[0] = bars[0].close;
    result[bars.length - 1] = bars[bars.length - 1].close;
    let lastVal = result[0];
    for (let i = 1; i < result.length; i++) {
      if (result[i] !== null) { lastVal = result[i]; }
      else { result[i] = lastVal; }
    }
    return result;
  }
}
