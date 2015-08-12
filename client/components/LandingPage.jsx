var React = require('react');
var Video = require('react-video');
var Router = require('react-router');
var Link = Router.Link;

// Material UI
var mui = require('material-ui');
var Dialog = mui.Dialog;
var ThemeManager = new mui.Styles.ThemeManager();

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
      console.log('got set')
      this.setState({modalOpen: !info.ageSet});
    }.bind(this));
  },
  render: function(){
    if (this.props.signedIn === true && this.state.modalOpen === true) {
      var profileSetUpModal = (
        <Dialog openImmediately={true}>
          Please click here to set up your profile:
          <br />
          <Link to="profile">{this.props.currentUser}</Link>
        </Dialog>
      );
    };
    return (
      <div>
        {profileSetUpModal}
        <div className="slogan">
          <h1 className='title'>Chrysalis</h1>
          <h2 className="sub-title">hatching insight</h2>
        </div>
        <div className='video-container'>
          <video preload="true" autoPlay="autoplay" loop="loop" muted tabIndex="0">
            <source src="ChrysalisRain.mp4" type="video/mp4"></source>
          </video>
        </div>

      </div>
    );
  },
});

module.exports=LandingPage
