export class ScreenshotExport {
  static exportPNG(canvas, filename = 'chart.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static exportJPG(canvas, quality = 0.9, filename = 'chart.jpg') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', quality);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static toDataURL(canvas, type = 'image/png', quality = 0.92) {
    return canvas.toDataURL(type, quality);
  }
}
