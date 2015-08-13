var React = require('react');

var UserBasketTable = require('./UserBasketTable.jsx');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Slider = mui.Slider;
var LinearProgress = mui.LinearProgress;

var UserBaskets = React.createClass({
	getInitialState: function () {
		return {
			baskets: [],
			basket_info: [],
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

	// updateBasket: function () {
	// 	this.readUserBasketsFromAPI();
	// },

	componentDidMount: function () {
		this.readUserBasketsFromAPI();
	},

	updateBasket: function (id) {
		var uid = this.props.currentUser.uid
		var data = {id: id}
		this.props.writeToAPI(this.props.origin + '/users/' + uid + '/baskets/' + id, 'delete', JSON.stringify(data), function(message){
			alert('Basket Deleted');
			this.readUserBasketsFromAPI();
		}.bind(this));

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
				<div className="container">
					<UserBasketTable key={basket.id} origin={this.props.origin} basket={basket} basket_info={info} writeToAPI={this.props.writeToAPI} currentUser={this.props.currentUser} updateBasket={this.updateBasket}/>
					<Slider name="slider3" disabled={true} value={1} />
				</div>
			);
		}.bind(this));
		if (this.state.baskets.length === 0) {
			return (
				<div className="container">
					<h3>Loading Your Baskets...</h3>
					<LinearProgress mode="indeterminate"  />
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
