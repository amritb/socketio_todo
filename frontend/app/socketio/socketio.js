var todoAction = require('../actions/todoActions');
var io = require('socket.io-client');

var socket = io('http://localhost:8080');

socket.on('newItem', function (data) {
  todoAction.addItem(data);
});
