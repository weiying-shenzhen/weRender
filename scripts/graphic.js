(function() {
  // 将此代码复制到浏览器的 console，回车执行之后输出的字符串即为 WeGraphic 的代码
  // 为了美观，请将 WeGraphic 代码格式化

  var classTpl = function() {
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

  function getTpl(tpl) {
    var t = tpl.toString()
    return t.substring(t.indexOf('*') + 2, t.lastIndexOf('*'))
  }

  function genMethod(method) {
    var name = method.method
    var strings = []
    strings.push(name + "(){")
    strings.push('this._actions.push(["'+ method.type +'","' + name + '", arguments])')
    strings.push("return this }")
    return strings.join('\n')
  }

  var ctx = document.createElement('canvas').getContext('2d')

  function proxy(method) {
    var prop = ctx[method]
    var func = null
    if (prop === undefined) return ""
    return genMethod({
      type: Object.prototype.toString.call(prop) === "[object Function]" ? "method" : "property",
      method
    })
  }

  function getMethods() {
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

  getMethods().forEach(function(method) {
    codes.push(proxy(method))
  })

  codes.push("}")

  console.log(codes.join(''))
})()