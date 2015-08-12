var React = require('react');
var Router = require('react-router');
var App = require('../components/App.jsx');
var ProfileContainer = require('../components/ProfileContainer.jsx');
var LandingPage = require('../components/LandingPage.jsx');
var RecommendationContainer = require('../components/RecommendationContainer.jsx');
var UpdateContainer = require('../components/UpdateContainer.jsx');
var UserBaskets = require('../components/UserBaskets.jsx');
var Glossary = require('../components/Glossary.jsx')
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="landingpage" handler={LandingPage} />
    <Route name="profile" handler={ProfileContainer} />
    <Route name="recommendation" handler={RecommendationContainer} />
    <Route name="update" handler={UpdateContainer} />
    <Route name="user_baskets" handler={UserBaskets} />
    <Route name="glossary" handler={Glossary} />
  </Route>
  );
