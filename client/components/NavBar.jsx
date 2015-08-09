var React = require('react');

var NavBar = React.createClass({
  render: function(){
    return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
            <li className="pure-menu-item pure-menu-selected">Home</li>
            <li className="pure-menu-item">Log In</li>
            <li className="pure-menu-item pure-menu-disabled">Sign Up</li>
        </ul>
        <h1>Hello</h1>
      </div>
      );
  },
});

module.exports = NavBar;
