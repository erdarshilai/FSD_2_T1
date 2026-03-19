// create an event "con" which displays "connection succesful".if above line is displayed fire event dr that displays data recieved.finally print thank you.
const EventEmitter = require("events");
const ee = new EventEmitter();
ee.on("con", () => {
    console.log("connection succesful");
    ee.emit("dr")
})
ee.on("dr", () => {
    console.log("data recieved");
})
ee.emit("con");
console.log("Thank You");