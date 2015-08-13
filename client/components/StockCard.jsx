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

function inArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == value) return true;
    }
    return false;
}


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

	componentDidMount: function () {
		console.log(this.props.stock.id)
		console.log(this.props.basket["stocks"])
		if (inArray(this.props.basket["stocks"], this.props.stock.id)) {
			this.setState({added: true});
		};
	},

	handleClicked: function () {
		this.props.basket.addToBasket(this.props.stock)
		var active = !this.state.added;
		this.setState({
			added: active,
		});
	},


	render: function () {
		var stock = this.props.stock;
		console.log(this.state.added)
		if (this.state.added === true) {
			var message = "Added";
		} else {
			var message = "Add";
		};

		return (
			<div className="small-12 medium-6 large-4 columns end">
				<Card initiallyExpanded={false}>
				<RaisedButton disabled={this.state.added} label={message} primary={true} onClick={this.handleClicked.bind(this, stock.id)}/>
					<CardHeader
					key={stock.id}
					title={stock.ticker}
					subtitle={stock.name}
					avatar={stock.logo_url}
					showExpandableButton={true} />
					<CardText expandable={true}> {stock.info} </CardText>
					<CardActions expandable={true}></CardActions>
				</Card>
				<br />
			</div>
		);
	},
});

module.exports = StockCard;

