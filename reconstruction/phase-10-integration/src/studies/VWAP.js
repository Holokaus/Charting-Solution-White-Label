export class VWAP {
  static inputs = [];
  static outputs = ['VWAP'];

  constructor(inputs = {}) {}

  calculate(bars) {
    if (!bars || bars.length === 0) return [];
    let cumPV = 0, cumVol = 0;
    const result = [];
    for (const bar of bars) {
      const tp = (bar.high + bar.low + bar.close) / 3;
      cumPV += tp * bar.volume;
      cumVol += bar.volume;
      result.push(cumVol === 0 ? null : cumPV / cumVol);
    }
    return result;
  }
}
