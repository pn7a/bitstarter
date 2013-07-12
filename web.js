var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buff = new Buffer(fs.readFileSync('index.html', 'utf-8'));

txt = buff.toString();

app.get('/', function(request, response) {
	//response.send('Hello World2!');

	var buff = new Buffer(fs.readFileSync('index.html'), 'utf-8');
	txt = buff.toString();

	//responce.send(txt);
	response.send(fs.readFileSync('index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
