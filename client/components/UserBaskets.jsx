var React = require('react');

var UserBasketTable = require('./UserBasketTable.jsx');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Slider = mui.Slider;
var LinearProgress = mui.LinearProgress;

var UserBaskets = React.createClass({
	getInitialState: function () {
		return {
			baskets: null,
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

	deleteBasket: function (basketId) {
		var uid = this.props.currentUser.uid
		var data = {basketId: basketId}
		var url = this.props.origin + '/users/' + uid + '/baskets/' + basketId;
		var baskets = this.state.baskets.filter(function(basket){
			return basket.id !== basketId;
		});
		this.setState({baskets: baskets})
		this.props.writeToAPI(url, 'delete', JSON.stringify(data), this.readUserBasketsFromAPI);
	},

	readUserBasketsFromAPI: function () {
		var uid = this.props.currentUser.uid
		this.props.readFromAPI(this.props.origin + '/users/' + uid + '/baskets', function(baskets){
		  this.setState({baskets: baskets});
		}.bind(this));
	},

	render: function () {
		if (this.state.baskets === null) {
			return (
				<div className="container">
					<h3>Loading Your Baskets...</h3>
					<LinearProgress mode="indeterminate"  />
				</div>
			);
		}

		var baskets = this.state.baskets.map(function (basket, index) {
			return (
				<div className="container">
					<UserBasketTable key={basket.id} origin={this.props.origin} basket={basket} writeToAPI={this.props.writeToAPI} currentUser={this.props.currentUser} deleteBasket={this.deleteBasket}/>
					<Slider name="slider3" disabled={true} value={1} />
				</div>
			);
		}.bind(this));
		if (baskets.length === 0) {
			return (
				<div className="container">
					<h3>You have no baskets</h3>
				</div>
			);
		} else {
			return (
				<div className="container">
					<h3>You have {this.state.baskets.length} Baskets Saved</h3>
					{baskets}
				</div>
			);
		};
	},
});

module.exports = UserBaskets;
