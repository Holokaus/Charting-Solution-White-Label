const SYNC_TYPES = ['symbol', 'interval', 'timeframe', 'crosshair', 'dateRange'];

const DEBOUNCE_MS = 100;

export class CrossFrameSync {
  constructor(bridge) {
    this._bridge = bridge;
    this._enabled = new Set(SYNC_TYPES);
    this._debounceTimers = {};
    this._onChange = null;
  }

  enable(type) {
    if (SYNC_TYPES.includes(type)) {
      this._enabled.add(type);
    }
  }

  disable(type) {
    this._enabled.delete(type);
  }

  isEnabled(type) {
    return this._enabled.has(type);
  }

  getEnabledTypes() {
    return Array.from(this._enabled);
  }

  setOnChange(handler) {
    this._onChange = handler;
  }

  propagate(type, data) {
    if (!this._enabled.has(type)) return;
    if (this._debounceTimers[type]) {
      clearTimeout(this._debounceTimers[type]);
    }
    this._debounceTimers[type] = setTimeout(() => {
      this._debounceTimers[type] = null;
      this._bridge.send(`sync:${type}`, data).catch(() => {});
      if (this._onChange) {
        this._onChange(type, data);
      }
    }, DEBOUNCE_MS);
  }

  handleIncoming(type, data) {
    const syncType = type.startsWith('sync:') ? type.slice(5) : null;
    if (!syncType || !this._enabled.has(syncType)) return;
    if (this._onChange) {
      this._onChange(syncType, data);
    }
  }

  destroy() {
    for (const timer of Object.values(this._debounceTimers)) {
      if (timer) clearTimeout(timer);
    }
    this._debounceTimers = {};
    this._enabled.clear();
    this._onChange = null;
  }
}
