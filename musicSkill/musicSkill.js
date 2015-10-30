// a node module to be called by the Alexa Skills Kit or a simple node server
// Export is a handler that Alexa calls
// Data is musical scales from the musicServer (so this calls out to that service)

(function () {
    "use strict";
    var http = require('http'),
        concat = require('concat-stream'),
        logging = false,
        getAllScales = function (URL, finishUp, req, res) {

            http.get(URL, function (response) {

                response.pipe(concat(function (data) {

                    exports.localScales = JSON.parse(data.toString());
                    if (logging) {
                        console.log('getAllScales scales: ' + JSON.stringify(exports.localScales));
                    }
                    finishUp(req, res);
                }));
            });
        };
    exports.localScales = {};
    exports.handler = function (finishUp, req, res) {

        getAllScales("http://localhost:8080/scales", finishUp, req, res);
        if (logging) {
            console.log('handler scales: ' + JSON.stringify(exports.localScales));
        }
    };
}());