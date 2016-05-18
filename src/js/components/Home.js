var React = require('react');
var Link = require('react-router').Link;


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to MINI pizza!</h1>
        <img className='main' src='/image/pizza-stand-lego.jpg'/>
        <p>We make mini pizzas as if we are leaving in a LEGO world!</p>
        <p>Don't worry, our pizzas are tastefull...and plasticless! But the size of our pizza is perfect for minis!</p>
        <Link to="/order">ORDER</Link>
      </div>
    );
  }
});

module.exports = Home;