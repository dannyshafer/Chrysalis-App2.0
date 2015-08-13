var React = require('react');
// var LazyLoad = require('react-lazy-load');

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
	    stocks_1: new Stocks,
	    stocks_2: new Stocks,
	    stocks_3: new Stocks,
	    stocks_4: new Stocks,
	    stocks_5: new Stocks,
	    stocks_6: new Stocks,
	    stocks_7: new Stocks,
	    stocks_8: new Stocks,
	    stocks_9: new Stocks,
	    stocks_10: new Stocks,
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
  	  this.props.stocks_1.addToStocks(info.stocks_1);
  	  this.props.stocks_2.addToStocks(info.stocks_2);
  	  this.props.stocks_3.addToStocks(info.stocks_3);
  	  this.props.stocks_4.addToStocks(info.stocks_4);
  	  this.props.stocks_5.addToStocks(info.stocks_5);
  	  this.props.stocks_6.addToStocks(info.stocks_6);
  	  this.props.stocks_7.addToStocks(info.stocks_7);
  	  this.props.stocks_8.addToStocks(info.stocks_8);
  	  this.props.stocks_9.addToStocks(info.stocks_9);
  	  this.props.stocks_9.addToStocks(info.stocks_9);
  	  this.props.stocks_10.addToStocks(info.stocks_10);
  	  this.setState({
  	  	status: "completed",
  	  });
  	}.bind(this));
  },

	render: function () {
		switch (this.props.risk_preference) {
			case 1:
				var arr = this.props.stocks_1
				break;
			case 2:
				var arr = this.props.stocks_2
				break;
			case 3:
				var arr = this.props.stocks_3
				break;
			case 4:
				var arr = this.props.stocks_4
				break;
			case 5:
				var arr = this.props.stocks_5
				break;
			case 6:
				var arr = this.props.stocks_6
				break;
			case 7:
				var arr = this.props.stocks_7
				break;
			case 8:
				var arr = this.props.stocks_8
				break;
			case 9:
				var arr = this.props.stocks_9
				break;
			case 10:
				var arr = this.props.stocks_10
				break;
		}

		if (this.state.status === "completed") {
			console.log(arr)
			var stocks = arr["stocks"][0].map(function (stock, index) {
				return (
					<StockCard key={stock.id} stock={stock} definitions={this.props.definitions} basket={this.props.basket}/>
				);
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
