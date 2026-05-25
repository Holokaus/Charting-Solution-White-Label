export class IFrameHost {
  constructor(containerSelector) {
    this._container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;
    this._iframe = null;
    this._messageHandlers = new Map();
    this._resizeHandler = null;
    this._init();
  }

  _init() {
    if (!this._container) {
      console.warn('IFrameHost: container not found');
      return;
    }

    this._iframe = document.createElement('iframe');
    this._iframe.style.width = '100%';
    this._iframe.style.height = '100%';
    this._iframe.style.border = 'none';
    this._iframe.style.background = '#131722';
    this._iframe.title = 'Chart';
    this._container.appendChild(this._iframe);

    this._resizeHandler = () => this._resize();
    window.addEventListener('resize', this._resizeHandler);
    window.addEventListener('message', (event) => this._onMessage(event));

    this._resize();
    this._renderPlaceholder();
  }

  _resize() {
    if (this._iframe && this._container) {
      const rect = this._container.getBoundingClientRect();
      this._iframe.width = rect.width;
      this._iframe.height = rect.height;
    }
  }

  _renderPlaceholder() {
    const doc = this._iframe.contentDocument || this._iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; background: #131722; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: -apple-system, BlinkMacSystemFont, sans-serif; color: #d1d4dc; }
          .placeholder { text-align: center; }
          .placeholder h2 { margin: 0 0 8px; font-weight: 400; color: #787b86; }
          .placeholder p { margin: 0; font-size: 13px; color: #434651; }
          .grid { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; pointer-events: none; }
        </style>
      </head>
      <body>
        <div class="placeholder">
          <h2>Chart Placeholder</h2>
          <p>Widget initialized successfully</p>
        </div>
        <svg class="grid" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d4dc" stroke-width="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </body>
      </html>
    `);
    doc.close();
  }

  _onMessage(event) {
    if (event.data && event.data.type) {
      const handler = this._messageHandlers.get(event.data.type);
      if (handler) handler(event.data.payload);
    }
  }

  postMessage(type, payload) {
    if (this._iframe && this._iframe.contentWindow) {
      this._iframe.contentWindow.postMessage({ type, payload }, '*');
    }
  }

  on(type, handler) {
    this._messageHandlers.set(type, handler);
  }

  off(type) {
    this._messageHandlers.delete(type);
  }

  destroy() {
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }
    if (this._iframe && this._container) {
      this._container.removeChild(this._iframe);
    }
    this._messageHandlers.clear();
  }
}
