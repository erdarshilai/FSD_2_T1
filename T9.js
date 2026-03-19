// given numbers.txt file ,read the numbers print the sorted values and the maximum no in console and also append both at the end of the file 
const fs = require("fs");
var d = fs.readFileSync("nos.txt", "utf-8")
var arr = d.split(" ");
var s = arr.sort((a, b) => a - b);
console.log("Sorted array" + s);
console.log("Max element is" + s[s.length - 1]);
fs.appendFileSync("nos.txt", "\nsorted array:" + s.toString());
// fs.appendFileSync("nos.txt", `\nsorted array:${s}`);
fs.appendFileSync("nos.txt","\nmaximum no:"+s[s.length-1])



