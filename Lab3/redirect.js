let http = require('http');
let fs = require('fs');

http.createServer((req,res) => {
    if(req.url == '/page-c.html'){
      console.log(req.headers)
      res.writeHead(301,{'Location':'http://'+req.headers['host']+'/page-b.html'});
      return res.end();
    }else{
      fs.readFile(req.url.substring(1), function (err, data) {
        console.log('///'+req.url.substring(0)+'///');
        if (err){ throw err;}
           res.writeHead(200);
           res.write(data.toString("utf8"));
           return res.end();

      });
    }
}).listen(2702);

