var URL = require('url').URL;
var toolkit = require('url-toolkit');

function normalize(res, links){
  var list = [];

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    if(isAbsolute(link)){
      addIfSameHost(res, link, list);
      continue;
    }

    var abs = toolkit.buildAbsoluteURL(res.request.uri.href, link, { alwaysNormalize: true });
    if(isAbsolute(abs)){
      list.push(abs);
    }
  }

  return list;
}

// One line taken from: https://www.npmjs.com/package/is-absolute-url
function isAbsolute(url){
  return /^[a-z][a-z0-9+.-]*:/.test(url);
}


function addIfSameHost(res, link, list){
  try{
    var u = new URL(link);
    if(u.host == res.request.uri.host){
      list.push(link);
      return;
    }
  }
  catch (e) {
    console.log(e.message);
  }
}


module.exports = {
  normalize: normalize
};
