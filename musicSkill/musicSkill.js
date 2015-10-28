// a node module to be called by the Alexa Skills Kit or a simple node server
// Export is a handler that Alexa calls
// Data is musical scales from the musicServer (so this calls out to that service)
var http = require('http');
var concat = require('concat-stream');


exports.localScales = {};
exports.handler = function () {
    
    getAllScales("http://localhost:8080/scales");
    console.log('handler scales: ' + JSON.stringify(exports.localScales));
};

var getAllScales = function (URL) {
    
    http.get(URL, function (response) {
    
      response.pipe(concat(function (data) {

          exports.localScales = data.toString();
          console.log('getAllScales scales: ' + exports.localScales);
      }));
    });          
};