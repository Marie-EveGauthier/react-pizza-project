// The main application layout
// this.props.children will be set by React Router depending on the current route
var React = require('react');
var Navigation = require('./Navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <main>
          <Navigation/>
          {this.props.children}
        </main>
        <footer>
          <p>Looking for a bite of funniness: 888-888-888</p>
          &copy; 2016 MINI pizza
        
        </footer>
      </div>  
    );
  }
});

module.exports = App;