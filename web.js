var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html');

var buff = new Buffer();

var txt = buff.toString('utf-8');


app.get('/', function(request, response) {
	//response.send('Hello World2!');
	responce.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
