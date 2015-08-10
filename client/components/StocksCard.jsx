var React = require('react');

var mui = require('material-ui');

var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var ThemeManager = new mui.Styles.ThemeManager();
var FlatButton = mui.FlatButton;

var Colors = mui.Styles.Colors;

var StocksCard = React.createClass({

	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

	getChildContext: function () { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

	render: function () {
		return (
			<Card initiallyExpanded={true}>
	      <CardHeader
	        title="Title"
	        subtitle="Subtitle"
	        showExpandableButton={true}>
	      </CardHeader>
	      <CardText expandable={true}>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
	        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
	        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
	      </CardText>
	      <CardActions expandable={true}>
	        <FlatButton label="Action1"/>
	        <FlatButton label="Action2"/>
	      </CardActions>
	      <CardText expandable={true}>
	        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
	        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
	        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
	      </CardText>
	    </Card>
		);
	},
});

module.exports = StocksCard;