import { describe, it, expect } from 'vitest';
import { RSI } from '../src/studies/RSI.js';

describe('RSI', () => {
  const bars = [
    { close: 44 }, { close: 44 }, { close: 44 }, { close: 44 }, { close: 45 },
    { close: 43 }, { close: 44 }, { close: 45 }, { close: 47 }, { close: 48 },
    { close: 48 }, { close: 48 }, { close: 49 }, { close: 50 }, { close: 51 },
    { close: 52 }
  ];

  it('calculates RSI for known values', () => {
    const rsi = new RSI({ length: 14 });
    const result = rsi.calculate(bars);
    expect(result[0]).toBeNull();
    expect(result[15]).not.toBeNull();
    expect(result[15]).toBeGreaterThan(0);
    expect(result[15]).toBeLessThan(100);
  });

  it('RSI is bounded 0-100', () => {
    const rsi = new RSI({ length: 2 });
    const extremeBars = [
      { close: 10 }, { close: 20 }, { close: 30 }, { close: 40 }
    ];
    const result = rsi.calculate(extremeBars);
    const valid = result.filter(v => v !== null);
    expect(Math.max(...valid)).toBeLessThanOrEqual(100);
    expect(Math.min(...valid)).toBeGreaterThanOrEqual(0);
  });
});
