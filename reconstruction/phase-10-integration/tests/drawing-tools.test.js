import { describe, it, expect } from 'vitest';
import { toolRegistry } from '../src/index.js';

describe('Drawing Tools', () => {
  it('has 18 registered tools', () => {
    expect(toolRegistry.getNames().length).toBe(18);
  });

  it('can create TrendLine', () => {
    const tool = toolRegistry.create('TrendLine');
    expect(tool.name).toBe('TrendLine');
    expect(tool.maxPoints).toBe(2);
  });

  it('can create FibonacciRetracement', () => {
    const tool = toolRegistry.create('FibonacciRetracement');
    expect(tool.name).toBe('FibonacciRetracement');
    expect(tool.style.levels).toEqual([0, 23.6, 38.2, 50, 61.8, 78.6, 100]);
  });

  it('TrendLine hitTest works', () => {
    const tool = toolRegistry.create('TrendLine');
    tool.points = [{ time: 0, price: 100 }, { time: 10, price: 110 }];
    const viewport = { width: 800, height: 600, timeToX: (t) => t * 80, barSpacing: 6 };
    const priceScale = { priceToY: (p) => 600 - (p - 90) * 20 };
    const timeScale = { formatLabel: () => '' };
    expect(tool.hitTest(400, 300, viewport, priceScale, timeScale, 10)).toBe(true);
  });
});
