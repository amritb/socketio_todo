var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function () {
  console.log('Listening on port: ' + 8080);
});

app.use(express.static('frontend/public'));

io.on('connection', function(socket) {

  setInterval(function () {
    socket.emit('newItem', {newItem: 'The time is: ' + Date.now()});
  }, 5000);

});
