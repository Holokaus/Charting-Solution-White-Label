import { describe, it, expect, vi } from 'vitest';
import { CandlestickRenderer } from '../src/chart/series/CandlestickRenderer.js';
import { BarRenderer } from '../src/chart/series/BarRenderer.js';
import { LineRenderer } from '../src/chart/series/LineRenderer.js';
import { AreaRenderer } from '../src/chart/series/AreaRenderer.js';
import { BaselineRenderer } from '../src/chart/series/BaselineRenderer.js';
import { Legend } from '../src/chart/overlay/Legend.js';

function makeMockCtx() {
  return {
    save: vi.fn(), restore: vi.fn(), beginPath: vi.fn(),
    moveTo: vi.fn(), lineTo: vi.fn(), stroke: vi.fn(),
    fill: vi.fn(), closePath: vi.fn(),
    strokeStyle: '', fillStyle: '', lineWidth: 0,
    setLineDash: vi.fn(), arc: vi.fn(),
    fillRect: vi.fn(), strokeRect: vi.fn(),
    font: '', textAlign: '', textBaseline: '',
    measureText: vi.fn(() => ({ width: 20 })),
    fillText: vi.fn(),
    globalAlpha: 1,
    rect: vi.fn(),
    createLinearGradient: vi.fn(() => ({ addColorStop: vi.fn() }))
  };
}

function makeBars() {
  return [
    { time: 0, open: 100, high: 105, low: 95, close: 102, volume: 1000 },
    { time: 1, open: 102, high: 108, low: 100, close: 106, volume: 1200 },
    { time: 2, open: 106, high: 110, low: 104, close: 105, volume: 900 }
  ];
}

const mockViewport = { width: 800, height: 600, timeToX: (t) => t * 80, barSpacing: 6 };
const mockPriceScale = { priceToY: (p) => 600 - (p - 90) * 20, min: 90 };
const mockTimeScale = { formatLabel: () => '' };

describe('CandlestickRenderer', () => {
  it('renders candles without error', () => {
    const ctx = makeMockCtx();
    const r = new CandlestickRenderer();
    r.render(ctx, makeBars(), mockViewport, mockPriceScale, mockTimeScale, {});
    expect(ctx.beginPath).toHaveBeenCalled();
  });
});

describe('BarRenderer', () => {
  it('renders bars without error', () => {
    const ctx = makeMockCtx();
    const r = new BarRenderer();
    r.render(ctx, makeBars(), mockViewport, mockPriceScale, mockTimeScale, {});
    expect(ctx.beginPath).toHaveBeenCalled();
  });
});

describe('LineRenderer (series)', () => {
  it('renders line without error', () => {
    const ctx = makeMockCtx();
    const r = new LineRenderer();
    r.render(ctx, makeBars(), mockViewport, mockPriceScale, mockTimeScale, { color: '#2196F3' });
    expect(ctx.beginPath).toHaveBeenCalled();
  });
});

describe('AreaRenderer', () => {
  it('renders area without error', () => {
    const ctx = makeMockCtx();
    const r = new AreaRenderer();
    r.render(ctx, makeBars(), mockViewport, mockPriceScale, mockTimeScale, { lineColor: '#2196F3', topColor: 'rgba(33,150,243,0.3)' });
    expect(ctx.beginPath).toHaveBeenCalled();
  });
});

describe('BaselineRenderer', () => {
  it('renders baseline without error', () => {
    const ctx = makeMockCtx();
    const r = new BaselineRenderer();
    r.render(ctx, makeBars(), mockViewport, mockPriceScale, mockTimeScale, {});
    expect(ctx.beginPath).toHaveBeenCalled();
  });
});

describe('Legend', () => {
  it('renders legend without error', () => {
    const ctx = makeMockCtx();
    const l = new Legend();
    l.setSymbol('AAPL');
    l.setInterval('1D');
    l.updateOHLCV({ open: 100, high: 105, low: 95, close: 102, volume: 1000 });
    l.render(ctx, mockViewport, mockPriceScale, mockTimeScale, { textColor: '#fff' });
    expect(ctx.fillText).toHaveBeenCalled();
  });
});
