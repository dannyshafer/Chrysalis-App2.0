var React = require('react');

// Material UI
var mui = require('material-ui');
var Dialog = mui.Dialog;
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var CardTitle = mui.CardTitle;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;
var FlatButton = mui.FlatButton;



var Team = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function(){
    return (
      <Card>
        <CardHeader
          title="Title"
          subtitle="Subtitle"
          avatar={<Avatar>A</Avatar>}/>
        <CardHeader
          title="Demo Url Based Avatar"
          subtitle="Subtitle"
          avatar="http://lorempixel.com/100/100/nature/"/>
        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardTitle title="Title" subtitle="Subtitle"/>
        <CardActions>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
//////////////////////////////////////
      <div className="container row">
      <h4>Team</h4>
        <div className="row">



          <div className="small-12 medium-6 large-3 columns end">
            <img className='teampictures' src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALKAAAAJDUwYmYxNWI2LTI1ZTAtNDJlMS1iZWRlLTQyZmFkZWMzYjIyMA.jpg'/>
            <h4><a className="gitlink" href="https://github.com/dannyshafer">Daniel Shafer</a></h4>
            <p className="bio">Rails developer, formerly business intelligence @ Kiva.org and front-end developer @ ReLISTO. Used clothing store mogul.</p>
          </div>



          <div className="small-12 medium-6 large-3 columns end">
            <img className='teampictures' src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALxAAAAJDg1MmI1ZmQxLTU1MDktNDY0ZC05ZTMzLTkzN2JjZDY0MGYyMw.jpg'/>
            <h5><a className="gitlink" href="https://github.com/ryanau"> Ryan Au</a></h5>
            <p className="bio">Full stack developer that knows enough code to be dangerous. Always on a look out for an adventure but can't stop thinking about coding.</p>
          </div>



          <div className="small-12 medium-6 large-3 columns end">
            <img className='teampictures' src='https://pbs.twimg.com/profile_images/585479016817291264/qlym0sGg.jpg'/>
            <h5><a className="gitlink" href="https://github.com/alookatommorow"> John Hess</a></h5>
            <p className="bio">Administrator turned full-stack web developer based in San Francisco, CA. Rider of boards, climber of rocks, and lifelong learner.</p>
          </div>

          <div className="small-12 medium-6 large-3 columns end">
            <img className='teampictures' src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/071/36a/2e3c836.jpg'/>
            <h5><a className="gitlink" href="https://github.com/andrewdonato"> Andrew Donato</a></h5>
            <p className="bio">Full-stack developer.  UC Irvine Grad.  Former Electrician, Nuclear Submariner.  Mostly amateur skateboarder.</p>
          </div>

        </div>
        <div className='culture small-12 medium-12 large-12'>
          <h3>Make it rain</h3>
          <p>
            Chrysalis is a fundamental analysis website that seeks suitable investments based loosely on stock valuation techniques by Benjamin Graham. Other services (particularly brokers) which take age and risk preference typically only return a suggested proportional mix of asset classes so that the user it dependent on their service to do the actual management of buying and selling. Chrysalis is dramatically more actionable as it suggests a mix but also offers specific securities which the user can then research further and buy through his/her preferred channel.
          </p>
        </div>
      </div>






    );
  },

});

module.exports = Team;
