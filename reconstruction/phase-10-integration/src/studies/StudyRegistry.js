export class StudyRegistry {
  constructor() {
    this._studies = new Map();
  }

  register(name, StudyClass) {
    if (this._studies.has(name)) {
      throw new Error(`Study already registered: ${name}`);
    }
    this._studies.set(name, StudyClass);
  }

  create(name, inputs = {}) {
    if (!this._studies.has(name)) {
      throw new Error(`Unknown study: ${name}`);
    }
    const Cls = this._studies.get(name);
    return new Cls(inputs);
  }

  getNames() {
    return Array.from(this._studies.keys());
  }

  getInputs(name) {
    if (!this._studies.has(name)) return null;
    const Cls = this._studies.get(name);
    return Cls.inputs || [];
  }

  getOutputs(name) {
    if (!this._studies.has(name)) return null;
    const Cls = this._studies.get(name);
    return Cls.outputs || [];
  }
}
