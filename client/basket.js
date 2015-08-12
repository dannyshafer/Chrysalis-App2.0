var EventEmitter = require('eventemitter3');
var objectAssign = require('object-assign');


var Basket = function(){
  this.stocks = [];
};

objectAssign(Basket.prototype, EventEmitter.prototype);

Basket.prototype.addToBasket = function(stock){
  this.stocks.push(stock);
  this.emit('change');
  return this;
};

module.exports = Basket;

