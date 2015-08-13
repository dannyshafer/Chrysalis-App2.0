var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var ReactRouterBootstrap = require('react-router-bootstrap');
var Link = Router.Link;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var NavItemLink = ReactRouterBootstrap.NavItemLink;
var MenuItemLink = ReactRouterBootstrap.MenuItemLink;


var NavigationBar = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },

  render: function(){

    if (this.props.signedIn) {
      var homeLink = <NavItemLink className="nav-item" to="landingpage" ><p className="nav-item">Chrysalis</p></NavItemLink>
      var profileLink = <NavItemLink className="nav-item" to="profile"><p className="nav-item">Profile</p></NavItemLink>
      var recommendationLink = <NavItemLink className="nav-item" to="recommendation"><p className="nav-item">Recommendations</p></NavItemLink>
      var updateLink = <NavItemLink className="nav-item" to="update"><p className="nav-item">Update Stocks</p></NavItemLink>
      var userBasketLink = <NavItemLink className="nav-item" to="user_baskets"><p className="nav-item">Baskets</p></NavItemLink>
      var signingLink = <span className="nav-item sign-out" onClick={this.handleSignOutLink}>Sign Out</span>
      var glossary = <NavItemLink className="nav-item" to="glossary"><p className="nav-item">Glossary</p></NavItemLink>
    } else {
      var signingLink = <a className="nav-item" href={this.props.origin + '/request_token'}>Sign In</a>;
    }
    return (
      <div>
        <Navbar className="menubar" fixedTop>
          <Nav>
            {homeLink}
            {profileLink}
            {recommendationLink}
            {userBasketLink}
            {updateLink}
            {glossary}
            {signingLink}
          </Nav>
        </Navbar>
      </div>
      );
  },
});

module.exports = NavigationBar;
