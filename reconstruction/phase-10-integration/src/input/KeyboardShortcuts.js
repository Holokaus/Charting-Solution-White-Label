export class KeyboardShortcuts {
  constructor(chart, options = {}) {
    this.chart = chart;
    this.options = {
      zoomStep: 0.1,
      panStep: 50,
      ...options
    };
    this._handlers = {};
    this._enabled = true;
    this._init();
  }

  _init() {
    this._onKeyDown = (e) => {
      if (!this._enabled) return;
      const key = e.key;
      const ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && key === 'z') { e.preventDefault(); this._trigger('undo'); return; }
      if (ctrl && key === 's') { e.preventDefault(); this._trigger('save'); return; }
      if (key === '+' || key === '=') { e.preventDefault(); this._trigger('zoomIn'); return; }
      if (key === '-') { e.preventDefault(); this._trigger('zoomOut'); return; }
      if (key === 'ArrowLeft') { e.preventDefault(); this._trigger('panLeft'); return; }
      if (key === 'ArrowRight') { e.preventDefault(); this._trigger('panRight'); return; }
      if (key === 'Delete' || key === 'Backspace') { e.preventDefault(); this._trigger('delete'); return; }
    };
    document.addEventListener('keydown', this._onKeyDown);
  }

  on(action, handler) {
    if (!this._handlers[action]) this._handlers[action] = [];
    this._handlers[action].push(handler);
  }

  _trigger(action) {
    const handlers = this._handlers[action] || [];
    for (const h of handlers) h();
  }

  destroy() {
    this._enabled = false;
    document.removeEventListener('keydown', this._onKeyDown);
  }

  setEnabled(enabled) {
    this._enabled = enabled;
  }
}
