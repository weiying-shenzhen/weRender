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
   clearRect() {
     this._actions.push(["method", "clearRect", arguments])
     return this
   }
   fillRect() {
     this._actions.push(["method", "fillRect", arguments])
     return this
   }
   strokeRect() {
     this._actions.push(["method", "strokeRect", arguments])
     return this
   }
   fillText() {
     this._actions.push(["method", "fillText", arguments])
     return this
   }
   strokeText() {
     this._actions.push(["method", "strokeText", arguments])
     return this
   }
   measureText() {
     this._actions.push(["method", "measureText", arguments])
     return this
   }
   lineWidth() {
     this._actions.push(["property", "lineWidth", arguments])
     return this
   }
   lineCap() {
     this._actions.push(["property", "lineCap", arguments])
     return this
   }
   lineJoin() {
     this._actions.push(["property", "lineJoin", arguments])
     return this
   }
   font() {
     this._actions.push(["property", "font", arguments])
     return this
   }
   textBaseline() {
     this._actions.push(["property", "textBaseline", arguments])
     return this
   }
   fillStyle() {
     this._actions.push(["property", "fillStyle", arguments])
     return this
   }
   strokeStyle() {
     this._actions.push(["property", "strokeStyle", arguments])
     return this
   }
   beginPath() {
     this._actions.push(["method", "beginPath", arguments])
     return this
   }
   closePath() {
     this._actions.push(["method", "closePath", arguments])
     return this
   }
   moveTo() {
     this._actions.push(["method", "moveTo", arguments])
     return this
   }
   lineTo() {
     this._actions.push(["method", "lineTo", arguments])
     return this
   }
   bezierCurveTo() {
     this._actions.push(["method", "bezierCurveTo", arguments])
     return this
   }
   quadraticCurveTo() {
     this._actions.push(["method", "quadraticCurveTo", arguments])
     return this
   }
   arc() {
     this._actions.push(["method", "arc", arguments])
     return this
   }
   arcTo() {
     this._actions.push(["method", "arcTo", arguments])
     return this
   }
   rect() {
     this._actions.push(["method", "rect", arguments])
     return this
   }
   fill() {
     this._actions.push(["method", "fill", arguments])
     return this
   }
   stroke() {
     this._actions.push(["method", "stroke", arguments])
     return this
   }
   rotate() {
     this._actions.push(["method", "rotate", arguments])
     return this
   }
   scale() {
     this._actions.push(["method", "scale", arguments])
     return this
   }
   translate() {
     this._actions.push(["method", "translate", arguments])
     return this
   }
   transform() {
     this._actions.push(["method", "transform", arguments])
     return this
   }
   resetTransform() {
     this._actions.push(["method", "resetTransform", arguments])
     return this
   }
   drawImage() {
     this._actions.push(["method", "drawImage", arguments])
     return this
   }
   createImageData() {
     this._actions.push(["method", "createImageData", arguments])
     return this
   }
   getImageData() {
     this._actions.push(["method", "getImageData", arguments])
     return this
   }
   putImageData() {
     this._actions.push(["method", "putImageData", arguments])
     return this
   }
   save() {
     this._actions.push(["method", "save", arguments])
     return this
   }
   restore() {
     this._actions.push(["method", "restore", arguments])
     return this
   }
   shadowColor() {
     this._actions.push(["property", "shadowColor", arguments])
     return this
   }
   shadowBlur() {
     this._actions.push(["property", "shadowBlur", arguments])
     return this
   }
 }