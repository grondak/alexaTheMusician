var http = require('http');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function (req, res) {
    
      var pathname = url.parse(req.url).pathname;
      console.log('Got a request ' + pathname + ' parms: ' + url.parse(req.url).search);
      res.writeHead(200, { 'Content-Type': 'application/json' })
      if(req.method == 'GET') {
           if(pathname == '/scales') {
                 var scaleData = [
                    {"scale": "C", "notes" : "C D E F G A B C"},
                    {"scale": "E", "notes" : "E F# G# A B C# D#"},
                    {"scale": "Amin", "notes" : "A B C D E F G A"}
                ];
                 
                 return res.end(JSON.stringify(scaleData));
           }
           res.statusCode = 404;
           res.end('Not found.');
      } else {
            return res.end('Takes a GET');
      } 
});
    
server.listen(process.argv[2]);

