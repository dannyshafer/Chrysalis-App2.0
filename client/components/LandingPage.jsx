var React = require('react');
var Video = require('react-video');
var Router = require('react-router');
var Link = Router.Link;

// Material UI
var mui = require('material-ui');
var Dialog = mui.Dialog;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;

var LandingPage = React.createClass({
  getInitialState: function () {
    return {
      modalOpen: false
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
    if (!!sessionStorage.getItem('jwt')) {this.readUserInfoFromAPI();}
  },
  readUserInfoFromAPI: function(){
    var uid = this.props.currentUser.uid
    this.props.readFromAPI(this.props.origin + '/users/' + uid + '/profile', function(info){
      this.setState({modalOpen: !info.ageSet});
    }.bind(this));
  },
  render: function(){
    if (this.props.signedIn === false) {
      var gettingStarted = (
        <a href={this.props.origin + '/request_token'}><RaisedButton secondary={true} label="Get Started Today"></RaisedButton></a>
      );
    } else {
      var gettingStarted = (
        <Link to="profile" ><RaisedButton secondary={true} label="Get Started Today"></RaisedButton></Link>
      );
    };
    if (this.props.signedIn === true && this.state.modalOpen === true) {
      var standardActions = [
        { text: 'Close' },
      ];
      var profileSetUpModal = (
        <Dialog openImmediately={true} modal={true} actions={standardActions}>
          <Link to="profile">Click here to set up your profile</Link>
        </Dialog>
      );
    };
    return (
      <div className="landing-background">
        <div className="landing-container">
          {profileSetUpModal}
          <div className="slogan">
            <h1 className='title'>Chrysalis</h1>
            <h2 className="sub-title">hatching insight</h2>
          </div>
          <div className='video-container'>
            <video preload="true" autoPlay="autoplay" loop="loop" muted tabIndex="0">
              <source src="480-stock-ticker.mp4" type="video/mp4"></source>
            </video>
          </div>
              <div className="mission-statement-container">
                <p className="mission-statement">Chrysalis makes investing in stocks simple.  Catering to novice and expert investors alike, we provide investments tailored to meet the needs of our users.  Our recommendations are filtered according to rigorous criteria, providing stocks selection that we believe are currently undervalued and likely to perform well over time.</p>
              {gettingStarted}
              </div>
          </div>
      </div>
    );
  },
});

module.exports=LandingPage


