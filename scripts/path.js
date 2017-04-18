var parse = require('./utils/pathParse');
var fs = require('fs');

var filePath = {
  input: "input.svg",
  output: "out.js"
};

function readArgs(){
  var args = process.argv;

  args.forEach(function(val, index) {
    switch (val){
      case "-i":
        var path = args[index + 1];
        if (path) {
          filePath["input"] = path;
        }
        break;
      case "-o":
        var path = args[index + 1];
        if (path) {
          filePath["output"] = path;
        }
        break;
      default:
        break;
    }
  })
}

function run(){
  readArgs();
  var codes;
  fs.readFile(filePath.input, 'utf8', function(err, data){
    if (err) throw err;
    codes = parse(data).join('\n');

    fs.writeFile(filePath.output, codes, (err) => {
      if (err) throw err;

      console.log('It\'s saved!');
    });

  });
}

run();