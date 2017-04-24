(function(){
    function help () {
/*
    Usage: path.js [file] [dest]

    file:           SVG file location
    dest:           JS file destination

    -h, --help:     displays this

    if dest is not provided, it prints to stdout
*/
  }

  var parse = require('./utils/pathParse')
  var fs = require('fs')
  var path = require('path')

  var root = process.cwd()
  var args = process.argv.slice(2)
  if (!args.length) return

  var flag = args[0].toLowerCase()

  if (flag === '-h' || flag === '--help') {
    var h = help.toString()
    var msg = h.substring(h.indexOf('*') + 2, h.lastIndexOf('*'))
    return console.log(msg)
  }

  var src = path.join(root, args[0])
  var dest = args[1]
    ? path.join(root, args[1])
    : null

  var text = fs.readFileSync(src, 'utf-8')
  var data = parse(text).join('\n')

  if (dest) {
    fs.writeFileSync(dest, data)
    console.log("It's saved!")
  } else {
    console.log(data)
  }

})()