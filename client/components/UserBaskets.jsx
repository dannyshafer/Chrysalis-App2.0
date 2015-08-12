var React = require('react');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var UserBasketTable = require('./UserBasketTable.jsx');
var Slider = mui.Slider;

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

	updateBasket: function (asdf) {
		this.forceUpdate();
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
				<div>
					<UserBasketTable origin={this.props.origin} basket={basket} basket_info={info} writeToAPI={this.props.writeToAPI} currentUser={this.props.currentUser} updateBasket={this.updateBasket}/>
					<Slider name="slider3" disabled={true} value={1} />
				</div>
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