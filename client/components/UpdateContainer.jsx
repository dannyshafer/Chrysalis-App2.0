var React = require('react');

var UpdateContainer = React.createClass({
	handleUpdateStocks: function(e) {
		e.preventDefault();
		alert('hey!');
		this.props.readFromAPI(this.props.origin + '/stocks/update', function(info){
			console.log('update stocks')
		}.bind(this));
	},
	render: function () {
		return (
			<div>
				<h1>UpdateContainer</h1>
				<button onClick={this.handleUpdateStocks}>Update Stocks</button>
			</div>
		);
	},
});

module.exports = UpdateContainer;