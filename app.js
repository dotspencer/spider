var request = require('request');
var fs = require('fs');
var linker = require('./src/linker');
var norm = require('./src/normalizer');

var urls = {
  lds: "https://www.lds.org/?lang=eng",
  utah: "http://www.utah.edu/",
  liahona: "https://www.lds.org/liahona/2017/04/youth/personalize-your-gospel-study?cid=hp_fr_21-4-2017_dpfd_flhna_xlidyh-1_",
  node: "https://nodejs.org/api/url.html#url_url_tojson",
  prophet:"https://www.lds.org/prophets-and-apostles?cid=hp16an_lsl#text&lang=eng",
  egi: "https://egi.utah.edu",
  stack: "http://stackoverflow.com/"
}
request(urls.egi, receive);

function receive(err, res, body){
  if(err) return console.error(err);

  var links = linker.getLinks(body);
  links = norm.normalize(res, links);

  for (var i = 0; i < links.length; i++) {
    console.log(links[i]);
  }
}
