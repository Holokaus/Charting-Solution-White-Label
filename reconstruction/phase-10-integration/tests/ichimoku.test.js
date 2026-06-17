import { describe, it, expect } from 'vitest';
import { Ichimoku } from '../src/studies/Ichimoku.js';

describe('Ichimoku', () => {
  const bars = [];
  for (let i = 0; i < 60; i++) {
    bars.push({ time: i, open: 100 + i, high: 110 + i, low: 90 + i, close: 105 + i });
  }

  it('produces all 5 outputs (Tenkan, Kijun, SenkouA, SenkouB, Chikou)', () => {
    const ichimoku = new Ichimoku();
    const result = ichimoku.calculate(bars);
    expect(result.length).toBe(60);
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toHaveProperty('Tenkan');
      expect(result[i]).toHaveProperty('Kijun');
      expect(result[i]).toHaveProperty('SenkouA');
      expect(result[i]).toHaveProperty('SenkouB');
      expect(result[i]).toHaveProperty('Chikou');
    }
  });

  it('cloud is ahead (SenkouA and SenkouB shift forward)', () => {
    const ichimoku = new Ichimoku();
    const result = ichimoku.calculate(bars);
    const last = result[result.length - 1];
    expect(typeof last.SenkouA).toBe('number');
    expect(typeof last.SenkouB).toBe('number');
    const nonNullTenkan = result.filter(r => r.Tenkan !== null);
    expect(nonNullTenkan.length).toBeGreaterThan(0);
  });
});
