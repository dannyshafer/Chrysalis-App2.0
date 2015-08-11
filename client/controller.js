var objectAssign = require('object-assign');
var EventEmitter = require('eventemitter3');
var EE = new EventEmitter();


!function(){

	var Controller = {};

	Object.assign(Controller. EventEmitter.prototype);

	Controller.addToBasket: function () {
		console.log('added');
		EE.emit('added-to-basket');
	};
	Controller.addToBasket();
}();

module.exports = Controller;