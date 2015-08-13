var React = require('react');

// Material UI
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var LinearProgress = mui.LinearProgress;
var Slider = mui.Slider;


var ProfileContainer= React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState: function(){
    return{
      risk_preference: 101,
      age: null,
      message: null,
      description: null,
      ageSet: false,
    };
  },
  componentDidMount: function(){
    this.readUserInfoFromAPI();
    this.getDescriptionsFromAPI();
  },
  readUserInfoFromAPI: function(){
    var uid = this.props.currentUser.uid
    this.props.readFromAPI(this.props.origin + '/users/' + uid + '/profile', function(info){
      this.setState({risk_preference: info.risk_preference, age: info.age, ageSet: info.ageSet});
    }.bind(this));
  },
  getDescriptionsFromAPI: function(){
    this.props.readFromAPI(this.props.origin + '/descriptions', function(info){
      this.setState({description: info});
    }.bind(this));
  },
  updateProfileAPI: function(e){
    e.preventDefault();
    var uid = this.props.currentUser.uid
    var data = {
      info: {
        risk_preference: this.state.risk_preference,
        age: this.state.age
      }
    };
    this.props.writeToAPI(this.props.origin + '/users/' + uid + '/profile', 'put', JSON.stringify(data), function(message){
      this.setState({message: "Profile Updated!"})
    }.bind(this));
    this.setState({
      ageSet: true,
    })
  },
  handleRiskSliderMove: function(e, value) {
    this.setState({risk_preference: value});
  },
  handleAgeSliderMove: function(e, value) {
    this.setState({age: value});
  },
  render: function(){
    if (this.state.ageSet === true) {
      var ageSlider = (
        <Slider name="Age" disabled={true} defaultValue={Number(this.state.age)} step={1} min={18} max={100} onChange={this.handleAgeSliderMove} />
      );
    } else {
      var ageSlider = (
        <Slider name="Age" defaultValue={Number(this.state.age)} step={1} min={18} max={100} onChange={this.handleAgeSliderMove} />
      );
    };
    if (this.state.risk_preference !=101) {
      return (
        <div className="container">
          <h1 className="page-header">Your Profile</h1>
          <div className="pure-form pure-form-stacked">
            <form onSubmit={this.updateProfileAPI}>
              <fieldset>
                <div className="profile-settings-container">
                  <br/>
                  {this.state.message}
                  <label className="profile-setting" for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
                  <br/><br/>
                  <label for="description">{this.state.description[this.state.risk_preference]}</label>
                  <Slider name="Risk Preference" defaultValue={Number(this.state.risk_preference)} step={1} min={1} max={10} onChange={this.handleRiskSliderMove} />
                  <label className="profile-setting" for="age">Age: {this.state.age}</label>
                  {ageSlider}
                  <button type="submit" className="pure-button pure-button-primary">Update Profile</button>
                  </div>
              </fieldset>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Your Profile</h1>
        <LinearProgress mode="indeterminate" />
      </div>
    );
  },
});


module.exports=ProfileContainer
