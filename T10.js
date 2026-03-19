// given json object in shape.txt file ,calculate perimeter of square and perimeter of circle .print ans in consol and peri.txt
const fs = require("fs");
var d = fs.readFileSync("shape.txt", "UTF-8");
var obj = JSON.parse(d);
var r = obj[0].diameter / 2;
var p_c = 2 * 3.14 * r;
var p_s = 4 * obj[1].side;
console.log(`perimeter of circle is ${p_c} & square is ${p_s}`);
fs.writeFileSync("peri.txt", `perimeter of circle is ${p_c} & square is ${p_s}`);