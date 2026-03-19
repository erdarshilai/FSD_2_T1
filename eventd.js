const EventEmitter = require("events");
const ee = new EventEmitter();
function f1() { 
    console.log("hello world");   
}
function f2() { 
    console.log("Bye Aniket");   
}
ee.on("hello", f1);
ee.on("hello", f2);
ee.on("hello", f1);
ee.emit("hello");
console.log(ee.listenerCount("hello"));
ee.removeListener("hello", f1);
console.log("after remove" + ee.listenerCount("hello"));
ee.removeAllListeners("hello");
console.log("after remove" + ee.listenerCount("hello"));


ee.on("bye", (n) => { console.log("byeeeeeeee   "+n); });
ee.emit("bye","dhruvi");


ee.on("bye", (n, a) => { console.log("byeee "+ n +"Today is "+a);
})
ee.emit("bye", "dhruvi");
ee.emit("bye", "dhruvi ","thursday");
