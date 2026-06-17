import { StudyRenderer } from './StudyRenderer.js';

export class LineRenderer extends StudyRenderer {
  constructor(options = {}) {
    super({ pane: options.pane || 'overlay', ...options });
  }

  render(ctx, studyData, viewport, priceScale, options = {}) {
    const bars = options.bars || [];
    const series = options.series || [{ key: 'value', color: '#2196F3', width: 2 }];
    const showDots = options.showDots || false;

    for (const s of series) {
      const points = [];

      for (let i = 0; i < studyData.length; i++) {
        const datum = studyData[i];
        const val = typeof datum === 'number' ? datum : datum[s.key];
        if (val == null) continue;

        const t = bars[i] ? bars[i].time : i;
        const x = viewport.timeToX(t);
        if (x < -viewport.barSpacing || x > viewport.width + viewport.barSpacing) continue;
        const y = priceScale.priceToY(val);
        points.push({ x, y });
      }

      if (points.length < 2) continue;

      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.width || 2;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let j = 1; j < points.length; j++) {
        ctx.lineTo(points[j].x, points[j].y);
      }
      ctx.stroke();

      if (showDots) {
        for (const p of points) {
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }
}
