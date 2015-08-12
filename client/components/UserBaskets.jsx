var React = require('react');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var UserBasketTable = require('./UserBasketTable.jsx');

var UserBaskets = React.createClass({
	getInitialState: function () {
		return {
			baskets: [],
			basket_info: [],
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
		  	baskets: info.baskets,
		  	basket_info: info.basket_info

		  });
		}.bind(this));
	},

	render: function () {
		var baskets = this.state.baskets.map(function (basket, index) {
			var info = this.state.basket_info[index]
			return (
				<UserBasketTable basket={basket} basket_info={info} />
			);
		}.bind(this));
		return (
			<div>
				<h3>You have {this.state.baskets.length} Baskets Saved</h3>
				{baskets}
			</div>
		);
	},
});

module.exports = UserBaskets;