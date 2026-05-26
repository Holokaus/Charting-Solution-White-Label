import { describe, it, expect } from 'vitest';
import { BollingerBands } from '../src/studies/BollingerBands.js';

describe('BollingerBands', () => {
  const bars = [
    { close: 10 }, { close: 12 }, { close: 11 }, { close: 13 }, { close: 12 },
    { close: 14 }, { close: 13 }, { close: 15 }, { close: 14 }, { close: 16 }
  ];

  it('middle band is SMA', () => {
    const bb = new BollingerBands({ length: 5, mult: 2 });
    const result = bb.calculate(bars);
    expect(result[4].middle).toBeCloseTo((10+12+11+13+12)/5, 5);
  });

  it('upper band > middle > lower', () => {
    const bb = new BollingerBands({ length: 5, mult: 2 });
    const result = bb.calculate(bars);
    const valid = result.filter(r => r.middle !== null);
    for (const r of valid) {
      expect(r.upper).toBeGreaterThan(r.middle);
      expect(r.middle).toBeGreaterThan(r.lower);
    }
  });

  it('width increases with volatility', () => {
    const bb = new BollingerBands({ length: 5, mult: 2 });
    const volatileBars = [
      { close: 10 }, { close: 20 }, { close: 5 }, { close: 25 }, { close: 10 },
      { close: 30 }, { close: 5 }, { close: 35 }, { close: 10 }, { close: 40 }
    ];
    const result = bb.calculate(volatileBars);
    const width1 = result[4].upper - result[4].lower;
    const width2 = result[9].upper - result[9].lower;
    expect(width2).toBeGreaterThan(width1);
  });
});
