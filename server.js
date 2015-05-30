var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var items = [];

server.listen(8080, function () {
  console.log('Listening on port: ' + 8080);
});

app.use(express.static('frontend/public'));

io.on('connection', function(socket) {

  socket.on('add', function(item) {
    items.push(item);
    console.log('item added: ' + item);
    socket.emit('list', lists);
  });

  socket.on('get', function () {
    socket.emit('list', lists);
  })

});
