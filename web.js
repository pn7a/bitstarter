var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var indexFile = fs.readFileSync('index.html');
var indexToString = indexFile.toString();

app.get('/', function(request, response) {
	response.send(indexToString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
