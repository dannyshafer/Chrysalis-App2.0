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
      var profileLink = <li className="nav-item"><Link to="profile">{this.props.currentUser}</Link></li>
      var recommendationLink = <li className="nav-item"><Link to="recommendation">Recommendations</Link></li>
      var updateLink = <li className="nav-item"><Link to="update">Update Stocks</Link></li>
      var userBasketLink = <li className="nav-item"><Link to="user_baskets">Baskets</Link></li>
      var signingLink = <li className="nav-item"><span onClick={this.handleSignOutLink}>Sign Out</span></li>
    } else {
      var signingLink = <li className="nav-item"><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }
    return (
      <div>
        <nav className="nav">
          <ul>
            <li className="nav-item"><Link to="landingpage">landing page</Link></li>
            {profileLink}
            {recommendationLink}
            {userBasketLink}
            {updateLink}
            {signingLink}
          </ul>
        </nav>
      </div>
      );
  },
});

module.exports = NavBar;
