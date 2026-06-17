# Writing a Custom Study

Studies extend `BuiltinStudy` and implement the `calculate(bars)` method.

## Pattern

```ts
class MyStudy extends BuiltinStudy {
  static inputs = [
    { name: 'length', type: 'integer', min: 1, max: 100, default: 14 }
  ];
  static outputs = ['MyOutput'];

  constructor(inputs = {}) {
    super(inputs);
    this.length = inputs.length || 14;
  }

  calculate(bars) {
    if (!bars || bars.length < this.length) return [];
    return bars.map((bar, i) => {
      if (i < this.length - 1) return { MyOutput: null };
      let sum = 0;
      for (let j = i - this.length + 1; j <= i; j++) sum += bar.close;
      return { MyOutput: sum / this.length };
    });
  }
}

// Register
studyRegistry.register('MyStudy', MyStudy);

// Use via widget
widget.addStudy('MyStudy', { length: 20 });
```
