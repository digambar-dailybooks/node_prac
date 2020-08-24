var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Play songs!');
}

//Assign the event handler to an event:
eventEmitter.on('Play', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('Play');