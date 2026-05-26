export class AreaRenderer {
  render(ctx, bars, viewport, priceScale, timeScale, options = {}) {
    if (bars.length === 0) return;

    const lineColor = options.lineColor || '#2196F3';
    const topColor = options.topColor || 'rgba(33, 150, 243, 0.3)';
    const bottomColor = options.bottomColor || 'rgba(33, 150, 243, 0.0)';
    const lineWidth = options.lineWidth || 2;

    const points = [];
    for (const bar of bars) {
      const x = viewport.timeToX(bar.time) + viewport.barSpacing / 2;
      if (x < -viewport.barSpacing || x > viewport.width + viewport.barSpacing) continue;
      const y = priceScale.priceToY(bar.close);
      points.push({ x, y });
    }

    if (points.length < 2) return;

    const bottomY = priceScale.priceToY(priceScale.min);

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, bottomY);
    ctx.lineTo(points[0].x, bottomY);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, points[0].y, 0, bottomY);
    gradient.addColorStop(0, topColor);
    gradient.addColorStop(1, bottomColor);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  }
}
