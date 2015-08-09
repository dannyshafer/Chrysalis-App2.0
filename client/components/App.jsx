var React = require('react');
var Reqwest = require('reqwest');
var NavBar = require('./NavBar.jsx')
var LandingPage = require('./LandingPage.jsx')
var ProfileContainer = require('./ProfileContainer.jsx')
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Uri = require('jsuri');

var App = React.createClass({
  getDefaultProps: function() {
    // return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
    return {origin: 'http://localhost:3000'};
  },
  getInitialState: function() {
    return {signedIn: false, currentUser: {handle: ''}};
  },
  componentWillMount: function() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt');
    if (!!jwt) {sessionStorage.setItem('jwt', jwt);}
  },
  componentDidMount: function() {
    if (!!sessionStorage.getItem('jwt')) {this.currentUserFromAPI();}
  },
  currentUserFromAPI: function() {
    this.readFromAPI(this.props.origin + '/current_user', function(user) {
      this.setState({signedIn: true, currentUser: user});
    }.bind(this));
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
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
        <NavBar signedIn={this.state.signedIn} currentUser={this.state.currentUser} origin={this.props.origin}/>
        <div id="content">
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} signedIn={this.state.signedIn} currentUser={this.state.currentUser}/>
        </div>
      </div>
    );
  },
});

module.exports = App;
