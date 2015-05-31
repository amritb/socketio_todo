var React = require('react');
var List = require('./List');
var AddItem = require('./AddItem');
var todoStore = require('../stores/todoStore');
var todoAction = require('../actions/todoActions');

var ListContainer = React.createClass({

  getInitialState: function() {
    return {
      list: todoStore.getList()
    }
  },

  componentDidMount: function(){
    todoStore.addChangeListener(this._onChange);
  },

  componentWillMount: function() {
    todoStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      list: todoStore.getList()
    });
  },

  handleAddItem: function (newItem) {
    todoAction.addItem(newItem);
  },

  handleRemoveItem: function (index) {
    todoAction.removeItem(index);
  },

  render: function () {
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h4 className="text-center">Todo List with socket.io</h4>
          <AddItem add={this.handleAddItem} />
          <List items={this.state.list} remove={this.handleRemoveItem} />
        </div>
      </div>  
    );
  }

});

module.exports = ListContainer;