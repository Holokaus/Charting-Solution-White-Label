export class ParabolicSAR {
  static inputs = [
    { name: 'startAF', type: 'float', min: 0.001, max: 1, default: 0.02 },
    { name: 'maxAF', type: 'float', min: 0.01, max: 2, default: 0.2 },
    { name: 'afStep', type: 'float', min: 0.001, max: 1, default: 0.02 }
  ];
  static outputs = ['PSAR'];

  constructor(inputs = {}) {
    this.startAF = inputs.startAF || 0.02;
    this.maxAF = inputs.maxAF || 0.2;
    this.afStep = inputs.afStep || 0.02;
  }

  calculate(bars) {
    if (!bars || bars.length < 2) return [];
    const result = [null];
    let af = this.startAF;
    let isUp = bars[1].high > bars[0].high;
    let ep = isUp ? bars[1].high : bars[1].low;
    let sar = isUp ? bars[0].low : bars[0].high;
    for (let i = 1; i < bars.length; i++) {
      if (isUp) {
        sar = sar + af * (ep - sar);
        if (sar > bars[i].low) { isUp = false; sar = ep; af = this.startAF; ep = bars[i].low; }
        else { if (bars[i].high > ep) { ep = bars[i].high; af = Math.min(af + this.afStep, this.maxAF); } }
      } else {
        sar = sar + af * (ep - sar);
        if (sar < bars[i].high) { isUp = true; sar = ep; af = this.startAF; ep = bars[i].high; }
        else { if (bars[i].low < ep) { ep = bars[i].low; af = Math.min(af + this.afStep, this.maxAF); } }
      }
      result.push(sar);
    }
    return result;
  }
}
