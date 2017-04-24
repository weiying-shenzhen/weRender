"use strict";

function makeMap(str) {
  return str.split(",").reduce(function (map, cur) {
    map[cur] = true;
    return map;
  }, {});
}

var REGEXP = {
  startTag: /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
  endTag: /^<\/([-A-Za-z0-9_]+)[^>]*>/,
  attr: /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g
};
var MAKER = {
  empty: makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr,path"),
  fillAttrs: makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected")
};

function getAttributes(str) {
  var attrsMap = {};
  str.replace(REGEXP.attr, function (match, name) {
    var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : MAKER.fillAttrs[name] ? name : "";

    attrsMap[name] = value.replace(/(^|[^\\])"/g, '$1\\\"');
  });
  return attrsMap;
}

function lex(html) {
  var string = html;
  var tokens = [];
  var maxTime = Date.now() + 1000;

  while (string) {
    if (string.indexOf("<!--") === 0) {
      var _index = string.indexOf("-->");
      string = string.substring(_index + 3);
      continue;
    }
    if (string.indexOf("</") === 0) {
      var match = string.match(REGEXP.endTag);
      if (!match) continue;
      string = string.substring(match[0].length);
      var tag = match[1];
      var isEmpty = !!MAKER.empty[tag];
      if (isEmpty) continue;
      tokens.push({
        tag: tag,
        type: 'tag-end'
      });
      continue;
    }
    if (string.indexOf("<") === 0) {
      var _match = string.match(REGEXP.startTag);
      if (!_match) continue;
      string = string.substring(_match[0].length);
      var _tag = _match[1];
      var _isEmpty = !!MAKER.empty[_tag];
      var type = _isEmpty ? 'tag-empty' : 'tag-start';
      var attributes = getAttributes(_match[2]);

      tokens.push({
        tag: _tag,
        type: type,
        attributes: attributes
      });
      continue;
    }

    var index = string.indexOf('<');
    var text = index < 0 ? string : string.substring(0, index);

    string = index < 0 ? "" : string.substring(index);
    tokens.push({
      type: "text",
      text: text
    });

    if (Date.now() >= maxTime) break;
  }
  return tokens;
}

function parse(tokens) {
  var root = {
    tag: "root",
    children: []
  };
  var tagArray = [root];
  tagArray.last = function () {
    return tagArray[tagArray.length - 1];
  };

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (token.type === 'tag-start') {
      var node = {
        type: "Element",
        tagName: token.tag,
        attributes: token.attributes,
        children: []
      };
      tagArray.push(node);
      continue;
    }
    if (token.type === 'tag-end') {
      var parent = tagArray[tagArray.length - 2];
      var _node = tagArray.pop();
      if (!parent) continue;
      parent.children.push(_node);
      continue;
    }
    if (token.type === 'text') {
      tagArray.last().children.push({
        type: 'text',
        content: token.text
      });
      continue;
    }
    if (token.type === 'tag-empty') {
      tagArray.last().children.push({
        type: "Element",
        tagName: token.tag,
        attributes: token.attributes
      });
      continue;
    }
  }
  return root;
}

module.exports = function htmlParser(html) {
  return parse(lex(html));
}