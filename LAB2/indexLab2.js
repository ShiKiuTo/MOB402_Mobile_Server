let cacul = require('./caculator');

let express = require('express');

let app = express();

app.get('/calADD',(req, res) => {
    var result = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    result = cacul.add(a,b)
    res.json(result);
})

app.get("/calSUB", (req, res) => {
  var result = 0;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  result = cacul.sub(a, b);
  res.json(result);
});

app.get("/calMUL", (req, res) => {
  var result = 0;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  result = cacul.mul(a, b);
  res.json(result);
});

app.get("/calDIV", (req, res) => {
  var result = 0;
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  result = cacul.div(a, b);
  res.json(result);
});


app.listen(1234);