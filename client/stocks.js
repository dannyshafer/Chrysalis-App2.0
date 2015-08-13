var EventEmitter = require('eventemitter3');
var objectAssign = require('object-assign');

var Stocks = function(){
  this.stocks = [];
};

objectAssign(Stocks.prototype, EventEmitter.prototype);

Stocks.prototype.addToStocks = function(stock){
  this.stocks.push(stock);
  this.emit('change');
  return this;
};

module.exports = Stocks;

