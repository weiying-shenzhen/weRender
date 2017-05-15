import WeCanvas from './weCanvas'
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
      }).cache(false)
      this._children = []
      this._updating = false
      this._init(options)
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
        this._clear = clear
      }
      if (typeof ratio === "number") {
        this._ratio = ratio
      }
    }
    /**
     * init
     *
     * @private
     * @param  {Object} options - options
     */
  _init(options) {
      this._initOptions(options)
      const {
        width,
        height
      } = this._canvas
    }
    /**
     * set stage size
     *
     * @param {Number} width  - stage width
     * @param {Number} height - stage height
     */
  setSize(width, height) {
      this._canvas.setSize(width, height)
      this._canvas.setScale(this._ratio)
    }
    /**
     * set stage style
     *
     * @param {String} width  - stage style width
     * @param {String} height - stage style height
     */
  setStyle(width, height) {
      this._canvas.setStyle(width, height)
    }
    /**
     * destrory stage
     */
  destory() {
      this._canvas = null
      this._children.length = 0
    }
    /**
     * clear canvas
     */
  clear() {
    this._canvas.clear()
  }

  /**
   * add child to the stage
   *
   * @param {WeCanvas|Object} child - WeCanvas instance or Object cotains Canvas
   */
  addChild(child) {
      if (child instanceof WeCanvas || child.canvas.getContext('2d')) {
        this._children.push(child)
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
        }
      }
      if (typeof reset === "boolean") {
        this._translateReset = reset
      }
    }
    /**
     * update stage, draw child on canvas
     * **run this method, all child canvas will draw**
     */
  update() {
      if (!this._children.length || this._updating) return
      this._updating = true
      if (this._clear) {
        this.clear()
      }
      this._translateStage()
      this._drawChildren()
      this._resetCoordinate()
      this._updateStage()
      this._updating = false
      this._children = []
    }
    /**
     * translate stage
     * @private
     */
  _translateStage() {
      if (this._coordinate) {
        const {
          x,
          y
        } = this._coordinate
        this._canvas.translate(x, y)
      }
    }
    /**
     * reset coordinate
     * @private
     */
  _resetCoordinate() {
      if (this._translateReset) {
        const {
          x,
          y
        } = this._coordinate
        this._canvas.translate(-x, -y)
        this._coordinate = null
      }
    }
    /**
     * draw children
     * @private
     */
  _drawChildren() {
      this._children.forEach((child) => {
        if (child instanceof WeCanvas) {
          this._drawChild(child)
        } else {
          this._drawChildCanvas(child)
        }
      })
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
      } = child
      child.draw()
      this._canvas.drawImage(canvas, x, y, width / this._ratio, height / this._ratio)
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
      this._canvas.drawImage(canvas, x, y, canvas.width / this._ratio, canvas.height / this._ratio)
    }
    /**
     * draw dom canvas
     * @private
     */
  _updateStage() {
    this._canvas.draw()
  }
}

export default WeStage