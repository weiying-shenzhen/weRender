(function(){
  // 将此代码复制到浏览器的 console，回车执行之后输出的字符串即为 WeGraphic 的代码
  // 为了美观，请将 WeGraphic 代码格式化

  var classTpl = function(){
    /*
    export default class WeGraphic {
      constructor() { this._actions = []}
      getActions() { return this._actions }
      setActions(actions = []) {
        if (Array.isArray(actions)) {
          this._actions = actions
        }
      }
    */
  }
  var methodTpl = function(){
    /*
    this._actions.push({type: "method", method, args})return this
     */
  }
  var propertyTpl = function(){
    /*
    this._actions.push({ type: "property", method, args})return this
     */
  }

  function getTpl(tpl){
    var t = tpl.toString()
    return t.substring(t.indexOf('*') + 2, t.lastIndexOf('*'))
  }

  function genMethod(method){
    var name = method.method
    var strings = []
    if (method.type === "method") {
      strings.push(name + "(...args){ const method=" + '"' + name + '"')
      strings.push(getTpl(methodTpl))
    } else {
      strings.push(name + "(args){ const method=" + '"' + name + '"')
      strings.push(getTpl(propertyTpl))
    }
    strings.push("}")
    return strings.join('')
  }

  var ctx = document.createElement('canvas').getContext('2d')
  function proxy(method){
      var prop = ctx[method]
      var func = null
      if (prop !== 'undefined') {
        if (Object.prototype.toString.call(prop) === "[object Function]") {
            return genMethod({
              type: "method",
              method
            })
        } else {
          return genMethod({
            type: "property",
            method,
          })
        }
      }
  }

  function getMethods(){
    var retangles = ["clearRect", "fillRect", "strokeRect"],
      text = ["fillText", "strokeText", "measureText"],
      lineStyles = ["lineWidth", "lineCap", "lineJoin"],
      textStyles = ["font", "textAlgin", "textBaseline", "direction"],
      fillStrokeStyles = ["fillStyle", "strokeStyle"],
      paths = ["beginPath", "closePath", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "rect"],
      pathsDrawing = ["fill", "stroke"],
      transformations = ["rotate", "scale", "translate", "transform", "resetTransform"],
      images = ["drawImage"],
      pixel = ["createImageData", "getImageData", "putImageData"],
      state = ["save", "restore"],
      shadow = ['shadowColor', 'shadowBlur'];

    return [].concat(
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
      shadow
    )
  }

  var codes = []

  codes.push(getTpl(classTpl))

  getMethods().forEach(function(method){
    codes.push(proxy(method))
  })

  codes.push("}")

  console.log(codes.join(''))
})()