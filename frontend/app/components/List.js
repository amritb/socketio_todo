var React = require('react');

var List = React.createClass({
  render: function () {
    var listItems = this.props.items.map(function (item, index) {
      return (
        <li key={index} className="list-group-item">
          <span className="glyphicon glyphicon-remove" onClick={this.props.remove.bind(null, index)}></span>
          <span>{item}</span>
        </li>              
      );
    }.bind(this));

    return (
      <ul>{listItems}</ul>
    ); 
  }
});

module.exports = List;