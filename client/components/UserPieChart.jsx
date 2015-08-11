var React = require('React');
var ReactD3 = require('react-d3-components');
var PieChart = ReactD3.PieChart;

var UserPieChart = React.createClass({
	getInitialState: function () {
		return {
			low: 3,
			mid: 3,
			high: 4,
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