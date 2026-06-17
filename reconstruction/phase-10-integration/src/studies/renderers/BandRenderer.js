import { StudyRenderer } from './StudyRenderer.js';

export class BandRenderer extends StudyRenderer {
  constructor(options = {}) {
    super({ pane: options.pane || 'overlay', ...options });
  }

  render(ctx, studyData, viewport, priceScale, options = {}) {
    const bars = options.bars || [];
    const upperKey = options.upperKey || 'upper';
    const lowerKey = options.lowerKey || 'lower';
    const color = options.color || 'rgba(33, 150, 243, 0.1)';
    const lineColor = options.lineColor || '#2196F3';
    const lineWidth = options.lineWidth || 1;

    const upperPoints = [];
    const lowerPoints = [];

    for (let i = 0; i < studyData.length; i++) {
      const datum = studyData[i];
      if (datum[upperKey] == null || datum[lowerKey] == null) continue;

      const t = bars[i] ? bars[i].time : i;
      const x = viewport.timeToX(t);
      if (x < -viewport.barSpacing || x > viewport.width + viewport.barSpacing) continue;

      upperPoints.push({ x, y: priceScale.priceToY(datum[upperKey]) });
      lowerPoints.push({ x, y: priceScale.priceToY(datum[lowerKey]) });
    }

    if (upperPoints.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
    for (let i = 1; i < upperPoints.length; i++) {
      ctx.lineTo(upperPoints[i].x, upperPoints[i].y);
    }
    for (let i = lowerPoints.length - 1; i >= 0; i--) {
      ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y);
    }
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
    for (let i = 1; i < upperPoints.length; i++) {
      ctx.lineTo(upperPoints[i].x, upperPoints[i].y);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(lowerPoints[0].x, lowerPoints[0].y);
    for (let i = 1; i < lowerPoints.length; i++) {
      ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y);
    }
    ctx.stroke();
  }
}
