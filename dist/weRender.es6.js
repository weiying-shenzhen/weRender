'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * WeCanvas: Easy canvas api for using, support useing chain
 *
 * - Directly use <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a>` methods`
 * - `Property` of `CanvasRenderingContext2D` here is `method`
 * - Won't really drawing Canvas until run `draw()`
 *
 */
class WeCanvas {
  /**
   * create a WeCanvas instance
   *
   * @param  {Object} options - option settions for instance
   */
  constructor(options) {
      this._rendered = false;
      this._init(options);
      this.width = this.canvas.width;
      this.height = this.canvas.height;
    }
    /**
     * reduce context methods that need to be bind
     *
     * @private
     * @param  {Array}  methods - context methods
     */
  _initMethods(methods = []) {
      const retangles = ["clearRect", "fillRect", "strokeRect"];
      const text = ["fillText", "strokeText", "measureText"];
      const lineStyles = ["lineWidth", "lineCap", "lineJoin"];
      const textStyles = ["font", "textAlgin", "textBaseline", "direction"];
      const fillStrokeStyles = ["fillStyle", "strokeStyle"];
      const paths = ["beginPath", "closePath", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "rect"];
      const pathsDrawing = ["fill", "stroke"];
      const transformations = ["rotate", "scale", "translate", "transform", "resetTransform"];
      const images = ["drawImage"];
      const pixel = ["createImageData", "getImageData", "putImageData"];
      const state = ["save", "restore"];
      const shadow = ['shadowColor', 'shadowBlur'];
      const _methods = [].concat(
        retangles,
        text,
        lineStyles,
        textStyles,
        fillStrokeStyles,
        paths,
        pathsDrawing,
        transformations,
        images,
        pixel,
        state,
        shadow,
        methods
      );
      _methods.reduce((hash, method) => {
        if (!hash[method]) {
          this._proxy(method);
          hash[method] = true;
        }
        return hash
      }, {});
    }
    /**
     * init
     *
     * @private
     * @param  {Canvas} options.canvas  - canvas element
     * @param  {Array}  options.actions - context drawing actions
     * @param  {Number} options.width   - canvas witdh
     * @param  {Number} options.height  - canvas height
     * @param  {Number} options.x       - horizontal axis
     * @param  {Number} options.y       - vertical axis
     * @param  {Array}  options.methods - methods for context
     */
  _init({
      canvas,
      actions,
      width,
      height,
      x,
      y,
      methods
    } = {}) {
      this.canvas = canvas || document.createElement('canvas');
      this._ctx = this.canvas.getContext('2d');
      this._initMethods(methods);
      this.setSize(width, height);
      this.setCoordinate(x, y);
      this.setActions(actions);
    }
    /**
     * bind context method or property to this instance
     *
     * @private
     * @param  {String} method - context method or property
     */
  _proxy(method) {
      let prop = this._ctx[method];
      let func = null;
      if (prop !== 'undefined') {
        if (Object.prototype.toString.call(prop) === "[object Function]") {
          func = (...args) => {
            this._actions.push({
              type: "function",
              method,
              args
            });
            return this
          };
        } else {
          func = (args) => {
            this._actions.push({
              type: "value",
              method,
              args
            });
            return this
          };
        }
        this[method] = func;
      }
    }
    /**
     * set canvas size
     *
     * @param {Number} width  - canvas width
     * @param {Number} height - canvas height
     */
  setSize(width, height) {
      if (width && width !== this.width) {
        this.canvas.width = width;
        this.width = width;
      }
      if (height && height !== this.height) {
        this.canvas.height = height;
        this.height = height;
      }
      return this
    }
    /**
     * set canvas style, only width and height
     *
     * @param {String} width  - canvas style width
     * @param {String} height - canvas style height
     */
  setStyle(width, height) {
      if (width) {
        this.canvas.style.width = width;
      }
      if (height) {
        this.canvas.style.height = height;
      }
      return this
    }
    /**
     * set coordinate of stage
     *
     * @param {Number} x - horizontal axis
     * @param {Number} y - vertical axis
     */
  setCoordinate(x = 0, y = 0) {
      this.x = x;
      this.y = y;
      return this
    }
    /**
     * set init scale
     *
     * @param {Number} scale - scale ratio
     */
  setScale(scale) {
      this._ctx.scale(scale, scale);
    }
    /**
     * clear canvas
     */
  clear() {
      this._ctx.clearRect(0, 0, this.width, this.height);
      this.setActions([]);
    }
    /**
     * get actions for context drawing
     */
  getActions() {
      return this._actions
    }
    /**
     * set actions
     *
     * @param {Array} actions - actions for context drawing
     */
  setActions(actions = []) {
      if (Array.isArray(actions)) {
        this._actions = actions;
      }
    }
    /**
     * run actions, draw canvas
     */
  draw() {
      const shouldRender = ((!this._rendered ? true : !this._cache) && !!this._actions.length);
      if (!shouldRender) return

      this._actions.forEach(({
        type,
        method,
        args
      }) => {
        if (type === "function") {
          this._ctx[method].apply(this._ctx, args);
        } else {
          this._ctx[method] = args;
        }
      });
      if (!this._rendered) {
        this._rendered = true;
      }
      return this
    }
    /**
     * set cache, default: true
     *
     * @param  {Boolean} ifCache - if set cache
     */
  cache(ifCache = true) {
    if (typeof ifCache === "boolean") {
      this._cache = ifCache;
    }
    return this
  }
}

/**
 * WeStage: Canvas manager for WeCanvas
 *
 */
class WeStage {
  /**
   * create a WeStage instance
   *
   * @param  {Canvas} canvas  - a Canvas element related to the dom
   * @param  {Object} options - stage settings
   */
  constructor(canvas, options = {}) {
      this._canvas = new WeCanvas({
        canvas
      }).cache(false);
      this._children = [];
      this._updating = false;
      this._init(options);
    }
    /**
     * init options for settings
     *
     * @private
     * @param  {Boolean} options.clear - auto clear stage
     * @param  {Number} options.ratio  - zoom down level when draw child Canvas
     */
  _initOptions({
      clear = true,
      ratio = 1
    }) {
      if (typeof clear === "boolean") {
        this._clear = clear;
      }
      if (typeof ratio === "number") {
        this._ratio = ratio;
      }
    }
    /**
     * init
     *
     * @private
     * @param  {Object} options - options
     */
  _init(options) {
      this._initOptions(options);
      const {
        width,
        height
      } = this._canvas;
      this._offScreenCanvas = new WeCanvas({
        width,
        height
      }).cache(false);
    }
    /**
     * set stage size
     *
     * @param {Number} width  - stage width
     * @param {Number} height - stage height
     */
  setSize(width, height) {
      this._canvas.setSize(width, height);
      this._offScreenCanvas.setSize(width, height);
      this._offScreenCanvas.setScale(this._ratio);
    }
    /**
     * set stage style
     *
     * @param {String} width  - stage style width
     * @param {String} height - stage style height
     */
  setStyle(width, height) {
      this._canvas.setStyle(width, height);
    }
    /**
     * destrory stage
     */
  destory() {
      this._canvas = null;
      this._offScreenCanvas = null;
      this._children = [];
    }
    /**
     * clear canvas
     */
  clear() {
    this._offScreenCanvas.clear();
    this._canvas.clear();
  }

  /**
   * add child to the stage
   *
   * @param {WeCanvas|Object} child - WeCanvas instance or Object cotains Canvas
   */
  addChild(child) {
      if (child instanceof WeCanvas || child.canvas.getContext('2d')) {
        this._children.push(child);
      }
    }
    /**
     * translate stage, move coordinate
     *
     * @param  {Number}  x     - offset x
     * @param  {Number}  y     - offset y
     * @param  {Boolean} reset - should reset after update
     */
  translate(x = 0, y = 0, reset = false) {
      if (typeof x === "number" && typeof y === "number") {
        this._coordinate = {
          x,
          y
        };
      }
      if (typeof reset === "boolean") {
        this._translateReset = reset;
      }
    }
    /**
     * update stage, draw child on canvas
     * **run this method, all child canvas will draw**
     */
  update() {
      if (!this._children.length || this._updating) return
      this._updating = true;
      if (this._clear) {
        this.clear();
      }
      this._translateStage();
      this._drawChildren();
      this._resetCoordinate();
      this._offScreenCanvas.draw();
      this._updateStage();
      this._updating = false;
      this._children = [];
    }
    /**
     * translate offscreen canvas
     * @private
     */
  _translateStage() {
      if (this._coordinate) {
        const {
          x,
          y
        } = this._coordinate;
        this._offScreenCanvas.translate(x, y);
      }
    }
    /**
     * reset coordinate of off screen canvas
     * @private
     */
  _resetCoordinate() {
      if (this._translateReset) {
        const {
          x,
          y
        } = this._coordinate;
        this._offScreenCanvas.translate(-x, -y);
        this._coordinate = null;
      }
    }
    /**
     * draw children on offscreen canvas
     * @private
     */
  _drawChildren() {
      this._children.forEach((child) => {
        if (child instanceof WeCanvas) {
          this._drawChild(child);
        } else {
          this._drawChildCanvas(child);
        }
      });
    }
    /**
     * draw child, which is a instance of WeCanvas
     *
     * @private
     * @param  {WeCanvas} child - a WeCanvas instance
     */
  _drawChild(child) {
      const {
        canvas,
        x,
        y,
        width,
        height
      } = child;
      child.draw();
      this._offScreenCanvas.drawImage(canvas, x, y, width / this._ratio, height / this._ratio);
    }
    /**
     * draw child, which is a raw Canvas element
     *
     * @private
     * @param  {Number} options.x      - horizontal axis
     * @param  {Number} options.y      - vertical axis
     * @param  {Canvas} options.canvas   - Canvas
     */
  _drawChildCanvas({
      x = 0,
      y = 0,
      canvas
    }) {
      this._offScreenCanvas.drawImage(canvas, x, y, canvas.width / this._ratio, canvas.height / this._ratio);
    }
    /**
     * draw offScreen canvas to dom canvas
     * @private
     */
  _updateStage() {
    this._canvas.drawImage(this._offScreenCanvas.canvas, 0, 0);
    this._canvas.draw();
  }
}

exports.WeCanvas = WeCanvas;
exports.WeStage = WeStage;
