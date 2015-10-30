var http = require('http');
var map = require('through2-map');
var url = require('url');
(function () {
    "use strict";

    var scaleData = [
        {"scale": "C", "notes" : "C D E F G A B C"},
        {"scale": "E", "notes" : "E F# G# A B C# D#"},
        {"scale": "Amin", "notes" : "A B C D E F G A"}
    ],
        getScale = function (note) {

            return scaleData.filter(function (val) {

                return val.scale === note;
            });
        },
        logging = false,
        server = http.createServer(function (req, res) {

            var pathname = url.parse(req.url).pathname,
                scaleName = url.parse(req.url, true).query.name,
                notes = getScale(scaleName);
            if (logging) {
                console.log('Got a request ' + pathname + ' parms: ' + url.parse(req.url).search);
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            if (req.method === 'GET') {
                if (pathname === '/scales') {
                    return res.end(JSON.stringify(scaleData));
                }
                if (pathname === '/scale/') {
                    if (logging) {
                        console.log('Query name: ' + scaleName);
                        console.log('Result: ' + JSON.stringify(notes));
                    }
                    return res.end(JSON.stringify(notes));
                }
                res.statusCode = 404;
                res.end('Not found.');
            } else {
                return res.end('Takes a GET');
            }
        });

    server.listen(process.argv[2]);
}());