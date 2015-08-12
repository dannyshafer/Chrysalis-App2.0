var React = require('react');
var Basket = require('../basket.js');
var Router = require('react-router');
var Link = Router.Link;

// Material UI
var mui = require('material-ui');
var TextField = mui.TextField;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;
var LinearProgress = mui.LinearProgress;
var Slider = mui.Slider;
var Dialog = mui.Dialog;

// Components
var StocksContainer = require('./StocksContainer.jsx');
var RecommendedPieChart = require('./RecommendedPieChart.jsx')
var UserPieChart = require('./UserPieChart.jsx')

var RecommendationContainer = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function () {
    return {
      risk_preference: null,
      age: null,
      textFieldValue: '',
      basket: new Basket,
      modalOpen: false,
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
    if (!!sessionStorage.getItem('jwt')) {this.readUserInfoFromAPI();}
  },

  componentWillUnmount: function(){
    this.state.basket.off('change');
  },

  basketChanged: function(){
    this.forceUpdate();
    this.state.basket.emit('update-chart');
  },

  readUserInfoFromApi: function(){
    var uid = this.props.currentUser.uid
    this.props.readFromAPI(this.props.origin + '/users/' + uid + '/profile', function(info){
      this.setState({
        risk_preference: info.risk_preference,
        age: info.age,
        modalOpen: !info.ageSet,
      });
    }.bind(this));
  },

  createUserBasket: function (e) {
    e.preventDefault();
    var id = {}

    for(var i = 0; i < this.state.basket.stocks.length; i++) {
        id[i] = this.state.basket.stocks[i].ticker
    };

    var data = {
      info: {
        ids: id,
        name: this.state.textFieldValue,
      }
    };
    var uid = this.props.currentUser.uid

    this.props.writeToAPI(this.props.origin + '/users/' + uid + '/baskets', 'post', JSON.stringify(data), function(message){
      this.setState({message: "Basket Created!"})
    }.bind(this));
  },

  handleRiskSliderMove: function (e, value) {
    this.setState({risk_preference: value});
  },
  render: function () {
    if (this.props.signedIn === true && this.state.modalOpen === true) {
      var profileSetUpModal = (
        <Dialog openImmediately={true}>
          Please click here to set up your profile:
          <br />
          <Link to="profile">{this.props.currentUser}</Link>
        </Dialog>
      );
    };
    if (this.state.basket.stocks.length != 0) {
      var addBox = (
        <div>
        <TextField
                hintText="Required"
                errorText={this.state.floatingErrorText}
                floatingLabelText="Basket Name"
                onChange={this._handleFloatingErrorInputChange}
                valueLink={this.linkState('textFieldValue')} />
        <br />
        <RaisedButton label="Create Basket" primary={true} onClick={this.createUserBasket}/>
        </div>
      );
    } else {
      var addBox = (
        <h4>To create a basket, please add at least one stock.</h4>
      );
    };
    if (this.state.risk_preference != null) {
      return (
        <div>
          <h1>Recommendation Page</h1>
          {profileSetUpModal}
          <RecommendedPieChart age={this.state.age}/>
          <br />
          <UserPieChart readFromAPI={this.props.readFromAPI} writeToAPI={this.props.writeToAPI} currentUser={this.state.currentUser} basket={this.state.basket}/>
          {addBox}
          <br />
          {this.state.message}
          <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
          <Slider name="Risk Preference" defaultValue={Number(this.state.risk_preference)} step={1} min={1} max={10} onChange={this.handleRiskSliderMove} />
          <StocksContainer risk={this.state.risk_preference} readFromAPI={this.props.readFromAPI} origin={this.props.origin} basket={this.state.basket}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Recommenation Page</h1>
          {profileSetUpModal}
          <LinearProgress mode="indeterminate"  />
        </div>
      );
    };

  },
});

module.exports = RecommendationContainer;
