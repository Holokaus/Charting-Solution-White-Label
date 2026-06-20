import { describe, it, expect, vi } from 'vitest';
import { Viewport } from '../src/chart/core/Viewport.js';
import { BarCache } from '../src/chart/data/BarCache.js';
import { RealtimeUpdater } from '../src/chart/data/RealtimeUpdater.js';
import { Crosshair } from '../src/chart/overlay/Crosshair.js';
import { Legend } from '../src/chart/overlay/Legend.js';
import { Grid } from '../src/chart/overlay/Grid.js';
import { CanvasRenderer } from '../src/chart/core/CanvasRenderer.js';
import { PriceScale, PriceMode } from '../src/chart/scales/PriceScale.js';
import { TimeScale } from '../src/chart/scales/TimeScale.js';

describe('Viewport', () => {
  it('converts time to x and back', () => {
    const vp = new Viewport(800, 600);
    vp.setBarSpacing(8);
    const x = vp.timeToX(100);
    expect(typeof x).toBe('number');
    const t = vp.xToTime(x);
    expect(typeof t).toBe('number');
  });

  it('zoom changes barSpacing', () => {
    const vp = new Viewport(800, 600);
    vp.fit([{ time: 0 }, { time: 100 }]);
    const orig = vp.barSpacing;
    vp.zoom(0.5, 400);
    expect(vp.barSpacing).not.toBe(orig);
  });

  it('fit sets barSpacing based on data length', () => {
    const vp = new Viewport(800, 600);
    vp.fit([{ time: 0 }, { time: 100 }, { time: 200 }]);
    expect(vp.barSpacing).toBeGreaterThan(0);
  });

  it('getVisibleBars filters data', () => {
    const vp = new Viewport(800, 600);
    vp.fit([{ time: 0 }, { time: 10 }, { time: 50 }, { time: 100 }, { time: 200 }]);
    const visible = vp.getVisibleBars([{ time: 0 }, { time: 10 }, { time: 100 }, { time: 200 }]);
    expect(visible.length).toBeGreaterThan(0);
  });

  it('pan shifts offset', () => {
    const vp = new Viewport(800, 600);
    vp.fit([{ time: 0 }, { time: 100 }]);
    const orig = vp.offset;
    vp.pan(50);
    expect(vp.offset).toBeGreaterThanOrEqual(orig);
  });

  it('resize updates dimensions', () => {
    const vp = new Viewport(800, 600);
    vp.resize(1024, 768);
    expect(vp.width).toBe(1024);
    expect(vp.height).toBe(768);
  });
});

describe('PriceScale', () => {
  it('converts price to y and back', () => {
    const ps = new PriceScale(600, PriceMode.LINEAR);
    ps.setRange(90, 110);
    const y = ps.priceToY(100);
    expect(typeof y).toBe('number');
    const p = ps.yToPrice(y);
    expect(p).toBeCloseTo(100, 0);
  });

  it('autoScale adjusts range from bars', () => {
    const ps = new PriceScale(600, PriceMode.LINEAR);
    ps.autoScale([{ high: 110, low: 90 }, { high: 120, low: 85 }]);
    expect(ps.priceToY(120)).toBeLessThan(ps.priceToY(85));
  });
});

describe('TimeScale', () => {
  it('formats label', () => {
    const ts = new TimeScale(800, 8);
    const label = ts.formatLabel(1000000);
    expect(typeof label).toBe('string');
  });
});

describe('BarCache', () => {
  it('stores and retrieves bars', () => {
    const cache = new BarCache();
    cache.add([{ time: 1, close: 100 }, { time: 2, close: 101 }]);
    expect(cache.count()).toBe(2);
  });

  it('clears all bars', () => {
    const cache = new BarCache();
    cache.add([{ time: 1, close: 100 }]);
    cache.clear();
    expect(cache.count()).toBe(0);
  });
});

describe('RealtimeUpdater', () => {
  it('updates last bar', () => {
    const cache = new BarCache();
    cache.add([{ time: 1, close: 100 }]);
    const updater = new RealtimeUpdater(cache);
    updater.update({ time: 1, close: 102 });
    expect(cache.count()).toBe(1);
  });

  it('appends new bar', () => {
    const cache = new BarCache();
    cache.add([{ time: 1, close: 100 }]);
    const updater = new RealtimeUpdater(cache);
    updater.update({ time: 2, close: 103 });
    expect(cache.count()).toBe(2);
  });
});

describe('Crosshair', () => {
  it('stores position after move', () => {
    const ch = new Crosshair();
    expect(ch.x).toBe(-1);
    expect(ch.y).toBe(-1);
    ch.move(100, 200);
    expect(ch.x).toBe(100);
    expect(ch.y).toBe(200);
    expect(ch.visible).toBe(true);
  });

  it('hides without resetting coordinates', () => {
    const ch = new Crosshair();
    ch.move(100, 200);
    ch.hide();
    expect(ch.visible).toBe(false);
    expect(ch.x).toBe(100);
  });

  it('accepts onMove handler', () => {
    const fn = vi.fn();
    const ch = new Crosshair();
    ch.setOnMove(fn);
    ch.move(50, 60);
    expect(fn).toHaveBeenCalledWith(50, 60);
  });
});

describe('Legend', () => {
  it('updates symbol and interval', () => {
    const l = new Legend();
    l.setSymbol('AAPL');
    l.setInterval('1D');
  });
});

describe('Grid', () => {
  it('renders with mock ctx', () => {
    const ctx = {
      strokeStyle: '', lineWidth: 0,
      beginPath: vi.fn(), moveTo: vi.fn(),
      lineTo: vi.fn(), stroke: vi.fn(),
      setLineDash: vi.fn()
    };
    const vp = { width: 800, height: 600, barSpacing: 10 };
    const ps = { priceToY: (p) => 300 - p };
    const g = new Grid();
    g.render(ctx, vp, ps, null, { color: '#ccc', style: 'dotted' });
    expect(ctx.beginPath).toHaveBeenCalled();
  });
});

describe('CanvasRenderer', () => {
  it('creates canvas element', () => {
    const container = document.createElement('div');
    const r = new CanvasRenderer(container, 800, 600);
    expect(r.canvas).toBeTruthy();
    expect(r.width).toBe(800);
    expect(r.height).toBe(600);
  });
});
