export class Transpiler {
  constructor() {
    this.varCounter = 0;
  }

  transpile(ast) {
    this.varCounter = 0;
    const lines = [];
    const analysis = this._analyze(ast);

    lines.push('(function(bars, builtin, inputs) {');
    lines.push('  var results = [];');
    lines.push('  var vars = {};');

    for (const arr of analysis.barArrays) {
      if (arr === 'hl2') {
        lines.push(`  var _${arr} = bars.map(function(b) { return (b.high + b.low) / 2; });`);
      } else if (arr === 'hlc3') {
        lines.push(`  var _${arr} = bars.map(function(b) { return (b.high + b.low + b.close) / 3; });`);
      } else if (arr === 'ohlc4') {
        lines.push(`  var _${arr} = bars.map(function(b) { return (b.open + b.high + b.low + b.close) / 4; });`);
      } else {
        lines.push(`  var _${arr} = bars.map(function(b) { return b.${arr}; });`);
      }
    }

    for (const [varName, precompute] of analysis.precomputations) {
      lines.push(`  var _p_${varName} = ${precompute};`);
    }

    for (const node of ast.body) {
      if (node.type === 'InputDeclaration') {
        const name = node.name || `input_${this.varCounter++}`;
        lines.push(`  var ${name} = inputs["${name}"] !== undefined ? inputs["${name}"] : ${this._expr(node.defVal)};`);
      }
    }

    lines.push('  for (var i = 0; i < bars.length; i++) {');
    lines.push('    vars.bar_index = i;');

    const plotNodes = [];
    for (const node of ast.body) {
      if (node.type === 'StudyDeclaration') continue;
      if (node.type === 'InputDeclaration') continue;
      if (node.type === 'PlotStatement') { plotNodes.push(node); continue; }
      if (node.type === 'HlineStatement') continue;
      lines.push(this._stmt(node, 2));
    }

    lines.push('    var row = {};');
    for (const plot of plotNodes) {
      const name = plot.title ? JSON.stringify(plot.title) : `"plot_${plotNodes.indexOf(plot)}"`;
      const seriesExpr = this._exprWithIndex(plot.series);
      lines.push(`    row[${name}] = ${seriesExpr};`);
    }
    lines.push('    results.push(row);');
    lines.push('  }');
    lines.push('  return results;');
    lines.push('})');
    return lines.join('\n');
  }

  _analyze(ast) {
    const barArrays = new Set();
    const precomputations = new Map();
    const builtinArrayOps = new Set(['sma', 'ema', 'wma', 'rsi', 'highest', 'lowest',
      'cum', 'change', 'rising', 'falling']);
    const barSeries = new Set(['open', 'high', 'low', 'close', 'volume', 'time', 'hl2', 'hlc3', 'ohlc4']);

    const walk = (node) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) { node.forEach(walk); return; }
      if (node.type === 'Identifier' && barSeries.has(node.name)) {
        barArrays.add(node.name);
      }
      if (node.type === 'CallExpression' && builtinArrayOps.has(node.callee)) {
        const varName = `_auto_${this.varCounter++}`;
        const args = node.arguments.map(a => this._expr(a)).join(', ');
        precomputations.set(varName, `builtin.${node.callee}(${args})`);
        node._precomputedVar = varName;
      }
      for (const key of Object.keys(node)) {
        if (key === 'type' || key === 'name' || key === 'op' || key === 'callee' ||
            key === '_precomputedVar') continue;
        walk(node[key]);
      }
    };
    for (const stmt of ast.body) walk(stmt);
    return { barArrays, precomputations };
  }

  _stmt(node, indent) {
    const pad = '  '.repeat(indent);
    switch (node.type) {
      case 'Assignment':
        return `${pad}vars["${node.name}"] = ${this._exprWithIndex(node.value)};`;
      case 'VarDeclaration':
        return `${pad}vars["${node.name}"] = ${this._exprWithIndex(node.value)};`;
      case 'ExpressionStatement':
        return `${pad}${this._exprWithIndex(node.expression)};`;
      case 'ReturnExpression':
        return `${pad}return ${this._exprWithIndex(node.value)};`;
      case 'ReturnStatement':
        return `${pad}return ${this._exprWithIndex(node.value)};`;
      case 'IfStatement':
        return this._ifStmt(node, indent);
      case 'ForStatement':
        return this._forStmt(node, indent);
      default:
        return `${pad}// unhandled: ${node.type}`;
    }
  }

  _ifStmt(node, indent) {
    const pad = '  '.repeat(indent);
    let code = `${pad}if (${this._exprWithIndex(node.test)}) {\n`;
    for (const s of node.consequent) code += this._stmt(s, indent + 1) + '\n';
    code += `${pad}}`;
    if (node.alternate && node.alternate.length > 0) {
      code += ` else {\n`;
      for (const s of node.alternate) code += this._stmt(s, indent + 1) + '\n';
      code += `${pad}}`;
    }
    return code;
  }

  _forStmt(node, indent) {
    const pad = '  '.repeat(indent);
    let code = `${pad}for (var ${node.id} = ${this._exprWithIndex(node.init)}; ${node.id} <= ${this._exprWithIndex(node.limit)}; ${node.id}++) {\n`;
    for (const s of node.body) code += this._stmt(s, indent + 1) + '\n';
    code += `${pad}}`;
    return code;
  }

  _exprWithIndex(node) {
    if (!node) return 'null';
    if (node._precomputedVar) {
      return `_p_${node._precomputedVar}[i]`;
    }
    return this._expr(node);
  }

  _expr(node) {
    if (!node) return 'null';
    if (node._precomputedVar) {
      return `_p_${node._precomputedVar}`;
    }
    switch (node.type) {
      case 'NumberLiteral': return String(node.value);
      case 'StringLiteral': return JSON.stringify(node.value);
      case 'ColorLiteral': return JSON.stringify(node.value);
      case 'BooleanLiteral': return node.value ? 'true' : 'false';
      case 'NullLiteral': return 'null';
      case 'Identifier': {
        const barSeries = new Set(['open', 'high', 'low', 'close', 'volume', 'time', 'hl2', 'hlc3', 'ohlc4']);
        if (barSeries.has(node.name)) return `_${node.name}`;
        return `vars["${node.name}"]`;
      }
      case 'BinaryOp': {
        const l = this._expr(node.left);
        const r = this._expr(node.right);
        if (node.op === 'and') return `(${l} && ${r})`;
        if (node.op === 'or') return `(${l} || ${r})`;
        return `(${l} ${node.op} ${r})`;
      }
      case 'UnaryOp':
        return `(${node.op}${this._expr(node.operand)})`;
      case 'Ternary':
        return `(${this._expr(node.test)} ? ${this._expr(node.consequent)} : ${this._expr(node.alternate)})`;
      case 'CallExpression': {
        const args = node.arguments.map(a => {
          if (a && a.type === 'NamedArgument') return this._expr(a.value);
          return this._expr(a);
        }).join(', ');
        const builtins = new Set(['sma', 'ema', 'wma', 'rsi', 'macd', 'stoch', 'highest', 'lowest',
          'crossover', 'crossunder', 'iff', 'na', 'nz', 'barssince', 'security',
          'abs', 'max', 'min', 'pow', 'sqrt', 'log', 'exp', 'floor', 'ceil', 'round',
          'cum', 'change', 'rising', 'falling', 'valuewhen',
          'timenow', 'syminfo_tickerid', 'syminfo_mintick']);
        if (builtins.has(node.callee)) {
          return `builtin.${node.callee}(${args})`;
        }
        return `builtin.userFn("${node.callee}", [${args}])`;
      }
      case 'IndexExpression':
        return `${this._expr(node.object)}[${this._expr(node.index)}]`;
      case 'ArrayLiteral':
        return `[${node.elements.map(e => this._expr(e)).join(', ')}]`;
      default:
        return 'null';
    }
  }
}
