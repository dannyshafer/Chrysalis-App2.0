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



function inArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id == value) return true;
    }
    return false;
}


var StocksSubArray = React.createClass({
	getInitialState: function () {
		return {
			status: null,
			stocks: new Stocks,
		};
	},

	getDefaultProps: function() {
	  return {
	  	
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
  	this.props.basket.on('basket_created', this.basketCreated);
  	// this.getDefinitionsFromAPI();
  },

  componentWillUnmount: function () {
  	// this.props.basket.off('basket_created');
  },

  basketCreated: function () {
  	this.state.stocks.empty;
    this.forceUpdate();
  	this.readStocksFromAPIagain();
  },

  readStocksFromAPIagain: function () {
  	this.props.readFromAPI(this.props.origin + '/recommendations/recommendations', function(info){
  		this.state.stocks.addToStocks(info);
  	  this.setState({
  	  	status: "completed",
  	  });
  	  this.props.basket.emit('new_stocks')
  	}.bind(this));
  },

  readStocksFromAPI: function () {
  	this.props.readFromAPI(this.props.origin + '/recommendations/recommendations', function(info){
  		this.state.stocks.addToStocks(info);
  	  this.setState({
  	  	status: "completed",
  	  });
  	}.bind(this));
  },

	render: function () {
		if (this.state.status === "completed") {
			var stocks = this.state.stocks["stocks"][0].map(function (stock, index) {
				if (stock.asi_component === this.props.risk_preference) {
          if (inArray(this.props.basket["stocks"], stock.id)) {
            var status = true;
          } else {
            var status = false;
          };
					return (
						<StockCard key={stock.id} stock={stock} definitions={this.props.definitions} basket={this.props.basket} status={status}/>
					);
				};
			}.bind(this));
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
