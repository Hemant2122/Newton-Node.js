// NOTE: importing http or os imports the OBJECT of http and os
// but require(events) imports add EventEmitter class and not OBJECT

const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// On this emitter object we can listen to an event and we can FIRE an event also,

// EVENT LISTNER 

// attention in my OWN EVENT (I created that)

emitter.on("attention", (data) => {
    console.log("okey in the attention postion", data);
});



// MESSAGE SENDER

emitter.emit("attention", 100);