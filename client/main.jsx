require('./assets/app.css');
require('./assets/rc-slider.css');
// require('./assets/menu.css');
// require('./assets/blabs.css');
// require('./assets/pure.css')

var React = require('react');
var App = require('./components/App.jsx');
var Router = require('react-router');
var routes = require('./config/routes.jsx');
var EventEmitter = require('eventemitter3');
var EE = new EventEmitter();
var objectAssign = require('object-assign');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});


!function(){
	var Controller = {};

	objectAssign(Controller, EventEmitter.prototype);

	Controller.on('added-to-basket',function () {
		console.log('added')
	})
	Controller.emit('added-to-basket')

	module.exports = Controller;
}();

