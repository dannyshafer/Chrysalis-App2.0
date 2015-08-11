var React = require('react');
var Slider = require('rc-slider');
var StocksContainer = require('./StocksContainer.jsx');
var RecommendedPieChart = require('./RecommendedPieChart.jsx')
var UserPieChart = require('./UserPieChart.jsx')
var mui = require('material-ui');
var RefreshIndicator = mui.RefreshIndicator;
var ThemeManager = new mui.Styles.ThemeManager();

var RecommendationContainer= React.createClass({
  getInitialState: function () {
    return {
      risk_preference: null,
      age: null,
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

  componentDidMount: function () {
    this.readStocksFromAPI();
  },

  componentDidMount: function(){
    this.readUserInfoFromApi();
  },

  readUserInfoFromApi: function(){
    console.log('reading')
    this.props.readFromAPI(this.props.origin + '/users/profile', function(info){
      console.log('setting')
      this.setState({risk_preference: info.risk_preference, age: info.age});
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
          <UserPieChart />
          <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
          <br />
          <br />
          <div className="slider">
          <Slider defaultValue={this.state.risk_preference} min={1} max={10} onChange={this.handleRiskSliderMove} signedIn={this.state.signedIn} currentUser={this.state.currentUser}/>
          </div>
          <br />
          <StocksContainer risk={this.state.risk_preference} readFromAPI={this.props.readFromAPI} origin={this.props.origin} />
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
