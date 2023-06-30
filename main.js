var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (request, response) {
  var _url = request.url;
  const parseData = url.parse(_url, true).query;
  console.log(parseData.id);

  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  response.end(parseData.id);
});
app.listen(3000);