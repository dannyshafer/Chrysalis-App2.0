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
      <div className="landing-container">

          {profileSetUpModal}
          <div className="slogan">
            <h1 className='title'>Chrysalis</h1>
            <h2 className="sub-title">hatching insight</h2>
          </div>


              <div className='video-container'>
                  <video preload="true" autoPlay="autoplay" loop="loop" muted tabIndex="0">
                    <source src="low.mp4" type="video/mp4"></source>
                  </video>
              </div>


              <div className="mission-statement-container">
                <p className="mission-statement">Chrysalis makes investing in stocks simple.  Catering to novice and expert investors alike, we provide investments tailored to meet the needs of our clients.  Each of our stocks is guaranteed to meet all four of the following criteria:</p>
                <div className="mission-checklist">
                  <p>&#x2714; EPS ratio higher than the industry average.</p>
                  <p>&#x2714; PEG ratio lower than the industry average.</p>
                  <p>&#x2714; PE ratio lower than the industry average.</p>
                  <p>&#x2714; Graham Number higher than the current price.</p>
                </div>
                <p className="mission-statement">While any of these constraints could be met by a given stock, fewer than five percent qualify for all four.  By filtering according to these criteria, Chrysalis identifies  stocks that are currently undervalued and likely to perform well over time.</p>
              </div>

      </div>
    );
  },
});

module.exports=LandingPage
