var React = require('react');
var LazyLoad = require('react-lazy-load');

// Components
var StocksSubArray = require('./StocksSubArray.jsx');

// Material UI
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
		this.getDefinitionsFromAPI();
	},

	getDefinitionsFromAPI: function(){
    this.props.readFromAPI(this.props.origin + '/definitions', function(info){
      this.setState({definitions: info});
    }.bind(this));
  },

	readStocksFromAPI: function () {
		this.props.readFromAPI(this.props.origin + '/recommendations/recommendations', function(info){
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
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_1.length} Stocks with Risk Preference of 1</h3>
		      <StocksSubArray stocks={this.state.stocks_1} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
		    	</div>
		    </div>
		  );
		} else if (this.props.risk === 2) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_2.length} Stocks with Risk Preference of 2</h3>
		      <StocksSubArray stocks={this.state.stocks_2} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 3) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_3.length} Stocks with Risk Preference of 3</h3>
		      <StocksSubArray stocks={this.state.stocks_3} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 4) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_4.length} Stocks with Risk Preference of 4</h3>
		      <StocksSubArray stocks={this.state.stocks_4} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 5) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_5.length} Stocks with Risk Preference of 5</h3>
		      <StocksSubArray stocks={this.state.stocks_5} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 6) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_6.length} Stocks with Risk Preference of 6</h3>
		      <StocksSubArray stocks={this.state.stocks_6} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 7) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_7.length} Stocks with Risk Preference of 7</h3>
		      <StocksSubArray stocks={this.state.stocks_7} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 8) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_8.length} Stocks with Risk Preference of 8</h3>
		      <StocksSubArray stocks={this.state.stocks_8} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 9) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_9.length} Stocks with Risk Preference of 9</h3>
		      <StocksSubArray stocks={this.state.stocks_9} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.props.risk === 10) {
		  return (
		    <div className="row">
		    	<div className="small-12 columns">
		      <h3>{this.state.stocks_10.length} Stocks with Risk Preference of 10</h3>
		      <StocksSubArray stocks={this.state.stocks_10} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
					</div>
		    </div>
		  );
		} else if (this.state.status === null){
		  return (
		    <div>
		      <RefreshIndicator size={40} left={80} top={5} status="loading" />
		    </div>
		  );
		};
	},
});

module.exports = StocksContainer;
