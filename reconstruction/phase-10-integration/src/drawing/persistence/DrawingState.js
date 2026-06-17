export class DrawingState {
  constructor(registry) {
    this._registry = registry;
  }

  serialize(tools) {
    return tools.map(tool => {
      const Cls = this._registry.getClass(tool.name);
      if (!Cls) return null;
      return {
        type: tool.name,
        points: tool.points.map(p => ({ ...p })),
        options: { ...tool.style }
      };
    }).filter(Boolean);
  }

  deserialize(array) {
    return array.map(item => {
      const tool = this._registry.create(item.type, {
        points: item.points,
        style: item.options
      });
      return tool;
    });
  }

  exportToJSON(tools) {
    const data = this.serialize(tools);
    return JSON.stringify(data);
  }

  importFromJSON(string) {
    let data;
    try {
      data = JSON.parse(string);
    } catch (e) {
      throw new Error(`Invalid JSON: ${e.message}`);
    }
    if (!Array.isArray(data)) {
      throw new Error('Expected an array of drawing objects');
    }
    return this.deserialize(data);
  }
}
