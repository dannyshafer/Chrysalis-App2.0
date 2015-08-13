
require('./assets/app.css');
require('./assets/foundation.min.css');
require('./assets/foundation.min.js');
require('./assets/normalize.css');

// require('./assets/menu.css');
// require('./assets/blabs.css');
// require('./assets/pure.css')

var React = require('react');
var App = require('./components/App.jsx');
var Router = require('react-router');
var ReactBootstrap = require('react-bootstrap')
var ReactRouterBootstrap = require('react-router-bootstrap')
var routes = require('./config/routes.jsx');
var $ = require('jquery');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});

