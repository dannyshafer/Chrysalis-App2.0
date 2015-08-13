var React = require('react');
var Stocks = require('../stocks.js');


// Components
var StocksSubArray = require('./StocksSubArray.jsx');

// Material UI
var mui = require('material-ui');

var ThemeManager = new mui.Styles.ThemeManager();
var LinearProgress = mui.LinearProgress;
var StocksContainer = React.createClass({
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

	getInitialState: function () {
		return {
			status: null,
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
		if (this.state.status === "completed") {
			if (this.props.risk === 1) {
			    	console.log(this.props.stocks_1)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_1} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
			    	</div>
			    </div>
			  );
			} else if (this.props.risk === 2) {
			    	console.log(this.props.stocks_2)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_2} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 3) {
			    	console.log(this.props.stocks_3)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_3} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 4) {
			    	console.log(this.props.stocks_4)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_4} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 5) {
			    	console.log(this.props.stocks_5)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_5} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 6) {
			    	console.log(this.props.stocks_6)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_6} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 7) {
			    	console.log(this.props.stocks_7)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_7} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 8) {
			    	console.log(this.props.stocks_8)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_8} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 9) {
			    	console.log(this.props.stocks_9)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_9} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} else if (this.props.risk === 10) {
			    	console.log(this.props.stocks_10)
			  return (
			    <div className="row">
			    	<div className="small-12 columns">
			      <StocksSubArray stocks={this.props.stocks_10} readFromAPI={this.props.readFromAPI} definitions={this.state.definitions} basket={this.props.basket}/>
						</div>
			    </div>
			  );
			} 
		};
	if (this.state.status === null){
		  return (
		    <div>
		    	<LinearProgress mode="indeterminate"  />
		    </div>
		  );
		};
	},
});

module.exports = StocksContainer;
