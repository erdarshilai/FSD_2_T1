// given a path lju/abc/f1.txt,extract name of folder and created in your current folder.find file,create it inside this new location and write some data inside in it ,copy this file ,print data in console print data in console and delete original file 
const fs = require("fs");
const path = require("path");
var p = "LJU/abc/f1.txt";
var dir = path.dirname(p);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { "recursive": true });
}
var fname = path.basename(p);
// var c_p = dir + "/" + fname;
var c_p = path.join(dir, fname);
fs.writeFileSync(c_p, "hello World")
var data = fs.readFileSync(c_p, "UTF-8");
console.log(data);
fs.copyFileSync(c_p, path.join(dir, "f2.txt"));
fs.unlinkSync(c_p);