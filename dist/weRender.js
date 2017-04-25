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
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var method = "clearRect";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "fillRect",
    value: function fillRect() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var method = "fillRect";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "strokeRect",
    value: function strokeRect() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var method = "strokeRect";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "fillText",
    value: function fillText() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var method = "fillText";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "strokeText",
    value: function strokeText() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var method = "strokeText";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "measureText",
    value: function measureText() {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      var method = "measureText";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "lineWidth",
    value: function lineWidth(args) {
      var method = "lineWidth";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "lineCap",
    value: function lineCap(args) {
      var method = "lineCap";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "lineJoin",
    value: function lineJoin(args) {
      var method = "lineJoin";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "font",
    value: function font(args) {
      var method = "font";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "textAlgin",
    value: function textAlgin(args) {
      var method = "textAlgin";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "textBaseline",
    value: function textBaseline(args) {
      var method = "textBaseline";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "direction",
    value: function direction(args) {
      var method = "direction";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "fillStyle",
    value: function fillStyle(args) {
      var method = "fillStyle";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "strokeStyle",
    value: function strokeStyle(args) {
      var method = "strokeStyle";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      var method = "beginPath";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "closePath",
    value: function closePath() {
      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      var method = "closePath";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "moveTo",
    value: function moveTo() {
      for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      var method = "moveTo";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "lineTo",
    value: function lineTo() {
      for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      var method = "lineTo";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "bezierCurveTo",
    value: function bezierCurveTo() {
      for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }

      var method = "bezierCurveTo";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "quadraticCurveTo",
    value: function quadraticCurveTo() {
      for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }

      var method = "quadraticCurveTo";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "arc",
    value: function arc() {
      for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }

      var method = "arc";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "arcTo",
    value: function arcTo() {
      for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }

      var method = "arcTo";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "rect",
    value: function rect() {
      for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }

      var method = "rect";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "fill",
    value: function fill() {
      for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }

      var method = "fill";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke() {
      for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }

      var method = "stroke";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate() {
      for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }

      var method = "rotate";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "scale",
    value: function scale() {
      for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }

      var method = "scale";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "translate",
    value: function translate() {
      for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }

      var method = "translate";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "transform",
    value: function transform() {
      for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }

      var method = "transform";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "resetTransform",
    value: function resetTransform() {
      for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }

      var method = "resetTransform";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "drawImage",
    value: function drawImage() {
      for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }

      var method = "drawImage";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "createImageData",
    value: function createImageData() {
      for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }

      var method = "createImageData";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "getImageData",
    value: function getImageData() {
      for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }

      var method = "getImageData";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "putImageData",
    value: function putImageData() {
      for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }

      var method = "putImageData";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "save",
    value: function save() {
      for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }

      var method = "save";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "restore",
    value: function restore() {
      for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
        args[_key28] = arguments[_key28];
      }

      var method = "restore";
      this._actions.push({
        type: "method",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "shadowColor",
    value: function shadowColor(args) {
      var method = "shadowColor";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
      return this;
    }
  }, {
    key: "shadowBlur",
    value: function shadowBlur(args) {
      var method = "shadowBlur";
      this._actions.push({
        type: "property",
        method: method,
        args: args
      });
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
   * reduce context methods that need to be bind
   *
   * @private
   * @param  {Array}  methods - context methods
   */


  createClass(WeCanvas, [{
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

  }, {
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
      var func = null;
      if (prop !== 'undefined') {
        if (Object.prototype.toString.call(prop) === "[object Function]") {
          func = function func() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this3._actions.push({
              type: "method",
              method: method,
              args: args
            });
            return _this3;
          };
        } else {
          func = function func(args) {
            _this3._actions.push({
              type: "property",
              method: method,
              args: args
            });
            return _this3;
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
        var type = _ref2.type,
            method = _ref2.method,
            args = _ref2.args;

        if (type === "method") {
          _this4._ctx[method].apply(_this4._ctx, args);
        } else {
          _this4._ctx[method] = args;
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
