var AppDispatcher = require('../dispatcher/AppDispatcher');
var appContants = require('../constants/todoConstants');
var io = require('socket.io-client');

var socket = io('http://localhost:8080');

socket.on('newItem', function (data) {
  AppDispatcher.dispatch({
    actionType: appContants.ADD_ITEM,
    data: data.newItem
  });
});
