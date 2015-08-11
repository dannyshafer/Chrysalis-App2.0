var React = require('react')
var Video = require('react-video')

var LandingPage = React.createClass({
  render: function(){
    return (
      <div>
        <div className="slogan">
          <h1>Chrysalis.</h1>
          <h1>Hatching Insight.</h1>
        </div>
        <div className='video-container'>
          <video preload="true" autoPlay="autoplay" loop="loop" muted tabindex="0">
            <source src="ChrysalisRain.mp4" type="video/mp4"></source>
          </video>
        </div>

      </div>
    );
  },
});

module.exports=LandingPage
