'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

/**
 *  WeCanvas
 *
 *  Easy canvas api for using, support use chain
 *
 *  Example:
 *
 *  const canvas = new WeCanvas()
 *  canvas.setSize(100, 100).scale(2, 2).fillRect(0, 0, 10, 10)
 *
 */
var WeCanvas = function () {
  function WeCanvas(options) {
    classCallCheck(this, WeCanvas);

    this._init(options);
    this._rendered = false;
    this._actions = [];
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
  /**
   * _initMethods
   * reduce context methods that need to be bind
   *
   * @param  {Array}  methods [context methods]
   */


  createClass(WeCanvas, [{
    key: "_initMethods",
    value: function _initMethods() {
      var _this = this;

      var methods = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var retangles = ["clearRect", "fillRect", "strokeRect"];
      var text = ["fillText", "strokeText", "measureText"];
      var lineStyles = ["lineWidth", "lineCap", "lineJoin"];
      var textStyles = ["font", "textAlgin", "textBaseline", "direction"];
      var fillStrokeStyles = ["fillStyle", "strokeStyle"];
      var paths = ["beginPath", "closePath", "moveTo", "lineTo", "arc", "arcTo", "rect"];
      var pathsDrawing = ["fill", "stroke"];
      var transformations = ["rotate", "scale", "translate", "transform", "resetTransform"];
      var images = ["drawImage"];
      var pixel = ["createImageData", "getImageData", "putImageData"];
      var state = ["save", "restore"];
      var _methods = [].concat(retangles, text, lineStyles, textStyles, fillStrokeStyles, paths, pathsDrawing, transformations, images, pixel, state, methods);

      _methods.reduce(function (hash, method) {
        if (!hash[method]) {
          _this._proxy(method);
          hash[method] = true;
        }
        return hash;
      }, {});
    }
    /**
     * _init
     * init
     *
     * @param  {[Canvas]} options.canvas  [canvas element]
     * @param  {[Array]}  options.actions [context drawing actions]
     * @param  {[Number]} options.width   [canvas witdh]
     * @param  {[Number]} options.height  [canvas height]
     * @param  {[Number]} options.x       [horizontal axis]
     * @param  {[Number]} options.y       [vertical axis]
     * @param  {[Array]}  options.methods [methods for context]
     */

  }, {
    key: "_init",
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
     * _proxy
     * bind context method or property to this instance
     *
     * @param  {[String]} method [context method or property]
     */

  }, {
    key: "_proxy",
    value: function _proxy(method) {
      var _this2 = this;

      var prop = this._ctx[method];
      var func = null;
      if (prop) {
        if (Object.prototype.toString.call(prop) === "[object Function]") {
          func = function func() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this2._actions.push({
              type: "function",
              method: method,
              args: args
            });
            return _this2;
          };
        } else {
          func = function func(args) {
            _this2._actions.push({
              type: "value",
              method: method,
              args: args
            });
            return _this2;
          };
        }
        this[method] = func;
      }
    }
    /**
     * setSize
     * set canvas size
     *
     * @param {[Number]} width  [canvas width]
     * @param {[Number]} height [canvas height]
     */

  }, {
    key: "setSize",
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
     * setStyle
     * set canvas style, only width and height
     *
     * @param {[String]} width  [canvas style width]
     * @param {[String]} height [canvas style height]
     */

  }, {
    key: "setStyle",
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
     * setCoordinate
     * set coordinate of stage
     *
     * @param {[Number]} x [horizontal axis]
     * @param {[Number]} y [vertical axis]
     */

  }, {
    key: "setCoordinate",
    value: function setCoordinate() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.x = x;
      this.y = y;
      return this;
    }
    /**
     * clear
     * clear canvas
     */

  }, {
    key: "clear",
    value: function clear() {
      this._ctx.clearRect(0, 0, this.width, this.height);
      this.setActions([]);
    }
    /**
     * getActions
     *
     * @return {[Array]} [actions for context drawing]
     */

  }, {
    key: "getActions",
    value: function getActions() {
      return this._actions;
    }
    /**
     * setActions
     * set actions
     *
     * @param {[Array]} actions [actions for context drawing]
     */

  }, {
    key: "setActions",
    value: function setActions(actions) {
      if (Array.isArray(actions)) {
        this._actions = actions;
      }
    }
    /**
     * draw
     * run instructions, draw canvas
     */

  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      var shouldRender = (!this._rendered ? true : !this._cache) && !!this._actions.length;
      if (!shouldRender) return;

      this._actions.forEach(function (_ref2) {
        var type = _ref2.type,
            method = _ref2.method,
            args = _ref2.args;

        if (type === "function") {
          _this3._ctx[method].apply(_this3._ctx, args);
        } else {
          _this3._ctx[method] = args;
        }
      });
      if (!this._rendered) {
        this._rendered = true;
      }
    }
    /**
     * cache
     * set cache, default: true
     *
     * @param  {Boolean} ifCache [if set cache]
     */

  }, {
    key: "cache",
    value: function cache() {
      var ifCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (typeof ifCache === "boolean") {
        this._cache = ifCache;
      }
      return this;
    }
  }]);
  return WeCanvas;
}();

/**
 * WeStage
 *
 * Canvas manager for WeCanvas
 *
 * Example:
 *
 * const stage = new WeStage()
 * stage.addChid(child)
 * stage.update()
 *
 */

var WeStage = function () {
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
   * _initOptions
   * init options for settings
   *
   * @param  {[Boolean]} options.autoClear [auto clear stage]
   * @param  {[Number]} options.ratio     [ratio for init scale]
   */


  createClass(WeStage, [{
    key: '_initOptions',
    value: function _initOptions(_ref) {
      var _ref$clear = _ref.clear,
          clear = _ref$clear === undefined ? true : _ref$clear;

      if (typeof clear === "boolean") {
        this._clear = clear;
      }
    }
    /**
     * _init
     * init
     *
     * @param  {[Object]} options [options]
     */

  }, {
    key: '_init',
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
     * setSize
     * set stage size
     *
     * @param {[Number]} width  [stage width]
     * @param {[Number]} height [stage height]
     */

  }, {
    key: 'setSize',
    value: function setSize(width, height) {
      this._canvas.setSize(width, height);
      this._offScreenCanvas.setSize(width, height);
    }
    /**
     * setStyle
     * set stage style
     *
     * @param {[String]} width  [stage style width]
     * @param {[String]} height [stage style height]
     */

  }, {
    key: 'setStyle',
    value: function setStyle(width, height) {
      this._canvas.setStyle(width, height);
    }
    /**
     * destrory
     * destrory stage
     */

  }, {
    key: 'destory',
    value: function destory() {
      this._canvas = null;
      this._offScreenCanvas = null;
      this._children = [];
    }
    /**
     * clear
     * @return {[type]} [description]
     */

  }, {
    key: 'clear',
    value: function clear() {
      this._offScreenCanvas.clear();
      this._canvas.clear();
    }

    /**
     * addChild
     * add child to the stage
     *
     * @param {[WeCanvas or Object]} child [WeCanvas instance or Object cotains Canvas]
     */

  }, {
    key: 'addChild',
    value: function addChild(child) {
      if (child instanceof WeCanvas || child.canvas.getContext('2d')) {
        this._children.push(child);
      }
    }
    /**
     * translate
     * translate stage, move coordinate
     *
     * @param  {Number}  x     [offset x]
     * @param  {Number}  y     [offset y]
     * @param  {Boolean} reset [should reset after update]
     */

  }, {
    key: 'translate',
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
     * update
     * update stage, draw canvas
     */

  }, {
    key: 'update',
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
     * _translateStage
     * translate offscreen canvas
     */

  }, {
    key: '_translateStage',
    value: function _translateStage() {
      if (this._coordinate) {
        var _coordinate = this._coordinate,
            x = _coordinate.x,
            y = _coordinate.y;

        this._offScreenCanvas.translate(x, y);
      }
    }
    /**
     * _resetCoordinate
     * reset coordinate of off screen canvas
     */

  }, {
    key: '_resetCoordinate',
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
     * _drawChildren
     * draw children on offscreen canvas
     */

  }, {
    key: '_drawChildren',
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
     * _drawChild
     * draw child, which is a instance of WeCanvas
     *
     * @param  {[WeCanvas]} child [a WeCanvas isntance]
     */

  }, {
    key: '_drawChild',
    value: function _drawChild(child) {
      var canvas = child.canvas,
          x = child.x,
          y = child.y,
          width = child.width,
          height = child.height;

      child.draw();
      this._offScreenCanvas.drawImage(canvas, x, y, width, height);
    }
    /**
     * _drawChildCanvas
     * draw child, which is a raw Canvas element
     *
     * @param  {[Number]} options.x      [horizontal axis]
     * @param  {[Number]} options.y      [vertical axis]
     * @param  {[Canvas]} options.canvas   [Canvas]
     */

  }, {
    key: '_drawChildCanvas',
    value: function _drawChildCanvas(_ref2) {
      var _ref2$x = _ref2.x,
          x = _ref2$x === undefined ? 0 : _ref2$x,
          _ref2$y = _ref2.y,
          y = _ref2$y === undefined ? 0 : _ref2$y,
          canvas = _ref2.canvas;

      this._offScreenCanvas.drawImage(canvas, x, y, canvas.width, canvas.height);
    }
    /**
     * _updateStage
     * draw offScreen canvas to dom canvas
     */

  }, {
    key: '_updateStage',
    value: function _updateStage() {
      this._canvas.drawImage(this._offScreenCanvas.canvas, 0, 0);
      this._canvas.draw();
    }
  }]);
  return WeStage;
}();

exports.WeCanvas = WeCanvas;
exports.WeStage = WeStage;
