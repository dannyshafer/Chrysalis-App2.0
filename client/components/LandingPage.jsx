var React = require('react')
var Video = require('react-video')

var LandingPage = React.createClass({
  render: function(){
    return (
      <div>
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
