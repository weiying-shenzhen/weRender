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
      this._rendered = false
      this._init(options)
      this.width = this.canvas.width
      this.height = this.canvas.height
    }
    /**
     * reduce context methods that need to be bind
     *
     * @private
     * @param  {Array}  methods - context methods
     */
  _initMethods(methods = []) {
      const retangles = ["clearRect", "fillRect", "strokeRect"]
      const text = ["fillText", "strokeText", "measureText"]
      const lineStyles = ["lineWidth", "lineCap", "lineJoin"]
      const textStyles = ["font", "textAlgin", "textBaseline", "direction"]
      const fillStrokeStyles = ["fillStyle", "strokeStyle"]
      const paths = ["beginPath", "closePath", "moveTo", "lineTo", "arc", "arcTo", "rect"]
      const pathsDrawing = ["fill", "stroke"]
      const transformations = ["rotate", "scale", "translate", "transform", "resetTransform"]
      const images = ["drawImage"]
      const pixel = ["createImageData", "getImageData", "putImageData"]
      const state = ["save", "restore"]
      const shadow = ['shadowColor', 'shadowBlur']
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
      )
      _methods.reduce((hash, method) => {
        if (!hash[method]) {
          this._proxy(method)
          hash[method] = true
        }
        return hash
      }, {})
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
      this.canvas = canvas || document.createElement('canvas')
      this._ctx = this.canvas.getContext('2d')
      this._initMethods(methods)
      this.setSize(width, height)
      this.setCoordinate(x, y)
      this.setActions(actions)
    }
    /**
     * bind context method or property to this instance
     *
     * @private
     * @param  {String} method - context method or property
     */
  _proxy(method) {
      let prop = this._ctx[method]
      let func = null
      if (prop !== 'undefined') {
        if (Object.prototype.toString.call(prop) === "[object Function]") {
          func = (...args) => {
            this._actions.push({
              type: "function",
              method,
              args
            })
            return this
          }
        } else {
          func = (args) => {
            this._actions.push({
              type: "value",
              method,
              args
            })
            return this
          }
        }
        this[method] = func
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
        this.canvas.width = width
        this.width = width
      }
      if (height && height !== this.height) {
        this.canvas.height = height
        this.height = height
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
        this.canvas.style.width = width
      }
      if (height) {
        this.canvas.style.height = height
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
      this.x = x
      this.y = y
      return this
    }
    /**
     * clear canvas
     */
  clear() {
      this._ctx.clearRect(0, 0, this.width, this.height)
      this.setActions([])
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
        this._actions = actions
      }
    }
    /**
     * run actions, draw canvas
     */
  draw() {
      const shouldRender = ((!this._rendered ? true : !this._cache) && !!this._actions.length)
      if (!shouldRender) return

      this._actions.forEach(({
        type,
        method,
        args
      }) => {
        if (type === "function") {
          this._ctx[method].apply(this._ctx, args)
        } else {
          this._ctx[method] = args
        }
      })
      if (!this._rendered) {
        this._rendered = true
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
      this._cache = ifCache
    }
    return this
  }
}

export default WeCanvas