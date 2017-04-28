var request = require('request');
var linker = require('./src/linker');

var url = "http://www.utah.edu/";
// var url = "http://dotspencer.com";
request(url, receive);

function receive(err, res, body){
  if(err) return console.error(err);
  var links = linker.getLinks(body);
  console.log(links);
}
