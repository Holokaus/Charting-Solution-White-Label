import { describe, it, expect } from 'vitest';
import { MovingAverage } from '../src/studies/MovingAverage.js';

describe('MovingAverage', () => {
  const bars = [
    { close: 10 }, { close: 11 }, { close: 12 }, { close: 13 }, { close: 14 },
    { close: 15 }, { close: 16 }, { close: 17 }, { close: 18 }, { close: 19 }
  ];

  it('SMA with length 3', () => {
    const ma = new MovingAverage({ type: 'SMA', length: 3, source: 'close' });
    const result = ma.calculate(bars);
    expect(result[0]).toBeNull();
    expect(result[1]).toBeNull();
    expect(result[2]).toBe(11);
    expect(result[3]).toBe(12);
    expect(result[9]).toBe(18);
  });

  it('EMA with length 3', () => {
    const ma = new MovingAverage({ type: 'EMA', length: 3, source: 'close' });
    const result = ma.calculate(bars);
    expect(result[0]).toBeNull();
    expect(result[1]).toBeNull();
    expect(result[2]).not.toBeNull();
    expect(result[9]).toBeGreaterThan(result[2]);
  });

  it('WMA with length 3', () => {
    const ma = new MovingAverage({ type: 'WMA', length: 3, source: 'close' });
    const result = ma.calculate(bars);
    expect(result[2]).toBeCloseTo((10*1 + 11*2 + 12*3) / 6, 5);
  });

  it('SMMA with length 3', () => {
    const ma = new MovingAverage({ type: 'SMMA', length: 3, source: 'close' });
    const result = ma.calculate(bars);
    expect(result[2]).toBe(11);
    expect(result[3]).toBeCloseTo((11*2 + 13)/3, 5);
  });
});
