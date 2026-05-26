import { describe, it, expect } from 'vitest';
import { PriceScale, PriceMode } from '../src/chart/PriceScale.js';

describe('PriceScale', () => {
  const bars = [
    { close: 100, low: 95, high: 105 },
    { close: 110, low: 105, high: 115 },
    { close: 105, low: 100, high: 110 },
    { close: 120, low: 115, high: 125 },
    { close: 95, low: 90, high: 100 }
  ];

  it('LINEAR mode: priceToY and yToPrice are inverses', () => {
    const scale = new PriceScale(600, PriceMode.LINEAR);
    scale.autoScale(bars);
    const y = scale.priceToY(110);
    const price = scale.yToPrice(y);
    expect(Math.abs(price - 110)).toBeLessThan(0.01);
  });

  it('LOG mode: handles positive prices', () => {
    const scale = new PriceScale(600, PriceMode.LOG);
    scale.autoScale(bars);
    const y = scale.priceToY(110);
    expect(y).toBeGreaterThan(0);
    expect(y).toBeLessThan(600);
  });

  it('PERCENTAGE mode: base is first bar', () => {
    const scale = new PriceScale(600, PriceMode.PERCENTAGE);
    scale.autoScale(bars);
    const y0 = scale.priceToY(100);
    const y1 = scale.priceToY(110);
    expect(y0).toBeGreaterThan(y1);
  });

  it('INDEXED_TO_100 mode: base is 100', () => {
    const scale = new PriceScale(600, PriceMode.INDEXED_TO_100);
    scale.autoScale(bars);
    const y = scale.priceToY(110);
    const price = scale.yToPrice(y);
    expect(Math.abs(price - 110)).toBeLessThan(0.01);
  });
});
