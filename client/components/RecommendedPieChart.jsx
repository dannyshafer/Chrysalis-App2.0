var React = require('react');
// var ReactD3 = require('react-d3-components');
// var PieChart = ReactD3.PieChart;

// Chart js
var DoughnutChart = require("react-chartjs-commonjs").Doughnut;

var RecommendedPieChart = React.createClass({
	getInitialState: function () {
		switch (true) {
			case this.props.age >= 18 && this.props.age < 20:
				var low = 1;
				var mid = 2;
				var high = 7;
				break;
			case this.props.age >= 20 && this.props.age < 25:
				var low = 2;
				var mid = 2;
				var high = 6;
				break;
			case this.props.age >= 25 && this.props.age < 30:
				var low = 3;
				var mid = 1;
				var high = 6;
				break;
			case this.props.age >= 30 && this.props.age < 35:
				var low = 2;
				var mid = 3;
				var high = 5;
				break;
			case this.props.age >= 35 && this.props.age < 40:
				var low = 3;
				var mid = 2;
				var high = 5;
				break;
			case this.props.age >= 40 && this.props.age < 45:
				var low = 2;
				var mid = 4;
				var high = 4;
				break;
			case this.props.age >= 45 && this.props.age < 50:
				var low = 2;
				var mid = 4;
				var high = 4;
				break;
			case this.props.age >= 50 && this.props.age < 55:
				var low = 3;
				var mid = 4;
				var high = 3;
				break;
			case this.props.age >= 55 && this.props.age < 60:
				var low = 4;
				var mid = 3;
				var high = 3;
				break;
			case this.props.age >= 60 && this.props.age < 65:
				var low = 6;
				var mid = 2;
				var high = 2;
				break;
			case this.props.age >= 65:
				var low = 7;
				var mid = 1;
				var high = 2;
				break;
		};
		return {
			low: low,
			mid: mid,
			high: high,
		};
	},
	// render: function () {
	// 	var data = {
	// 		label: 'Recommended Allocation',
	// 		values: [{x: 'Low-Risk', y: this.state.low}, 
	// 		{x: 'Mid-Risk', y: this.state.mid}, 
	// 		{x: 'High-Risk', y: this.state.high}]
	// 	};
	// 	var sort = null;
	// 	return (
	// 		<div>
	// 			<h4>Your Recommended Allocation</h4>
	// 			<PieChart
	// 			data={data}
	// 			width={500}
	// 			height={350}
	// 			margin={{top: 10, bottom: 10, left: 100, right: 100}}
	// 			sort={sort} />
	// 		</div>
	// 	);
	// },
	render: function () {
		var chartData = [
											{
											    value: this.state.low,
											    color:"#F7464A",
											    highlight: "#FF5A5E",
											    label: "Low-Risk",
											    labelColor : 'white',
											    labelFontSize : '16'
											},
											{
											    value: this.state.mid,
											    color: "#46BFBD",
											    highlight: "#5AD3D1",
											    label: "Mid-Risk",
											    labelColor : 'white',
											    labelFontSize : '16'
											},
											{
											    value: this.state.high,
											    color: "#FDB45C",
											    highlight: "#FFC870",
											    label: "High-Risk",
											    labelColor : 'white',
											    labelFontSize : '16'
											}
										]
		var chartOptions = {
										    //Boolean - Whether we should show a stroke on each segment
										    segmentShowStroke : true,

										    //String - The colour of each segment stroke
										    segmentStrokeColor : "#fff",

										    //Number - The width of each segment stroke
										    segmentStrokeWidth : 2,

										    //Number - The percentage of the chart that we cut out of the middle
										    percentageInnerCutout : 50, // This is 0 for Pie charts

										    //Number - Amount of animation steps
										    animationSteps : 100,

										    //String - Animation easing effect
										    animationEasing : "easeOutBounce",

										    //Boolean - Whether we animate the rotation of the Doughnut
										    animateRotate : true,

										    //Boolean - Whether we animate scaling the Doughnut from the centre
										    animateScale : false,

										    responsive: true,
										    maintainAspectRatio: true,
										}
		return (
			<DoughnutChart data={chartData} options={chartOptions} />
		);
	},
});

module.exports = RecommendedPieChart;