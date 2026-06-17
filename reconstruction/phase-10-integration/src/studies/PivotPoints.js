export class PivotPoints {
  static inputs = [
    { name: 'type', type: 'select', options: ['Traditional', 'Fibonacci', 'Woodie', 'Camarilla'], default: 'Traditional' }
  ];
  static outputs = ['PP', 'R1', 'R2', 'R3', 'S1', 'S2', 'S3'];

  constructor(inputs = {}) {
    this.type = inputs.type || 'Traditional';
  }

  calculate(bars) {
    if (!bars || bars.length < 2) return [];
    const result = [];
    for (let i = 0; i < bars.length; i++) {
      if (i === 0) {
        result.push({ PP: null, R1: null, R2: null, R3: null, S1: null, S2: null, S3: null });
      } else {
        const prev = bars[i - 1];
        const H = prev.high, L = prev.low, C = prev.close;
        const P = (H + L + C) / 3;
        let PP, R1, R2, R3, S1, S2, S3;
        if (this.type === 'Traditional') {
          PP = P; R1 = 2 * P - L; R2 = P + (H - L); R3 = H + 2 * (P - L);
          S1 = 2 * P - H; S2 = P - (H - L); S3 = L - 2 * (H - P);
        } else if (this.type === 'Fibonacci') {
          PP = P; R1 = P + (H - L) * 0.382; R2 = P + (H - L) * 0.618; R3 = P + (H - L) * 1;
          S1 = P - (H - L) * 0.382; S2 = P - (H - L) * 0.618; S3 = P - (H - L) * 1;
        } else {
          PP = (H + L + C) / 3; R1 = C + (H - L) * 1.1 / 12; R2 = C + (H - L) * 1.1 / 6; R3 = C + (H - L) * 1.1 / 4;
          S1 = C - (H - L) * 1.1 / 12; S2 = C - (H - L) * 1.1 / 6; S3 = C - (H - L) * 1.1 / 4;
        }
        result.push({ PP, R1, R2, R3, S1, S2, S3 });
      }
    }
    return result;
  }
}
