export class Volume {
  static inputs = [
    { name: 'maLength', type: 'integer', min: 1, max: 200, default: 20 }
  ];

  static outputs = ['Volume', 'VolumeMA'];

  constructor(inputs = {}) {
    this.maLength = inputs.maLength || 20;
  }

  calculate(bars) {
    if (!bars || bars.length === 0) return [];

    const volumes = bars.map(b => b.volume || 0);
    const result = [];

    for (let i = 0; i < volumes.length; i++) {
      let ma = null;
      if (i >= this.maLength - 1) {
        let sum = 0;
        for (let j = i - this.maLength + 1; j <= i; j++) sum += volumes[j];
        ma = sum / this.maLength;
      }
      result.push({ volume: volumes[i], volumeMA: ma });
    }

    return result;
  }
}
