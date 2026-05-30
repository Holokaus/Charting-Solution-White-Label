import { describe, it, expect, vi } from 'vitest';
import { Screenshot } from '../src/export/Screenshot.js';

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
