var React = require('react');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var UserBaskets = React.createClass({
	getInitialState: function () {
		return {

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

	},

	readUserBasketsFromAPI: function () {
		var uid = this.props.currentUser.uid
		this.props.readFromAPI(this.props.origin + '/users/' + uid + '/baskets', function(info){
		  this.setState({


		  });
		}.bind(this));
	},

	render: function () {
		return (
			<div>
				<h3>Your Baskets</h3>
			</div>
		);
	},
});

module.exports = UserBaskets;