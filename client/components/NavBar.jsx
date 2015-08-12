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
      var profileLink = <li><Link to="profile">{this.props.currentUser}</Link></li>
      var recommendationLink = <li><Link to="recommendation">Recommendations</Link></li>
      var updateLink = <li><Link to="update">Update Stocks</Link></li>
      var userBasketLink = <li><Link to="user_baskets">Baskets</Link></li>
      var signingLink = <li onClick={this.handleSignOutLink}>Sign Out</li>
      var glossary = <li><Link to="glossary"><i className="material-icons">description</i></Link></li>
    } else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>
    }
    return (

      <div className="contain-to-grid sticky">
        <nav className="top-bar" data-topbar role="navigation">
          <ul className="title-area">
            <li>
              <Link to="landingpage">Chrysalis</Link>
            </li>
          </ul>
          <section className="top-bar-section">
            <ul className="right">
              {signingLink}
            </ul>

            <ul className="left">
              {profileLink}
              {recommendationLink}
              {userBasketLink}
              {updateLink}
              {glossary}
            </ul>
          </section>





        </nav>
      </div>
      );
  },
});



module.exports = NavBar;
