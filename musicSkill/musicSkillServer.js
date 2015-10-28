var music = require('./musicSkill');

var http = require('http');
var map = require('through2-map');
var url = require('url');

var logging = true;

var scaleData = {};

var server = http.createServer(function (req, res) {
    
      music.handler();
      var pathname = url.parse(req.url).pathname;
      if(logging) {
	  console.log('Got a request ' + pathname + ' parms: ' + url.parse(req.url).search);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' })
      if(req.method == 'POST') {
           if(pathname == '/scales') {
             if (logging) {
               console.log('Trying to return all scales');
              }
             return res.end(JSON.stringify(music.localScales));
           }
          if(pathname == '/scale/') {
            var scaleName = url.parse(req.url, true).query.name;
            if (logging) {
              console.log('Query name: ' + scaleName);
            }
            var notes = getScale(scaleName);
            if (logging) {
              console.log('Result: ' + JSON.stringify(notes));    
            }
            return res.end(JSON.stringify(notes));
          }
          res.statusCode = 404;
          res.end('Not found.');
      } else {
            return res.end('Takes a POST');
      } 
});
    
server.listen(process.argv[2]);

var getScale = function (note) {
    
    return scaleData.filter(function (val, index, array) {
	    return val.scale === note;
	});
}