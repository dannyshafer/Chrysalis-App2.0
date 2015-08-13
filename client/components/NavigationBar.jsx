var React = require('react');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap');
var ReactRouterBootstrap = require('react-router-bootstrap');
var Link = Router.Link;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var Button = ReactBootstrap.Button;
var NavItem = ReactBootstrap.NavItem;
var NavItemLink = ReactRouterBootstrap.NavItemLink;


var NavigationBar = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },

  render: function(){

    if (this.props.signedIn) {
      var profileLink = <NavItemLink className="nav-item" to="profile">Profile</NavItemLink>
      var recommendationLink = <NavItemLink className="nav-item" to="recommendation">Recommendations</NavItemLink>
      var updateLink = <NavItemLink className="nav-item" to="update">Update Stocks</NavItemLink>
      var userBasketLink = <NavItemLink className="nav-item" to="user_baskets">Baskets</NavItemLink>
      var signingLink = <span className="nav-item" onClick={this.handleSignOutLink}>Sign Out</span>
      var team = <NavItemLink className="nav-item" to="team">About Us</NavItemLink>
      var glossary = <NavItemLink className="nav-item" to="glossary"><i className="material-icons">description</i></NavItemLink>
    } else {
      var signingLink = <a className="nav-item" href={this.props.origin + '/request_token'}>Sign In</a>;
    }
    return (
      <div>
        <Navbar className="menubar" fixedTop>
          <Nav>
            <NavItemLink className="nav-item" to="landingpage" >Chrysalis</NavItemLink>
            {profileLink}
            {recommendationLink}
            {userBasketLink}
            {updateLink}
            {team}
            {glossary}
            {signingLink}
          </Nav>
        </Navbar>
      </div>
      );
  },
});

module.exports = NavigationBar;
