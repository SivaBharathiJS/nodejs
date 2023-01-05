var http = require('http');
var dt = require('./siva');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var a=dt.s1()
  console.log(a)

  res.write(a);
  res.write(req.url);
  res.end('hello sivapy');
}).listen(8080);