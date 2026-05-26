export class ToolRegistry {
  constructor() {
    this._tools = new Map();
  }

  register(name, ToolClass) {
    if (this._tools.has(name)) {
      throw new Error(`Tool already registered: ${name}`);
    }
    this._tools.set(name, ToolClass);
  }

  create(name, options = {}) {
    if (!this._tools.has(name)) {
      throw new Error(`Unknown tool: ${name}`);
    }
    const Cls = this._tools.get(name);
    const instance = new Cls();
    if (options.points) instance.points = options.points;
    if (options.style) instance.style = { ...instance.style, ...options.style };
    return instance;
  }

  getNames() {
    return Array.from(this._tools.keys());
  }

  getClass(name) {
    return this._tools.get(name) || null;
  }
}
