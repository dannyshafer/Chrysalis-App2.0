var React = require('react');

var mui = require('material-ui');

var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var FlatButton = mui.FlatButton;

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

var StocksCard = React.createClass({
	render: function () {
		return (
			<Card initiallyExpanded={true}>
	          <CardHeader
	            title="Title"
	            subtitle="Subtitle">
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