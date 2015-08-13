var React = require('react');
var LazyLoad = require('react-lazy-load');

// Components
var StockCard = require('./StockCard.jsx');

// Material UI
var mui = require('material-ui');
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardActions = mui.CardActions;
var ThemeManager = new mui.Styles.ThemeManager();
var RaisedButton = mui.RaisedButton;


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
				<StockCard key={stock.id} stock={stock} definitions={this.props.definitions} basket={this.props.basket}/>
			);
		}.bind(this));
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
