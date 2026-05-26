export class BaselineRenderer {
  render(ctx, bars, viewport, priceScale, timeScale, options = {}) {
    if (bars.length === 0) return;

    const baselinePrice = options.baselinePrice || priceScale.min;
    const baselineY = priceScale.priceToY(baselinePrice);
    const topColor = options.topColor || 'rgba(38, 166, 154, 0.2)';
    const bottomColor = options.bottomColor || 'rgba(239, 83, 80, 0.2)';
    const lineColor = options.lineColor || '#787B86';
    const lineWidth = options.lineWidth || 2;

    const points = [];
    for (const bar of bars) {
      const x = viewport.timeToX(bar.time) + viewport.barSpacing / 2;
      if (x < -viewport.barSpacing || x > viewport.width + viewport.barSpacing) continue;
      const y = priceScale.priceToY(bar.close);
      points.push({ x, y });
    }

    if (points.length < 2) return;

    const aboveY = Math.min(...points.map(p => p.y));
    const belowY = Math.max(...points.map(p => p.y));

    const aboveGrad = ctx.createLinearGradient(0, aboveY, 0, baselineY);
    aboveGrad.addColorStop(0, topColor);
    aboveGrad.addColorStop(1, 'rgba(38, 166, 154, 0.0)');

    const belowGrad = ctx.createLinearGradient(0, baselineY, 0, belowY);
    belowGrad.addColorStop(0, 'rgba(239, 83, 80, 0.0)');
    belowGrad.addColorStop(1, bottomColor);

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, baselineY);
    ctx.lineTo(points[0].x, baselineY);
    ctx.closePath();

    ctx.fillStyle = aboveGrad;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(points[0].x, baselineY);
    for (let i = 0; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.lineTo(points[points.length - 1].x, baselineY);
    ctx.closePath();

    ctx.fillStyle = belowGrad;
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
