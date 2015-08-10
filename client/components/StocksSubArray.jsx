var React = require('react');

var StocksSubArray = React.createClass({
	render: function () {
		var stocks = this.props.stocks.map(function (stock, index) {
			return (
				<li key={index}>
					{stock}
				</li>
			);
		}.bind(this));
		return (
			<div>
				<ul>
					{stocks}
				</ul>
			</div>
		);
	},

});

module.exports = StocksSubArray;