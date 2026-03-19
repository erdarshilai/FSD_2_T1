var path = require("path");
var p = "D:/LJU/abc/test/f1.txt"
console.log(path.dirname(p));
console.log(path.basename(p));
var b = path.basename(p);
var ar = b.split(".");
console.log("Name of file is:" + ar[0]);
console.log(path.extname(p));
var po = path.parse(p);
console.log(po);
console.log("Root of path is:"+po.root);








