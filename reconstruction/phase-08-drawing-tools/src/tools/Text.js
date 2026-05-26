export class Text {
  constructor() {
    this.name = 'Text';
    this.icon = 'T';
    this.cursor = 'crosshair';
    this.maxPoints = 1;
    this.points = [];
    this.style = {
      color: '#FFFFFF',
      bgColor: 'rgba(30, 34, 45, 0.85)',
      font: '13px sans-serif',
      alignment: 'center',
      text: ''
    };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 1) return;
    const style = { ...this.style, ...options };
    if (!style.text) return;

    const pixel = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    if (pixel == null) return;

    ctx.font = style.font;
    ctx.textBaseline = 'middle';

    const metrics = ctx.measureText(style.text);
    const textWidth = metrics.width;
    const textHeight = parseInt(style.font, 10) || 13;
    const padding = 6;
    const bx = pixel.x - textWidth / 2 - padding;
    const by = pixel.y - textHeight / 2 - padding;
    const bw = textWidth + padding * 2;
    const bh = textHeight + padding * 2;

    ctx.fillStyle = style.bgColor;
    ctx.fillRect(bx, by, bw, bh);

    ctx.fillStyle = style.color;
    ctx.textAlign = 'center';
    ctx.fillText(style.text, pixel.x, pixel.y);
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 1) return false;
    const pixel = this._toPixel(this.points[0], viewport, priceScale, timeScale);
    if (pixel == null) return false;
    return Math.hypot(mouseX - pixel.x, mouseY - pixel.y) <= threshold * 3;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return {
      x: viewport.timeToX(pt.time),
      y: priceScale.priceToY(pt.price)
    };
  }
}
