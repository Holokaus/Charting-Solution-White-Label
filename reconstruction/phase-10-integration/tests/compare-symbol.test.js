import { describe, it, expect } from 'vitest';
import { CompareSymbol } from '../src/chart/CompareSymbol.js';

describe('CompareSymbol', () => {
  const mainBars = [
    { time: 1, close: 100 }, { time: 2, close: 102 }, { time: 3, close: 101 }
  ];
  const compareBars = [
    { time: 1, close: 50 }, { time: 2, close: 55 }, { time: 3, close: 53 }
  ];

  it('normalizes to percentage change from first bar', () => {
    const cs = new CompareSymbol('TEST', compareBars);
    const result = cs.calculate(mainBars);
    expect(result.length).toBe(3);
    expect(result[0].value).toBe(0);
    expect(result[1].value).toBeCloseTo(10, 1);
    expect(result[2].value).toBeCloseTo(6, 1);
  });

  it('returns empty when not visible', () => {
    const cs = new CompareSymbol('TEST', compareBars);
    cs.setVisible(false);
    expect(cs.calculate(mainBars)).toEqual([]);
  });

  it('returns empty for empty bars', () => {
    const cs = new CompareSymbol('TEST', []);
    expect(cs.calculate(mainBars)).toEqual([]);
  });
});
