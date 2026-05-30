export class Brush {
  constructor() {
    this.name = 'Brush';
    this.icon = '✏';
    this.cursor = 'crosshair';
    this.maxPoints = Infinity;
    this.points = [];
    this.style = { color: '#FFFFFF', width: 3, opacity: 0.8 };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const pixels = this.points.map(p => this._toPixel(p, viewport, priceScale, timeScale)).filter(p => p != null);
    if (pixels.length < 2) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.globalAlpha = style.opacity;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(pixels[0].x, pixels[0].y);
    for (let i = 1; i < pixels.length; i++) {
      ctx.lineTo(pixels[i].x, pixels[i].y);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 8) {
    if (this.points.length < 2) return false;
    const pixels = this.points.map(p => this._toPixel(p, viewport, priceScale, timeScale)).filter(p => p != null);
    for (let i = 1; i < pixels.length; i++) {
      if (this._distToSegment(mouseX, mouseY, pixels[i - 1].x, pixels[i - 1].y, pixels[i].x, pixels[i].y) <= threshold) return true;
    }
    return false;
  }

  _toPixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }

  _distToSegment(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * dx + (py - y1) * dy) / lenSq;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
  }
}
