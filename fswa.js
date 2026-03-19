const fs = require("fs");
// console.log("start");
// fs.writeFileSync("a2.txt", "This is line 1");
// fs.writeFileSync("a2.txt", "\nthis is line 2");
// fs.appendFileSync("a2.txt","\nappending some text")
// console.log("end");

console.log("Start");
fs.writeFile("a3.txt", "This is line 1", (err) => {
    if (err)
        console.log("write unsuccesful" + err);
    console.log("write succesful");
});
fs.appendFile("a3.txt", "\nAppending file", (err) => {
    if (err)
        console.log("write unsuccesful" + err);
    console.log("append succesful");
})
console.log("End");
