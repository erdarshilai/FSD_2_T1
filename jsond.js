var str = '{"fname":"Darshil","last name":"Shiyani","DOB":"20-02-2007"}';
console.log(str.fname);
var a = JSON.parse(str)
console.log(a.fname);

var ds = require("./T1.json");
console.log(ds.DataStructures[0].Name);
console.log(ds.DataStructures[0].course + " to " + ds.DataStructures[0].content[1] + " in " + ds.xyz.Topic[0]);
count=0
if (ds.DataStructures[0, 1].content == "B") { 
    count++
}
console.log(count);
