export class WebGLRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.gl = null;
    this._initialized = false;
    this._programs = new Map();
    this._buffers = new Map();
  }

  init() {
    if (this._initialized) return;
    const gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not available, falling back to Canvas2D');
      return;
    }
    this.gl = gl;
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this._initialized = true;
    this._createDefaultShaders(gl);
  }

  resize(width, height) {
    if (this.gl) {
      this.gl.viewport(0, 0, width, height);
    }
  }

  isSupported() {
    return this.gl !== null;
  }

  clear(r, g, b, a = 1) {
    if (!this.gl) return;
    this.gl.clearColor(r, g, b, a);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  drawLine(vertices, color) {
    if (!this.gl) return;
    const gl = this.gl;
    const program = this._programs.get('line');
    if (!program) return;
    gl.useProgram(program);
    const buf = this._createBuffer('line_' + this._bufId(), vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(posLoc);
    const colorLoc = gl.getUniformLocation(program, 'u_color');
    gl.uniform4f(colorLoc, color[0], color[1], color[2], color[3] || 1);
    gl.drawArrays(gl.LINE_STRIP, 0, vertices.length / 2);
  }

  drawRect(vertices, color, fill = false) {
    if (!this.gl) return;
    const gl = this.gl;
    const program = this._programs.get(fill ? 'fill' : 'line');
    if (!program) return;
    gl.useProgram(program);
    const buf = this._createBuffer('rect_' + this._bufId(), vertices);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(posLoc);
    const colorLoc = gl.getUniformLocation(program, 'u_color');
    gl.uniform4f(colorLoc, color[0], color[1], color[2], color[3] || 1);
    gl.drawArrays(fill ? gl.TRIANGLE_STRIP : gl.LINE_LOOP, 0, vertices.length / 2);
  }

  _bufId() {
    return Date.now() + '_' + Math.random().toString(36).slice(2, 8);
  }

  _createDefaultShaders(gl) {
    const vs = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;
    const lineFs = `
      precision mediump float;
      uniform vec4 u_color;
      void main() {
        gl_FragColor = u_color;
      }
    `;
    this._createProgram(gl, 'line', vs, lineFs);
    this._createProgram(gl, 'fill', vs, lineFs);
  }

  _createProgram(gl, name, vsSrc, fsSrc) {
    const vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSrc);
    gl.compileShader(vs);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSrc);
    gl.compileShader(fs);
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    this._programs.set(name, prog);
  }

  _createBuffer(name, data) {
    const gl = this.gl;
    let buf = this._buffers.get(name);
    if (!buf) {
      buf = gl.createBuffer();
      this._buffers.set(name, buf);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW);
    return buf;
  }

  destroy() {
    if (!this.gl) return;
    for (const buf of this._buffers.values()) this.gl.deleteBuffer(buf);
    for (const prog of this._programs.values()) this.gl.deleteProgram(prog);
    this._buffers.clear();
    this._programs.clear();
    this._initialized = false;
    this.gl = null;
  }
}
