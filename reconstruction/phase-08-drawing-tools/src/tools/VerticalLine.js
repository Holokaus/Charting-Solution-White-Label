export class VerticalLine {
  constructor() {
    this.name = 'VerticalLine';
    this.icon = '|';
    this.cursor = 'crosshair';
    this.maxPoints = 1;
    this.points = [];
    this.style = { color: '#4CAF50', width: 1, labelColor: '#FFFFFF' };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 1) return;
    const style = { ...this.style, ...options };
    const x = viewport.timeToX(this.points[0].time);
    if (x == null) return;

    ctx.strokeStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, viewport.height);
    ctx.stroke();
    ctx.setLineDash([]);

    const label = timeScale.formatLabel(this.points[0].time);
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    const textWidth = ctx.measureText(label).width;
    const lx = Math.max(textWidth / 2 + 4, Math.min(viewport.width - textWidth / 2 - 4, x));

    ctx.fillStyle = style.color;
    ctx.fillRect(lx - textWidth / 2 - 4, viewport.height - 22, textWidth + 8, 18);
    ctx.fillStyle = style.labelColor;
    ctx.fillText(label, lx, viewport.height - 4);
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    if (this.points.length < 1) return false;
    const x = viewport.timeToX(this.points[0].time);
    return x != null && Math.abs(mouseX - x) <= threshold;
  }
}
