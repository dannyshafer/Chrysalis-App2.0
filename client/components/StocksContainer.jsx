var React = require('react');


// Components
var StocksSubArray = require('./StocksSubArray.jsx');

// Material UI
var mui = require('material-ui');

var ThemeManager = new mui.Styles.ThemeManager();
var LinearProgress = mui.LinearProgress;

var StocksContainer = React.createClass({



	childContextTypes: {
    muiTheme: React.PropTypes.object
  },

	getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

	render: function () {
	  return (
	    <div className="row">
	    	<div className="small-12 columns">
	      <StocksSubArray readFromAPI={this.props.readFromAPI} basket={this.props.basket} origin={this.props.origin} risk_preference={this.props.risk_preference}/>
	    	</div>
	    </div>
    );
	},
});

module.exports = StocksContainer;