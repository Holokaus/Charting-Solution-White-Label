import { describe, it, expect, vi } from 'vitest';
import { Screenshot } from '../src/export/Screenshot.js';
import { ScreenshotExport } from '../src/export/ScreenshotExport.js';

describe('Screenshot', () => {
  it('returns null for no canvas', () => {
    const ss = new Screenshot(null);
    expect(ss.toDataURL()).toBeNull();
  });

  it('calls toDataURL on canvas', () => {
    const mockCanvas = { toDataURL: vi.fn(() => 'data:image/png;base64,abc') };
    const ss = new Screenshot(mockCanvas);
    const result = ss.toDataURL('image/png', 0.9);
    expect(result).toBe('data:image/png;base64,abc');
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith('image/png', 0.9);
  });
});

describe('ScreenshotExport', () => {
  it('generates data URL via static method', () => {
    const mockCanvas = { toDataURL: vi.fn(() => 'data:image/png;base64,abc') };
    const result = ScreenshotExport.toDataURL(mockCanvas, 'image/png', 0.9);
    expect(result).toBe('data:image/png;base64,abc');
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith('image/png', 0.9);
  });

  it('exportPNG triggers download', () => {
    const link = { click: vi.fn() };
    const mockFn = vi.fn(() => link);
    document.body.appendChild = mockFn;
    document.body.removeChild = mockFn;
    const mockCanvas = { toDataURL: vi.fn(() => 'data:image/png;base64,abc') };
    ScreenshotExport.exportPNG(mockCanvas, 'test.png');
    expect(mockCanvas.toDataURL).toHaveBeenCalledWith('image/png');
  });
});
