var parse5 = require('parse5');

function getLinks(body){
  var doc = parse5.parse(body);
  var links = [];
  addLinks(doc, links);
  return links;
}

function addLinks(el, array){
  var children = el.childNodes;
  if(children == null) return;
  if(el.tagName == 'a'){
    var link = hrefValue(el);
    // Add to link array
    if(link != null && link.length > 0){
      cleanAdd(link, array);
    }
    return;
  }
  // Not a link? Recurse!
  for (var i = 0; i < children.length; i++) {
    addLinks(children[i], array);
  }
}

function hrefValue(el){
  if(el.attrs == null) return '';
  for (var i = 0; i < el.attrs.length; i++) {
    var att = el.attrs[i];
    if(att.name == 'href'){
      return att.value;
    }
  }
  return '';
}

function cleanAdd(value, array){
  if(value == null || array == null) return;

  value = value.trim().toLowerCase();
  var invalid =
    value.length == 0 ||
    value.startsWith("{{") ||
    value.startsWith("javascript") ||
    value.startsWith("#");
  if(!invalid){
    array.push(value);
  }
}

module.exports = {
  getLinks: getLinks
};
