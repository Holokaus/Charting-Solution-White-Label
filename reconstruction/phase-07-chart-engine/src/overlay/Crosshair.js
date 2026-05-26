export class Crosshair {
  constructor() {
    this._x = -1;
    this._y = -1;
    this._visible = false;
    this._color = '#787B86';
    this._onMove = null;
  }

  get x() { return this._x; }
  get y() { return this._y; }
  get visible() { return this._visible; }

  setOnMove(handler) {
    this._onMove = handler;
  }

  move(x, y) {
    this._x = x;
    this._y = y;
    this._visible = true;
    if (this._onMove) this._onMove(x, y);
  }

  hide() {
    this._visible = false;
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (!this._visible) return;

    const color = options.color || this._color;
    const priceLabelWidth = 60;
    const priceLabelHeight = 20;
    const timeLabelHeight = 18;

    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.moveTo(0, this._y);
    ctx.lineTo(viewport.width, this._y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this._x, 0);
    ctx.lineTo(this._x, viewport.height);
    ctx.stroke();

    ctx.setLineDash([]);

    const price = priceScale.yToPrice(this._y);
    ctx.fillStyle = color;
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const priceText = price.toFixed(2);
    const priceX = viewport.width - priceLabelWidth;
    const priceY = Math.max(priceLabelHeight / 2, Math.min(viewport.height - priceLabelHeight / 2, this._y));

    ctx.fillStyle = '#1E222D';
    ctx.fillRect(priceX, priceY - priceLabelHeight / 2, priceLabelWidth, priceLabelHeight);
    ctx.fillStyle = color;
    ctx.fillText(priceText, priceX + 4, priceY);

    const time = timeScale.xToTime(this._x);
    const timeText = timeScale.formatLabel(time);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const timeX = Math.max(30, Math.min(viewport.width - 30, this._x));
    ctx.fillStyle = '#1E222D';
    ctx.fillRect(timeX - 30, viewport.height - timeLabelHeight, 60, timeLabelHeight);
    ctx.fillStyle = color;
    ctx.fillText(timeText, timeX, viewport.height - timeLabelHeight + 2);
  }
}
