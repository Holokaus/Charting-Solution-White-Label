export class FibonacciFan {
  constructor() {
    this.name = 'FibonacciFan';
    this.icon = 'Fan';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#FF5722', width: 1, labelColor: '#FFFFFF', levels: [38.2, 50, 61.8] };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    const pivotPt = this.points[0];
    const endPt = this.points[1];

    const pivotX = viewport.timeToX(pivotPt.time);
    const pivotY = priceScale.priceToY(pivotPt.price);
    const endX = viewport.timeToX(endPt.time);
    const endY = priceScale.priceToY(endPt.price);

    if (pivotX == null || pivotY == null || endX == null || endY == null) return;

    const dx = endX - pivotX;
    const dy = endY - pivotY;

    if (dx === 0) return;

    for (const level of style.levels) {
      const angle = Math.atan2(Math.abs(dy), Math.abs(dx)) * (level / 100);
      const slope = Math.tan(angle) * Math.sign(dy) / Math.sign(dx);

      ctx.strokeStyle = style.color;
      ctx.globalAlpha = 0.7;
      ctx.lineWidth = style.width;
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(pivotX, pivotY);

      if (dx > 0) {
        ctx.lineTo(viewport.width, pivotY + slope * (viewport.width - pivotX));
      } else {
        ctx.lineTo(0, pivotY + slope * (-pivotX));
      }
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      ctx.font = '10px sans-serif';
      ctx.fillStyle = style.color;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.fillText(`${level}%`, 4, pivotY - 4 - style.levels.indexOf(level) * 14);
    }
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 1) return false;
    const p = this._pixel(this.points[0], viewport, priceScale, timeScale);
    return p != null && Math.hypot(mouseX - p.x, mouseY - p.y) <= threshold;
  }

  _pixel(pt, viewport, priceScale, timeScale) {
    if (pt.time == null || pt.price == null) return null;
    return { x: viewport.timeToX(pt.time), y: priceScale.priceToY(pt.price) };
  }
}
