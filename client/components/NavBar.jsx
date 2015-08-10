var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },
  render: function(){
    if (this.props.signedIn) {
      var signingLink = <span onClick={this.handleSignOutLink}>Sign Out</span>;
      var profileLink = <Link to="profile">{this.props.currentUser}</Link>
      var recommendationLink = <Link to="recommendation">Recommendation</Link>
      var updateLink = <Link to="update">Update Stocks</Link>

    } else {
      var signingLink = <a href={this.props.origin + '/request_token'}>Sign In</a>;
    }
    return (
      <div>
      {profileLink}
      {signingLink}
      {recommendationLink}
      {updateLink}
      <Link to="landingpage">landing page</Link>
      </div>
      );
  },
});

module.exports = NavBar;
