var EventEmitter = require('eventemitter3');
var objectAssign = require('object-assign');


Basket = function(){
  this.stocks = [];
};

objectAssign(Basket.prototype, EventEmitter.prototype);

Basket.prototype.addToBasket = function(stock){
  this.stocks.push(stock);
  this.emit('added-to-basket');
  return this;
};


module.exports = Basket;


!function(){
	console.log('alsdijflaskdjf')
}();