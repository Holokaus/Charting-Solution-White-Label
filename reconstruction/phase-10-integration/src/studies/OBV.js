export class OBV {
  static inputs = [];
  static outputs = ['OBV'];

  constructor(inputs = {}) {}

  calculate(bars) {
    if (!bars || bars.length < 2) return [];
    const result = [0];
    for (let i = 1; i < bars.length; i++) {
      if (bars[i].close > bars[i - 1].close) {
        result.push(result[i - 1] + bars[i].volume);
      } else if (bars[i].close < bars[i - 1].close) {
        result.push(result[i - 1] - bars[i].volume);
      } else {
        result.push(result[i - 1]);
      }
    }
    return result;
  }
}
