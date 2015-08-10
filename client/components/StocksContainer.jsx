var React = require('react');
var StocksSubArray = require('./StocksSubArray.jsx');
var mui = require('material-ui');
var RefreshIndicator = mui.RefreshIndicator;
var ThemeManager = new mui.Styles.ThemeManager();

var StocksContainer = React.createClass({
	getInitialState: function () {
		return {
			status: null,
			stocks_1: [],
			stocks_2: [],
			stocks_3: [],
			stocks_4: [],
			stocks_5: [],
			stocks_6: [],
			stocks_7: [],
			stocks_8: [],
			stocks_9: [],
			stocks_10: [],
			risk: null,
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
	},

	readStocksFromAPI: function () {
		this.props.readFromAPI(this.props.origin + '/stocks/recommendations', function(info){
		  this.setState({
		  	status: "completed",
		  	stocks_1: info.stocks_1,
		  	stocks_2: info.stocks_2,
		  	stocks_3: info.stocks_3,
		  	stocks_4: info.stocks_4,
		  	stocks_5: info.stocks_5,
		  	stocks_6: info.stocks_6,
		  	stocks_7: info.stocks_7,
		  	stocks_8: info.stocks_8,
		  	stocks_9: info.stocks_9,
		  	stocks_9: info.stocks_9,
		  	stocks_10: info.stocks_10,
		  });
		}.bind(this));
	},

	render: function () {
		if (this.props.risk === 1) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_1.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_1} />
		    </div>
		  );
		} else if (this.props.risk === 2) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_2.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_2} />

		    </div>
		  );
		} else if (this.props.risk === 3) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_3.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_3} />

		    </div>
		  );
		} else if (this.props.risk === 4) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_4.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_4} />

		    </div>
		  );
		} else if (this.props.risk === 5) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_5.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_5} />

		    </div>
		  );
		} else if (this.props.risk === 6) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_6.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_6} />

		    </div>
		  );
		} else if (this.props.risk === 7) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_7.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_7} />

		    </div>
		  );
		} else if (this.props.risk === 8) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_8.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_8} />

		    </div>
		  );
		} else if (this.props.risk === 9) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_9.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_9} />

		    </div>
		  );
		} else if (this.props.risk === 10) {
		  return (
		    <div id="modal">
		      <h1>Stocks Recommended</h1>
		      <h3>No: {this.state.stocks_10.length}</h3>
		      <StocksSubArray stocks={this.state.stocks_10} />

		    </div>
		  );
		} else if (this.state.status === null){
		  return (
		    <div>
		      <h1>Stocks Recommended</h1>
		      <RefreshIndicator size={40} left={80} top={5} status="loading" />
		    </div>
		  );
		};
	},
});

module.exports = StocksContainer;