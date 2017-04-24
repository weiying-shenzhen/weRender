var htmlParser = require("./htmlParser");
var svgViewBoxRegEx = /(\d+) (\d+) (\d+) (\d+)/g
var markerRegEx = /[MmLlSsQqLlHhVvCcSsQqTtAaZz]/g;
var digitRegEx = /-?[0-9]*\.?\d+/g;

function getPath(tree){
  var path = "";

  function deepWalk(json) {
    var stack = [];
    var htmlArray = [];
    stack.push(json);

    while (stack.length) {
      var _json = stack.pop();
      var children = _json.children;

      if (children && children.length) {
        for (var i = 0; i < children.length; i++) {
          stack.push(children[i]);
        }
      } else {
        if (_json.tagName == "path") {
          return _json.attributes
        }
      }
    }
  }
  return deepWalk(tree)
}

function parseSvg(svg){
  var tree = htmlParser(svg).children[0];
  var path = getPath(tree)
  var viewBox = tree.attributes.viewBox;
  var size = {}
  viewBox.replace(svgViewBoxRegEx, ($0, $1, $2, $3, $4) => {
    size["width"] = $3;
    size["height"] = $4;
  })
  return {
    path: path,
    size: size
  }
}

function svgPathToCommands(str) {
    var results = [];
    var match; while ((match = markerRegEx.exec(str)) !== null) { results.push(match); };
    return results
        .map(function(match) {
            return { marker: str[match.index],
                     index: match.index };
        })
        .reduceRight(function(all, cur) {
            var chunk = str.substring(cur.index, all.length ? all[all.length - 1].index : str.length);
            return all.concat([
               { marker: cur.marker,
                 index: cur.index,
                 chunk: (chunk.length > 0) ? chunk.substr(1, chunk.length - 1) : chunk }
            ]);
        }, [])
        .reverse()
        .map(function(command) {
            var values = command.chunk.match(digitRegEx);
            return { marker: command.marker, values: values ? values.map(formatNumber) : []};
        })
}

function formatNumber(str){
  return ~~(0.5 + parseFloat(str))
}

function genMethod(){
  var args = Array.prototype.slice.call(arguments)
  var method = args[0]
  var params = args.slice(1, args.length)
  var prefix = "." + method
  if (!params.length) return prefix + "()"
  return prefix + "(" + params.join(',') + ")"
}

module.exports = function parse(svg){
    var codes = [],
      lastPos = [0, 0],
      pointOne,
      pointTwo,
      info = parseSvg(svg),
      size = info.size,
      path = info.path,
      commandList = svgPathToCommands(path.d);

    if (size) {
      codes.push("new WeCanvas({ width: "+ size.width + ", height: "+ size.height + " })")
    }
    if (path.transform) {
      codes.push("." + path.transform)
    }
    codes.push(genMethod("beginPath"))

    if (path.fill) {
      codes.push(genMethod("fillStyle", "'" + path.fill + "'"))
    }

    for (var i = 0; i < commandList.length; i++) {
      var command = commandList[i]
      switch (command.marker) {
        case "z":
        case "Z":
          lastPos = [0, 0]
          codes.push(genMethod("closePath"))
          break;
        case "m":
          lastPos = [lastPos[0] + command.values[0], lastPos[1] + command.values[1]]
          codes.push(genMethod("moveTo", lastPos[0], lastPos[1]))
          break;
        case 'l':
          lastPos = [lastPos[0] + command.values[0], lastPos[1] + command.values[1]]
          codes.push(genMethod("lineTo", lastPos[0], lastPos[1]))
          break;
        case 'h':
          lastPos = [lastPos[0] + command.values[0], lastPos[1]]
          codes.push(genMethod("lineTo", lastPos[0], lastPos[1]))
        case 'v':
          lastPos = [lastPos[0], lastPos[1] + command.values[0]]
          codes.push(genMethod("lineTo", lastPos[0], lastPos[1]))
          break;
        case 'c':
          pointOne = [lastPos[0] + command.values[0], lastPos[1] + command.values[1]]
          pointTwo = [lastPos[0] + command.values[2], lastPos[1] + command.values[3]]
          lastPos = [lastPos[0] + command.values[4], lastPos[1] + command.values[5]]
          codes.push(genMethod("bezierCurveTo", pointOne[0], pointOne[1], pointTwo[0], pointTwo[1], lastPos[0], lastPos[1]))
          break;
        case 'M':
          lastPos = [command.values[0], command.values[1]]
          codes.push(genMethod("moveTo", lastPos[0], lastPos[1]))
          break;
        case 'L':
          lastPos = [command.values[0], command.values[1]]
          codes.push(genMethod("lineTo", lastPos[0], lastPos[1]))
          break;
        case 'H':
          lastPos = [command.values[0], lastPos[1]]
          codes.push(genMethod("lineTo", lastPos[0], lastPos[1]))
          break;
        case 'V':
          lastPos = [lastPos[0], command.values[0]]
          codes.push(genMethod("lineTo", lastPos[0], lastPos[1]))
          break;
        case 'C':
          pointOne = [command.values[0], command.values[1]]
          pointTwo = [command.values[2], command.values[3]]
          lastPos = [command.values[4], command.values[5]]
          codes.push(genMethod("bezierCurveTo", pointOne[0], pointOne[1], pointTwo[0], pointTwo[1], lastPos[0], lastPos[1]))
          break;
      }
    }
    codes.push(genMethod("fill"))
    return codes
}
