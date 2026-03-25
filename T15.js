// for u1 find is year is leap year or not
// for u2 find average of m1,m2,m3
const url=require("url")
var u1 = "http://google.com:80/demo.phop?year=2024&month=feb";
var u2 = "http://localhost:8080/some?m1=20&m2=40&m3=60";

var pu = url.parse(u1,true)
console.log(pu.query.year)
console.log(pu.query.month)
var y = pu.query.year;
var s = pu.query.month;
if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
    console.log(y + " is leap year");
else
    console.log(y + " is not leap year");

var po = url.parse(u2, true);
var m1 =parseInt(po.query.m1);
var m2 = parseInt(po.query.m2);
var m3 = parseInt(po.query.m3);
console.log("average of three number is:" + (m1 + m2 + m3) / 3);

