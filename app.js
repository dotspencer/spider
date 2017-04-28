var request = require('request');
var linker = require('./src/linker');
var norm = require('./src/normalizer');

// var url = "http://www.utah.edu/";
// var url = "http://dotspencer.com";
var urls = {
  lds: "https://www.lds.org/?lang=eng",
  utah: "http://www.utah.edu/",
  liahona: "https://www.lds.org/liahona/2017/04/youth/personalize-your-gospel-study?cid=hp_fr_21-4-2017_dpfd_flhna_xlidyh-1_"
}
request(urls.liahona, receive);

function receive(err, res, body){
  if(err) return console.error(err);
  // console.log(res.request.uri);
  var links = linker.getLinks(body);
  links = norm.normalize(res, links);

  // for (var i = 0; i < links.length; i++) {
  //   console.log(links[i]);
  // }
  console.log(links);
}
