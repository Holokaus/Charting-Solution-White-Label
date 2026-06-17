# Writing a Custom Drawing Tool

Drawing tools extend `BaseDrawingTool` and implement `render()` and `hitTest()`.

## Pattern

```ts
class MyTool extends BaseDrawingTool {
  constructor() {
    super();
    this.name = 'MyTool';
    this.icon = '⚡';
    this.cursor = 'crosshair';
    this.maxPoints = 2;
    this.points = [];
    this.style = { color: '#FF5722', width: 2 };
  }

  render(ctx, viewport, priceScale, timeScale, options = {}) {
    if (this.points.length < 2) return;
    const style = { ...this.style, ...options };
    // render using ctx
  }

  hitTest(mouseX, mouseY, viewport, priceScale, timeScale, threshold = 5) {
    return false; // implement hit detection
  }
}

// Register
toolRegistry.register('MyTool', MyTool);
```
