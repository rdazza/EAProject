

var http = require('http');
var express = require ('express');

var app = express();

/*app.get('/', function (req, res){
  res.sendFile(__dirname + '/Public/index.html');

});
*/

app.use(express.static("Public"));


app.listen(1337)
/*
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('HolaMundo\n');



}).listen(1337,'127.0.0.1');
*/
console.log('Servidor ejecutandose en localhost o http://127.0.0.1:1337/');
