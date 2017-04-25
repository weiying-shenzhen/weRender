(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.weRender = global.weRender || {})));
}(this, (function (exports) { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var WeGraphic = function () {
  function WeGraphic() {
    classCallCheck(this, WeGraphic);

    this._actions = [];
  }

  createClass(WeGraphic, [{
    key: "getActions",
    value: function getActions() {
      return this._actions;
    }
  }, {
    key: "setActions",
    value: function setActions() {
      var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (Array.isArray(actions)) {
        this._actions = actions;
      }
    }
  }, {
    key: "clearRect",
    value: function clearRect() {
      this._actions.push(["method", "clearRect", arguments]);
      return this;
    }
  }, {
    key: "fillRect",
    value: function fillRect() {
      this._actions.push(["method", "fillRect", arguments]);
      return this;
    }
  }, {
    key: "strokeRect",
    value: function strokeRect() {
      this._actions.push(["method", "strokeRect", arguments]);
      return this;
    }
  }, {
    key: "fillText",
    value: function fillText() {
      this._actions.push(["method", "fillText", arguments]);
      return this;
    }
  }, {
    key: "strokeText",
    value: function strokeText() {
      this._actions.push(["method", "strokeText", arguments]);
      return this;
    }
  }, {
    key: "measureText",
    value: function measureText() {
      this._actions.push(["method", "measureText", arguments]);
      return this;
    }
  }, {
    key: "lineWidth",
    value: function lineWidth() {
      this._actions.push(["property", "lineWidth", arguments]);
      return this;
    }
  }, {
    key: "lineCap",
    value: function lineCap() {
      this._actions.push(["property", "lineCap", arguments]);
      return this;
    }
  }, {
    key: "lineJoin",
    value: function lineJoin() {
      this._actions.push(["property", "lineJoin", arguments]);
      return this;
    }
  }, {
    key: "font",
    value: function font() {
      this._actions.push(["property", "font", arguments]);
      return this;
    }
  }, {
    key: "textBaseline",
    value: function textBaseline() {
      this._actions.push(["property", "textBaseline", arguments]);
      return this;
    }
  }, {
    key: "fillStyle",
    value: function fillStyle() {
      this._actions.push(["property", "fillStyle", arguments]);
      return this;
    }
  }, {
    key: "strokeStyle",
    value: function strokeStyle() {
      this._actions.push(["property", "strokeStyle", arguments]);
      return this;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      this._actions.push(["method", "beginPath", arguments]);
      return this;
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this._actions.push(["method", "closePath", arguments]);
      return this;
    }
  }, {
    key: "moveTo",
    value: function moveTo() {
      this._actions.push(["method", "moveTo", arguments]);
      return this;
    }
  }, {
    key: "lineTo",
    value: function lineTo() {
      this._actions.push(["method", "lineTo", arguments]);
      return this;
    }
  }, {
    key: "bezierCurveTo",
    value: function bezierCurveTo() {
      this._actions.push(["method", "bezierCurveTo", arguments]);
      return this;
    }
  }, {
    key: "quadraticCurveTo",
    value: function quadraticCurveTo() {
      this._actions.push(["method", "quadraticCurveTo", arguments]);
      return this;
    }
  }, {
    key: "arc",
    value: function arc() {
      this._actions.push(["method", "arc", arguments]);
      return this;
    }
  }, {
    key: "arcTo",
    value: function arcTo() {
      this._actions.push(["method", "arcTo", arguments]);
      return this;
    }
  }, {
    key: "rect",
    value: function rect() {
      this._actions.push(["method", "rect", arguments]);
      return this;
    }
  }, {
    key: "fill",
    value: function fill() {
      this._actions.push(["method", "fill", arguments]);
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke() {
      this._actions.push(["method", "stroke", arguments]);
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate() {
      this._actions.push(["method", "rotate", arguments]);
      return this;
    }
  }, {
    key: "scale",
    value: function scale() {
      this._actions.push(["method", "scale", arguments]);
      return this;
    }
  }, {
    key: "translate",
    value: function translate() {
      this._actions.push(["method", "translate", arguments]);
      return this;
    }
  }, {
    key: "transform",
    value: function transform() {
      this._actions.push(["method", "transform", arguments]);
      return this;
    }
  }, {
    key: "resetTransform",
    value: function resetTransform() {
      this._actions.push(["method", "resetTransform", arguments]);
      return this;
    }
  }, {
    key: "drawImage",
    value: function drawImage() {
      this._actions.push(["method", "drawImage", arguments]);
      return this;
    }
  }, {
    key: "createImageData",
    value: function createImageData() {
      this._actions.push(["method", "createImageData", arguments]);
      return this;
    }
  }, {
    key: "getImageData",
    value: function getImageData() {
      this._actions.push(["method", "getImageData", arguments]);
      return this;
    }
  }, {
    key: "putImageData",
    value: function putImageData() {
      this._actions.push(["method", "putImageData", arguments]);
      return this;
    }
  }, {
    key: "save",
    value: function save() {
      this._actions.push(["method", "save", arguments]);
      return this;
    }
  }, {
    key: "restore",
    value: function restore() {
      this._actions.push(["method", "restore", arguments]);
      return this;
    }
  }, {
    key: "shadowColor",
    value: function shadowColor() {
      this._actions.push(["property", "shadowColor", arguments]);
      return this;
    }
  }, {
    key: "shadowBlur",
    value: function shadowBlur() {
      this._actions.push(["property", "shadowBlur", arguments]);
      return this;
    }
  }]);
  return WeGraphic;
}();

/**
 * WeCanvas: Easy canvas api for using, support useing chain
 *
 * - Directly use <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a>` methods`
 * - `Property` of `CanvasRenderingContext2D` here is `method`
 * - Won't really drawing Canvas until run `draw()`
 *
 */

var WeCanvas = function (_WeGraphic) {
  inherits(WeCanvas, _WeGraphic);

  /**
   * create a WeCanvas instance
   *
   * @param  {Object} options - option settions for instance
   */
  function WeCanvas(options) {
    classCallCheck(this, WeCanvas);

    var _this = possibleConstructorReturn(this, (WeCanvas.__proto__ || Object.getPrototypeOf(WeCanvas)).call(this));

    _this._rendered = false;
    _this._init(options);
    _this.width = _this.canvas.width;
    _this.height = _this.canvas.height;
    return _this;
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


  createClass(WeCanvas, [{
    key: '_init',
    value: function _init() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          canvas = _ref.canvas,
          actions = _ref.actions,
          width = _ref.width,
          height = _ref.height,
          x = _ref.x,
          y = _ref.y,
          methods = _ref.methods;

      this.canvas = canvas || document.createElement('canvas');
      this._ctx = this.canvas.getContext('2d');
      this._initMethods(methods);
      this.setSize(width, height);
      this.setCoordinate(x, y);
      this.setActions(actions);
    }
    /**
     * reduce context methods that need to be bind
     *
     * @private
     * @param  {Array}  methods - context methods
     */

  }, {
    key: '_initMethods',
    value: function _initMethods() {
      var _this2 = this;

      var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      methods.reduce(function (hash, method) {
        if (!_this2[method]) {
          _this2._proxy(method);
          hash[method] = true;
        }
        return hash;
      }, {});
    }
    /**
     * bind context method or property to this instance
     *
     * @private
     * @param  {String} method - context method or property
     */

  }, {
    key: '_proxy',
    value: function _proxy(method) {
      var _this3 = this;

      var prop = this._ctx[method];
      if (prop === undefined) return;
      this[method] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this3._actions.push([Object.prototype.toString.call(prop) === "[object Function]" ? "method" : "property", method, args]);
        return _this3;
      };
    }
    /**
     * set canvas size
     *
     * @param {Number} width  - canvas width
     * @param {Number} height - canvas height
     */

  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      if (width && width !== this.width) {
        this.canvas.width = width;
        this.width = width;
      }
      if (height && height !== this.height) {
        this.canvas.height = height;
        this.height = height;
      }
      return this;
    }
    /**
     * set canvas style, only width and height
     *
     * @param {String} width  - canvas style width
     * @param {String} height - canvas style height
     */

  }, {
    key: 'setStyle',
    value: function setStyle(width, height) {
      if (width) {
        this.canvas.style.width = width;
      }
      if (height) {
        this.canvas.style.height = height;
      }
      return this;
    }
    /**
     * set coordinate of stage
     *
     * @param {Number} x - horizontal axis
     * @param {Number} y - vertical axis
     */

  }, {
    key: 'setCoordinate',
    value: function setCoordinate() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.x = x;
      this.y = y;
      return this;
    }
    /**
     * set init scale
     *
     * @param {Number} scale - scale ratio
     */

  }, {
    key: 'setScale',
    value: function setScale(scale) {
      this._ctx.scale(scale, scale);
    }
    /**
     * clear canvas
     */

  }, {
    key: 'clear',
    value: function clear() {
      this._ctx.clearRect(0, 0, this.width, this.height);
      this.setActions([]);
    }
    /**
     * run actions, draw canvas
     */

  }, {
    key: 'draw',
    value: function draw() {
      var _this4 = this;

      var shouldRender = (!this._rendered ? true : !this._cache) && !!this._actions.length;
      if (!shouldRender) return;

      this._actions.forEach(function (_ref2) {
        var _ref3 = slicedToArray(_ref2, 3),
            type = _ref3[0],
            method = _ref3[1],
            args = _ref3[2];

        var params = Array.prototype.slice.call(args);

        if (type === "method") {
          _this4._ctx[method].apply(_this4._ctx, params);
        } else {
          _this4._ctx[method] = params[0];
        }
      });
      if (!this._rendered) {
        this._rendered = true;
      }
      return this;
    }
    /**
     * set cache, default: true
     *
     * @param  {Boolean} ifCache - if set cache
     */

  }, {
    key: 'cache',
    value: function cache() {
      var ifCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (typeof ifCache === "boolean") {
        this._cache = ifCache;
      }
      return this;
    }
  }]);
  return WeCanvas;
}(WeGraphic);

/**
 * WeStage: Canvas manager for WeCanvas
 *
 */

var WeStage = function () {
  /**
   * create a WeStage instance
   *
   * @param  {Canvas} canvas  - a Canvas element related to the dom
   * @param  {Object} options - stage settings
   */
  function WeStage(canvas) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, WeStage);

    this._canvas = new WeCanvas({
      canvas: canvas
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


  createClass(WeStage, [{
    key: "_initOptions",
    value: function _initOptions(_ref) {
      var _ref$clear = _ref.clear,
          clear = _ref$clear === undefined ? true : _ref$clear,
          _ref$ratio = _ref.ratio,
          ratio = _ref$ratio === undefined ? 1 : _ref$ratio;

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

  }, {
    key: "_init",
    value: function _init(options) {
      this._initOptions(options);
      var _canvas = this._canvas,
          width = _canvas.width,
          height = _canvas.height;

      this._offScreenCanvas = new WeCanvas({
        width: width,
        height: height
      }).cache(false);
    }
    /**
     * set stage size
     *
     * @param {Number} width  - stage width
     * @param {Number} height - stage height
     */

  }, {
    key: "setSize",
    value: function setSize(width, height) {
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

  }, {
    key: "setStyle",
    value: function setStyle(width, height) {
      this._canvas.setStyle(width, height);
    }
    /**
     * destrory stage
     */

  }, {
    key: "destory",
    value: function destory() {
      this._canvas = null;
      this._offScreenCanvas = null;
      this._children = [];
    }
    /**
     * clear canvas
     */

  }, {
    key: "clear",
    value: function clear() {
      this._offScreenCanvas.clear();
      this._canvas.clear();
    }

    /**
     * add child to the stage
     *
     * @param {WeCanvas|Object} child - WeCanvas instance or Object cotains Canvas
     */

  }, {
    key: "addChild",
    value: function addChild(child) {
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

  }, {
    key: "translate",
    value: function translate() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (typeof x === "number" && typeof y === "number") {
        this._coordinate = {
          x: x,
          y: y
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

  }, {
    key: "update",
    value: function update() {
      if (!this._children.length || this._updating) return;
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

  }, {
    key: "_translateStage",
    value: function _translateStage() {
      if (this._coordinate) {
        var _coordinate = this._coordinate,
            x = _coordinate.x,
            y = _coordinate.y;

        this._offScreenCanvas.translate(x, y);
      }
    }
    /**
     * reset coordinate of off screen canvas
     * @private
     */

  }, {
    key: "_resetCoordinate",
    value: function _resetCoordinate() {
      if (this._translateReset) {
        var _coordinate2 = this._coordinate,
            x = _coordinate2.x,
            y = _coordinate2.y;

        this._offScreenCanvas.translate(-x, -y);
        this._coordinate = null;
      }
    }
    /**
     * draw children on offscreen canvas
     * @private
     */

  }, {
    key: "_drawChildren",
    value: function _drawChildren() {
      var _this = this;

      this._children.forEach(function (child) {
        if (child instanceof WeCanvas) {
          _this._drawChild(child);
        } else {
          _this._drawChildCanvas(child);
        }
      });
    }
    /**
     * draw child, which is a instance of WeCanvas
     *
     * @private
     * @param  {WeCanvas} child - a WeCanvas instance
     */

  }, {
    key: "_drawChild",
    value: function _drawChild(child) {
      var canvas = child.canvas,
          x = child.x,
          y = child.y,
          width = child.width,
          height = child.height;

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

  }, {
    key: "_drawChildCanvas",
    value: function _drawChildCanvas(_ref2) {
      var _ref2$x = _ref2.x,
          x = _ref2$x === undefined ? 0 : _ref2$x,
          _ref2$y = _ref2.y,
          y = _ref2$y === undefined ? 0 : _ref2$y,
          canvas = _ref2.canvas;

      this._offScreenCanvas.drawImage(canvas, x, y, canvas.width / this._ratio, canvas.height / this._ratio);
    }
    /**
     * draw offScreen canvas to dom canvas
     * @private
     */

  }, {
    key: "_updateStage",
    value: function _updateStage() {
      this._canvas.drawImage(this._offScreenCanvas.canvas, 0, 0);
      this._canvas.draw();
    }
  }]);
  return WeStage;
}();

exports.WeCanvas = WeCanvas;
exports.WeStage = WeStage;

Object.defineProperty(exports, '__esModule', { value: true });

})));
