var request = require('request');
var linker = require('./src/linker');
var norm = require('./src/normalizer');

var url = "http://www.utah.edu/";
// var url = "http://dotspencer.com";
request(url, receive);

function receive(err, res, body){
  if(err) return console.error(err);
  // console.log(res.request.uri);
  var links = linker.getLinks(body);
  links = norm.normalize(res, links);
  console.log(links);
}
