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


var StockCard = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function () {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	handleClicked: function () {
		this.props.basket.addToBasket(this.props.stock)
	},

	render: function () {
		var stock = this.props.stock;
		if (this.props.status === true) {
			var message = "Added";
		} else {
			var message = "Add";
		};

		return (
			<div className="small-12 medium-6 large-4 columns end">
				<Card initiallyExpanded={false}>
					<CardHeader
					key={stock.id}
					title={stock.ticker}
					subtitle={stock.name}
					avatar={stock.logo_url}
					showExpandableButton={true} />
					<CardText>${stock.ask} | Beta: {stock.beta} | EPS: {stock.eps} | PE: {stock.pe}</CardText>
					<RaisedButton disabled={this.props.status} label={message} secondary={true} onClick={this.handleClicked.bind(this, stock.id)}/>
					<CardText expandable={true}> {stock.info} </CardText>
					<CardActions expandable={true}></CardActions>
				</Card>
				<br />
			</div>
		);
	},
});

module.exports = StockCard;

