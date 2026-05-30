import { describe, it, expect, vi } from 'vitest';
import { KeyboardShortcuts } from '../src/input/KeyboardShortcuts.js';

describe('KeyboardShortcuts', () => {
  it('triggers zoomIn on +', () => {
    const chart = {};
    const ks = new KeyboardShortcuts(chart);
    const handler = vi.fn();
    ks.on('zoomIn', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '+' }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });

  it('triggers undo on Ctrl+Z', () => {
    const chart = {};
    const ks = new KeyboardShortcuts(chart);
    const handler = vi.fn();
    ks.on('undo', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });

  it('triggers delete on Delete', () => {
    const chart = {};
    const ks = new KeyboardShortcuts(chart);
    const handler = vi.fn();
    ks.on('delete', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete' }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });

  it('does not trigger when disabled', () => {
    const chart = {};
    const ks = new KeyboardShortcuts(chart);
    ks.setEnabled(false);
    const handler = vi.fn();
    ks.on('zoomIn', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '+' }));
    expect(handler).not.toHaveBeenCalled();
    ks.destroy();
  });
});
