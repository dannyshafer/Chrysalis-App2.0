var React = require('react');
var Slider = require('rc-slider');


var ProfileContainer= React.createClass({
  getInitialState: function(){
    return{
      risk_preference: 0,
      age: 0,
      message: null,
      description: null,
    };
  },
  componentDidMount: function(){
    this.readUserInfoFromAPI();
    this.getDescriptionsFromAPI();
  },
  readUserInfoFromAPI: function(){
    var uid = this.props.currentUser.uid
    this.props.readFromAPI(this.props.origin + '/users/' + uid + '/profile', function(info){
      this.setState({risk_preference: info.risk_preference, age: info.age});
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
    this.props.writeToAPI(this.props.origin + '/users/' + uid + '/profile', 'put', data, function(message){
      this.setState({message: "Profile Updated!"})
    }.bind(this));
  },
  handleRiskSliderMove: function(value) {
    this.setState({risk_preference: value});
  },
  handleAgeSliderMove: function(value) {
    this.setState({age: value});
  },
  render: function(){
    if (this.state.age != 0) {
      return (
        <div>
          <h1>Your Profile</h1>
          <div className="pure-form pure-form-stacked">
            <form onSubmit={this.updateProfileAPI}>
              <fieldset>
                <legend>Update your profile here</legend>
                {this.state.message}
                <br />
                <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
                <br />
                <label for="description">{this.state.description[this.state.risk_preference]}</label>
                <br />
                <Slider defaultValue={this.state.risk_preference} min={1} max={10} onChange={this.handleRiskSliderMove} />
                <br />
                <label for="age">Age: {this.state.age}</label>
                <br />
                <Slider defaultValue={this.state.age} min={18} max={100} onChange={this.handleAgeSliderMove} />
                <br />
                <button type="submit" className="pure-button pure-button-primary">Update Profile</button>
              </fieldset>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Your Profile</h1>
        <h3>Loading...</h3>
      </div>
    );
  },
});

module.exports=ProfileContainer
