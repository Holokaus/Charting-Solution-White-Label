export class KeyboardShortcuts {
  constructor(widget) {
    this.widget = widget;
    this.bindings = new Map();
    this._handlers = {};
    this._keyActionMap = {
      '+': 'zoomIn', '=': 'zoomIn', '-': 'zoomOut',
      'arrowleft': 'panLeft', 'arrowright': 'panRight',
      'delete': 'deleteTool', 'backspace': 'deleteTool'
    };
    this._enabled = true;
    this._handler = this._onKeyDown.bind(this);
    document.addEventListener('keydown', this._handler);
  }

  register(keyCombo, action) {
    this.bindings.set(keyCombo, action);
  }

  on(action, handler) {
    if (!this._handlers[action]) this._handlers[action] = [];
    this._handlers[action].push(handler);
  }

  _trigger(action) {
    const handlers = this._handlers[action] || [];
    for (const h of handlers) h();
  }

  _onKeyDown(e) {
    if (!this._enabled) return;
    const key = e.key;
    const ctrl = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;

    if (ctrl && key.toLowerCase() === 'z') {
      e.preventDefault();
      if (shift) {
        this._trigger('redo');
        const binding = this.bindings.get('ctrl+shift+z');
        if (binding) binding();
      } else {
        this._trigger('undo');
        const binding = this.bindings.get('ctrl+z');
        if (binding) binding();
      }
      return;
    }
    if (ctrl && key.toLowerCase() === 's') {
      e.preventDefault();
      this._trigger('save');
      const binding = this.bindings.get('ctrl+s');
      if (binding) binding();
      return;
    }

    const combo = [];
    if (ctrl) combo.push('ctrl');
    if (shift) combo.push('shift');
    if (e.altKey) combo.push('alt');
    combo.push(key.toLowerCase());
    const comboStr = combo.join('+');

    const action = this._keyActionMap[key.toLowerCase()];
    if (action) {
      e.preventDefault();
      this._trigger(action);
    }

    if (this.bindings.has(comboStr)) {
      e.preventDefault();
      this.bindings.get(comboStr)();
    }
  }

  destroy() {
    this._enabled = false;
    document.removeEventListener('keydown', this._handler);
  }

  setEnabled(enabled) {
    this._enabled = enabled;
  }
}
