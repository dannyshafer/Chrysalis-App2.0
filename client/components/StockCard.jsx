var React = require('react');
var mui = require('material-ui');


var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;

var EventEmitter = require('eventemitter3');

var Basket = require('../../basket.js');



var StockCard = React.createClass({
	getInitialState: function () {
		return {
			added: false,
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

	handleClicked: function () {
		// emit to 3rd party basket.js
		Basket.addToBasket(this.props.stock)
		var active = !this.state.added;
		this.setState({
			added: active,
		})
	},

	render: function () {
		var stock = this.props.stock;
		if (this.state.added === true) {
			return (
				<Card initiallyExpanded={false}>
					<CardHeader
						key={stock.id}
						title={stock.ticker}
						subtitle={stock.name}
						showExpandableButton={true}>
					</CardHeader>
					<CardText expandable={true}>
					<p>Beta: {stock.beta}</p>
					{stock.info}
					</CardText>
						<CardActions expandable={true}>
						<RaisedButton disabled={true} label="Added to Basket" primary={true} onClick={this.handleClicked.bind(this, stock.id)}/>
					</CardActions>
				</Card>
				);
		} else {
			return (
				<Card initiallyExpanded={false}>
					<CardHeader
						key={stock.id}
						title={stock.ticker}
						subtitle={stock.name}
						showExpandableButton={true}>
					</CardHeader>
					<CardText expandable={true}>
					<p>Beta: {stock.beta}</p>
					{stock.info}
					</CardText>
						<CardActions expandable={true}>
						<RaisedButton disabled={false} label="Add to Basket" primary={true} onClick={this.handleClicked.bind(this, stock.id)}/>
					</CardActions>
				</Card>
			);
		};
	},
});

module.exports = StockCard;

