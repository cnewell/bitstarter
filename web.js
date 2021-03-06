var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var index_buffer = fs.readFileSync("index.html");
  response.send(index_buffer.toString());
});

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});