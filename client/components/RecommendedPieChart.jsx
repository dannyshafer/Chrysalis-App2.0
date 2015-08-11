var React = require('react');
var ReactD3 = require('react-d3-components');
var PieChart = ReactD3.PieChart;

var RecommendedPieChart = React.createClass({
	getInitialState: function () {
		if (this.props.age <= 25) {
			var low = 2;
			var mid = 3;
			var high = 5;
		} else if (this.props.age <= 40) {
			var low = 3;
			var mid = 5;
			var high = 2;
		} else if (this.props.age <= 60) {
			var low = 4;
			var mid = 5;
			var high = 1;
		} else {
			var low = 6;
			var mid = 3;
			var high = 1;
		}
		return {
			low: low,
			mid: mid,
			high: high,
		};
	},
	render: function () {
		var data = {
			label: 'somethingA',
			values: [{x: 'Low-Risk', y: this.state.low}, 
			{x: 'Mid-Risk', y: this.state.mid}, 
			{x: 'High-Risk', y: this.state.high}]
		};
		var sort = null;
		return (
			<div>
				<h4>Your Recommended Allocation</h4>
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

module.exports = RecommendedPieChart;