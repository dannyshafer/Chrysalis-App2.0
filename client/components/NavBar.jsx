var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({
  render: function(){
    return (
        <div>
         <Link to="profile">profile</Link>
          <Link to="landingpage">landing page</Link>
        </div>
      );
  },
});

module.exports = NavBar;
