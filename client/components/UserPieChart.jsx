var React = require('React');
var ReactD3 = require('react-d3-components');
var PieChart = ReactD3.PieChart;

var UserPieChart = React.createClass({
	getInitialState: function () {
		return {
			low: 0,
			mid: 0,
			high: 0,
			none: 10,
		};
	},

	handleAddBasket: function (level) {
		var total = this.state.low + this.state.mid + this.state.high
		if (level === "low") {

		}
	},

	componentDidMount: function () {

	},

	readUserBasketFromAPI: function () {
		var uid = this.props.currentUser.uid
		this.props.readFromAPI(this.props.origin + '/users/' + uid + '/baskets/today', function(info){
		  this.setState({risk_preference: info.risk_preference, age: info.age});
		}.bind(this));
	},

	componentWillUnmount: function () {

	},

	handleAddedToBasket: function (value) {
	  console.log('message recieved + ' + value)
	},

	render: function () {
		if (this.state.none === 10) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'None is added', y: this.state.none}]
			};
		} else {
			var data = {
				label: 'somethingA',
				values: [{x: 'Low-Risk', y: this.state.low}, 
				{x: 'Mid-Risk', y: this.state.mid}, 
				{x: 'High-Risk', y: this.state.high}]
			};
		};
		var sort = null;
		return (
			<div>
				<h4>Your Currently Selected Allocation</h4>
				<PieChart
				data={data}
				width={500}
				height={350}
				margin={{top: 10, bottom: 10, left: 100, right: 100}}
				sort={sort} />
			</div>
		);
	},
});

module.exports = UserPieChart;


