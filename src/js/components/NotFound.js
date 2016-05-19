
var React = require('react');
var Link = require('react-router').Link;

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <p>Not Found!</p>
        <Link to='/'>But you're not list... We ear this belly that wants pizza. Let's go!</Link>
      </div>
    );
  }
});

module.exports = NotFound;