var React = require('react');
var ReactD3 = require('react-d3-components');
var PieChart = ReactD3.PieChart;

var RecommendedPieChart = React.createClass({
	getInitialState: function () {
		return {
			low: [],
			mid: [],
			high: [],
		};
	},
	render: function () {
		var data = {
			label: 'somethingA',
			values: [{x: 'SomethingA', y: 10}, 
			{x: 'SomethingB', y: 4}, 
			{x: 'SomethingC', y: 3}]
		};
		var sort = null;
		return (
			<div>
				<h4>Your Recommended Allocation</h4>
				<PieChart
				data={data}
				width={600}
				height={400}
				margin={{top: 10, bottom: 10, left: 100, right: 100}}
				sort={sort} />
			</div>
		);
	},
});

module.exports = RecommendedPieChart;