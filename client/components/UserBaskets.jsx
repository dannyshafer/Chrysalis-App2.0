var React = require('react');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var UserBasketTable = require('./UserBasketTable.jsx');

var UserBaskets = React.createClass({
	getInitialState: function () {
		return {
			baskets: []
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
		this.readUserBasketsFromAPI();
	},


	readUserBasketsFromAPI: function () {
		var uid = this.props.currentUser.uid
		this.props.readFromAPI(this.props.origin + '/users/' + uid + '/baskets', function(info){
		  this.setState({
		  	baskets: info.baskets

		  });
		}.bind(this));
	},

	render: function () {
		var baskets = this.state.baskets.map(function (basket, index) {
			return (
				<UserBasketTable basket={basket} />
			);
		}.bind(this));
		return (
			<div>
				<h3>Your Saved Baskets</h3>
				{baskets}
			</div>
		);
	},
});

module.exports = UserBaskets;