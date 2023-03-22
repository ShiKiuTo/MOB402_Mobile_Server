//Gọi  Expressjs
var express = require('express');
//Tạo app để cấu hình router,...
var app = express();

//Cấu hình handlebare
var expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs());
//Lưu Template vaog foder "views"
app.set('view engine', '.hbs');

//Cau hinh
app.get('/', function (req, res) {
    res.send('Hello World');
});

//chạy lên local host với port 300
app.listen(process.env.PORT || '3000');
