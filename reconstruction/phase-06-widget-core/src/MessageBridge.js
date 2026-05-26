export const MESSAGE_TYPES = Object.freeze({
  WIDGET_INIT: 'widget:init',
  WIDGET_READY: 'widget:ready',
  CHART_SET_SYMBOL: 'chart:setSymbol',
  CHART_UPDATE: 'chart:update',
  CHART_RESIZE: 'chart:resize',
  DRAWING_ADD: 'drawing:add',
  DRAWING_REMOVE: 'drawing:remove',
  STUDY_ADD: 'study:add',
  STUDY_REMOVE: 'study:remove',
  THEME_CHANGE: 'theme:change',
  LAYOUT_SAVE: 'layout:save',
  LAYOUT_LOAD: 'layout:load'
});

export class MessageBridge {
  constructor(targetWindow, origin = '*') {
    this._target = targetWindow;
    this._origin = origin;
    this._pending = new Map();
    this._handlers = new Map();
    this._listener = this._onMessage.bind(this);
    window.addEventListener('message', this._listener);
  }

  send(type, payload, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const id = crypto.randomUUID();
      const timer = setTimeout(() => {
        this._pending.delete(id);
        reject(new Error(`Message timeout: ${type}`));
      }, timeout);
      this._pending.set(id, { resolve, reject, timer });
      this._target.postMessage({ id, type, payload, timestamp: Date.now() }, this._origin);
    });
  }

  on(type, handler) {
    this._handlers.set(type, handler);
  }

  off(type) {
    this._handlers.delete(type);
  }

  destroy() {
    window.removeEventListener('message', this._listener);
    for (const { timer, reject } of this._pending.values()) {
      clearTimeout(timer);
      reject(new Error('Bridge destroyed'));
    }
    this._pending.clear();
    this._handlers.clear();
  }

  _onMessage(event) {
    const { id, type, payload, error } = event.data || {};
    if (!id && !type) return;
    if (id && this._pending.has(id)) {
      const { resolve, reject, timer } = this._pending.get(id);
      clearTimeout(timer);
      this._pending.delete(id);
      if (error) {
        reject(new Error(error));
      } else {
        resolve(payload);
      }
    }
    if (type && this._handlers.has(type)) {
      this._handlers.get(type)(payload, { id, type, timestamp: event.data.timestamp });
    }
  }
}
