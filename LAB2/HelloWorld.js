// Thư viện
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('Hello Node JS');
    res.end();

}).listen(9999);