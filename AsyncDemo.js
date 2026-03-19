const fs = require("fs");
fs.mkdir("mydir", (err) => {});
fs.writeFile("mydir/f1.txt", "Hello World", (err) => { });
fs.appendFile("mydir/f1.txt", "Good Morning", (err) => {});
fs.copyFile("mydir/f1.txt", "mydir/f2.txt", (err) => {});
var d1 = fs.readFile("mydir/f1.txt", "utf-8", (err, data1) => {
    if (err)
        console.log("cant read" + err);
    console.log("Your data is:" + data1);
    
});
var d2 = fs.readFile("mydir/f2.txt", "utf-8", (err, data2) => {
    if (err)
        console.log("cant read" + err);
    console.log("Your data is:" + data2);
    
});
fs.rename("mydir/f2.txt", "mydir/fn.txt", (err) => {});
// fs.unlink("mydir/f1.txt");
// fs.rm("mydir", { "recursive": true });



