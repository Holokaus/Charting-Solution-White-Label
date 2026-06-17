export class PineSyntaxError extends Error {
  constructor(message, line, col) {
    super(`Pine syntax error at line ${line}, col ${col}: ${message}`);
    this.line = line;
    this.col = col;
  }
}

export class Parser {
  constructor() {
    this.tokens = [];
    this.pos = 0;
  }

  parse(source) {
    this.tokens = this._tokenize(source);
    this.pos = 0;
    const ast = { type: 'Program', body: [] };
    while (this.pos < this.tokens.length) {
      const stmt = this._statement();
      if (stmt) ast.body.push(stmt);
    }
    return ast;
  }

  _tokenize(source) {
    const tokens = [];
    const lines = source.split('\n');
    for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
      let line = lines[lineIdx];
      const commentIdx = line.indexOf('//');
      if (commentIdx >= 0) line = line.substring(0, commentIdx);
      let i = 0;
      while (i < line.length) {
        if (/\s/.test(line[i])) { i++; continue; }
        if (line[i] === '"' || line[i] === "'") {
          const quote = line[i]; let str = '';
          for (let j = i + 1; j < line.length; j++) {
            if (line[j] === '\\') { str += line[j + 1] || ''; j++; continue; }
            if (line[j] === quote) { i = j + 1; break; }
            str += line[j];
            if (j === line.length - 1) i = j + 1;
          }
          tokens.push({ type: 'STRING', value: str, line: lineIdx + 1, col: i });
          continue;
        }
        if (line[i] === '#' && /[0-9a-fA-F]/.test(line[i + 1])) {
          let hex = '#';
          for (let j = i + 1; j < line.length && /[0-9a-fA-F]/.test(line[j]); j++) hex += line[j];
          tokens.push({ type: 'COLOR', value: hex, line: lineIdx + 1, col: i });
          i += hex.length;
          continue;
        }
        if (/[0-9]/.test(line[i]) || (line[i] === '.' && line[i + 1] && /[0-9]/.test(line[i + 1]))) {
          let num = '';
          while (i < line.length && /[0-9.]/.test(line[i])) { num += line[i]; i++; }
          tokens.push({ type: 'NUMBER', value: parseFloat(num), line: lineIdx + 1, col: i });
          continue;
        }
        if (/[a-zA-Z_]/.test(line[i])) {
          let id = '';
          while (i < line.length && /[a-zA-Z0-9_]/.test(line[i])) { id += line[i]; i++; }
          const keywords = {
            'study': 'STUDY', 'plot': 'PLOT', 'hline': 'HLINE',
            'if': 'IF', 'else': 'ELSE', 'for': 'FOR',
            'true': 'TRUE', 'false': 'FALSE', 'na': 'NA',
            'and': 'AND', 'or': 'OR', 'not': 'NOT', 'to': 'TO',
            'var': 'VAR', 'export': 'EXPORT', 'return': 'RETURN',
            'strategy': 'STRATEGY', 'fill': 'FILL'
          };
          tokens.push({ type: keywords[id] || 'IDENTIFIER', value: id, line: lineIdx + 1, col: i });
          continue;
        }
        if (line[i] === '=' && line[i + 1] === '>') { tokens.push({ type: 'ARROW', value: '=>', line: lineIdx + 1, col: i }); i += 2; continue; }
        if (line[i] === '=' && line[i + 1] === '=') { tokens.push({ type: 'EQ', value: '==', line: lineIdx + 1, col: i }); i += 2; continue; }
        if (line[i] === '!' && line[i + 1] === '=') { tokens.push({ type: 'NEQ', value: '!=', line: lineIdx + 1, col: i }); i += 2; continue; }
        if (line[i] === '>' && line[i + 1] === '=') { tokens.push({ type: 'GE', value: '>=', line: lineIdx + 1, col: i }); i += 2; continue; }
        if (line[i] === '<' && line[i + 1] === '=') { tokens.push({ type: 'LE', value: '<=', line: lineIdx + 1, col: i }); i += 2; continue; }
        const syms = { '(':'LPAREN', ')':'RPAREN', '[':'LBRACK', ']':'RBRACK', '{':'LBRACE', '}':'RBRACE',
          ',':'COMMA', ':':'COLON', ';':'SEMICOLON', '+':'PLUS', '-':'MINUS', '*':'MUL', '/':'DIV',
          '%':'MOD', '=':'ASSIGN', '>':'GT', '<':'LT', '!':'BANG', '?':'QUESTION' };
        if (syms[line[i]]) {
          tokens.push({ type: syms[line[i]], value: line[i], line: lineIdx + 1, col: i });
          i++;
          continue;
        }
        throw new PineSyntaxError(`Unexpected character '${line[i]}'`, lineIdx + 1, i);
      }
    }
    return tokens;
  }

  _peek() { return this.tokens[this.pos] || null; }
  _next() { return this.tokens[this.pos++] || null; }
  _expect(type) {
    const t = this._next();
    if (!t || t.type !== type) throw new PineSyntaxError(`Expected ${type} but got ${t ? t.type : 'EOF'}`, t ? t.line : 0, t ? t.col : 0);
    return t;
  }
  _match(...types) {
    if (this._peek() && types.includes(this._peek().type)) return this._next();
    return null;
  }

  _statement() {
    const t = this._peek();
    if (!t) return null;
    if (t.type === 'STUDY') return this._studyDecl();
    if (t.type === 'PLOT') return this._plotStmt();
    if (t.type === 'HLINE') return this._hlineStmt();
    if (t.type === 'INPUT') return this._inputDecl();
    if (t.type === 'IF') return this._ifStmt();
    if (t.type === 'FOR') return this._forStmt();
    if (t.type === 'VAR') return this._varDecl();
    if (t.type === 'RETURN') return this._returnStmt();
    if (t.type === 'IDENTIFIER') {
      const n = this._next();
      if (this._match('ASSIGN')) {
        return { type: 'Assignment', name: n.value, value: this._expression(), line: n.line, col: n.col };
      }
      this.pos--;
      const expr = this._expression();
      if (this._match('SEMICOLON')) {}
      return { type: 'ExpressionStatement', expression: expr };
    }
    if (t.type === 'ARROW') {
      this._next();
      return { type: 'ReturnExpression', value: this._expression() };
    }
    if (t.type === 'STRING' || t.type === 'NUMBER' || t.type === 'TRUE' || t.type === 'FALSE' || t.type === 'NA') {
      const expr = this._expression();
      if (this._match('SEMICOLON')) {}
      return { type: 'ExpressionStatement', expression: expr };
    }
    this._next();
    return null;
  }

  _studyDecl() {
    this._expect('STUDY'); this._expect('LPAREN');
    const args = this._argList();
    this._expect('RPAREN');
    const props = {};
    for (const arg of args) {
      if (arg.type === 'NamedArgument') {
        props[arg.name] = arg.value;
      }
    }
    return { type: 'StudyDeclaration', props };
  }

  _plotStmt() {
    this._expect('PLOT'); this._expect('LPAREN');
    const series = this._expression();
    const props = { series, color: null, linewidth: 1, style: 'line', title: null };
    if (this._match('COMMA')) {
      const named = this._namedArg();
      if (named) {
        if (named.name === 'color') props.color = named.value;
        else if (named.name === 'linewidth') props.linewidth = named.value;
        else if (named.name === 'style') props.style = named.value.value || named.value;
        else if (named.name === 'title') props.title = named.value;
      } else {
        const titleExpr = this._expression();
        props.title = titleExpr && titleExpr.type === 'StringLiteral' ? titleExpr.value : titleExpr;
        while (this._match('COMMA')) {
          const n = this._namedArg();
          if (n) {
            if (n.name === 'color') props.color = n.value;
            else if (n.name === 'linewidth') props.linewidth = n.value;
            else if (n.name === 'style') props.style = n.value.value || n.value;
          } else break;
        }
      }
    }
    this._expect('RPAREN');
    return { type: 'PlotStatement', ...props };
  }

  _hlineStmt() {
    this._expect('HLINE'); this._expect('LPAREN');
    const price = this._expression();
    const props = { price, color: null, linewidth: 1, title: null };
    while (this._match('COMMA')) {
      const named = this._namedArg();
      if (named) {
        if (named.name === 'color') props.color = named.value;
        else if (named.name === 'linewidth') props.linewidth = named.value;
        else if (named.name === 'title') props.title = named.value;
      } else break;
    }
    this._expect('RPAREN');
    return { type: 'HlineStatement', ...props };
  }

  _inputDecl() {
    this._expect('INPUT'); this._expect('LPAREN');
    const defVal = this._expression();
    const props = { defVal, name: null, type: 'integer', min: null, max: null, options: null };
    while (this._match('COMMA')) {
      const named = this._namedArg();
      if (named) {
        if (named.name === 'title') props.name = named.value;
        else if (named.name === 'type') props.type = named.value.value || named.value;
        else if (named.name === 'minval') props.min = named.value;
        else if (named.name === 'maxval') props.max = named.value;
        else if (named.name === 'options') props.options = named.value;
      } else break;
    }
    this._expect('RPAREN');
    return { type: 'InputDeclaration', ...props };
  }

  _ifStmt() {
    this._expect('IF');
    const test = this._expression();
    const consequent = [];
    this._expect('COLON');
    let bodyStart = this.pos;
    while (this._peek() && this._peek().type !== 'ELSE') {
      const stmt = this._statement();
      if (stmt) consequent.push(stmt);
      if (this.pos === bodyStart) break;
      bodyStart = this.pos;
    }
    let alternate = null;
    if (this._peek() && this._peek().type === 'ELSE') {
      this._next(); this._expect('COLON');
      const altBody = [];
      while (this._peek() && this._peek().type !== 'ELSE' && this._peek().type !== 'IF') {
        const stmt = this._statement();
        if (stmt) altBody.push(stmt);
        if (this.pos >= this.tokens.length) break;
      }
      alternate = altBody;
    }
    return { type: 'IfStatement', test, consequent, alternate };
  }

  _forStmt() {
    this._expect('FOR');
    const id = this._expect('IDENTIFIER').value;
    this._expect('ASSIGN');
    const init = this._expression();
    this._expect('TO');
    const limit = this._expression();
    const body = [];
    this._expect('COLON');
    const bodyStart = this.pos;
    while (this._peek() && this._peek().type !== 'IDENTIFIER' && this._peek().type !== 'RPAREN' && this._peek().type !== 'RBRACE') {
      const stmt = this._statement();
      if (stmt) body.push(stmt);
      if (this.pos === bodyStart) break;
    }
    return { type: 'ForStatement', id, init, limit, body };
  }

  _varDecl() {
    this._expect('VAR');
    const name = this._expect('IDENTIFIER').value;
    this._expect('ASSIGN');
    const value = this._expression();
    return { type: 'VarDeclaration', name, value };
  }

  _returnStmt() {
    this._expect('RETURN');
    const value = this._expression();
    return { type: 'ReturnStatement', value: value };
  }

  _expression() {
    return this._ternary();
  }

  _ternary() {
    let left = this._logicalOr();
    if (this._match('QUESTION')) {
      const middle = this._expression();
      this._expect('COLON');
      const right = this._expression();
      return { type: 'Ternary', test: left, consequent: middle, alternate: right };
    }
    return left;
  }

  _logicalOr() {
    let left = this._logicalAnd();
    while (this._match('OR')) {
      const right = this._logicalAnd();
      left = { type: 'BinaryOp', op: 'or', left, right };
    }
    return left;
  }

  _logicalAnd() {
    let left = this._equality();
    while (this._match('AND')) {
      const right = this._equality();
      left = { type: 'BinaryOp', op: 'and', left, right };
    }
    return left;
  }

  _equality() {
    let left = this._comparison();
    while (true) {
      if (this._match('EQ')) { left = { type: 'BinaryOp', op: '==', left, right: this._comparison() }; continue; }
      if (this._match('NEQ')) { left = { type: 'BinaryOp', op: '!=', left, right: this._comparison() }; continue; }
      break;
    }
    return left;
  }

  _comparison() {
    let left = this._addition();
    while (true) {
      if (this._match('GT')) { left = { type: 'BinaryOp', op: '>', left, right: this._addition() }; continue; }
      if (this._match('LT')) { left = { type: 'BinaryOp', op: '<', left, right: this._addition() }; continue; }
      if (this._match('GE')) { left = { type: 'BinaryOp', op: '>=', left, right: this._addition() }; continue; }
      if (this._match('LE')) { left = { type: 'BinaryOp', op: '<=', left, right: this._addition() }; continue; }
      break;
    }
    return left;
  }

  _addition() {
    let left = this._multiplication();
    while (true) {
      if (this._match('PLUS')) { left = { type: 'BinaryOp', op: '+', left, right: this._multiplication() }; continue; }
      if (this._match('MINUS')) { left = { type: 'BinaryOp', op: '-', left, right: this._multiplication() }; continue; }
      break;
    }
    return left;
  }

  _multiplication() {
    let left = this._unary();
    while (true) {
      if (this._match('MUL')) { left = { type: 'BinaryOp', op: '*', left, right: this._unary() }; continue; }
      if (this._match('DIV')) { left = { type: 'BinaryOp', op: '/', left, right: this._unary() }; continue; }
      if (this._match('MOD')) { left = { type: 'BinaryOp', op: '%', left, right: this._unary() }; continue; }
      break;
    }
    return left;
  }

  _unary() {
    if (this._match('MINUS')) return { type: 'UnaryOp', op: '-', operand: this._unary() };
    if (this._match('BANG')) return { type: 'UnaryOp', op: '!', operand: this._unary() };
    return this._primary();
  }

  _primary() {
    const t = this._peek();
    if (!t) throw new PineSyntaxError('Unexpected end of expression', 0, 0);
    if (t.type === 'LPAREN') {
      this._next();
      const expr = this._expression();
      this._expect('RPAREN');
      return expr;
    }
    if (t.type === 'NUMBER') { this._next(); return { type: 'NumberLiteral', value: t.value }; }
    if (t.type === 'STRING') { this._next(); return { type: 'StringLiteral', value: t.value }; }
    if (t.type === 'COLOR') { this._next(); return { type: 'ColorLiteral', value: t.value }; }
    if (t.type === 'TRUE') { this._next(); return { type: 'BooleanLiteral', value: true }; }
    if (t.type === 'FALSE') { this._next(); return { type: 'BooleanLiteral', value: false }; }
    if (t.type === 'NA') { this._next(); return { type: 'NullLiteral' }; }
    if (t.type === 'IDENTIFIER') {
      this._next();
      if (this._match('LPAREN')) {
        const args = [];
        while (this._peek() && this._peek().type !== 'RPAREN') {
          const named = this._namedArg();
          args.push(named || this._expression());
          if (!this._match('COMMA')) break;
        }
        this._expect('RPAREN');
        return { type: 'CallExpression', callee: t.value, arguments: args };
      }
      if (this._match('LBRACK')) {
        const index = this._expression();
        this._expect('RBRACK');
        return { type: 'IndexExpression', object: { type: 'Identifier', name: t.value }, index };
      }
      return { type: 'Identifier', name: t.value };
    }
    if (t.type === 'LBRACK') {
      this._next();
      const elements = [];
      while (this._peek() && this._peek().type !== 'RBRACK') {
        elements.push(this._expression());
        if (!this._match('COMMA')) break;
      }
      this._expect('RBRACK');
      return { type: 'ArrayLiteral', elements };
    }
    throw new PineSyntaxError(`Unexpected token ${t.type}`, t.line, t.col);
  }

  _argList() {
    const args = [];
    while (this._peek() && this._peek().type !== 'RPAREN') {
      const named = this._namedArg();
      args.push(named || this._expression());
      if (!this._match('COMMA')) break;
    }
    return args;
  }

  _namedArg() {
    if (this._peek() && this._peek().type === 'IDENTIFIER' && this.tokens[this.pos + 1] && this.tokens[this.pos + 1].type === 'COLON') {
      const name = this._next().value;
      this._next();
      return { type: 'NamedArgument', name, value: this._expression() };
    }
    if (this._peek() && this._peek().type === 'IDENTIFIER' && this.tokens[this.pos + 1] && this.tokens[this.pos + 1].type === 'ASSIGN') {
      const name = this._next().value;
      this._next();
      return { type: 'NamedArgument', name, value: this._expression() };
    }
    return null;
  }
}
