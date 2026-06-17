import { Parser } from '../pine/Parser.js';
import { Transpiler } from '../pine/Transpiler.js';
import { Runtime } from '../pine/Runtime.js';

export class CustomStudy {
  static inputs = [
    { name: 'pineSource', type: 'text', default: '' }
  ];
  static outputs = ['output'];

  constructor(inputs = {}) {
    this.source = inputs.pineSource || '';
    this._fn = null;
    this._runtime = new Runtime();
    this._inputs = {};

    if (this.source) {
      this._compile(this.source);
    }
  }

  _compile(source) {
    const parser = new Parser();
    const ast = parser.parse(source);
    const transpiler = new Transpiler();
    const jsSource = transpiler.transpile(ast);
    this._fn = eval(jsSource);
  }

  setInput(name, value) {
    this._inputs[name] = value;
  }

  calculate(bars) {
    if (!this._fn) {
      if (this.source) this._compile(this.source);
      if (!this._fn) return [];
    }
    return this._fn(bars, this._runtime, this._inputs);
  }
}
