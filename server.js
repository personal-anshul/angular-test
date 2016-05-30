//Server using express module of node
var express = require('express'),
    server = express();

server.use(express.static(__dirname + ''));
server.listen(1991);

//Example of how to create server using http module of node
// require('http').createServer(function(request, response) {
//   console.log('i got request.. sending response now..');
// response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write('i m in..');
//   response.end();
// }).listen(3000);
