import { describe, it, expect, vi } from 'vitest';
import { WebGLRenderer } from '../src/core/WebGLRenderer.js';
import { LODRenderer } from '../src/core/LODRenderer.js';

describe('WebGLRenderer with mocked context', () => {
  it('initializes and renders with WebGL', () => {
    const mockGL = {
      viewport: vi.fn(), clearColor: vi.fn(), clear: vi.fn(),
      createShader: vi.fn(() => ({})), shaderSource: vi.fn(), compileShader: vi.fn(),
      createProgram: vi.fn(() => ({})), attachShader: vi.fn(), linkProgram: vi.fn(),
      useProgram: vi.fn(), getAttribLocation: vi.fn(() => 0),
      vertexAttribPointer: vi.fn(), enableVertexAttribArray: vi.fn(),
      getUniformLocation: vi.fn(() => 0), uniform4f: vi.fn(),
      createBuffer: vi.fn(() => ({})), bindBuffer: vi.fn(),
      bufferData: vi.fn(), deleteBuffer: vi.fn(), deleteProgram: vi.fn(),
      drawArrays: vi.fn(),
      COLOR_BUFFER_BIT: 16384, ARRAY_BUFFER: 34962,
      FLOAT: 5126, DYNAMIC_DRAW: 35048,
      VERTEX_SHADER: 35633, FRAGMENT_SHADER: 35632,
      LINE_STRIP: 3, LINE_LOOP: 2, TRIANGLE_STRIP: 6
    };
    const canvas = { getContext: vi.fn(() => mockGL), width: 800, height: 600 };
    const r = new WebGLRenderer(canvas);
    r.init();
    expect(r.isSupported()).toBe(true);
    r.clear(0, 0, 0, 1);
    expect(mockGL.clearColor).toHaveBeenCalledWith(0, 0, 0, 1);
    r.drawLine([0, 0, 1, 1], [1, 0, 0, 1]);
    expect(mockGL.drawArrays).toHaveBeenCalled();
    r.drawRect([0, 0, 1, 0, 1, 1], [0, 1, 0, 1], true);
    r.drawRect([0, 0, 1, 0, 1, 1], [0, 1, 0, 1], false);
    r.resize(1024, 768);
    expect(mockGL.viewport).toHaveBeenCalledWith(0, 0, 1024, 768);
    r.destroy();
    expect(r._initialized).toBe(false);
  });
});

describe('LODRenderer integration', () => {
  it('switches between canvas and webgl modes', () => {
    const canvasRenderer = { render: vi.fn(() => true) };
    const webglRenderer = { isSupported: vi.fn(() => true), init: vi.fn(), clear: vi.fn(), destroy: vi.fn() };
    const lod = new LODRenderer(canvasRenderer, webglRenderer);
    lod.updateMetrics(10000, 100);
    expect(lod.getLOD()).toBeGreaterThan(0);
    lod.setMode('webgl');
    const result = lod.render();
    expect(result).toBe(true);
    lod.destroy();
    expect(webglRenderer.destroy).toHaveBeenCalled();
  });
});
