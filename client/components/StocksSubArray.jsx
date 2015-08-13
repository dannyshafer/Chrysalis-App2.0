var React = require('react');
var LazyLoad = require('react-lazy-load');

// Components
var StockCard = require('./StockCard.jsx');
var Stocks = require('../stocks.js');


// Material UI
var mui = require('material-ui');
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;


var StocksSubArray = React.createClass({
	getInitialState: function () {
		return {
			status: null,
		};
	},

	getDefaultProps: function() {
	  return {
	  	stocks: new Stocks,
	    definitions: {},
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
  	this.readStocksFromAPI();
  	// this.getDefinitionsFromAPI();
  },

  readStocksFromAPI: function () {
  	this.props.readFromAPI(this.props.origin + '/recommendations/recommendations', function(info){
  		this.props.stocks.addToStocks(info);
  	  this.setState({
  	  	status: "completed",
  	  });
  	}.bind(this));
  },

	render: function () {
		if (this.state.status === "completed") {
			console.log(this.props.stocks)
			var stocks = this.props.stocks["stocks"][0].map(function (stock, index) {
				if (stock.asi_component === this.props.risk_preference) {
					return (
						<StockCard key={stock.id} stock={stock} definitions={this.props.definitions} basket={this.props.basket}/>
					);
				};
			}.bind(this));
			console.log('rendering stocks')
		};
		return (
			<div>
        <div className="row">
          {stocks}
        </div>
			</div>
		);
	},

});

module.exports = StocksSubArray;
