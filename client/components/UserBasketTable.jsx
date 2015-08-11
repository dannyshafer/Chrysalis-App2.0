var React = require('react');
var mui = require('material-ui');

var ThemeManager = new mui.Styles.ThemeManager();
var Table = mui.Table;


var UserBasketTable = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function () {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	render: function () {

		var basket = this.props.basket
		console.log(basket);
		// var rowData = [
		//   {id: {content: '1'}, name: {content: 'John Smith'}, status: {content: 'Employed'}},
		// ];

		var rowData = []
		this.props.basket.map(function (stock, index) {
			rowData.push({ticker: {content: stock.ticker}, 
									  name: {content: stock.name},
									  ask: {content: stock.ask},
									  beta: {content: stock.beta},
									  eps: {content: stock.eps},
									})
		})
		console.log(rowData)

		this.state = {
		  fixedHeader: true,
		  fixedFooter: true,
		  stripedRows: false,
		  showRowHover: true,
		  selectable: false,
		  multiSelectable: false,
		  canSelectAll: false,
		  deselectOnClickaway: true,
		  height: '300px',
		  rowData: rowData
		};

		var headerCols = {
		  ticker: {
		    content: 'Ticker',
		    tooltip: 'The Ticker'
		  },
		  name: {
		    content: 'Name',
		    tooltip: 'The Name'
		  },
		  ask: {
		    content: 'Ask',
		    tooltip: 'The Ask Price'
		  },
		  beta: {
		    content: 'Beta',
		    tooltip: 'The Beta'
		  },
		  eps: {
		    content: 'EPS',
		    tooltip: 'Earnings per Share'
		  },
		};
		var colOrder = ['ticker', 'name', 'ask', 'beta', 'eps'];
		// var footerCols = {ticker: {content: 'Ticker'}, name: {content: 'Name'}, status: {content: 'Status'}};
		return (
			<div>
				<Table
				  headerColumns={headerCols}
				  columnOrder={colOrder}
				  rowData={this.state.rowData}
				  height={this.state.height}
				  fixedHeader={this.state.fixedHeader}
				  fixedFooter={this.state.fixedFooter}
				  stripedRows={this.state.stripedRows}
				  showRowHover={this.state.showRowHover}
				  selectable={this.state.selectable}
				  multiSelectable={this.state.multiSelectable}
				  canSelectAll={this.state.canSelectAll}
				  deselectOnClickaway={this.state.deselectOnClickaway}
				  onRowSelection={this._onRowSelection} />
			</div>
		);
	},
});

module.exports = UserBasketTable

