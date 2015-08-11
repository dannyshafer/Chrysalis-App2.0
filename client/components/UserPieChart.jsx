var React = require('react');
var ReactD3 = require('react-d3-components');
var PieChart = ReactD3.PieChart;

var Basket = require('../basket.js');

var UserPieChart = React.createClass({
	getInitialState: function () {
		return {
			low: 0,
			mid: 0,
			high: 0,
			none: 10,
			basket: this.props.basket
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
		console.log(this.state.basket)
		for (var i = 0; i < this.state.basket.stocks.length; i++) {
			if (1 <= this.state.basket.stocks[i].asi_component && this.state.basket.stocks[i].asi_component <= 3) {
				low += 1
			} else if (4 <= this.state.basket.stocks[i].asi_component && this.state.basket.stocks[i].asi_component <= 7) {
				mid += 1
			} else if (8 <= this.state.basket.stocks[i].asi_component && this.state.basket.stocks[i].asi_component <= 10) {
				high += 1
			};
		};

		this.setState({
			low: low/total,
			mid: mid/total,
			high: high/total,
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
		if (this.state.none === 10) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'None is added', y: this.state.none}]
			};
		} else if (this.state.low === 0 && this.state.mid === 0) {
			var data = {
				label: 'somethingA',
				values: [ 
				{x: 'High-Risk', y: this.state.high}]
			};
		} else if (this.state.low === 0 && this.state.high === 0) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'Mid-Risk', y: this.state.mid}]
			};
		} else if (this.state.mid === 0 && this.state.high === 0) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'Low-Risk', y: this.state.low}]
			};
		} else if (this.state.low === 0) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'Mid-Risk', y: this.state.mid}, 
				{x: 'High-Risk', y: this.state.high}]
			};
		} else if (this.state.mid === 0) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'Low-Risk', y: this.state.low}, 
				{x: 'High-Risk', y: this.state.high}]
			};
		} else if (this.state.high === 0) {
			var data = {
				label: 'somethingA',
				values: [
				{x: 'Low-Risk', y: this.state.low}, 
				{x: 'Mid-Risk', y: this.state.mid}]
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


