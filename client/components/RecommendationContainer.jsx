var React = require('react');
var Slider = require('rc-slider');

var StocksContainer = require('./StocksContainer.jsx');
var RecommendedPieChart = require('./RecommendedPieChart.jsx')
var UserPieChart = require('./UserPieChart.jsx')
var mui = require('material-ui');
var RefreshIndicator = mui.RefreshIndicator;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;
var Basket = require('../basket.js');

var RecommendationContainer = React.createClass({
  getInitialState: function () {
    return {
      risk_preference: null,
      age: null,
      basket: new Basket,
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentDidMount: function(){
    this.readUserInfoFromApi();
    this.state.basket.on('change', this.basketChanged);
  },

  componentWillUnmount: function(){
    this.state.basket.off('change');
  },

  basketChanged: function(){
    this.forceUpdate();
    this.state.basket.emit('update-chart');
    // this.handleAddBasket;
  },

  readUserInfoFromApi: function(){
    var uid = this.props.currentUser.uid
    this.props.readFromAPI(this.props.origin + '/users/' + uid + '/profile', function(info){
      this.setState({risk_preference: info.risk_preference, age: info.age});
    }.bind(this));
  },

  createUserBasket: function (e) {
    e.preventDefault();
    console.log(this.state.basket)
    var id = {}

    for(var i = 0; i < this.state.basket.stocks.length; i++) {
        id[i] = this.state.basket.stocks[i].ticker
    }

    console.log('creating user basket')
    console.log(id)
    debugger

    var data = {
      ids: id
    }
    var uid = this.props.currentUser.uid

    this.props.writeToAPI(this.props.origin + '/users/' + uid + '/baskets', 'post', JSON.stringify(data), function(message){
      this.setState({message: "Basket of the Day Created!"})
    }.bind(this));
  },

  handleRiskSliderMove: function (value) {
    this.setState({risk_preference: value});
  },
  render: function () {
    if (this.state.risk_preference != null) {
      return (
        <div>
          <h1>Recommendation Page</h1>
          <RecommendedPieChart age={this.state.age}/>
          <br />
          <UserPieChart readFromAPI={this.props.readFromAPI} currentUser={this.state.currentUser} basket={this.state.basket}/>
          <RaisedButton label="Create Today's Basket" primary={true} onClick={this.createUserBasket}/>
          <br />
          {this.state.message}
          <br />
          <br />
          <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
          <br />
          <br />
          <div className="slider">
          <Slider defaultValue={this.state.risk_preference} min={1} max={10} onChange={this.handleRiskSliderMove} signedIn={this.state.signedIn} currentUser={this.state.currentUser}/>
          </div>
          <br />
          <StocksContainer risk={this.state.risk_preference} readFromAPI={this.props.readFromAPI} origin={this.props.origin} basket={this.state.basket}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Recommenation Page</h1>
          <RefreshIndicator size={40} left={80} top={5} status="loading" />
        </div>
      );
    };
    
  },
});

module.exports = RecommendationContainer;
