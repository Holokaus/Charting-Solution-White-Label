export class CanvasRenderer {
  constructor(container, width, height) {
    this._canvas = document.createElement('canvas');
    this._ctx = this._canvas.getContext('2d');
    this._container = container;
    this._width = width || container.clientWidth;
    this._height = height || container.clientHeight;
    this._dpr = window.devicePixelRatio || 1;
    this._rafId = null;
    this._scene = [];
    this._updateSize();
    container.appendChild(this._canvas);
  }

  get canvas() { return this._canvas; }

  get ctx() { return this._ctx; }

  get width() { return this._width; }

  get height() { return this._height; }

  get dpr() { return this._dpr; }

  clear() {
    this._ctx.setTransform(1, 0, 0, 1, 0, 0);
    this._ctx.fillStyle = '#131722';
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
  }

  render(renderables) {
    this._scene = renderables || this._scene;
    this.clear();
    this._ctx.setTransform(this._dpr, 0, 0, this._dpr, 0, 0);
    for (const item of this._scene) {
      if (typeof item.render === 'function') {
        item.render(this._ctx);
      }
    }
  }

  startLoop(renderables) {
    this._scene = renderables || this._scene;
    const loop = () => {
      this.render();
      this._rafId = requestAnimationFrame(loop);
    };
    this._rafId = requestAnimationFrame(loop);
  }

  stopLoop() {
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  }

  resize(width, height) {
    this._width = width || this._container.clientWidth;
    this._height = height || this._container.clientHeight;
    this._updateSize();
    this.render();
  }

  _updateSize() {
    this._canvas.width = this._width * this._dpr;
    this._canvas.height = this._height * this._dpr;
    this._canvas.style.width = `${this._width}px`;
    this._canvas.style.height = `${this._height}px`;
  }

  destroy() {
    this.stopLoop();
    if (this._canvas.parentNode) {
      this._canvas.parentNode.removeChild(this._canvas);
    }
    this._scene = [];
  }
}
