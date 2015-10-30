var http = require('http'),
    map = require('through2-map'),
    url = require('url'),
    music = require('./musicSkill');

(function () {
    "use strict";

    var scaleData = [
        {"scale": "C", "notes" : "C D E F G A B C"},
        {"scale": "E", "notes" : "E F# G# A B C# D#"},
        {"scale": "Amin", "notes" : "A B C D E F G A"}
    ],
        logging = true,
        getScale = function (note) {

            return scaleData.filter(function (val) {

                return val.scale === note;
            });
        },
        finishUp = function (req, res) {

            var pathname = url.parse(req.url).pathname,
                scaleName = url.parse(req.url, true).query.name,
                notes = getScale(scaleName);

            if (logging) {
                console.log('Got a request ' + pathname + ' parms: ' + url.parse(req.url).search);
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            if (req.method === 'POST') {
                if (pathname === '/scales') {
                    return res.end(JSON.stringify(music.localScales));
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
                return res.end('Takes a POST');
            }
        },
        server = http.createServer(function (req, res) {

            music.handler(finishUp, req, res);
        });

    server.listen(process.argv[2]);
}());