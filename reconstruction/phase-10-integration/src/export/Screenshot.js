export class Screenshot {
  constructor(canvas) {
    this.canvas = canvas;
  }

  toDataURL(type = 'image/png', quality = 0.92) {
    if (!this.canvas) return null;
    return this.canvas.toDataURL(type, quality);
  }

  download(filename = 'chart.png', type = 'image/png', quality = 0.92) {
    const url = this.toDataURL(type, quality);
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  toBlob(type = 'image/png', quality = 0.92) {
    return new Promise((resolve) => {
      if (!this.canvas) { resolve(null); return; }
      this.canvas.toBlob((blob) => resolve(blob), type, quality);
    });
  }

  openInNewTab(type = 'image/png', quality = 0.92) {
    const url = this.toDataURL(type, quality);
    if (!url) return;
    window.open(url, '_blank');
  }
}
