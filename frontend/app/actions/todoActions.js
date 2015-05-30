var AppDispatcher = require('../dispatcher/AppDispatcher');
var appContants = require('../constants/todoConstants');

var todoActions = {
  addItem: function(item){
    AppDispatcher.handleAction({
      actionType: appContants.ADD_ITEM,
      data: item
    });
  },
  removeItem: function (index) {
    AppDispatcher.handleAction({
      actionType: appContants.REMOVE_ITEM,
      data: index
    });
  }
};

module.exports = todoActions;