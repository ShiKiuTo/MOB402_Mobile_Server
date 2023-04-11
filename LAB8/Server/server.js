
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');

server.listen(3000);
var list_user = [];

io.sockets.on('connection', function (socket) {
    console.log('user connecting ...');
    socket.on('user_login', function (user_name) {

        if (list_user.indexOf(user_name) > -1) {
            return;
        }
        list_user.push(user_name);
        socket.user = user_name;
    });
    socket.on('send_message', function (message) {
        io.sockets.emit('receiver_message', { data: socket.use + message });
    });
});