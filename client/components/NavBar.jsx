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
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
      var profileLink = <li><Link to="profile">{this.props.currentUser}</Link></li>
      var recommendationLink = <li><Link to="recommendation">Recommendations</Link></li>
      var updateLink = <li><Link to="update">Update Stocks</Link></li>
    } else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }
    return (
      <div>
        <nav className="nav">
          <ul>
            {signingLink}
            {profileLink}
            {recommendationLink}
            {updateLink}
            <li><Link to="landingpage">landing page</Link></li>
          </ul>
        </nav>
      </div>
      );
  },
});

module.exports = NavBar;
