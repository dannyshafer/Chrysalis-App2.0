var React = require('react');
var Slider = require('rc-slider');

var RecommendationContainer= React.createClass({
  getInitialState: function () {
    return {
      risk_preference: null,
    };
  },

  componentDidMount: function(){
    this.readUserInfoFromApi();
  },

  readUserInfoFromApi: function(){
    console.log('reading')
    this.props.readFromAPI(this.props.origin + '/users/profile', function(info){
      this.setState({risk_preference: info.risk_preference});
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
          <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
          <br />
          <Slider defaultValue={this.state.risk_preference} min={0} max={10} onChange={this.handleRiskSliderMove} />
          <br />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Your Recommendation is Loading...</h1>
          <h3>Loading...</h3>
        </div>
      );
    };
    
  },
});

module.exports = RecommendationContainer;
