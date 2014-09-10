var http = require('http');
var path = require('path');
http.createServer(function(request,response){
	var lookup=path.basename(decodeURI(request.url));
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('Woohoo!');
}).listen(8080);