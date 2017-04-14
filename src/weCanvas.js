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
export default class WeCanvas {
  constructor(options) {
      this._init(options)
      this._rendered = false
      this._actions = []
      this.width = this.canvas.width
      this.height = this.canvas.height
    }
    /**
     * _initMethods
     * reduce context methods that need to be bind
     *
     * @param  {Array}  methods [context methods]
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
    _init({
      canvas,
      actions,
      width,
      height,
      x,
      y,
      methods
    } = {}){
      this.canvas = canvas || document.createElement('canvas')
      this._ctx = this.canvas.getContext('2d')
      this._initMethods(methods)
      this.setSize(width, height)
      this.setCoordinate(x, y)
      this.setActions(actions)
    }
    /**
     * _proxy
     * bind context method or property to this instance
     *
     * @param  {[String]} method [context method or property]
     */
  _proxy(method) {
      let prop = this._ctx[method]
      let func = null
      if (prop) {
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
     * setSize
     * set canvas size
     *
     * @param {[Number]} width  [canvas width]
     * @param {[Number]} height [canvas height]
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
     * setStyle
     * set canvas style, only width and height
     *
     * @param {[String]} width  [canvas style width]
     * @param {[String]} height [canvas style height]
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
     * setCoordinate
     * set coordinate of stage
     *
     * @param {[Number]} x [horizontal axis]
     * @param {[Number]} y [vertical axis]
     */
  setCoordinate(x = 0, y = 0) {
      this.x = x
      this.y = y
      return this
    }
    /**
     * clear
     * clear canvas
     */
  clear() {
      this._ctx.clearRect(0, 0, this.width, this.height)
      this.setActions([])
    }
    /**
     * getActions
     *
     * @return {[Array]} [actions for context drawing]
     */
  getActions() {
      return this._actions
    }
    /**
     * setActions
     * set actions
     *
     * @param {[Array]} actions [actions for context drawing]
     */
  setActions(actions) {
      if (Array.isArray(actions)) {
        this._actions = actions
      }
    }
    /**
     * draw
     * run instructions, draw canvas
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
    }
    /**
     * cache
     * set cache, default: true
     *
     * @param  {Boolean} ifCache [if set cache]
     */
  cache(ifCache = true) {
    if (typeof ifCache === "boolean") {
      this._cache = ifCache
    }
    return this
  }
}