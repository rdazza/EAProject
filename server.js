

var http = require('http');
var express = require ('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 1337;

/*app.get('/', function (req, res){
  res.sendFile(__dirname + '/Public/index.html');
});
*/

//conexion con la base de datos
mongoose.connect('mongodb://localhost:27017/proy');


app.use(express.static("Public"));
app.listen(port)



/*
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('HolaMundo\n');



}).listen(1337,'127.0.0.1');
*/


console.log('Servidor ejecutandose en localhost con el puerto ' + port);
