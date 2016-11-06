var static = require('node-static');
 
// 
// Create a node-static server instance to serve the './public' folder 
// 
var file = new static.Server('./site');
 
require('http').createServer(function (request, response) {
    
    request.addListener('error', function(error) {
        console.error("Error serving " + request.url + " - " + err.message);
    });
    request.addListener('end', function () {
        // 
        // Serve files! 
        // 
        file.serve(request, response);
    }).resume();
}).listen(7080);