var http = require('http');
var port = process.env.VCAP_APP_PORT || 8080;
var util = require('util');
var foo = require('./foo/foo.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log("Got request: " + util.inspect(req));
  foo.hello();
  res.end('Hello World\n');
}).listen(port, "127.0.0.1");
console.log('Server running at on port: ' + port);

