var React = require('react');


var Pizza = React.createClass({
  render: function() {
    return (
      <li>
        <img src={this.props.photo}/>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <p>{this.props.price}$</p>
        <input value={this.props.price} type="checkbox" onClick={this.props.onHandleChoice} label={this.props.name} name={this.props.name} />
      </li>
    );
  }
});

module.exports = Pizza;