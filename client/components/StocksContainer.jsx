var React = require('react');
var StocksSubArray = require('./StocksSubArray.jsx')

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

	componentDidMount: function () {
		this.readStocksFromAPI();
	},

	readStocksFromAPI: function () {
		this.props.readFromAPI(this.props.origin + '/stocks', function(info){
		  this.setState({
		  	status: "completed",
		  	stocks_1: info.stocks_1,
		  	stocks_2: info.stocks_2,
		  });
		}.bind(this));
	},

	render: function () {
		if (this.props.risk === 1) {
		  return (
		    <div>
		      <h1>Stocks Recommended</h1>
		      <StocksSubArray stocks={this.state.stocks_1} />
		    </div>
		  );
		} else if (this.props.risk === 2) {
		  return (
		    <div>
		      <h1>Stocks Recommended</h1>
		      <StocksSubArray stocks={this.state.stocks_2} />

		    </div>
		  );
		}	else if (this.state.status === null){
		  return (
		    <div>
		      <h1>Stocks Recommended</h1>
		      <h3>Loading...</h3>
		    </div>
		  );
		};
	},
});

module.exports = StocksContainer;