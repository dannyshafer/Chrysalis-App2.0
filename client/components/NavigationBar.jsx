var React = require('react');
var Router = require('react-router');

var Link = Router.Link;

var NavigationBar = React.createClass({


  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },

  render: function() {
    if (this.props.signedIn) {
      var homeLink = <li><Link to="landingpage">Home</Link></li>
      var profileLink = <li><Link to="profile">Profile</Link></li>
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>
      var recommendationLink = <li><Link to="recommendation">Recommendations</Link></li>
      var userBasketLink = <li><Link to="user_baskets">Baskets</Link></li>
      var glossary =  <li><Link to="glossary">Glossary</Link></li>
      var updateLink = <li><Link to="update">Update Stocks</Link></li>
      var userBasketLink = <li><Link to="user_baskets">Baskets</Link></li>
    } else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Chrysalis</span>
            <ul>
             {homeLink}
             {recommendationLink}
             {userBasketLink}
             {glossary}
             {updateLink}
             {profileLink}
             {signingLink}
            </ul>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = NavigationBar;
