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
      var standardActions = [
        { text: 'Close' },
      ];
      var profileSetUpModal = (
        <Dialog openImmediately={true} modal={true} actions={standardActions}>
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
                    <p className="mission-statement">
                      Chrysalis is a fundamental analysis website that seeks suitable investments based loosely on stock valuation techniques by Benjamin Graham.  Other services (particularly brokers) which take age and risk preference typically only return a suggested proportional mix of asset classes so that the user it dependent on their service to do the actual management of buying and selling. Chrysalis is dramatically more actionable as it suggests a mix but also offers specific securities which the user can then research further and buy through his/her preferred channel.


                      PE ratio lower than the industry average.
                      EPS ratio higher than the industry average.
                      PED ratio lower than the industry average.
                      Graham Number higher than the current price.

                      While any of these constraints could be met by a given stock, fewer than five percent qualify for all four.
                    </p>
                </div>

      </div>
    );
  },
});

module.exports=LandingPage
