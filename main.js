var http = require('http');
var fs = require('fs');
// var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return ;
    }
    response.writeHead(200);
    // 프로그램적으로 사용자에게 전송할 데이터를 생성한다.
    response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
