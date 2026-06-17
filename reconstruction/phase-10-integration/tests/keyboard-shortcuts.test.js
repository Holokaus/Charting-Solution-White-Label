import { describe, it, expect, vi } from 'vitest';
import { KeyboardShortcuts } from '../src/input/KeyboardShortcuts.js';

describe('KeyboardShortcuts', () => {
  it('triggers zoomIn on +', () => {
    const ks = new KeyboardShortcuts({});
    const handler = vi.fn();
    ks.on('zoomIn', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '+' }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });

  it('triggers undo on Ctrl+Z', () => {
    const ks = new KeyboardShortcuts({});
    const handler = vi.fn();
    ks.on('undo', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });

  it('triggers delete on Delete', () => {
    const ks = new KeyboardShortcuts({});
    const handler = vi.fn();
    ks.on('deleteTool', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Delete' }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });

  it('does not trigger when disabled', () => {
    const ks = new KeyboardShortcuts({});
    ks.setEnabled(false);
    const handler = vi.fn();
    ks.on('zoomIn', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '+' }));
    expect(handler).not.toHaveBeenCalled();
    ks.destroy();
  });

  it('registers and triggers custom combo', () => {
    const ks = new KeyboardShortcuts({});
    const fn = vi.fn();
    ks.register('ctrl+s', fn);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 's', ctrlKey: true }));
    expect(fn).toHaveBeenCalled();
    ks.destroy();
  });

  it('triggers redo on Ctrl+Shift+Z', () => {
    const ks = new KeyboardShortcuts({});
    const handler = vi.fn();
    ks.on('redo', handler);
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: true }));
    expect(handler).toHaveBeenCalled();
    ks.destroy();
  });
});
