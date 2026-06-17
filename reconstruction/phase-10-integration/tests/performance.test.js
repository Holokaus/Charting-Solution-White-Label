import { describe, it, expect, vi, beforeEach } from 'vitest';
import { WebGLRenderer } from '../src/core/WebGLRenderer.js';
import { LODRenderer } from '../src/core/LODRenderer.js';
import { VirtualScroll } from '../src/core/VirtualScroll.js';

describe('WebGLRenderer', () => {
  let canvas;
  beforeEach(() => {
    canvas = { getContext: vi.fn(() => null), width: 800, height: 600 };
    HTMLCanvasElement.prototype.getContext = vi.fn(() => null);
  });

  it('initializes without WebGL', () => {
    const r = new WebGLRenderer(canvas);
    r.init();
    expect(r.isSupported()).toBe(false);
  });

  it('handles resize', () => {
    const r = new WebGLRenderer(canvas);
    r.resize(1024, 768);
    expect(r.canvas).toBe(canvas);
  });

  it('destroy is safe when not initialized', () => {
    const r = new WebGLRenderer(canvas);
    r.destroy();
    expect(r._initialized).toBe(false);
  });

  it('drawLine is noop without gl', () => {
    const r = new WebGLRenderer(canvas);
    r.drawLine([0, 0, 1, 1], [1, 0, 0, 1]);
  });

  it('drawRect is noop without gl', () => {
    const r = new WebGLRenderer(canvas);
    r.drawRect([0, 0, 1, 0, 1, 1], [0, 1, 0, 1], true);
  });

  it('clear is noop without gl', () => {
    const r = new WebGLRenderer(canvas);
    r.clear(0, 0, 0);
  });
});

describe('LODRenderer', () => {
  it('defaults to auto mode', () => {
    const lod = new LODRenderer({}, {});
    expect(lod.getMode()).toBe('auto');
  });

  it('setMode changes mode', () => {
    const lod = new LODRenderer({}, {});
    lod.setMode('webgl');
    expect(lod.getMode()).toBe('webgl');
    lod.setMode('canvas');
    expect(lod.getMode()).toBe('canvas');
  });

  it('setMode ignores invalid mode', () => {
    const lod = new LODRenderer({}, {});
    lod.setMode('invalid');
    expect(lod.getMode()).toBe('auto');
  });

  it('computes LOD level', () => {
    const lod = new LODRenderer({}, {});
    lod.updateMetrics(100, 100);
    expect(lod.getLOD()).toBe(0);
    lod.updateMetrics(5000, 100);
    expect(lod.getLOD()).toBeGreaterThan(0);
  });

  it('simplify reduces points', () => {
    const lod = new LODRenderer({}, {});
    const data = Array(100).fill(0).map((_, i) => ({ x: i, y: i > 50 ? 100 : 0 }));
    const simplified = lod.simplify(data, 0.5);
    expect(simplified.length).toBeLessThan(data.length);
    expect(simplified[0]).toEqual(data[0]);
    expect(simplified[simplified.length - 1]).toEqual(data[data.length - 1]);
  });

  it('simplify returns empty for empty input', () => {
    const lod = new LODRenderer({}, {});
    expect(lod.simplify([])).toEqual([]);
  });

  it('simplify returns input for < 3 points', () => {
    const lod = new LODRenderer({}, {});
    const data = [{ x: 0, y: 0 }, { x: 1, y: 1 }];
    expect(lod.simplify(data)).toEqual(data);
  });

  it('render falls back to canvas', () => {
    const canvasRenderer = { render: vi.fn() };
    const mockWebGL = { isSupported: vi.fn(() => false) };
    const lod = new LODRenderer(canvasRenderer, mockWebGL);
    const result = lod.render();
    expect(result).toBe(false);
  });

  it('destroy is safe to call', () => {
    const mockWebGL = { destroy: vi.fn() };
    const lod = new LODRenderer({}, mockWebGL);
    lod.destroy();
    expect(mockWebGL.destroy).toHaveBeenCalled();
  });
});

describe('VirtualScroll', () => {
  it('computes visible range', () => {
    const vs = new VirtualScroll({ totalItems: 1000, itemHeight: 20, viewportHeight: 400, overscan: 2 });
    const range = vs.getVisibleRange();
    expect(range.start).toBe(0);
    expect(range.end).toBeGreaterThan(20);
  });

  it('scrollTo updates position', () => {
    const vs = new VirtualScroll({ totalItems: 100, itemHeight: 20, viewportHeight: 200 });
    vs.scrollTo(100);
    expect(vs.getScrollTop()).toBe(100);
  });

  it('scrollTo clamps to max', () => {
    const vs = new VirtualScroll({ totalItems: 10, itemHeight: 20, viewportHeight: 200 });
    vs.scrollTo(9999);
    expect(vs.getScrollTop()).toBeLessThan(9999);
  });

  it('getMaxScroll returns correct value', () => {
    const vs = new VirtualScroll({ totalItems: 50, itemHeight: 20, viewportHeight: 200 });
    expect(vs.getMaxScroll()).toBe(800);
  });

  it('getMaxScroll returns 0 when content fits', () => {
    const vs = new VirtualScroll({ totalItems: 5, itemHeight: 20, viewportHeight: 200 });
    expect(vs.getMaxScroll()).toBe(0);
  });

  it('getVisibleItems slices data', () => {
    const vs = new VirtualScroll({ totalItems: 100, itemHeight: 20, viewportHeight: 100 });
    const data = Array(100).fill(0).map((_, i) => i);
    const visible = vs.getVisibleItems(data);
    expect(visible.length).toBeLessThan(100);
    expect(visible.length).toBeGreaterThan(0);
  });

  it('getOffset returns pixel offset', () => {
    const vs = new VirtualScroll({ totalItems: 100, itemHeight: 20, viewportHeight: 100 });
    vs.scrollTo(50);
    const offset = vs.getOffset();
    expect(offset).toBeGreaterThanOrEqual(0);
  });

  it('setTotalItems triggers onChange', () => {
    const onChange = vi.fn();
    const vs = new VirtualScroll({ totalItems: 10, itemHeight: 20, viewportHeight: 200, onChange });
    vs.setTotalItems(50);
    expect(onChange).toHaveBeenCalled();
  });

  it('setViewportHeight triggers onChange', () => {
    const onChange = vi.fn();
    const vs = new VirtualScroll({ totalItems: 10, itemHeight: 20, viewportHeight: 200, onChange });
    vs.setViewportHeight(400);
    expect(onChange).toHaveBeenCalled();
  });

  it('destroy clears callback', () => {
    const onChange = vi.fn();
    const vs = new VirtualScroll({ totalItems: 10, itemHeight: 20, viewportHeight: 200, onChange });
    vs.destroy();
    vs.setTotalItems(50);
    expect(onChange).not.toHaveBeenCalled();
  });
});
