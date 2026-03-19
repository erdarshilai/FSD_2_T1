const fs = require("fs");
fs.mkdirSync("mydir");
fs.writeFileSync("mydir/f1.txt", "Hello World");
fs.appendFileSync("mydir/f1.txt", "Good Morning");
fs.copyFileSync("mydir/f1.txt", "mydir/f2.txt");
var d1 = fs.readFileSync("mydir/f1.txt", "utf-8");
var d2 = fs.readFileSync("mydir/f2.txt", "utf-8");
console.log(d1);
console.log(d2);
fs.renameSync("mydir/f2.txt", "mydir/fn.txt");
// fs.unlinkSync("mydir/f1.txt");
// fs.rmSync("mydir", { "recursive": true });



