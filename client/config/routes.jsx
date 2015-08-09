var React = require('react');
var Router = require('react-router');
var App = require('../components/App.jsx');
var ProfileContainer = require('../components/ProfileContainer.jsx');
var LandingPage = require('../components/LandingPage.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="landingpage" handler={LandingPage} />
    <Route name="profile" handler={ProfileContainer} />
  </Route>
  );
