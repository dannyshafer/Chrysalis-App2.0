var React = require('react');
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

  render: function(){

    return (

      <div className="team-container">
        <div className="row">
          Mission statement
        </div>

        <div className="row">
          <div className="small-12 medium-6 large-3 columns end">
          // <div className="col-sm-12 col-md-6 col-lg-3 columns end ">
            <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALKAAAAJDUwYmYxNWI2LTI1ZTAtNDJlMS1iZWRlLTQyZmFkZWMzYjIyMA.jpg'/>

          </div>
          <div className="small-12 medium-6 large-3 columns end">
            <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALxAAAAJDg1MmI1ZmQxLTU1MDktNDY0ZC05ZTMzLTkzN2JjZDY0MGYyMw.jpg'/>

          </div>
          <div className="small-12 medium-6 large-3 columns end">
            <img src='https://pbs.twimg.com/profile_images/585479016817291264/qlym0sGg.jpg'/>

          </div>
          <div className="small-12 medium-6 large-3 columns end">
            <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/071/36a/2e3c836.jpg'/>

          </div>
        </div>
      </div>



    );
  }
});

module.exports = Team;
