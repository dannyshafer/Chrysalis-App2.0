var React = require('react');
var mui = require('material-ui');
var Dialog = mui.Dialog;
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;
var FlatButton = mui.FlatButton;


var StockCard = React.createClass({
	getInitialState: function () {
		return {
			added: false,
			basket: this.props.basket,
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
		this.state.basket.addToBasket(this.props.stock)
		var active = !this.state.added;
		this.setState({
			added: active,
		});
	},

	handleBetaClick: function(){
  	this.refs.betaDialog.show();
	},
	handleEPSClick: function(){
  	this.refs.EPSDialog.show();
	},
	handlePEGClick: function(){
  	this.refs.PEGDialog.show();
  },

	render: function () {
		var stock = this.props.stock;
		if (this.state.added === true) {
			return (
				<Card initiallyExpanded={false}>
					<CardHeader
						title={stock.ticker}
						subtitle={stock.name}
						showExpandableButton={true}>
					</CardHeader>
					<CardText expandable={true}>
						<Dialog ref="betaDialog"><strong>Beta:</strong><br/><br/>{this.props.definitions["Beta"]}</Dialog>
						<Dialog ref="EPSDialog"><strong>EPS:</strong><br/><br/>{this.props.definitions["EPS"]}</Dialog>
						<Dialog ref="PEGDialog"><strong>PEG:</strong><br/><br/>{this.props.definitions["PEG"]}</Dialog>
						<FlatButton onClick={this.handleBetaClick}>Beta: {stock.beta}</FlatButton>
		      	<FlatButton onClick={this.handleEPSClick}>EPS: {stock.eps}</FlatButton>
	      		<FlatButton onClick={this.handlePEGClick}>PEG: {stock.peg}</FlatButton>
			      <br/>
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
						<Dialog ref="betaDialog"><strong>Beta:</strong><br/><br/>{this.props.definitions["Beta"]}</Dialog>
						<Dialog ref="EPSDialog"><strong>EPS:</strong><br/><br/>{this.props.definitions["EPS"]}</Dialog>
						<Dialog ref="PEGDialog"><strong>PEG:</strong><br/><br/>{this.props.definitions["PEG"]}</Dialog>
						<FlatButton onClick={this.handleBetaClick}>Beta: {stock.beta}</FlatButton>
		      	<FlatButton onClick={this.handleEPSClick}>EPS: {stock.eps}</FlatButton>
	      		<FlatButton onClick={this.handlePEGClick}>PEG: {stock.peg}</FlatButton>
			      <br/>
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

