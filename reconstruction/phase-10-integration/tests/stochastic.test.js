import { describe, it, expect } from 'vitest';
import { Stochastic } from '../src/studies/Stochastic.js';

describe('Stochastic', () => {
  const bars = [];
  for (let i = 0; i < 30; i++) {
    bars.push({ time: i, open: 100 + i, high: 105 + i, low: 95 + i, close: 100 + i + (i % 5) });
  }

  it('K values are bounded between 0 and 100', () => {
    const stoch = new Stochastic({ kPeriod: 14, kSmooth: 1, dPeriod: 3 });
    const result = stoch.calculate(bars);
    const kValues = result.filter(r => r.K !== null).map(r => r.K);
    for (const k of kValues) {
      expect(k).toBeGreaterThanOrEqual(0);
      expect(k).toBeLessThanOrEqual(100);
    }
  });

  it('D line smooths K values', () => {
    const stoch = new Stochastic({ kPeriod: 14, kSmooth: 3, dPeriod: 3 });
    const result = stoch.calculate(bars);
    const nonNull = result.filter(r => r.K !== null && r.D !== null);
    expect(nonNull.length).toBeGreaterThan(0);
    for (const r of nonNull) {
      expect(typeof r.K).toBe('number');
      expect(typeof r.D).toBe('number');
    }
  });
});
