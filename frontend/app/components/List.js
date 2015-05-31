var React = require('react');

var List = React.createClass({
  render: function () {

    var styles = {
      uList: {
        marginTop: 20,
        paddingLeft: 0,
        listStyleType: "none"
      },
      removeItem: {
        color: "rgb(222, 79, 79)",
        cursor: "pointer"
      },
      todoItem: {
        paddingLeft: 20,
        fontSize: 17
      }
    };

    var listItems = this.props.items.map(function (item, index) {
      return (
        <li key={index} className="list-group-item">
          <span className="glyphicon glyphicon-remove" onClick={this.props.remove.bind(null, index)} style={styles.removeItem}></span>
          <span style={styles.todoItem}>{item}</span>
        </li>              
      );
    }.bind(this));

    return (
      <ul style={styles.uList}>{listItems}</ul>
    ); 
  }
});

module.exports = List;