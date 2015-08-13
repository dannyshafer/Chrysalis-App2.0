var React = require('react');

var DoughnutChart = require("react-chartjs-commonjs").Doughnut;

// Components
var mui = require('material-ui');
var Basket = require('../basket.js');
var TextField = mui.TextField;
var ThemeManager = new mui.Styles.ThemeManager();
var LinearProgress = mui.LinearProgress;

var UserPieChart = React.createClass({
	getInitialState: function () {
		return {
			low: 0,
			mid: 0,
			high: 0,
			none: 10,
			low_num: 0,
			mid_num: 0,
			high_num: 0,
			basket: this.props.basket
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

	componentDidMount: function(){
	  this.state.basket.on('update-chart', this.handleAddBasket);
	},

	componentWillUnmount: function(){
	  this.state.basket.off('update-chart');
	},

	handleAddBasket: function () {
		var total = this.state.basket.stocks.length
		var low = 0;
		var mid = 0;
		var high = 0;
		var low_num = 0;
		var mid_num = 0;
		var high_num = 0;
		for (var i = 0; i < this.state.basket.stocks.length; i++) {
			if (1 <= this.state.basket.stocks[i].asi_component && this.state.basket.stocks[i].asi_component <= 3) {
				low += 1
				low_num += 1
			} else if (4 <= this.state.basket.stocks[i].asi_component && this.state.basket.stocks[i].asi_component <= 7) {
				mid += 1
				mid_num += 1
			} else if (8 <= this.state.basket.stocks[i].asi_component && this.state.basket.stocks[i].asi_component <= 10) {
				high += 1
				high_num += 1
			};
		};

		this.setState({
			low: low/total,
			mid: mid/total,
			high: high/total,
			low_num: low_num,
			mid_num: mid_num,
			high_num: high_num,
			none: 0,
		})
	},


	readUserBasketFromAPI: function () {
		var uid = this.props.currentUser.uid
		this.props.readFromAPI(this.props.origin + '/users/' + uid + '/baskets/today', function(info){
		  this.setState({risk_preference: info.risk_preference, age: info.age});
		}.bind(this));
	},

	render: function () {
		var chartData = [
											{
											    value: this.state.low_num,
											    color:"#F7464A",
											    highlight: "#FF5A5E",
											    label: "Low-Risk",
											    labelColor : 'white',
											    labelFontSize : '16'
											},
											{
											    value: this.state.mid_num,
											    color: "#46BFBD",
											    highlight: "#5AD3D1",
											    label: "Mid-Risk",
											    labelColor : 'white',
											    labelFontSize : '16'
											},
											{
											    value: this.state.high_num,
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
										    animationEasing : "linear",

										    //Boolean - Whether we animate the rotation of the Doughnut
										    animateRotate : false,

										    //Boolean - Whether we animate scaling the Doughnut from the centre
										    animateScale : false,

										    responsive: true,
										    maintainAspectRatio: true,
										};
		if (this.state.low_num === 0 && this.state.mid_num === 0 && this.state.high_num === 0) {
			return (
				<div>
					<h4>Currently Selected Allocation</h4>
					<p>No stock is selected yet...</p>
					<LinearProgress mode="indeterminate"  />
				</div>
			)
		} else {
			return (
				<div>
					<h4>Currently Selected Allocation</h4>
					<DoughnutChart data={chartData} options={chartOptions} />
				</div>
			);
		}
	},
});

module.exports = UserPieChart;


