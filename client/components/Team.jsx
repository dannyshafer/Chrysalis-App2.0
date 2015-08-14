var React = require('react');

// Material UI
var mui = require('material-ui');
var Dialog = mui.Dialog;
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardMedia = mui.CardMedia;
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
      <div className="row">


        <Card className="biocard small-12 medium-6 large-3 columns end">
          <CardMedia>
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALKAAAAJDUwYmYxNWI2LTI1ZTAtNDJlMS1iZWRlLTQyZmFkZWMzYjIyMA.jpg"/>
          </CardMedia>
          <CardTitle title="Danny Shafer"/>
          <CardActions>
            <a href="https://github.com/dannyshafer"><FlatButton label="GitHub"/></a>
          </CardActions>
          <CardText>
            Rails developer, formerly business intelligence @ Kiva.org and front-end developer @ ReLISTO. Used clothing store mogul.
          </CardText>
        </Card>




        <Card className="biocard small-12 medium-6 large-3 columns end">
          <CardMedia>
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALxAAAAJDg1MmI1ZmQxLTU1MDktNDY0ZC05ZTMzLTkzN2JjZDY0MGYyMw.jpg"/>
          </CardMedia>
          <CardTitle title="Ryan Au"/>
          <CardActions>
            <a href="https://github.com/ryanau"><FlatButton label="GitHub"/></a>
          </CardActions>
          <CardText>
            Full-stack developer that knows enough code to be dangerous. Always on a look out for an adventure but can''t stop thinking about coding.
          </CardText>
        </Card>




        <Card className="biocard small-12 medium-6 large-3 columns end">
          <CardMedia>
            <img src="https://pbs.twimg.com/profile_images/585479016817291264/qlym0sGg.jpg"/>
          </CardMedia>
          <CardTitle title="John Hess"/>
          <CardActions>
            <a href="https://github.com/alookatommorow"><FlatButton label="GitHub"/></a>
          </CardActions>
          <CardText>
            Administrator turned full-stack web developer based in San Francisco, CA. Rider of boards, climber of rocks, and lifelong learner.
          </CardText>
        </Card>




        <Card className="small-12 medium-6 large-3 columns end">
          <CardMedia>
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/071/36a/2e3c836.jpg"/>
          </CardMedia>
          <CardTitle title="Andrew Donato"/>
          <CardActions>
            <a href="https://github.com/andrewdonato"><FlatButton label="GitHub"/></a>
          </CardActions>
          <CardText>
            Full-stack developer. UC Irvine Grad. Adventurer, lover, fighter, former Nuclear Submariner. Somewhat amateur skateboarder.
          </CardText>
        </Card>

        <Card className="small-12 medium-12 large-12 columns end">
          <CardTitle title="Chrysalis"/>
          <CardText>
            Chrysalis is a fundamental analysis website that seeks suitable investments based loosely on stock valuation techniques by Benjamin Graham. Other services (particularly brokers) which take age and risk preference typically only return a suggested proportional mix of asset classes so that the user it dependent on their service to do the actual management of buying and selling. Chrysalis is dramatically more actionable as it suggests a mix but also offers specific securities which the user can then research further and buy through his/her preferred channel.

          </CardText>
        </Card>


      </div>

    );
  },

});

module.exports = Team;
