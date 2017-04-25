export default class WeGraphic {
  constructor() {
    this._actions = []
  }
  getActions() {
    return this._actions
  }
  setActions(actions = []) {
    if (Array.isArray(actions)) {
      this._actions = actions
    }
  }
  clearRect(...args) {
    const method = "clearRect"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  fillRect(...args) {
    const method = "fillRect"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  strokeRect(...args) {
    const method = "strokeRect"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  fillText(...args) {
    const method = "fillText"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  strokeText(...args) {
    const method = "strokeText"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  measureText(...args) {
    const method = "measureText"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  lineWidth(args) {
    const method = "lineWidth"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  lineCap(args) {
    const method = "lineCap"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  lineJoin(args) {
    const method = "lineJoin"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  font(args) {
    const method = "font"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  textAlgin(args) {
    const method = "textAlgin"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  textBaseline(args) {
    const method = "textBaseline"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  direction(args) {
    const method = "direction"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  fillStyle(args) {
    const method = "fillStyle"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  strokeStyle(args) {
    const method = "strokeStyle"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  beginPath(...args) {
    const method = "beginPath"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  closePath(...args) {
    const method = "closePath"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  moveTo(...args) {
    const method = "moveTo"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  lineTo(...args) {
    const method = "lineTo"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  bezierCurveTo(...args) {
    const method = "bezierCurveTo"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  quadraticCurveTo(...args) {
    const method = "quadraticCurveTo"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  arc(...args) {
    const method = "arc"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  arcTo(...args) {
    const method = "arcTo"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  rect(...args) {
    const method = "rect"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  fill(...args) {
    const method = "fill"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  stroke(...args) {
    const method = "stroke"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  rotate(...args) {
    const method = "rotate"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  scale(...args) {
    const method = "scale"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  translate(...args) {
    const method = "translate"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  transform(...args) {
    const method = "transform"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  resetTransform(...args) {
    const method = "resetTransform"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  drawImage(...args) {
    const method = "drawImage"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  createImageData(...args) {
    const method = "createImageData"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  getImageData(...args) {
    const method = "getImageData"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  putImageData(...args) {
    const method = "putImageData"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  save(...args) {
    const method = "save"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  restore(...args) {
    const method = "restore"
    this._actions.push({
      type: "method",
      method,
      args
    })
    return this
  }
  shadowColor(args) {
    const method = "shadowColor"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
  shadowBlur(args) {
    const method = "shadowBlur"
    this._actions.push({
      type: "property",
      method,
      args
    })
    return this
  }
}