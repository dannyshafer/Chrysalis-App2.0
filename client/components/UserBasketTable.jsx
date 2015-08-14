var React = require('react');
var mui = require('material-ui');

var ThemeManager = new mui.Styles.ThemeManager();
var Table = mui.Table;
var RaisedButton = mui.RaisedButton;


var UserBasketTable = React.createClass({

	childContextTypes: {
		muiTheme: React.PropTypes.object
	},

	getChildContext: function () {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},

	deleteBasket: function () {
		this.props.deleteBasket(this.props.basket.id);
	},

	render: function () {
		var basket = this.props.basket
		var rowData = []
		this.props.basket.records.map(function (stock, index) {
			rowData.push({ticker: {content: stock.ticker},
									  name: {content: stock.name},
									  ask: {content: stock.ask},
									  beta: {content: stock.beta},
									  eps: {content: stock.eps},
									  asi: {content: stock.asi_component}
									})
		})

		var height = 80 + 30 * basket.length;

		this.state = {
		  fixedHeader: true,
		  fixedFooter: true,
		  stripedRows: false,
		  showRowHover: true,
		  selectable: false,
		  multiSelectable: false,
		  canSelectAll: false,
		  deselectOnClickaway: true,
		  height: String(height),
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
		  asi: {
		    content: 'ASI',
		    tooltip: 'AuShafer Index'
		  },

		};
		var colOrder = ['ticker', 'name', 'ask', 'beta', 'eps', 'asi'];
		// var footerCols = {ticker: {content: 'Ticker'}, name: {content: 'Name'}, status: {content: 'Status'}};
		return (
			<div>
				<h4 className="basket-description">{this.props.basket.name} created at {this.props.basket.date} {this.props.basket.performance}</h4>
				<Table
				  headerColumns={headerCols}
				  columnOrder={colOrder}
				  rowData={this.state.rowData}
				  height={this.state.height}
				  fixedHeader={this.state.fixedHeader}
				  fixedFooter={this.state.fixedFooter}
				  stripedRows={this.state.stripedows}
				  showRowHover={this.state.showRowHover}
				  selectable={this.state.selectable}
				  multiSelectable={this.state.multiSelectable}
				  canSelectAll={this.state.canSelectAll}
				  deselectOnClickaway={this.state.deselectOnClickaway}
				  onRowSelection={this._onRowSelection} />
				  <br />
				  <RaisedButton label="Delete Basket" primary={true} onClick={this.deleteBasket}/>
			</div>
		);
	},
});

module.exports = UserBasketTable

