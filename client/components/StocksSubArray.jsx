var React = require('react');
var mui = require('material-ui');

var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var ThemeManager = new mui.Styles.ThemeManager();
var FlatButton = mui.FlatButton;

var StocksSubArray = React.createClass({
	childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

		getChildContext: function () { 
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
	  },

	render: function () {

		var stocks = this.props.stocks.map(function (stock, index) {
			return (
				<Card initiallyExpanded={false}>
		      <CardHeader
		      	key={index}
		        title={stock.ticker}
		        subtitle={stock.name}
		        showExpandableButton={true}>
		      </CardHeader>
		      <CardText expandable={true}>
		      		<p>Beta: {stock.beta}</p>
					{stock.info}
		      </CardText>
		      <CardActions expandable={true}>
		        <FlatButton label="Action1"/>
		        <FlatButton label="Action2"/>
		      </CardActions>
		    </Card>
			);
		}.bind(this));
		return (
			<div>
				{stocks}
			</div>
		);
	},

});

module.exports = StocksSubArray;