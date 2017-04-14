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

import WeCanvas from './weCanvas'

export default class WeStage {
  constructor(canvas, options = {}) {
      this._canvas = new WeCanvas({
        canvas
      }).cache(false)
      this._children = []
      this._updating = false
      this._init(options)
    }
    /**
     * _initOptions
     * init options for settings
     *
     * @param  {[Boolean]} options.autoClear [auto clear stage]
     * @param  {[Number]} options.ratio     [ratio for init scale]
     */
  _initOptions({
      clear = true
    }) {
      if (typeof clear === "boolean") {
        this._clear = clear
      }
    }
    /**
     * _init
     * init
     *
     * @param  {[Object]} options [options]
     */
  _init(options) {
      this._initOptions(options)
      const {
        width,
        height
      } = this._canvas
      this._offScreenCanvas = new WeCanvas({
        width,
        height
      }).cache(false)
    }
    /**
     * setSize
     * set stage size
     *
     * @param {[Number]} width  [stage width]
     * @param {[Number]} height [stage height]
     */
  setSize(width, height) {
      this._canvas.setSize(width, height)
      this._offScreenCanvas.setSize(width, height)
    }
    /**
     * setStyle
     * set stage style
     *
     * @param {[String]} width  [stage style width]
     * @param {[String]} height [stage style height]
     */
  setStyle(width, height) {
      this._canvas.setStyle(width, height)
    }
    /**
     * destrory
     * destrory stage
     */
  destory() {
      this._canvas = null
      this._offScreenCanvas = null
      this._children = []
    }
    /**
     * clear
     * @return {[type]} [description]
     */
  clear() {
    this._offScreenCanvas.clear()
    this._canvas.clear()
  }

  /**
   * addChild
   * add child to the stage
   *
   * @param {[WeCanvas or Object]} child [WeCanvas instance or Object cotains Canvas]
   */
  addChild(child) {
      if (child instanceof WeCanvas || child.canvas.getContext('2d')) {
        this._children.push(child)
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
     * update
     * update stage, draw canvas
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
      this._offScreenCanvas.draw()
      this._updateStage()
      this._updating = false
      this._children = []
    }
    /**
     * _translateStage
     * translate offscreen canvas
     */
  _translateStage() {
      if (this._coordinate) {
        const {
          x, y
        } = this._coordinate
        this._offScreenCanvas.translate(x, y)
      }
    }
    /**
     * _resetCoordinate
     * reset coordinate of off screen canvas
     */
  _resetCoordinate() {
      if (this._translateReset) {
        const {
          x,
          y
        } = this._coordinate
        this._offScreenCanvas.translate(-x, -y)
        this._coordinate = null
      }
    }
    /**
     * _drawChildren
     * draw children on offscreen canvas
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
     * _drawChild
     * draw child, which is a instance of WeCanvas
     *
     * @param  {[WeCanvas]} child [a WeCanvas isntance]
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
      this._offScreenCanvas.drawImage(canvas, x, y, width, height)
    }
    /**
     * _drawChildCanvas
     * draw child, which is a raw Canvas element
     *
     * @param  {[Number]} options.x      [horizontal axis]
     * @param  {[Number]} options.y      [vertical axis]
     * @param  {[Canvas]} options.canvas   [Canvas]
     */
  _drawChildCanvas({
      x = 0,
      y = 0,
      canvas
    }) {
      this._offScreenCanvas.drawImage(canvas, x, y, canvas.width, canvas.height)
    }
    /**
     * _updateStage
     * draw offScreen canvas to dom canvas
     */
  _updateStage() {
    this._canvas.drawImage(this._offScreenCanvas.canvas, 0, 0)
    this._canvas.draw()
  }
}