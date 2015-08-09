var React = require('react');
var Reqwest = require('reqwest');
var NavBar = require('./NavBar.jsx')
var LandingPage = require('./LandingPage.jsx')
var ProfileContainer = require('./ProfileContainer.jsx')
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getDefaultProps: function() {
    // return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
    return {origin: 'http://localhost:3000'};
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  render: function () {
    return (
      <div id="app">
        <NavBar />
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  },
});

module.exports = App;
